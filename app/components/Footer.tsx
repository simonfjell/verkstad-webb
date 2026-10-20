import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import Text from "./Text";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/brand/logo-white.png" alt={site.name} width={640} height={207} className="h-12 w-auto" />
          <p className="mt-5 text-sm leading-relaxed">
            Verkstad för släp och trailers i Jönköping. En del av{" "}
            <a href={site.parent.url} className="font-semibold text-white underline-offset-4 hover:underline">
              Rosenlunds Åkeri
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Text>{site.address.street}</Text>
              <br />
              <Text>{site.address.zip}</Text> {site.address.city}
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                <Text>{site.phone}</Text>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
          <h2 className="mt-6 text-lg font-bold text-white">Öppettider</h2>
          <ul className="mt-3 space-y-1 text-sm">
            {site.hours.map((h) => (
              <li key={h.days} className="flex max-w-60 justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-white">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Tjänster</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/tjanster#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-white">Företaget</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/bokningsforfragan" className="hover:text-white">
                Boka verkstadstid
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:justify-between sm:px-6">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href={site.parent.url} className="hover:text-white">
            Rosenlunds Åkeri · rosenlundsakeri.se
          </a>
        </div>
      </div>
    </footer>
  );
}
