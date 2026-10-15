# SEO Audit: Mike Barefoot, Leadership Speaker & Coach

**Date:** 2026-10-15
**What was audited:**
- A local production build of the current working tree, including uncommitted changes.
- Built with `NEXT_PUBLIC_SITE_URL=https://mikebarefootspeaks.net` and `VERCEL_ENV=production`, so it behaves like the launched site.
- Staging (barefoot.stagmkt.dev) is deliberately noindexed and was not audited for indexability.

**Pages crawled:** 5 indexable pages (/, /about, /speaking, /coaching, /contact), plus `/contact/thanks` (noindex, not linked).

**Business type:** personal brand: professional keynote speaker plus leadership/career coach. Based in Raleigh, NC, and serving clients nationally; not a local service business.

**Data sources:**
- crawl
- Lighthouse 12.8 (mobile, lab)
- four specialist reviews: content, schema, GEO/AI and SXO (full notes in this folder)

**Not available:**
- Google Search Console, CrUX field data and GA4 (no credentials)
- Moz or backlink data (no credentials, and the domain is not live)
- a drift baseline

## SEO Health Score: 66 / 100

| Category | Weight | Score | Weighted |
| --- | --- | --- | --- |
| Technical SEO | 22% | 72 | 15.8 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 58 | 11.6 |
| Schema / Structured Data | 10% | 38 | 3.8 |
| Performance (CWV) | 10% | 85 | 8.5 |
| AI Search Readiness | 10% | 58 | 5.8 |
| Images | 5% | 70 | 3.5 |
| **Total** | | | **66** |

The build is fast, accessible and server-rendered, and the copy is specific and first-hand, so the foundations are strong. Most of the lost points come from how the site is *labelled* for search engines, not from what it says:
- Titles and H1s never say "keynote speaker" or "Raleigh".
- Structured data is minimal.
- Five of the six KAIZEN principles are invisible to crawlers.

### Top 5 critical issues
1. **Launch configuration is a single point of failure.** `robots.ts` returns `Disallow: /` and every page gets `noindex` unless *both* `VERCEL_ENV=production` and `NEXT_PUBLIC_SITE_URL` are set. If the domain variable is missing at launch, the site is blocked from Google and AI crawlers. Schema, the sitemap and OG URLs would also fall back to barefoot.stagmkt.dev.
2. **No canonical tags on any page.** Internal links point to `/contact?topic=speaking`, `?topic=coaching` and similar, which creates duplicate URL variants with no canonical to consolidate them.
3. **KAIZEN content is client-only.** Only "Knowledge" is in the server HTML on / and /speaking. Authentic, Integrity, Zeal, Energy and No, with the integrity-over-fee story, the Munger story and the "50+ consultants" story, render only after a click. This is the signature framework, and crawlers and AI engines cannot see most of it.
4. **Titles and H1s carry no search intent.** "Speaking | Mike Barefoot" and the H1 "Elite discipline. Corporate strategy." contain none of: keynote, speaker, leadership, Raleigh, North Carolina, kaizen.
5. **No public contact route (trust).** `site.email` is null. The only path is a form that cannot send until the Resend environment variables are set. This is a trust signal for E-E-A-T and an AI-citation gap.

### Top 5 quick wins
1. Add `alternates.canonical` to every page's metadata (about 15 minutes).
2. Render all six KAIZEN panels in the HTML and hide inactive ones with `hidden` instead of unmounting them (about 30 minutes).
3. Rewrite the five `<title>`s and meta descriptions with intent keywords, keeping descriptions at 160 characters or less (about 30 minutes).
4. Add `/llms.txt` (a draft is in `geo.md`) and an `@id`-linked schema graph with WebSite, Person, ProfilePage, Service and BreadcrumbList (1–2 hours; code is in `schema.md`).
5. Add basic security headers in `next.config.ts`: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options`. Also set `poweredByHeader: false` (about 15 minutes).

---

## Technical SEO: 72

**Crawlability and indexability**
- With production environment variables set, robots.txt allows everything and references the sitemap. All AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) are allowed by default.
- Pages are statically prerendered. /contact and /contact/thanks are dynamic. All content except the KAIZEN tabs is in the initial HTML.
- An unknown URL returns a real **404**.
- `/contact/thanks` is `noindex`, and it's correctly absent from the sitemap.
- **Launch risk:** indexability depends on two environment variables (see Critical #1). Add a pre-launch check, or fail the build when `VERCEL_ENV=production` and `NEXT_PUBLIC_SITE_URL` is unset.

**Canonicals and duplicates**
- There are no `<link rel="canonical">` tags.
- `?topic=` variants of /contact are internally linked from about 10 places.

**Sitemap**
- It is valid and lists the five indexable pages.
- It has no `<lastmod>`. Google ignores the `changefreq` and `priority` it does have. Add `lastModified`.

**Security** (on Vercel staging)
- HSTS is present. There is no `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP or frame protection.
- `X-Powered-By: Next.js` is exposed.

