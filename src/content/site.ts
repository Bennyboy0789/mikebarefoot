// Single source of truth for site copy and facts.
//
// Every factual claim below comes from material Mike supplied or said on stage:
//  - his keynote at Campbell University's 2026 Leadership Summit
//    (https://www.youtube.com/watch?v=QgJrb609-Fo), host intro + his own words
//  - his "KAIZEN: The Pillars of Success" talk at BORN Toastmasters' Brain Candy
//  - his speaker one-pager and a recommendation letter (Oct 2026)
//  - his podcast interviews (see `podcasts` below) and their show notes
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
  // TODO(mike): Mike is expected to set up a new email for speaking; use it here once
  // confirmed. (On the Wisdom Journey podcast he gives mikeb@redzoneresources.com,
  // the closed firm's address, so don't use that.) The Live More Show notes
  // (Sept 2026) list mike@mikebarefoot.com, which matches the keynote audio and may
  // be the new one. Leave null until confirmed.
  email: null as string | null,
  social: {
    youtube: "https://www.youtube.com/@MikeBarefootspeaks",
    // From the Wisdom Journey episode description.
    linkedin: "https://www.linkedin.com/in/mikebarefoot/",
    // From the Live More Show notes ("Connect to Mike").
    instagram: "https://www.instagram.com/michael.r.barefoot/",
    // TODO(mike): Facebook profile URL (notes list "Michael Ray Barefoot"), PodMatch
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
  // Short form for tight spots (hero). Must stay an exact excerpt of `pull`.
  excerpt: "…made your session one of the highlights of the summit.",
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
    // Excerpt of a recommendation letter. TODO(mike): the letter is unsigned; the .docx
    // author field says "Denise H. Barton". Confirm she wrote it and is happy to be named.
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
  { value: "37", label: "Years in martial arts", detail: "7th-degree black belt in karate" },
  { value: "27", label: "Year staffing career", detail: "Recruiter, account executive, founder" },
  { value: "1,000+", label: "Professionals placed", detail: "Personally" },
  { value: "$50M+", label: "Revenue generated", detail: "Across his career" },
  { value: "15+", label: "Years of unbroken profitability", detail: "At the IT staffing firm he founded" },
  { value: "60+", label: "Media features", detail: "Including USA Today & CareerBuilder" },
];

export const mediaMentions = [
  "USA Today",
  "CareerBuilder",
];

// White knock-outs of each outlet's current logo (Wikimedia Commons; originals in _source/images).
export const mediaLogos: Record<string, { src: string; width: number; height: number }> = {
  "USA Today": { src: "/images/logo-usa-today.png", width: 640, height: 96 },
  CareerBuilder: { src: "/images/logo-careerbuilder.png", width: 768, height: 96 },
};

// Organizations Mike has spoken for. Logos are white knock-outs of files Mike supplied
// (Campbell, Wake Tech), of each organization's own site logo (born.toastmastersclubs.org,
// goathonors.org), or of NC State's brick logo from Wikimedia Commons; originals in _source/images.
export const spokenAt = [
  { name: "Campbell University", logo: { src: "/images/logo-campbell.png", width: 610, height: 141 } },
  { name: "Wake Tech Community College", logo: { src: "/images/logo-wake-tech.png", width: 579, height: 246 } },
  { name: "NC State University MBA", logo: { src: "/images/logo-nc-state.png", width: 604, height: 260 } },
  { name: "BORN Toastmasters", logo: { src: "/images/logo-born-toastmasters.png", width: 276, height: 156 } },
  // The awards' own branding is "G.O.A.T. Honors"; Mike's materials say "The GOAT Awards".
  { name: "The GOAT Awards", logo: { src: "/images/logo-goat-honors.png", width: 454, height: 387 } },
];

export const recruiterHonors = ["Rookie of the Year", "Multiple Performer of the Year awards", "Regular President's Club honors"];

