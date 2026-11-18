import Script from "next/script";
import { GA_ID, GADS_ID, GOOGLE_ENABLED, CONSENT_KEY } from "@/lib/google";

/**
 * Încarcă providerii de analytics după variabilele de mediu (vezi `.env.example`):
 *   - NEXT_PUBLIC_GA_ID   (G-XXXXXXX)  → GA4
 *   - NEXT_PUBLIC_GADS_ID (AW-XXXXXXX) → Google Ads
 *   - NEXT_PUBLIC_PLAUSIBLE_DOMAIN     → Plausible (cookieless, fără consimțământ)
 * Fără env → nu se randează nimic.
 *
 * Google: Consent Mode v2, modul avansat. Scriptul inline rulează ÎNAINTE de
 * gtag.js și setează implicit toate semnalele pe „denied"; dacă vizitatorul a
 * acceptat într-o vizită anterioară, trimite imediat `consent update` „granted".
 * Fără consimțământ, gtag nu scrie cookie-uri (doar ping-uri anonime).
 */
export default function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <>
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}

      {GOOGLE_ENABLED && (
        <>
          {/* <script> simplu, în HTML-ul static: rulează la parsare, deci garantat
              înainte de gtag.js (injectat abia după hidratare). */}
          <script id="gtag-consent-init" dangerouslySetInnerHTML={{ __html: gtagInit() }} />
          {/* Un singur gtag.js, oricare ID ar exista; ambele sunt configurate în init. */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID || GADS_ID)}`}
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}

function gtagInit(): string {
  const granted =
    "{ad_storage:'granted',analytics_storage:'granted',ad_user_data:'granted',ad_personalization:'granted'}";
  const configs = [GA_ID, GADS_ID]
    .filter(Boolean)
    .map((id) => `gtag('config',${JSON.stringify(id)});`)
    .join("\n");

  return `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});
gtag('set','ads_data_redaction',true);
try{var r=localStorage.getItem(${JSON.stringify(CONSENT_KEY)});var v=r&&(r.charAt(0)==='{'?JSON.parse(r).valoare:r);if(v==='accepted'){gtag('consent','update',${granted});}}catch(e){}
gtag('js',new Date());
${configs}`;
}
