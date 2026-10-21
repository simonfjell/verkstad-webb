import type { Metadata, Viewport } from "next";
import "@fontsource/jost/latin-400.css";
import "@fontsource/jost/latin-500.css";
import "@fontsource/jost/latin-600.css";
import "@fontsource/jost/latin-700.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – service och reparation av släp och trailers i Jönköping`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Verkstad för släp, trailers, link och dolly i Jönköping. Walking floor, bromsar och EBS, service, lift, svets, försäkringsjobb, däckbyte, reservdelar och tvätthall för tung trafik.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    images: [{ url: "/images/verkstad-topp.webp", width: 2576, height: 1290 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a3e7c",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/verkstad-topp.webp`,
  logo: `${site.url}/brand/rosenlunds-verkstad.png`,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "SE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  parentOrganization: { "@type": "Organization", name: site.parent.name, url: site.parent.url },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Hoppa till innehållet
        </a>
        <Header />
        <main id="innehall">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
