import type { Metadata } from "next";
import Link from "next/link";
import { site, adresaCompleta } from "@/content/site";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: `Ce cookie-uri folosește site-ul ${site.nume}, de ce și cum îți retragi consimțământul.`,
  alternates: { canonical: "/politica-cookies" },
};

/*
 * TODO: textul trebuie revizuit (juridic) înainte de lansare — în special duratele
 * și lista de cookie-uri, după ce GA4 și Google Ads sunt configurate efectiv
 * (verifică în DevTools → Application → Cookies ce se creează realmente).
 */

interface RandCookie {
  nume: string;
  furnizor: string;
  scop: string;
  durata: string;
}

const necesare: RandCookie[] = [
  {
    nume: "cookie-consent (localStorage)",
    furnizor: site.nume,
    scop: "Reține dacă ai acceptat sau refuzat cookie-urile și data alegerii.",
    durata: "Până o ștergi din browser",
  },
];

const analiza: RandCookie[] = [
  {
    nume: "_ga",
    furnizor: "Google Analytics",
    scop: "Distinge vizitatorii unici, pentru statistici agregate de trafic.",
    durata: "2 ani",
  },
  {
    nume: "_ga_*",
    furnizor: "Google Analytics",
    scop: "Păstrează starea sesiunii (pagini vizitate, durată).",
    durata: "2 ani",
  },
];

const publicitate: RandCookie[] = [
  {
    nume: "_gcl_au",
    furnizor: "Google Ads",
    scop: "Măsoară conversiile (apeluri, programări) venite din reclame Google.",
    durata: "90 de zile",
  },
  {
    nume: "_gcl_aw, _gcl_gs",
    furnizor: "Google Ads",
    scop: "Reține clicul pe reclama Google care te-a adus pe site.",
    durata: "90 de zile",
  },
  {
    nume: "IDE, test_cookie (doubleclick.net)",
    furnizor: "Google",
    scop: "Măsurarea și personalizarea reclamelor Google, pe domeniul Google.",
    durata: "Până la 13 luni",
  },
];

function TabelCookie({ randuri }: { randuri: RandCookie[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-surface">
      <table className="w-full min-w-[34rem] text-left text-sm">
        <thead className="bg-bg font-display uppercase tracking-wide text-ink">
          <tr>
            <th className="px-3 py-2">Cookie</th>
            <th className="px-3 py-2">Furnizor</th>
            <th className="px-3 py-2">Scop</th>
            <th className="px-3 py-2">Durată</th>
          </tr>
        </thead>
        <tbody>
          {randuri.map((r) => (
            <tr key={r.nume} className="border-t border-line align-top">
              <td className="px-3 py-2 font-mono text-xs">{r.nume}</td>
              <td className="px-3 py-2">{r.furnizor}</td>
              <td className="px-3 py-2">{r.scop}</td>
              <td className="px-3 py-2 whitespace-nowrap">{r.durata}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PoliticaCookiesPage() {
  return (
    <LegalPage titlu="Politica de cookies" actualizat="noiembrie 2026">
      <p>
        Această pagină explică ce cookie-uri și tehnologii similare folosește site-ul{" "}
        {site.url.replace("https://", "")}, de ce le folosim și cum îți poți schimba
        alegerea. Se completează cu{" "}
        <Link href="/politica-de-confidentialitate">politica de confidențialitate</Link>.
      </p>

      <h2>Ce sunt cookie-urile</h2>
      <p>
        Cookie-urile sunt fișiere mici salvate de browser când vizitezi un site. Unele
        sunt necesare ca site-ul să funcționeze, altele ne ajută să înțelegem cum e
        folosit site-ul și cât de eficiente sunt reclamele noastre.
      </p>

      <h2>Strict necesare</h2>
      <p>Nu necesită consimțământ. Fără ele nu am putea ține minte alegerea ta.</p>
      <TabelCookie randuri={necesare} />

      <h2>Analiză (Google Analytics 4)</h2>
      <p>
        Se activează doar dacă apeși „Accept”. Ne arată, agregat, câte persoane vizitează
        site-ul, ce pagini citesc și câte apasă pe butoanele de apel sau programare.
      </p>
      <TabelCookie randuri={analiza} />

      <h2>Publicitate (Google Ads)</h2>
      <p>
        Se activează doar dacă apeși „Accept”. Ne arată dacă reclamele Google aduc
        apeluri și programări, ca să nu plătim pentru reclame care nu funcționează.
      </p>
      <TabelCookie randuri={publicitate} />

      <h2>Ce se întâmplă dacă refuzi</h2>
      <p>
        Folosim Google Consent Mode v2. Până nu accepți, nu se salvează niciun cookie
        Google în browserul tău. Google poate primi semnale anonime, fără cookie-uri și
        fără identificatori (de ex. că a avut loc o vizită), pe care le folosește doar
        pentru estimări statistice agregate. Site-ul funcționează la fel, indiferent de
        alegere.
      </p>

      <h2>Cum îți retragi sau schimbi consimțământul</h2>
      <ul>
        <li>
          Apasă „Setări cookie” în subsolul oricărei pagini și alege „Refuz”. Cookie-urile
          Google deja create pe acest site se șterg imediat.
        </li>
        <li>
          Poți șterge oricând cookie-urile și datele site-ului din setările browserului.
        </li>
        <li>
          Pentru reclamele Google în general, vezi{" "}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
            setările de reclame Google
          </a>
          .
        </li>
      </ul>

      <h2>Transferuri în afara UE</h2>
      <p>
        Google poate prelucra date în SUA, în baza EU-US Data Privacy Framework și a
        clauzelor contractuale standard. Detalii în{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          politica de confidențialitate Google
        </a>
        .
      </p>

      <h2>Contact</h2>
      <p>
        {site.nume}, {adresaCompleta()}, {site.contact.codPostal} {site.contact.oras}.
        Telefon: {site.contact.telefonAfisat}. Email:{" "}
        <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
      </p>
    </LegalPage>
  );
}
