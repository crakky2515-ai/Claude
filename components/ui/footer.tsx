import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1812] text-white/60 pt-16 pb-8 px-8 md:px-16 mt-auto">
      <div className="max-w-screen-xl mx-auto">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pb-14 border-b border-white/10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-1">
              <span
                className="text-white text-[1.6rem] tracking-widest"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
              >
                Banrimklong
              </span>
              <span
                className="text-[#D4A96A] text-[1.6rem] tracking-widest ml-2"
                style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 300 }}
              >
                Resort
              </span>
            </div>
            <p className="text-white/40 text-xs tracking-[0.15em] uppercase mt-1 mb-5">
              Chachoengsao, Thailand
            </p>
            <p
              className="text-white/55 text-[1.05rem] leading-snug italic mb-6"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Where silence<br />becomes luxury.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/banrimklong" target="_blank" rel="noopener noreferrer"
                className="text-[0.58rem] tracking-[0.2em] uppercase text-white/40 hover:text-[#D4A96A] transition-colors">
                Instagram
              </a>
              <span className="text-white/20">·</span>
              <span className="text-[0.58rem] tracking-[0.2em] uppercase text-white/40">
                Facebook: บ้านริมคลอง รีสอร์ท
              </span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[0.58rem] tracking-[0.22em] uppercase text-[#D4A96A] mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/rooms", label: "Rooms & Suites" },
                { href: "/#experience", label: "Experiences" },
                { href: "/contact", label: "Reservations" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs text-white/50 hover:text-white tracking-wide transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <p className="text-[0.58rem] tracking-[0.22em] uppercase text-[#D4A96A] mb-5">Experiences</p>
            <ul className="flex flex-col gap-3">
              {["Riverside Relaxation", "Morning Serenity", "Family Getaway", "Local Charm"].map(exp => (
                <li key={exp}>
                  <span className="text-xs text-white/50 tracking-wide">{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.58rem] tracking-[0.22em] uppercase text-[#D4A96A] mb-5">Contact</p>
            <ul className="flex flex-col gap-3 text-xs text-white/50">
              <li>
                <p className="text-[0.58rem] tracking-widest uppercase text-white/30 mb-0.5">Phone</p>
                <a href="tel:0809944891" className="hover:text-white transition-colors">080-994-4891</a>
              </li>
              <li>
                <p className="text-[0.58rem] tracking-widest uppercase text-white/30 mb-0.5">Email</p>
                <a href="mailto:banrimklong_resort@hotmail.com" className="hover:text-white transition-colors">banrimklong_resort@hotmail.com</a>
              </li>
              <li>
                <p className="text-[0.58rem] tracking-widest uppercase text-white/30 mb-0.5">Address</p>
                <span>123 Rim Nam Rd, Pleangyao<br />Chachoengsao 24190</span>
              </li>
              <li>
                <p className="text-[0.58rem] tracking-widest uppercase text-white/30 mb-0.5">Hours</p>
                <span>Daily 08:00 – 22:00 ICT</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-[0.6rem] tracking-[0.15em] uppercase text-white/25">
          <span>© 2025 Banrimklong Resort · All Rights Reserved</span>
          <span className="text-[#D4A96A]/40">✦</span>
          <span>Pleangyao · Chachoengsao · Thailand</span>
        </div>
      </div>
    </footer>
  );
}
