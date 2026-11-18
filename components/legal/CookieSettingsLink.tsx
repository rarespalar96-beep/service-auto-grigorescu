"use client";

import { GOOGLE_ENABLED } from "@/lib/google";
import { openCookieSettings } from "@/lib/consent";

/** „Setări cookie" din footer — redeschide bannerul. Ascuns dacă nu e configurat Google. */
export default function CookieSettingsLink({ className = "" }: { className?: string }) {
  if (!GOOGLE_ENABLED) return null;
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      Setări cookie
    </button>
  );
}
