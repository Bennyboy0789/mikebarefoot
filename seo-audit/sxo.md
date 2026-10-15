# SXO Analysis: Mike Barefoot (5-page site)

SXO Gap Score is separate from any SEO Health Score. Date: 2026-10-15. Source: production build on localhost:3123 plus site.ts.

## SERP findings (web search, standard mode)

| Query | What ranks | Dominant type | Confidence |
|---|---|---|---|
| leadership keynote speaker Raleigh NC | PepTalk "top speakers in Raleigh" listicle, VisitRaleigh listing, event recaps (WRAL, Chamber), individual speaker sites (brianhamilton.org), futurists bureau lists | Directory/listicle (~55%), speaker personal pages/event pages (~45%) | Medium |
| North Carolina motivational speaker | PepTalk NC list, GigSalad and The Bash directories, futuristsspeakers NC page, speaker personal pages with a "Motivational Keynote Speaker in North Carolina" landing page (ruben-gonzalez.com, mikehourigan.com "Motivational Speaker Charlotte") | Directory/bureau (~65%) | Medium-high |
| employee retention keynote speaker | Bureau topic pages (futuristsspeakers, BigSpeak, Executive Speakers, HiCue), "10 best" listicle (eaglestalent), single-speaker bureau profiles (Clint Pulver) | Bureau topic page / speaker profile (~80%) | High |
| kaizen keynote speaker | Kaizen Institute events, conference speaker announcements, workshops. No dominant speaker-site page. | Mixed/informational, weak intent match | Low. Open niche. |
| Mike Barefoot speaker | Barefoot Wine founders, Barefoot Sound monitors. No result for Mike. | Entity not established; name collision | Brand query is unowned. |

Not run: "leadership speaker for university events" (inferred from the pattern above; run it before building the page).

Implication: head terms (NC motivational speaker, retention keynote speaker) are won by bureaus and directories. A 5-page personal site will not outrank them. Realistic wins are:
1. The brand query, plus "Mike Barefoot" with Raleigh, speaker, KAIZEN.
2. "kaizen keynote" and "martial arts leadership keynote", which are low competition and a distinctive angle.
3. Raleigh/NC-local long-tail via dedicated landing pages.
4. Getting listed on the directories and bureaus that do rank. That is off-site and is the main way to appear for head terms.

## Page-type classification of the target

All 5 pages ship Person schema only, with the same Person JSON-LD sitewide.

| Page | Current type | Title / H1 | Words |
|---|---|---|---|
| / | Personal brand homepage | "Mike Barefoot — Leadership Speaker & Coach" / "The dojo and the boardroom run on the same playbook." | ~1150 |
| /about | Bio/story | "About" | ~1120 |
| /speaking | Speaker profile / hub | "Speaking" / "Elite discipline. Corporate strategy." | ~1180 |
| /coaching | Service page | "Coaching" | ~415 |
| /contact | Inquiry form | "Contact" | ~240 |

## Mismatches

1. HIGH: Topic queries (retention, micro-recognition, lean HR, micro-learning, career launch) are served on SERPs by dedicated topic pages. This site folds all 6 topics into one /speaking section of 2 bullets each. No page can rank for them.
2. HIGH: Location intent. "Raleigh/NC" appears only in the schema address and the about text. Title, H1 and meta never say "Raleigh" or "North Carolina". There are no local landing pages, which are the page type competing personal sites use (ruben-gonzalez.com, mikehourigan.com).
3. HIGH: Planner shortlist intent expects a downloadable one-sheet, an FAQ (fee range process, travel, AV, audience size, virtual), video reel and past-client proof on one page. Missing: one-sheet/press kit, planner FAQ, booking process. The contact form has audience size and format fields, which is good.
4. MEDIUM: Generic titles ("Speaking | Mike Barefoot") carry no keyword. Home meta is bio-style, not intent-style.
5. MEDIUM: Entity gap. "Mike Barefoot speaker" returns nothing for him. Needs a canonical domain, indexable status, sameAs links, and third-party profiles.
6. MEDIUM: Coaching is thin (~415 words), with no formats, process or outcomes. It is a service page that does not yet answer "what do I get". Pricing and formats are TODO(mike), so it stays a conversation-led page until he answers.
7. ALIGNED: Speaker personal site with video and testimonials on /speaking and the homepage matches the personal-speaker-site type on SERPs.

