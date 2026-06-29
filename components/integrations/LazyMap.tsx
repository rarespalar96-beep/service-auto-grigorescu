"use client";

import { useState } from "react";
import { site, adresaCompleta, adresaTbd } from "@/content/site";
import { mapEmbedUrl, directionsUrl, externalLinkAttrs } from "@/lib/links";
import { trackEvent } from "@/lib/analytics";
import Placeholder from "@/components/ui/Placeholder";

/**
 * Hartă Google Maps lazy-loaded: până nu apeși, NU se încarcă iframe-ul Google
 * (zero cost de performanță / fără cookies Google la load). La click se montează
 * embed-ul (gratuit, fără API key) și se trimite un eveniment de analytics.
 *
 * Harta funcționează din adresa completă (fără coordonate / API key). Placeholder
 * doar dacă lipsește și adresa.
 */
export default function LazyMap({ className = "" }: { className?: string }) {
  const [loaded, setLoaded] = useState(false);
  const embed = mapEmbedUrl();
  const indicatii = directionsUrl();

  const container = `bg-blueprint relative min-h-[320px] overflow-hidden rounded-lg border border-antracit-600 ${className}`;

  // Fără URL (adică fără adresă) → placeholder, fără iframe Google.
  if (!embed) {
    return (
      <div className={`${container} grid place-items-center p-6 text-center`}>
        <span className="text-muted-invert">
          <PinIcon />
          <span className="mt-3 block font-display text-sm font-semibold uppercase tracking-wide text-ink-invert">
            Hartă Google Maps
          </span>
          <span className="mt-3 inline-flex">
            <Placeholder label="Adresă" />
          </span>
        </span>
      </div>
    );
  }

  return (
    <div className={container}>
      {loaded && embed ? (
        <iframe
          src={embed}
          title={`Hartă — ${site.nume}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setLoaded(true);
            trackEvent("load_harta");
          }}
          className="group absolute inset-0 grid w-full place-items-center text-center focus-visible:outline-none"
        >
          <span className="text-muted-invert">
            <PinIcon />
            <span className="mt-3 block font-display text-sm font-semibold uppercase tracking-wide text-ink-invert">
              {adresaTbd() ? <Placeholder label="Adresă" /> : adresaCompleta()}
            </span>
            <span className="mt-3 inline-flex items-center gap-2 rounded-md border border-antracit-600 px-4 py-2 font-display text-sm font-semibold uppercase tracking-wide text-ink-invert transition-colors group-hover:border-accent group-hover:text-accent">
              Încarcă harta
            </span>
          </span>
        </button>
      )}

      {/* „Vezi indicații" — funcționează indiferent dacă harta e încărcată */}
      {indicatii && (
        <a
          href={indicatii}
          {...externalLinkAttrs}
          onClick={() => trackEvent("click_indicatii")}
          className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 font-display text-xs font-semibold uppercase tracking-wide text-accent-ink shadow-md hover:bg-accent-600"
        >
          Vezi indicații →
        </a>
      )}
    </div>
  );
}

function PinIcon() {
  return (
    <svg className="mx-auto" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
