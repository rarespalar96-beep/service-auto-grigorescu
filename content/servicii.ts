/**
 * Lista de servicii — sursă unică pentru grid-ul de pe homepage (Faza 1),
 * pagina index `/servicii` și paginile `/servicii/[slug]` (Faza 2).
 *
 * Acestea sunt landing pages pentru SEO local — conținutul e tratat serios.
 * Lista și ordinea sunt cele confirmate de proprietar (2026-06-18):
 * Mecanică · Tinichigerie & vopsitorie · Service roți · Geometrie roți ·
 * Încărcare instalație de climatizare · Spălătorie.
 * Prețurile NU se afișează pe site — se comunică după diagnoză.
 */

export type ServiceIconKey =
  | "mecanica"
  | "tinichigerie"
  | "roti"
  | "geometrie"
  | "clima"
  | "spalatorie";

export interface ServiciuFaq {
  intrebare: string;
  raspuns: string;
}

export interface Serviciu {
  slug: string;
  nume: string;
  /** Frază scurtă pentru cardul din grid. */
  sumar: string;
  icon: ServiceIconKey;
  /** Paragraf introductiv pentru pagina dedicată. */
  intro: string;
  durataOrientativa: string;
  include: string[];
  /**
   * Alternativă la lista `include`: un mesaj liber afișat în loc de checklist
   * (ex. la Mecanică, unde lucrarea se stabilește după diagnoză). Când e setat,
   * `include` nu se mai afișează.
   */
  includeMesaj?: string;
  faq: ServiciuFaq[];
  /**
   * Categoria pe gatadedrum.com (`&cat=`) în care aterizează butoanele de programare
   * de pe pagina serviciului. Valoarea trebuie să fie EXACT cea de pe platformă.
   * Lipsă → pagina generală a service-ului.
   */
  programareCat?: string;
}

