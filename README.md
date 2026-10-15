# Mike Barefoot — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 site for **Mike Barefoot**,
leadership coach and speaker.

## Status

First full build of the site: Home, About, Speaking, Coaching and Contact.

All copy lives in `src/content/site.ts`. Every fact in it comes from Mike's keynote at
Campbell University's 2026 Leadership Summit
([YouTube](https://www.youtube.com/watch?v=QgJrb609-Fo)). Open questions are marked
`TODO(mike)`; run `grep -rn "TODO(mike)" src` to list them.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL. While unset, the site is `noindex` and `robots.txt` disallows crawling. |
| `RESEND_API_KEY` | Contact form delivery via [Resend](https://resend.com). |
| `CONTACT_TO_EMAIL` | Address that receives inquiries. |
| `CONTACT_FROM_EMAIL` | Verified sender, e.g. `Website <hello@yourdomain.com>`. |

If the three contact variables aren't set, the form shows a friendly "not connected yet" error.

## Staging

- **Staging URL:** https://barefoot.stagmkt.dev
- Production domain: TBD (client's domain attached only after approval)

### Launch checklist (SEO)

Staging deploys from `main` as Vercel's *production* environment, with `NEXT_PUBLIC_SITE_URL` deliberately unset. That's what keeps it out of search engines.
- **At launch,** set `NEXT_PUBLIC_SITE_URL` to the real domain and redeploy. Until you do, `robots.txt` disallows everything, every page is `noindex`, and canonicals, the sitemap, JSON-LD and `/llms.txt` all point at the staging host.
- **After the redeploy,** check that live `/robots.txt` says `Allow: /`.
- **Then,** submit `/sitemap.xml` in Google Search Console.

Structured data lives in `src/lib/schema.ts`; each page renders its own `@graph`. The SEO audit (Oct 2026) is in `seo-audit/`.

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
- **Analytics:** `@vercel/analytics` is mounted in the root layout (enable Web Analytics on the
  Vercel project). A completed inquiry redirects to `/contact/thanks`, so its page views are the
  conversion count; the server action also sends an `Inquiry` custom event (Vercel Pro only).
- **Highlight reel:** `public/videos/mike-highlight-reel.mp4` (+ `.vtt` captions) is cut from the
  Toastmasters talk: source seconds 0–12.75, 102.55–107, 768.45–780.45, 890.55–899.85,
  932.95–937.1, 1018.2–1033.05, 1311–1321.7, 0.3s dips to black, then a 3.5s name card.
- **Raw media:** originals from Mike (multi-GB video, phone photos, one-pagers) live in
  `_source/`, which is gitignored. Only graded, compressed derivatives go in `public/`.
  Stage stills and `public/videos/mike-hero-loop.mp4` come from the BORN Toastmasters
  talk, graded with ffmpeg `hue=s=0,eq=contrast=1.28:brightness=-0.05:gamma=0.88,vignette`.
- **Tailwind loader:** Tailwind runs through `@tailwindcss/turbopack`, which is registered in
  `next.config.ts` under `turbopack.rules`. Without that rule no utility classes are generated.

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
