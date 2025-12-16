import React, { useState } from 'react';
import { X } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
  title: string;
  description: string;
}

interface ProductHotspotsProps {
  image: string;
  hotspots: Hotspot[];
}

export const ProductHotspots: React.FC<ProductHotspotsProps> = ({ image, hotspots }) => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full bg-stone-100 overflow-hidden group">
      {/* Base Image */}
      <img 
        src={image} 
        alt="Technical View" 
        className="w-full h-full object-cover grayscale opacity-90 transition-opacity duration-500 group-hover:opacity-100" 
      />
      
      {/* Overlay Gradient for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

      {/* Hotspots */}
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className="absolute z-10"
          style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
        >
          {/* Pulse Effect */}
          <div className="relative">
            <button
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
              className="w-4 h-4 bg-mofu-gold rounded-full shadow-lg relative z-20 hover:scale-125 transition-transform duration-300"
            >
               <div className="absolute inset-0 bg-mofu-gold rounded-full animate-ping opacity-75"></div>
            </button>
            
            {/* Connecting Line (Decorative) */}
            <div 
              className={`absolute top-2 left-2 w-12 h-[1px] bg-mofu-gold origin-left transition-all duration-500 ${
                activeHotspot === spot.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
              style={{ transform: 'rotate(-45deg)' }}
            />

            {/* Tooltip */}
            <div
              className={`absolute top-6 left-6 w-64 bg-white/95 backdrop-blur-md p-4 shadow-xl border-l-2 border-mofu-gold transition-all duration-500 origin-top-left ${
                activeHotspot === spot.id 
                  ? 'opacity-100 scale-100 translate-x-0' 
                  : 'opacity-0 scale-95 -translate-x-4 pointer-events-none'
              }`}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest text-mofu-black mb-1">
                {spot.title}
              </h4>
              <p className="text-xs font-serif text-stone-600 leading-relaxed">
                {spot.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};