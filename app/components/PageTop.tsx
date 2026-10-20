import Image from "next/image";
import Link from "next/link";

// Sidtopp för undersidor, samma upplägg som åkeriets: bild, blå toning, brödsmulor, överrubrik, rubrik.
export default function PageTop({
  crumb,
  eyebrow,
  title,
  text,
}: {
  crumb: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <Image src="/images/hero.webp" alt="" fill priority sizes="100vw" className="-z-10 object-cover object-[70%_center]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(105deg,rgba(7,45,90,0.92)_0%,rgba(7,45,90,0.78)_45%,rgba(10,62,124,0.45)_100%)]" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <nav aria-label="Brödsmulor" className="text-sm text-white/75">
          <Link href="/" className="hover:text-white">
            Hem
          </Link>
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white">{crumb}</span>
        </nav>
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-light">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">{text}</p>}
      </div>
    </section>
  );
}
