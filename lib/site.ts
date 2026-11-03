// All text och kontaktinfo för sajten samlad på ett ställe.
// Värden med "TODO" är platshållare som ska bytas mot riktiga uppgifter innan lansering.

export const site = {
  name: "Rosenlunds Verkstad AB",
  shortName: "Rosenlunds Verkstad",
  url: "https://verkstad-webb.vercel.app", // TODO: byt till riktig domän

  phone: "076-000 80 68",
  phoneHref: "tel:+46760008068",
  email: "verkstad@rosenlundsakeri.se",
  address: {
    street: "Lampvägen 6",
    zip: "556 52",
    city: "Jönköping",
  },
  company: {
    legalName: "Rosenlunds Verkstads AB", // registrerat namn – används i företagsuppgifter
    orgNr: "556832-1920",
    vatNr: "SE556832192001",
    iban: "SE10 1200 0000 0129 1012 4088",
    bic: "DABASESX",
    invoiceEmail: "rosenlundsverkstadsab@centsoft.se", // e-faktura
  },
  hours: [
    { days: "Måndag–fredag", time: "07:00–16:00" },
    { days: "Lördag–söndag", time: "Stängt" },
  ],

  parent: {
    name: "Rosenlunds Åkeri AB",
    url: "https://rosenlundsakeri.se/",
  },
};

// Text som ska gulmarkeras som platshållare i förhandsvisningen (tom = allt är riktiga uppgifter)
export const placeholders = new Set<string>([]);

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontaktpersoner", label: "Kontaktpersoner" },
  { href: "/kontakt", label: "Kontakt" },
];

// Fordon vi jobbar med
export const vehicles = ["Släp", "Trailers", "Link", "Dolly", "Walking floor-trailers", "Skåpbilar"];

export type Service = {
  slug: string;
  title: string;
  short: string;
  points: string[];
  wide?: boolean;
};

export const services: Service[] = [
  {
    slug: "walking-floor",
    title: "Walking floor",
    short: "Felsökning, service och reparation av walking floor-trailers.",
    points: ["Hydraulik och drivenhet", "Golvlameller och tätningar", "Felsökning och service"],
  },
  {
    slug: "bromsar",
    title: "Bromsar & EBS",
    short: "Felsökning och reparation av bromssystem, EBS och luftsystem.",
    points: ["Felsökning av EBS", "Skivor, belägg och trummor", "Luftsystem och ventiler"],
  },
  {
    slug: "service",
    title: "Service & besiktning",
    short: "Besiktning och åtgärder på samma ställe. Besiktningsstationen ligger i samma byggnad som verkstaden.",
    points: ["Löpande service", "Genomgång före besiktning", "Åtgärd av anmärkningar direkt på plats"],
  },
  {
    slug: "lift",
    title: "Lift & liftservice",
    short: "Service och reparation av bakgavellyftar och slädlyftar.",
    points: ["Bakgavellyftar", "Slädlyftar", "Felsökning, service och reparation"],
  },
  {
    slug: "skador",
    title: "Skador & påbyggnad",
    short: "Försäkringsjobb och reparationer av påbyggnader, från lättare skåpreparationer till kapell och svets.",
    points: ["Försäkringsjobb", "Lättare skåpreparationer med lim och spackel", "Kapell och presenning", "Svets"],
  },
  {
    slug: "dack",
    title: "Däck & hjul",
    short: "Däckbyte och hjularbeten på släp, trailers, link och dolly.",
    points: ["Däckbyte", "Hjularbeten", "Kontroll av slitage"],
  },
  {
    slug: "reservdelar",
    title: "Reservdelar",
    short: "Eget reservdelslager på 250 m², så att vi snabbt kan utföra jobbet. Vi säljer också delar över disk.",
    points: ["Reservdelslager på 250 m²", "Försäljning över disk"],
    wide: true,
  },
  {
    slug: "tvatthall",
    title: "Tvätthall för tung trafik",
    short: "Egen tvätthall för lastbilar, släp och trailers.",
    points: ["Lastbilar", "Släp och trailers"],
    wide: true,
  },
];

// Märken vi jobbar med (namn som text, inga loggor – se diskussion om varumärken)
export const brands = ["Kraker", "Knapen", "Stas", "Krone", "Schmitz Cargobull", "Denison", "VAK", "JOST", "SAF"];

// Kontaktpersoner. Lämna role tom ("") för att dölja titelraden. photo: sökväg i /public.
export type Contact = {
  name: string;
  role?: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  photo?: string;
  placeholder?: boolean;
};

export const contacts: Contact[] = [
  { name: "Ulf Jonsson", phone: "076-000 80 60", phoneHref: "tel:+46760008060", email: "ulf.jonsson@rosenlundsakeri.se", photo: "/team/person-1.webp" },
  { name: "Johan Svehagen", phone: "076-000 80 61", phoneHref: "tel:+46760008061", email: "johan.svehagen@rosenlundsakeri.se", photo: "/team/person-2.webp" },
  { name: "Simon Fjell", phone: "076-000 80 64", phoneHref: "tel:+46760008064", email: "simon.fjell@rosenlundsakeri.se", photo: "/team/person-3.webp" },
  { name: "Anders Engqvist", role: "Lager", phone: "076-000 80 65", phoneHref: "tel:+46760008065", email: "lager@rosenlundsakeri.se", photo: "/team/person-lager.webp" },
];
