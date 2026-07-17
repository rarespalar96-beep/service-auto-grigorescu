/**
 * Conținut pentru pagina „Constatare daune" — asistență la dosarul de daună
 * auto (RCA), constatare cu asigurătorul, devize și reparații prin
 * asigurare.
 *
 * MOD DEMO: descrierile/pașii/FAQ sunt șablon editabil (NU date individuale) și
 * pot rămâne ca atare. Datele care țin EXCLUSIV de service — lista asigurătorilor
 * cu decontare directă — sunt GOLITE și apar ca un chip „DE COMPLETAT" în UI.
 * Înlocuiește valorile, NU schimba structura.
 */

export interface PasConstatare {
  /** Eticheta scurtă a pasului (apare în numărător). */
  titlu: string;
  descriere: string;
}

/** Cheile iconițelor proprii acestei pagini (vezi `app/constatare-daune/page.tsx`). */
export type DauneIcon = "shield" | "clipboard" | "wallet" | "handshake" | "car";

export interface TipAcoperire {
  nume: string;
  descriere: string;
  icon: DauneIcon;
}

export interface IntrebareFaq {
  intrebare: string;
  raspuns: string;
}

export const constatareDaune = {
  /** Sumar scurt (folosit în meta description). */
  sumar:
    "Te ajutăm cu dosarul de daună auto: constatare cu asigurătorul, devize și " +
    "reparația mașinii prin RCA — fără bătăi de cap.",

  /** Intro afișat sub antet (1–2 paragrafe, șablon editabil). */
  intro:
    "Ai avut un accident sau o avarie? Preluăm partea complicată: te ghidăm prin " +
    "deschiderea dosarului de daună, programăm constatarea cu asigurătorul și " +
    "executăm reparația cu piese conform devizului. Tu te ocupi de drum, restul " +
    "rezolvăm noi.",

  /** Pașii procesului — etapele confirmate de proprietar (2026-06-18). */
  pasi: [
    {
      titlu: "Contactarea telefonică",
      descriere:
        "Ne suni și ne spui pe scurt ce s-a întâmplat. Îți explicăm pașii și îți " +
        "spunem ce documente să ai la tine pentru întâlnirea de la biroul de daune.",
    },
    {
      titlu: "Întâlnirea fizică la biroul de daune",
      descriere:
        "Ne vedem la biroul de daune, unde verificăm împreună situația și pregătim " +
        "deschiderea dosarului cu toate detaliile necesare.",
    },
    {
      titlu: "Asistență la completarea și instrumentarea dosarului",
      descriere:
        "Te ajutăm să completezi corect actele și instrumentăm dosarul, astfel încât " +
        "să fie acceptat de asigurător fără întârzieri.",
    },
    {
      titlu: "Avizarea dosarului de daună",
      descriere:
        "Depunem dosarul la asigurător și urmărim avizarea lui, ca reparația să fie " +
        "aprobată conform devizului întocmit.",
    },
    {
      titlu: "Mașină la schimb pe durata reparației",
      descriere:
        "Ca să nu rămâi pe jos, îți punem la dispoziție o mașină la schimb pe " +
        "perioada în care a ta este în reparație.",
    },
    {
      titlu: "Reparația fizică, în cel mai scurt timp",
      descriere:
        "Reparăm mașina cu piese și manoperă conform dosarului, în cel mai scurt timp " +
        "posibil, și te ținem la curent până o primești înapoi ca nouă.",
    },
  ] as PasConstatare[],

  /** Tipuri de daune/acoperire pe care le gestionăm — șablon editabil. */
  acoperim: [
    {
      nume: "Daune RCA",
      descriere:
        "Ești partea nevinovată într-un accident? Reparăm mașina pe baza poliței " +
        "RCA a celui vinovat, cu dosar complet.",
      icon: "shield",
    },
    {
      nume: "Constatare amiabilă",
      descriere:
        "Te ajutăm să completezi corect formularul de constatare amiabilă, ca " +
        "dosarul să fie acceptat fără probleme.",
      icon: "handshake",
    },
    {
      nume: "Decontare directă",
      descriere:
        "Cu asigurătorii parteneri facturăm direct către ei — tu nu mai avansezi " +
        "banii pentru reparație.",
      icon: "wallet",
    },
    {
      nume: "Mașină la schimb",
      descriere:
        "Ca să nu rămâi pe jos, îți punem la dispoziție o mașină la schimb pe toată " +
        "durata reparației.",
      icon: "car",
    },
  ] as TipAcoperire[],

  /**
   * Lista de documente diferă de la caz la caz, așa că NU o afișăm fix — clientul
   * este informat ce acte să aibă la el după discuția telefonică. Vezi mesajul din
   * `app/constatare-daune/page.tsx`.
   */

  /**
   * Asigurători cu care service-ul are DECONTARE DIRECTĂ. Date individuale ale
   * service-ului → de completat de proprietar. Gol = se afișează chip
   * „DE COMPLETAT" în loc de o listă fictivă. TODO.
   */
  asiguratoriParteneri: [] as string[], // TODO: lista reală a asigurătorilor parteneri

  /** Întrebări frecvente — șablon editabil. */
  faq: [
    {
      intrebare: "Trebuie să plătesc eu reparația și apoi recuperez banii?",
      raspuns:
        "Cu asigurătorii cu care avem decontare directă, nu. Facturăm direct către " +
        "asigurător. În rest, te ghidăm pas cu pas în procesul de recuperare.",
    },
    {
      intrebare: "Cât durează tot procesul?",
      raspuns:
        "Depinde de asigurător și de disponibilitatea pieselor. După aprobarea " +
        "devizului îți comunicăm un termen estimativ și te ținem la curent.",
    },
    {
      intrebare: "Pot alege eu service-ul pentru reparație?",
      raspuns:
        "Da. Ai dreptul să alegi unde îți repari mașina — nu ești obligat să mergi " +
        "unde îți indică asigurătorul.",
    },
  ] as IntrebareFaq[],
} as const;
