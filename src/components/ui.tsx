import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

/** Small-caps label with a brass rule, optionally numbered ("01"). */
export function Label({ children, index, className = "" }: { children: ReactNode; index?: string; className?: string }) {
  return (
    <p className={`flex items-center gap-4 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-brass ${className}`}>
      {index && <span className="font-serif text-base tracking-normal text-brass-light">{index}</span>}
      <span aria-hidden className="h-px w-10 bg-brass/60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  label,
  index,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  label: string;
  index?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`} data-reveal>
      <Label index={index}>{label}</Label>
      <h2
        className={`mt-6 font-serif text-5xl leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-7xl ${
          tone === "dark" ? "text-ivory" : "text-obsidian"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${tone === "dark" ? "text-mist" : "text-smoke"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "brass" | "ghost" | "ghost-dark" };

export function ButtonLink({ variant = "brass", className = "", children, ...props }: ButtonLinkProps) {
  const styles = {
    brass: "bg-brass text-obsidian hover:bg-brass-light",
    ghost: "border border-ivory/25 text-ivory hover:border-brass hover:text-brass-light",
    "ghost-dark": "border border-obsidian/25 text-obsidian hover:border-obsidian hover:bg-obsidian hover:text-ivory",
  }[variant];
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.26em] transition-colors duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

/** Thin brass corner brackets framing an image — a quiet "plaque" detail. */
export function FrameCorners({ className = "" }: { className?: string }) {
  const c = "absolute h-6 w-6 border-brass";
  return (
    <div aria-hidden className={`pointer-events-none absolute -inset-3 ${className}`}>
      <span className={`${c} left-0 top-0 border-l border-t`} />
      <span className={`${c} right-0 top-0 border-r border-t`} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}
