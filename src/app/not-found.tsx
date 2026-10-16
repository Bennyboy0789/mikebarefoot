import type { Metadata } from "next";
import Link from "next/link";
import { KanjiWatermark } from "@/components/sections";
import { ButtonLink, Container, Label } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/speaking", label: "Speaking", body: "The KAIZEN keynote, the reel and topics." },
  { href: "/coaching", label: "Coaching", body: "One-on-one work with Mike." },
  { href: "/about", label: "About", body: "Seven chapters, from Raleigh to the mat." },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-obsidian pt-20">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(214,31,44,0.12),transparent_50%)]" />
      <KanjiWatermark className="-right-16 top-24 text-[22rem]" />
      <Container className="relative py-24 lg:py-32">
        <div className="animate-hero-in max-w-3xl">
          <Label>404 · Page not found</Label>
          <h1 className="mt-8 font-serif text-6xl leading-[0.98] tracking-[-0.02em] text-ivory sm:text-7xl">
            Wrong turn. <span className="italic text-crimson-light">Same playbook.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mist">
            This page doesn&apos;t exist or has moved. Here&apos;s where most visitors are headed.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Book Mike
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-20 grid gap-px border border-ash bg-ash md:grid-cols-3">
          {links.map((l) => (
            <li key={l.href} className="bg-obsidian">
              <Link href={l.href} className="group block h-full p-8 transition-colors hover:bg-coal sm:p-10">
                <span className="font-serif text-3xl text-ivory transition-colors group-hover:text-crimson-light">{l.label}</span>
                <span className="mt-3 block leading-relaxed text-mist">{l.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
