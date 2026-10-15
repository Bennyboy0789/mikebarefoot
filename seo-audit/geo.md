# GEO / AI Search Readiness: mikebarefootspeaks.net

Score: 58/100

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25 | 12/25 | Strong facts, but buried in long narrative; no question headings; no self-contained definition passages |
| Structural readability | 20 | 13/20 | Clean H1/H2/H3, SSR; headings are poetic (Seven chapters.) not query-matching |
| Multi-modal | 15 | 9/15 | Reel + YouTube keynote + photos with alt text; no VideoObject schema |
| Authority and brand | 20 | 11/20 | Person schema + sameAs; named testimonials, 60+ media claim; weak linked third-party footprint, no dates, org name TODOs |
| Technical | 20 | 13/20 | SSR HTML (good); no llms.txt, no canonical, no AI-bot rules, sitemap lacks lastmod, thin schema |

## Crawler access (robots.txt, simulated production)
Served: User-agent * Allow / plus Sitemap. No per-bot rules, so allowed by default:
- GPTBot, OAI-SearchBot, ChatGPT-User: allowed
- ClaudeBot, Claude-SearchBot, anthropic-ai: allowed
- PerplexityBot: allowed
- Google-Extended, Applebot-Extended: allowed (training/Gemini grounding only; Googlebot governs AI Overviews)
- CCBot, cohere-ai: allowed (optional block; training only)
Caveat: robots.ts emits Disallow / unless VERCEL_ENV=production AND NEXT_PUBLIC_SITE_URL is set. Verify live /robots.txt after launch; a misconfigured env silently blocks every AI crawler. The site.ts url fallback is barefoot.stagmkt.dev, so schema/sitemap/OG would point there if the env var is missing.
Pages are server-rendered (37-134 KB HTML each, full copy and headings present), so non-JS AI crawlers see the content.

## llms.txt
Missing (404). Draft below. No RSL file (optional, low priority).

## Passage citability
- Best passage: meta description / Person.description (leadership speaker and coach who blends 37 years of martial arts discipline with a 27-year career building winning teams in the staffing industry). Self-contained, but omits Raleigh/North Carolina, keynote, recruiting, retention, kaizen: the exact query terms.
- Stats (37 yrs, 1,000+ placed, $50M+, 60+ media) sit in a stat grid as label/value fragments; no sentence states them together, so an LLM cannot lift a sentence like "Mike has personally placed 1,000+ professionals" without context.
- /about story paragraphs are about 100-190 words, narrative; the direct fact is not in the first 40-60 words (Founder, through the Great Recession opens with 2008 detail; launched RedZone Resources in 2010, closed 2025 is mid-paragraph).
- /speaking keynote summary (about 60 words) is a good self-contained passage. Topic cards suit recruiting/retention queries but headings rarely carry those words.
- No "Who is Mike Barefoot?" passage, no FAQ, no based-in-Raleigh sentence in body copy (location only in schema/footer).
- Zero question-form headings.

## Authority and brand signals
- On-site: Person JSON-LD (sameAs YouTube/LinkedIn/Instagram, alumniOf, knowsAbout); named testimonials (Campbell, NC State, GOAT Awards); logos; media list (USA Today, CareerBuilder, SIA); martial-arts honors.
- Gaps: no dates/last-updated; media claims not linked to the actual articles; Wake Tech testimonial unsigned; RedZone vs Red Zone spelling TODO; K = Knowledge vs Kindness TODO (inconsistent entity facts across sources confuse LLMs); email null.
- Off-site: YouTube channel exists (fetch returned only the name Mike Barefoot; no counts/titles visible); LinkedIn not verifiable via fetch. YouTube is the strongest AI-citation correlate (~0.74). The four podcasts (Wisdom Journey, Live More Show, Your Next Success ep 64, Healthy Mind Healthy Life) are in site.ts podcasts but were not rendered on the crawled pages; they are the best third-party corroboration. Wikipedia entity: none known. Reddit: none known. Ask Mike; do not fabricate.
- Name-collision risk (Mike Barefoot is a shared name): disambiguate with Raleigh NC, RedZone Resources, KAIZEN keynote in body text.

## Platform scores
- Google AI Overviews: 55
- ChatGPT: 55
- Perplexity: 60
- Bing Copilot: 55

