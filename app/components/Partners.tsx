import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/site";

export default function Partners({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="bg-brand-deep">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/60">Servicepartner</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Godkänd verkstad för ledande trailermärken</h2>
          </div>
          {showLink && (
            <Link href="/servicepartner" className="font-semibold text-white underline-offset-4 hover:underline">
              Mer om våra partners →
            </Link>
          )}
        </div>
        <ul className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
          {partners.map((p) => (
            <li
              key={p.name}
              className="flex h-28 items-center justify-center rounded-lg border border-white/10 bg-white/5 p-5 sm:h-36"
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="max-h-full w-auto max-w-[70%] object-contain opacity-90"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
