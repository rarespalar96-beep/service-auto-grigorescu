"use client";

import { site } from "@/content/site";
import { mapEmbedUrl, directionsUrl, externalLinkAttrs } from "@/lib/links";
import { trackEvent } from "@/lib/analytics";
import Placeholder from "@/components/ui/Placeholder";

/**
 * Hartă Google Maps. Iframe-ul se randează direct (preîncărcat), cu `loading="lazy"`
 * ca să nu se descarce decât când ajunge aproape de viewport — fără buton de „încarcă"
 * și fără API key. Placeholder doar dacă lipsește adresa (fără adresă nu există URL).
 */
export default function LazyMap({ className = "" }: { className?: string }) {
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
      <iframe
        src={embed}
        title={`Hartă — ${site.nume}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />

      {/* „Vezi indicații" */}
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
