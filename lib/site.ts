// All text och kontaktinfo för sajten samlad på ett ställe.
// Värden med "TODO" är platshållare som ska bytas mot riktiga uppgifter innan lansering.

export const site = {
  name: "Rosenlunds Verkstads AB",
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
  hours: [
    { days: "Måndag–fredag", time: "07:00–16:00" }, // TODO: bekräfta
    { days: "Lördag–söndag", time: "Stängt" },
  ],

  parent: {
    name: "Rosenlunds Åkeri AB",
    url: "https://rosenlundsakeri.se/",
  },
};

export const placeholders = new Set([site.phone, site.address.street, site.address.zip]);

export const nav = [
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
];

// Fordon vi jobbar med
export const vehicles = ["Släp", "Trailers", "Link", "Dolly", "Walking floor-trailers", "Skåpbilar"];

// Kunder vi jobbar åt
export const customers = ["Rosenlunds Åkeri", "Andra åkerier", "Uthyrningsbolag"];

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
    short: "Löpande service och genomgång inför besiktning. Vi åtgärdar även anmärkningar.",
    points: ["Löpande service", "Genomgång före besiktning", "Åtgärd av anmärkningar"],
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
    slug: "tvatthall",
    title: "Tvätthall för tung trafik",
    short: "Egen tvätthall för lastbilar, släp och trailers.",
    points: ["Lastbilar", "Släp och trailers"],
    wide: true,
  },
];

// Märken vi jobbar med (namn som text, inga loggor – se diskussion om varumärken)
export const brands = ["Kraker", "Knapen", "Stas", "Krone", "Schmitz Cargobull", "Denison", "VAK", "JOST", "SAF"];
