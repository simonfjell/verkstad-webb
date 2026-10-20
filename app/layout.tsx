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
    "Verkstad för släp, trailers, link och dolly i Jönköping. Walking floor, bromsar och EBS, service, lift, svets, försäkringsjobb, däckbyte och tvätthall för tung trafik.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    images: [{ url: "/images/hero.webp", width: 1600, height: 990 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a3e7c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
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
