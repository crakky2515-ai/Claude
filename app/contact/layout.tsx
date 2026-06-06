import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "จองห้องพัก & ติดต่อ",
  description:
    "จองห้องพักบ้านริมคลอง รีสอร์ท อ.แปลงยาว ฉะเชิงเทรา ห้องพักรายคืน 500 ฿ · ห้องชั่วคราว 250 ฿/3 ชม. โทร 080-994-4891 LINE: @banrimklong772",
  openGraph: {
    title: "จองห้องพัก — บ้านริมคลอง รีสอร์ท",
    description:
      "จองห้องพักออนไลน์ได้ทันที ห้องพักรายคืน 500 ฿ · ห้องชั่วคราว 250 ฿/3 ชม.",
    images: [{ url: "/resort.jpg", width: 1200, height: 630, alt: "บ้านริมคลอง รีสอร์ท" }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
