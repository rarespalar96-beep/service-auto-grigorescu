"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPrincipal } from "@/content/nav";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";

/**
 * Meniu pentru ecrane înguste (< xl): buton hamburger + panou cu toate paginile
 * și ambele CTA-uri. Fără el, sub 1280px navigația dispărea complet.
 */
export default function MobileNav() {
  const [deschis, setDeschis] = useState(false);
  const pathname = usePathname();

  // Escape închide; cât e deschis, pagina din spate nu se mai derulează.
  useEffect(() => {
    if (!deschis) return;

    const laTasta = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDeschis(false);
    };
    document.addEventListener("keydown", laTasta);

    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Lărgirea ferestrei peste `xl` ascunde panoul prin CSS — închidem și starea,
    // altfel derularea paginii ar rămâne blocată fără meniu vizibil.
    const peDesktop = window.matchMedia("(min-width: 80rem)");
    const laLatime = (e: MediaQueryListEvent) => {
      if (e.matches) setDeschis(false);
    };
    peDesktop.addEventListener("change", laLatime);

    return () => {
      document.removeEventListener("keydown", laTasta);
      peDesktop.removeEventListener("change", laLatime);
      document.body.style.overflow = overflowInitial;
    };
  }, [deschis]);

  return (
    <>
      <button
        type="button"
        onClick={() => setDeschis((v) => !v)}
        aria-expanded={deschis}
        aria-controls="meniu-mobil"
        aria-label={deschis ? "Închide meniul" : "Deschide meniul"}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-antracit-600 text-ink-invert transition-colors hover:border-accent hover:text-accent-light xl:hidden"
      >
        {deschis ? <CloseIcon /> : <BurgerIcon />}
      </button>

      {deschis && (
        <>
          {/* Voal peste pagină, NU peste header — voalul e copil al header-ului
              (context de stivuire z-50), deci `inset-0` ar întuneca și bara de sus.
              Începe exact sub ea: h-20 / sm:h-24. Click în afara panoului închide. */}
          <div
            className="fixed inset-x-0 bottom-0 top-20 z-40 bg-black/60 sm:top-24 xl:hidden"
            onClick={() => setDeschis(false)}
            aria-hidden
          />

          <div
            id="meniu-mobil"
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-antracit-600 bg-antracit shadow-2xl sm:max-h-[calc(100dvh-6rem)] xl:hidden"
          >
            <nav aria-label="Navigație principală" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
              <ul>
                {navPrincipal.map((item) => {
                  const activ =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <li key={item.href} className="border-b border-antracit-700 last:border-b-0">
                      <Link
                        href={item.href}
                        onClick={() => setDeschis(false)}
                        aria-current={activ ? "page" : undefined}
                        className={`flex items-center py-3.5 font-display text-lg font-semibold uppercase tracking-wide transition-colors ${
                          activ ? "text-accent-light" : "text-ink-invert hover:text-accent-light"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-5 grid gap-3 pb-2" onClick={() => setDeschis(false)}>
                <CallButton sursa="meniu-mobil" tone="dark" className="w-full" />
                <BookingButton campaign="meniu-mobil" className="w-full">
                  Programează-te online
                </BookingButton>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

function BurgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
