import { NextResponse } from "next/server";
import { getReviews } from "@/lib/reviews";

/**
 * Endpoint recenzii — VARIANTA B (schelet pentru v2).
 *
 * Acum returnează datele variantei A (manuale), ca interfața să fie identică.
 * Pentru v2, înlocuiește corpul cu un apel Google Places API (Place Details,
 * câmpurile `rating`, `user_ratings_total`, `reviews`) și mapează la `ReviewsData`.
 * Necesită `GOOGLE_PLACES_API_KEY` cu billing activat și `site.google.placeId`.
 *
 * Cache 24h prin ISR (revalidate). Vezi TODO-continut.md.
 */
export const revalidate = 86400; // 24h

export async function GET() {
  // — VARIANTA A (placeholder pentru B) —
  const data = await getReviews();
  return NextResponse.json(data);

  // — VARIANTA B (de activat în v2) —
  // const key = process.env.GOOGLE_PLACES_API_KEY;
  // const placeId = site.google.placeId;
  // const fields = "rating,user_ratings_total,reviews";
  // const url = `https://maps.googleapis.com/maps/api/place/details/json` +
  //   `?place_id=${placeId}&fields=${fields}&language=ro&key=${key}`;
  // const res = await fetch(url, { next: { revalidate: 86400 } });
  // const json = await res.json();
  // return NextResponse.json(mapGoogleToReviewsData(json));
}
