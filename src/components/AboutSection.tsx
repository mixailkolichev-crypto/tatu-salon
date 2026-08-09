import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { STUDIO_IMAGES, STUDIO_INFO } from '../data/studioData';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenAboutModal,
}) => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#080808]/80 backdrop-blur-sm text-white py-20 md:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8 pr-0 lg:pr-6">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-4">
                О СТУДИИ
              </p>

              <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.2] text-white tracking-wide">
                Место, где тату — не тренд, а часть тебя.
              </h2>
            </div>

            <p className="text-sm md:text-base font-sans-clean font-light text-neutral-300 leading-relaxed max-w-lg">
              {STUDIO_INFO.aboutDesc}
            </p>

            <div>
              <button
                onClick={onOpenAboutModal}
                className="group inline-flex items-center space-x-3 text-xs md:text-sm tracking-[0.25em] uppercase font-sans-clean font-light text-white border-b border-white/40 pb-1.5 hover:border-white transition-all cursor-pointer"
              >
                <span>Подробнее о студии</span>
                <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>

            {/* Quick highlights / features */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 text-neutral-400 text-xs font-sans-clean tracking-wider">
              <div>
                <span className="block text-white font-serif-display text-2xl font-light mb-1">100%</span>
                <span>Стерильно</span>
              </div>
              <div>
                <span className="block text-white font-serif-display text-2xl font-light mb-1">Top</span>
                <span>Мастера</span>
              </div>
              <div>
                <span className="block text-white font-serif-display text-2xl font-light mb-1">1:1</span>
                <span>Индивидуально</span>
              </div>
            </div>
          </div>

          {/* Right Side Image Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <img
                src={STUDIO_IMAGES.interior}
                alt="Интерьер тату-студии Скульптура"
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent opacity-60"></div>
              
              {/* Subtle floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0c0c0c]/90 backdrop-blur-md border border-white/10 p-4 flex items-center justify-between text-xs tracking-widest text-neutral-300">
                <span className="font-sans-clean font-light">МОСКВА • УЛ. ПОКРОВКА 21</span>
                <span className="font-serif-display italic text-white/80">Premium Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
