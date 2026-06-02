import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import Footer from "@/components/ui/footer";
import { MagneticLink } from "@/components/ui/magnetic-link";

export const metadata: Metadata = {
  title: "Rooms & Suites — Banrimklong Resort",
};

const rooms = [
  {
    type: "ราคาค้างคืน",
    name: "ห้องพักรายคืน",
    price: "฿500",
    unit: "/ คืน",
    desc: "เหมาะสำหรับผู้ที่ต้องการพักผ่อนอย่างเต็มที่ท่ามกลางบรรยากาศธรรมชาติริมคลอง เช็คอินตั้งแต่ 14:00 น. และเช็คเอาท์ได้ถึง 12:00 น. วันรุ่งขึ้น พักผ่อนสบายๆ กับธรรมชาติที่เงียบสงบ",
    tags: ["เช็คอิน 14:00", "เช็คเอาท์ 12:00", "พักได้ทั้งคืน", "บรรยากาศสงบ"],
    img: "/room1.jpg",
  },
  {
    type: "ราคาชั่วคราว",
    name: "ห้องพักรายชั่วโมง",
    price: "฿250",
    unit: "/ 3 ชั่วโมง",
    desc: "สำหรับผู้ที่ต้องการพักผ่อนระหว่างทาง หรือใช้เวลาส่วนตัวแบบสั้นๆ ห้องพักชั่วคราวพร้อมใช้ทันที สะดวกสบายในระยะเวลา 3 ชั่วโมง",
    tags: ["3 ชั่วโมง", "พร้อมใช้ทันที", "สะดวกสบาย", "ราคาประหยัด"],
    img: "/room2.jpg",
  },
];

export default function RoomsPage() {
  return (
    <main>
      {/* Page Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/entrance.jpg')", filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,24,18,0.9)] via-[rgba(9,8,10,0.4)] to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Accommodation</span>
          <div className="w-10 h-px bg-[#B8935A] my-4" />
          <h1
            className="text-[clamp(2.8rem,6vw,5rem)] leading-tight text-white"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Rooms &amp; <em className="italic text-[#D4A96A]">Suites</em>
          </h1>
          <p className="text-white/60 text-sm mt-3 max-w-md">
            Sixteen private sanctuaries — each a considered world of teak, silk, and candlelight.
          </p>
        </div>
      </div>

      {/* Check-in strip */}
      <div className="bg-[#EDE7DC] border-b border-black/10 py-5 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-8 flex-wrap text-sm">
            {[["เช็คอิน","ตั้งแต่ 14:00"],["เช็คเอาท์","ก่อน 12:00"],["ห้องชั่วคราว","3 ชั่วโมง 250 ฿"],["ห้องค้างคืน","คืนละ 500 ฿"]].map(([l,v]) => (
              <div key={l}>
                <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#B8935A] mb-0.5">{l}</div>
                <div className="text-[#7A6E62] text-xs">{v}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="shimmer px-6 py-2.5 bg-[#B8935A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#D4A96A] transition-colors">
            Check Availability
          </Link>
        </div>
      </div>

      {/* Rooms */}
      {rooms.map((room, i) => (
        <FadeIn key={room.name} className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} border-b border-black/10`}>
          <div className="hover-frame md:w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={room.img}
              alt={room.name}
              loading="lazy" className="w-full h-72 md:h-full object-cover brightness-75 hover:brightness-90 hover:scale-[1.02] transition-all duration-700"
            />
          </div>
          <div
            className="room-detail-bg md:w-1/2 px-10 md:px-16 py-16 flex flex-col justify-center relative overflow-hidden border-l-2 border-[#C9A35C]/30"
            style={{ background: "linear-gradient(150deg, #FDFAF5 0%, #F5ECD8 50%, #EDE0C4 100%)" }}
          >
            {/* Decorative corner ornament */}
            <div className="absolute top-0 right-0 opacity-[0.06] pointer-events-none select-none" aria-hidden="true">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <circle cx="110" cy="110" r="100" stroke="#8B6830" strokeWidth="0.8"/>
                <circle cx="110" cy="110" r="72" stroke="#8B6830" strokeWidth="0.8"/>
                <circle cx="110" cy="110" r="44" stroke="#8B6830" strokeWidth="0.8"/>
                <line x1="10" y1="110" x2="210" y2="110" stroke="#8B6830" strokeWidth="0.6"/>
                <line x1="110" y1="10" x2="110" y2="210" stroke="#8B6830" strokeWidth="0.6"/>
                <line x1="39" y1="39" x2="181" y2="181" stroke="#8B6830" strokeWidth="0.5"/>
                <line x1="181" y1="39" x2="39" y2="181" stroke="#8B6830" strokeWidth="0.5"/>
              </svg>
            </div>
            {/* Small gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, #C9A35C, transparent)" }} />

            <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">{room.type}</span>
            <div className="w-10 h-px bg-[#B8935A] my-4" />
            <h2
              className="text-[2.4rem] leading-tight text-[#1E1812] mb-3"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {room.name.split(" ").slice(0,-1).join(" ")}{" "}
              <em className="italic text-[#8B6830]">{room.name.split(" ").slice(-1)}</em>
            </h2>
            <p
              className="text-[2rem] text-[#8B6830] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {room.price} <span className="text-sm text-[#7A6E62] font-sans font-light">{room.unit}</span>
            </p>
            <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mb-6">{room.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {room.tags.map(t => (
                <span key={t} className="text-[0.62rem] tracking-widest uppercase px-3 py-1.5 border border-[#C9A35C]/20 text-[#7A6E62] bg-white/40">{t}</span>
              ))}
            </div>
            <MagneticLink href="/contact" className="shimmer self-start px-8 py-3 bg-[#B8935A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#D4A96A] transition-colors">
              จองห้องพัก
            </MagneticLink>
          </div>
        </FadeIn>
      ))}

      {/* Included amenities */}
      <section className="py-24 px-8 md:px-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Included in Every Stay</span>
          <div className="w-10 h-px bg-[#B8935A] my-4 mx-auto" />
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-[#1E1812]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            The <em className="italic text-[#8B6830]">details</em> matter
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["✦","บรรยากาศธรรมชาติ","ห้องพักท่ามกลางธรรมชาติริมคลอง เงียบสงบ ร่มรื่น เหมาะแก่การพักผ่อน"],
            ["✦","ที่จอดรถ","มีที่จอดรถบริการฟรีสำหรับผู้เข้าพักทุกท่าน"],
            ["✦","ห้องน้ำในตัว","ห้องพักทุกห้องมีห้องน้ำส่วนตัวพร้อมสิ่งอำนวยความสะดวก"],
            ["✦","บริการตลอดวัน","เปิดให้บริการทุกวัน พร้อมต้อนรับทุกท่านอย่างอบอุ่น"],
          ].map(([icon, title, desc], i) => (
            <FadeIn key={title} delay={i * 0.1} className="text-center p-8 bg-white border border-black/10">
              <div className="text-[#B8935A] text-2xl mb-4">{icon}</div>
              <div className="font-serif text-[1.1rem] mb-2 text-[#1E1812]" style={{ fontFamily: "var(--font-cormorant), serif" }}>{title}</div>
              <div className="text-xs text-[#7A6E62] leading-relaxed">{desc}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