## Top prioritized fixes
1. (30 min) Add /llms.txt (draft below) and explicit AI-bot rules in robots.ts; confirm production env vars so the site is indexable and URLs use mikebarefootspeaks.net.
2. (1-2 h) Add a 2-3 sentence "Who is Mike Barefoot?" answer block atop /about and home using only site.ts facts: Raleigh NC, keynote speaker and coach, KAIZEN, recruiting and retention, 27-year staffing career, RedZone Resources (2010-2025). Add based in Raleigh, North Carolina in body copy. Rewrite stats as one full-sentence passage.
3. (2-3 h) Add query-matching H2/H3s over existing content (What is the KAIZEN keynote? What does Mike speak on? Who has Mike spoken for?), each opening with a 40-60 word direct answer. Add a FAQ built from existing facts (formats, typical 60 min, audiences, coaching focus areas). No fees/travel policies unless Mike confirms.
4. (1-2 h) Structured data: ProfessionalService/Service, VideoObject (Campbell keynote, reel; uploadDate from Mike), Event for dated engagements, FAQPage, canonical per page, sitemap lastmod, extra sameAs (podcast URLs, Facebook once confirmed).
5. (1 h + Mike) Render and link the four podcast episodes; link media features (ask Mike for USA Today/CareerBuilder/SIA URLs); publish a keynote transcript (YouTube captions; VTT exists for reel); resolve TODOs (RedZone spelling, canonical K word, testimonial author, undated talks, booking email).

## Ask Mike for (no invention)
Media feature URLs; Wisdom Journey host and episode dates; any Wikipedia/Reddit/LinkedIn mentions; YouTube video list and upload dates; years of undated talks; canonical K word; business name spelling; booking email.

## Draft llms.txt (facts from site.ts only)
```
# Mike Barefoot

> Mike Barefoot is a leadership keynote speaker and coach based in Raleigh, North Carolina. He blends 37 years of martial arts discipline (7th-degree black belt in karate) with a 27-year career building winning teams in the staffing industry, and speaks on leadership, recruiting, retention and continuous improvement (Kaizen).

Tagline: Discipline in the dojo. Results in the workplace.
He founded RedZone Resources, an IT staffing firm (2010 to 2025) that stayed profitable for 15+ years, and personally placed 1,000+ professionals over his career. His insights have been featured 60+ times in outlets including USA Today, CareerBuilder and Staffing Industry Analysts.

## Key pages
- [Home](https://mikebarefootspeaks.net/): Overview of speaking and coaching.
- [About](https://mikebarefootspeaks.net/about): Career story: NC State and Campbell MBA, elite recruiter, founder of RedZone Resources, 37 years of martial arts.
- [Speaking](https://mikebarefootspeaks.net/speaking): Keynote "KAIZEN: The Pillars of Success" (typically 60 minutes, live martial arts demonstration), interactive workshops, executive panels. Topics: KAIZEN: The Pillars of Success; 1% Better Daily; Winning the Talent Game; Kaizen Learning; The Lean HR Department; Beyond the Resume.
- [Coaching](https://mikebarefootspeaks.net/coaching): Coaching for leaders and executives, career moves, and entrepreneurs.
- [Contact](https://mikebarefootspeaks.net/contact): Speaking, coaching and media inquiries.

## Facts
- Location: Raleigh, North Carolina
- Has spoken for: Campbell University (2026 Leadership Summit, Leading with Purpose), NC State University MBA program (three years running), Wake Tech Community College, BORN Toastmasters, The GOAT Awards
- KAIZEN framework: Knowledge, Authentic, Integrity, Zeal, Energy, No (confirm the K word with Mike before publishing)
- Audiences: leadership summits, universities, HR and talent leaders, sales and recruiting teams, entrepreneurs

## Elsewhere
- [YouTube](https://www.youtube.com/@MikeBarefootspeaks)
- [LinkedIn](https://www.linkedin.com/in/mikebarefoot/)
- Podcasts: [Wisdom Journey](https://www.youtube.com/watch?v=RHYOfUPrtIA), [Live More Show](https://www.livemoreshow.com/success-starts-with-serving-others-and-staying-the-course/), [Your Next Success](https://www.nextsuccesspodcast.com/2446588/episodes/18927377-mike-barefoot-hiring-decisions-and-lessons-earned), [Healthy Mind, Healthy Life](https://www.podhealth.club/e/build-mental-toughness-through-movement-with-mike-barefoot/)
```
