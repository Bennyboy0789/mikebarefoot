# Structured Data Audit: mikebarefootspeaks.net (simulated on localhost:3123)

Audit date: 2026-10-15. Schema score: **38/100**.

## 1. Detection

| Page | JSON-LD | Format |
|---|---|---|
| / /about /speaking /coaching /contact | One identical sitewide `Person` block (layout.tsx, rendered at end of body) | JSON-LD |
| Microdata / RDFa | none | - |

Page-specific schema: none. Canonical `<link>` is absent on all 5 pages (crawl shows `canonical: null`). This is not schema, but `url`/`@id` values must match whatever canonical you set, so add `alternates.canonical` per page.

## 2. Validation of the existing Person block

| Check | Result |
|---|---|
| @context `https://schema.org` | PASS |
| @type valid, not deprecated | PASS |
| Required properties | PASS. Person has no Google-required properties and no rich result of its own. |
| Absolute URLs | PASS (`site.url` + path; resolves to mikebarefootspeaks.net once `NEXT_PUBLIC_SITE_URL` is set) |
| No placeholders | PASS |
| `@id` | FAIL. Missing, so no other node can reference Mike. This blocks a consistent graph. |
| `image` | WARN. Points at mike-office-color.jpg. Fine, but use an ImageObject with dimensions, or a square headshot, for Knowledge Graph use. |
| `address` | WARN. A Person with a street-less city address is acceptable, but `homeLocation` is the more precise property. Low priority. |
| `sameAs` | PASS (YouTube, LinkedIn, Instagram, all sourced). Add Facebook/PodMatch only after Mike confirms. |
| `alumniOf` | PASS in form. NC State and Campbell are sourced (story section). Add the `url` of each for entity disambiguation. |
| `knowsAbout` | OK. All strings are supported by site content. |
| `worksFor` / `hasOccupation` / `award` | Missing. See below. |
| `email` | Correctly omitted (`site.email` is null; the TODO is unresolved). |
| Serialization | WARN. `JSON.stringify` output is injected raw. Escape `<` (`.replace(/</g, "\\u003c")`) as a hardening best practice. |
| Placement | Sitewide Person on every page is noisy. Move the full entity to `/` and `/about`; other pages should reference it by `@id` only. |

Google rich result eligibility, as of 2026:
- Person: no dedicated rich result. It is used for entity understanding and Knowledge Panel signals only.
- **Review / AggregateRating on self-serving testimonials**: NOT eligible. Review snippets for LocalBusiness/Organization/Person-type entities that review themselves are ignored under Google's self-serving review policy. Do NOT mark up the testimonials as `Review` on Mike's own pages, and never add `AggregateRating`. Keep them as visible text.
- **FAQPage**: restricted to government and health sites. Not recommended.
- **HowTo, SpecialAnnouncement, CourseInfo, LearningVideo, EstimatedSalary**: deprecated or retired. Not used here. KAIZEN's "four movements" is tempting HowTo content; do not mark it up.
- **Event**: there are no dated future events. The Campbell 2026 Leadership Summit is a past event run by a third party. Do NOT mark it up as Event, because Event rich results need future dates and a location. Skip.
- **Organization** (logo/name rich result): Mike's firm RedZone Resources closed June 2025, and Mike has no operating business entity in site.ts. Do NOT add an Organization for RedZone as the publisher. Use the Person as publisher and `WebSite` author.
- **LocalBusiness**: not appropriate. There is no storefront or address, and the work is travel-based. Skip.
- **ProfilePage**: Google supports ProfilePage markup (for creator/forum profile content). Eligibility is not guaranteed for a personal bio page, but it is valid, harmless and a strong entity signal. Recommended for /about.
- **VideoObject**: eligible for Video rich results and Key Moments, but only when the video is the main content. Requires `name`, `thumbnailUrl`, `uploadDate`. Recommended: `description`, `contentUrl`/`embedUrl`, `duration`.
- **Breadcrumb**: still eligible, but Google now shows mostly the domain on mobile. Low-value for a 5-page flat site; add for correctness (cheap).
- **Service**: no Google rich result. Useful for semantic/GEO signals. Do not add `Offer` with price, since none is sourced.

## 3. Missing opportunities (priority order)