## Target keyword to page map

| Target query | Page | Action |
|---|---|---|
| mike barefoot speaker / leadership speaker | / | Fine. Add Raleigh to title: "Mike Barefoot | Leadership Keynote Speaker & Coach in Raleigh, NC" |
| leadership keynote speaker Raleigh NC; NC motivational speaker | /speaking (title/H1/meta) or new /speaking/raleigh-nc | Rewrite title and intro; consider a dedicated local page |
| kaizen keynote speaker | /speaking/kaizen-keynote (new, from the existing KAIZEN section) | New page. Open niche. |
| employee retention keynote speaker | /speaking/employee-retention (new) | New page. Built from "Winning the Talent Game" and KAIZEN retention points. |
| leadership speaker for university events / student leadership | /speaking/universities (new) | New page. This is Mike's strongest proof (Campbell, NC State MBA, Wake Tech). |
| micro-recognition, micro-learning, lean HR, career launch | /speaking/[topic] pages | Phase 2, after the first three |
| leadership coach Raleigh; career coach Raleigh | /coaching | Add Raleigh to title/H1; expand |
| book / hire / fees | /contact; plus FAQ | Add planner FAQ |

## Gap analysis (SXO Gap Score, 100 points)

| Dimension | Score | Evidence |
|---|---|---|
| Page type | 9/15 | Right type for brand query. Missing topic, local and one-sheet types. |
| Content depth | 10/15 | Strong story and KAIZEN. Topics shallow (2 bullets). Coaching thin. |
| UX signals | 12/15 | Clear CTAs, mobile booking bar, contact form with event fields. No FAQ or process. |
| Schema | 5/15 | Person only. Missing VideoObject (Campbell keynote, highlight reel), FAQPage-less, Service/Event/Review, WebSite, ProfilePage. |
| Media | 12/15 | Reel with VTT captions, keynote embed, photos, logos. No downloadable assets. |
| Authority | 10/15 | Named testimonials (3), Campbell/NC State/Wake Tech, 4 podcasts, USA Today mention. One testimonial unnamed. Not yet linked to or listed anywhere. |
| Freshness | 6/10 | Content is current (Oct 2026). No blog or news. Several talks undated. Site noindex until production domain. |
| Total | 64/100 | |

## Persona scores (each: Relevance, Clarity, Trust, Action, 25 each)