export const servicii: Serviciu[] = [
  {
    slug: "mecanica",
    programareCat: "mecanica",
    nume: "Mecanică",
    sumar: "Revizii, frâne, distribuție, ambreiaj, suspensie și diagnoză — toată mecanica, într-un loc.",
    icon: "mecanica",
    intro:
      "De la revizia periodică la reparații complexe de motor, acoperim toată zona " +
      "de mecanică. Pornim întotdeauna de la o diagnoză corectă, îți explicăm exact ce " +
      "e de făcut și îți dăm un deviz clar înainte de orice intervenție.",
    durataOrientativa: "în funcție de lucrare", // TODO
    include: [],
    includeMesaj:
      "Mecanica acoperă o gamă largă de lucrări — de la revizii, frâne și distribuție " +
      "la ambreiaj, suspensie și reparații de motor. Fiindcă fiecare problemă e diferită, " +
      "cel mai bine te programezi pentru o diagnoză sau ne suni să discuți direct cu un " +
      "coleg din service. Îți spunem exact ce e de făcut și primești un deviz clar înainte " +
      "de orice intervenție.",
    faq: [
      {
        intrebare: "Faceți diagnoză înainte de reparație?",
        raspuns:
          "Da. Cu tester profesional citim erorile și testăm senzorii, ca să știm exact " +
          "ce e de reparat. Primești un plan clar și prioritizat, fără surprize.",
      },
      {
        intrebare: "Îmi pierd garanția dacă fac mecanica la voi?",
        raspuns:
          "Nu. Fiind service autorizat RAR și folosind piese conforme, garanția de la " +
          "producător se păstrează, conform legislației în vigoare.",
      },
    ],
  },
  {
    slug: "tinichigerie-vopsitorie",
    programareCat: "tinichigerie-vopsitorie",
    nume: "Tinichigerie & vopsitorie",
    sumar: "Îndreptare, pregătire și vopsire în cabină, cu potrivire de culoare.",
    icon: "tinichigerie",
    intro:
      "De la o zgârietură la o reparație după accident, readucem caroseria la forma " +
      "din fabrică. Vopsim în cabină, cu potrivire computerizată a culorii.",
    durataOrientativa: "1–3 zile", // TODO
    include: [
      "Îndreptare tinichigerie și înlocuire elemente",
      "Pregătire suprafață și grunduire",
      "Potrivire computerizată a culorii",
      "Vopsire în cabină cu uscare controlată",
      "Polish final și verificare",
    ],
    faq: [
      {
        intrebare: "Lucrați cu asigurarea (RCA)?",
        raspuns:
          "Da, preluăm dosarul de daună și colaborăm cu asigurătorul. Vezi pagina " +
          "Constatare daune pentru detalii despre tot procesul.",
      },
      {
        intrebare: "Se va vedea diferența de culoare?",
        raspuns:
          "Nu. Folosim potrivire computerizată și tehnica de „pierdere în câmp”, " +
          "astfel încât tranziția să fie invizibilă.",
      },
    ],
  },
  {
    slug: "service-roti",
    programareCat: "service-roti",
    nume: "Service roți",
    sumar: "Montaj, echilibrare, reparații pană și depozitare sezonieră a anvelopelor.",
    icon: "roti",
    intro:
      "Schimbi sezonul sau ai prins o pană? Montăm, echilibrăm și reparăm anvelope " +
      "rapid, cu echipamente moderne care nu-ți zgârie jantele.",
    durataOrientativa: "30–60 min", // TODO
    include: [
      "Montaj și demontaj anvelope (inclusiv jante de aliaj)",
      "Echilibrare electronică pe stand",
      "Reparații pană (pene, plombe)",
      "Verificare presiune și valve",
      "Depozitare sezonieră a setului (opțional)",
    ],
    faq: [
      {
        intrebare: "Faceți și depozitarea anvelopelor?",
        raspuns:
          "Da, oferim depozitare sezonieră în condiții corecte, ca să nu-ți ocupe " +
          "loc acasă. Sună-ne pentru disponibilitate.",
      },
      {
        intrebare: "Orice pană se poate repara?",
        raspuns:
          "Penele pe banda de rulare, da. Cele pe flanc sau prea mari nu se repară " +
          "în siguranță — îți spunem sincer când e cazul să înlocuiești.",
      },
    ],
  },
  {
    slug: "geometrie-roti",
    programareCat: "geometrie-roti",
    nume: "Geometrie roți",
    sumar: "Reglaj unghiuri pe stand 3D pentru uzură uniformă și ținută corectă.",
    icon: "geometrie",
    intro:
      "Dacă mașina „trage” într-o parte sau anvelopele se uzează neuniform, geometria " +
      "e de vină. O reglăm pe stand 3D, pentru o ținută de drum sigură și anvelope " +
      "care țin mai mult.",
    durataOrientativa: "45–60 min", // TODO
    include: [
      "Măsurare unghiuri pe stand 3D (față și spate)",
      "Reglaj convergență și unghiuri (cât permite construcția)",
      "Verificare elemente de direcție și suspensie",
      "Raport înainte/după cu valori",
      "Recomandări dacă sunt necesare piese",
    ],
    faq: [
      {
        intrebare: "Când am nevoie de geometrie?",
        raspuns:
          "După schimbarea anvelopelor, a elementelor de suspensie/direcție, sau " +
          "dacă volanul stă strâmb și mașina trage lateral.",
      },
      {
        intrebare: "Cât de des se face?",
        raspuns:
          "Orientativ o dată pe an sau la fiecare schimbare de set de anvelope. " +
          "Prelungește vizibil durata de viață a cauciucurilor.",
      },
    ],
  },
  {
    slug: "incarcare-climatizare",
    programareCat: "climatizare",
    nume: "Încărcare instalație de climatizare",
    sumar: "Verificare etanșeitate, încărcare freon și igienizarea sistemului de climatizare.",
    icon: "clima",
    intro:
      "Aer condiționat slab sau cu miros? Verificăm etanșeitatea, completăm freonul " +
      "și igienizăm sistemul, ca să ai aer rece și curat în orice vară.",
    durataOrientativa: "45–60 min", // TODO
    include: [
      "Verificare presiuni și test de etanșeitate",
      "Vidare și încărcare freon (R134a / R1234yf)",
      "Înlocuire filtru de polen (opțional)",
      "Igienizare și dezinfecție sistem",
      "Test temperatură la guri",
    ],
    faq: [
      {
        intrebare: "Cât de des încarc clima?",
        raspuns:
          "Orientativ la 1–2 ani. Sistemul pierde natural o cantitate mică de freon " +
          "în timp, chiar dacă nu există defecte.",
      },
      {
        intrebare: "De ce miroase urât aerul condiționat?",
        raspuns:
          "De obicei din cauza bacteriilor de pe evaporator și a filtrului de polen " +
          "îmbâcsit. Igienizarea rezolvă problema.",
      },
    ],
  },
  {
    slug: "spalatorie",
    nume: "Spălătorie",
    sumar: "Spălare exterioară și interioară, curățare detaliată și finisaje de protecție.",
    icon: "spalatorie",
    intro:
      "Lăsăm mașina curată lună, pe dinăuntru și pe dinafară. De la spălarea rapidă " +
      "la curățarea detaliată a interiorului, avem grijă de fiecare detaliu.",
    durataOrientativa: "20–60 min", // TODO
    include: [
      "Spălare exterioară și curățare jante",
      "Aspirare și curățare interior",
      "Curățare geamuri și plastice",
      "Tratamente de protecție (opțional)",
      "Finisare și uscare",
    ],
    faq: [
      {
        intrebare: "Pot lăsa mașina la spălat în timpul unei reparații?",
        raspuns:
          "Da. Dacă lași mașina la noi pentru o lucrare de service, o poți primi " +
          "spălată — întreabă-ne când o aduci.",
      },
      {
        intrebare: "Faceți și curățare detaliată a interiorului?",
        raspuns:
          "Da, de la aspirare și curățarea tapițeriei la igienizare completă.",
      },
    ],
  },
];

export function getServiciu(slug: string): Serviciu | undefined {
  return servicii.find((s) => s.slug === slug);
}
