/**
 * Articole de blog — structură + 2 articole seed SEO.
 * Corpul e structurat în blocuri ca să fie randat consistent și folosit ulterior
 * pentru JSON-LD (Faza 5). TODO: proprietarul revizuiește/extinde conținutul.
 */

export type Bloc =
  | { tip: "p"; text: string }
  | { tip: "h2"; text: string }
  | { tip: "ul"; items: string[] };

export interface Articol {
  slug: string;
  titlu: string;
  descriere: string;
  /** ISO (YYYY-MM-DD) — pentru afișare și JSON-LD. */
  data: string;
  autor: string;
  minuteCitire: number;
  corp: Bloc[];
}

export const articole: Articol[] = [
  {
    slug: "cat-costa-o-revizie-completa-in-2026",
    titlu: "Cât costă o revizie completă în 2026",
    descriere:
      "Ce intră într-o revizie completă, de ce variază prețul și cum eviți costurile " +
      "ascunse. Ghid practic pentru șoferii din România.",
    data: "2026-01-15",
    autor: "Service Auto Grigorescu",
    minuteCitire: 5,
    corp: [
      {
        tip: "p",
        text:
          "Revizia completă e cea mai bună investiție pe care o faci în mașina ta: " +
          "costă puțin acum și te scutește de reparații scumpe mai târziu. Dar cât " +
          "costă, de fapt, în 2026? Depinde de câțiva factori pe care îi explicăm mai jos.",
      },
      { tip: "h2", text: "Ce include o revizie completă" },
      {
        tip: "p",
        text:
          "O revizie corectă nu înseamnă doar schimbul de ulei. Iată ce verificăm și " +
          "înlocuim de regulă:",
      },
      {
        tip: "ul",
        items: [
          "Ulei motor și filtru de ulei",
          "Filtre de aer, polen și combustibil (după caz)",
          "Nivelul și starea lichidelor (frână, antigel, servodirecție)",
          "Sistemul de frânare, curele, suspensie și anvelope",
          "Resetarea indicatorului de service",
        ],
      },
      { tip: "h2", text: "De ce variază prețul" },
      {
        tip: "p",
        text:
          "Prețul unei revizii depinde de marca și modelul mașinii, de tipul de ulei " +
          "recomandat (mineral vs. sintetic), de capacitatea motorului și de filtrele " +
          "necesare. O mașină premium cu ulei sintetic special va costa mai mult decât " +
          "una de oraș cu motor mic.",
      },
      {
        tip: "p",
        text:
          "La noi, prețul manoperei pentru o revizie completă ți-l comunicăm transparent " +
          "după diagnoză, iar la el se adaugă piesele și consumabilele. Îți dăm întotdeauna " +
          "un deviz clar înainte să începem.",
      },
      { tip: "h2", text: "Cum eviți costurile ascunse" },
      {
        tip: "p",
        text:
          "Cere mereu un deviz scris înainte de lucrare și întreabă ce e inclus. Un " +
          "service serios îți arată piesele uzate și nu îți vinde lucruri de care nu ai " +
          "nevoie. Programează-te online și vino cu mașina pentru o evaluare corectă.",
      },
    ],
  },
  {
    slug: "cand-trebuie-schimbat-kitul-de-distributie",
    titlu: "Când trebuie schimbat kitul de distribuție",
    descriere:
      "Intervalul de schimb, semnele de uzură și de ce o curea ruptă îți poate " +
      "distruge motorul. Tot ce trebuie să știi despre distribuție.",
    data: "2026-02-10",
    autor: "Service Auto Grigorescu",
    minuteCitire: 4,
    corp: [
      {
        tip: "p",
        text:
          "Kitul de distribuție e una dintre piesele pe care nu vrei să le ignori. " +
          "O curea ruptă în mers poate distruge motorul, iar reparația costă de zeci " +
          "de ori mai mult decât schimbul preventiv.",
      },
      { tip: "h2", text: "La câți kilometri se schimbă" },
      {
        tip: "p",
        text:
          "Intervalul tipic este între 60.000 și 120.000 km sau 5–7 ani, în funcție de " +
          "producător. Verifică întotdeauna recomandarea exactă pentru motorul tău — " +
          "noi o confirmăm pe loc, după seria de șasiu.",
      },
      { tip: "h2", text: "Semne că trebuie schimbat" },
      {
        tip: "ul",
        items: [
          "Zgomot de tip „țăcănit” sau scârțâit dinspre zona curelei",
          "Vibrații neobișnuite ale motorului",
          "Pornire greoaie sau funcționare neregulată",
          "Scurgeri de ulei în zona capacului de distribuție",
        ],
      },
      {
        tip: "p",
        text:
          "Atenție: la multe motoare nu există semne clare înainte de rupere. De aceea " +
          "schimbul se face preventiv, la interval, nu „când se aude ceva”.",
      },
      { tip: "h2", text: "De ce se schimbă și pompa de apă" },
      {
        tip: "p",
        text:
          "Pompa de apă e de obicei antrenată de aceeași curea, iar manopera de înlocuire " +
          "este comună. Schimbată în același set, economisești manoperă și eviti o a doua " +
          "intervenție peste câteva luni.",
      },
      {
        tip: "p",
        text:
          "Nu ești sigur dacă a venit momentul? Programează o verificare — îți spunem " +
          "cinstit dacă mai poți aștepta sau nu.",
      },
    ],
  },
];

export function getArticol(slug: string): Articol | undefined {
  return articole.find((a) => a.slug === slug);
}