// From the award Mike is pictured holding, the Campbell host's introduction, and the
// bio read on Healthy Mind, Healthy Life (Dec 2025).
// TODO(mike): confirm the year(s), and the ranks as worded here.
export const martialArtsHonors = [
  "7th-degree black belt in karate",
  "4th-degree black belts in jiu-jitsu and kickboxing",
  "Multiple-time Hall of Fame inductee",
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
    body: "Mike once advised a client to rescind an offer to his own candidate — walking away from a high five-figure fee — because protecting the relationship mattered more. One action can build trust for years or burn it down in a day. Over his career he has turned down more than $100,000 in placement fees rather than make a hire he didn't believe in.",
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
    body: "Born in Fayetteville, Mike grew up in the Raleigh area and spent six years in nearby Dunn, North Carolina. At 11 he spent his first week away from home at Campbell University's basketball camp — then the oldest and largest in the country — and kept coming back for five summers, watching counselors like Michael Jordan, Ralph Sampson, James Worthy and Sam Perkins.",
  },
  {
    heading: "NC State, a tough job market, and an MBA detour",
    body: "At NC State he called women's ACC tournament games on WKNC, the campus radio station, and spent two months working out with Jim Valvano's basketball team as a walk-on — until a blunt “reality lecture” convinced him the juice wasn't worth the squeeze. He earned his degree in business management in 1991, the worst year in a quarter-century for new grads to find work. A former coach pointed him to Campbell's MBA program. Life wasn't linear: he drifted, nearly ran out of time, earned a one-year extension, and “lived like a monk” to finish. Mike credits that year with teaching him to buckle down.",
  },
  {
    heading: "Service before the sale",
    body: "While earning his MBA, Mike worked customer service at Centel Cellular (later Alltel), taking 60 to 80 calls a day. A company course taught him that everyone is a customer, and that each caller is a person, not a ticket. He carried that into sales and networking: service first, relationships over transactions. “I don't look at it as what can I get from you,” he says. “I look at it as how can I serve you?”",
  },
  {
    heading: "An elite recruiter",
    body: "Mike worked for three of the largest staffing firms in the world, first as a recruiter and then as an account executive, earning Rookie of the Year, multiple Performer of the Year awards and regular President's Club honors. That included four and a half years working commission-only at Matrix Resources, then the largest IT staffing firm in the Southeast. He kept notes on every contact — their kids, their schools, their favorite teams — so clients who hadn't spoken to him in a year called him first. Over 27 years he personally placed more than 1,000 professionals, including roughly 40 at Wake Tech alone, and advised thousands of executives on building winning teams.",
  },
  {
    // Closed June 30, 2025: "June 30th last year" on Wisdom Journey (mid-2026), and
    // already closed by his Your Next Success interview (Apr 2026).
    heading: "Founder, through the Great Recession",
    body: "When the 2008 downturn shrank his office from five practice groups to one, Mike's IT group was the only one still profitable — and he was its only salesperson. He was offered the general manager role three times and declined each one. The third offer sparked a question: if they trusted him to run this office, why not run his own company? He measured twice, studied the back office for a year, and in 2010 launched RedZone Resources, a boutique IT staffing firm that stayed profitable every one of its 15+ years. North Carolina Central University became its biggest client, with at least 100 placements. In 2025 he closed the firm to focus on speaking and coaching.",
  },
  {
    heading: "37 years on the mat",
    body: "Mike started karate in 1989 almost by accident: basketball was winding down, and a friend could see he needed something to fill the hours. Six months in he discovered sparring, and it stuck. From 2000 to 2009 his school trained in the system of Bill “Superfoot” Wallace, one of the greatest kickboxers of all time, and in 2006 he added jiu-jitsu. He has trained in all three ever since, earning a 7th-degree black belt in karate and 4th-degree ranks in jiu-jitsu and kickboxing. He was recognized in the #1 Amazon bestselling Who's Who in Martial Arts Legacy biography book, and found in the martial artists' credo — Kaizen, continuous improvement — the backbone of his leadership system. “I don't like to say I'm a master of anything,” he says. “I'm a big student of everything.”",
  },
  {
    heading: "Giving back",
    body: "Mike has mentored future executives at institutions like NC State University, and his insights have been featured 60+ times in outlets including USA Today and CareerBuilder. Today his goal is simple: help people find their successes and their victories.",
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
  // TODO(mike): years for the undated talks.
  engagements: [
    { when: "2026", org: "Campbell University", title: "Leadership Summit keynote · Leading with Purpose" },
    { when: null, org: "BORN Toastmasters · Brain Candy", title: "KAIZEN: The Pillars of Success" },
    { when: "Three years running", org: "NC State University", title: "MBA program guest speaker" },
    { when: null, org: "Wake Tech Community College", title: "Introduction to Business guest speaker" },
    // Date from the recording Mike sent (25 Jul 2026); his topic was financial independence.
    { when: "2026", org: "The GOAT Awards", title: "Seminar speaker · Financial independence" },
  ] as { when: string | null; org: string; title: string; href?: string }[],
};

