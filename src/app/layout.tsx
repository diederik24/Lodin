import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppKnop from "@/components/WhatsAppKnop";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lodin.nl"),
  title: {
    default: "Lodin Honden Uitlaat Service | Loon op Zand en omgeving",
    template: "%s | Lodin Honden Uitlaat Service",
  },
  description:
    "Lodin laat je hond anderhalf uur uit in kleine groepjes in de natuur rond Loon op Zand. Ophalen en thuisbrengen inbegrepen, met veel persoonlijke aandacht.",
  keywords: [
    "hondenuitlaatservice",
    "hond uitlaten",
    "Loon op Zand",
    "Kaatsheuvel",
    "Waalwijk",
    "Dongen",
    "Lodin",
  ],
  openGraph: {
    title: "Lodin Honden Uitlaat Service",
    description:
      "Rust, ruimte en persoonlijke aandacht. Kleine groepjes en lange wandelingen in de natuur rond Loon op Zand.",
    locale: "nl_NL",
    type: "website",
    images: ["/banner.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppKnop />
      </body>
    </html>
  );
}
