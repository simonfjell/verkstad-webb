import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageTop from "../components/PageTop";
import Text from "../components/Text";
import BookingForm from "./BookingForm";

export const metadata: Metadata = {
  title: "Boka verkstadstid",
  description: "Skicka en bokningsförfrågan till Rosenlunds Verkstad i Jönköping för släp, trailers, link och dolly.",
};

export default function Bokningsforfragan() {
  return (
    <>
      <PageTop
        crumb="Boka verkstadstid"
        eyebrow="Bokningsförfrågan"
        title="Boka verkstadstid"
        text="Fyll i formuläret så återkommer vi med en tid. Brådskande? Ring oss direkt."
      />

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-xl border border-line bg-white p-6 shadow-card sm:p-10">
            <BookingForm />
          </div>
          <aside className="h-fit rounded-xl bg-brand p-8 text-white">
            <h2 className="text-2xl font-bold">Hellre ringa?</h2>
            <a href={site.phoneHref} className="mt-3 block text-2xl font-semibold">
              <Text>{site.phone}</Text>
            </a>
            <ul className="mt-6 space-y-1 text-white/85">
              {site.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-3">
                  <span>{h.days}</span>
                  <span className="text-white">{h.time}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
