import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { FadeIn } from "@/components/ui/fade-in";
import Link from "next/link";

export default function Home() {
  return (
    <main>

      {/* ── HERO ── */}
      <SmoothScrollHero
        videoSrc="/hero2.mp4"
        scrollHeight={1500}
        initialClipPercentage={20}
        finalClipPercentage={80}
      >
        <div className="max-w-xl pointer-events-auto">
          <p className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-[#C9A35C] mb-3 md:mb-4">
            Chachoengsao, Thailand
          </p>
          <div className="w-8 md:w-10 h-px bg-[#C9A35C] mb-5 md:mb-6" />
          <h1
            className="text-[clamp(2.6rem,10vw,6.5rem)] leading-[0.92] mb-4 md:mb-6 text-[#EDE0C8]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Where silence<br />
            <em className="text-[#E8C990] italic">becomes luxury</em>
          </h1>
          <p className="hidden md:block text-sm text-[#9C8E7A] tracking-wide max-w-sm mb-8 leading-relaxed">
            A riverside retreat along the ancient waterways of Chachoengsao.
          </p>
          {/* Mobile: stacked buttons, full-width */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/rooms"
              className="px-6 py-3.5 md:px-8 md:py-3 bg-[#C9A35C] text-[#09080A] text-[0.65rem] md:text-[0.72rem] tracking-[0.2em] uppercase hover:bg-[#E8C990] transition-colors text-center"
            >
              Explore Rooms
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 md:px-8 md:py-3 border border-[rgba(237,224,200,0.35)] text-[#EDE0C8] text-[0.65rem] md:text-[0.72rem] tracking-[0.2em] uppercase hover:border-[#C9A35C] hover:text-[#C9A35C] transition-colors text-center"
            >
              Reserve a Stay
            </Link>
          </div>
        </div>
      </SmoothScrollHero>

      {/* ── ABOUT ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero.jpg"
                alt="Banrimklong Resort riverside"
                className="w-full aspect-[4/5] object-cover brightness-75"
              />
              {/* Mobile: floating stat bar below image */}
              <div className="md:hidden grid grid-cols-3 mt-4 border border-white/8">
                {[["16","Suites"],["5★","Rating"],["3","Dining"]].map(([n,l]) => (
                  <div key={l} className="text-center py-4 border-r border-white/8 last:border-r-0">
                    <div className="text-[#E8C990] text-xl" style={{ fontFamily: "var(--font-cormorant), serif" }}>{n}</div>
                    <div className="text-[0.6rem] tracking-widest uppercase text-[#9C8E7A] mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Our Story</p>
              <div className="w-10 h-px bg-[#C9A35C] my-5" />
              <h2
                className="text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[#EDE0C8]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                A sanctuary <em className="italic text-[#E8C990]">beyond time</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[#9C8E7A] text-sm leading-loose mt-5 mb-4">
                Nestled within the lush landscape of Pleangyao district, Banrimklong Resort is more than a hotel — it is an act of preservation. Each pavilion has been carefully restored to honour the architectural language of old Chachoengsao.
              </p>
              <p className="text-[#9C8E7A] text-sm leading-loose">
                Here, the mornings carry mist over the canals. The evenings dissolve slowly into amber light. And between those hours, everything is attended to with quiet devotion.
              </p>
            </FadeIn>
            {/* Desktop: stat row */}
            <FadeIn delay={0.3}>
              <div className="hidden md:grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/8">
                {[["16","Private Suites"],["5★","Rating"],["3","Restaurants"]].map(([n,l]) => (
                  <div key={l}>
                    <div className="text-[2.4rem] text-[#E8C990] leading-none" style={{ fontFamily: "var(--font-cormorant), serif" }}>{n}</div>
                    <div className="text-[0.62rem] tracking-[0.15em] uppercase text-[#9C8E7A] mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── ROOMS PREVIEW ── */}
      <section className="pb-20 md:pb-32 px-6 md:px-16 max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-14">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Accommodation</p>
            <div className="w-10 h-px bg-[#C9A35C] my-4" />
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#EDE0C8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Rooms &amp; <em className="italic text-[#E8C990]">Suites</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/rooms" className="self-start sm:self-auto px-6 py-2.5 border border-[rgba(237,224,200,0.2)] text-[#EDE0C8] text-xs tracking-[0.2em] uppercase hover:border-[#C9A35C] hover:text-[#C9A35C] transition-colors whitespace-nowrap">
              View All Rooms
            </Link>
          </FadeIn>
        </div>

        {/* Mobile: vertical stack / Desktop: asymmetric grid */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-px bg-white/8">
          {[
            { type:"Signature", name:"Grand Heritage Suite", price:"฿12,500", img:"/seagulls.jpg", span:true,  feats:["180m²","Canal View","Private Pool"] },
            { type:"Deluxe",    name:"Garden Room",          price:"฿6,800",  img:"/flowers.jpg", span:false, feats:["65m²","Garden View"] },
            { type:"Villa",     name:"River Villa",          price:"฿18,000", img:"/field.jpg",   span:false, feats:["240m²","Overwater"] },
          ].map((room, i) => (
            <FadeIn key={room.name} delay={i * 0.1} className={room.span ? "md:col-span-2" : ""}>
              <Link href="/contact" className="group relative block overflow-hidden bg-[#09080A]">
                <div className={`overflow-hidden ${room.span ? "aspect-[16/9] md:aspect-[16/8]" : "aspect-[4/3]"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={room.img} alt={room.name} className="w-full h-full object-cover brightness-75 group-hover:scale-105 group-hover:brightness-85 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,8,10,0.92)] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#C9A35C] mb-1">{room.type}</p>
                  <p className="text-[#EDE0C8] mb-1" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: room.span ? "1.7rem" : "1.4rem" }}>{room.name}</p>
                  <p className="text-xs text-[#9C8E7A]">From <span className="text-[#E8C990] text-sm">{room.price}</span> / night</p>
                  <div className="flex gap-3 mt-2">
                    {room.feats.map(f => <span key={f} className="text-[0.58rem] tracking-widest uppercase text-[#9C8E7A]">— {f}</span>)}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-[#100F11]" id="experience">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <FadeIn>
              <p className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Experiences</p>
              <div className="w-10 h-px bg-[#C9A35C] my-5" />
              <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#EDE0C8] mb-10" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                Crafted <em className="italic text-[#E8C990]">moments</em>
              </h2>
            </FadeIn>
            {[
              ["01","Thai Wellness & Spa","Ancient healing rituals drawn from royal Siamese tradition, in open-air pavilions over the canal."],
              ["02","Canal & Firefly Journeys","Private longtail boat excursions at dusk through firefly-lit mangroves and century-old temples."],
              ["03","Farm-to-Table Dining","Three dining experiences celebrating the rich culinary heritage of Chachoengsao province."],
              ["04","Muay Thai & Mindfulness","Morning meditation with monks, followed by private Muay Thai training with championship masters."],
            ].map(([num, title, desc], i) => (
              <FadeIn key={num} delay={i * 0.08}>
                <div className="flex gap-5 py-5 border-b border-white/8 first:border-t group cursor-default hover:pl-2 transition-all duration-300">
                  <span className="text-[#C9A35C] text-sm pt-0.5 min-w-[28px]" style={{ fontFamily: "var(--font-cormorant), serif" }}>{num}</span>
                  <div>
                    <p className="text-[#EDE0C8] mb-1 group-hover:text-[#E8C990] transition-colors" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.3rem" }}>{title}</p>
                    <p className="text-[#9C8E7A] text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn direction="right" className="hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flowers.jpg" alt="Experience at Banrimklong Resort" className="w-full aspect-[3/4] object-cover brightness-75" />
          </FadeIn>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 md:py-28 px-6 md:px-16 max-w-screen-xl mx-auto">
        <FadeIn className="text-center mb-10 md:mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Gallery</p>
          <div className="w-10 h-px bg-[#C9A35C] my-4 mx-auto" />
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] text-[#EDE0C8]" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Life at <em className="italic text-[#E8C990]">Banrimklong</em>
          </h2>
        </FadeIn>

        {/* Mobile: 2-col simple grid / Desktop: asymmetric masonry */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-1 md:h-[560px]">
          {[
            { src:"/hero.jpg",     alt:"Waterfront",      cls:"col-span-2 md:col-span-2 md:row-span-2", delay:0   },
            { src:"/seagulls.jpg", alt:"Scenic views",    cls:"",                                       delay:0.1 },
            { src:"/flowers.jpg",  alt:"Tranquil garden", cls:"",                                       delay:0.15},
            { src:"/field.jpg",    alt:"Surroundings",    cls:"col-span-2",                             delay:0.2 },
          ].map(({ src, alt, cls, delay }) => (
            <FadeIn key={src} delay={delay} className={`overflow-hidden ${cls}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={alt} className="w-full h-full object-cover aspect-square md:aspect-auto brightness-75 hover:brightness-90 hover:scale-105 transition-all duration-700" />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-20 md:py-24 px-6 md:px-16 bg-[#100F11] text-center">
        <FadeIn>
          <div className="text-[#C9A35C] tracking-[0.3em] text-sm mb-6">★ ★ ★ ★ ★</div>
          <blockquote
            className="text-[clamp(1.4rem,3.5vw,2.6rem)] text-[#EDE0C8] leading-snug max-w-3xl mx-auto mb-6 italic"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            "The Pleangyao redefined what a hotel stay can be. The silence, the light, the extraordinary care — I left a different person."
          </blockquote>
          <div className="w-10 h-px bg-[#C9A35C] mx-auto mb-4" />
          <cite className="text-[0.7rem] tracking-[0.2em] uppercase text-[#C9A35C] not-italic">
            Natasha Voronova — Moscow · Stayed May 2025
          </cite>
        </FadeIn>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/8 py-10 px-6 md:px-16">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[#EDE0C8] text-lg" style={{ fontFamily: "var(--font-cormorant), serif" }}>
            Banrimklong <span className="text-[#C9A35C]">Resort</span>
          </span>
          <span className="text-xs text-[#9C8E7A] tracking-wide text-center">086-846-8786 · stay@banrimklong.com</span>
          <span className="text-xs text-[#9C8E7A] tracking-wide text-center">© 2025 Banrimklong Resort · Chachoengsao</span>
        </div>
      </footer>

    </main>
  );
}
