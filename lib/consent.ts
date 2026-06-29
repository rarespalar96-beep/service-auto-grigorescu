/**
 * Consimțământ cookie minimal (GDPR). Stocat în localStorage.
 * GA4 (cu cookies) se încarcă DOAR după „accepted". Plausible e cookieless și nu
 * depinde de consimțământ.
 */
export type Consent = "accepted" | "rejected";

const KEY = "cookie-consent";
const EVENT = "consentchange";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(KEY);
  return v === "accepted" || v === "rejected" ? v : null;
}

export function setConsent(c: Consent): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, c);
  window.dispatchEvent(new Event(EVENT));
}

/** Abonare la schimbarea consimțământului. Returnează funcția de dezabonare. */
export function onConsentChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
