"use client";
import { useState } from "react";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-gradient-to-t from-[#09080A] via-[rgba(9,8,10,0.4)] to-transparent" />
        <div className="relative z-10 px-8 md:px-16 pb-16">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Reservations &amp; Enquiries</span>
          <div className="w-10 h-px bg-[#C9A35C] my-4" />
          <h1
            className="text-[clamp(2.8rem,6vw,5rem)] leading-tight text-[#EDE0C8]"
            style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
          >
            Begin your <em className="italic text-[#E8C990]">arrival</em>
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Get in Touch</span>
            <div className="w-10 h-px bg-[#C9A35C] my-4" />
            <h2
              className="text-[clamp(2rem,4vw,3rem)] text-[#EDE0C8] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              We are <em className="italic text-[#E8C990]">here for you</em>
            </h2>
            <p className="text-[#9C8E7A] text-sm leading-loose mb-8">
              Our reservations team is available daily from 08:00 to 22:00 (ICT +7). We respond to all enquiries within 2 hours.
            </p>

            {[
              { icon: "✦", label: "Address",    val: "123 Rim Nam Road, Pleangyao\nChachoengsao 24190, Thailand" },
              { icon: "✆", label: "Telephone",  val: "086-846-8786\nDaily 08:00 – 22:00 ICT" },
              { icon: "✉", label: "Email",      val: "stay@banrimklong.com\nevents@banrimklong.com" },
              { icon: "◈", label: "Social",     val: "LINE: @banrimklong\nInstagram: @banrimklong" },
            ].map(({ icon, label, val }) => (
              <div key={label} className="flex gap-5 py-5 border-b border-white/8 first:border-t">
                <div className="w-11 h-11 border border-[rgba(201,163,92,0.18)] flex items-center justify-center text-[#C9A35C] shrink-0">{icon}</div>
                <div>
                  <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-1">{label}</div>
                  <div className="text-[#9C8E7A] text-sm leading-relaxed whitespace-pre-line">{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-[#151316] border border-white/8 p-10">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Reservation Request</span>
            <h3
              className="text-[1.8rem] text-[#EDE0C8] mt-3 mb-8"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Reserve Your Stay
            </h3>

            {sent ? (
              <div className="text-center py-12">
                <div className="text-[#C9A35C] text-4xl mb-4">✦</div>
                <p className="text-[#EDE0C8] font-serif text-xl mb-2" style={{ fontFamily: "var(--font-cormorant), serif" }}>Request Received</p>
                <p className="text-[#9C8E7A] text-sm">We will confirm availability within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First Name" id="fname" placeholder="Kannika" />
                  <Field label="Last Name"  id="lname" placeholder="Siriwong" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Email"        id="email" type="email" placeholder="you@email.com" />
                  <Field label="Phone / LINE" id="phone" placeholder="086-000-0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Check-in"  id="checkin"  type="date" />
                  <Field label="Check-out" id="checkout" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-2">Guests</label>
                    <select className="w-full bg-transparent border border-[rgba(201,163,92,0.18)] px-4 py-3 text-[#EDE0C8] text-sm outline-none focus:border-[#C9A35C] transition-colors appearance-none">
                      {["1 Guest","2 Guests","3 Guests","4 Guests","5+ Guests"].map(o => <option key={o} className="bg-[#151316]">{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-2">Room Type</label>
                    <select className="w-full bg-transparent border border-[rgba(201,163,92,0.18)] px-4 py-3 text-[#EDE0C8] text-sm outline-none focus:border-[#C9A35C] transition-colors appearance-none">
                      {["— Please Select —","River Villa (฿18,000/night)","Grand Heritage Suite (฿12,500/night)","Garden Pool Suite (฿9,800/night)","Deluxe Garden Room (฿6,800/night)","Flexible — Advise Me"].map(o => <option key={o} className="bg-[#151316]">{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-2">Special Request</label>
                  <textarea
                    rows={3}
                    placeholder="Anniversary, dietary requirements, airport transfer..."
                    className="w-full bg-transparent border border-[rgba(201,163,92,0.18)] px-4 py-3 text-[#EDE0C8] text-sm placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#C9A35C] text-[#09080A] text-xs tracking-[0.2em] uppercase hover:bg-[#E8C990] transition-colors"
                >
                  Send Reservation Request
                </button>
                <p className="text-center text-xs text-[#9C8E7A]">No payment required at this stage · Response within 2 hours</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-0">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
          <div className="bg-[#151316] border border-white/8 px-10 md:px-16 py-16">
            <span className="text-xs tracking-[0.25em] uppercase text-[#C9A35C]">Getting Here</span>
            <div className="w-10 h-px bg-[#C9A35C] my-4" />
            <h2 className="text-[2rem] text-[#EDE0C8] mb-8" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              How to <em className="italic text-[#E8C990]">arrive</em>
            </h2>
            {[
              ["By Private Car","Take Highway 304 east from Bangkok. Turn onto Route 3101 toward Pleangyao. (90 min from Bangkok)"],
              ["By Railway","Eastern Line to Chachoengsao Junction. Our complimentary longtail boat meets all arriving trains."],
              ["Complimentary Transfer","Free luxury vehicle from Suvarnabhumi or Don Mueang for stays of 3 nights+."],
            ].map(([l,v]) => (
              <div key={l} className="mb-6">
                <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-1">{l}</div>
                <div className="text-[#9C8E7A] text-sm leading-relaxed">{v}</div>
              </div>
            ))}
            <Link href="tel:0868468786" className="inline-block mt-2 px-6 py-2.5 border border-[rgba(237,224,200,0.2)] text-[#EDE0C8] text-xs tracking-[0.2em] uppercase hover:border-[#C9A35C] hover:text-[#C9A35C] transition-colors">
              Arrange Transfer
            </Link>
          </div>
          <div className="min-h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247292.49!2d101.0775!3d13.6904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b4f5d78e63b7%3A0xb8bb2e5c6e1a72f0!2sChachoengsao%2C%20Thailand!5e0!3m2!1sen!2sth!4v1"
              className="w-full h-full min-h-[420px] border-0"
              style={{ filter: "grayscale(1) invert(1) brightness(0.55) sepia(0.3) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              title="Banrimklong Resort Location"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 py-10 px-8 md:px-16 mt-0">
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

function Field({ label, id, type = "text", placeholder = "" }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#C9A35C] mb-2">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border border-[rgba(201,163,92,0.18)] px-4 py-3 text-[#EDE0C8] text-sm placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors"
      />
    </div>
  );
}
