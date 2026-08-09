import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section
      id="contacts"
      className="relative w-full bg-[#080808]/85 backdrop-blur-sm text-white py-20 md:py-28 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-4">
                СВЯЗАТЬСЯ С НАМИ
              </p>
              <h2 className="font-serif-display text-4xl md:text-6xl font-light text-white mb-6">
                КОНТАКТЫ
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 font-sans-clean tracking-widest leading-relaxed max-w-md">
                Студия находится в историческом центре Москвы. Ждем вас на персональную консультацию и разработку индивидуального эскиза.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-white/10 text-xs md:text-sm font-sans-clean tracking-wider">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block tracking-widest mb-1">Адрес студии</span>
                  <p className="text-white font-light">{STUDIO_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block tracking-widest mb-1">Телефон / WhatsApp</span>
                  <a href={`tel:${STUDIO_INFO.phone}`} className="text-white font-light hover:underline">
                    {STUDIO_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase block tracking-widest mb-1">Режим работы</span>
                  <p className="text-white font-light">{STUDIO_INFO.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-6 text-xs tracking-widest uppercase font-sans-clean">
              <a
                href="https://t.me/skulptura_tattoo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-neutral-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Location Map & Quick Action Card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0b0b0b] border border-white/5 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 font-serif-display text-9xl pointer-events-none">
              21
            </div>

            <div>
              <h3 className="font-serif-display text-2xl font-light text-white mb-3">
                Записаться на сеанс
              </h3>
              <p className="text-xs text-neutral-400 font-sans-clean tracking-wider leading-relaxed mb-8">
                Оставьте заявку, и наш администратор свяжется с вами в течение 15 минут для уточнения удобного времени.
              </p>
            </div>

            {/* Visual Location Frame Mockup */}
            <div className="relative aspect-[16/9] bg-[#121212] border border-white/10 mb-8 flex items-center justify-center overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center filter grayscale opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80')",
                }}
              ></div>
              <div className="relative z-10 text-center p-6 bg-black/80 backdrop-blur-md border border-white/10 max-w-xs">
                <MapPin className="w-6 h-6 text-white mx-auto mb-2 animate-bounce" />
                <p className="text-xs font-sans-clean tracking-widest text-white uppercase">
                  Москва, Покровка 21
                </p>
                <p className="text-[10px] text-neutral-400 mt-1">м. Чистые пруды / м. Китай-город</p>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-4 bg-white text-black text-xs font-sans-clean tracking-[0.3em] uppercase hover:bg-neutral-200 transition-colors font-medium cursor-pointer"
            >
              Записаться в один клик
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
