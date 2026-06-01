"use client";
import * as React from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

interface SmoothScrollHeroProps {
  /** Height of the scroll section in pixels @default 1500 */
  scrollHeight?: number;
  /** Background image URL for desktop (ignored when videoSrc is set) */
  desktopImage?: string;
  /** Background image URL for mobile (ignored when videoSrc is set) */
  mobileImage?: string;
  /** Video source URL — when provided, replaces both image props */
  videoSrc?: string;
  /** Initial clip path percentage @default 25 */
  initialClipPercentage?: number;
  /** Final clip path percentage @default 75 */
  finalClipPercentage?: number;
  /** Optional content to render inside the hero (overlaid) */
  children?: React.ReactNode;
}

const SmoothScrollHeroBackground: React.FC<Required<Omit<SmoothScrollHeroProps, "children">>> = ({
  scrollHeight,
  desktopImage,
  mobileImage,
  videoSrc,
  initialClipPercentage,
  finalClipPercentage,
}) => {
  const { scrollY } = useScroll();

  const clipStart = useTransform(scrollY, [0, scrollHeight], [initialClipPercentage, 0]);
  const clipEnd   = useTransform(scrollY, [0, scrollHeight], [finalClipPercentage, 100]);
  const clipPath  = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`;
  const backgroundSize = useTransform(scrollY, [0, scrollHeight + 500], ["170%", "100%"]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden bg-black"
      style={{ clipPath, willChange: "transform, opacity" }}
    >
      {videoSrc ? (
        /* Video background */
        <motion.div className="absolute inset-0" style={{ scale: backgroundSize as unknown as number }}>
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      ) : (
        <>
          {/* Mobile background image */}
          <motion.div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage: `url(${mobileImage})`,
              backgroundSize,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Desktop background image */}
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: `url(${desktopImage})`,
              backgroundSize,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </>
      )}
      {/* Children rendered inside the sticky clipped area */}
    </motion.div>
  );
};

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1500,
  desktopImage = "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
  mobileImage = "https://images.unsplash.com/photo-1511207538754-e8555f2bc187",
  videoSrc,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
  children,
}) => {
  return (
    <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
      {/* Clipped video/image background */}
      <SmoothScrollHeroBackground
        scrollHeight={scrollHeight}
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        videoSrc={videoSrc ?? ""}
        initialClipPercentage={initialClipPercentage}
        finalClipPercentage={finalClipPercentage}
      />
      {/* Children: sticky overlay OUTSIDE clip-path so text is never clipped */}
      {children && (
        <div className="sticky top-0 h-screen w-full pointer-events-none"
             style={{ marginTop: `-100vh` }}>
          <div className="absolute inset-0 flex items-end pb-20 md:pb-32 px-8 md:px-16 pointer-events-auto">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default SmoothScrollHero;
