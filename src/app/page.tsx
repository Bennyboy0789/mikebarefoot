import Image from "next/image";
import Link from "next/link";
import { CtaBand, KaizenGrid, KanjiMark, MediaBar, StatsGrid, YouTubeEmbed } from "@/components/sections";
import { ButtonLink, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { featuredKeynote, microActions, recruiterHonors, site } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <KanjiMark className="-left-8 top-6 text-[22rem] sm:text-[30rem]" />
        <Container className="relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:py-28">
          <div>
            <Eyebrow>{site.role}</Eyebrow>
            <h1 className="mt-6 font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl">
              The dojo and the boardroom run on the <span className="text-seal">same playbook.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-light">
              Mike Barefoot has spent 37 years training in karate, kickboxing and jiu-jitsu — and 27 years building
              winning teams in the staffing industry. He shows leaders, teams and students how small daily micro
              actions compound into elite results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/contact">Book Mike to speak</ButtonLink>
              <ButtonLink href="/coaching" variant="outline-light">
                Explore coaching
              </ButtonLink>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 border sm:-inset-3 sm:translate-x-6 sm:translate-y-6 border-seal/60" />
            <Image
              src="/images/campbell-keynote.jpg"
              alt="Mike Barefoot delivering the keynote at Campbell University's 2026 Leadership Summit"
              width={404}
              height={720}
              priority
              className="relative aspect-[4/5] w-full object-cover object-[50%_40%] grayscale-[35%]"
            />
            <figcaption className="relative mt-4 font-display text-sm uppercase tracking-[0.2em] text-stone-light">
              Keynote · Campbell University Leadership Summit, 2026
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Media */}
      <section className="border-b border-ink/10 bg-paper-deep">
        <Container className="py-8">
          <MediaBar />
        </Container>
      </section>

      {/* KAIZEN */}
      <section className="bg-paper">
        <Container className="py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="The KAIZEN system"
              title={
                <>
                  Six letters.
                  <br />
                  Continuous improvement.
                </>
              }
              intro="Kaizen is Japanese for continuous improvement — the credo Mike lives by on the mat. He built it into a six-part system for leading yourself and others."
            />
            <ButtonLink href="/speaking" variant="outline" className="shrink-0">
              See the keynote
            </ButtonLink>
          </div>
          <div className="mt-14">
            <KaizenGrid />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-ink">
        <Container className="py-24">
          <SectionHeading
            dark
            eyebrow="Track record"
            title="Proof, not theory."
            intro="An elite recruiter who became a founder — and built a boutique IT staffing firm from the ground up, profitable every year for more than 15 years."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {recruiterHonors.map((h) => (
              <li
                key={h}
                className="border border-ink-line px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.15em] text-paper"
              >
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <StatsGrid />
          </div>
        </Container>
      </section>

      {/* Micro actions */}
      <section className="bg-paper-deep">
        <Container className="grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Micro actions" title={microActions.heading} intro={microActions.intro} />
          <div>
            <ol className="space-y-px">
              {microActions.steps.map((step, i) => (
                <li key={step} className="flex items-center gap-6 bg-paper px-6 py-5">
                  <span className="font-display text-3xl font-bold text-seal">0{i + 1}</span>
                  <span className="font-display text-xl font-semibold uppercase tracking-wide">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-l-2 border-seal pl-5 leading-relaxed text-stone">{microActions.takeaway}</p>
          </div>
        </Container>
      </section>

      {/* Featured keynote */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <Container className="grid gap-14 py-24 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
          <div>
            <SectionHeading
              dark
              eyebrow="Watch Mike"
              title="A homecoming keynote at Campbell."
              intro="Mike returned to the campus where he went to basketball camp as an 11-year-old and later earned his MBA — to walk the 2026 Leadership Summit through KAIZEN, live on stage."
            />
            <ul className="mt-8 space-y-3 text-stone-light">
              <li className="flex gap-3">
                <span className="text-seal">—</span> The integrity story behind turning down a high five-figure fee
              </li>
              <li className="flex gap-3">
                <span className="text-seal">—</span> A live martial arts demonstration of micro actions
              </li>
              <li className="flex gap-3">
                <span className="text-seal">—</span> One micro action every attendee committed to for 12 months
              </li>
            </ul>
            <div className="mt-10">
              <ButtonLink href="/speaking" variant="outline-light">
                Speaking topics
              </ButtonLink>
            </div>
          </div>
          <div className="w-full lg:w-[22rem]">
            <YouTubeEmbed id={featuredKeynote.youtubeId} title={featuredKeynote.title} />
          </div>
        </Container>
      </section>

      {/* Speaking / Coaching */}
      <section className="bg-paper">
        <Container className="py-24">
          <SectionHeading eyebrow="Work with Mike" title="Two ways in." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                href: "/speaking",
                label: "Speaking",
                title: "Keynotes that move people to act",
                body: "High-energy, story-driven and interactive — with a live demonstration and a micro-action commitment every attendee takes home.",
              },
              {
                href: "/coaching",
                label: "Coaching",
                title: "An encourager, advisor & cheerleader",
                body: "One-on-one guidance for leaders, career movers and entrepreneurs, built on 27 years of helping people make their biggest decisions.",
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col justify-between border border-ink/10 bg-white p-8 transition-colors hover:border-ink sm:p-10"
              >
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-seal">{card.label}</p>
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none">{card.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone">{card.body}</p>
                </div>
                <span className="mt-8 font-display text-base font-semibold uppercase tracking-[0.15em] transition-transform group-hover:translate-x-1">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
