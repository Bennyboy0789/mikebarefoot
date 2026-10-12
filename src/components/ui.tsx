import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "seal" }: { children: ReactNode; tone?: "seal" | "muted" }) {
  return (
    <p
      className={`flex items-center gap-3 font-display text-sm font-semibold uppercase tracking-[0.25em] ${
        tone === "seal" ? "text-seal" : "text-stone-light"
      }`}
    >
      <span aria-hidden className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={`mt-4 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-stone-light" : "text-stone"}`}>{intro}</p>
      )}
    </div>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "primary" | "outline" | "outline-light" };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  const styles = {
    primary: "bg-seal text-paper hover:bg-seal-dark",
    outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    "outline-light": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  }[variant];
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 font-display text-base font-semibold uppercase tracking-[0.15em] transition-colors ${styles} ${className}`}
      {...props}
    />
  );
}
