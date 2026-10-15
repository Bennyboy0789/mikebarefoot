import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { schema } from "@/lib/schema";
import Image from "next/image";
import { KaizenExplorer } from "@/components/KaizenExplorer";
import { CtaBand, FeaturedIn, PageHero, QuoteBand, SpokenAt, Testimonials } from "@/components/sections";
import { ButtonLink, Container, Label, SectionHeading } from "@/components/ui";
import { ReelPlayer } from "@/components/ReelPlayer";
import { VideoFacade } from "@/components/VideoFacade";
import { featuredKeynote, podcasts, speaking } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Leadership Keynote Speaker | KAIZEN Keynote | Mike Barefoot" },
  description:
    "Book Raleigh, NC leadership keynote speaker Mike Barefoot. KAIZEN: The Pillars of Success pairs a live martial arts demo with 27 years of team-building lessons.",
  alternates: { canonical: "/speaking" },
};

const gallery = [
  {
    src: "/images/campbell-stage.jpg",
    alt: "Mike Barefoot on stage at Campbell University, his name on the screen behind him",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/campbell-room.jpg",
    alt: "A full room at Campbell University's 2026 Leadership Summit",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/campbell-group.jpg",
    alt: "Mike Barefoot with Leadership Summit attendees at Campbell University",
    width: 510,
    height: 680,
  },
];

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={schema.speaking} />
      <PageHero
        label="Leadership keynote speaker · Raleigh, NC"
        title={
          <>
            Elite discipline. <span className="italic text-crimson-light">Corporate strategy.</span>
          </>
        }
        intro="Mike's keynotes marry the discipline of 37 years in martial arts with the hard-won lessons of building teams, closing deals and running a profitable company."
        image="/images/mike-wide.jpg"
        imageAlt="Mike Barefoot delivering KAIZEN: The Pillars of Success"
      />

      {/* Highlight reel */}
      <section id="reel" className="scroll-mt-24 bg-obsidian">
        <Container className="pt-24 lg:pt-32">
          <div data-reveal className="relative">
            <div aria-hidden className="absolute -inset-3 border border-crimson/30" />
            <ReelPlayer
              src="/videos/mike-highlight-reel.mp4"
              captions="/videos/mike-highlight-reel.vtt"
              poster="/images/mike-reel-poster.jpg"
              title="KAIZEN: The Pillars of Success, in 72 seconds"
            />
          </div>
        </Container>
      </section>

      {/* Signature keynote */}
      <section className="bg-obsidian">
        <Container className="grid items-center gap-16 py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24 lg:py-40">
          <div>
            <SectionHeading index="01" label="Signature keynote" title={speaking.keynoteTitle} intro={speaking.keynoteSummary} />
            <dl data-reveal className="mt-12 grid border-y border-ash sm:grid-cols-3">
              {speaking.formats.map((f, i) => (
                <div key={f.label} className={`py-6 ${i > 0 ? "border-t border-ash sm:border-l sm:border-t-0 sm:pl-6" : ""}`}>
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-crimson-light">{f.label}</dt>
                  <dd className="mt-2 font-serif text-xl text-ivory">{f.detail}</dd>
                </div>
              ))}
            </dl>
            <div data-reveal className="mt-12">
              <ButtonLink href="/contact?topic=speaking">Check availability</ButtonLink>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-3 border border-crimson/30" />
            <VideoFacade id={featuredKeynote.youtubeId} title={featuredKeynote.event} poster="/images/campbell-keynote-poster.jpg" />
          </div>
        </Container>
      </section>

      <Testimonials index="02" />

      <FeaturedIn />

      {/* KAIZEN */}
      <section className="bg-coal">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="03"
            label="Inside the keynote"
            title={
              <>
                The KAIZEN <span className="italic text-crimson-light">system.</span>
              </>
            }
            intro="Each letter is a principle Mike has tested on the mat and at the recruiting desk. Audiences leave with all six — and one micro action of their own."
          />
          <div data-reveal className="mt-16">
            <KaizenExplorer />
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="border-t border-ash bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="04"
            label="Keynotes & workshops"
            title={
              <>
                Six topics. <span className="italic text-crimson-light">One playbook.</span>
              </>
            }
            intro={`Available as ${speaking.offerings.join(", ").toLowerCase().replace(/, ([^,]*)$/, " and $1")}, each tailored to your audience.`}
          />
          <ul className="mt-16 grid gap-px border border-ash bg-ash md:grid-cols-2 lg:grid-cols-3">
            {speaking.topics.map((t, i) => (
              <li key={t.title} data-reveal className="flex flex-col bg-obsidian p-8 sm:p-10">
                <span className="font-serif text-lg italic text-crimson-light">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-serif text-3xl leading-tight text-ivory sm:text-4xl">{t.title}</h3>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist">{t.subtitle}</p>
                <ul className="mt-6 space-y-3 border-t border-ash pt-6">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-ivory/80">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="mt-20 grid gap-10 border-t border-ash pt-12 lg:grid-cols-[16rem_1fr]">
            <Label>Built for</Label>
            <ul data-reveal className="flex flex-wrap gap-x-10 gap-y-5">
              {speaking.audiences.map((a) => (
                <li key={a} className="flex items-center gap-4 font-serif text-2xl text-ivory">
                  <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-crimson" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <QuoteBand
        quote="Energy management is more important than time management."
        cite="Mike Barefoot"
        context="on the E in KAIZEN"
      />

      {/* From the room */}
      <section className="bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="05"
            label="From the room"
            title={
              <>
                A full house <span className="italic text-crimson-light">at Campbell.</span>
              </>
            }
            intro="The 2026 Leadership Summit at Campbell University's Lundy-Fetterman School of Business."
          />
          <div data-reveal className="mt-16 grid gap-4 sm:grid-cols-3">
            {gallery.map((g) => (
              <figure key={g.src} className="group relative aspect-[3/4] overflow-hidden bg-coal">
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <SpokenAt />

      {/* Engagements */}
      <section className="bg-coal">
        <Container className="py-28 lg:py-36">
          <SectionHeading index="06" label="Recent stages" title="Where Mike has spoken." />
          <ul className="mt-14 border-t border-ash">
            {speaking.engagements.map((e) => (
              <li
                key={e.org}
                data-reveal
                className="grid gap-3 border-b border-ash py-8 sm:grid-cols-[10rem_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span
                  className={
                    e.when && /^\d{4}$/.test(e.when)
                      ? "text-crimson-gradient font-serif text-4xl"
                      : "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mist"
                  }
                >
                  {e.when}
                </span>
                <span className="font-serif text-3xl text-ivory sm:text-4xl">
                  {e.href ? (
                    <a href={e.href} target="_blank" rel="noopener" className="transition-colors hover:text-crimson-light">
                      {e.org} <span aria-hidden className="text-xl text-crimson-light">↗</span>
                    </a>
                  ) : (
                    e.org
                  )}
                </span>
                <Label>{e.title}</Label>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Podcasts */}
      <section className="border-t border-ash bg-obsidian">
        <Container className="py-28 lg:py-36">
          <SectionHeading
            index="07"
            label="Podcasts"
            title={
              <>
                On the <span className="italic text-crimson-light">mic.</span>
              </>
            }
            intro="Long-form conversations about discipline, hiring, integrity and playing the long game — a good way to hear how Mike thinks before you book."
          />
          <ul className="mt-14 grid gap-px border border-ash bg-ash md:grid-cols-2">
            {podcasts.map((p) => (
              <li key={p.href} className="bg-obsidian">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-coal sm:p-10"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <Label>{p.show}</Label>
                    <span className="shrink-0 text-sm text-mist">{p.date}</span>
                  </span>
                  <span className="mt-6 font-serif text-3xl leading-tight text-ivory transition-colors group-hover:text-crimson-light">
                    {p.episode}
                  </span>
                  <span className="mt-auto pt-6 text-sm text-mist">
                    {p.host ? `with ${p.host} · ` : ""}Listen <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
