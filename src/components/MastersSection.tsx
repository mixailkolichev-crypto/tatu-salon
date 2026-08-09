import React, { useState } from 'react';
import { ArrowRight, Star, Instagram } from 'lucide-react';
import { MASTERS_DATA } from '../data/studioData';
import { Master } from '../types';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';

interface MastersSectionProps {
  onSelectMasterForBooking: (masterId: string) => void;
  onOpenMasterDetail: (master: Master) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({
  onSelectMasterForBooking,
  onOpenMasterDetail,
}) => {
  return (
    <section
      id="masters"
      className="relative w-full bg-[#080808]/85 backdrop-blur-sm text-white py-20 md:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="text-[11px] tracking-[0.35em] uppercase text-neutral-400 font-sans-clean mb-4">
              НАША КОМАНДА
            </p>
            <h2 className="font-serif-display text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-wide">
              МАСТЕРА
            </h2>
          </div>
          <p className="text-xs md:text-sm font-sans-clean font-light text-neutral-400 max-w-md mt-4 md:mt-0 tracking-widest leading-relaxed">
            Художники с высшим академическим образованием и десятилетним опытом воплощения эскизов любой сложности.
          </p>
        </div>

        {/* Masters 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MASTERS_DATA.map((master) => (
            <CardContainer key={master.id} containerClassName="w-full py-0">
              <CardBody className="bg-[#0e0e0e]/90 border border-white/10 hover:border-white/30 transition-all duration-300 w-full h-full flex flex-col justify-between group/card relative overflow-hidden">
                {/* Image Frame with 3D depth */}
                <CardItem
                  translateZ="50"
                  onClick={() => onOpenMasterDetail(master)}
                  className="w-full relative aspect-[3/4] overflow-hidden cursor-pointer"
                >
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover/card:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80"></div>

                  {/* Badge */}
                  <CardItem
                    translateZ="80"
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/15 text-[10px] tracking-widest uppercase text-neutral-300"
                  >
                    {master.experience}
                  </CardItem>
                </CardItem>

                {/* Master Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <CardItem
                        translateZ="60"
                        as="h3"
                        className="font-serif-display text-2xl font-light text-white"
                      >
                        {master.name}
                      </CardItem>
                      {master.alias && (
                        <CardItem
                          translateZ="70"
                          className="text-[10px] tracking-[0.2em] text-neutral-400 uppercase border border-white/15 px-2 py-0.5"
                        >
                          {master.alias}
                        </CardItem>
                      )}
                    </div>

                    <CardItem
                      translateZ="50"
                      as="p"
                      className="text-xs tracking-wider text-neutral-400 font-sans-clean mb-4 font-light"
                    >
                      {master.specialty}
                    </CardItem>

                    <CardItem
                      translateZ="40"
                      as="p"
                      className="text-xs text-neutral-400 line-clamp-2 mb-6 leading-relaxed font-light"
                    >
                      {master.bio}
                    </CardItem>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <CardItem translateZ="60">
                      <button
                        onClick={() => onOpenMasterDetail(master)}
                        className="text-xs tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      >
                        Работы ({master.portfolio.length})
                      </button>
                    </CardItem>

                    <CardItem translateZ="70">
                      <button
                        onClick={() => onSelectMasterForBooking(master.id)}
                        className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase text-white hover:underline cursor-pointer"
                      >
                        <span>Записаться</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

