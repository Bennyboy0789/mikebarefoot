import Image from "next/image";
import Link from "next/link";
import { KaizenExplorer } from "@/components/KaizenExplorer";
import { CtaBand, FeaturedIn, FramedImage, QuoteBand, SpokenAt, StatsGrid, Testimonials } from "@/components/sections";
import { HeroMedia } from "@/components/HeroMedia";
import { Arrow, ButtonLink, Container, Label, SectionHeading } from "@/components/ui";
import { VideoFacade } from "@/components/VideoFacade";
import { featuredKeynote, microActions, recruiterHonors, site } from "@/content/site";

const heroCredentials = [
  { value: "37", unit: "yrs", label: "Martial arts" },
  { value: "1,000+", unit: "", label: "Professionals placed" },
  { value: "$50M+", unit: "", label: "Revenue generated" },
  { value: "15+", unit: "yrs", label: "Unbroken profitability" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-obsidian">
        <div className="absolute inset-0 lg:left-auto lg:w-[52%]">
          <div className="absolute inset-0 opacity-55 lg:opacity-100">
            <HeroMedia
              poster="/images/mike-hero.jpg"
              video="/videos/mike-hero-loop.mp4"
              alt="Mike Barefoot delivering KAIZEN: The Pillars of Success"
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover object-[45%_20%]"
            />
          </div>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/70 lg:hidden" />
          <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-r from-obsidian via-obsidian/30 to-transparent lg:block" />
          <div aria-hidden className="absolute inset-0 hidden bg-gradient-to-t from-obsidian via-transparent to-obsidian/50 lg:block" />
        </div>

        <Container className="relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32">
          <div className="animate-hero-in max-w-3xl">
            <Label>Keynote Speaker · Leadership Coach</Label>
            <h1 className="mt-8 font-serif text-[3.4rem] leading-[0.95] tracking-[-0.02em] text-ivory sm:text-7xl lg:text-[7.25rem]">
              The dojo and the boardroom run on the{" "}
              <span className="italic text-crimson-light">same playbook.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
              {site.name} pairs 37 years of martial arts discipline with 27 years of building winning teams — and
              shows leaders how small daily micro actions compound into elite results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book Mike to speak</ButtonLink>
              <ButtonLink href="/coaching" variant="ghost">
                Explore coaching
              </ButtonLink>
            </div>
          </div>

          <dl
            className="animate-hero-in mt-20 grid grid-cols-2 border-t border-ash [animation-delay:250ms] md:grid-cols-4"
          >
            {heroCredentials.map((c, i) => (
              <div key={c.label} className={`py-6 pr-4 ${i > 0 ? "md:border-l md:border-ash md:pl-8" : ""} ${i % 2 ? "border-l border-ash pl-5 md:pl-8" : ""}`}>
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="font-serif text-4xl text-ivory sm:text-5xl">
                    {c.value}
                    {c.unit && <span className="ml-1 text-xl text-crimson-light">{c.unit}</span>}
                  </span>
                  <span className="mt-2 block text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-mist">
                    {c.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <FeaturedIn />

      {/* ── 01 The leader ────────────────────────────────────── */}
      <section className="relative bg-obsidian">
        <Container className="grid items-center gap-16 py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-40">
          <FramedImage
            src="/images/mike-closeup.jpg"
            alt="Mike Barefoot on stage, mid-gesture"
            width={740}
            height={1080}
            caption="KAIZEN: The Pillars of Success · BORN Toastmasters"
            className="mx-auto w-full max-w-sm lg:max-w-none"
          />
          <div data-reveal>
            <Label index="01">The leader</Label>
            <h2 className="mt-6 font-serif text-5xl leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
              Two worlds. <span className="italic text-crimson-light">One discipline.</span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-ivory/85 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-crimson-light">
              For 27 years Mike sat across the table from thousands of executives and candidates — as an elite
              recruiter, an account executive, and finally as the founder of a boutique IT staffing firm that stayed
              profitable through every one of its 15+ years.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-mist">
              For 37 years he has trained in karate, kickboxing and jiu-jitsu. The lesson from both arenas is the same:
              elite performance isn&apos;t a single heroic act. It&apos;s technique, repeated with integrity, every day.
            </p>
            <ul className="mt-10 flex flex-wrap gap-3">
              {recruiterHonors.map((h) => (
                <li
                  key={h}
                  className="border border-crimson/40 px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-crimson-light"
                >
                  {h}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="group mt-12 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ivory"
            >
              <span className="border-b border-crimson pb-1">Read Mike&apos;s story</span>
              <Arrow className="text-crimson-light transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── 02 The system ────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-ash bg-coal">
        <Container className="py-28 lg:py-40">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              index="02"
              label="The KAIZEN system"
              title={
                <>
                  Six principles. <span className="italic text-crimson-light">Continuous improvement.</span>
                </>
              }
              intro="Kaizen is Japanese for continuous improvement — the credo Mike lives by on the mat. He built it into a six-part system for leading yourself and others."
            />
            <span aria-hidden className="hidden font-kanji text-8xl leading-none text-crimson/30 lg:block">
              改善
            </span>
          </div>
          <div className="mt-16" data-reveal>
            <KaizenExplorer />
          </div>
        </Container>
      </section>

      <QuoteBand
        quote="I want the relationship more than I want the money."
        cite="Mike Barefoot"
        context="on walking away from a high five-figure fee"
      />

      {/* ── 03 The method ────────────────────────────────────── */}
      <section className="relative bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading index="03" label="Micro actions" title={microActions.heading} intro={microActions.intro} />
          <ol data-reveal className="mt-16 grid grid-cols-2 gap-px border border-ash bg-ash lg:grid-cols-4">
            {microActions.steps.map((step, i) => (
              <li key={step} className="bg-obsidian p-6 sm:p-10">
                <span className="text-crimson-gradient font-serif text-5xl leading-none sm:text-7xl">0{i + 1}</span>
                <p className="mt-5 font-serif text-xl leading-snug text-ivory sm:mt-6 sm:text-2xl">{step}</p>
              </li>
            ))}
          </ol>
          <p data-reveal className="mt-14 max-w-3xl font-serif text-2xl italic leading-relaxed text-crimson-light sm:text-3xl">
            {microActions.takeaway}
          </p>
        </Container>
      </section>

      {/* ── 04 On stage ──────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-ash bg-coal">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(214,31,44,0.10),transparent_55%)]" />
        <Container className="relative grid items-center gap-16 py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:py-40">
          <div>
            <SectionHeading
              index="04"
              label="On stage"
              title={
                <>
                  A homecoming keynote <span className="italic text-crimson-light">at Campbell.</span>
                </>
              }
              intro="Mike returned to the campus where he attended basketball camp at 11 and later earned his MBA — to walk the 2026 Leadership Summit through KAIZEN, live."
            />
            <ul data-reveal className="mt-10 space-y-5">
              {[
                "The integrity story behind turning down a high five-figure fee",
                "A live martial arts demonstration of micro actions",
                "One commitment every attendee carried into the next 12 months",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4 text-lg text-ivory/85">
                  <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-crimson" />
                  {item}
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-12">
              <ButtonLink href="/speaking" variant="ghost">
                Explore the keynote
              </ButtonLink>
            </div>
          </div>
          <div data-reveal className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-3 border border-crimson/30" />
            <VideoFacade
              id={featuredKeynote.youtubeId}
              title={featuredKeynote.event}
              poster="/images/campbell-keynote-poster.jpg"
            />
          </div>
        </Container>
      </section>

      <Testimonials index="05" />

      {/* ── 06 The record ────────────────────────────────────── */}
      <section className="relative bg-obsidian">
        <Container className="py-28 lg:py-40">
          <SectionHeading
            index="06"
            label="The record"
            title={
              <>
                Proof, <span className="italic text-crimson-light">not theory.</span>
              </>
            }
          />
          <div className="mt-16">
            <StatsGrid />
          </div>
        </Container>
      </section>

      <SpokenAt />

      {/* ── Work with Mike ───────────────────────────────────── */}
      <section className="border-t border-ash bg-obsidian">
        <div className="grid md:grid-cols-2">
          {[
            {
              href: "/speaking",
              label: "Speaking",
              title: "Keynotes that move rooms to act",
              body: "High-energy, story-driven and interactive — with a live demonstration and a micro-action commitment every attendee takes home.",
              image: "/images/mike-wide.jpg",
            },
            {
              href: "/coaching",
              label: "Coaching",
              title: "An encourager, advisor & cheerleader",
              body: "One-on-one guidance for leaders, career movers and entrepreneurs, built on 27 years of helping people make their biggest decisions.",
              image: "/images/mike-portrait.jpg",
            },
          ].map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className={`group relative flex min-h-[34rem] flex-col justify-end overflow-hidden p-8 sm:p-14 ${
                i === 1 ? "md:border-l md:border-ash" : ""
              }`}
            >
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/20" />
              <div className="relative">
                <Label>{card.label}</Label>
                <h3 className="mt-6 max-w-md font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">{card.title}</h3>
                <p className="mt-5 max-w-md leading-relaxed text-mist">{card.body}</p>
                <span className="mt-10 inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-crimson-light">
                  Learn more <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
