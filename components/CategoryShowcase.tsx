
import React from 'react';
import { Product, Language } from '../types';
import { ProductCard } from './ProductCard';

interface CategoryShowcaseProps {
  title: string;
  subtitle: string;
  image: string;
  products: Product[];
  language: Language;
  onProductClick: (product: Product) => void;
  textColor?: string;
  reverse?: boolean;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ 
  title, 
  subtitle, 
  image, 
  products, 
  language, 
  onProductClick,
  textColor = "text-mofu-black"
}) => {
  return (
    <section className="bg-white pb-24 border-b border-stone-100">
      {/* Full Width Banner Image */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden mb-16">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Text Header */}
        <div className="text-center mb-16">
           <h2 className={`text-3xl md:text-5xl font-serif mb-4 ${textColor}`}>
             {title}
           </h2>
           <p className="text-sm font-sans tracking-[0.2em] uppercase text-stone-500">
             {subtitle}
           </p>
        </div>

        {/* 4 Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8">
           {products.slice(0, 4).map((product) => (
             <div key={product.id}>
               <ProductCard product={product} language={language} onClick={() => onProductClick(product)} />
             </div>
           ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-16 text-center">
            <button className="text-xs font-bold uppercase tracking-[0.25em] border-b border-stone-300 pb-1 hover:text-mofu-gold hover:border-mofu-gold transition-colors">
                View Collection
            </button>
        </div>
      </div>
    </section>
  );
};
