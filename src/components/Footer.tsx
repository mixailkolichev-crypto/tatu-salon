import React from 'react';
import { STUDIO_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#040404] text-neutral-300 py-6 border-t border-white/10 text-xs font-sans-clean tracking-wider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Left */}
        <div className="w-full md:w-auto text-neutral-400 font-light">
          © Скультура, {STUDIO_INFO.year}
        </div>

        {/* Center-Left */}
        <div className="w-full md:w-auto text-neutral-300 font-light">
          {STUDIO_INFO.address}
        </div>

        {/* Center-Right */}
        <div className="w-full md:w-auto text-neutral-300 font-light">
          <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
            {STUDIO_INFO.phone}
          </a>
        </div>

        {/* Right */}
        <div className="w-full md:w-auto flex items-center justify-center md:justify-end space-x-6 text-neutral-300 font-light">
          <a
            href="https://t.me/skulptura_tattoo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Telegram
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
