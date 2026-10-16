// All text och kontaktinfo för sajten samlad på ett ställe.
// Värden med "TODO" är platshållare som ska bytas mot riktiga uppgifter innan lansering.

export const site = {
  name: "Rosenlunds Verkstads AB",
  shortName: "Rosenlunds Verkstad",
  tagline: "Service och reparation av släp och trailers i Jönköping",
  url: "https://verkstad-webb.vercel.app", // TODO: byt till riktig domän

  phone: "036-XX XX XX", // TODO
  phoneHref: "tel:+4636000000", // TODO
  email: "info@rosenlundsverkstad.se", // TODO: bekräfta adress
  address: {
    street: "Adressvägen 12", // TODO
    zip: "554 54", // TODO
    city: "Jönköping",
  },
  hours: [
    { days: "Måndag–fredag", time: "07:00–16:00" }, // TODO: bekräfta
    { days: "Lördag–söndag", time: "Stängt" },
  ],
  mapQuery: "Rosenlunds Åkeri, Lampvägen 2, Jönköping", // TODO: byt till verkstadens adress

  parent: {
    name: "Rosenlunds Åkeri AB",
    url: "https://rosenlundsakeri.se/",
  },
};

export const placeholders = new Set([
  site.phone,
  site.address.street,
  site.address.zip,
]);

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  points: string[];
  icon: "service" | "brake" | "electric" | "axle" | "weld" | "inspect";
};

// TODO: gå igenom och justera så det stämmer med vad verkstaden faktiskt gör.
export const services: Service[] = [
  {
    slug: "service",
    title: "Service & underhåll",
    short: "Planerad service enligt tillverkarens intervall, så att släpet håller länge och går igenom besiktningen.",
    points: ["Serviceprotokoll enligt tillverkare", "Smörjning och justering", "Kontroll av slitdelar"],
    icon: "service",
  },
  {
    slug: "bromsar",
    title: "Bromsar & EBS",
    short: "Felsökning och reparation av bromssystem, från belägg och skivor till EBS och luftsystem.",
    points: ["Diagnos av EBS/ABS", "Byte av skivor, belägg och trummor", "Täthetskontroll av luftsystem"],
    icon: "brake",
  },
  {
    slug: "el",
    title: "El & belysning",
    short: "Felsökning av elsystem, kablage och belysning så att allt fungerar och syns på vägen.",
    points: ["Felsökning av kablage", "Lampor och markeringsljus", "Kontakter och anslutningar"],
    icon: "electric",
  },
  {
    slug: "hjul-axlar",
    title: "Hjul, axlar & fjädring",
    short: "Hjullager, axlar och luftfjädring, åtgärdat innan det blir ett stopp på vägen.",
    points: ["Hjullager och navreparationer", "Luftfjädring och nivåreglering", "Axel- och hjulinställning"],
    icon: "axle",
  },
  {
    slug: "skador",
    title: "Skador & svets",
    short: "Reparation av skador på chassi, kaross, dörrar och påbyggnad.",
    points: ["Svets- och plåtarbeten", "Dörrar, gångjärn och lås", "Golv och sidoväggar"],
    icon: "weld",
  },
  {
    slug: "besiktning",
    title: "Besiktningsförberedelse",
    short: "Vi går igenom släpet före besiktning och åtgärdar eventuella brister efteråt.",
    points: ["Genomgång före besiktning", "Åtgärd av anmärkningar", "Efterkontroll"],
    icon: "inspect",
  },
];
