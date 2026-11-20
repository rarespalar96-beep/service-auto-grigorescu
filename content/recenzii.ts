/**
 * Recenzii — VARIANTA A (v1): curate manual, copiate de proprietar din Google.
 *
 * Decizie inițială (2026-06-22): fără notă agregată — media era 3,5 din 55.
 * REVIZUIT (2026-07-27): media a urcat la 4,0 din 80 de recenzii, deci afișăm
 * agregatul pe site și în JSON-LD (`site.google.ratingReal: true`).
 * ACTUALIZAT (2026-11-17): 4,5 din 163 de recenzii.
 *
 * Testimonialele de mai jos rămân alese MANUAL, chiar dacă cifrele agregate ar
 * ajunge cândva să vină din Places API (varianta B): API-ul întoarce maximum 5
 * recenzii și nu poți alege care, deci selecția manuală protejează homepage-ul.
 * Componenta `sections/Reviews` consumă aceeași structură ca varianta B, deci
 * trecerea A→B nu schimbă UI-ul.
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
      "Cel mai bun service auto. Am avut cea mai bună experiență cu ei. Mi-au vopsit " +
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
    text: "Reparație pe RCA, o surpriză foarte plăcută: rapid și bine făcut.",
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
      "Merg lunar la spălătorie și sunt mereu mulțumită: interior și exterior la preț bun " +
      "și gata repede. Am făcut și mașina pe asigurare la ei: prețuri corecte, oameni de " +
      "treabă. Recomand!",
  },
];
