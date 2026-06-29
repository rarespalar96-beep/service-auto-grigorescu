/** Navigație principală — sursă unică pentru header și footer. */
export interface NavItem {
  label: string;
  href: string;
}

export const navPrincipal: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii" },
  { label: "Constatare daune", href: "/constatare-daune" },
  { label: "ITP", href: "/itp" },
  { label: "Despre", href: "/despre" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const navLegal: NavItem[] = [
  { label: "Politica de confidențialitate", href: "/politica-de-confidentialitate" },
  { label: "Termeni și condiții", href: "/termeni" },
];
