# SEO Action Plan: Mike Barefoot

The current score is 66/100. "Dev" means work that can be done now from existing facts. "Mike" means it is blocked on his input.

## Critical: before launch

| # | Action | Owner | Effort |
| --- | --- | --- | --- |
| 1 | Set `NEXT_PUBLIC_SITE_URL` for Production in Vercel, and make the production build fail if it's missing, so robots, noindex, schema and the sitemap can't silently fall back to staging | Dev + domain from Mike | 15 min |
| 2 | Add `alternates.canonical` to all pages, and have `/contact?topic=…` point to `/contact` | Dev | 15 min |
| 3 | Render all six KAIZEN panels in server HTML, hiding inactive ones with the `hidden` attribute (/ and /speaking) | Dev | 30 min |
| 4 | Publish a contact email, and set the Resend variables so the form works | Mike, then Dev | 15 min |

## High: within 1 week

| # | Action | Owner | Effort |
| --- | --- | --- | --- |
| 5 | Rewrite titles and meta descriptions with intent keywords (keynote speaker, leadership, Raleigh/North Carolina, kaizen), keeping descriptions at 160 characters or less | Dev | 30 min |
| 6 | Add a keyword eyebrow inside each H1 and keep the creative display line | Dev | 30 min |
| 7 | Build an `@id` schema graph with WebSite, Person (with awards), ProfilePage, Service ×2, BreadcrumbList and the podcast ItemList; escape `<` in JSON-LD (code in `schema.md`) | Dev | 1–2 h |
| 8 | Add `/llms.txt` (draft in `geo.md`) | Dev | 15 min |
| 9 | Add a "Who is Mike Barefoot?" 2–3 sentence block plus a quick-facts list in full sentences on / and /about | Dev | 1 h |
| 10 | Add a planner FAQ on /speaking or /contact: known facts now, then fee, travel and lead time from Mike | Dev + Mike | 1–2 h |
| 11 | Create `/speaking/kaizen-keynote`, the only open SERP niche, from existing keynote content | Dev | 2–3 h |

## Medium: within 1 month

| # | Action | Owner | Effort |
| --- | --- | --- | --- |
| 12 | Add VideoObject for the Campbell keynote and the reel (needs `uploadDate`) | Dev + Mike | 30 min |
| 13 | Add security headers and `poweredByHeader: false` | Dev | 15 min |
| 14 | Turn on image optimization or pre-encode WebP/AVIF, and add responsive sizes | Dev | 1 h |
| 15 | Reduce LCP render delay: don't fade the hero from opacity 0, hide the decorative kanji on mobile, and try `display: "optional"` on the serif font | Dev | 1 h |
| 16 | Expand /coaching past 800 words with formats, process and outcomes | Mike, then Dev | 2 h |
| 17 | Add topic pages for employee retention and for universities, built from site.ts | Dev | 3–4 h |
| 18 | Add sitemap `lastModified`, and per-page OG images for /speaking and /coaching | Dev | 1 h |
| 19 | Link the media features (USA Today, CareerBuilder, SIA) to their sources | Mike, then Dev | 30 min |
| 20 | Vary the repeated "Bring the KAIZEN playbook" CTA, and add contextual internal links from the About chapters | Dev | 30 min |

## Low: backlog

| # | Action | Owner |
| --- | --- | --- |
| 21 | Get listed on speaker directories (PepTalk, GigSalad, The Bash), and get links from Campbell, NC State and Wake Tech | Mike |
| 22 | Resolve the content conflicts: K = Knowledge or Kindness, RedZone spelling, Wake Tech letter author, undated talk years | Mike |
| 23 | Add a keynote transcript page, which gives AI engines citable passages | Dev |
| 24 | Add a privacy page, since the form collects personal data | Dev |
| 25 | After launch, verify Google Search Console, submit the sitemap, and run a drift baseline | Dev |
