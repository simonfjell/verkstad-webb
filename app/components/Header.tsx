"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaPhone, FaXmark } from "react-icons/fa6";
import { nav, site } from "@/lib/site";
import Text from "./Text";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={640}
            height={207}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-[15px] font-semibold transition-colors ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:ml-2 lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-[15px] font-semibold text-ink hover:text-brand">
            <FaPhone className="text-brand" aria-hidden />
            <Text>{site.phone}</Text>
          </a>
          <Link
            href="/bokningsforfragan"
            className="rounded-md bg-brand px-4 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Boka verkstadstid
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto rounded-md p-2 text-2xl text-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {open && (
        <nav id="mobilmeny" className="border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden" aria-label="Mobilmeny">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 text-lg font-semibold text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <Link
              href="/bokningsforfragan"
              onClick={() => setOpen(false)}
              className="rounded-md bg-brand px-4 py-3 text-center font-semibold text-white"
            >
              Boka verkstadstid
            </Link>
            <a href={site.phoneHref} className="rounded-md border border-brand px-4 py-3 text-center font-semibold text-brand">
              Ring <Text>{site.phone}</Text>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
