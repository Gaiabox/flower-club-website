import Link from "next/link";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
type Props = { title:string; headline:string; intro:string; items:string[][]; proof:string; href:string; faqs:string[][]; inquiry:string; path:string };
export default function ServiceLanding(p:Props) {
  return <div className="bg-cream text-navy pt-36 pb-24">
    <BreadcrumbSchema items={[{name:"Home",url:SITE.url},{name:"Services",url:SITE.url+"/services"},{name:p.title,url:SITE.url+p.path}]} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"Service",name:p.title,description:p.intro,url:SITE.url+p.path,provider:{"@id":SITE.url+"/#organization"},areaServed:[{"@type":"City",name:"Charlotte"},{"@type":"Country",name:"United States"}]}).replace(/</g,"\\u003c")}} />
    <div className="section-padding max-w-6xl mx-auto">
      <p className="label mb-5">{p.title}</p><h1 className="text-display-lg font-bold max-w-4xl mb-7">{p.headline}</h1>
      <p className="text-xl text-navy/85 leading-relaxed max-w-3xl mb-8">{p.intro}</p>
      <Link href={`/contact?type=${p.inquiry}`} className="btn-primary">Discuss your project</Link>
      <section className="grid md:grid-cols-3 gap-10 py-16 my-10 border-y border-navy/20">{p.items.map(([title,body])=><div key={title}><h2 className="text-2xl font-bold mb-4">{title}</h2><p className="text-lg text-navy/85 leading-relaxed">{body}</p></div>)}</section>
      <section className="bg-navy text-cream p-8 md:p-12 mb-16"><h2 className="text-3xl font-bold mb-5">See what we build.</h2><p className="text-lg text-cream/90 mb-6">Explore the work and the role we played before deciding whether we are the right partner for your project.</p><Link href={p.href} className="underline underline-offset-4 text-lg">{p.proof} →</Link></section>
      <section><h2 className="text-display-sm font-bold mb-8">Before we begin.</h2><div className="max-w-4xl">{p.faqs.map(([q,a])=><div key={q} className="border-t border-navy/20 py-7"><h3 className="text-xl font-semibold mb-3">{q}</h3><p className="text-lg leading-relaxed text-navy/85">{a}</p></div>)}</div></section>
      <nav aria-label="Related services" className="flex flex-wrap gap-6 border-t border-navy/20 pt-8 mt-8">{[["/services/web-design","Web design"],["/services/brand-identity","Brand identity"],["/services/business-systems","Business systems"],["/services/charlotte/business-automation","Charlotte automation"]].filter(([url])=>url!==p.path).map(([url,label])=><Link key={url} href={url} className="underline underline-offset-4">{label}</Link>)}</nav>
    </div></div>;
}
