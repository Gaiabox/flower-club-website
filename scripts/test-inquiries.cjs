const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const { NextRequest } = require('next/server');
const options = { SERVICES: ['Website'], BUDGETS: ['Under $5,000'] };
const source = ts.transpileModule(fs.readFileSync('src/app/api/inquiries/route.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
let calls = [];
let upstreamStatus = 200;
const sandbox = { exports: {}, require: name => name === '@/lib/inquiry-options' ? options : require(name), console: { error() {} }, AbortSignal, Date, Map, fetch: async (url, init) => { calls.push({ url, payload: JSON.parse(init.body) }); return { ok: upstreamStatus === 200, status: upstreamStatus }; } };
vm.runInNewContext(source, sandbox);
const valid = { name: 'Integration Test', email: 'james@theflowerclub.design', company: '', projectType: 'Website', budget: 'Under $5,000', message: 'Test only', website: '' };
async function submit(body, origin = 'https://theflowerclub.design') {
 return sandbox.exports.POST(new NextRequest('https://theflowerclub.design/api/inquiries', { method: 'POST', headers: { origin, 'content-type': 'application/json', 'x-nf-client-connection-ip': Math.random().toString() }, body: JSON.stringify(body) }));
}
(async () => {
 for (const email of ['', 'bad', 'a@b.com extra', 'a b@c.com']) assert.equal((await submit({ ...valid, email })).status, 400);
 assert.equal((await submit({ ...valid, website: 'bot' })).status, 400);
 assert.equal((await submit(valid, 'https://other.test')).status, 403);
 assert.equal((await submit({ ...valid, budget: 'unrecognized' })).status, 400);
 assert.equal(calls.length, 0);
 for (const source of ['contact', 'bud']) {
   assert.equal((await submit({ ...valid, source })).status, 200);
   const fields = Object.fromEntries(calls.at(-1).payload.fields.map(f => [f.name, f.value]));
   assert.equal(fields.email, valid.email);
   assert.equal(fields.service_requested, 'Website');
   assert.equal(fields.project_budget, 'Under $5,000');
   assert.match(fields.project_details, new RegExp(source === 'bud' ? 'Bud' : 'website contact form'));
 }
 upstreamStatus = 400;
 assert.equal((await submit(valid)).status, 502);
 console.log('PASS: invalid email, honeypot, origin, enum checks, both source mappings, upstream failure');
})().catch(error => { console.error(error); process.exit(1); });
