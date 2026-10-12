import type { Metadata } from "next";
import { CtaBand, KaizenGrid, PageHero, YouTubeEmbed } from "@/components/sections";
import { ButtonLink, Container, SectionHeading } from "@/components/ui";
import { featuredKeynote, speaking } from "@/content/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Book Mike Barefoot for your leadership summit, conference or team event. His KAIZEN keynote pairs a live martial arts demonstration with lessons from 27 years of building winning teams.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking"
        title={
          <>
            Elite discipline.
            <br />
            <span className="text-seal">Corporate strategy.</span>
          </>
        }
        intro="Mike's keynotes marry the discipline of 37 years in martial arts with the hard-won lessons of building teams, closing deals and running a profitable company."
      />

      {/* Signature keynote */}
      <section className="bg-paper">
        <Container className="grid gap-14 py-24 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Signature keynote" title={speaking.keynoteTitle} intro={speaking.keynoteSummary} />
            <dl className="mt-10 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
              {speaking.formats.map((f) => (
                <div key={f.label} className="bg-paper p-5">
                  <dt className="font-display text-lg font-bold uppercase tracking-wide">{f.label}</dt>
                  <dd className="mt-1 text-sm text-stone">{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <YouTubeEmbed id={featuredKeynote.youtubeId} title={featuredKeynote.title} />
            <p className="mt-4 text-center font-display text-sm uppercase tracking-[0.2em] text-stone">
              {featuredKeynote.event}, {featuredKeynote.year}
            </p>
          </div>
        </Container>
      </section>

      {/* KAIZEN detailed */}
      <section className="bg-paper-deep">
        <Container className="py-24">
          <SectionHeading
            eyebrow="Inside the keynote"
            title="The KAIZEN system"
            intro="Each letter is a principle Mike has tested on the mat and at the recruiting desk. Audiences leave with all six — and one micro action of their own."
          />
          <div className="mt-12">
            <KaizenGrid detailed />
          </div>
        </Container>
      </section>

      {/* Themes + audiences */}
      <section className="bg-ink text-paper">
        <Container className="grid gap-16 py-24 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading dark eyebrow="Themes" title="What Mike speaks on" />
            <ul className="mt-10 grid gap-px bg-ink-line sm:grid-cols-2">
              {speaking.themes.map((t) => (
                <li key={t.title} className="bg-ink p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-light">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading dark eyebrow="Audiences" title="Built for" />
            <ul className="mt-10 space-y-3">
              {speaking.audiences.map((a) => (
                <li key={a} className="flex items-center gap-4 border-b border-ink-line pb-3 text-lg">
                  <span aria-hidden className="h-2 w-2 bg-seal" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Engagements */}
      <section className="bg-paper">
        <Container className="py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Recent stages" title="Where Mike has spoken" />
            <ButtonLink href="/contact" className="shrink-0">
              Check availability
            </ButtonLink>
          </div>
          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {speaking.engagements.map((e) => (
              <li key={`${e.year}-${e.org}`} className="grid gap-2 py-6 sm:grid-cols-[6rem_1fr_auto] sm:items-center">
                <span className="font-display text-2xl font-bold text-seal">{e.year}</span>
                <span className="font-display text-2xl font-bold uppercase leading-tight">{e.org}</span>
                <span className="text-stone">{e.title}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
