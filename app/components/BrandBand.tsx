import { brands } from "@/lib/site";

// Rullande band med märkesnamn. Står still för den som valt bort animationer.
export default function BrandBand() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20" aria-hidden={hidden || undefined}>
      {brands.map((b) => (
        <li key={b} className="whitespace-nowrap font-display text-3xl font-semibold text-muted/70 sm:text-4xl">
          {b}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="border-y border-line bg-white" aria-labelledby="marken">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <h2 id="marken" className="text-3xl font-bold text-ink sm:text-4xl">
          Märken vi jobbar med
        </h2>
        <p className="mt-2 text-muted">Bland annat. Vi tar hand om de flesta släp och trailers.</p>
      </div>
      <div className="marquee mt-8 overflow-hidden pb-14 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
