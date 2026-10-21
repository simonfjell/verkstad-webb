"use client";

import Link from "next/link";
import { useState } from "react";
import { services, site, vehicles } from "@/lib/site";

// Bygger ett färdigt mejl till verkstaden. TODO: byt till riktig formulärtjänst (t.ex. Resend) vid behov.
export default function BookingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) || "").trim();
    const subject = `Bokningsförfrågan: ${get("regnr") || get("fordon")}`;
    const body = [
      `Namn: ${get("namn")}`,
      `Företag: ${get("foretag")}`,
      `Telefon: ${get("telefon")}`,
      `Mejl: ${get("mejl")}`,
      "",
      `Regnummer: ${get("regnr")}`,
      `Fordon: ${get("fordon")}`,
      `Gäller: ${get("tjanst")}`,
      `Önskad tid: ${get("tid")}`,
      "",
      "Beskrivning:",
      get("beskrivning"),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "mt-1.5 h-11 w-full rounded-md border border-line-strong bg-white px-3.5 text-[15px] text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";
  const label = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="namn" className={label}>
          Namn *
        </label>
        <input id="namn" name="namn" required autoComplete="name" className={input} />
      </div>
      <div>
        <label htmlFor="foretag" className={label}>
          Företag
        </label>
        <input id="foretag" name="foretag" autoComplete="organization" className={input} />
      </div>
      <div>
        <label htmlFor="telefon" className={label}>
          Telefon *
        </label>
        <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={input} />
      </div>
      <div>
        <label htmlFor="mejl" className={label}>
          Mejl
        </label>
        <input id="mejl" name="mejl" type="email" autoComplete="email" className={input} />
      </div>
      <div>
        <label htmlFor="regnr" className={label}>
          Registreringsnummer
        </label>
        <input id="regnr" name="regnr" className={`${input} uppercase`} placeholder="ABC123" />
      </div>
      <div>
        <label htmlFor="fordon" className={label}>
          Fordon
        </label>
        <select id="fordon" name="fordon" className={input} defaultValue="">
          <option value="" disabled>
            Välj fordon
          </option>
          {vehicles.map((v) => (
            <option key={v}>{v}</option>
          ))}
          <option>Annat</option>
        </select>
      </div>
      <div>
        <label htmlFor="tjanst" className={label}>
          Vad gäller det?
        </label>
        <select id="tjanst" name="tjanst" className={input} defaultValue="">
          <option value="" disabled>
            Välj tjänst
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Annat</option>
        </select>
      </div>
      <div>
        <label htmlFor="tid" className={label}>
          Önskad tid
        </label>
        <input id="tid" name="tid" className={input} placeholder="T.ex. vecka 44, gärna förmiddag" />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="beskrivning" className={label}>
          Beskriv felet eller jobbet *
        </label>
        <textarea id="beskrivning" name="beskrivning" required rows={5} className={`${input} h-auto py-2.5`} />
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button type="submit" className="rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-dark">
          Skicka förfrågan
        </button>
        <p className="text-sm text-muted">
          {sent
            ? "Ditt mejlprogram öppnas med förfrågan ifylld. Tryck skicka där."
            : "Förfrågan öppnas som ett färdigt mejl i ditt mejlprogram."}{" "}
          <Link href="/integritet" className="text-brand underline-offset-4 hover:underline">
            Så hanterar vi dina uppgifter
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
