/**
 * Recenzii — VARIANTA A (v1): curate manual, copiate de proprietar din Google.
 *
 * Decizie (2026-06-22): afișăm DOAR aceste testimoniale reale (toate 5 stele),
 * FĂRĂ nota agregată — media reală a profilului e 3,5 din 55 recenzii, deci nu
 * afișăm rating agregat (ar fi fie nemăgulitor, fie fals). `site.google.rating`
 * și `numarRecenzii` rămân `null`, `ratingReal` rămâne `false` (fără
 * aggregateRating în JSON-LD). Componenta `sections/Reviews` consumă aceeași
 * structură ca varianta B (Google Places API), deci trecerea A→B nu schimbă UI-ul.
 *
 * Texte curățate ușor (typos/diacritice) și scurtate, păstrând sensul și tonul.
 */

export interface Recenzie {
  nume: string;
  rating: number; // 1–5
  /** Text relativ, ca în Google (ex. „acum 2 săptămâni"). */
  data: string;
  text: string;
}

export const recenzii: Recenzie[] = [
  {
    nume: "Cristina Ionescu",
    rating: 5,
    data: "acum 10 luni",
    text:
      "Cel mai bun service auto. Am avut cea mai bună experiență cu ei — mi-au vopsit " +
      "și reparat mașina impecabil. Niște oameni pe care te poți baza. Recomand cu încredere!",
  },
  {
    nume: "Daniel Stoica",
    rating: 5,
    data: "acum 2 luni",
    text:
      "Service de calitate, personal calificat. Foarte mulțumit de cum au gestionat " +
      "constatarea daunei și reparația mașinii.",
  },
  {
    nume: "Mihai Kosakowsky",
    rating: 5,
    data: "acum 7 luni",
    text: "Reparație pe RCA — o surpriză foarte plăcută, rapid și bine făcut.",
  },
  {
    nume: "Jecu Răzvan",
    rating: 5,
    data: "acum 11 luni",
    text:
      "Am fost cu o problemă la aerul condiționat, iar mecanicul a stat două ore la " +
      "mașină până a rezolvat-o. Experiență plăcută, recomand!",
  },
  {
    nume: "Eliza Ungureanu",
    rating: 5,
    data: "acum un an",
    text:
      "Merg lunar la spălătorie și sunt mereu mulțumită — interior-exterior la preț bun " +
      "și gata repede. Am făcut și mașina pe asigurare la ei: prețuri corecte, oameni de " +
      "treabă. Recomand!",
  },
];
