import type { Metadata } from "next";
import { KaizenExplorer } from "@/components/KaizenExplorer";
import { CtaBand, FeaturedIn, PageHero } from "@/components/sections";
import { ButtonLink, Container, Label, SectionHeading } from "@/components/ui";
import { VideoFacade } from "@/components/VideoFacade";
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
        label="Keynote speaking"
        title={
          <>
            Elite discipline. <span className="italic text-brass-light">Corporate strategy.</span>
          </>
        }
        intro="Mike's keynotes marry the discipline of 37 years in martial arts with the hard-won lessons of building teams, closing deals and running a profitable company."
        image="/images/mike-stage-wide.jpg"
        imageAlt="Mike Barefoot delivering a keynote to students at Campbell University"
      />

      {/* Signature keynote */}
      <section className="bg-obsidian">
        <Container className="grid items-center gap-16 py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:py-40">
          <div>
            <SectionHeading index="01" label="Signature keynote" title={speaking.keynoteTitle} intro={speaking.keynoteSummary} />
            <dl data-reveal className="mt-12 grid border-y border-ash sm:grid-cols-3">
              {speaking.formats.map((f, i) => (
                <div key={f.label} className={`py-6 ${i > 0 ? "border-t border-ash sm:border-l sm:border-t-0 sm:pl-6" : ""}`}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-brass">{f.label}</dt>
                  <dd className="mt-2 font-serif text-xl text-ivory">{f.detail}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal className="mt-12">
              <ButtonLink href="/contact?topic=speaking">Check availability</ButtonLink>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-3 border border-brass/30" />
            <VideoFacade id={featuredKeynote.youtubeId} title={featuredKeynote.event} poster="/images/mike-stage-wide.jpg" />
          </div>
        </Container>
      </section>

      <FeaturedIn />

      {/* KAIZEN */}
      <section className="bg-coal">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="02"
            label="Inside the keynote"
            title={
              <>
                The KAIZEN <span className="italic text-brass-light">system.</span>
              </>
            }
            intro="Each letter is a principle Mike has tested on the mat and at the recruiting desk. Audiences leave with all six — and one micro action of their own."
          />
          <div data-reveal className="mt-16">
            <KaizenExplorer />
          </div>
        </Container>
      </section>

      {/* Themes + audiences */}
      <section className="border-t border-ash bg-obsidian">
        <Container className="grid gap-20 py-28 lg:grid-cols-[1.4fr_1fr] lg:gap-24 lg:py-40">
          <div>
            <SectionHeading index="03" label="Themes" title="What Mike speaks on." />
            <ul data-reveal className="mt-14 grid gap-px border border-ash bg-ash sm:grid-cols-2">
              {speaking.themes.map((t, i) => (
                <li key={t.title} className="bg-obsidian p-8">
                  <span className="font-serif text-lg italic text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-ivory">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading index="04" label="Audiences" title="Built for." />
            <ul className="mt-14 border-t border-ash">
              {speaking.audiences.map((a) => (
                <li key={a} data-reveal className="flex items-center gap-5 border-b border-ash py-6 font-serif text-2xl text-ivory">
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-brass" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Engagements */}
      <section className="border-t border-ash bg-coal">
        <Container className="py-28 lg:py-36">
          <SectionHeading index="05" label="Recent stages" title="Where Mike has spoken." />
          <ul className="mt-14 border-t border-ash">
            {speaking.engagements.map((e) => (
              <li
                key={`${e.year}-${e.org}`}
                data-reveal
                className="grid gap-3 border-b border-ash py-8 sm:grid-cols-[8rem_1fr_auto] sm:items-baseline"
              >
                <span className="text-brass-gradient font-serif text-4xl">{e.year}</span>
                <span className="font-serif text-3xl text-ivory sm:text-4xl">{e.org}</span>
                <Label>{e.title}</Label>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
