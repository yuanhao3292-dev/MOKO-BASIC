import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, Sun, CloudRain, Moon } from 'lucide-react';
import { Language } from '../types';
import { OCCASIONS } from '../constants';

interface OccasionCarouselProps {
  language: Language;
}

export const OccasionCarousel: React.FC<OccasionCarouselProps> = ({ language }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth / 2;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'home': return <Home size={16} className="text-mofu-gold" />;
      case 'walk': return <Sun size={16} className="text-mofu-gold" />;
      case 'rain': return <CloudRain size={16} className="text-mofu-gold" />;
      case 'sleep': return <Moon size={16} className="text-mofu-gold" />;
      default: return null;
    }
  };

  return (
    <div className="relative group/carousel w-full">
      {/* Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 -ml-4 hover:bg-stone-50 text-mofu-black hidden md:block"
      >
        <ChevronLeft size={24} strokeWidth={1} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-md rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 -mr-4 hover:bg-stone-50 text-mofu-black hidden md:block"
      >
        <ChevronRight size={24} strokeWidth={1} />
      </button>

      {/* Carousel */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth px-2"
      >
        {OCCASIONS.map((occasion) => (
          <div 
            key={occasion.id}
            className="flex-none w-[280px] md:w-[320px] snap-center cursor-pointer group card-zoom"
          >
            {/* Image Card */}
            <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden rounded-sm mb-6">
              <img 
                src={occasion.image} 
                alt={occasion.title[language]}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-sm">
                {getIcon(occasion.id)}
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">
                {occasion.sub[language]}
              </span>
              <h3 className="text-xl font-serif text-mofu-black group-hover:text-mofu-gold transition-colors duration-300">
                {occasion.title[language]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};