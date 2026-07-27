import { site } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import type { Serviciu } from "@/content/servicii";
import type { Articol } from "@/content/blog";

/** ID stabil al entității de business, referențiat de celelalte scheme. */
const BUSINESS_ID = `${site.url}/#service`;

const ZI_RO_EN: Record<string, string> = {
  Luni: "Monday",
  Marți: "Tuesday",
  Miercuri: "Wednesday",
  Joi: "Thursday",
  Vineri: "Friday",
  Sâmbătă: "Saturday",
  Duminică: "Sunday",
};

function openingHours() {
  return site.program
    .filter((z) => z.ore !== "Închis" && !isTbd(z.ore))
    .map((z) => {
      const [opens, closes] = z.ore.split("–").map((s) => s.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ZI_RO_EN[z.zi] ?? z.zi,
        opens,
        closes,
      };
    });
}

/** Schema AutoRepair (LocalBusiness) — pe toate paginile. */
export function autoRepairLd() {
  const sameAs = [site.google.profilUrl, site.social.facebook, site.social.instagram].filter(
    Boolean,
  );

  // Mod demo: includem în JSON-LD DOAR câmpurile cu date reale (fără placeholdere).
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": BUSINESS_ID,
    name: site.nume,
    url: site.url,
    priceRange: site.priceRange,
  };

  if (!isTbd(site.contact.telefonTel)) data.telephone = site.contact.telefonTel;

  if (!isTbd(site.contact.adresa)) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: site.contact.adresa,
      addressLocality: site.contact.oras,
      addressRegion: site.contact.judet,
      postalCode: site.contact.codPostal,
      addressCountry: "RO",
    };
  }

  const ore = openingHours();
  if (ore.length) data.openingHoursSpecification = ore;

  if (!isTbd(site.zona)) data.areaServed = site.zona;

  if (sameAs.length) data.sameAs = sameAs;

  // aggregateRating DOAR cu valori reale (vezi site.google.ratingReal).
  if (site.google.ratingReal) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.google.rating,
      reviewCount: site.google.numarRecenzii,
    };
  }

  return data;
}

/** Schema Service — pe paginile de serviciu. */
export function serviceLd(s: Serviciu) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.nume,
    description: s.sumar,
    serviceType: s.nume,
    provider: { "@type": "AutoRepair", "@id": BUSINESS_ID, name: site.nume },
    url: `${site.url}/servicii/${s.slug}`,
  };

  if (!isTbd(site.zona)) data.areaServed = site.zona;

  return data;
}

/** Schema FAQPage — homepage și paginile de serviciu. */
export function faqLd(items: { intrebare: string; raspuns: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.intrebare,
      acceptedAnswer: { "@type": "Answer", text: f.raspuns },
    })),
  };
}

/** Schema BlogPosting — articolele de blog. */
export function blogPostingLd(a: Articol) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.titlu,
    description: a.descriere,
    datePublished: a.data,
    dateModified: a.data,
    author: { "@type": "Organization", name: a.autor },
    publisher: { "@type": "AutoRepair", "@id": BUSINESS_ID, name: site.nume },
    mainEntityOfPage: `${site.url}/blog/${a.slug}`,
  };
}

/** Schema BreadcrumbList. */
export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.url}`,
    })),
  };
}
