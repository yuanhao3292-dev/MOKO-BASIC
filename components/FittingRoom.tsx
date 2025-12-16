
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, ASSETS } from '../constants';
import { RefreshCcw } from 'lucide-react';

interface FittingRoomProps {
  language: Language;
}

// Mock Data for the Virtual Try-On - Now using ASSETS reference
const DOG_MODELS = [
  { id: 'white', name: { EN: 'White Poodle', JP: 'ホワイト', ZH_TW: '白色貴賓' }, image: ASSETS.MODELS.WHITE },
  { id: 'apricot', name: { EN: 'Apricot Poodle', JP: 'アプリコット', ZH_TW: '杏色貴賓' }, image: ASSETS.MODELS.APRICOT },
  { id: 'black', name: { EN: 'Black Poodle', JP: 'ブラック', ZH_TW: '黑色貴賓' }, image: ASSETS.MODELS.BLACK },
];

const FABRIC_COLORS = [
  { id: 'red', name: 'Moko Red', hex: '#ef4444' },
  { id: 'blue', name: 'Navy', hex: '#1e3a8a' },
  { id: 'beige', name: 'Oatmeal', hex: '#d6d3d1' },
  { id: 'green', name: 'Olive', hex: '#57534e' },
  { id: 'mustard', name: 'Mustard', hex: '#d97706' },
];

export const FittingRoom: React.FC<FittingRoomProps> = ({ language }) => {
  const [selectedDog, setSelectedDog] = useState(DOG_MODELS[0]);
  const [selectedColor, setSelectedColor] = useState(FABRIC_COLORS[0]);
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-stone-50 pt-32 pb-24">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4">{t.fittingTitle}</h1>
        <p className="text-stone-500 font-serif italic tracking-wide">{t.fittingSub}</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
        
        {/* Visualizer Area */}
        <div className="w-full lg:w-2/3">
          <div className="relative aspect-square md:aspect-[4/3] bg-white shadow-xl rounded-sm overflow-hidden border border-stone-200">
            {/* Base Dog Image */}
            <img 
              src={selectedDog.image} 
              alt={selectedDog.name[language]} 
              className="w-full h-full object-cover"
            />
            
            {/* Virtual Garment Overlay - Using a CSS Mask or SVG approach for demo */}
            {/* Since we rely on external images, we will use a centralized simple overlay circle/shape 
                to demonstrate color matching, effectively a 'swatch' on the dog */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full blur-2xl opacity-60 mix-blend-multiply transition-colors duration-700"
                 style={{ backgroundColor: selectedColor.hex }}>
            </div>
            
            {/* Label Overlay */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2">
               <span className="text-xs font-bold uppercase tracking-widest text-mofu-black">
                 {selectedDog.name[language]} + {selectedColor.name}
               </span>
            </div>
          </div>
          <p className="text-[10px] text-center mt-4 text-stone-400 uppercase tracking-widest">
            * Visualization is for color reference only. Actual fit may vary.
          </p>
        </div>

        {/* Controls */}
        <div className="w-full lg:w-1/3 space-y-12">
          
          {/* Step 1: Choose Model */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">01 — {t.fittingCoat}</span>
            <div className="grid grid-cols-3 gap-4">
              {DOG_MODELS.map((dog) => (
                <button
                  key={dog.id}
                  onClick={() => setSelectedDog(dog)}
                  className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all duration-300 ${
                    selectedDog.id === dog.id ? 'border-mofu-gold scale-105 shadow-md' : 'border-transparent hover:border-stone-200'
                  }`}
                >
                  <img src={dog.image} alt={dog.name[language]} className="w-full h-full object-cover" />
                  {selectedDog.id === dog.id && (
                    <div className="absolute inset-0 bg-mofu-gold/10"></div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-sm font-serif text-mofu-black mt-3 text-center">{selectedDog.name[language]}</p>
          </div>

          {/* Step 2: Choose Fabric */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">02 — {t.fittingFabric}</span>
            <div className="flex flex-wrap gap-4 justify-center">
              {FABRIC_COLORS.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-full border-2 transition-transform duration-300 ${
                    selectedColor.id === color.id ? 'border-mofu-gold scale-125' : 'border-stone-200 hover:scale-110'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            <p className="text-sm font-serif text-mofu-black mt-3 text-center">{selectedColor.name}</p>
          </div>

          {/* Reset Action */}
          <div className="pt-8 border-t border-stone-200 flex justify-center">
             <button 
               onClick={() => { setSelectedDog(DOG_MODELS[0]); setSelectedColor(FABRIC_COLORS[0]); }}
               className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-400 hover:text-mofu-black transition-colors"
             >
               <RefreshCcw size={14} />
               <span>{t.fittingReset}</span>
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
