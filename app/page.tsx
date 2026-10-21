import Image from "next/image";
import Link from "next/link";
import { TbCheck } from "react-icons/tb";
import { services, site, vehicles } from "@/lib/site";
import BrandBand from "./components/BrandBand";
import ContactBand from "./components/ContactBand";

const facts = [
  { big: "12", small: "Portar i verkstaden" },
  { big: "Drygt 15", small: "Medarbetare" },
  { big: "20 år", small: "Erfarenhet i verkstaden" },
  { big: "2019", small: "Rosenlunds Verkstad startade" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand">
        <Image
          src="/images/verkstad-topp.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[62%_35%] lg:object-[50%_35%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(7,45,90,0.92)_0%,rgba(7,45,90,0.78)_45%,rgba(10,62,124,0.45)_100%)]" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            {site.name} · {site.address.city}
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[4.25rem]">
            Verkstad för släp och trailers i Jönköping
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            Service och reparation av släp, trailers, link och dolly. Även walking floor.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/bokningsforfragan"
              className="rounded-md bg-white px-6 py-3.5 text-center font-semibold text-brand transition-colors hover:bg-brand-light"
            >
              Boka verkstadstid
            </Link>
            <Link
              href="/tjanster"
              className="rounded-md border border-white/40 px-6 py-3.5 text-center font-semibold text-white transition-colors hover:bg-white/10"
            >
              Se våra tjänster
            </Link>
          </div>
        </div>
      </section>

      {/* Faktaremsa */}
      <section className="bg-brand">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {facts.map((f) => (
            <li key={f.big}>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">{f.big}</p>
              <p className="mt-1 text-white/75">{f.small}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Om oss-intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Om oss</p>
            <h2 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">Komplett verkstad för släp och trailers</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Rosenlunds Verkstad servar och reparerar släp, trailers, link och dolly.
              Allt från bromsar och lift till däckbyte, svets och försäkringsjobb. Vi har också egen tvätthall för tung trafik.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vi vet vad det kostar när ett ekipage står still, så vi lägger stor vikt vid snabb felsökning och tydliga besked. Med ett eget reservdelslager på 250 m² kan vi snabbt utföra jobbet.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vi är drygt 15 medarbetare med 12 portar och 20 års erfarenhet. Sedan 2019 är vi en del av Rosenlunds Åkeri.
            </p>
            <Link href="/om-oss" className="mt-7 inline-block font-semibold text-brand underline-offset-4 hover:underline">
              Läs mer om oss →
            </Link>
          </div>
          <div className="rounded-xl bg-surface p-8 sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-ink">Fordon vi jobbar med</h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {vehicles.map((v) => (
                  <li key={v} className="flex gap-2.5 text-ink">
                    <TbCheck className="mt-1 shrink-0 text-brand" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-6 border-t border-line pt-6 text-lg font-semibold text-ink">
              Vi tar emot fordon från alla åkerier och uthyrningsbolag.
            </p>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Tjänster</p>
              <h2 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">Det här hjälper vi till med</h2>
            </div>
            <Link href="/tjanster" className="font-semibold text-brand underline-offset-4 hover:underline">
              Alla tjänster →
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.filter((s) => !s.wide).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/tjanster#${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line border-t-[3px] border-t-brand bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <h3 className="text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-auto pt-5 font-semibold text-brand">
                    Läs mer <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {services
              .filter((s) => s.wide)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/tjanster#${s.slug}`}
                  className="group flex flex-col gap-4 rounded-xl bg-brand p-7 text-white shadow-card transition-shadow hover:shadow-card-hover sm:p-8"
                >
                  <span className="block font-display text-2xl font-bold">{s.title}</span>
                  <span className="block text-white/80">{s.short}</span>
                  <span className="mt-auto font-semibold">
                    Läs mer <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <BrandBand />
      <ContactBand />
    </>
  );
}
