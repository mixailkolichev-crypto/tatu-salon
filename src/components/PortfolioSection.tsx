import React, { useState } from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onOpenPortfolioLightbox: (item: PortfolioItem) => void;
  onOpenFullGallery: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenPortfolioLightbox,
  onOpenFullGallery,
}) => {
  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#080808]/80 backdrop-blur-sm text-white py-20 md:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <h2 className="font-sans-clean text-xs md:text-sm tracking-[0.35em] uppercase text-neutral-300 font-light">
            ПОРТФОЛИО
          </h2>

          <button
            onClick={onOpenFullGallery}
            className="group inline-flex items-center space-x-3 text-xs md:text-sm tracking-[0.25em] uppercase font-sans-clean font-light text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Смотреть работы</span>
            <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-white transform group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* 5 Gallery Images Grid (Exactly matching image_0 layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenPortfolioLightbox(item)}
              className="group relative aspect-[3/4] bg-[#0d0d0d] overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-left">
                <div className="flex justify-end">
                  <span className="p-2 bg-black/80 rounded-full text-white/90">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-neutral-400 font-sans-clean block mb-1">
                    {item.style}
                  </span>
                  <h4 className="font-serif-display text-base font-light text-white leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-neutral-300 font-light">
                    {item.master}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
