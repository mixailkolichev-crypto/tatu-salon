/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { MastersSection } from './components/MastersSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { BookingModal } from './components/BookingModal';
import { PortfolioModal } from './components/PortfolioModal';
import { AboutModal } from './components/AboutModal';
import { MobileMenu } from './components/MobileMenu';

import { Master, PortfolioItem, ActiveSection } from './types';
import { PORTFOLIO_ITEMS, STUDIO_IMAGES } from './data/studioData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedMasterForBooking, setSelectedMasterForBooking] = useState<
    string | undefined
  >(undefined);

  const [selectedPortfolioItem, setSelectedPortfolioItem] =
    useState<PortfolioItem | null>(null);

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState<ActiveSection>('01');

  // Track active section on vertical scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      const heroEl = document.getElementById('hero');
      const aboutEl = document.getElementById('about');
      const mastersEl = document.getElementById('masters');
      const portfolioEl = document.getElementById('portfolio');
      const contactsEl = document.getElementById('contacts');

      if (contactsEl && scrollPos >= contactsEl.offsetTop - 100) {
        setActiveSection('04');
      } else if (portfolioEl && scrollPos >= portfolioEl.offsetTop - 100) {
        setActiveSection('03');
      } else if (aboutEl && scrollPos >= aboutEl.offsetTop - 100) {
        setActiveSection('02');
      } else {
        setActiveSection('01');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (masterId?: string) => {
    setSelectedMasterForBooking(masterId);
    setIsBookingOpen(true);
  };

  const handleOpenMasterDetail = (master: Master) => {
    handleOpenBooking(master.id);
  };

  const handleBookFromPortfolio = (item: PortfolioItem) => {
    handleOpenBooking();
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e0e0e0] font-sans antialiased selection:bg-white selection:text-black relative">
      {/* Global Full-Site Background Video */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={STUDIO_IMAGES.hero}
          className="w-full h-full object-cover object-center filter brightness-95 contrast-[1.05] scale-105"
        >
          <source src={STUDIO_IMAGES.heroVideo} type="video/mp4" />
        </video>
        {/* Lighter ambient overlay to make video bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/20 via-[#080808]/45 to-[#080808]/75"></div>
      </div>

      {/* Top Header */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Single Page Scroll Content */}
      <main className="relative z-10">
        {/* 01: Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          activeSection={activeSection}
        />

        {/* 02: O Студии Section */}
        <AboutSection
          onOpenAboutModal={() => setIsAboutModalOpen(true)}
        />

        {/* Masters Section */}
        <MastersSection
          onSelectMasterForBooking={(masterId) => handleOpenBooking(masterId)}
          onOpenMasterDetail={handleOpenMasterDetail}
        />

        {/* 03: Портфолио Section */}
        <PortfolioSection
          onOpenPortfolioLightbox={(item) => setSelectedPortfolioItem(item)}
          onOpenFullGallery={() => setSelectedPortfolioItem(PORTFOLIO_ITEMS[0])}
        />

        {/* 04: Контакты Section */}
        <ContactSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedMasterId={selectedMasterForBooking}
      />

      <PortfolioModal
        item={selectedPortfolioItem}
        onClose={() => setSelectedPortfolioItem(null)}
        onBookItem={handleBookFromPortfolio}
      />

      <AboutModal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
