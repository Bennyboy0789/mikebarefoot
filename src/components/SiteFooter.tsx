import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-ash bg-obsidian text-mist">
      <Container className="grid gap-12 pb-10 pt-20 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="font-serif text-4xl text-ivory">
            Lead with <span className="italic text-crimson-light">discipline.</span>
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Keynotes and coaching that marry 37 years of martial arts discipline with 27 years of building winning
            teams.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border-b border-crimson py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-crimson-light transition-colors hover:text-ivory"
          >
            Check availability
          </Link>
        </div>

        <div>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory">Explore</p>
          <ul className="mt-3 text-sm md:mt-5 md:space-y-3">
            {[{ href: "/", label: "Home" }, ...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2.5 transition-colors hover:text-crimson-light md:inline md:py-0">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ivory">Connect</p>
          <ul className="mt-3 text-sm md:mt-5 md:space-y-3">
            <li>
              <a href={site.social.youtube} className="block py-2.5 transition-colors hover:text-crimson-light md:inline md:py-0" rel="noopener" target="_blank">
                YouTube
              </a>
            </li>
            <li>
              <a href={site.social.linkedin} className="block py-2.5 transition-colors hover:text-crimson-light md:inline md:py-0" rel="noopener" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={site.social.instagram} className="block py-2.5 transition-colors hover:text-crimson-light md:inline md:py-0" rel="noopener" target="_blank">
                Instagram
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="block py-2.5 transition-colors hover:text-crimson-light md:inline md:py-0">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <Container>
        <p
          aria-hidden
          className="select-none whitespace-nowrap font-serif text-[17vw] leading-[0.8] tracking-[-0.03em] text-ivory/[0.06] lg:text-[11.5rem]"
        >
          Mike Barefoot
        </p>
      </Container>

      <div className="border-t border-ash">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span className="font-kanji tracking-[0.2em] text-crimson-light">改善 · Kaizen</span>
        </Container>
      </div>
    </footer>
  );
}
