# Search discovery operations

## Account setup required
- Verify the production domain in Google Search Console and Bing Webmaster Tools. Build-time verification variables: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION and NEXT_PUBLIC_BING_SITE_VERIFICATION. DNS verification is an alternative.
- Submit https://theflowerclub.design/sitemap.xml after production deploy. Inspect the homepage, web-design, brand-identity, business-systems, Charlotte automation, and project URLs. Confirm indexed canonical and rendered content.
- Configure GA4 project_inquiry_success as a key event. Register discovery_source as an event-scoped custom dimension. Consent-gated attribution distinguishes ChatGPT, Perplexity, Claude, Gemini, Google, Bing, other referral, and direct/unknown. Missing referrers cannot be reliably attributed. Google AI traffic cannot be separated from ordinary Google search with this implementation.
- Check host logs for allowed search crawler requests; robots.txt does not override WAF rules.

## Business identity and reputation
Verify the existing Instagram and LinkedIn URLs belong to this business. Align the business name, Charlotte location, service descriptions, and website link. Claim or update a Google Business Profile only if the business meets Google's eligibility requirements. Request genuine project-specific reviews and client attribution; no fabricated reviews or paid recommendation claims. These external changes have not been performed.

## Buyer-question baseline
Record date, engine, exact question, location setting, cited URLs, whether Flower Club was mentioned, and inquiry outcomes. Repeat manually monthly; one response is not a ranking. No recurring automation is installed.
- Who can automate my business in Charlotte?
- Who can build a website and connect it to HubSpot in Charlotte?
- Who builds custom databases for small businesses in Charlotte?
- Who can automate affiliate onboarding?
- Which Charlotte studio can design my brand and website together?
- Who built the Fire & Ash Cigar Carts website?

No visibility baseline or rankings are claimed until these checks are recorded. Use Search Console impressions/clicks and consented referral-to-inquiry events alongside prompt observations.

## Content maintenance
Publish verified project scope and results only. Add quantified outcomes once the client supplies evidence and permission. Charlotte is the local priority; templated remote-city pages remain accessible but noindex until they have distinct supporting content. llms.txt is a factual directory, not a ranking mechanism. Sitemap lastmod is omitted instead of falsely marking every page updated on every build.