**Other**
- There is one console error: `/_vercel/insights/script.js` returns 404 on the local build. That's expected outside Vercel, and it's fine once deployed with Web Analytics enabled.

## Content Quality: 74 (see `content.md`)

**E-E-A-T scores (out of 100)**
- **Experience, 92.** First-hand stories, real stage photography and video.
- **Expertise, 78.** Credentials exist but are scattered. There's no quick-facts block.
- **Authoritativeness, 72.** Named Campbell and NC State testimonials, and four podcast appearances. But "60+ media features" and "$50M+" link to nothing, and the Wake Tech quote is unsigned.
- **Trust, 62.** No email or phone, no stated response time, open TODO conflicts (K = Knowledge or Kindness, RedZone vs Red Zone), and no privacy page.

**Word counts:** / 1,150, /about 1,122, /speaking 1,184, /coaching **415** (thin for a service page), /contact 238 (acceptable for a form page, but it would benefit from a planner FAQ).

**Duplication**
- "Bring the KAIZEN playbook to your stage." is the CTA on three pages.
- The KAIZEN explorer appears on both / and /speaking.
- Neither is a penalty risk, but vary the CTA copy.

**Readability:** about grade 8–9, good. The copy is specific, so the risk of it reading as AI-written is low.

## On-Page SEO: 58

| Page | Title (length) | Meta description | H1 |
| --- | --- | --- | --- |
| / | Mike Barefoot — Leadership Speaker & Coach (42) | 165 characters, a little long | "The dojo and the boardroom run on the same playbook." |
| /about | About \| Mike Barefoot (21) | 170 characters, long | "Life isn't linear. Discipline is." |
| /speaking | Speaking \| Mike Barefoot (24) | **197 characters, truncated** | "Elite discipline. Corporate strategy." |
| /coaching | Coaching \| Mike Barefoot (24) | 168 characters, long | "One micro action. Every day." |
| /contact | Contact \| Mike Barefoot (23) | 76 characters, short | "Let's talk about your next 12 months." |

- There is exactly one H1 per page and the hierarchy is clean. /contact has no H2s.
- The H1s are creative but carry no keywords. Keep the display line, and put a keyword-bearing eyebrow inside the H1, for example `<h1><span class="eyebrow">Leadership keynote speaker · Raleigh, NC</span> Elite discipline. Corporate strategy.</h1>`.
- "Raleigh" or "North Carolina" appears in no title, H1 or meta description.
- **Internal linking** is mostly navigation, header and footer. The About chapters and the topics have few contextual links to /speaking and /contact.

## Schema / Structured Data: 38 (see `schema.md`)

**Present:** one valid `Person` with `sameAs` (YouTube, LinkedIn, Instagram), `alumniOf` and `knowsAbout`. It's identical on every page, has no `@id`, and is injected without escaping `<`.

**Add, using only facts already in `site.ts`:**
- A WebSite node.
- An `@id`-linked Person, with `award` built from the honors lists.
- ProfilePage on /about.
- Service nodes for speaking and coaching, with no prices.
- BreadcrumbList.
- An ItemList of the podcast appearances on /speaking.
- VideoObject for the Campbell keynote and the reel. This is Google-eligible, but it needs `uploadDate`; ask Mike, or read it from YouTube.

**Do not add:**
- Review or AggregateRating on the testimonials (self-serving, not eligible).
- HowTo (deprecated).
- Event (no future dated events).

## Performance (CWV): 85

