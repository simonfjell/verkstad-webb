import Image from "next/image";
import Link from "next/link";
import { TbCheck } from "react-icons/tb";
import { customers, services, site, vehicles } from "@/lib/site";
import ContactBand from "./components/ContactBand";
import ServiceIcon from "./components/ServiceIcon";

const facts = [
  { big: "12", small: "Portar i verkstaden" },
  { big: "13", small: "Medarbetare" },
  { big: "13–20 år", small: "Erfarenhet i verkstaden" },
  { big: "2019", small: "Rosenlunds Verkstad startade" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(7,45,90,0.92)_0%,rgba(7,45,90,0.78)_45%,rgba(10,62,124,0.45)_100%)]" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            {site.name} · {site.address.city}
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[4.25rem]">
            Verkstad för släp och trailers i Jönköping
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            Service och reparation av släp, trailers, link och dolly. Specialister på walking floor.
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
            <h2 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">Vi gör i stort sett allt på en trailer</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Rosenlunds Verkstad servar och reparerar släp, trailers, link och dolly åt åkerier och uthyrningsbolag.
              Allt från bromsar och lift till däckbyte, svets och försäkringsjobb.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vår specialitet är walking floor-trailers. Vi är 13 medarbetare med 12 portar, och många av oss har jobbat
              i verkstaden i 13–20 år. Sedan 2019 är vi en del av Rosenlunds, tillsammans med {site.parent.name}.
            </p>
            <Link href="/om-oss" className="mt-7 inline-block font-semibold text-brand underline-offset-4 hover:underline">
              Läs mer om oss →
            </Link>
          </div>
          <div className="grid gap-6 rounded-xl bg-surface p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-ink">Fordon</h3>
              <ul className="mt-4 space-y-2.5">
                {vehicles.map((v) => (
                  <li key={v} className="flex gap-2.5 text-ink">
                    <TbCheck className="mt-1 shrink-0 text-brand" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink">Kunder</h3>
              <ul className="mt-4 space-y-2.5">
                {customers.map((c) => (
                  <li key={c} className="flex gap-2.5 text-ink">
                    <TbCheck className="mt-1 shrink-0 text-brand" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
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
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/tjanster#${s.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <span className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-lg bg-brand-light text-2xl text-brand">
                      <ServiceIcon name={s.icon} />
                    </span>
                    {s.featured && (
                      <span className="rounded bg-brand px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        Specialitet
                      </span>
                    )}
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.short}</p>
                  <span className="mt-auto pt-5 font-semibold text-brand">
                    Läs mer <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
