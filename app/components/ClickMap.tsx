"use client";

import Link from "next/link";
import { useState } from "react";

// Google-kartan laddas först när besökaren klickar, så att inga Google-cookies sätts innan dess.
export default function ClickMap({ address }: { address: string }) {
  const [show, setShow] = useState(false);
  const q = encodeURIComponent(address);

  if (show) {
    return (
      <iframe
        title={`Karta: ${address}`}
        src={`https://maps.google.com/maps?q=${q}&z=14&output=embed`}
        className="h-full min-h-80 w-full"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex h-full min-h-80 flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="font-display text-2xl font-bold text-ink">{address}</p>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="rounded-md bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
      >
        Visa karta
      </button>
      <p className="max-w-sm text-sm text-muted">
        Kartan hämtas från Google, som då kan sätta cookies. Läs mer i vår{" "}
        <Link href="/integritet" className="text-brand underline-offset-4 hover:underline">
          integritetspolicy
        </Link>
        .
      </p>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-brand underline-offset-4 hover:underline"
      >
        Öppna i Google Maps →
      </a>
    </div>
  );
}
