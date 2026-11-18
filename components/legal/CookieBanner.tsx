"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GOOGLE_ENABLED } from "@/lib/google";
import { getConsent, setConsent, onCookieSettingsOpen, type Consent } from "@/lib/consent";

/**
 * Banner cookie (GDPR + Consent Mode v2). Apare doar dacă e configurat un ID Google,
 * până la o alegere; se redeschide din „Setări cookie" (footer). Stă deasupra barei
 * mobile fixe (h-14, vizibilă sub xl), deci nu acoperă butoanele de apel/programare.
 * Cele două butoane au intenționat ACELAȘI stil — refuzul nu e ascuns sau estompat.
 */
export default function CookieBanner() {
  const [vizibil, setVizibil] = useState(false);

  useEffect(() => {
    if (!GOOGLE_ENABLED) return;
    // Citirea din localStorage e posibilă doar pe client, după montare.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (getConsent() === null) setVizibil(true);
    return onCookieSettingsOpen(() => setVizibil(true));
  }, []);

  if (!GOOGLE_ENABLED || !vizibil) return null;

  const alege = (val: Consent) => {
    setConsent(val);
    setVizibil(false);
  };

  const butonClase =
    "h-11 min-w-28 flex-1 rounded-md bg-ink-invert px-5 font-display text-sm font-semibold uppercase tracking-wide text-antracit transition-colors hover:bg-white md:flex-none";

  return (
    <div
      role="dialog"
      aria-label="Setări cookie"
      className="fixed inset-x-0 bottom-14 z-[60] border-t border-antracit-600 bg-antracit text-ink-invert shadow-lg xl:bottom-0"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6">
        <p className="text-sm text-muted-invert">
          Folosim cookie-uri Google Analytics și Google Ads ca să măsurăm vizitele și
          eficiența reclamelor, doar dacă ești de acord. Detalii în{" "}
          <Link href="/politica-cookies" className="text-accent-light underline">
            politica de cookies
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" onClick={() => alege("rejected")} className={butonClase}>
            Refuz
          </button>
          <button type="button" onClick={() => alege("accepted")} className={butonClase}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