### 1. Corporate/association event planner: 64/100
- Home/Speaking: Relevance 18 (keynote, formats, audiences), Clarity 17, Trust 15 (strong Campbell letter, but few corporate logos; planners' own peers are absent), Action 13 (a form, but no fee-range guidance, no one-sheet, no availability or lead-time info).
- Weakest: Action and Trust. Improvements: one-sheet PDF download; planner FAQ; "what Mike needs from you" block; corporate client or case examples (ask Mike); AV/tech rider (ask Mike).

### 2. University career-services / business-school director: 76/100
- Relevance 21, Clarity 19, Trust 21 (Campbell, NC State MBA director, Wake Tech HR), Action 15.
- Strongest persona fit. Improvements: dedicated /speaking/universities page with the three testimonials, "Beyond the Resume" topic, student audience formats, and whether Mike speaks pro bono or for honorarium (ask Mike). Add a link to the full Campbell video.

### 3. Individual coaching prospect: 52/100
- Relevance 15, Clarity 12 (no formats, duration, cadence, outcome), Trust 14 (testimonials are all speaking, none are coaching), Action 11 (only "start a conversation").
- Improvements: ask Mike for coaching format, cadence, who it fits, any coaching client feedback (do not reuse speaking quotes as coaching ones), free intro-call terms. Add FAQ. Weakest persona, so fix first for conversion.

## Missing content/pages

1. One-sheet/press kit page (/speaker-kit): bio at 50/100/250 words, headshots, reel, topics, intro script. All source content exists; ask Mike to approve and to supply the existing one-pager PDF (site.ts says one exists).
2. Planner FAQ (/speaking/faq or on /speaking) with FAQPage schema. Questions from existing facts: formats (60-minute keynote, workshops, panels, virtual via Teams), audiences, demo needed. Fees, travel and lead time: flag as ask-Mike, leave out until answered.
3. Per-topic pages: kaizen keynote, employee retention, universities first.
4. Location targeting: Raleigh, NC in title/H1/meta; "Serving Raleigh, Durham, Chapel Hill, Triangle, NC" only if Mike confirms the travel area.
5. Media/podcast page listing the 4 podcasts and 60+ features: supports entity building. Existing data in `podcasts`.

## Technical and entity notes

- robots.txt and sitemap.xml respond 200. The site is non-indexable until NEXT_PUBLIC_SITE_URL is set on a production domain (the one-pager lists mikebarefootspeaks.net; confirm). Verify canonicals use that domain at launch.
- Add `sameAs` (YouTube, LinkedIn, Instagram) to Person schema; add `knowsAbout`, `jobTitle`. Use unique per-page schema: ProfilePage on /about, VideoObject on /speaking, Service on /coaching, FAQPage on FAQ.
- Name collision (Barefoot Wine, Barefoot Sound): use "Mike Barefoot speaker" plus Raleigh in titles and set up Google Business/LinkedIn.
- Contact email is null; confirm the new speaking email.
- Open consistency TODOs affect trust: K = Knowledge vs Kindness, RedZone vs Red Zone spelling, unsigned Wake Tech letter, undated talks.

## Off-site (needed to compete for head terms)

Get listed on PepTalk, GigSalad/The Bash, and relevant NC chamber, SHRM chapter and university speaker pages; ask Campbell/NC State to link to his page; publish the keynote on YouTube with a keyword-aware title and description.

## Hard-rule items: ask Mike (do not invent)

- Speaking fee ranges and travel policy
- Corporate client names or logos, additional testimonials with names (especially coaching), permission to name the Wake Tech letter writer
- Coaching formats, cadence, pricing
- Whether other programs or certifications exist
- Years for undated talks; the canonical K word; spelling of RedZone
- Travel area and virtual availability
- Existing one-sheet PDF and the final speaking email and domain

## Prioritized recommendations

1. Rewrite titles/H1/meta with Raleigh, NC and intent keywords (low effort, no new content).
2. Resolve the domain, indexability, email, and sameAs/schema upgrade.
3. Build /speaking/universities, /speaking/kaizen-keynote, /speaking/employee-retention from existing site.ts content.
4. Add planner FAQ + one-sheet/press kit (after Mike provides answers above).
5. Expand /coaching once Mike supplies formats and any coaching feedback.
6. Directory/bureau listings and backlinks from Campbell, NC State and Wake Tech.
7. Remaining topic pages (micro-recognition, micro-learning, lean HR, career launch).

## Limitations

Web search tool only (no volume or difficulty data, no live SERP features such as PAA or AI Overview). 4 of the 5 queries analyzed with page-type inference from result titles and snippets; result pages were not fetched individually. "University events" query was not searched. Page scores are from the build as of crawl date; no Lighthouse or real-user data used. Pages were fetched with curl against localhost (scripts/fetch_page.py is not part of this repo).

Offer: Generate a PDF report? Use `/seo google report`. Related: `/seo schema` for the schema work, `/seo content` for E-E-A-T, `/seo local` for the Raleigh presence.
