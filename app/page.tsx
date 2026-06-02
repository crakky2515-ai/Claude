import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { Marquee } from "@/components/ui/marquee";
import Footer from "@/components/ui/footer";
import { TiltImage } from "@/components/ui/tilt-image";
import { SpotlightSection } from "@/components/ui/spotlight-section";
import { AboutInteractive, Counter } from "@/components/ui/about-interactive";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ── HERO (keep dark overlay on video) ── */}
      <SmoothScrollHero
        videoSrc="/hero2.mp4"
        scrollHeight={1500}
        initialClipPercentage={20}
        finalClipPercentage={80}
      >
        <div className="max-w-xl pointer-events-auto">
          <p className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-[#D4A96A] mb-3 md:mb-4">
            Chachoengsao, Thailand
          </p>
          <div className="w-8 md:w-10 h-px bg-[#D4A96A] mb-5 md:mb-6" />
          <h1
            className="text-[clamp(2.6rem,10vw,6.5rem)] leading-[0.92] mb-4 md:mb-6 text-white"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Where silence<br />
            <em className="text-[#D4A96A] italic">becomes luxury</em>
          </h1>
          <p className="hidden md:block text-sm text-white/70 tracking-wide max-w-sm mb-8 leading-relaxed">
            A riverside retreat along the ancient waterways of Chachoengsao.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/rooms" className="shimmer px-6 py-3.5 md:px-8 md:py-3 bg-[#B8935A] text-white text-[0.65rem] md:text-[0.72rem] tracking-[0.2em] uppercase hover:bg-[#D4A96A] transition-colors text-center">
              Explore Rooms
            </Link>
            <Link href="/contact" className="shimmer px-6 py-3.5 md:px-8 md:py-3 border border-white/50 text-white text-[0.65rem] md:text-[0.72rem] tracking-[0.2em] uppercase hover:border-white hover:bg-white/10 transition-colors text-center">
              Reserve a Stay
            </Link>
          </div>
        </div>
      </SmoothScrollHero>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── ABOUT ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 max-w-screen-xl mx-auto">
        <AboutInteractive>
          {/* LEFT — image */}
          <FadeIn direction="left">
            <div className="relative hover-frame about-float">
              <TiltImage src="/entrance.jpg" alt="Banrimklong Resort entrance" className="w-full aspect-[4/5] object-cover" />
              <div className="md:hidden grid grid-cols-3 mt-4 border border-black/10">
                {[["16","Suites"],["5★","Rating"],["3","Dining"]].map(([n,l]) => (
                  <div key={l} className="text-center py-4 border-r border-black/10 last:border-r-0">
                    <div className="text-[#B8935A] text-xl" style={{ fontFamily: "var(--font-cormorant), serif" }}>{n}</div>
                    <div className="text-[0.6rem] tracking-widest uppercase text-[#7A6E62] mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT — text */}
          <div>
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Our Story</p>
              <div className="w-10 h-px bg-[#B8935A] my-5" />
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[#1E1812]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                A sanctuary <em className="italic text-[#8B6830]">beyond time</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mt-5 mb-4">
                กว่า 10 ปีที่ผ่านมา เราเชื่อว่าการพักผ่อนที่ดี ไม่ได้วัดจากความหรูหราเพียงอย่างเดียว แต่คือความสบาย ความเงียบสงบ และความรู้สึกเหมือนได้กลับมาพักในสถานที่ที่คุ้นเคย
              </p>
              <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mb-4">
                บ้านริมคลองรีสอร์ตเริ่มต้นจากความตั้งใจเล็กๆ ที่อยากสร้างสถานที่พักผ่อนท่ามกลางธรรมชาติ ให้ผู้มาเยือนได้หลีกหนีจากความวุ่นวายของชีวิตประจำวัน และใช้เวลาอย่างมีความหมายกับคนที่รัก
              </p>
              <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mb-4">
                ตลอดระยะเวลากว่า 10 ปี เราได้ต้อนรับนักเดินทาง ครอบครัว และผู้มาเยือนจากหลากหลายพื้นที่ พร้อมพัฒนาการบริการอย่างต่อเนื่อง เพื่อมอบประสบการณ์การพักผ่อนที่อบอุ่นและน่าประทับใจ
              </p>
              <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mb-4">
                วันนี้ บ้านริมคลองรีสอร์ตยังคงรักษาเสน่ห์ของความเรียบง่ายและความเป็นกันเอง พร้อมต้อนรับทุกท่านให้มาสัมผัสบรรยากาศแห่งการพักผ่อนอย่างแท้จริง
              </p>
              <p className="text-[#7A6E62] text-sm leading-loose italic">
                ขอบคุณที่ไว้วางใจให้เราเป็นส่วนหนึ่งของช่วงเวลาพิเศษของคุณ
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="hidden md:grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-black/10">
                {[
                  { n: 16,  suffix: "",  label: "Private Suites" },
                  { n: 5,   suffix: "★", label: "Rating" },
                  { n: 3,   suffix: "",  label: "Restaurants" },
                ].map(({ n, suffix, label }) => (
                  <div key={label} className="stat-hover group cursor-default">
                    <div className="text-[2.4rem] text-[#B8935A] leading-none transition-transform duration-300 group-hover:scale-110 group-hover:translate-y-[-2px]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                      <Counter target={n} />{suffix}
                    </div>
                    <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#7A6E62] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </AboutInteractive>
      </section>

      {/* ── ROOMS PREVIEW ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Accommodation</p>
            <div className="w-10 h-px bg-[#B8935A] my-4" />
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#1E1812]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Rooms &amp; <em className="italic text-[#8B6830]">Suites</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/rooms" className="shimmer self-start sm:self-auto px-6 py-2.5 border border-[rgba(30,24,18,0.2)] text-[#1E1812] text-xs tracking-[0.2em] uppercase hover:border-[#B8935A] hover:text-[#B8935A] transition-colors whitespace-nowrap">
              View All Rooms
            </Link>
          </FadeIn>
        </div>
        <SpotlightSection className="flex flex-col md:grid md:grid-cols-2 gap-px bg-black/8">
          {[
            { type:"ค้างคืน",  name:"ห้องพักรายคืน",    price:"฿500", img:"/room1.jpg",    feats:["พักได้ทั้งคืน","เช็คอิน 14:00","เช็คเอาท์ 12:00"] },
            { type:"ชั่วคราว", name:"ห้องพักรายชั่วโมง", price:"฿250", img:"/room2.jpg",    feats:["3 ชั่วโมง","พร้อมใช้ทันที"] },
          ].map((room, i) => (
            <FadeIn key={room.name} delay={i * 0.1}>
              <Link href="/contact" className="group relative block overflow-hidden bg-[#F0EAE0]">
                <div className="overflow-hidden aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={room.img} alt={room.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,24,18,0.75)] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#D4A96A] mb-1">{room.type}</p>
                  <p className="text-white mb-1 text-[1.55rem]" style={{ fontFamily: "var(--font-cormorant), serif" }}>{room.name}</p>
                  <p className="text-xs text-white/70"><span className="text-[#D4A96A] text-sm price-pulse">{room.price}</span></p>
                  <div className="flex gap-3 mt-2">
                    {room.feats.map(f => <span key={f} className="text-[0.58rem] tracking-widest uppercase text-white/60">— {f}</span>)}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </SpotlightSection>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#EDE7DC]" id="experience">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Experiences</p>
              <div className="w-10 h-px bg-[#B8935A] my-5" />
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#1E1812] mb-10" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Crafted <em className="italic text-[#8B6830]">moments</em>
              </h2>
            </FadeIn>
            {[
              ["01","Riverside Relaxation","พักผ่อนท่ามกลางบรรยากาศริมน้ำ สัมผัสความเงียบสงบของธรรมชาติ ฟังเสียงน้ำไหลและสายลมพัดผ่านตลอดวัน"],
              ["02","Morning Serenity","เช้าที่สดชื่นกว่าทุกวัน เริ่มต้นวันใหม่ด้วยอากาศบริสุทธิ์และวิวธรรมชาติที่ช่วยเติมพลังให้กับวันพักผ่อนของคุณ"],
              ["03","Family Getaway","ช่วงเวลาดีๆ กับคนที่คุณรัก เหมาะสำหรับการพักผ่อนกับครอบครัวและเพื่อนฝูงในบรรยากาศอบอุ่นเป็นกันเอง"],
              ["04","Local Charm","สัมผัสเสน่ห์ท้องถิ่น เรียนรู้วิถีชีวิตเรียบง่ายและความงดงามของชุมชนโดยรอบ"],
            ].map(([num, title, desc], i) => (
              <FadeIn key={num} delay={i * 0.08}>
                <div className="exp-item flex gap-5 py-5 border-b border-black/10 first:border-t group cursor-default hover:pl-2 transition-all duration-300">
                  <span className="exp-num text-[#B8935A] text-sm pt-0.5 min-w-[28px]" style={{ fontFamily: "var(--font-cormorant), serif" }}>{num}</span>
                  <div>
                    <p className="text-[#1E1812] mb-1 group-hover:text-[#8B6830] transition-colors" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem" }}>{title}</p>
                    <p className="text-[#7A6E62] text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn direction="right" className="hidden md:block hover-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flowers.jpg" alt="Garden at Banrimklong Resort" loading="lazy" className="w-full aspect-[3/4] object-cover" />
          </FadeIn>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <SpotlightSection className="py-20 md:py-28 px-6 md:px-16 max-w-screen-xl mx-auto" radius={500} color="rgba(201,163,92,0.07)">
        <FadeIn className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Gallery</p>
          <div className="w-10 h-px bg-[#B8935A] my-4 mx-auto" />
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#1E1812]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Life at <em className="italic text-[#8B6830]">Banrimklong</em>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-1 md:h-[560px]">
          {[
            { src:"/nostar2.jpg", alt:"บ้านริมคลอง รีสอร์ท",  cls:"col-span-2 md:col-span-2 md:row-span-2", delay:0   },
            { src:"/room1.jpg",  alt:"ห้องพักรายคืน",     cls:"",                                       delay:0.1 },
            { src:"/nostar1.jpg",alt:"ทางเข้ารีสอร์ท",    cls:"",                                       delay:0.15},
            { src:"/entrance.jpg",alt:"บรรยากาศโดยรอบ",   cls:"col-span-2",                             delay:0.2 },
          ].map(({ src, alt, cls, delay }) => (
            <FadeIn key={src} delay={delay} className={`overflow-hidden hover-frame ${cls}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover aspect-square md:aspect-auto hover:scale-105 transition-all duration-700" />
            </FadeIn>
          ))}
        </div>
      </SpotlightSection>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-[#EDE7DC] text-center">
        <FadeIn>
          <div className="star-sparkle text-[#B8935A] tracking-[0.3em] text-sm mb-6">
            <span>★</span><span> </span><span>★</span><span> </span><span>★</span><span> </span><span>★</span><span> </span><span>★</span>
          </div>
          <blockquote
            className="quote-glow text-[clamp(1.4rem,3.5vw,2.6rem)] text-[#1E1812] leading-snug max-w-3xl mx-auto mb-6 italic"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            "The Banrimklong redefined what a hotel stay can be. The silence, the light, the extraordinary care — I left a different person."
          </blockquote>
          <div className="w-10 h-px bg-[#B8935A] mx-auto mb-4" />
          <cite className="text-[0.7rem] tracking-[0.2em] uppercase text-[#B8935A] not-italic">
            Natasha Voronova — Moscow · Stayed May 2025
          </cite>
        </FadeIn>
      </section>

      <Footer />

    </main>
  );
}
