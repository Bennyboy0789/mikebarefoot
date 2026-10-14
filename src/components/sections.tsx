import Image from "next/image";
import type { ReactNode } from "react";
import { mediaMentions, stats } from "@/content/site";
import { ButtonLink, Container, FrameCorners, Label } from "./ui";

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
          <Image src={image} alt={imageAlt} fill priority sizes="46vw" className="object-cover object-[50%_30%]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-obsidian/10" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
        </div>
      )}
      <KanjiWatermark className="-right-16 top-24 text-[22rem] lg:hidden" />
      <Container className="relative flex min-h-[68vh] flex-col justify-end pb-20 pt-24 lg:min-h-[78vh]">
        <div className="animate-hero-in max-w-3xl">
          <Label>{label}</Label>
          <h1 className="mt-8 font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl lg:text-[6.5rem]">
            {title}
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

export function FeaturedIn() {
  const items = [...mediaMentions, "60+ media features", ...mediaMentions, "60+ media features"];
  return (
    <section aria-label="Featured in" className="border-y border-ash bg-coal py-8">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-14">
        <p className="shrink-0 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">As featured in</p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="animate-marquee flex w-max items-center gap-14">
            {[...items, ...items].map((m, i) => (
              <li key={i} aria-hidden={i >= items.length / 2} className="flex items-center gap-14 whitespace-nowrap">
                <span className="font-serif text-3xl text-ivory/80">{m}</span>
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
