import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zen Law Solicitors | Personal Injury Specialists Manchester",
  description: "Zen Law Solicitors in Manchester - Personal injury specialists with 20 years experience. No win, no fee. Road traffic accidents, work injuries, medical negligence & more.",
  keywords: "personal injury solicitors, Manchester lawyers, no win no fee, road traffic accident claims, work injury compensation",
  openGraph: {
    title: "Zen Law Solicitors | Personal Injury Specialists",
    description: "Manchester's leading personal injury law firm. No win, no fee guarantee.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-dark-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
