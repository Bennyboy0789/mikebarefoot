"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Graded still that upgrades to a silent looping clip once the browser can play it.
 * The video is skipped entirely for reduced-motion and data-saver visitors.
 */
export function HeroMedia({
  poster,
  video,
  alt,
  sizes,
  className = "",
}: {
  poster: string;
  video: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  const [allowed, setAllowed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    // Client-only capability check; the server always renders the still.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!reduce && !saveData) setAllowed(true);
  }, []);

  return (
    <>
      <Image src={poster} alt={alt} fill priority sizes={sizes} className={className} />
      {allowed && (
        <video
          aria-hidden
          src={video}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
          className={`${className} absolute inset-0 h-full w-full transition-opacity duration-1000 ${playing ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </>
  );
}
