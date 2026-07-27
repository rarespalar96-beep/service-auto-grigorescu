/**
 * Conținut pentru pagina „ITP" — Inspecția Tehnică Periodică.
 *
 * MOD DEMO: descrierile/listele/FAQ sunt șablon editabil (NU date individuale) și
 * pot rămâne ca atare. Datele care țin EXCLUSIV de stația de ITP a service-ului
 * (programul, prețul, nr. autorizație) rămân `null`/`TBD` și apar ca un chip
 * „DE COMPLETAT" în UI. Înlocuiește valorile, NU schimba structura.
 */

export interface PasItp {
  titlu: string;
  descriere: string;
}

export interface IntrebareFaq {
  intrebare: string;
  raspuns: string;
}

export const itp = {
  /** Sumar scurt (folosit în meta description). */
  sumar:
    "Inspecția Tehnică Periodică (ITP) pentru autoturisme și utilitare ușoare, " +
    "rapid și corect, cu o verificare onestă a stării mașinii.",

  /** Intro afișat sub antet (1–2 paragrafe, șablon editabil). */
  intro:
    "ITP-ul nu e doar o obligație legală — e verificarea care îți spune dacă mașina " +
    "e sigură pe drum. Facem inspecția rapid și transparent, iar dacă apare o " +
    "neconformitate îți explicăm exact ce e de reparat și o putem rezolva pe loc.",

  /** Categoriile verificate la ITP — șablon editabil, orientativ. */
  verificam: [
    "Sistemul de frânare și frâna de mână",
    "Direcția și suspensia",
    "Sistemul de iluminare și semnalizare",
    "Anvelope, jante și elemente de rulare",
    "Emisii poluante (noxe) și sistemul de evacuare",
    "Caroseria, geamurile și elementele de siguranță",
  ],

  /** Pașii procesului — șablon editabil. */
  pasi: [
    {
      titlu: "Te programezi",
      descriere:
        "Te programezi online sau ne suni și alegi un interval orar. Vii cu mașina " +
        "și actele la ora stabilită, fără să aștepți la coadă.",
    },
    {
      titlu: "Inspecția tehnică",
      descriere:
        "Verificăm mașina pe stand, conform reglementărilor RAR: frânare, direcție, " +
        "lumini, suspensie, noxe și restul punctelor obligatorii.",
    },
    {
      titlu: "Rezultatul și recomandările",
      descriere:
        "Îți comunicăm rezultatul pe loc. Dacă există neconformități, îți arătăm " +
        "exact ce trebuie reparat ca să treci inspecția.",
    },
    {
      titlu: "Reparație și revenire (dacă e cazul)",
      descriere:
        "Fiind și service complet, putem repara pe loc problemele găsite și relua " +
        "inspecția — totul într-un singur drum.",
    },
  ] as PasItp[],

  /** Acte necesare pentru ITP — standard, șablon editabil. */
  acte: [
    "Certificatul de înmatriculare (talonul)",
    "Asigurarea RCA valabilă",
    "Cartea de identitate a vehiculului",
  ],

  /**
   * Notă de acces specifică stației de ITP — intrarea diferă de poarta principală a
   * service-ului. Afișată în cardul de contact de pe pagina /itp.
   */
  acces:
    "Intrarea la ITP este din strada Prevederii, pe lateralul clădirii.",

  /** Întrebări frecvente — șablon editabil. */
  faq: [
    {
      intrebare: "Cât de des se face ITP-ul?",
      raspuns:
        "Pentru autoturismele de persoane, de regulă o dată la 2 ani, iar pentru " +
        "utilitare și mașini mai vechi mai des. Verificăm valabilitatea pe talon și " +
        "îți spunem exact când expiră.",
    },
    {
      intrebare: "Ce se întâmplă dacă nu trec ITP-ul?",
      raspuns:
        "Îți arătăm exact ce neconformități au fost găsite. Fiind și service, le putem " +
        "repara pe loc, iar apoi reluăm inspecția fără bătăi de cap.",
    },
    {
      intrebare: "Cât durează o inspecție?",
      raspuns:
        "În general în jur de 30 de minute, dacă mașina e în regulă. Cu programare " +
        "eviți timpii de așteptare.",
    },
    {
      intrebare: "Pot face ITP-ul fără programare?",
      raspuns:
        "Da, dar cu programare ești sigur că te luăm la ora stabilită. Te poți " +
        "programa online sau telefonic.",
    },
  ] as IntrebareFaq[],
} as const;
