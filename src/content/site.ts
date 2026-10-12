// Single source of truth for site copy and facts.
//
// Every factual claim below comes from Mike's keynote at Campbell University's
// 2026 Leadership Summit (https://www.youtube.com/watch?v=QgJrb609-Fo): either
// the host's introduction or Mike's own words. Per README content rules, do not
// add credentials, testimonials, programs or prices that aren't confirmed by
// Mike. Unknowns are marked TODO(mike).

export const site = {
  name: "Mike Barefoot",
  role: "Leadership Speaker & Coach",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barefoot.stagmkt.dev",
  // Stay out of search engines until a production domain is configured.
  indexable: process.env.VERCEL_ENV === "production" && Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "Mike Barefoot is a leadership speaker and coach who blends 37 years of martial arts discipline with a 27-year career building winning teams in the staffing industry.",
  location: "Raleigh, North Carolina",
  // TODO(mike): confirm public contact email. The keynote audio sounds like
  // "mike@mikebarefoot.com" but it's unclear; leave null until confirmed.
  email: null as string | null,
  social: {
    youtube: "https://www.youtube.com/@MikeBarefootspeaks",
    // TODO(mike): LinkedIn, Instagram, Facebook, PodMatch profile URLs
  },
};

export const nav = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/coaching", label: "Coaching" },
] as const;

export const featuredKeynote = {
  youtubeId: "QgJrb609-Fo",
  title: "Keynote — Campbell University 2026 Leadership Summit",
  event: "Campbell University Leadership Summit",
  year: 2026,
};

// From the host's introduction at Campbell.
export const stats = [
  { value: "37", label: "Years in martial arts", detail: "Karate, kickboxing & jiu-jitsu" },
  { value: "27", label: "Year staffing career", detail: "Recruiter, account executive, founder" },
  { value: "1,000+", label: "Professionals placed", detail: "Personally" },
  { value: "$50M+", label: "Revenue generated", detail: "Across his career" },
  { value: "15+", label: "Years of unbroken profitability", detail: "At the IT staffing firm he founded" },
  { value: "60+", label: "Media features", detail: "Including USA Today & CareerBuilder" },
];

export const mediaMentions = ["USA Today", "CareerBuilder", "Staffing Industry Analysts"];

export const recruiterHonors = ["Rookie of the Year", "Multiple Performer of the Year awards", "Regular President's Club honors"];

// Mike's KAIZEN system — "Kaizen" is Japanese for continuous improvement.
export const kaizen = [
  {
    letter: "K",
    word: "Knowledge",
    line: "IQ, EQ — and the school of hard knocks.",
    body: "Classroom intelligence gets you in the door. Emotional intelligence carries you further with people. And the lessons you only learn by living them? Mike calls that his PhD in the school of hard knocks.",
  },
  {
    letter: "A",
    word: "Authentic",
    line: "Be your real self. It comes out in the wash.",
    body: "Plenty of people will tell you what you want to hear. Over thousands of conversations with executives and candidates, Mike learned that who you really are always surfaces — so lead with it.",
  },
  {
    letter: "I",
    word: "Integrity",
    line: "Choose the relationship over the fee.",
    body: "Mike once advised a client to rescind an offer to his own candidate — walking away from a high five-figure fee — because protecting the relationship mattered more. One action can build trust for years or burn it down in a day.",
  },
  {
    letter: "Z",
    word: "Zeal",
    line: "Find your passion — then pour into it.",
    body: "Whether it's your work, your family or your craft, figure out what lights you up. The more energy you put in, the more you get back — and the money usually follows.",
  },
  {
    letter: "E",
    word: "Energy",
    line: "Sustain the pace when the pressure is on.",
    body: "Four times in his career Mike carried 50+ consultants at once while juggling 100+ open jobs a month. Elite performance isn't a sprint; it's the energy to keep showing up through the battle of attrition.",
  },
  {
    // TODO(mike): confirm the exact phrase for N — in the keynote it's built
    // around the word "No" and Charlie Munger's reputation as Berkshire's "no man".
    letter: "N",
    word: "No",
    line: "Be wary. Be discerning. Then pounce.",
    body: "Charlie Munger was Berkshire Hathaway's famous “no man.” Mike turned down a general manager role three times — then recognized the real opportunity: if he could run that office, he could run his own company.",
  },
];

export const microActions = {
  heading: "Four movements. One technique.",
  intro:
    "On stage, Mike demonstrates a self-defense technique built from four small movements — each one simple, together decisive. It's the same principle he teaches leaders: small micro actions, repeated daily, compound into big change.",
  steps: [
    "Secure the grip",
    "Control the hinge of the elbow",
    "Step off-line at 45°",
    "Use their momentum, not your strength",
  ],
  takeaway:
    "Shift 10 to 15 degrees and an immovable force gives way. It won't happen overnight — but over a year, the micro actions you commit to on your worst day will change everything.",
};

