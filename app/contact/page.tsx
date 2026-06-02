"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTimeout(() => setSent(true), 800);
  }

  return (
    <main>
      {/* Page Hero */}
      <div className="relative h-[45vh] min-h-[360px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')", filter: "brightness(0.45)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,24,18,0.9)] via-[rgba(9,8,10,0.4)] to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Reservations &amp; Enquiries</span>
          <div className="w-10 h-px bg-[#B8935A] my-4" />
          <h1
            className="text-[clamp(2.8rem,6vw,5rem)] leading-tight text-white"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Begin your <em className="italic text-[#D4A96A]">arrival</em>
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Get in Touch</span>
            <div className="w-10 h-px bg-[#B8935A] my-4" />
            <h2
              className="text-[clamp(2rem,4vw,3rem)] text-[#1E1812] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              We are <em className="italic text-[#8B6830]">here for you</em>
            </h2>
            <p className="text-[#7A6E62] text-[0.9375rem] leading-loose mb-8">
              Our reservations team is available daily from 08:00 to 22:00 (ICT +7). We respond to all enquiries within 2 hours.
            </p>

            {[
              { icon: "✦", label: "Address",    val: "77/2-4 หมู่ที่ 7 ต.หัวสำโรง อ.แปลงยาว\nChachoengsao, Thailand" },
              { icon: "✆", label: "Telephone",  val: "081-257-5225\nDaily 08:00 – 22:00 ICT" },
              { icon: "✉", label: "Email",      val: "banrimklong_resort@hotmail.com" },
              { icon: "◈", label: "LINE",        val: "@banrimklong772" },
              { icon: "◈", label: "Facebook",   val: "บ้านริมคลอง รีสอร์ท" },
            ].map(({ icon, label, val }) => (
              <div key={label} className="flex gap-5 py-5 border-b border-black/10 first:border-t">
                <div className="w-11 h-11 border border-[rgba(184,147,90,0.25)] flex items-center justify-center text-[#B8935A] shrink-0">{icon}</div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-1">{label}</div>
                  <div className="text-[#7A6E62] text-sm leading-relaxed whitespace-pre-line">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white border border-black/10 p-10">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Reservation Request</span>
            <h3
              className="text-[1.8rem] text-[#1E1812] mt-3 mb-8"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Reserve Your Stay
            </h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="text-[#B8935A] text-4xl mb-4">✦</div>
                <p className="text-[#1E1812] font-serif text-xl mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>Request Received</p>
                <p className="text-[#7A6E62] text-sm">We will confirm availability within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" id="fname" placeholder="Kannika" />
                  <Field label="Last Name"  id="lname" placeholder="Siriwong" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Email"        id="email" type="email" placeholder="you@email.com" />
                  <Field label="Phone / LINE" id="phone" placeholder="086-000-0000" inputMode="tel" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Check-in"  id="checkin"  type="date" />
                  <Field label="Check-out" id="checkout" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">Guests</label>
                    <select className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm outline-none focus:border-[#C9A35C] transition-colors appearance-none">
                      {["1 Guest","2 Guests","3 Guests","4 Guests","5+ Guests"].map(o => <option key={o} className="bg-white">{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">Room Type</label>
                    <select className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm outline-none focus:border-[#C9A35C] transition-colors appearance-none">
                      {["— กรุณาเลือก —","ห้องพักรายคืน (500 ฿/คืน)","ห้องพักชั่วคราว (250 ฿/3 ชั่วโมง)"].map(o => <option key={o} className="bg-white">{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">Special Request</label>
                  <textarea
                    rows={3}
                    placeholder="Anniversary, dietary requirements, airport transfer..."
                    className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="shimmer w-full py-4 bg-[#B8935A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#D4A96A] transition-colors"
                >
                  Send Reservation Request
                </button>
                <p className="text-center text-xs text-[#7A6E62]">No payment required at this stage · Response within 2 hours</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-0">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
          <div className="bg-white border border-black/10 px-10 md:px-16 py-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#B8935A]">Getting Here</span>
            <div className="w-10 h-px bg-[#B8935A] my-4" />
            <h2 className="text-[2rem] text-[#1E1812] mb-8" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              How to <em className="italic text-[#8B6830]">arrive</em>
            </h2>
            {[
              ["ที่อยู่","77/2-4 หมู่ที่ 7 ต.หัวสำโรง อ.แปลงยาว จ.ฉะเชิงเทรา 24190"],
              ["โทรศัพท์","081-257-5225"],
              ["LINE","@banrimklong772"],
              ["Facebook","บ้านริมคลอง รีสอร์ท"],
            ].map(([l,v]) => (
              <div key={l} className="mb-6">
                <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-1">{l}</div>
                <div className="text-[#7A6E62] text-sm leading-relaxed">{v}</div>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="tel:0812575225" className="shimmer inline-block px-6 py-2.5 border border-[rgba(30,24,18,0.2)] text-[#1E1812] text-xs tracking-[0.2em] uppercase hover:border-[#B8935A] hover:text-[#B8935A] transition-colors">
                โทรสอบถาม
              </Link>
              <Link href="https://line.me/ti/p/~banrimklong772" target="_blank" rel="noopener noreferrer"
                className="shimmer inline-flex items-center gap-2 px-6 py-2.5 bg-[#00B900] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#00A000] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINE
              </Link>
            </div>
          </div>
          <div className="min-h-[420px]">
            <iframe
              src="https://maps.google.com/maps?q=77/2-4+%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%88+7+%E0%B8%95.%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%AA%E0%B8%B3%E0%B9%82%E0%B8%A3%E0%B8%87+%E0%B8%AD.%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%A2%E0%B8%B2%E0%B8%A7+%E0%B8%88.%E0%B8%89%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%B4%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%A3%E0%B8%B2+24190&output=embed&hl=th&z=15"
              className="w-full h-full min-h-[420px] border-0"
              style={{ filter: "grayscale(0.3) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              title="Banrimklong Resort Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, id, type = "text", placeholder = "", inputMode }: { label: string; id: string; type?: string; placeholder?: string; inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"] }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        inputMode={inputMode}
        className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-base placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors"
      />
    </div>
  );
}