// Podcast interviews, newest first. Mike says Wisdom Journey was his 10th.
// TODO(mike): add the rest.
export const podcasts = [
  {
    show: "Wisdom Journey",
    host: null as string | null,
    episode: "How to Stay Disciplined When Business Gets Hard",
    date: "Sept 2026",
    href: "https://www.youtube.com/watch?v=RHYOfUPrtIA",
  },
  {
    show: "Live More Show",
    host: "Melanie Sikma",
    episode: "Success Starts With Serving Others and Staying the Course",
    date: "Sept 2026",
    href: "https://www.livemoreshow.com/success-starts-with-serving-others-and-staying-the-course/",
  },
  {
    show: "Your Next Success",
    host: "Dr. Caroline Sangal",
    episode: "Hiring Decisions and Lessons Earned",
    date: "Apr 2026",
    href: "https://www.nextsuccesspodcast.com/2446588/episodes/18927377-mike-barefoot-hiring-decisions-and-lessons-earned",
  },
  {
    show: "Healthy Mind, Healthy Life",
    host: "Avik Chakraborty",
    episode: "Build Mental Toughness Through Movement",
    date: "Dec 2025",
    href: "https://www.podhealth.club/e/build-mental-toughness-through-movement-with-mike-barefoot/",
  },
];

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
      body: "Build and keep winning teams, lead each personality the way they need to be led, and make clearer decisions under pressure.",
    },
    {
      title: "Career moves",
      body: "One person's floor is another person's ceiling. Define what success means for you, then navigate a job search, a career change or a relocation with someone who has seen 1,000+ placements up close.",
    },
    {
      title: "Entrepreneurs",
      body: "Apply the discipline it takes to launch, separate what you need from what you want, and stay profitable through the downturns.",
    },
  ],
  // Public Google review of Red Zone Resources (screenshot from Mike, Oct 2026; original in
  // _source/images/life/IMG_6579.jpeg). Verbatim except the ellipsis, which drops
  // "He is unlike a lot of recruiters," since coaching isn't recruiting.
  endorsement: {
    quote:
      "I've known Mike Barefoot for 22 years… he listens and understands who you are and what you want or need to do. He understands the market and what drives people. He is the contact you need in your corner.",
    name: "Mark Fowle",
    source: "Google review · Red Zone Resources",
  },
  // TODO(mike): define coaching formats, cadence and pricing (if any) before
  // publishing specifics. Until then, every engagement starts with a conversation.
};

export const inquiryTopics = ["Speaking", "Coaching", "Media / Podcast", "Other"] as const;
// Mike runs keynotes, workshops and panels in person, and has presented over Teams.
export const eventFormats = ["In-person keynote", "Interactive workshop", "Executive panel", "Virtual session", "Not sure yet"];
export const audienceSizes = ["Under 50", "50–150", "150–500", "500+"];
export type InquiryTopic = (typeof inquiryTopics)[number];
