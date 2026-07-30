/**
 * SURSA UNICĂ DE ADEVĂR pentru toate datele service-ului.
 *
 * Câmpurile încă necompletate sunt marcate `TBD` (text) sau `null` (numeric) și
 * apar în site ca un chip vizibil „DE COMPLETAT".
 * Înlocuiește valorile, NU schimba structura. Helper-e în `content/_placeholder.ts`.
 */

import { isTbd, orTbd } from "./_placeholder";

export interface ProgramZi {
  zi: string;
  ore: string; // "08:00–18:00" sau "Închis" — TBD cât timp nu e completat
}

export interface ProgramDepartament {
  departament: string;
  ore: string; // orele valabile Luni–Vineri
}

export const site = {
  /** Numele afișat al service-ului — IDENTIC cu Google Business Profile (SEO local). */
  nume: "Service Auto Grigorescu",

  /** Sloganul scurt din hero / title. */
  slogan: "Service auto autorizat RAR",

  /** URL-ul canonic al site-ului (fără slash final). Config pt. metadata/sitemap. */
  url: "https://servicegrigorescu.ro", // domeniu real (.ro, apex) — canonic pt. metadataBase/sitemap/OG

  /** Interval de preț pentru JSON-LD (Schema.org). */
  priceRange: "$$",

  /** Zona/orașul pentru SEO local și titluri. */
  zona: "București",

  /** Descriere scurtă (meta description default). TODO: ajustează după localitate. */
  descriere:
    "Service auto autorizat RAR. Revizii, frâne, distribuție, diagnoză și " +
    "mecanică generală. Programări online rapide.",

  /** Anul înființării — folosit pentru „X ani experiență". */
  anInfiintare: 2020 as number | null,

  contact: {
    /** Telefon în format pe care îl vede utilizatorul. */
    telefonAfisat: "0726 215 246",
    /** Telefon pentru `tel:` (E.164, fără spații). */
    telefonTel: "+40726215246",
    email: "Clienti.servicegrigorescu@gmail.com",
    /** Adresa completă, IDENTICĂ cu Google Business Profile. */
    adresa: "Bulevardul Nicolae Grigorescu 46-48, Sector 3",
    oras: "București",
    judet: "București",
    codPostal: "077160",
    tara: "România",
  },

  /**
   * Program de lucru sintetic (anvelopa cea mai largă) — folosit în footer și în
   * JSON-LD `openingHoursSpecification`. Detaliul pe departamente e mai jos.
   */
  program: [
    { zi: "Luni", ore: "08:00–20:00" },
    { zi: "Marți", ore: "08:00–20:00" },
    { zi: "Miercuri", ore: "08:00–20:00" },
    { zi: "Joi", ore: "08:00–20:00" },
    { zi: "Vineri", ore: "08:00–20:00" },
    { zi: "Sâmbătă", ore: "08:00–17:00" },
    { zi: "Duminică", ore: "Închis" },
  ] as ProgramZi[],

  /**
   * Program pe departamente — valabil Luni–Vineri. Sâmbătă toate departamentele
   * au program general (vezi `programWeekend`), Duminică închis.
   */
  programDepartamente: [
    { departament: "ITP", ore: "11:00–20:00" },
    { departament: "Mecanică", ore: "08:00–18:00" },
    { departament: "Spălătorie & Vulcanizare", ore: "08:00–20:00" },
    { departament: "Constatare daune", ore: "08:00–20:00" },
  ] as ProgramDepartament[],

  /** Program de weekend — se aplică tuturor departamentelor. */
  programWeekend: {
    sambata: "08:00–17:00",
    duminica: "Închis",
  },

  /**
   * Platforma externă de programări. Rădăcina gatadedrum.com e reală; URL-ul EXACT
   * al paginii dedicate acestui service îl furnizează proprietarul. TODO.
   */
  bookingUrl: "https://gatadedrum.com", // TODO: pagina dedicată service-ului

  google: {
    /** Place ID din Google Business Profile — hartă, indicații, recenzii v2. TODO. */
    placeId: "", // TODO
    /** Link direct către profilul Google (pentru „Vezi toate recenziile"). */
    profilUrl: "https://www.google.com/maps?cid=13586452098619371626",
    /** Rating agregat REAL din Google — actualizat manual (2026-07-27). */
    rating: 4.0 as number | null,
    /** Număr total de recenzii REAL din Google — actualizat manual (2026-07-27). */
    numarRecenzii: 80 as number | null,
    /**
     * Setează `true` DOAR după ce rating/numarRecenzii sunt valorile REALE din
     * Google. Controlează dacă `aggregateRating` apare în JSON-LD — markup de
     * recenzii false e penalizat de Google.
     */
    ratingReal: true,
  },

  social: {
    facebook: "https://www.facebook.com/p/Service-Auto-Grigorescu-Srl-100057670860951/",
    instagram: "", // nu există (proprietarul are doar Facebook)
  },

  /** Garanție oferită la lucrări — variază în funcție de serviciu. */
  garantii: [
    { serviciu: "Vulcanizare", durata: "1 lună" },
    { serviciu: "Mecanică", durata: "3–6 luni" },
    { serviciu: "Vopsitorie", durata: "1 an" },
  ] as { serviciu: string; durata: string }[],
} as const;

export type Site = typeof site;

/** „X ani experiență" calculat din anul înființării; `null` cât timp lipsește. */
export function aniExperienta(): number | null {
  if (isTbd(site.anInfiintare)) return null;
  return new Date().getFullYear() - (site.anInfiintare as number);
}

/** True dacă adresa e încă de completat (folosit pentru chip vs. text). */
export function adresaTbd(): boolean {
  return isTbd(site.contact.adresa);
}

/** Adresa pe un singur rând; nu afișează niciodată sentinel-ul brut. */
export function adresaCompleta(): string {
  const c = site.contact;
  return `${orTbd(c.adresa, "stradă")}, ${orTbd(c.oras, "localitate")}, ${orTbd(c.judet, "județ")}`;
}
