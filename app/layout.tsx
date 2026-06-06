import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import LineButton from "@/components/ui/line-button";
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

const BASE_URL = "https://claude-six-inky.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "บ้านริมคลอง รีสอร์ท — พักผ่อนริมคลอง ฉะเชิงเทรา",
    template: "%s — บ้านริมคลอง รีสอร์ท",
  },
  description: "รีสอร์ทริมคลองบรรยากาศธรรมชาติ อ.แปลงยาว จ.ฉะเชิงเทรา ห้องพักรายคืน 500 ฿ · ห้องชั่วคราว 250 ฿/3 ชม. เช็คอิน 14:00 เช็คเอาท์ 12:00 โทร 080-994-4891",
  keywords: [
    "บ้านริมคลอง รีสอร์ท", "ที่พักฉะเชิงเทรา", "รีสอร์ทริมคลอง",
    "ที่พักแปลงยาว", "โรงแรมฉะเชิงเทรา", "Banrimklong Resort",
    "resort chachoengsao", "ที่พักราคาถูก", "ห้องพักรายคืน", "ห้องพักชั่วคราว",
  ],
  authors: [{ name: "บ้านริมคลอง รีสอร์ท" }],
  creator: "บ้านริมคลอง รีสอร์ท",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "บ้านริมคลอง รีสอร์ท — พักผ่อนริมคลอง ฉะเชิงเทรา",
    description: "รีสอร์ทริมคลองบรรยากาศธรรมชาติ อ.แปลงยาว จ.ฉะเชิงเทรา ห้องพักรายคืน 500 ฿ · ชั่วคราว 250 ฿",
    url: BASE_URL,
    siteName: "บ้านริมคลอง รีสอร์ท",
    locale: "th_TH",
    images: [{ url: "/resort.jpg", width: 1200, height: 630, alt: "บ้านริมคลอง รีสอร์ท ฉะเชิงเทรา" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "บ้านริมคลอง รีสอร์ท — ฉะเชิงเทรา",
    description: "รีสอร์ทริมคลองบรรยากาศธรรมชาติ อ.แปลงยาว จ.ฉะเชิงเทรา",
    images: ["/resort.jpg"],
  },
};

const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "บ้านริมคลอง รีสอร์ท",
  alternateName: "Banrimklong Resort",
  description: "รีสอร์ทริมคลองบรรยากาศธรรมชาติ อำเภอแปลงยาว จังหวัดฉะเชิงเทรา",
  url: BASE_URL,
  telephone: "+66-80-994-4891",
  email: "banrimklong_resort@hotmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "77/2-4 หมู่ที่ 7 ต.หัวสำโรง",
    addressLocality: "อ.แปลงยาว",
    addressRegion: "ฉะเชิงเทรา",
    postalCode: "24190",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.6512,
    longitude: 101.2834,
  },
  priceRange: "฿฿",
  image: `${BASE_URL}/resort.jpg`,
  sameAs: [
    "https://www.facebook.com/banrimklong",
    "https://line.me/ti/p/~banrimklong772",
  ],
  checkinTime: "14:00",
  checkoutTime: "12:00",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <meta name="theme-color" content="#B8935A" />
        <meta name="color-scheme" content="light" />
        <link rel="canonical" href={BASE_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${jost.variable} bg-[#F7F3ED] text-[#1E1812]`}>
        <Navbar />
        {children}
        <LineButton />
      </body>
    </html>
  );
}