| Page | Perf | A11y | Best practices | SEO | LCP (lab) | CLS | TBT | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| / | 93 | 97 | 96 | 100 | 3.2 s | 0 | 20 ms | 1,036 KiB (includes hero video) |
| /about | 95 | 96 | 96 | 100 | 2.9 s | 0 | 10 ms | 308 KiB |
| /speaking | 93 | 97 | 96 | 100 | 3.2 s | 0 | 10 ms | 492 KiB |
| /coaching | 95 | 96 | 96 | 100 | 2.9 s | 0 | 10 ms | 358 KiB |
| /contact | 96 | 97 | 96 | 100 | 2.8 s | 0 | 10 ms | 320 KiB |

- In the lab, LCP is in the "needs improvement" band. The earlier live staging measurement was 2.7 s.
- LCP is **text**: the header wordmark on /, and a decorative vertical kanji on /about and /speaking. Almost all of the time is *render delay* (2.5–2.8 s); load delay is zero.
- Likely causes are web-font swapping (Instrument Serif) and the `animate-hero-in` fade, which starts at opacity 0.
- Options:
  - Start the hero fade from a visible state, or apply it only to secondary elements.
  - Make the decorative kanji `display:none` below `lg`.
  - Consider `display: "optional"` for the serif font.
- Confirm with CrUX field data after launch.
- CLS is 0 and INP risk is low (TBT ≤ 20 ms).
- The only JavaScript savings are minor: about 26 KiB unused and 13 KiB of legacy polyfills.

## Images: 70

- Every `<img>` has an `alt` attribute. Empty alts are intentional, on decorative images and the contact avatar beside Mike's name.
- `images: { unoptimized: true }` means no WebP/AVIF and no responsive `srcset`. Lighthouse flags `modern-image-formats` and `uses-responsive-images` on four pages.
- The heaviest files are mike-amaa-award.jpg (193 KB), mike-headshot.jpg (174 KB) and campbell-room.jpg (136 KB).
- Enable Next/Vercel image optimization, or pre-encode WebP/AVIF copies.
- The hero image is correctly preloaded, and below-the-fold images are lazy-loaded.
- Every page shares one OG image. Per-page OG images for /speaking and /coaching would improve social and AI previews.

## AI Search Readiness: 58 (see `geo.md`)

**What works**
- Server-rendered HTML.
- All AI crawlers are allowed.
- Person schema with `sameAs`.
- Four third-party podcast pages, linked from /speaking, that corroborate the entity.

**Gaps**
- **No self-contained "Who is Mike Barefoot?" passage.** The stats live in a label/value grid, not sentences.
- **No question-style headings or FAQ.**
- **No `/llms.txt`.**
- **KAIZEN principles are hidden from the HTML.**
- **Media features ("USA Today", "CareerBuilder", "SIA") aren't linked to sources.**

**Brand query:** "Mike Barefoot speaker" currently returns Barefoot Wine and Barefoot Sound. The entity is unclaimed, so the about page, consistent `sameAs` links and directory listings matter.

## Search experience (SXO): 64 (see `sxo.md`)

**Keyword targets**
- Head terms like "leadership keynote speaker Raleigh" and "NC motivational speaker" are owned by bureaus and directories (PepTalk, GigSalad, BigSpeak).
- Realistic wins:
  - the brand query
  - **"kaizen keynote speaker"** (an open niche)
  - long-tail topic and location queries, through dedicated pages

**Persona scores (out of 100)**
- University director: 76.
- Event planner: 64. Missing a one-sheet, a planner FAQ, a booking process and corporate proof.
- Coaching prospect: 52. No formats or outcomes, and no coaching testimonials.

## Open questions for Mike (blocking several fixes)

**Contact and launch**
- Speaking email; phone or scheduler; typical response time.
- Production domain.

**Content conflicts to settle**
- Is the K in KAIZEN "Knowledge" or "Kindness"?
- RedZone or Red Zone?
- Confirm the martial-arts ranks and Hall of Fame years.

**Proof and credits**
- URLs for the USA Today, CareerBuilder and SIA features; "60+" or "50+" media features.
- Name of the Wake Tech letter writer.
- Years for the undated talks.
- Host of the Wisdom Journey podcast.

**Planner FAQ**
- Fee policy, travel area, lead time, AV needs and virtual availability.

**Coaching**
- Formats, cadence and any testimonials.

**Videos**
- Upload date for the Campbell keynote video.
