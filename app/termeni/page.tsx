import type { Metadata } from "next";
import { site } from "@/content/site";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: `Termenii de utilizare a site-ului ${site.nume}.`,
  alternates: { canonical: "/termeni" },
};

/* TODO: text revizuit de un consultant juridic înainte de lansare. */
export default function TermeniPage() {
  return (
    <LegalPage titlu="Termeni și condiții" actualizat="iunie 2026">
      <p>
        Prin accesarea și utilizarea acestui site, ești de acord cu termenii de mai jos.
        Site-ul este operat de {site.nume}.
      </p>

      <h2>Rolul site-ului</h2>
      <p>
        Acest site are caracter informativ: prezintă serviciile, prețurile orientative
        și datele de contact ale service-ului. Programările NU se efectuează pe acest
        site, ci pe platforma externă gatadedrum.com.
      </p>

      <h2>Prețuri și informații</h2>
      <p>
        Pe acest site nu afișăm prețuri fixe. Prețul îl afli cel mai bine telefonic sau
        direct la service și variază în funcție de marcă, model și piesele necesare; ți-l
        comunicăm înainte de orice lucrare. Ne rezervăm dreptul de a actualiza
        informațiile fără notificare prealabilă.
      </p>

      <h2>Limitarea răspunderii</h2>
      <p>
        Depunem eforturi pentru ca informațiile să fie corecte și actuale, însă nu
        garantăm că sunt complete sau lipsite de erori. Nu răspundem pentru conținutul
        sau disponibilitatea platformelor externe către care facem trimitere (de ex.
        gatadedrum.com, Google Maps).
      </p>

      <h2>Proprietate intelectuală</h2>
      <p>
        Conținutul acestui site (texte, imagini, logo) aparține {site.nume} și nu poate
        fi reprodus fără acordul nostru.
      </p>

      <h2>Contact</h2>
      <p>
        Pentru întrebări legate de acești termeni, ne poți contacta la{" "}
        {site.contact.telefonAfisat} sau {site.contact.email}.
      </p>

      <p>
        {/* TODO: adaugă clauze specifice (legea aplicabilă, soluționarea litigiilor,
        SOL/ANPC) după consultare juridică. */}
      </p>
    </LegalPage>
  );
}
