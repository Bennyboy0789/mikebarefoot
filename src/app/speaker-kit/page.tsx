import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/sections";
import { Container, Label, SectionHeading } from "@/components/ui";
import { schema } from "@/lib/schema";
import { site, speaking } from "@/content/site";
import { CopyButton } from "./CopyButton";

export const metadata: Metadata = {
  title: { absolute: "Speaker Kit | Mike Barefoot Bio & Headshots" },
  description:
    "Bios and print-ready headshots for promoting a Mike Barefoot keynote, plus his signature keynote, formats and topics at a glance.",
  alternates: { canonical: "/speaker-kit" },
};

// TODO(mike): approve both bios. Every fact in them is already on the site (About, Speaking, stats).
const bios = [
  {
    label: "Short bio",
    words: "About 70 words",
    text: `${site.name} is a leadership speaker and coach based in ${site.location}. He pairs 37 years of martial arts training, including a 7th-degree black belt in karate, with a 27-year staffing career in which he personally placed more than 1,000 professionals and founded ${site.company}, an IT staffing firm that stayed profitable for 15+ years. His keynote, KAIZEN: The Pillars of Success, shows leaders how small daily micro actions compound into elite results.`,
  },
  {
    label: "Long bio",
    words: "About 200 words",
    text: [
      `${site.name} is a leadership speaker and coach based in ${site.location} who has spent his life mastering two seemingly different worlds: the dojo and the boardroom.`,
      `After earning a business management degree from NC State and an MBA from Campbell University, Mike spent 27 years in staffing. He worked for three of the largest staffing firms in the world as a recruiter and account executive, earning Rookie of the Year, multiple Performer of the Year awards and regular President's Club honors. In 2010 he launched ${site.company}, a boutique IT staffing firm that stayed profitable every one of its 15+ years before he closed it in 2025 to focus on speaking and coaching. Over his career he personally placed more than 1,000 professionals, and his insights have been featured 60+ times in outlets including USA Today and CareerBuilder.`,
      `Mike has trained in martial arts for 37 years and holds a 7th-degree black belt in karate. From the martial artists' credo he built KAIZEN, a six-part system for continuous improvement. His keynote, KAIZEN: The Pillars of Success, combines stories from the recruiting desk with a live martial arts demonstration, and sends every attendee home with one micro action to commit to for the next 12 months.`,
    ].join("\n\n"),
  },
];

const headshots = [
  { src: "/downloads/mike-barefoot-headshot-color.jpg", label: "Color", alt: "Mike Barefoot headshot, color" },
  { src: "/downloads/mike-barefoot-headshot-bw.jpg", label: "Black & white", alt: "Mike Barefoot headshot, black and white" },
];

export default function SpeakerKitPage() {
  return (
    <>
      <JsonLd data={schema.speakerKit} />
      <PageHero
        label="Mike Barefoot · Speaker kit"
        title={
          <>
            Everything you need <span className="italic text-crimson-light">to promote the talk.</span>
          </>
        }
        intro="Bios to copy, headshots to download, and the keynote at a glance, for programs, event pages and introductions."
        image="/images/mike-headshot.jpg"
        imageAlt="Mike Barefoot"
      />

      {/* Bios */}
      <section className="bg-obsidian">
        <Container className="py-24 lg:py-32">
          <SectionHeading index="01" label="Bios" title="In a few words, or a few more." />
          <div className="mt-14 grid gap-px border border-ash bg-ash lg:grid-cols-[0.8fr_1.2fr]">
            {bios.map((b) => (
              <article key={b.label} className="flex flex-col bg-obsidian p-8 sm:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-3xl text-ivory">{b.label}</h3>
                  <span className="text-sm text-mist">{b.words}</span>
                </div>
                <div className="mt-6 flex-1 space-y-4 leading-relaxed text-ivory/85">
                  {b.text.split("\n\n").map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <CopyButton text={b.text} label={`Copy ${b.label.toLowerCase()}`} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Headshots */}
      <section className="border-t border-ash bg-coal">
        <Container className="py-24 lg:py-32">
          <SectionHeading
            index="02"
            label="Headshots"
            title="Print-ready photos."
            intro="2400 × 2400 JPEGs, large enough for print programs and event screens."
          />
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:max-w-4xl">
            {headshots.map((h) => (
              <li key={h.src}>
                <a href={h.src} download className="group block">
                  <div className="relative aspect-square overflow-hidden bg-obsidian">
                    <Image
                      src={h.src}
                      alt={h.alt}
                      fill
                      sizes="(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="mt-5 flex items-center justify-between gap-4">
                    <span className="font-serif text-2xl text-ivory">{h.label}</span>
                    <span className="py-2 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light group-hover:text-ivory">
                      Download <span aria-hidden>↓</span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* At a glance */}
      <section className="border-t border-ash bg-obsidian">
        <Container className="py-24 lg:py-32">
          <SectionHeading index="03" label="At a glance" title="The keynote, in brief." />
          <dl className="mt-14 grid gap-px border border-ash bg-ash md:grid-cols-2">
            <div className="bg-obsidian p-8 sm:p-10">
              <dt>
                <Label>Signature keynote</Label>
              </dt>
              <dd className="mt-4 font-serif text-3xl text-ivory">{speaking.keynoteTitle}</dd>
              <dd className="mt-4 leading-relaxed text-mist">{speaking.keynoteSummary}</dd>
            </div>
            <div className="bg-obsidian p-8 sm:p-10">
              <dt>
                <Label>Formats</Label>
              </dt>
              <dd className="mt-4">
                <ul className="space-y-3">
                  {[...speaking.formats.map((f) => `${f.label}: ${f.detail.toLowerCase()}`), ...speaking.offerings].map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-ivory/85">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" />
                      {f}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className="bg-obsidian p-8 sm:p-10 md:col-span-2">
              <dt>
                <Label>Topics</Label>
              </dt>
              <dd className="mt-4">
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                  {speaking.topics.map((t) => (
                    <li key={t.title} className="font-serif text-2xl text-ivory">
                      {t.title}
                      <span className="mt-1 block font-sans text-sm text-mist">{t.subtitle}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
