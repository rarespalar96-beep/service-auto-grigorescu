/**
 * Conținut pentru pagina /despre.
 * Povestea/dotările/autorizațiile sunt DRAFT editabil. Cifrele și echipa sunt date
 * individuale → marcate `TBD` și afișate ca chip „DE COMPLETAT". TODO: proprietarul.
 */

import { TBD } from "./_placeholder";

export interface MembruEchipa {
  nume: string;
  rol: string;
}

export const despre = {
  poveste: [
    "Service Auto Grigorescu a fost, încă de la început, despre oameni profesioniști, " +
      "echipamente de calitate și standarde ridicate. Nu am crescut din improvizație, ci " +
      "din lucru făcut corect — fiindcă mașina fiecărui client o tratăm ca pe a noastră.",
    "Suntem service autorizat RAR și lucrăm transparent: punem diagnoza corectă înaintea " +
      "facturii mari, îți arătăm piesele uzate, îți explicăm opțiunile și nu facem nimic " +
      "fără acordul tău.",
  ],

  /** Cifre-cheie (banda de statistici). Valori reale de la proprietar. TODO. */
  statistici: [
    { valoare: "1000+", eticheta: "mașini reparate/an" },
    { valoare: "1–12 luni", eticheta: "garanție lucrări" },
  ],

  /** Dotări / echipamente. TODO. */
  dotari: [
    "Tester de diagnoză multimarcă",
    "Stand geometrie 3D",
    "Cabină de vopsitorie cu uscare controlată",
    "Aparat de echilibrare și montaj anvelope",
    "Stand de testare a frânelor",
    "Stație de încărcare climă (R134a și R1234yf)",
  ], // TODO

  /** Autorizații și acreditări. */
  autorizatii: [
    "Service auto autorizat RAR",
  ],

  /** Echipa — nume + roluri reale de la proprietar. TODO. */
  echipa: [
    { nume: TBD, rol: TBD },
    { nume: TBD, rol: TBD },
    { nume: TBD, rol: TBD },
    { nume: TBD, rol: TBD },
  ] as MembruEchipa[],
};
