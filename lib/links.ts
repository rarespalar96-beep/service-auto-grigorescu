import { site } from "@/content/site";
import { isTbd } from "@/content/_placeholder";

/**
 * Construiește URL-ul de programare către gatadedrum.com cu UTM-uri.
 * `campaign` identifică pagina-sursă (ex. "home", "servicii-frane").
 */
export function bookingUrl(campaign: string): string {
  const url = new URL(site.bookingUrl);
  url.searchParams.set("utm_source", "site");
  url.searchParams.set("utm_medium", "cta");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

/** Link `tel:` pentru click-to-call; `null` cât timp numărul e de completat. */
export function telHref(): string | null {
  if (isTbd(site.contact.telefonTel)) return null;
  return `tel:${site.contact.telefonTel}`;
}

/**
 * Ținta pentru Google Maps: adresa completă. `null` doar dacă lipsește adresa.
 * Adresa e suficientă pentru punct pe hartă + indicații, fără Place ID / API key.
 */
function mapsDestination(): string | null {
  const c = site.contact;
  if (isTbd(c.adresa)) return null;
  return [c.adresa, c.codPostal, c.oras, c.tara].filter(Boolean).join(", ");
}

/** Link Google Maps „Vezi indicații" (directions) către service. */
export function directionsUrl(): string | null {
  const destination = mapsDestination();
  if (!destination) return null;
  const url = new URL("https://www.google.com/maps/dir/");
  url.searchParams.set("api", "1");
  url.searchParams.set("destination", destination);
  if (site.google.placeId) {
    url.searchParams.set("destination_place_id", site.google.placeId);
  }
  return url.toString();
}

/**
 * URL pentru embed-ul Google Maps (iframe), GRATUIT și fără API key.
 * Folosit lazy — vezi `LazyMap`.
 */
export function mapEmbedUrl(): string | null {
  const q = mapsDestination();
  if (!q) return null;
  return `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&hl=ro&output=embed`;
}

/** Atribute standard pentru linkurile externe (CTA programare). */
export const externalLinkAttrs = {
  target: "_blank",
  rel: "noopener",
} as const;
