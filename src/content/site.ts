// Single source of truth for site copy and facts.
//
// Every factual claim below comes from material Mike supplied or said on stage:
//  - his keynote at Campbell University's 2026 Leadership Summit
//    (https://www.youtube.com/watch?v=QgJrb609-Fo), host intro + his own words
//  - his "KAIZEN: The Pillars of Success" talk at BORN Toastmasters' Brain Candy
//  - his speaker one-pager and a recommendation letter (Oct 2026)
// Testimonials are reproduced verbatim. Per README content rules, do not add
// credentials, testimonials, programs or prices that aren't confirmed by Mike.
// Unknowns are marked TODO(mike).

export const site = {
  name: "Mike Barefoot",
  role: "Leadership Speaker & Coach",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://barefoot.stagmkt.dev",
  // Stay out of search engines until a production domain is configured.
  indexable: process.env.VERCEL_ENV === "production" && Boolean(process.env.NEXT_PUBLIC_SITE_URL),
  description:
    "Mike Barefoot is a leadership speaker and coach who blends 37 years of martial arts discipline with a 27-year career building winning teams in the staffing industry.",
  location: "Raleigh, North Carolina",
  // TODO(mike): confirm spelling. The Campbell slide says "RedZone Resources",
  // the recommendation letter says "Red Zone Resources".
  company: "RedZone Resources",
  // From Mike's speaker one-pager.
  tagline: "Discipline in the dojo. Results in the workplace.",
  // TODO(mike): the one-pager lists mikebarefootspeaks.net. Confirm it's the
  // production domain, then set NEXT_PUBLIC_SITE_URL.
  // TODO(mike): confirm public contact email. The keynote audio sounds like
  // "mike@mikebarefoot.com" but it's unclear; leave null until confirmed.
  email: null as string | null,
  social: {
    youtube: "https://www.youtube.com/@MikeBarefootspeaks",
    // TODO(mike): LinkedIn (on the one-pager, no URL), Instagram, Facebook, PodMatch
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

// Supplied by Mike (Oct 2026). Verbatim: don't edit the wording. `pull` must
// stay an exact excerpt of `letter`.
export const featuredTestimonial = {
    pull: "Your ability to connect with the room, share practical wisdom, and inspire meaningful reflection made your session one of the highlights of the summit.",
    salutation: "Dear Mike,",
    letter: [
      "Thank you for being a featured speaker at our Leadership Summit, Leading with Purpose. Your insights, energy, and authentic perspective made a meaningful impact on our community and contributed greatly to the success of the event.",
      "You challenged our audience to think differently about leadership—not simply as a position, but as an opportunity to lead with intention, clarity, and purpose. Your ability to connect with the room, share practical wisdom, and inspire meaningful reflection made your session one of the highlights of the summit.",
      "We are incredibly grateful for the time and expertise you shared with Campbell University Community. It was a privilege to have you as part of this important conversation, and we look forward to seeing the continued impact of your work.",
    ],
    signoff: ["With sincere appreciation,", "Wendy and the entire Lundy Fetterman School of Business Staff"],
    name: "Wendy Welker",
    title: "Director of Development and Special Projects",
    org: "Lundy-Fetterman School of Business",
    institution: "Campbell University",
    event: "Leadership Summit · Leading with Purpose",
};

// Verbatim from Mike's speaker one-pager and recommendation letter.
export const testimonials = [
  {
    quote:
      "Thank you for generously giving of your time—once again—to help our MBA students understand the world of executive recruiting.",
    name: "Annie Murray",
    title: "Director of MBA Careers",
    org: "NC State University",
  },
  {
    // Excerpt of a recommendation letter. TODO(mike): the letter is unsigned.
    // Add the writer's name (and confirm they're happy to be quoted).
    quote:
      "His depth of experience and knowledge as well as his interpersonal skills and ability to connect with the audience in a relaxed comfortable way made the presentation enjoyable. The students loved it!",
    name: null as string | null,
    title: "Former Director of Human Resources",
    org: "Wake Tech Community College",
  },
  {
    quote: "Thank you for speaking at our seminar. Keep doing great things!",
    name: "Lawrence Arthur",
    title: "President",
    org: "The GOAT Awards",
  },
];

// From the host's introduction at Campbell.
export const stats = [
  { value: "37", label: "Years in martial arts", detail: "Karate, kickboxing & jiu-jitsu" },
  { value: "27", label: "Year staffing career", detail: "Recruiter, account executive, founder" },
  { value: "1,000+", label: "Professionals placed", detail: "Personally" },
  { value: "$50M+", label: "Revenue generated", detail: "Across his career" },
  { value: "15+", label: "Years of unbroken profitability", detail: "At the IT staffing firm he founded" },
  { value: "60+", label: "Media features", detail: "Including USA Today & CareerBuilder" },
];

export const mediaMentions = [
  "USA Today",
  "CareerBuilder",
  "Staffing Industry Analysts",
  "Small Business & Technology Development Center",
];

// Organizations Mike has spoken for. Logos are white knock-outs of files Mike supplied.
export const spokenAt = [
  { name: "Campbell University", logo: { src: "/images/logo-campbell.png", width: 610, height: 141 } },
  { name: "Wake Tech Community College", logo: { src: "/images/logo-wake-tech.png", width: 579, height: 246 } },
  { name: "NC State University MBA", logo: null },
  { name: "BORN Toastmasters", logo: null },
  { name: "The GOAT Awards", logo: null },
];

export const recruiterHonors = ["Rookie of the Year", "Multiple Performer of the Year awards", "Regular President's Club honors"];

// From the award Mike is pictured holding, plus the Campbell host's introduction.
// TODO(mike): confirm the year(s).
export const martialArtsHonors = [
  "AMAA Who's Who in the Martial Arts Legacy Award",
  "Inducted into the AMAA Who's Who in the Martial Arts Hall of Honors",
  "Profiled in the #1 Amazon bestselling Who's Who in the Martial Arts Legacy biography book",
];

// Mike's KAIZEN system — "Kaizen" is Japanese for continuous improvement.
export const kaizen = [
  {
    // TODO(mike): K is "Knowledge" at Campbell (2026) but "Kindness" in the
    // Toastmasters talk. Confirm which one is canonical.
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
    line: "Energy management beats time management.",
    body: "Four times in his career Mike carried 50+ consultants at once while juggling 100+ open jobs a month. You may be dog tired, but when the opportunity lands you summon the energy at a moment's notice, and keep showing up through the battle of attrition.",
  },
  {
    // "Not a word as much as a phrase": the ability to say no (both talks).
    letter: "N",
    word: "No",
    line: "The ability to say no — then go all in.",
    body: "Charlie Munger, Berkshire Hathaway's famous “no man,” held that 99 of 100 opportunities aren't good. Be wary, be discerning, be agile — and when the right one comes, give it everything. Mike turned down a general manager role three times before recognizing his: running his own company.",
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
    body: "When the 2008 downturn shrank his office from five practice groups to one, Mike's IT group was the only one still profitable — and he was its only salesperson. He was offered the general manager role three times and declined each one. The third offer sparked a question: if they trusted him to run this office, why not run his own company? He measured twice, studied the back office for a year, and in 2010 launched RedZone Resources, a boutique IT staffing firm that stayed profitable for 15+ consecutive years.",
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
  keynoteTitle: "KAIZEN: The Pillars of Success",
  keynoteSummary:
    "A high-energy keynote that marries elite physical discipline with corporate strategy. Mike walks through his six-letter KAIZEN system with stories from 27 years of building teams, a live martial arts demonstration, and an exercise that sends every attendee home with one micro action to commit to for the next 12 months.",
  formats: [
    { label: "Keynote", detail: "Typically 60 minutes" },
    { label: "Live demonstration", detail: "Martial arts technique, on stage" },
    { label: "Interactive", detail: "Micro-action cards & partner share" },
  ],
  // From Mike's speaker one-pager.
  offerings: ["In-person keynotes", "Interactive workshops", "Executive panel discussions"],
  // Keynote & workshop topics, from Mike's one-pagers and session listings.
  topics: [
    {
      title: "KAIZEN: The Pillars of Success",
      subtitle: "Find and keep the best team",
      points: [
        "Applying martial arts discipline and continuous improvement to recruiting and leadership.",
        "Actionable retention strategies that reduce turnover and elevate team culture.",
      ],
    },
    {
      title: "1% Better Daily",
      subtitle: "A culture of micro-recognition",
      points: [
        "How small, frequent micro-recognitions outperform delayed annual reviews.",
        "Practical leadership routines that build loyalty, morale and everyday ownership.",
      ],
    },
    {
      title: "Winning the Talent Game",
      subtitle: "Find. Develop. Retain. Build what's next.",
      points: [
        "Real-world insight from 27 years in staffing and 1,000+ placements.",
        "Attract the right talent, develop it for the long term, and keep it through culture and opportunity.",
      ],
    },
    {
      title: "Kaizen Learning",
      subtitle: "Replacing seminars with micro-learning",
      points: [
        "Why day-long seminars fail to create lasting behavioral change in modern teams.",
        "Structuring bite-sized, on-demand learning that staff actually retain and apply.",
      ],
    },
    {
      title: "The Lean HR Department",
      subtitle: "Eliminating administrative waste",
      points: [
        "Identifying friction and waste in sourcing, screening and onboarding.",
        "Streamlining HR workflows so teams spend their time on people, not paperwork.",
      ],
    },
    {
      title: "Beyond the Resume",
      subtitle: "Launching your career",
      points: [
        "Strategies for job hunting and interviewing, from 20+ years on the recruiter's side of the desk.",
        "What recruiters look for, and how to position yourself at the top of their list.",
      ],
    },
  ],
  audiences: [
    "Leadership summits & conferences",
    "Universities & student leaders",
    "HR & talent leaders",
    "Sales & recruiting teams",
    "Entrepreneurs & business owners",
  ],
  // TODO(mike): years for the undated talks; add podcast appearances (PodMatch).
  engagements: [
    { when: "2026", org: "Campbell University", title: "Leadership Summit keynote · Leading with Purpose" },
    { when: null, org: "BORN Toastmasters · Brain Candy", title: "KAIZEN: The Pillars of Success" },
    { when: "Multiple years", org: "NC State University", title: "MBA program guest speaker" },
    { when: null, org: "Wake Tech Community College", title: "Introduction to Business guest speaker" },
    { when: null, org: "The GOAT Awards", title: "Seminar speaker" },
  ] as { when: string | null; org: string; title: string }[],
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
