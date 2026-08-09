import React from 'react';
import { X, ArrowRight, Clock, User, Tag, MapPin } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookItem: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onBookItem,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/10 text-white overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 rounded-full text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview Column */}
        <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-[500px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[500px] md:max-h-full"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Column */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-sans-clean block mb-2">
              {item.style}
            </span>

            <h3 className="font-serif-display text-2xl md:text-4xl font-light text-white mb-6">
              {item.title}
            </h3>

            <div className="space-y-4 border-t border-b border-white/10 py-6 text-xs font-sans-clean tracking-wider">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center space-x-2">
                  <User className="w-3.5 h-3.5" />
                  <span>Мастер</span>
                </span>
                <span className="text-white font-medium">{item.master}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center space-x-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Размещение</span>
                </span>
                <span className="text-white">{item.placement}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-neutral-400 flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Длительность</span>
                </span>
                <span className="text-white">{item.hoursSpent} часов сеанса</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookItem(item);
              }}
              className="w-full py-3.5 bg-white text-black font-sans-clean text-xs uppercase tracking-[0.25em] font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>Хочу похожий эскиз</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-neutral-400 font-sans-clean tracking-widest">
              Каждый эскиз разрабатывается уникально под анатомию вашего тела.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