1. **Stable @id graph** (Person `#person`, WebSite `#website`, per-page WebPage `#webpage`). High.
2. **VideoObject for the self-hosted reel** (speaking page) and the Campbell keynote (home and speaking). These are the only rich-result-eligible items on the site. High. Needs from Mike: the real `uploadDate` and `duration` (YouTube provides both; the reel is a local file, so read it with ffprobe).
3. **ProfilePage + Person enrichment on /about**. Medium-high.
4. **WebSite** (name, url, publisher). A site-name signal. Medium. No SearchAction, since the site has no search.
5. **Service nodes** (Keynote speaking, Leadership coaching) with `provider` = Person, `areaServed`, `audience`. Medium.
6. **Podcast appearances**: Use `PodcastEpisode` with `guest`/`about` only on a page that actually lists them. Check which page renders `podcasts` (the crawl shows no podcast links on /about; confirm in the speaking page). If shown, put an `ItemList` of `PodcastEpisode`s on that page. The `datePublished` values are only month-level in site.ts ("Sept 2026"), so use `YYYY-MM` (valid ISO 8601 reduced precision) or omit. Low-medium.
7. **BreadcrumbList** on the 4 inner pages. Low.
8. **Canonical tags** (non-schema, but required for a clean `@id`/`url` match). Medium.

## 4. Unknowns that need Mike (do not invent)

- `uploadDate` and `duration` for the Campbell keynote video (read from YouTube).
- `uploadDate` and `duration` for the highlight reel (needs Mike; the file duration can be read with ffprobe).
- Whether Mike is a **member of AMAA**: site.ts only says he was inducted into the AMAA "Who's Who" Hall of Honors. That is an honor, not a confirmed membership. Do NOT emit `memberOf`.
- Year(s) of the awards (site.ts TODO): put them in `award` only as the text strings; do not add dates.
- Final production domain (set `NEXT_PUBLIC_SITE_URL=https://mikebarefootspeaks.net`).
- Whether to add `email`. Leave it out until confirmed.
- Facebook / PodMatch `sameAs` URLs.
- Wisdom Journey host (null).
- `worksFor`: RedZone closed in 2025, and Mike is self-employed. Do not set `worksFor`. If wanted, use `hasOccupation` only.
- Spelling of "RedZone Resources" vs "Red Zone Resources" (site.ts TODO). Do not use either in schema.

## 5. Implementation (ready to paste)

Create `src/lib/schema.ts` (new file). Everything reads from site.ts. Prefer one `@graph` per page with a small `<JsonLd>` component.

```ts
// src/lib/schema.ts
import {
  site,
  featuredKeynote,
  speaking,
  coaching,
  martialArtsHonors,
  recruiterHonors,
  podcasts,
} from "@/content/site";

export const abs = (path = "/") => new URL(path, site.url).toString();

export const ids = {
  person: `${abs("/")}#person`,
  website: `${abs("/")}#website`,
  speakingService: `${abs("/speaking")}#service`,
  coachingService: `${abs("/coaching")}#service`,
  keynoteVideo: `${abs("/speaking")}#keynote-video`,
  reelVideo: `${abs("/speaking")}#reel-video`,
};
export const webPageId = (path: string) => `${abs(path)}#webpage`;

// Serialize safely: escape "<" so content can never close the script tag.
export const jsonLdString = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

// ---------- Person (full entity; render on "/" and "/about" only) ----------
export const person = {
  "@type": "Person",
  "@id": ids.person,
  name: site.name,
  url: abs("/"),
  mainEntityOfPage: abs("/about"),
  jobTitle: site.role,
  description: site.description,
  slogan: site.tagline, // "Discipline in the dojo. Results in the workplace."
  image: {
    "@type": "ImageObject",
    url: abs("/images/mike-office-color.jpg"),
    // needs Mike/dev: add width/height from the actual file
  },
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Raleigh", addressRegion: "NC", addressCountry: "US" },
  },
  hasOccupation: [
    { "@type": "Occupation", name: "Keynote speaker", occupationLocation: { "@type": "AdministrativeArea", name: "United States" } },
    { "@type": "Occupation", name: "Leadership coach" },
  ],
  // Strings only, straight from site.ts; no invented awarding bodies or years.
  award: [...recruiterHonors, ...martialArtsHonors],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "North Carolina State University" },
    { "@type": "CollegeOrUniversity", name: "Campbell University" },
  ],
  knowsAbout: [
    "Leadership", "Kaizen", "Continuous improvement", "Recruiting", "Talent retention",
    "IT staffing", "Martial arts", "Karate", "Brazilian jiu-jitsu", "Kickboxing",
  ],
  sameAs: Object.values(site.social),
  // NOT included on purpose: memberOf (AMAA membership unconfirmed), worksFor (RedZone closed 2025),
  // email (site.email is null), Review/AggregateRating (self-serving; ineligible).
  ...(site.email ? { email: site.email } : {}),
};

