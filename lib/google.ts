/**
 * Configurația Google (GA4 + Google Ads), din variabile de mediu inlined la build.
 * Toate sunt opționale: dacă GA_ID și GADS_ID lipsesc, nu se încarcă niciun script
 * Google și bannerul de cookie nu apare. Vezi `.env.example`.
 *
 * NOTĂ: `process.env.NEXT_PUBLIC_*` trebuie scris literal ca Next să-l înlocuiască.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID?.trim() ?? "";

/** Label-urile acțiunilor de conversie Google Ads (partea de după „/" din send_to). */
export const GADS_LABELS = {
  telefon: process.env.NEXT_PUBLIC_GADS_LABEL_TELEFON?.trim() ?? "",
  programare: process.env.NEXT_PUBLIC_GADS_LABEL_PROGRAMARE?.trim() ?? "",
} as const;

export type ConversieGads = keyof typeof GADS_LABELS;

/** Există cel puțin un ID Google → încărcăm gtag.js și afișăm bannerul. */
export const GOOGLE_ENABLED = Boolean(GA_ID || GADS_ID);

/** Cheia din localStorage pentru alegerea de consimțământ (folosită și în scriptul inline). */
export const CONSENT_KEY = "cookie-consent";
