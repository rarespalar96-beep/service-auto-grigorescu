import { site } from "@/content/site";
import { recenzii as recenziiManuale, type Recenzie } from "@/content/recenzii";

export interface ReviewsData {
  /** `null` = de completat (rating real din Google). */
  rating: number | null;
  /** `null` = de completat (număr real de recenzii). */
  total: number | null;
  recenzii: Recenzie[];
  /** Sursa datelor — utilă pentru badge/debug. */
  sursa: "manual" | "google-api";
}

/**
 * SURSA recenziilor pentru întreg site-ul.
 *
 * VARIANTA A (v1, activă): date curate manual din `content/recenzii.ts` +
 * agregatul din `content/site.ts`. Zero chei, zero cost.
 *
 * VARIANTA B (v2): comută la `/api/reviews` (Google Places API, cu cache 24h).
 * Componenta de afișare (`sections/Reviews`) consumă ACEEAȘI formă `ReviewsData`,
 * deci trecerea la B NU schimbă UI-ul — doar implementarea de mai jos.
 */
export async function getReviews(): Promise<ReviewsData> {
  // — VARIANTA A —
  return {
    rating: site.google.rating,
    total: site.google.numarRecenzii,
    recenzii: recenziiManuale,
    sursa: "manual",
  };

  // — VARIANTA B (de activat în v2) —
  // const res = await fetch(`${baseUrl}/api/reviews`, { next: { revalidate: 86400 } });
  // if (!res.ok) return fallbackManual();
  // return (await res.json()) as ReviewsData;
}
