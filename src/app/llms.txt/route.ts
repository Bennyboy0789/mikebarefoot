import { kaizen, podcasts, site, speaking, spokenAt } from "@/content/site";

// /llms.txt: a plain-text summary for AI assistants (llmstxt.org), built from site.ts.
export const dynamic = "force-static";

export function GET() {
  const u = (path: string) => `${site.url}${path}`;
  const body = `# ${site.name}

> ${site.name} is a leadership keynote speaker and coach based in ${site.location}. He blends 37 years of martial arts discipline (7th-degree black belt in karate) with a 27-year career building winning teams in the staffing industry, and speaks on leadership, recruiting, retention and continuous improvement (Kaizen).

Tagline: ${site.tagline}
He founded ${site.company}, a boutique IT staffing firm (2010 to 2025) that stayed profitable every one of its 15+ years, and personally placed 1,000+ professionals over his career. His insights have been featured 60+ times in outlets including USA Today and CareerBuilder.

## Key pages
- [Home](${u("/")}): Overview of speaking and coaching.
- [About](${u("/about")}): His story: NC State and a Campbell MBA, elite recruiter, founder of ${site.company}, 37 years of martial arts.
- [Speaking](${u("/speaking")}): Signature keynote "${speaking.keynoteTitle}" (typically 60 minutes, with a live martial arts demonstration), plus ${speaking.offerings.slice(1).join(" and ").toLowerCase()}. Topics: ${speaking.topics.map((t) => t.title).join("; ")}.
- [Coaching](${u("/coaching")}): Coaching for leaders and executives, career moves, and entrepreneurs.
- [Speaker kit](${u("/speaker-kit")}): Short and long bios and print-ready headshots for event promotion.
- [Contact](${u("/contact")}): Speaking, coaching and media inquiries.

## Facts
- Location: ${site.location}
- Has spoken for: ${spokenAt.map((o) => o.name).join(", ")}
- KAIZEN framework: ${kaizen.map((k) => k.word).join(", ")}
- Audiences: ${speaking.audiences.join("; ")}

## Elsewhere
${Object.entries(site.social)
  .map(([name, href]) => `- [${name[0].toUpperCase()}${name.slice(1)}](${href})`)
  .join("\n")}
${podcasts.map((p) => `- Podcast: [${p.show}: ${p.episode}](${p.href})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
