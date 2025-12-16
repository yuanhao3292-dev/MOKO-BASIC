import React, { useState } from 'react';
import { Ruler, Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FitFinderProps {
  language: Language;
}

export const FitFinder: React.FC<FitFinderProps> = ({ language }) => {
  const [weight, setWeight] = useState<number>(2.5);
  const [result, setResult] = useState<string | null>(null);
  const t = TRANSLATIONS[language];

  // Moko Algorithm for Poodles
  const calculateSize = (w: number) => {
    if (w < 2.0) return 'XS (Micro)';
    if (w < 2.8) return 'S (Standard)'; // The "Moko Standard"
    if (w < 3.8) return 'M (Relaxed)';
    return 'L (Oversized)';
  };

  const currentSize = calculateSize(weight);
  const percentage = ((weight - 1.5) / (5.0 - 1.5)) * 100; // For slider background

  return (
    <div className="bg-stone-50 p-6 rounded-sm border border-stone-100">
      <div className="flex items-center space-x-2 mb-6">
        <Ruler size={16} className="text-mofu-gold" />
        <span className="text-xs font-bold uppercase tracking-widest text-mofu-black">
          {t.sizeGuide}
        </span>
      </div>

      <div className="mb-8">
        <div className="flex justify-between text-xs font-serif text-stone-500 mb-2">
          <span>1.5kg</span>
          <span className="text-mofu-black font-bold text-lg">{weight.toFixed(1)}kg</span>
          <span>5.0kg</span>
        </div>
        
        <div className="relative h-2 bg-stone-200 rounded-full">
           <div 
             className="absolute top-0 left-0 h-full bg-mofu-gold rounded-full transition-all duration-300"
             style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
           ></div>
           <input 
             type="range" 
             min="1.5" 
             max="5.0" 
             step="0.1" 
             value={weight}
             onChange={(e) => setWeight(parseFloat(e.target.value))}
             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
           />
           {/* Thumb visual */}
           <div 
             className="absolute top-1/2 -mt-2 w-4 h-4 bg-white border-2 border-mofu-gold rounded-full shadow-md pointer-events-none transition-all duration-300"
             style={{ left: `calc(${Math.min(Math.max(percentage, 0), 100)}% - 8px)` }}
           ></div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-stone-200 pt-4">
         <div className="flex flex-col">
            <span className="text-[10px] uppercase text-stone-400 tracking-widest mb-1">Recommended Fit</span>
            <span className="text-2xl font-serif text-mofu-black animate-pulse">{currentSize}</span>
         </div>
         <div className="w-10 h-10 rounded-full bg-mofu-black text-white flex items-center justify-center">
            <Check size={20} />
         </div>
      </div>
      <p className="text-[10px] text-stone-400 mt-4 italic text-right">Based on Toy Poodle skeletal structure.</p>
    </div>
  );
};