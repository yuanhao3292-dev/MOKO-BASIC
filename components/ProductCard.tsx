
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
        return 'HERITAGE';
      case 'COLLAB':
        return 'RYU.M';
      case 'LIMITED':
        return 'LTD';
      case 'NEW':
        return TRANSLATIONS[language].newBadge;
      default:
        return null;
    }
  };

  return (
    <div onClick={onClick} className="group cursor-pointer flex flex-col h-full">
      {/* 
         Standard Image Container
         Restored to neutral background, removed mix-blend-multiply and orange bg.
      */}
      <div className="relative w-full flex-1 overflow-hidden bg-stone-100 mb-4 min-h-[400px]">
        
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        {/* Badge: Restored standard high-contrast style */}
        {product.badge && (
          <div className="absolute bottom-4 left-4 z-10">
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-white/90 backdrop-blur-sm text-mofu-black shadow-sm">
              {renderBadge(product.badge)}
            </span>
          </div>
        )}
      </div>
      
      {/* Product Info - Centered for Gallery Look */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="text-base font-serif text-mofu-black tracking-wide group-hover:text-mofu-gold transition-colors duration-300">
          {product.name}
        </h3>
        <span className="text-xs text-stone-500 font-sans tracking-wide">¥{product.price.toLocaleString()}</span>
      </div>
    </div>
  );
};
