import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { STUDIO_IMAGES, STUDIO_INFO } from '../data/studioData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  activeSection = '01',
}) => {
  const scrollToNext = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-between bg-transparent overflow-hidden select-none"
    >
      {/* Hero Vignette Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-[#080808]/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-[#080808]/15 to-transparent"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 min-h-screen flex flex-col justify-between">
        <div className="my-auto max-w-2xl pt-12 md:pt-20">
          {/* Tag above title */}
          <p className="text-[11px] md:text-xs tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-4 md:mb-6">
            {STUDIO_INFO.heroTag}
          </p>

          {/* Main Title */}
          <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.12em] text-white uppercase leading-none mb-6 md:mb-8 drop-shadow-lg">
            СКУЛЬПТУРА
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-base font-sans-clean font-light tracking-[0.18em] text-neutral-300 mb-10 md:mb-12 max-w-lg leading-relaxed">
            {STUDIO_INFO.tagline}
          </p>

          {/* Action Link: ЗАПИСАТЬСЯ → */}
          <button
            onClick={onOpenBooking}
            className="group inline-flex items-center space-x-4 text-xs md:text-sm tracking-[0.3em] uppercase font-sans-clean font-light text-white border-b border-white/40 pb-2 hover:border-white transition-all cursor-pointer"
          >
            <span>ЗАПИСАТЬСЯ</span>
            <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Bottom Right Scroll Indicator */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex flex-col items-center text-neutral-400 hover:text-white transition-colors cursor-pointer"
             onClick={scrollToNext}>
          <span className="text-[10px] tracking-[0.3em] font-sans-clean uppercase mb-2">
            SCROLL
          </span>
          <ArrowDown className="w-4 h-4 text-white animate-bounce" />
        </div>

        {/* Right Side UI: Pagination & Progress line */}
        <div className="hidden md:flex absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-20 flex-col items-center space-y-6">
          <span className="text-xs font-sans-clean tracking-[0.2em] text-neutral-300 font-light">
            {activeSection} / 04
          </span>

          <div className="w-[1px] h-20 bg-white/20 relative flex flex-col justify-between items-center py-1">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeSection === '01' ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            ></span>
            <span
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                activeSection === '02' ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            ></span>
            <span
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                activeSection === '03' ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            ></span>
            <span
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                activeSection === '04' ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};
