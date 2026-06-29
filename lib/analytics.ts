/**
 * Tracking provider-agnostic. Funcționează cu GA4 (dataLayer / gtag) și Plausible
 * fără configurare suplimentară — dacă niciunul nu e prezent, e no-op silențios.
 *
 * Evenimente-cheie (KPI):
 *  - `click_programare` — orice click pe CTA spre gatadedrum.com.
 *  - `click_telefon`    — orice click-to-call.
 */

type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props?: EventProps }) => void;
  }
}

export function trackEvent(name: string, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  // GA4 via gtag, dacă există
  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...props });
  }

  // Plausible, dacă există
  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }
}

export function trackProgramare(campaign: string): void {
  trackEvent("click_programare", { campaign });
}

export function trackTelefon(sursa: string): void {
  trackEvent("click_telefon", { sursa });
}
