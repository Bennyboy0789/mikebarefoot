// JSON-LD for every page, built only from facts in src/content/site.ts.
// Nodes share @ids so search engines read one connected graph (Person ← WebSite ← WebPage …).
// Deliberately absent: Review/AggregateRating (testimonials on Mike's own site are
// self-serving and ineligible), worksFor (RedZone closed in 2025), email (not confirmed yet).
import { coaching, featuredKeynote, martialArtsHonors, podcasts, recruiterHonors, site, speaking } from "@/content/site";

const abs = (path = "/") => new URL(path, site.url).toString();

const ids = {
  person: `${abs("/")}#person`,
  website: `${abs("/")}#website`,
  speakingService: `${abs("/speaking")}#service`,
  coachingService: `${abs("/coaching")}#service`,
  keynoteVideo: `${abs("/speaking")}#keynote-video`,
  reelVideo: `${abs("/speaking")}#reel-video`,
  highlightsVideo: `${abs("/speaking")}#keynote-highlights`,
};

const personRef = { "@id": ids.person };

const person = {
  "@type": "Person",
  "@id": ids.person,
  name: site.name,
  url: abs("/"),
  mainEntityOfPage: abs("/about"),
  jobTitle: site.role,
  description: site.description,
  slogan: site.tagline,
  image: { "@type": "ImageObject", url: abs("/images/mike-office-color.jpg"), width: 1200, height: 1200 },
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Raleigh", addressRegion: "NC", addressCountry: "US" },
  },
  hasOccupation: [
    { "@type": "Occupation", name: "Keynote speaker" },
    { "@type": "Occupation", name: "Leadership coach" },
  ],
  award: [...recruiterHonors, ...martialArtsHonors],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "North Carolina State University" },
    { "@type": "CollegeOrUniversity", name: "Campbell University" },
  ],
  knowsAbout: [
    "Leadership",
    "Kaizen",
    "Continuous improvement",
    "Recruiting",
    "Talent retention",
    "IT staffing",
    "Martial arts",
    "Karate",
    "Jiu-jitsu",
    "Kickboxing",
  ],
  sameAs: Object.values(site.social),
  ...(site.email ? { email: site.email } : {}),
};

const website = {
  "@type": "WebSite",
  "@id": ids.website,
  url: abs("/"),
  name: site.name,
  description: site.description,
  inLanguage: "en-US",
  publisher: personRef,
};

function webPage(path: string, name: string, type: string | string[] = "WebPage", extra: Record<string, unknown> = {}) {
  return {
    "@type": type,
    "@id": `${abs(path)}#webpage`,
    url: abs(path),
    name,
    isPartOf: { "@id": ids.website },
    about: personRef,
    inLanguage: "en-US",
    ...extra,
  };
}

function breadcrumb(path: string, label: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(path)}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name: label, item: abs(path) },
    ],
  };
}

// Upload date and length read from the public YouTube watch page.
const keynoteVideo = {
  "@type": "VideoObject",
  "@id": ids.keynoteVideo,
  name: featuredKeynote.title,
  description: `Mike Barefoot's keynote at the ${featuredKeynote.event}, ${featuredKeynote.year}: the KAIZEN system for building winning teams, with a live martial arts demonstration.`,
  thumbnailUrl: [`https://i.ytimg.com/vi/${featuredKeynote.youtubeId}/maxresdefault.jpg`],
  embedUrl: `https://www.youtube.com/embed/${featuredKeynote.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${featuredKeynote.youtubeId}`,
  uploadDate: "2026-09-24T09:03:47-07:00",
  duration: "PT43M39S",
  inLanguage: "en-US",
  creator: personRef,
  about: personRef,
};

