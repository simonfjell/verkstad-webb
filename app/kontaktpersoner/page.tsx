import type { Metadata } from "next";
import Image from "next/image";
import { contacts, site } from "@/lib/site";
import ContactBand from "../components/ContactBand";
import PageTop from "../components/PageTop";

export const metadata: Metadata = {
  title: "Kontaktpersoner",
  description: "Kontaktpersoner på Rosenlunds Verkstad i Jönköping.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Kontaktpersoner() {
  return (
    <>
      <PageTop
        crumb="Kontaktpersoner"
        eyebrow="Kontaktpersoner"
        title="Vem ska du prata med?"
        text="Här hittar du direktkontakt till oss på verkstaden."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((c, i) => {
              const ph = c.placeholder ? "ph" : "";
              return (
                <li key={`${c.name}-${i}`} className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
                  <div className="relative aspect-[4/5] bg-surface">
                    {c.photo ? (
                      <Image src={c.photo} alt={c.placeholder ? "Porträtt" : c.name} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="font-display text-5xl font-semibold text-line-strong">{initials(c.name)}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-ink">
                      <span className={ph}>{c.name}</span>
                    </h2>
                    <p className="mt-1 text-muted">
                      <span className={ph}>{c.role}</span>
                    </p>
                    <div className="mt-4 space-y-1 border-t border-line pt-4">
                      {c.phone && (
                        <a href={c.phoneHref ?? "#"} className="block font-semibold text-brand hover:underline">
                          <span className={ph}>{c.phone}</span>
                        </a>
                      )}
                      {c.email && (
                        <a href={`mailto:${c.email}`} className="block break-all text-brand hover:underline">
                          <span className={ph}>{c.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-12 max-w-2xl text-lg text-muted">
            Vet du inte vem du ska prata med? Ring verkstaden på{" "}
            <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
              {site.phone}
            </a>{" "}
            eller mejla{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
