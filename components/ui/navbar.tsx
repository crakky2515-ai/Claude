"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          scrolled ? "py-4 bg-[rgba(9,8,10,0.96)] backdrop-blur-md border-b border-[rgba(201,163,92,0.18)]" : "py-6"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-[1.4rem] tracking-widest text-[#EDE0C8]"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          Banrimklong <span className="text-[#C9A35C]">Resort</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[0.72rem] tracking-[0.18em] uppercase transition-colors relative group ${
                  pathname === href ? "text-[#C9A35C]" : "text-[#9C8E7A] hover:text-[#EDE0C8]"
                }`}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px bg-[#C9A35C] w-0 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2.5 border border-[#C9A35C] text-[#C9A35C] text-[0.7rem] tracking-[0.2em] uppercase hover:bg-[#C9A35C] hover:text-[#09080A] transition-all"
        >
          Reserve
        </Link>

        {/* Burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#EDE0C8] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block w-6 h-px bg-[#EDE0C8] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#EDE0C8] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#09080A] flex flex-col items-center justify-center gap-10 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-[2.5rem] text-[#EDE0C8] hover:text-[#C9A35C] transition-colors"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-[#C9A35C] text-sm tracking-widest uppercase mt-4"
        >
          Reserve a Stay
        </Link>
      </div>
    </>
  );
}
