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
    slug: "tot-ce-trebuie-sa-stii-despre-itp",
    titlu: "Tot ce trebuie să știi despre ITP",
    descriere:
      "Valabilitate, ce se verifică, actele necesare și cum treci ITP-ul din prima. " +
      "Ghid practic pentru șoferii din România.",
    data: "2026-07-01",
    autor: "Service Auto Grigorescu",
    minuteCitire: 4,
    corp: [
      {
        tip: "p",
        text:
          "ITP-ul e obligatoriu pentru orice mașină care circulă pe drumurile publice. " +
          "Fără el valabil, nu ai voie să conduci, iar sancțiunile sunt mari.",
      },
      { tip: "h2", text: "Cât e valabil" },
      {
        tip: "ul",
        items: [
          "Mașini noi — primul ITP la 3 ani",
          "Autoturisme între 3 și 12 ani — la 2 ani",
          "Peste 12 ani — anual",
          "Taxi și transport persoane — la 6 luni",
        ],
      },
      { tip: "h2", text: "Ce se verifică" },
      {
        tip: "ul",
        items: [
          "Frânele și direcția",
          "Sistemul de iluminare",
          "Emisiile",
          "Anvelopele și parbrizul",
          "Caroseria",
          "Trusa medicală și stingătorul",
        ],
      },
      { tip: "h2", text: "Acte necesare" },
      {
        tip: "ul",
        items: [
          "Certificatul de înmatriculare (talonul)",
          "Cartea de identitate a vehiculului (CIV)",
          "Actul de identitate al proprietarului",
        ],
      },
      {
        tip: "p",
        text: "Toate documentele trebuie prezentate în original.",
      },
      { tip: "h2", text: "Cum treci din prima" },
      {
        tip: "p",
        text:
          "Cele mai frecvente respingeri vin de la frâne, direcție, lumini arse și " +
          "anvelope uzate. Verifică înainte toate luminile, anvelopele și parbrizul " +
          "(fisurile mari sunt motiv de respingere). O verificare pre-ITP la service " +
          "îți semnalează din timp orice problemă.",
      },
      {
        tip: "p",
        text:
          "Vrei să treci ITP-ul fără emoții? Programează o verificare pre-ITP la noi.",
      },
      {
        tip: "p",
        text:
          "Informațiile au caracter general, iar reglementările ITP se pot modifica. " +
          "Pentru cazuri specifice verifică sursele oficiale (RAR) sau întreabă-ne direct.",
      },
    ],
  },
  {
    slug: "aerul-conditionat-nu-mai-raceste-freon",
    titlu: "Aerul condiționat nu mai răcește? Ce știi despre freon",
    descriere:
      "De ce scade freonul, semnele că AC-ul are o scurgere și cum eviți defectarea " +
      "compresorului. Pe scurt despre climatizarea mașinii.",
    data: "2026-06-20",
    autor: "Service Auto Grigorescu",
    minuteCitire: 4,
    corp: [
      { tip: "h2", text: "Freonul nu se consumă normal" },
      {
        tip: "p",
        text:
          "Circulă într-un circuit închis și ar trebui să reziste ani de zile. Dacă " +
          "nivelul scade, aproape sigur există o scurgere — de aceea o simplă completare " +
          "fără verificarea cauzei e doar o soluție temporară.",
      },
      { tip: "h2", text: "Semne că are nevoie de verificare" },
      {
        tip: "ul",
        items: [
          "Aerul nu mai răcește ca înainte",
          "Suflă puternic, dar aer cald",
          "Zgomote din zona motorului la pornirea AC-ului",
          "Miros neplăcut din ventilație",
          "Pete uleioase lângă compresor",
        ],
      },
      { tip: "h2", text: "Nu amâna" },
      {
        tip: "p",
        text:
          "Cu freon insuficient, compresorul lucrează fără ungere adecvată și se poate " +
          "defecta — o reparație mult mai scumpă decât o verificare la timp.",
      },
      { tip: "h2", text: "Întreținere" },
      {
        tip: "p",
        text:
          "Pornește AC-ul periodic, chiar și iarna câteva minute, și evită temperaturi " +
          "extrem de scăzute față de cea de afară. Încărcarea necesită echipament " +
          "specializat, deci nu e o operațiune de făcut acasă.",
      },
      {
        tip: "p",
        text:
          "AC-ul nu mai răcește cum trebuie? Programează o diagnoză a climatizării.",
      },
    ],
  },
  {
    slug: "cand-trebuie-schimbate-anvelopele",
    titlu: "Când trebuie schimbate anvelopele?",
    descriere:
      "Adâncimea profilului, vârsta cauciucului și martorii de uzură — când și de ce " +
      "să schimbi anvelopele pentru o frânare sigură.",
    data: "2026-06-05",
    autor: "Service Auto Grigorescu",
    minuteCitire: 4,
    corp: [
      {
        tip: "p",
        text:
          "Anvelopele sunt singurul contact dintre mașină și șosea, așa că starea lor " +
          "influențează direct frânarea și siguranța.",
      },
      { tip: "h2", text: "Adâncimea profilului" },
      {
        tip: "p",
        text:
          "Legea impune minim 1,6 mm, dar acesta e un prag de urgență, nu de siguranță. " +
          "Specialiștii recomandă înlocuirea de la 3 mm (vară) și 4 mm (iarnă), pentru că " +
          "o anvelopă uzată nu mai evacuează apa și mărește distanța de frânare pe " +
          "carosabil umed.",
      },
      { tip: "h2", text: "Verifică singur" },
      {
        tip: "p",
        text:
          "Fiecare anvelopă are martori de uzură turnați în canale — când banda ajunge la " +
          "nivelul lor, trebuie schimbată. Verifică și flancurile pentru fisuri sau " +
          "umflături.",
      },
      { tip: "h2", text: "Vârsta contează" },
      {
        tip: "p",
        text:
          "Cauciucul îmbătrânește chiar dacă nu e folosit. După 5-6 ani, înlocuirea e " +
          "recomandată indiferent de profil. Data fabricației e în codul DOT de pe flanc " +
          "(ex. 2419 = săptămâna 24 din 2019).",
      },
      { tip: "h2", text: "Semne de service" },
      {
        tip: "p",
        text:
          "Uzură inegală, vibrații în volan sau pierderi de presiune indică o problemă de " +
          "geometrie, presiune sau suspensii. Verifică presiunea lunar și schimbă " +
          "anvelopele în pereche, pe aceeași osie.",
      },
      {
        tip: "p",
        text: "Vrei o verificare a anvelopelor? Treci pe la noi.",
      },
    ],
  },
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
