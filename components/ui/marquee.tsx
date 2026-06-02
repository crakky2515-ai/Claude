"use client";

const ITEMS = [
  "Chachoengsao",
  "Heritage Retreat",
  "Riverside Sanctuary",
  "Private Suites",
  "Thai Wellness",
  "Canal Journeys",
  "Farm to Table",
  "Firefly Evenings",
  "Ancient Waterways",
  "Quiet Luxury",
];

export function Marquee() {
  const track = ITEMS.map(item => `${item} ✦`).join("  ");
  const doubled = `${track}  ${track}  `;

  return (
    <div className="overflow-hidden border-y border-[rgba(184,147,90,0.18)] py-3.5 bg-[#F7F3ED]">
      <div className="marquee-track whitespace-nowrap">
        <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#B8935A]/70 pr-8">
          {doubled}
        </span>
        <span className="text-[0.6rem] tracking-[0.28em] uppercase text-[#B8935A]/70 pr-8" aria-hidden>
          {doubled}
        </span>
      </div>
    </div>
  );
}