// Reference-only form for pages that are not about Mike's bio.
export const personRef = { "@id": ids.person };

// ---------- WebSite ----------
export const website = {
  "@type": "WebSite",
  "@id": ids.website,
  url: abs("/"),
  name: site.name,
  description: site.description,
  inLanguage: "en-US",
  publisher: personRef,
  // No SearchAction: the site has no search.
};

// ---------- WebPage + breadcrumb helper ----------
export function webPage(
  path: string,
  name: string,
  description: string,
  type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" = "WebPage",
  extra: Record<string, unknown> = {},
) {
  return {
    "@type": type,
    "@id": webPageId(path),
    url: abs(path),
    name,
    description,
    isPartOf: { "@id": ids.website },
    about: personRef,
    inLanguage: "en-US",
    ...extra,
  };
}

export function breadcrumb(path: string, label: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name: label, item: abs(path) },
    ],
  };
}

export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

// ---------- VideoObject: Campbell keynote (YouTube) ----------
export const keynoteVideo = {
  "@type": "VideoObject",
  "@id": ids.keynoteVideo,
  name: featuredKeynote.title,
  description:
    `Mike Barefoot's keynote at the ${featuredKeynote.event}, ${featuredKeynote.year}: ` +
    "the KAIZEN system for building winning teams, with a live martial arts demonstration.",
  thumbnailUrl: [`https://i.ytimg.com/vi/${featuredKeynote.youtubeId}/maxresdefault.jpg`],
  embedUrl: `https://www.youtube.com/embed/${featuredKeynote.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${featuredKeynote.youtubeId}`,
  uploadDate: "NEEDS_MIKE_ISO8601", // REQUIRED by Google. Read from YouTube Studio; do not ship this placeholder.
  // duration: "PT__M__S", // recommended; needs Mike (from YouTube)
  inLanguage: "en-US",
  author: personRef,
  creator: personRef,
  about: personRef,
  isFamilyFriendly: true,
};

// ---------- VideoObject: self-hosted highlight reel ----------
export const reelVideo = {
  "@type": "VideoObject",
  "@id": ids.reelVideo,
  name: "Mike Barefoot Speaker Highlight Reel",
  description: "Highlights from Mike Barefoot's keynotes on leadership, KAIZEN and continuous improvement.",
  thumbnailUrl: [abs("/images/mike-reel-poster.jpg")],
  contentUrl: abs("/videos/mike-highlight-reel.mp4"),
  uploadDate: "NEEDS_MIKE_ISO8601", // REQUIRED. Date the reel was published/finalized.
  // duration: "PT__M__S", // run ffprobe on public/videos/mike-highlight-reel.mp4
  // Captions file exists; expose it:
  caption: { "@type": "MediaObject", encodingFormat: "text/vtt", contentUrl: abs("/videos/mike-highlight-reel.vtt") },
  inLanguage: "en-US",
  author: personRef,
  creator: personRef,
  about: personRef,
  isFamilyFriendly: true,
};

// ---------- Services (no Offer/price: none sourced) ----------
export const speakingService = {
  "@type": "Service",
  "@id": ids.speakingService,
  name: "Keynote speaking and leadership workshops",
  serviceType: "Keynote speaking",
  description: speaking.keynoteSummary,
  provider: personRef,
  areaServed: { "@type": "Country", name: "United States" }, // needs Mike: confirm service area
  audience: speaking.audiences.map((a) => ({ "@type": "Audience", audienceType: a })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Keynote and workshop topics",
    itemListElement: speaking.topics.map((t) => ({
      "@type": "Offer", // no price on purpose
      itemOffered: { "@type": "Service", name: t.title, description: `${t.subtitle}. ${t.points.join(" ")}` },
    })),
  },
  url: abs("/speaking"),
};

