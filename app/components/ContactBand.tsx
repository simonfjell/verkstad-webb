import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { site } from "@/lib/site";
import Text from "./Text";

export default function ContactBand({
  title = "Behöver släpet ses över?",
  text = "Ring oss direkt eller skicka en bokningsförfrågan, så återkommer vi med en tid.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/bokningsforfragan"
            className="rounded-md bg-white px-6 py-3.5 text-center font-semibold text-brand transition-colors hover:bg-brand-light"
          >
            Skicka bokningsförfrågan
          </Link>
          <a
            href={site.phoneHref}
            className="flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FaPhone aria-hidden /> <Text>{site.phone}</Text>
          </a>
        </div>
      </div>
    </section>
  );
}
