import React, { useState, useEffect } from 'react';
import {
  IconHome,
  IconInfoCircle,
  IconUsers,
  IconPhoto,
  IconPhoneCall,
  IconCalendarEvent,
} from '@tabler/icons-react';
import { FloatingDock, DockItem } from './ui/floating-dock';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenMobileMenu: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenMobileMenu,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navDockItems: DockItem[] = [
    {
      title: 'Главная',
      icon: <IconHome className="w-full h-full text-neutral-300" />,
      href: '#hero',
      onClick: () => scrollToSection('hero'),
    },
    {
      title: 'О студии',
      icon: <IconInfoCircle className="w-full h-full text-neutral-300" />,
      href: '#about',
      onClick: () => scrollToSection('about'),
    },
    {
      title: 'Мастера',
      icon: <IconUsers className="w-full h-full text-neutral-300" />,
      href: '#masters',
      onClick: () => scrollToSection('masters'),
    },
    {
      title: 'Портфолио',
      icon: <IconPhoto className="w-full h-full text-neutral-300" />,
      href: '#portfolio',
      onClick: () => scrollToSection('portfolio'),
    },
    {
      title: 'Контакты',
      icon: <IconPhoneCall className="w-full h-full text-neutral-300" />,
      href: '#contacts',
      onClick: () => scrollToSection('contacts'),
    },
    {
      title: 'Запись',
      icon: <IconCalendarEvent className="w-full h-full text-neutral-300" />,
      href: '#booking',
      onClick: onOpenBooking,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent py-4 md:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
          className="group flex flex-col cursor-pointer select-none z-10"
        >
          <span className="font-serif-display text-lg md:text-xl tracking-[0.35em] uppercase text-white font-light group-hover:text-neutral-300 transition-colors">
            С К У Л Ь П Т У Р А
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.45em] uppercase text-neutral-400 font-sans-clean font-normal mt-0.5">
            ТАТУ СТУДИЯ
          </span>
        </a>

        {/* Floating Dock Navigation - Central Header */}
        <div className="flex items-center justify-center">
          <FloatingDock items={navDockItems} />
        </div>

        {/* Right Action & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 z-10">
          <button
            onClick={onOpenBooking}
            className="hidden lg:inline-flex items-center justify-center px-5 py-2 text-[11px] tracking-[0.25em] uppercase font-sans-clean font-light border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer shadow-lg"
          >
            Записаться
          </button>

          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 text-white hover:text-neutral-300 transition-colors focus:outline-none cursor-pointer"
            aria-label="Открыть меню"
          >
            <div className="w-6 h-4 flex flex-col justify-between items-end">
              <span className="w-6 h-[1px] bg-white"></span>
              <span className="w-4 h-[1px] bg-white"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

