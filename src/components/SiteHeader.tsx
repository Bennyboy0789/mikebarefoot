"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { ButtonLink } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center bg-seal font-display text-sm font-bold tracking-wider text-paper"
          >
            MB
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-[0.12em]">{site.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="font-display text-base font-medium uppercase tracking-[0.15em] text-stone-light transition-colors hover:text-paper aria-[current=page]:text-paper"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="!px-5 !py-2 text-sm">
            Book Mike
          </ButtonLink>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ink-line md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4">
            {[...nav, { href: "/contact", label: "Book Mike" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="block py-3 font-display text-lg uppercase tracking-[0.15em] text-stone-light aria-[current=page]:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
