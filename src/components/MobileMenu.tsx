import React from 'react';
import { X, ArrowRight, Instagram, Send, MapPin, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080808] text-white flex flex-col justify-between p-6 md:p-12 overflow-y-auto">
      {/* Top Header in Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex flex-col">
          <span className="font-serif-display text-lg tracking-[0.3em] uppercase">
            С К У Л Ь П Т У Р А
          </span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-neutral-400">
            ТАТУ СТУДИЯ
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white hover:text-neutral-300 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Nav Links */}
      <div className="my-auto py-10 space-y-6">
        <button
          onClick={() => scrollToSection('hero')}
          className="block text-3xl font-serif-display tracking-widest text-left font-light hover:text-neutral-400 transition-colors cursor-pointer"
        >
          01 / Главная
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="block text-3xl font-serif-display tracking-widest text-left font-light hover:text-neutral-400 transition-colors cursor-pointer"
        >
          02 / О студии
        </button>
        <button
          onClick={() => scrollToSection('masters')}
          className="block text-3xl font-serif-display tracking-widest text-left font-light hover:text-neutral-400 transition-colors cursor-pointer"
        >
          03 / Мастера
        </button>
        <button
          onClick={() => scrollToSection('portfolio')}
          className="block text-3xl font-serif-display tracking-widest text-left font-light hover:text-neutral-400 transition-colors cursor-pointer"
        >
          04 / Портфолио
        </button>
        <button
          onClick={() => scrollToSection('contacts')}
          className="block text-3xl font-serif-display tracking-widest text-left font-light hover:text-neutral-400 transition-colors cursor-pointer"
        >
          05 / Контакты
        </button>
      </div>

      {/* Bottom Info & Action */}
      <div className="space-y-6 border-t border-white/10 pt-6">
        <button
          onClick={() => {
            onClose();
            onOpenBooking();
          }}
          className="w-full py-4 bg-white text-black font-sans-clean text-xs uppercase tracking-[0.3em] font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
        >
          Записаться онлайн
        </button>

        <div className="flex items-center justify-between text-xs text-neutral-400 tracking-wider">
          <span>{STUDIO_INFO.address}</span>
          <span>{STUDIO_INFO.phone}</span>
        </div>
      </div>
    </div>
  );
};
