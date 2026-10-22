import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageTop from "../components/PageTop";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: `Så hanterar ${site.name} personuppgifter och cookies på webbplatsen.`,
};

// TODO: låt Rosenlunds Åkeri / ansvarig granska texten innan lansering (gärna mot åkeriets egen policy).
export default function Integritet() {
  const addr = `${site.address.street}, ${site.address.zip} ${site.address.city}`;
  return (
    <>
      <PageTop crumb="Integritetspolicy" eyebrow="Integritet" title="Integritetspolicy" />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl space-y-8 px-4 py-16 text-lg leading-relaxed text-muted sm:px-6 sm:py-20">
          <div>
            <h2 className="text-2xl font-bold text-ink">Personuppgiftsansvarig</h2>
            <p className="mt-2">
              {site.company.legalName} (org.nr {site.company.orgNr}), {addr}. Frågor om personuppgifter skickar du till{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
                {site.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Bokningsförfrågan och kontakt</h2>
            <p className="mt-2">
              När du skickar en bokningsförfrågan eller kontaktar oss via mejl eller telefon behandlar vi de uppgifter du
              lämnar, till exempel namn, företag, telefonnummer, mejladress och registreringsnummer. Vi använder dem för att
              svara dig, boka in fordonet och utföra jobbet. Uppgifterna sparas så länge de behövs för det, och för den tid
              som bokföringslagen kräver när det blir ett jobb.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Cookies</h2>
            <p className="mt-2">
              Webbplatsen använder inga egna cookies och ingen besöksstatistik. Kartan på kontaktsidan hämtas från Google
              först när du klickar på &quot;Visa karta&quot;. Då kan Google sätta cookies enligt sina egna villkor.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Drift av webbplatsen</h2>
            <p className="mt-2">
              Webbplatsen drivs hos Vercel. Som alla webbservrar loggar de tekniska uppgifter som IP-adress för att leverera
              sidan och skydda mot missbruk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink">Dina rättigheter</h2>
            <p className="mt-2">
              Du har rätt att få veta vilka uppgifter vi har om dig, att få fel rättade och att få uppgifter raderade när de
              inte längre behövs. Kontakta oss på mejladressen ovan. Om du är missnöjd med hur vi hanterar dina uppgifter kan
              du vända dig till Integritetsskyddsmyndigheten (IMY).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
