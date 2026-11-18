/**
 * Consimțământ cookie (GDPR) + Google Consent Mode v2.
 *
 * Alegerea se salvează în localStorage ca `{ valoare, data }`. Implicit (setat în
 * scriptul inline din Analytics, înainte de gtag.js) toate cele 4 semnale sunt
 * „denied"; aici trimitem `consent update` la alegerea utilizatorului.
 */
import { CONSENT_KEY } from "@/lib/google";

export type Consent = "accepted" | "rejected";

export interface ConsentRecord {
  valoare: Consent;
  /** ISO 8601 — momentul alegerii. */
  data: string;
}

const EVENT_CHANGE = "consentchange";
const EVENT_OPEN = "cookiesettingsopen";

function esteConsent(v: unknown): v is Consent {
  return v === "accepted" || v === "rejected";
}

export function getConsentRecord(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    // Format vechi: doar șirul „accepted"/„rejected", fără dată.
    if (esteConsent(raw)) return { valoare: raw, data: "" };
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    return esteConsent(parsed.valoare)
      ? { valoare: parsed.valoare, data: String(parsed.data ?? "") }
      : null;
  } catch {
    return null;
  }
}

export function getConsent(): Consent | null {
  return getConsentRecord()?.valoare ?? null;
}

export function setConsent(c: Consent): void {
  if (typeof window === "undefined") return;
  const record: ConsentRecord = { valoare: c, data: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    // Storage blocat (mod privat etc.) — alegerea se aplică doar pe sesiunea curentă.
  }
  aplicaInGtag(c);
  if (c === "rejected") stergeCookieGoogle();
  window.dispatchEvent(new Event(EVENT_CHANGE));
}

/** Consent Mode v2: toate cele 4 semnale granted/denied, după alegere. */
function aplicaInGtag(c: Consent): void {
  if (typeof window.gtag !== "function") return;
  const stare = c === "accepted" ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: stare,
    analytics_storage: stare,
    ad_user_data: stare,
    ad_personalization: stare,
  });
}

/**
 * La retragerea consimțământului, șterge cookie-urile first-party create de Google
 * (_ga, _ga_*, _gcl_*), pe domeniul curent și pe domeniul părinte.
 */
function stergeCookieGoogle(): void {
  const nume = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => /^(_ga|_gid|_gat|_gcl_)/.test(n));
  if (nume.length === 0) return;
  const host = window.location.hostname;
  const domenii = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const n of nume) {
    for (const d of domenii) {
      document.cookie = `${n}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

/** Abonare la schimbarea consimțământului. Returnează funcția de dezabonare. */
export function onConsentChange(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT_CHANGE, cb);
  return () => window.removeEventListener(EVENT_CHANGE, cb);
}

/** Redeschide bannerul (link-ul „Setări cookie" din footer). */
export function openCookieSettings(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(EVENT_OPEN));
}

export function onCookieSettingsOpen(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT_OPEN, cb);
  return () => window.removeEventListener(EVENT_OPEN, cb);
}
