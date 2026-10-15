import Image from "next/image";
import type { ReactNode } from "react";
import { featuredTestimonial, mediaLogos, mediaMentions, spokenAt, stats, testimonials } from "@/content/site";
import { ButtonLink, Container, FrameCorners, HeadingEyebrow, Label } from "./ui";

/** Inner-page hero: full-bleed, editorial, optional graded photo bleeding off the right edge. */
export function PageHero({
  label,
  title,
  intro,
  image,
  imageAlt = "",
}: {
  label: string;
  title: ReactNode;
  intro: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian pt-20">
      {image && (
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <Image src={image} alt={imageAlt} fill priority sizes="46vw" className="object-cover object-top" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-obsidian/10" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
        </div>
      )}
      <KanjiWatermark className="-right-16 top-24 text-[22rem] lg:hidden" />
      <Container className="relative flex min-h-[68vh] flex-col justify-end pb-20 pt-24 lg:min-h-[78vh]">
        <div className="animate-hero-in max-w-3xl">
          <h1>
            <HeadingEyebrow>{label}</HeadingEyebrow>
            <span className="mt-8 block font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl lg:text-[6.5rem]">
              {title}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">{intro}</p>
        </div>
      </Container>
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />
    </section>
  );
}

/** 改善 — "kaizen", continuous improvement. Decorative watermark. */
export function KanjiWatermark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none font-kanji leading-none text-ivory/[0.035] [writing-mode:vertical-rl] ${className}`}
    >
      改善
    </span>
  );
}

type MarqueeItem = { name: string; logo?: { src: string; width: number; height: number } | null };

export function FeaturedIn() {
  // Media outlets, with the host institutions' logos woven between them.
  const [usaToday, careerBuilder, sia, sbtdc] = mediaMentions;
  const logo = (name: string): MarqueeItem => spokenAt.find((o) => o.name === name)!;
  const sequence: MarqueeItem[] = [
    { name: usaToday, logo: mediaLogos[usaToday] },
    logo("Campbell University"),
    { name: careerBuilder },
    logo("BORN Toastmasters"),
    { name: sia },
    logo("Wake Tech Community College"),
    { name: sbtdc },
    logo("The GOAT Awards"),
    { name: "60+ media features" },
    logo("NC State University MBA"),
  ];
  const items = [...sequence, ...sequence];
  return (
    <section aria-label="Featured in and spoken at" className="border-y border-ash bg-coal py-8">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
        <p className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">
          Featured in &amp; spoken at
        </p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="animate-marquee flex w-max items-center gap-14">
            {[...items, ...items].map((m, i) => (
              <li key={i} aria-hidden={i >= items.length / 2} className="flex items-center gap-14 whitespace-nowrap">
                {m.logo ? (
                  <Image
                    src={m.logo.src}
                    alt={m.name}
                    width={m.logo.width}
                    height={m.logo.height}
                    className={`w-auto opacity-80 ${m.logo.width / m.logo.height < 3 ? "h-12" : "h-8"}`}
                  />
                ) : (
                  <span className="font-serif text-3xl text-ivory/80">{m.name}</span>
                )}
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-crimson/60" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function StatsGrid({ limit }: { limit?: number }) {
  return (
    <dl data-reveal className="grid grid-cols-2 gap-px border border-ash bg-ash lg:grid-cols-3">
      {stats.slice(0, limit).map((s) => (
        <div key={s.label} className="bg-obsidian p-6 sm:p-10">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="text-crimson-gradient block font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">{s.value}</span>
            <span className="mt-5 block text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-ivory">{s.label}</span>
            <span className="mt-2 block text-sm text-mist">{s.detail}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function QuoteBand({ quote, cite, context }: { quote: string; cite: string; context?: string }) {
  return (
    <section className="relative overflow-hidden bg-crimson-dark text-ivory">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(214,31,44,0.55),transparent_65%)]" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian/50" />
      <Container className="relative py-28 sm:py-36">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-6 left-2 select-none font-serif text-[16rem] leading-none text-obsidian/40 sm:left-6"
        >
          &ldquo;
        </span>
        <figure data-reveal className="relative mx-auto max-w-5xl text-center">
          <blockquote className="font-serif text-4xl leading-[1.12] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
            {quote}
          </blockquote>
          <figcaption className="mt-10 flex items-center justify-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-ivory/80">
            <span aria-hidden className="h-px w-10 bg-ivory/50" />
            {cite}
            {context && <span className="hidden text-ivory/60 sm:inline">· {context}</span>}
            <span aria-hidden className="h-px w-10 bg-ivory/50" />
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

/** Featured pull quote (full letter behind a native disclosure), then shorter endorsements. */
export function Testimonials({ index }: { index?: string }) {
  const t = featuredTestimonial;
  return (
    <section className="relative overflow-hidden border-t border-ash bg-obsidian">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_30%,rgba(214,31,44,0.12),transparent_55%)]" />
      <Container className="relative py-28 lg:py-40">
        <div data-reveal>
          <Label index={index}>In their words</Label>
        </div>
        <figure data-reveal className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-[9rem_1fr] lg:gap-10">
          <span aria-hidden className="-mb-8 h-20 select-none font-serif text-[8rem] leading-[0.75] text-crimson lg:mb-0 lg:h-auto lg:text-[13rem]">
            &ldquo;
          </span>
          <div>
            <blockquote className="max-w-5xl font-serif text-[2.1rem] leading-[1.14] tracking-[-0.01em] text-ivory sm:text-5xl lg:text-[3.6rem]">
              {t.pull}
            </blockquote>
            <figcaption className="mt-12 flex items-start gap-5">
              <span aria-hidden className="mt-4 h-px w-12 shrink-0 bg-crimson" />
              <span>
                <span className="block font-serif text-3xl text-ivory">{t.name}</span>
                <span className="mt-2 block text-sm text-mist">{t.title}</span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-crimson-light">
                  {t.org} · {t.institution}
                </span>
              </span>
            </figcaption>

            <details className="group mt-14 max-w-3xl border-t border-ash">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ivory transition-colors hover:text-crimson-light [&::-webkit-details-marker]:hidden">
                Read the full letter
                <span aria-hidden className="font-serif text-3xl font-normal leading-none text-crimson-light transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="relative border border-ash bg-coal p-8 sm:p-12">
                <span aria-hidden className="absolute left-0 top-0 h-full w-px bg-crimson" />
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mist">{t.event}</p>
                <p className="mt-8 font-serif text-2xl italic text-ivory">{t.salutation}</p>
                <div className="mt-5 space-y-5 leading-relaxed text-ivory/80">
                  {t.letter.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <p className="mt-8 leading-relaxed text-mist">
                  {t.signoff[0]}
                  <br />
                  {t.signoff[1]}
                </p>
                <p className="mt-8 border-t border-ash pt-6">
                  <span className="block font-serif text-xl text-ivory">{t.name}</span>
                  <span className="mt-1 block text-sm text-mist">{t.title}</span>
                  <span className="block text-sm text-mist">{t.org}</span>
                </p>
              </div>
            </details>
          </div>
        </figure>

        <ul className="mt-24 grid gap-px border border-ash bg-ash lg:mt-32 lg:grid-cols-3">
          {testimonials.map((q) => (
            <li key={q.quote} data-reveal className="flex flex-col bg-obsidian p-8 sm:p-10">
              <span aria-hidden className="font-serif text-6xl leading-[0.6] text-crimson">
                &ldquo;
              </span>
              <blockquote className="mt-6 flex-1 font-serif text-2xl leading-snug text-ivory">{q.quote}</blockquote>
              <p className="mt-8 border-t border-ash pt-6">
                {q.name && <span className="block font-serif text-xl text-ivory">{q.name}</span>}
                <span className="mt-1 block text-sm text-mist">{q.title}</span>
                <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-crimson-light">
                  {q.org}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** Logos (white knock-outs) and typographic names of organizations Mike has spoken for. */
export function SpokenAt() {
  return (
    <section aria-label="Spoken at" className="border-y border-ash bg-coal">
      <Container className="flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:gap-14">
        <p className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">Spoken at</p>
        <ul className="flex flex-1 flex-wrap items-center gap-x-12 gap-y-8 lg:justify-between">
          {spokenAt.map((org) => (
            <li key={org.name} className="opacity-75 transition-opacity hover:opacity-100">
              {org.logo ? (
                <Image
                  src={org.logo.src}
                  alt={org.name}
                  width={org.logo.width}
                  height={org.logo.height}
                  // Stacked logos need more height to read at the same visual weight.
                  className={`w-auto ${org.logo.width / org.logo.height < 3 ? "h-14 sm:h-16" : "h-9 sm:h-10"}`}
                />
              ) : (
                <span className="font-serif text-2xl leading-none text-ivory">{org.name}</span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function CtaBand({
  title = (
    <>
      Bring the KAIZEN playbook <span className="italic text-crimson-light">to your stage.</span>
    </>
  ),
  body = "Leadership summits, sales kickoffs, university events and executive offsites. Tell Mike about your audience and he'll be in touch.",
}: {
  title?: ReactNode;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-obsidian">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(214,31,44,0.18),transparent_60%)]" />
      <Container className="relative py-28 text-center sm:py-36">
        <div data-reveal>
          <Label className="justify-center">Now booking</Label>
          <h2 className="mx-auto mt-8 max-w-4xl font-serif text-5xl leading-[1.02] text-ivory sm:text-7xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">{body}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/contact">Check availability</ButtonLink>
            <ButtonLink href="/speaking" variant="ghost">
              Speaking topics
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FramedImage({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`relative ${className}`}>
      <FrameCorners />
      <div className="relative overflow-hidden">
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className="h-full w-full object-cover" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
      </div>
      {caption && (
        <figcaption className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mist">{caption}</figcaption>
      )}
    </figure>
  );
}
