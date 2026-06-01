import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Rooms & Suites — Banrimklong Resort",
};

const rooms = [
  {
    type: "Signature Villa",
    name: "River Villa",
    price: "฿18,000",
    desc: "Perched directly over the Pleangyao canal, this standalone villa offers complete privacy with an overwater infinity pool, outdoor rain shower, and panoramic waterway views. The interior draws from the architectural vocabulary of royal Thai pavilions, rendered in hand-carved golden teak and hand-woven silk.",
    tags: ["240 m²", "Overwater", "Private Pool", "Butler Service", "King Bed", "Outdoor Shower"],
    img: "/hero.jpg",
  },
  {
    type: "Signature Suite",
    name: "Grand Heritage Suite",
    price: "฿12,500",
    desc: "Our most storied suite, housed within a restored 19th-century merchant pavilion. Soaring ceilings, antique Thai artefacts, and a wraparound terrace overlooking the canal define this one-of-a-kind experience. Afternoon tea is served daily on the terrace as the light shifts over the water.",
    tags: ["180 m²", "Canal View", "Private Terrace", "Butler Service", "Soaking Tub"],
    img: "/seagulls.jpg",
  },
  {
    type: "Pool Suite",
    name: "Garden Pool Suite",
    price: "฿9,800",
    desc: "Set within a private walled garden, this suite steps directly onto a saltwater plunge pool surrounded by tropical plantings. The bedroom is a sanctuary of muted earth tones, handmade ceramic vessels, and the sound of birdsong.",
    tags: ["120 m²", "Garden", "Plunge Pool", "King Bed", "Outdoor Bath"],
    img: "/flowers.jpg",
  },
  {
    type: "Deluxe Room",
    name: "Deluxe Garden Room",
    price: "฿6,800",
    desc: "A beautifully proportioned room tucked into the garden, with hand-crafted teak furniture, monsoon shower, and private daybed terrace. Every detail is attended to with the same devotion as our grandest suite.",
    tags: ["65 m²", "Garden View", "King or Twin", "Private Terrace", "Monsoon Shower"],
    img: "/field.jpg",
  },
];

export default function RoomsPage() {
  return (
    <main>
      {/* Page Hero */}
      <div className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/flowers.jpg')", filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09080A] via-[rgba(9,8,10,0.4)] to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Accommodation</span>
          <div className="w-10 h-px bg-[#C9A35C] my-4" />
          <h1
            className="text-[clamp(2.8rem,6vw,5rem)] leading-tight text-[#EDE0C8]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Rooms &amp; <em className="italic text-[#E8C990]">Suites</em>
          </h1>
          <p className="text-[#9C8E7A] text-sm mt-3 max-w-md">
            Sixteen private sanctuaries — each a considered world of teak, silk, and candlelight.
          </p>
        </div>
      </div>

      {/* Check-in strip */}
      <div className="bg-[#100F11] border-b border-white/8 py-5 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-8 flex-wrap text-sm">
            {[["Check-in","From 14:00"],["Check-out","Until 12:00"],["Minimum Stay","2 nights"],["Cancellation","Free up to 72h"]].map(([l,v]) => (
              <div key={l}>
                <div className="text-[0.62rem] tracking-[0.2em] uppercase text-[#C9A35C] mb-0.5">{l}</div>
                <div className="text-[#9C8E7A] text-xs">{v}</div>
              </div>
            ))}
          </div>
          <Link href="/contact" className="px-6 py-2.5 bg-[#C9A35C] text-[#09080A] text-xs tracking-[0.2em] uppercase hover:bg-[#E8C990] transition-colors">
            Check Availability
          </Link>
        </div>
      </div>

      {/* Rooms */}
      {rooms.map((room, i) => (
        <FadeIn key={room.name} className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} border-b border-white/8`}>
          <div className="md:w-1/2 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={room.img}
              alt={room.name}
              className="w-full h-72 md:h-full object-cover brightness-75 hover:brightness-90 hover:scale-[1.02] transition-all duration-700"
            />
          </div>
          <div className="md:w-1/2 bg-[#151316] px-10 md:px-16 py-16 flex flex-col justify-center">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">{room.type}</span>
            <div className="w-10 h-px bg-[#C9A35C] my-4" />
            <h2
              className="text-[2.4rem] leading-tight text-[#EDE0C8] mb-3"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {room.name.split(" ").slice(0,-1).join(" ")}{" "}
              <em className="italic text-[#E8C990]">{room.name.split(" ").slice(-1)}</em>
            </h2>
            <p
              className="text-[2rem] text-[#E8C990] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {room.price} <span className="text-sm text-[#9C8E7A] font-sans font-light">/ night</span>
            </p>
            <p className="text-[#9C8E7A] text-sm leading-loose mb-6">{room.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {room.tags.map(t => (
                <span key={t} className="text-[0.62rem] tracking-widest uppercase px-3 py-1.5 border border-[rgba(201,163,92,0.18)] text-[#9C8E7A]">{t}</span>
              ))}
            </div>
            <Link href="/contact" className="self-start px-8 py-3 bg-[#C9A35C] text-[#09080A] text-xs tracking-[0.2em] uppercase hover:bg-[#E8C990] transition-colors">
              Reserve This Room
            </Link>
          </div>
        </FadeIn>
      ))}

      {/* Included amenities */}
      <section className="py-24 px-8 md:px-16 max-w-screen-xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Included in Every Stay</span>
          <div className="w-10 h-px bg-[#C9A35C] my-4 mx-auto" />
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-[#EDE0C8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            The <em className="italic text-[#E8C990]">details</em> matter
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["✦","Daily Breakfast","A seasonal spread of local and international cuisine served at your preferred hour."],
            ["✦","Airport Transfer","Complimentary luxury transfer from Suvarnabhumi Airport for stays of 3 nights+."],
            ["✦","Spa Access","Daily access to the Praya Spa, hydrotherapy pools, and meditation pavilion."],
            ["✦","24h Butler","A dedicated butler on call around the clock for every request."],
          ].map(([icon, title, desc], i) => (
            <FadeIn key={title} delay={i * 0.1} className="text-center p-8 bg-[#151316] border border-white/8">
              <div className="text-[#C9A35C] text-2xl mb-4">{icon}</div>
              <div className="font-serif text-[1.1rem] mb-2 text-[#EDE0C8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>{title}</div>
              <div className="text-xs text-[#9C8E7A] leading-relaxed">{desc}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9C8E7A] tracking-wide">
          <span className="text-[#EDE0C8] text-base font-serif" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Banrimklong <span className="text-[#C9A35C]">Resort</span>
          </span>
          <span>086-846-8786 · stay@banrimklong.com</span>
          <span>© 2025 Banrimklong Resort · Chachoengsao, Thailand</span>
        </div>
      </footer>
    </main>
  );
}
