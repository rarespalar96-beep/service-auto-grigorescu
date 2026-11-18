import type { Metadata } from "next";
import Link from "next/link";
import { site, adresaCompleta } from "@/content/site";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: `Cum prelucrează ${site.nume} datele personale și cookie-urile.`,
  alternates: { canonical: "/politica-de-confidentialitate" },
};

/* TODO: text revizuit de un consultant juridic înainte de lansare. */
export default function PoliticaPage() {
  return (
    <LegalPage titlu="Politica de confidențialitate" actualizat="iunie 2026">
      <p>
        Această politică explică modul în care {site.nume} („noi”) prelucrează datele
        cu caracter personal, în conformitate cu Regulamentul (UE) 2016/679 (GDPR).
      </p>

      <h2>Cine suntem</h2>
      <p>
        Operator: {site.nume}, {adresaCompleta()}, {site.contact.codPostal}{" "}
        {site.contact.oras}. Ne poți contacta la {site.contact.telefonAfisat} sau{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>

      <h2>Ce date colectăm</h2>
      <p>
        Acest site este în principal informativ și nu conține formulare de contact.
        Putem prelucra:
      </p>
      <ul>
        <li>Date de navigare și statistice, dacă accepți cookie-urile de analiză;</li>
        <li>
          Date pe care le furnizezi voluntar când ne suni sau ne scrii pe email
          (nume, număr de telefon, detalii despre mașină).
        </li>
      </ul>

      <h2>Programările online</h2>
      <p>
        Programările se fac pe platforma externă gatadedrum.com. Când apeși
        „Programează-te”, ești redirecționat către această platformă, care are propria
        politică de confidențialitate. Datele introduse acolo sunt prelucrate de
        operatorul platformei, nu de noi.
      </p>

      <h2>Cookie-uri</h2>
      <p>
        Folosim cookie-uri strict necesare pentru funcționarea site-ului și, doar cu
        acordul tău, cookie-uri de analiză și publicitate (Google Analytics, Google
        Ads). Poți accepta sau refuza din bannerul afișat la prima vizită și îți poți
        schimba alegerea oricând din „Setări cookie”, în subsolul paginii. Lista
        completă e în <Link href="/politica-cookies">politica de cookies</Link>. Harta
        Google Maps se încarcă doar după ce apeși pe ea.
      </p>

      <h2>Către cine transmitem date</h2>
      <ul>
        <li>Google (Analytics și Ads), dacă ai acceptat cookie-urile;</li>
        <li>Google Maps, la încărcarea hărții;</li>
        <li>Platforma de programări gatadedrum.com, dacă alegi să te programezi.</li>
      </ul>

      <h2>Drepturile tale</h2>
      <p>
        Ai dreptul de acces, rectificare, ștergere, restricționare, opoziție și
        portabilitate a datelor, precum și dreptul de a depune o plângere la Autoritatea
        Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
        Pentru exercitarea acestor drepturi, contactează-ne la datele de mai sus.
      </p>

      <p>
        {/* TODO: completează perioada de stocare, temeiul juridic detaliat și eventualii
        împuterniciți, după consultare juridică. */}
      </p>
    </LegalPage>
  );
}
