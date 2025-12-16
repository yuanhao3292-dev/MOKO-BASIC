import React, { useRef } from 'react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface SeasonalCollectionProps {
  products: Product[];
  language: Language;
  onProductClick: (product: Product) => void;
}

export const SeasonalCollection: React.FC<SeasonalCollectionProps> = ({ products, language, onProductClick }) => {
  const t = TRANSLATIONS[language];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Select up to 10 items for the showcase
  const featuredProducts = products.slice(0, 10);

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

  return (
    <section className="bg-white py-16 md:py-24 border-b border-stone-100">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header - Minimalist */}
        <div className="flex flex-col items-center mb-12 fade-in-up">
           <h2 className="text-3xl md:text-4xl font-serif text-mofu-black mb-2">
             The Holiday Collection
           </h2>
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400">
             {t.newIn}
           </span>
        </div>

        {/* Carousel Container - Relative for absolute arrows */}
        <div className="relative group/carousel">
          
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 hover:bg-white text-mofu-black"
          >
            <ChevronLeft size={24} strokeWidth={1} />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 backdrop-blur-sm shadow-sm rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 disabled:opacity-0 hover:bg-white text-mofu-black"
          >
            <ChevronRight size={24} strokeWidth={1} />
          </button>

          {/* Horizontal Scroll Area */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth"
          >
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => onProductClick(product)}
                className="flex-none w-[calc(50%-8px)] md:w-[calc(25%-18px)] snap-start cursor-pointer group"
              >
                {/* Image Container - Square, Light Gray Background */}
                <div className="relative aspect-square bg-[#f6f6f6] mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-multiply opacity-95 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Heart Icon - Top Right */}
                  <div className="absolute top-3 right-3 p-2 text-mofu-black/60 hover:text-red-500 transition-colors z-20">
                    <Heart size={20} strokeWidth={1.5} />
                  </div>

                  {/* Optional: Add to Cart Quick Action (Hidden by default, can appear on hover) */}
                  {/* <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ShoppingBag size={16} />
                  </div> */}
                </div>

                {/* Info - Below Image, Left Aligned (LV Style) */}
                <div className="flex flex-col items-start px-1">
                   <h3 className="text-sm font-sans text-mofu-black tracking-wide leading-tight mb-1 group-hover:underline underline-offset-4 decoration-stone-300 decoration-1">
                     {product.name}
                   </h3>
                   <span className="text-xs font-sans text-stone-500 tracking-wide">
                     ¥{product.price.toLocaleString()}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
            <button className="text-xs font-bold uppercase tracking-[0.25em] border-b border-black pb-1 hover:text-mofu-gold hover:border-mofu-gold transition-colors">
                {t.viewAll}
            </button>
        </div>
      </div>
    </section>
  );
};