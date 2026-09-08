import type { Metadata } from "next";
import { Bodoni_Moda, Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
// @ts-expect-error The global stylesheet is provided by the Next.js app runtime.
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
  title: "Ridoy Mojumder — Frontend & Framer Developer",
  description:
    "Frontend & Framer Developer building modern, responsive websites with React, Next.js, Tailwind, and Laravel. Based in Dhaka, Bangladesh.",
  openGraph: {
    title: "Ridoy Mojumder — Frontend & Framer Developer",
    description: "A one-page folio of Framer templates, frontend work, and Laravel projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${ui.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
