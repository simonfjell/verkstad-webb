import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">404</p>
        <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">Sidan finns inte</h1>
        <p className="mt-4 text-lg text-muted">
          Sidan du letar efter har flyttats eller finns inte längre. Ring oss på{" "}
          <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
            {site.phone}
          </a>{" "}
          om du behöver hjälp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-md bg-brand px-6 py-3.5 font-semibold text-white hover:bg-brand-dark">
            Till startsidan
          </Link>
          <Link
            href="/tjanster"
            className="rounded-md border border-brand px-6 py-3.5 font-semibold text-brand hover:bg-brand-light"
          >
            Se våra tjänster
          </Link>
        </div>
      </div>
    </section>
  );
}
