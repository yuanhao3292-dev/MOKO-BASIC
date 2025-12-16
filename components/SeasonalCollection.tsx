
import React from 'react';
import { Product, Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { ProductCard } from './ProductCard';

interface SeasonalCollectionProps {
  products: Product[];
  language: Language;
  onProductClick: (product: Product) => void;
}

export const SeasonalCollection: React.FC<SeasonalCollectionProps> = ({ products, language, onProductClick }) => {
  const t = TRANSLATIONS[language];
  
  // Select strictly 8 items for the showcase (4 per row x 2 rows)
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-white py-16 border-b border-stone-100">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header - Simple and elegant */}
        <div className="text-center mb-12">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 block mb-2">
             {t.newIn}
           </span>
           <h2 className="text-2xl md:text-3xl font-serif text-mofu-black">
             The Holiday Edit
           </h2>
        </div>

        {/* Grid Layout: 4 columns on Desktop, 2 on Mobile. Exactly 8 items. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
            {featuredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} language={language} onClick={() => onProductClick(product)} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
