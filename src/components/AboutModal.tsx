import React from 'react';
import { X, ShieldCheck, Sparkles, Award, Coffee, Eye } from 'lucide-react';
import { STUDIO_INFO, STUDIO_IMAGES } from '../data/studioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#0b0b0b] border border-white/10 p-6 md:p-10 text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-2">
            СКУЛЬПТУРА • МОСКВА
          </p>
          <h3 className="font-serif-display text-3xl md:text-5xl font-light">
            Философия & Стандарты
          </h3>
        </div>

        <div className="space-y-8 text-xs md:text-sm font-sans-clean tracking-wider text-neutral-300 font-light leading-relaxed">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
            <img
              src={STUDIO_IMAGES.interior}
              alt="Интерьер Скультура"
              className="w-full h-full object-cover filter brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <h4 className="text-white font-serif-display text-2xl font-light mb-3">
              Индивидуальность бескомпромиссна
            </h4>
            <p className="mb-4">
              Студия «Скультура» создана как арт-галерея, где вместо холста используется кожа человека. Мы категорически не используем чужие шаблоны или скачанные из интернета эскизы. Каждая работа проектируется с нуля под ваши пропорции, анатомию движения и характер.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-white/10 py-6">
            <div className="flex items-start space-x-4">
              <ShieldCheck className="w-6 h-6 text-white shrink-0 mt-1" />
              <div>
                <h5 className="text-white font-medium mb-1 uppercase tracking-widest text-xs">
                  Медицинская стерильность
                </h5>
                <p className="text-neutral-400 text-xs">
                  Автоклавы класса B, одноразовые картриджи Cheyenne и пигменты премиум-класса с сертификацией ЕС.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Coffee className="w-6 h-6 text-white shrink-0 mt-1" />
              <div>
                <h5 className="text-white font-medium mb-1 uppercase tracking-widest text-xs">
                  Закрытый Lounge & Забота
                </h5>
                <p className="text-neutral-400 text-xs">
                  Уединенные рабочие зоны, премиальный спешелти кофе, проектор и анатомические кресла для комфортных длительных сеансов.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <span className="text-xs text-neutral-400 tracking-widest uppercase">
              Москва, Покровка 21
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-sans-clean text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Записаться на консультацию
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
