import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import PageTop from "../components/PageTop";
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
            <a href={`mailto:${site.email}`} className="rounded-xl border border-line p-6 shadow-card hover:shadow-card-hover">
              <h2 className="text-xl font-bold text-ink">Mejl</h2>
              <p className="mt-1 break-all text-lg text-ink">{site.email}</p>
            </a>
            <div className="rounded-xl border border-line p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">Besöksadress</h2>
              <p className="mt-1 text-lg text-ink">
                <Text>{site.address.street}</Text>
                <br />
                <Text>{site.address.zip}</Text> {site.address.city}
              </p>
            </div>
            <div className="rounded-xl border border-line p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">Öppettider</h2>
              <ul className="mt-1 text-ink">
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
            {/* Kartan visar platshållaradressen tills riktig adress är ifylld i lib/site.ts */}
            <iframe
              title={`Karta: ${addr}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(addr)}&z=14&output=embed`}
              className="h-full min-h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
