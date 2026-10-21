import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import PageTop from "../components/PageTop";
import ClickMap from "../components/ClickMap";
import Text from "../components/Text";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakta Rosenlunds Verkstad i Jönköping. Telefon, mejl, adress och öppettider.",
};

export default function Kontakt() {
  const addr = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
  return (
    <>
      <PageTop
        crumb="Kontakt"
        eyebrow="Kontakt"
        title="Kontakta verkstaden"
        text="Ring oss eller skicka en bokningsförfrågan, så återkommer vi med en tid."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <a href={site.phoneHref} className="rounded-xl border border-line p-6 shadow-card hover:shadow-card-hover">
              <h2 className="text-xl font-bold text-ink">Telefon</h2>
              <p className="mt-1 text-lg text-ink">
                <Text>{site.phone}</Text>
              </p>
            </a>
            <div className="rounded-xl border border-line p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">Besöksadress</h2>
              <p className="mt-1 text-lg text-ink">
                <Text>{site.address.street}</Text>
                <br />
                <Text>{site.address.zip}</Text> {site.address.city}
              </p>
            </div>
            <a href={`mailto:${site.email}`} className="rounded-xl border border-line p-6 shadow-card hover:shadow-card-hover sm:col-span-2">
              <h2 className="text-xl font-bold text-ink">Mejl</h2>
              <p className="mt-1 break-words text-lg text-ink">{site.email}</p>
            </a>
            <div className="rounded-xl border border-line p-6 shadow-card sm:col-span-2">
              <h2 className="text-xl font-bold text-ink">Öppettider</h2>
              <ul className="mt-1 max-w-sm text-lg text-ink">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex justify-between gap-3">
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/bokningsforfragan"
              className="rounded-md bg-brand px-6 py-4 text-center font-semibold text-white hover:bg-brand-dark sm:col-span-2"
            >
              Skicka bokningsförfrågan
            </Link>
          </div>

          <div className="min-h-80 overflow-hidden rounded-xl border border-line bg-surface">
            <ClickMap address={addr} />
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Hitta hit</h2>
          <p className="mt-2 text-lg text-muted">
            Så ser verkstaden ut när du kommer till {site.address.street}.
          </p>
          <figure className="mt-8 overflow-hidden rounded-xl shadow-card">
            <Image
              src="/images/verkstad-hela.webp"
              alt={`Rosenlunds Verkstad på ${site.address.street} i ${site.address.city}`}
              width={2576}
              height={620}
              sizes="(min-width: 1184px) 1184px, 100vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
