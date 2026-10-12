import type { ReactNode } from "react";
import { kaizen, mediaMentions, stats } from "@/content/site";
import { ButtonLink, Container, Eyebrow } from "./ui";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <KanjiMark className="-right-10 -bottom-24 text-[18rem] sm:text-[24rem]" />
      <Container className="relative py-20 sm:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-light">{intro}</p>
      </Container>
    </section>
  );
}

/** 改善 — "kaizen", continuous improvement. Decorative watermark. */
export function KanjiMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none font-kanji leading-none text-paper/[0.04] [writing-mode:vertical-rl] ${className}`}
    >
      改善
    </span>
  );
}

export function StatsGrid() {
  return (
    <dl className="grid grid-cols-2 gap-px bg-ink-line lg:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-ink p-6 sm:p-8">
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-5xl font-bold leading-none text-paper sm:text-6xl">{s.value}</span>
            <span className="mt-3 block font-display text-base font-semibold uppercase tracking-[0.12em] text-seal">
              {s.label}
            </span>
            <span className="mt-1 block text-sm text-stone-light">{s.detail}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function MediaBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-stone">Featured 60+ times in</p>
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
        {mediaMentions.map((m) => (
          <li key={m} className="font-display text-xl font-bold uppercase tracking-wide text-ink/70">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function KaizenGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className="grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
      {kaizen.map((k) => (
        <li key={k.letter} className="group relative bg-paper p-7 transition-colors hover:bg-white sm:p-8">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-7xl font-bold leading-none text-seal">{k.letter}</span>
            <span className="font-display text-2xl font-bold uppercase tracking-wide">{k.word}</span>
          </div>
          <p className="mt-5 font-medium leading-snug">{k.line}</p>
          {detailed && <p className="mt-3 text-sm leading-relaxed text-stone">{k.body}</p>}
        </li>
      ))}
    </ol>
  );
}

export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden bg-ink shadow-2xl shadow-ink/40 ring-1 ring-paper/10">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export function CtaBand({
  title = "Bring the KAIZEN playbook to your stage.",
  body = "Leadership summits, sales kickoffs, university events and team offsites. Tell Mike about your audience and he'll be in touch.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-seal text-paper">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-10 select-none font-kanji text-[14rem] leading-none text-paper/10"
      >
        善
      </span>
      <Container className="relative flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-paper/85">{body}</p>
        </div>
        <ButtonLink href="/contact" variant="outline-light" className="shrink-0 !border-paper">
          Start the conversation
        </ButtonLink>
      </Container>
    </section>
  );
}
