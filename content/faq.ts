/**
 * FAQ scurt pentru homepage (4–6 întrebări). Una explică programarea pe platforma
 * externă, cu link. Folosit și pentru JSON-LD `FAQPage` în Faza 5.
 * TODO: proprietarul ajustează răspunsurile.
 */

export interface FaqItem {
  intrebare: string;
  raspuns: string;
  /** Dacă e setat, răspunsul devine un CTA de programare (gatadedrum.com). */
  esteProgramare?: boolean;
}

export const faqHome: FaqItem[] = [
  {
    intrebare: "Cum mă programez?",
    raspuns:
      "Programarea se face online, în câteva secunde, pe platforma noastră de " +
      "programări. Alegi serviciul și intervalul orar care îți convine.",
    esteProgramare: true,
  },
  {
    intrebare: "Sunteți autorizați RAR?",
    raspuns:
      "Da. Suntem un service auto autorizat RAR, iar toate lucrările sunt efectuate " +
      "conform normelor în vigoare, cu factură și garanție.",
  },
  {
    intrebare: "Cât durează o revizie?",
    raspuns:
      "O revizie completă durează în general între 60 și 90 de minute. Îți comunicăm durata " +
      "exactă după diagnoză, în funcție de starea mașinii.",
  },
  {
    intrebare: "Oferiți garanție la lucrări?",
    raspuns:
      "Da, oferim garanție atât la manoperă, cât și la piesele montate de noi. " +
      "Detaliile de garanție le primești pe factură.",
  },
  {
    intrebare: "Ce mărci deserviți?",
    raspuns:
      "Lucrăm pe majoritatea mărcilor europene și asiatice. Dacă ai o nelămurire " +
      "legată de mașina ta, sună-ne și îți spunem dacă o putem prelua.",
  },
];
