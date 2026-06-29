"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";

/**
 * Încarcă providerul de analytics după variabilele de mediu:
 *   - NEXT_PUBLIC_GA_ID            (G-XXXXXXX)  → GA4 (cookies → necesită consimțământ)
 *   - NEXT_PUBLIC_PLAUSIBLE_DOMAIN (domeniu)    → Plausible (cookieless, fără consimțământ)
 * Fără env → no-op. Vezi `.env.example` și TODO-continut.md.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  const [accepted, setAccepted] = useState(false);
  useEffect(() => {
    const sync = () => setAccepted(getConsent() === "accepted");
    sync();
    return onConsentChange(sync);
  }, []);

  return (
    <>
      {/* Plausible — cookieless, se poate încărca fără consimțământ */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {/* GA4 — doar după consimțământ explicit */}
      {gaId && accepted && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}
