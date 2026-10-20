import type { Metadata } from "next";
import { TbCheck } from "react-icons/tb";
import { services, vehicles } from "@/lib/site";
import ContactBand from "../components/ContactBand";
import PageTop from "../components/PageTop";
import ServiceIcon from "../components/ServiceIcon";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Verkstad för släp, trailers, link och dolly i Jönköping: walking floor, bromsar och EBS, service och besiktning, lift, skador, skåp och svets, däckbyte samt tvätthall för tung trafik.",
};

export default function Tjanster() {
  return (
    <>
      <PageTop
        crumb="Tjänster"
        eyebrow="Vad vi gör"
        title="Verkstadstjänster för släp och trailers"
        text="Vi gör i stort sett allt man kan göra på ett släp, en trailer, link eller dolly. Här är det vanligaste."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-semibold text-ink">Vi jobbar med:</span>
            {vehicles.map((v) => (
              <span key={v} className="rounded border border-line bg-surface px-3 py-1 text-sm text-ink">
                {v}
              </span>
            ))}
          </div>

          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.slug}
                id={s.slug}
                className={`scroll-mt-28 rounded-xl border p-8 shadow-card ${s.wide ? "md:col-span-2" : ""} ${
                  s.featured ? "border-brand bg-brand text-white" : "border-line bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex size-12 items-center justify-center rounded-lg text-2xl ${
                      s.featured ? "bg-white/15 text-white" : "bg-brand-light text-brand"
                    }`}
                  >
                    <ServiceIcon name={s.icon} />
                  </span>
                  {s.featured && (
                    <span className="rounded bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                      Vår specialitet
                    </span>
                  )}
                </div>
                <h2 className={`mt-5 text-3xl font-bold ${s.featured ? "text-white" : "text-ink"}`}>{s.title}</h2>
                <p className={`mt-3 text-lg leading-relaxed ${s.featured ? "text-white/85" : "text-muted"}`}>{s.short}</p>
                <ul className="mt-5 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <TbCheck className={`mt-1 shrink-0 ${s.featured ? "text-accent-light" : "text-brand"}`} aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <p className="mt-12 max-w-2xl text-lg text-muted">
            Hittar du inte det du letar efter? Ring eller skicka en förfrågan. Det mesta på ett släp eller en trailer kan vi
            lösa.
          </p>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
