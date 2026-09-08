import type { Metadata } from "next";
import { Bodoni_Moda, Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
});

const body = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
});

const ui = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "Alex Chen — Product Designer",
  description:
    "Selected work in product design, brand systems, and editorial interfaces. Based in San Francisco.",
  openGraph: {
    title: "Alex Chen — Product Designer",
    description: "A one-page folio of product, brand, and editorial design.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}
