"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("https://formspree.io/f/meedydrq", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
      }
    } catch {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setLoading(false);
    }
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
              { icon: "✦", label: "Address",   val: "77/2-4 หมู่ที่ 7 ต.หัวสำโรง อ.แปลงยาว\nChachoengsao, Thailand" },
              { icon: "✆", label: "Telephone", val: "080-994-4891\nDaily 08:00 – 22:00 ICT" },
              { icon: "✉", label: "Email",     val: "banrimklong_resort@hotmail.com" },
              { icon: "◈", label: "LINE",      val: "@banrimklong772" },
              { icon: "◈", label: "Facebook",  val: "บ้านริมคลอง รีสอร์ท" },
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

                {/* Deposit notice */}
                <div className="flex items-start gap-3 px-4 py-3.5 border-l-2 border-[#B8935A]" style={{ background: "linear-gradient(90deg,rgba(184,147,90,0.07),transparent)" }}>
                  <span className="text-[#B8935A] text-base leading-none mt-0.5">✦</span>
                  <div>
                    <p className="text-[0.68rem] tracking-[0.15em] uppercase text-[#B8935A] font-medium mb-1">มีค่ามัดจำการจอง</p>
                    <div className="flex gap-4 flex-wrap">
                      <span className="text-[0.78rem] text-[#1E1812]">ค้างคืน <strong className="text-[#B8935A]">฿200</strong></span>
                      <span className="text-[#9C8E7A] text-[0.72rem]">·</span>
                      <span className="text-[0.78rem] text-[#1E1812]">ชั่วคราว <strong className="text-[#B8935A]">฿100</strong></span>
                    </div>
                    <p className="text-[0.68rem] text-[#7A6E62] mt-1">ทีมงานจะส่ง QR PromptPay ยืนยันผ่าน LINE หลังเช็กห้องว่าง</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="ชื่อ" id="fname" name="fname" placeholder="สมชาย" />
                  <Field label="นามสกุล" id="lname" name="lname" placeholder="ใจดี" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email" id="email" name="email" type="email" placeholder="you@email.com" />
                  <Field label="เบอร์โทร" id="phone" name="phone" placeholder="081-000-0000" inputMode="tel" />
                </div>

                {/* LINE ID — highlighted as required */}
                <div className="relative">
                  <label htmlFor="line_id" className="flex items-center gap-2 text-[0.62rem] tracking-[0.18em] uppercase mb-2">
                    <span className="text-[#B8935A]">ID LINE</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[0.55rem] tracking-widest uppercase font-medium" style={{ background: "#06C755", color: "#fff", borderRadius: 2 }}>
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-white shrink-0"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                      จำเป็น
                    </span>
                  </label>
                  <input
                    id="line_id"
                    name="line_id"
                    type="text"
                    placeholder="@yourlineid"
                    required
                    className="w-full bg-transparent px-4 py-3 text-[#1E1812] text-base placeholder-[#9C8E7A]/50 outline-none transition-colors"
                    style={{ border: "1px solid rgba(6,199,85,0.4)", boxShadow: "0 0 0 0px rgba(6,199,85,0)" }}
                    onFocus={e => (e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,199,85,0.12)")}
                    onBlur={e => (e.currentTarget.style.boxShadow = "0 0 0 0px rgba(6,199,85,0)")}
                  />
                  <p className="text-[0.62rem] text-[#7A6E62] mt-1.5">เราจะส่ง QR มัดจำและยืนยันการจองทาง LINE ของท่าน</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="เช็คอิน" id="checkin" name="checkin" type="date" />
                  <Field label="เช็คเอาท์" id="checkout" name="checkout" type="date" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">จำนวนผู้เข้าพัก</label>
                    <select name="guests" className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm outline-none focus:border-[#C9A35C] transition-colors">
                      {["1 คน","2 คน","3 คน","4 คน","5+ คน"].map(o => <option key={o} className="bg-white">{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">ประเภทห้อง</label>
                    <select name="room_type" className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm outline-none focus:border-[#C9A35C] transition-colors">
                      {["— กรุณาเลือก —","ห้องพักรายคืน (500 ฿/คืน)","ห้องพักชั่วคราว (250 ฿/3 ชั่วโมง)"].map(o => <option key={o} className="bg-white">{o}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">ข้อความเพิ่มเติม</label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="แจ้งความต้องการพิเศษ เช่น วันเกิด ฯลฯ"
                    className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-sm placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors resize-none"
                  />
                </div>
                {error && <p className="text-red-600 text-xs text-center">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="shimmer w-full py-4 bg-[#B8935A] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#D4A96A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "กำลังส่ง..." : "ส่งคำขอจอง"}
                </button>
                <p className="text-center text-xs text-[#7A6E62]">ทีมงานจะเช็กห้องว่างและส่ง QR มัดจำทาง LINE ภายใน 2 ชั่วโมง</p>
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
              ["โทรศัพท์","080-994-4891"],
              ["LINE","@banrimklong772"],
              ["Facebook","บ้านริมคลอง รีสอร์ท"],
            ].map(([l,v]) => (
              <div key={l} className="mb-6">
                <div className="text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-1">{l}</div>
                <div className="text-[#7A6E62] text-sm leading-relaxed">{v}</div>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 mt-4">
              <Link href="tel:0809944891" className="shimmer inline-block px-6 py-2.5 border border-[rgba(30,24,18,0.2)] text-[#1E1812] text-xs tracking-[0.2em] uppercase hover:border-[#B8935A] hover:text-[#B8935A] transition-colors">
                โทรสอบถาม
              </Link>
              <Link href="https://line.me/ti/p/~banrimklong772" target="_blank" rel="noopener noreferrer"
                className="shimmer inline-flex items-center gap-2 px-6 py-2.5 bg-[#00B900] text-white text-xs tracking-[0.2em] uppercase hover:bg-[#00A000] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
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

function Field({
  label, id, name, type = "text", placeholder = "", inputMode,
}: {
  label: string; id: string; name: string; type?: string; placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.62rem] tracking-[0.18em] uppercase text-[#B8935A] mb-2">{label}</label>
      <input
        id={id} name={name} type={type} placeholder={placeholder} inputMode={inputMode}
        className="w-full bg-transparent border border-[rgba(184,147,90,0.25)] px-4 py-3 text-[#1E1812] text-base placeholder-[#9C8E7A]/50 outline-none focus:border-[#C9A35C] transition-colors"
        style={type === "date" ? { colorScheme: "light" } : {}}
      />
    </div>
  );
}
