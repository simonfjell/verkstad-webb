import type { Metadata } from "next";
import { TbCheck } from "react-icons/tb";
import { customers, site, vehicles } from "@/lib/site";
import ContactBand from "../components/ContactBand";
import PageTop from "../components/PageTop";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Rosenlunds Verkstad i Jönköping servar släp, trailers, link och dolly åt åkerier och uthyrningsbolag.",
};

export default function OmOss() {
  return (
    <>
      <PageTop
        crumb="Om oss"
        eyebrow="Om oss"
        title="Verkstaden inom Rosenlunds"
        text="Vi servar och reparerar släp och trailers åt åkerier och uthyrningsbolag i Jönköping."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">Vi gör i stort sett allt på en trailer</h2>
            <p>
              Rosenlunds Verkstad tar hand om släp, trailers, link och dolly. Vi jobbar med service, bromsar och EBS, lift
              och liftservice, däckbyte, svets, lättare skåpreparationer och försäkringsjobb.
            </p>
            <p>
              Vår specialitet är walking floor-trailers. Det är fordon som kräver kunskap om både hydraulik och golv, och
              det är något vi jobbar med varje vecka.
            </p>
            <p>
              Vi är en del av Rosenlunds i Jönköping, tillsammans med{" "}
              <a href={site.parent.url} className="font-semibold text-brand underline-offset-4 hover:underline">
                {site.parent.name}
              </a>
              . Vi servar åkeriets egna fordon, men också andra åkerier och uthyrningsbolag.
            </p>
            <h2 className="pt-4 text-3xl font-bold text-ink sm:text-4xl">Ny i namnet, inte i verkstaden</h2>
            <p>
              Rosenlunds Verkstad öppnade 2019, men verkstaden och kunskapen fanns långt innan dess. Många av oss har jobbat
              här i 13–20 år, sedan innan Rosenlunds tog över.
            </p>
            <p>
              I dag är vi omkring 13 medarbetare och har 12 portar. Det betyder att vi kan ta in flera fordon samtidigt och
              hålla nere stilleståndet.
            </p>
            {/* TODO: bilder från verkstaden */}
          </div>

          <aside className="space-y-6">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/20 text-white">
              {[
                ["12", "Portar"],
                ["13", "Medarbetare"],
                ["13–20 år", "Erfarenhet"],
                ["2019", "Rosenlunds Verkstad"],
              ].map(([big, small]) => (
                <div key={small} className="bg-brand p-6">
                  <dt className="sr-only">{small}</dt>
                  <dd className="font-display text-3xl font-bold">{big}</dd>
                  <dd className="mt-1 text-sm text-white/75">{small}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-xl bg-surface p-8">
              <h3 className="text-xl font-bold text-ink">Fordon vi jobbar med</h3>
              <ul className="mt-4 space-y-2.5">
                {vehicles.map((v) => (
                  <li key={v} className="flex gap-2.5 text-ink">
                    <TbCheck className="mt-1 shrink-0 text-brand" aria-hidden />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-surface p-8">
              <h3 className="text-xl font-bold text-ink">Våra kunder</h3>
              <ul className="mt-4 space-y-2.5">
                {customers.map((c) => (
                  <li key={c} className="flex gap-2.5 text-ink">
                    <TbCheck className="mt-1 shrink-0 text-brand" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
