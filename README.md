# Mike Barefoot — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 site for **Mike Barefoot**,
leadership coach and speaker.

## Status

Scaffolded and deployed as a staging shell. **The real design/build is handled by
Claude Code** — this repo is the deploy pipeline, not the finished site.

## Staging

- **Staging URL:** https://mikebarefoot.stagmkt.dev (attach after first deploy)
- Production domain: TBD (client's domain attached only after approval)

## Stack

- Next.js 16.4 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (CSS-based config via `@theme` in `globals.css` — **no** `tailwind.config.ts`)
- Deploy target: Vercel (`stagmkt` team)

## Conventions (read before building)

- **Tailwind v4:** `@import "tailwindcss";` + `@theme inline { ... }` in `src/app/globals.css`.
  Do NOT use `@tailwind base/components/utilities` (v3 syntax). Do NOT create a `tailwind.config.ts`.
- **Next.js 16:** dynamic route `params`/`searchParams` are Promises — `await` them.
- **next.config.ts:** do NOT include an `eslint` key (removed in Next 16). Lint runs via `npm run lint`.
- **Images:** use `next/image`, or `images: { unoptimized: true }` if using raw `<img>`.

## Content rules (IMPORTANT — for a real professional)

Mike is a real person with real credentials. Do NOT invent:
- credentials, certifications, or years of experience
- testimonials, client names, or quotes
- prices, programs, or enrollment numbers

Where content is unknown, use `TODO(mike): <what's needed>` and move on. A
fabricated credential is a liability, not a copy bug.

## Commands

```bash
npm run dev     # local dev
npm run build   # verify before pushing
```

Pushes to `main` auto-deploy to Vercel.