// Narrative for /about, in chronological order.
export const story = [
  {
    heading: "Raleigh, Dunn & Campbell basketball camp",
    body: "Mike grew up in the Raleigh area and spent six years in nearby Dunn, North Carolina. At 11 he spent his first week away from home at Campbell University's basketball camp — then the oldest and largest in the country — and kept coming back for five summers, watching counselors like Michael Jordan, Ralph Sampson, James Worthy and Sam Perkins.",
  },
  {
    heading: "NC State, a tough job market, and an MBA detour",
    body: "He earned his undergraduate degree in business management from NC State in what was the worst year in a quarter-century for new grads to find work. A former coach pointed him to Campbell's MBA program. Life wasn't linear: he drifted, nearly ran out of time, earned a one-year extension, and “lived like a monk” to finish. Mike credits that year with teaching him to buckle down.",
  },
  {
    heading: "An elite recruiter",
    body: "Over a 27-year staffing career Mike earned Rookie of the Year, multiple Performer of the Year awards and regular President's Club honors. He personally placed more than 1,000 professionals — including roughly 40 at Wake Tech alone — and advised thousands of executives on building winning teams.",
  },
  {
    heading: "Founder, through the Great Recession",
    body: "During the 2008 downturn he was offered a general manager role three times and declined each one. The third offer sparked a question: if they trusted him to run this office, why not run his own company? He measured twice, studied the back office for a year, and launched a boutique IT staffing firm in 2010 that stayed profitable for 15+ consecutive years.",
  },
  {
    heading: "37 years on the mat",
    body: "Alongside his career, Mike has trained for 37 years in karate, kickboxing and jiu-jitsu. He was recognized in the #1 Amazon bestselling Who's Who in Martial Arts Legacy biography book, and has spent recent years among martial artists whose credo — Kaizen, continuous improvement — became the backbone of his leadership system.",
  },
  {
    heading: "Giving back",
    body: "Mike has mentored future executives at institutions like NC State University, and his insights have been featured 60+ times in outlets including USA Today, CareerBuilder and Staffing Industry Analysts. Today his goal is simple: help people find their successes and their victories.",
  },
];

export const speaking = {
  // TODO(mike): confirm the official keynote title.
  keynoteTitle: "The KAIZEN Keynote",
  keynoteSummary:
    "A high-energy keynote that marries elite physical discipline with corporate strategy. Mike walks through his six-letter KAIZEN system with stories from 27 years of building teams, a live martial arts demonstration, and an exercise that sends every attendee home with one micro action to commit to for the next 12 months.",
  formats: [
    { label: "Keynote", detail: "Typically 60 minutes" },
    { label: "Live demonstration", detail: "Martial arts technique, on stage" },
    { label: "Interactive", detail: "Micro-action cards & partner share" },
  ],
  themes: [
    {
      title: "Continuous improvement",
      body: "How micro actions — small, daily, sustainable — compound into elite results.",
    },
    {
      title: "Integrity in sales & leadership",
      body: "Why the relationship is worth more than any single deal, with real stories from the recruiting desk.",
    },
    {
      title: "Building winning teams",
      body: "Hiring lessons from 1,000+ placements and thousands of conversations with executives.",
    },
    {
      title: "The entrepreneur's discipline",
      body: "Measure twice, cut once. Scale up, scale down — and don't spend yourself out of business.",
    },
  ],
  audiences: [
    "Leadership summits & conferences",
    "Universities & student leaders",
    "Sales & recruiting teams",
    "Entrepreneurs & business owners",
  ],
  engagements: [
    { year: 2026, title: "Keynote Speaker", org: "Campbell University Leadership Summit" },
    // TODO(mike): add other recent talks and podcast appearances (PodMatch)
  ],
};

export const coaching = {
  intro:
    "For 27 years Mike helped people through some of the biggest decisions of their lives — finding the right career, helping a spouse land on their feet after a move, choosing where to put down roots. Coaching is how he keeps doing that work, one person at a time.",
  roles: [
    { title: "Encourager", body: "Someone in your corner who believes the change is possible." },
    { title: "Advisor", body: "Straight talk from decades of hiring, selling and building a business." },
    { title: "Cheerleader", body: "Celebrating the victories — the small ones especially." },
  ],
  focusAreas: [
    {
      title: "Leaders & executives",
      body: "Build and keep winning teams, lead with integrity, and make clearer decisions under pressure.",
    },
    {
      title: "Career moves",
      body: "Navigate a job search, a career change or a relocation with someone who has seen 1,000+ placements up close.",
    },
    {
      title: "Entrepreneurs",
      body: "Apply the discipline it takes to launch — and stay profitable through the downturns.",
    },
  ],
  // TODO(mike): define coaching formats, cadence and pricing (if any) before
  // publishing specifics. Until then, every engagement starts with a conversation.
};

export const inquiryTopics = ["Speaking", "Coaching", "Media / Podcast", "Other"] as const;
export type InquiryTopic = (typeof inquiryTopics)[number];