export const coachingService = {
  "@type": "Service",
  "@id": ids.coachingService,
  name: "Leadership and career coaching",
  serviceType: "Coaching",
  description: coaching.intro,
  provider: personRef,
  audience: coaching.focusAreas.map((f) => ({ "@type": "Audience", audienceType: f.title })),
  url: abs("/coaching"),
};

// ---------- Podcast appearances (only if rendered on the page) ----------
export const podcastAppearances = {
  "@type": "ItemList",
  name: "Podcast interviews with Mike Barefoot",
  itemListElement: podcasts.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "PodcastEpisode",
      name: p.episode,
      url: p.href,
      partOfSeries: { "@type": "PodcastSeries", name: p.show },
      ...(p.host ? { author: { "@type": "Person", name: p.host } } : {}),
      actor: personRef, // guest
      // date strings are month-level ("Sept 2026"): convert to YYYY-MM by hand once confirmed
    },
  })),
};
```

### Per-page usage

Component (new file `src/components/JsonLd.tsx`):

```tsx
import { jsonLdString } from "@/lib/schema";
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />;
}
```

1. **layout.tsx**: delete the `personJsonLd` const and its `<script>`. Do not render a sitewide Person.
2. **`/` (page.tsx)**:
   `graph(person, website, webPage("/", `${site.name} — ${site.role}`, site.description), keynoteVideo)`
   The keynote video is embedded on the home page, so it is eligible there. Keep its `@id` stable so /speaking references the same node. Include `keynoteVideo` in the graph on only one of the two pages if you want a single canonical declaration. Recommend declaring it on /speaking and omitting it on `/`, and add a `"@id"` reference if needed. Pick one.
3. **`/about`**:
   `graph(person, webPage("/about", "About Mike Barefoot", description, "AboutPage", { mainEntity: personRef }), { "@type": "ProfilePage", "@id": `${abs("/about")}#profilepage`, url: abs("/about"), mainEntity: personRef, isPartOf: { "@id": ids.website }, dateModified: "NEEDS_MIKE_ISO8601" }, breadcrumb("/about", "About"))`
   Merge ProfilePage with the AboutPage if you want a single node: `"@type": ["ProfilePage", "AboutPage"]` is valid. `dateModified` is optional; drop it if unknown.
4. **`/speaking`**:
   `graph(personRef-only, webPage("/speaking", "Keynote Speaking", description), speakingService, keynoteVideo, reelVideo, breadcrumb("/speaking", "Speaking"), podcastAppearances /* only if the podcast list is rendered here */)`
   Pages other than / and /about declare Mike by `@id` reference only. Google resolves the reference only if the full node is on the same page or crawled elsewhere. Safest option is to include the full `person` on every page. If you prefer robustness over brevity, include `person` everywhere (same `@id`, no conflict) and do not use `personRef`-only graphs.
5. **`/coaching`**: `graph(webPage("/coaching", ...), coachingService, breadcrumb("/coaching", "Coaching"))`
6. **`/contact`**: `graph(webPage("/contact", ..., "ContactPage"), breadcrumb("/contact", "Contact"))`. Add `contactPoint` only after `site.email` is confirmed.
7. **/contact/thanks**: should be `noindex`; no schema.

### Pitfalls to avoid
- Do not ship `NEEDS_MIKE_ISO8601`. If a date is unknown, omit the whole VideoObject. An invalid `uploadDate` makes the Video rich result ineligible.
- Do not publish `Review` for the 3 testimonials or the Campbell letter. A Person reviewed on their own site is self-serving. Optionally model the Campbell letter as plain visible quote text only.
- Keep `url` values on the production host. In the crawl, the OG and JSON-LD URLs already resolve to mikebarefootspeaks.net on this build, so confirm the env var is set for the real deploy, otherwise the fallback `barefoot.stagmkt.dev` leaks into the graph.
- Validate with the Rich Results Test (Video) and validator.schema.org after the dates are filled in.

## 6. Score breakdown (38/100)

| Area | Max | Score |
|---|---|---|
| Valid, well-formed existing markup | 20 | 16 |
| Entity graph / @id consistency | 15 | 2 |
| Page-specific schema coverage | 25 | 3 |
| Rich-result-eligible types (Video, Breadcrumb) | 20 | 0 |
| Policy compliance (no deprecated/ineligible types) | 10 | 10 |
| Sourcing / no invented data | 10 | 7 |
| Total | 100 | 38 |
