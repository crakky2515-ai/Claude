"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // On inner pages (rooms/contact) nav starts scrolled
  const isInnerPage = pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isScrolled = scrolled || isInnerPage;

  const links = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/#experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 transition-all duration-500 ${
          isScrolled
            ? "py-3.5 bg-[rgba(247,243,237,0.97)] backdrop-blur-md border-b border-[rgba(184,147,90,0.2)] shadow-sm"
            : "py-6"
        }`}
      >
        <Link
          href="/"
          className={`font-serif text-[1.4rem] tracking-widest transition-colors ${isScrolled ? "text-[#1E1812]" : "text-[#F7F3ED]"}`}
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Banrimklong <span className="text-[#B8935A]">Resort</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.72rem] tracking-[0.18em] uppercase transition-colors relative group ${
                  pathname === href
                    ? "text-[#B8935A]"
                    : isScrolled
                    ? "text-[#7A6E62] hover:text-[#1E1812]"
                    : "text-[rgba(247,243,237,0.75)] hover:text-[#F7F3ED]"
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#B8935A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`shimmer hidden md:inline-block px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-all border ${
            isScrolled
              ? "border-[#B8935A] text-[#B8935A] hover:bg-[#B8935A] hover:text-white"
              : "border-[rgba(247,243,237,0.5)] text-[#F7F3ED] hover:border-[#F7F3ED]"
          }`}
        >
          Reserve
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0,1,2].map((i) => (
            <span key={i} className={`block w-6 h-px transition-all duration-300 ${isScrolled ? "bg-[#1E1812]" : "bg-[#F7F3ED]"} ${
              i === 0 && menuOpen ? "translate-y-[6px] rotate-45" :
              i === 1 && menuOpen ? "opacity-0" :
              i === 2 && menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F7F3ED] flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[2.5rem] text-[#1E1812] hover:text-[#B8935A] transition-colors"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-[#B8935A] text-sm tracking-widest uppercase mt-4"
        >
          Reserve a Stay
        </Link>
      </div>
    </>
  );
}
