"use client";

import Stars from "@/components/ui/Stars";
import type { Recenzie } from "@/content/recenzii";

/**
 * Carusel de recenzii cu auto-scroll continuu (marquee). Afișează ~2–3 carduri
 * vizibile și rulează lent între ele, în buclă fără cusături (lista e dublată).
 * - Pauză la hover (`group-hover`).
 * - `prefers-reduced-motion`: oprește animația și permite scroll manual cu snap
 *   (vezi `.reviews-marquee` în `app/globals.css`).
 */
export default function ReviewsCarousel({ recenzii }: { recenzii: Recenzie[] }) {
  if (recenzii.length === 0) return null;

  // Dublăm lista pentru bucla fără cusături (translateX(-50%) = exact o serie).
  const loop = [...recenzii, ...recenzii];

  return (
    <div className="reviews-marquee group relative mt-12">
      {/* Estompare pe margini, ca să sugereze continuarea */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-bg to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-bg to-transparent sm:w-16"
        aria-hidden
      />

      <ul className="reviews-marquee-track flex w-max gap-4">
        {loop.map((r, i) => (
          <li
            key={i}
            aria-hidden={i >= recenzii.length}
            className="w-[280px] shrink-0 sm:w-[340px]"
          >
            <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-card">
              <div className="flex items-center justify-between">
                <Stars rating={r.rating} size={16} />
                <GoogleG size={18} />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{r.text}”</p>
              <div className="mt-4 border-t border-line pt-3">
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-ink">
                  {r.nume}
                </p>
                <p className="text-xs text-muted">{r.data}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M21.6 12.2c0-.7-.06-1.4-.18-2H12v3.8h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" />
      <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 .95-3.4.95-2.6 0-4.8-1.75-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22z" />
      <path fill="#FBBC05" d="M6.4 13.95a6 6 0 0 1 0-3.9V7.45H3.1a10 10 0 0 0 0 9.1l3.3-2.6z" />
      <path fill="#EA4335" d="M12 5.95c1.5 0 2.8.5 3.8 1.5l2.85-2.85A10 10 0 0 0 3.1 7.45l3.3 2.6C7.2 7.7 9.4 5.95 12 5.95z" />
    </svg>
  );
}
