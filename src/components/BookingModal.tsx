import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, User, Palette, Phone, Send, Sparkles } from 'lucide-react';
import { MASTERS_DATA, TATTOO_STYLES, STUDIO_INFO } from '../data/studioData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMasterId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedMasterId,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    masterId: preselectedMasterId || 'any',
    style: TATTOO_STYLES[0],
    placement: 'Рука / Предплечье',
    size: 'Средний (10-15 см)',
    name: '',
    phone: '',
    telegramOrWhatsapp: '',
    comment: '',
    preferredDate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedMasterId) {
      setFormData((prev) => ({ ...prev, masterId: preselectedMasterId }));
    }
  }, [preselectedMasterId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#0c0c0c] border border-white/10 p-6 md:p-10 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <p className="text-[10px] tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-2">
                ОНЛАЙН-ЗАПИСЬ
              </p>
              <h3 className="font-serif-display text-3xl md:text-4xl font-light">
                Записаться на сеанс
              </h3>
              <p className="text-xs text-neutral-400 font-sans-clean tracking-wider mt-2">
                Заполните форму, и администратор свяжется с вами для консультации.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Master */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Выберите мастера
                </label>
                <select
                  value={formData.masterId}
                  onChange={(e) =>
                    setFormData({ ...formData, masterId: e.target.value })
                  }
                  className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40"
                >
                  <option value="any">Любой свободный мастер</option>
                  {MASTERS_DATA.map((master) => (
                    <option key={master.id} value={master.id}>
                      {master.name} ({master.specialty})
                    </option>
                  ))}
                </select>
              </div>

              {/* Style & Placement */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Стиль татуировки
                  </label>
                  <select
                    value={formData.style}
                    onChange={(e) =>
                      setFormData({ ...formData, style: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40"
                  >
                    {TATTOO_STYLES.map((style) => (
                      <option key={style} value={style}>
                        {style}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Место нанесения
                  </label>
                  <input
                    type="text"
                    placeholder="Например: Предплечье, Спина, Шея"
                    value={formData.placement}
                    onChange={(e) =>
                      setFormData({ ...formData, placement: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Александр"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                    Номер телефона *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>

              {/* Comment / Idea */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Описание идеи или эскиза
                </label>
                <textarea
                  rows={3}
                  placeholder="Опишите вашу задумку, размер или прикрепите референсы..."
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  className="w-full bg-[#141414] border border-white/10 px-4 py-3 text-xs tracking-wider text-white focus:outline-none focus:border-white/40 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-black font-sans-clean text-xs uppercase tracking-[0.3em] font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-white">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif-display text-3xl font-light">
              Заявка принята
            </h3>
            <p className="text-xs text-neutral-300 font-sans-clean tracking-widest leading-relaxed max-w-md mx-auto">
              Спасибо, {formData.name || 'гость'}! Администратор студии
              «Скультура» свяжется с вами по номеру {formData.phone} в течение 15 минут.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-white text-black text-xs tracking-[0.25em] uppercase font-sans-clean hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