// Cut for this site on 2026-10-16 from the full Campbell keynote above.
const highlightsVideo = {
  "@type": "VideoObject",
  "@id": ids.highlightsVideo,
  name: `Keynote highlights: ${featuredKeynote.event}, ${featuredKeynote.year}`,
  description:
    "85 seconds from Mike Barefoot's KAIZEN keynote at Campbell University: integrity over the fee, the 10-to-15-degree martial arts demonstration, and micro actions that compound.",
  thumbnailUrl: [abs("/images/campbell-highlights-poster.jpg")],
  contentUrl: abs("/videos/campbell-keynote-highlights.mp4"),
  uploadDate: "2026-10-16",
  duration: "PT1M26S",
  inLanguage: "en-US",
  isBasedOn: { "@id": ids.keynoteVideo },
  creator: personRef,
  about: personRef,
};

// The reel was cut for this site and first published with it (sizzle reel replaced the first cut on 2026-10-15).
const reelVideo = {
  "@type": "VideoObject",
  "@id": ids.reelVideo,
  name: "Mike Barefoot speaker reel",
  description:
    "90 seconds of Mike Barefoot: on stage at BORN Toastmasters and the G.O.A.T. Honors, and in podcast interviews, on discipline, KAIZEN and turning losses into lessons.",
  thumbnailUrl: [abs("/images/mike-sizzle-poster.jpg")],
  contentUrl: abs("/videos/mike-sizzle-reel.mp4"),
  uploadDate: "2026-10-15",
  duration: "PT1M30S",
  inLanguage: "en-US",
  creator: personRef,
  about: personRef,
};

// No Offer prices: none are published.
const speakingService = {
  "@type": "Service",
  "@id": ids.speakingService,
  name: "Keynote speaking and leadership workshops",
  serviceType: "Keynote speaking",
  description: speaking.keynoteSummary,
  provider: personRef,
  audience: speaking.audiences.map((a) => ({ "@type": "Audience", audienceType: a })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Keynote and workshop topics",
    itemListElement: speaking.topics.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: t.title, description: `${t.subtitle}. ${t.points.join(" ")}` },
    })),
  },
  url: abs("/speaking"),
};

const coachingService = {
  "@type": "Service",
  "@id": ids.coachingService,
  name: "Leadership and career coaching",
  serviceType: "Coaching",
  description: coaching.intro,
  provider: personRef,
  audience: coaching.focusAreas.map((f) => ({ "@type": "Audience", audienceType: f.title })),
  url: abs("/coaching"),
};

const podcastAppearances = {
  "@type": "ItemList",
  "@id": `${abs("/speaking")}#podcasts`,
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
      actor: personRef,
    },
  })),
};

const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

// The full Person and WebSite go on every page so each page stands on its own.
export const schema = {
  home: graph(person, website, webPage("/", `${site.name} | Leadership keynote speaker & coach`, "WebPage", { mainEntity: personRef })),
  about: graph(
    person,
    website,
    webPage("/about", `About ${site.name}`, ["ProfilePage", "AboutPage"], { mainEntity: personRef }),
    breadcrumb("/about", "About"),
  ),
  speaking: graph(
    person,
    website,
    webPage("/speaking", "Leadership keynote speaking", "WebPage", { mainEntity: { "@id": ids.speakingService } }),
    speakingService,
    keynoteVideo,
    highlightsVideo,
    reelVideo,
    podcastAppearances,
    breadcrumb("/speaking", "Speaking"),
  ),
  coaching: graph(
    person,
    website,
    webPage("/coaching", "Leadership and career coaching", "WebPage", { mainEntity: { "@id": ids.coachingService } }),
    coachingService,
    breadcrumb("/coaching", "Coaching"),
  ),
  speakerKit: graph(person, website, webPage("/speaker-kit", `${site.name} speaker kit`), breadcrumb("/speaker-kit", "Speaker kit")),
  contact: graph(person, website, webPage("/contact", `Contact ${site.name}`, "ContactPage"), breadcrumb("/contact", "Contact")),
};

/** Escapes "<" so page content can never close the script tag. */
export const jsonLd = (data: object) => JSON.stringify(data).replace(/</g, "\\u003c");
