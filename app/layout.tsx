import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Banrimklong Resort — Luxury Heritage Retreat · Chachoengsao, Thailand",
  description: "A riverside retreat along the ancient waterways of Chachoengsao — where unhurried grace meets the rhythm of the river.",
  openGraph: {
    title: "Banrimklong Resort — Chachoengsao, Thailand",
    description: "Where silence becomes luxury. A heritage retreat along the ancient waterways of Chachoengsao.",
    url: "https://banrimklong.com",
    siteName: "Banrimklong Resort",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Banrimklong Resort" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Banrimklong Resort — Chachoengsao, Thailand",
    description: "Where silence becomes luxury.",
    images: ["/hero.jpg"],
  },
  metadataBase: new URL("https://banrimklong.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${jost.variable} bg-[#F7F3ED] text-[#1E1812]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
