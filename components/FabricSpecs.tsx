import React from 'react';
import { ProductSpecs, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FabricSpecsProps {
  specs: ProductSpecs;
  language: Language;
}

export const FabricSpecs: React.FC<FabricSpecsProps> = ({ specs, language }) => {
  const t = TRANSLATIONS[language];
  
  // Data points for the chart
  const data = [
    { label: t.specs.warmth, value: specs.warmth },
    { label: t.specs.breathability, value: specs.breathability },
    { label: t.specs.softness, value: specs.softness },
    { label: t.specs.stretch, value: specs.stretch },
  ];

  // SVG Configuration
  const size = 200;
  const center = size / 2;
  const radius = 70;
  const angleSlice = (Math.PI * 2) / 4;

  // Helper to calculate points on the circle
  const getPoint = (value: number, index: number) => {
    // value is 0-100, normalize to 0-1 (with a small minimum for visuals)
    const normalized = Math.max(value, 10) / 100; 
    const r = radius * normalized;
    const angle = index * angleSlice - Math.PI / 2; // Start from top
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  };

  // Generate the polygon points for the values
  const polygonPoints = data.map((d, i) => getPoint(d.value, i)).join(' ');
  
  // Generate the background grid (concentric polygons)
  const grids = [0.25, 0.5, 0.75, 1].map(scale => {
    return data.map((_, i) => {
      const r = radius * scale;
      const angle = i * angleSlice - Math.PI / 2;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  });

  // Calculate label positions (pushed out further)
  const labelPoints = data.map((_, i) => {
    const r = radius + 25; 
    const angle = i * angleSlice - Math.PI / 2;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size} className="overflow-visible">
          {/* Axis Lines */}
          {data.map((_, i) => {
             const angle = i * angleSlice - Math.PI / 2;
             const x = center + radius * Math.cos(angle);
             const y = center + radius * Math.sin(angle);
             return (
               <line 
                 key={`axis-${i}`} 
                 x1={center} y1={center} 
                 x2={x} y2={y} 
                 stroke="#e5e5e5" 
                 strokeWidth="1" 
               />
             );
          })}

          {/* Grid Polygons */}
          {grids.map((points, i) => (
            <polygon 
              key={`grid-${i}`} 
              points={points} 
              fill="none" 
              stroke="#f5f5f4" 
              strokeWidth="1" 
            />
          ))}

          {/* Data Polygon */}
          <polygon 
            points={polygonPoints} 
            fill="rgba(158, 133, 93, 0.1)" 
            stroke="#9E855D" 
            strokeWidth="2" 
            className="drop-shadow-sm"
          />

          {/* Data Points */}
          {data.map((d, i) => {
             const [cx, cy] = getPoint(d.value, i).split(',').map(Number);
             return (
               <circle 
                 key={`dot-${i}`} 
                 cx={cx} cy={cy} 
                 r="3" 
                 fill="#9E855D" 
               />
             );
          })}

          {/* Labels */}
          {data.map((d, i) => (
             <text 
               key={`label-${i}`} 
               x={labelPoints[i].x} 
               y={labelPoints[i].y} 
               textAnchor="middle" 
               dominantBaseline="middle" 
               className="text-[10px] uppercase font-bold fill-stone-400 tracking-widest"
             >
               {d.label}
             </text>
          ))}
        </svg>
      </div>
      <div className="mt-4 flex space-x-6 text-[10px] uppercase tracking-widest text-stone-400">
         <span>Tech Spec</span>
         <span className="text-mofu-gold">MOKO LAB™</span>
      </div>
    </div>
  );
};