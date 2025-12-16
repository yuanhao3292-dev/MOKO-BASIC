import React from 'react';
import { Product, Language, ProductBadge } from '../types';
import { TRANSLATIONS } from '../constants';

interface ProductCardProps {
  product: Product;
  language: Language;
  onClick?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, language, onClick }) => {
  
  const renderBadge = (badge: ProductBadge) => {
    switch (badge) {
      case 'LUXURY':
        return <span className="text-mofu-gold">HERITAGE</span>;
      case 'COLLAB':
        return <span className="text-blue-900">RYU.M</span>;
      case 'LIMITED':
        return <span className="text-red-900">LTD</span>;
      case 'NEW':
        return <span className="text-mofu-black">{TRANSLATIONS[language].newBadge}</span>;
      default:
        return null;
    }
  };

  return (
    <div onClick={onClick} className="group cursor-pointer flex flex-col h-full">
      {/* Image container: Flexible aspect ratio based on parent grid cell */}
      <div className="relative w-full flex-1 overflow-hidden bg-stone-50 mb-4 min-h-[300px]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        {/* Badge: Minimal text overlay at bottom left inside image */}
        {product.badge && (
          <div className="absolute bottom-4 left-4">
             <span className="text-xs font-bold tracking-widest uppercase bg-white/90 backdrop-blur-sm px-3 py-1 text-mofu-black">
               {renderBadge(product.badge)}
             </span>
          </div>
        )}
      </div>
      
      {/* Product Info: Left aligned, Serif title */}
      <div className="flex flex-col items-start space-y-1">
        <h3 className="text-sm font-serif text-mofu-black tracking-wide group-hover:underline underline-offset-4 decoration-stone-300">
          {product.name}
        </h3>
        <span className="text-xs text-stone-500 font-sans tracking-wide">¥{product.price.toLocaleString()}</span>
      </div>
    </div>
  );
};