/**
 * Tracking provider-agnostic: GA4 (gtag) și Plausible — dacă niciunul nu e
 * prezent, e no-op silențios.
 *
 * Evenimente-cheie (KPI), ambele cu parametrul `buton` = ce CTA a fost apăsat
 * (ex. "header", "home-hero", "bara-mobila", "servicii-frane"):
 *  - `click_programare` — orice click pe CTA spre gatadedrum.com.
 *  - `click_telefon`    — orice click-to-call.
 * Pentru raportare în GA4, `buton` trebuie înregistrat ca dimensiune personalizată
 * (Admin → Custom definitions, scope Event).
 *
 * Fiecare click trimite și conversia Google Ads corespunzătoare, dacă sunt setate
 * NEXT_PUBLIC_GADS_ID și label-ul (vezi `trackConversieGads`).
 */
import { GADS_ID, GADS_LABELS, type ConversieGads } from "@/lib/google";

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

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, { props });
  }
}

/**
 * Conversie Google Ads: gtag('event','conversion',{send_to:'AW-XXX/LABEL'}).
 * Fără ID sau fără label pentru tipul respectiv → nu trimite nimic.
 */
export function trackConversieGads(tip: ConversieGads): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const label = GADS_LABELS[tip];
  if (!GADS_ID || !label) return;
  window.gtag("event", "conversion", { send_to: `${GADS_ID}/${label}` });
}

export function trackProgramare(buton: string): void {
  trackEvent("click_programare", { buton });
  trackConversieGads("programare");
}

export function trackTelefon(buton: string): void {
  trackEvent("click_telefon", { buton });
  trackConversieGads("telefon");
}
