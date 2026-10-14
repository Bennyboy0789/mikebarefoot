"use client";

import Image from "next/image";
import { useState } from "react";

/** Shows a graded poster until clicked, then loads the YouTube player (no third-party JS on first paint). */
export function VideoFacade({ id, title, poster }: { id: string; title: string; poster: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden bg-coal">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full text-left">
          <Image src={poster} alt="" fill sizes="(min-width: 1024px) 26rem, 90vw" className="object-cover" />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full border border-crimson/80 bg-obsidian/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-crimson-light" aria-hidden>
                <path d="M7 4.5v15l13-7.5z" />
              </svg>
            </span>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-6">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-crimson-light">Watch the keynote</span>
            <span className="mt-2 block font-serif text-2xl leading-tight text-ivory">{title}</span>
            <span className="mt-2 block text-xs text-mist">44 minutes</span>
          </span>
          <span className="sr-only">Play video: {title}</span>
        </button>
      )}
    </div>
  );
}
