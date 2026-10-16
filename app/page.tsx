import Image from "next/image";
import Link from "next/link";
import { TbCheck } from "react-icons/tb";
import { services, site } from "@/lib/site";
import ContactBand from "./components/ContactBand";
import Partners from "./components/Partners";
import ServiceIcon from "./components/ServiceIcon";

const facts = [
  { big: "Släp & trailers", small: "Det är allt vi gör" },
  { big: "PNO · Krone · Kraker", small: "Servicepartner" },
  { big: "Rosenlunds", small: "Familjeägt sedan 1964" },
  { big: "Jönköping", small: "Mitt i transport-Sverige" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand-deep">
        <Image
          src="/images/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-deep/30" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            {site.name} · {site.address.city}
          </p>
          <h1 className="mt-4 max-w-2xl text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Service och reparation av släp och trailers
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
            Vi håller ditt släp i trafik, med kunnig felsökning, snabba reparationer och service enligt tillverkarens krav.
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
      <section className="border-b border-line bg-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {facts.map((f, i) => (
            <li
              key={f.big}
              className={`py-7 pr-4 ${i % 2 === 1 ? "pl-4 border-l border-line lg:pl-6" : ""} ${
                i === 2 ? "lg:border-l lg:pl-6" : ""
              } ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
            >
              <p className="font-display text-xl font-bold text-brand sm:text-2xl">{f.big}</p>
              <p className="mt-1 text-sm text-muted">{f.small}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Om oss-intro */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Om oss</p>
            <h2 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">En verkstad byggd för tung trafik</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Rosenlunds Verkstad tar hand om släp och trailers åt både åkerier och enskilda ägare. Vi vet vad det kostar
              när ett ekipage står still, så vi lägger stor vikt vid snabb felsökning och tydliga besked.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vi tillhör samma familj som {site.parent.name}, ett av Sveriges största familjeägda åkerier. Det betyder att
              vi kan släpvagnar från vardagen, inte bara från verkstadsgolvet.
            </p>
            <Link href="/om-oss" className="mt-7 inline-block font-semibold text-brand underline-offset-4 hover:underline">
              Läs mer om oss →
            </Link>
          </div>
          <div className="rounded-xl bg-surface p-8 sm:p-10">
            <h3 className="text-2xl font-bold text-ink">Det här kan du räkna med</h3>
            <ul className="mt-6 space-y-4">
              {[
                "Felsökning av erfarna tekniker som kan trailers",
                "Tydligt besked om vad som behöver göras och vad det kostar",
                "Service enligt tillverkarens krav, så att garantin gäller",
                "Originaldelar via våra servicepartners",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-lg text-ink">
                  <TbCheck className="mt-1 shrink-0 text-xl text-brand" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Tjänster</p>
              <h2 className="mt-2 text-4xl font-bold text-ink sm:text-5xl">Allt ditt släp behöver, under ett tak</h2>
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
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-7 transition-shadow hover:shadow-lg hover:shadow-brand/10"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-brand-light text-2xl text-brand">
                    <ServiceIcon name={s.icon} />
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

      <Partners />
      <ContactBand />
    </>
  );
}
