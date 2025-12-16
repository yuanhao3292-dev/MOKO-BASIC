import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { JournalPost, Language, Product } from '../types';
import { TRANSLATIONS } from '../constants';
import { ProductCard } from './ProductCard';

interface JournalViewerProps {
  posts: JournalPost[];
  products: Product[];
  language: Language;
  onAddToCart: (product: Product) => void;
}

export const JournalViewer: React.FC<JournalViewerProps> = ({ posts, products, language, onAddToCart }) => {
  const [selectedPost, setSelectedPost] = useState<JournalPost | null>(null);
  const t = TRANSLATIONS[language];

  const getRelatedProduct = (id: string) => products.find(p => p.id === id);

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-9xl font-serif text-stone-100 absolute left-0 right-0 -z-10 select-none">JOURNAL</h1>
        <h2 className="text-4xl font-serif text-mofu-black mt-12 relative z-10">{t.journalSub}</h2>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              onClick={() => setSelectedPost(post)}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden bg-stone-100"
            >
              <img 
                src={post.image} 
                alt={post.title[language]} 
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75 grayscale group-hover:grayscale-0"
              />
              
              {/* Overlay Border & Text */}
              <div className="absolute inset-0 border-[1px] border-mofu-gold scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 m-4 flex flex-col items-center justify-center text-center p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white mb-4 bg-mofu-gold px-2 py-1">
                  {post.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  {post.title[language]}
                </h3>
                <span className="text-xs text-stone-200 font-serif italic translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {post.date}
                </span>
                <span className="mt-8 text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                  {t.readStory}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto animate-[fadeIn_0.3s_ease-out]">
           <button 
             onClick={() => setSelectedPost(null)}
             className="fixed top-8 right-8 z-[60] p-2 hover:bg-stone-50 rounded-full transition-colors"
           >
             <X size={32} strokeWidth={1} />
           </button>

           <div className="min-h-screen flex flex-col md:flex-row">
             {/* Left: Image */}
             <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0">
               <img 
                 src={selectedPost.image} 
                 className="w-full h-full object-cover" 
                 alt={selectedPost.title[language]} 
               />
               <div className="absolute bottom-12 left-12">
                  <span className="text-xs font-bold uppercase tracking-widest text-white bg-black/20 backdrop-blur-md px-4 py-2">
                    {selectedPost.date} — {selectedPost.category}
                  </span>
               </div>
             </div>

             {/* Right: Content */}
             <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-12 leading-tight">
                  {selectedPost.title[language]}
                </h1>
                
                <div className="w-12 h-px bg-mofu-gold mb-12"></div>
                
                <p className="text-base md:text-lg font-serif leading-loose text-stone-600 mb-24 whitespace-pre-line text-justify">
                  {selectedPost.content[language]}
                </p>

                {/* Shop The Memory */}
                <div className="border-t border-stone-100 pt-12">
                   <div className="flex items-center space-x-2 text-mofu-gold mb-8">
                      <span className="text-xs font-bold uppercase tracking-widest">{t.shopMemory}</span>
                      <ArrowRight size={16} />
                   </div>
                   
                   {getRelatedProduct(selectedPost.relatedProductId) ? (
                     <div className="max-w-sm">
                        <ProductCard 
                          product={getRelatedProduct(selectedPost.relatedProductId)!} 
                          language={language}
                          onClick={() => onAddToCart(getRelatedProduct(selectedPost.relatedProductId)!)}
                        />
                     </div>
                   ) : (
                     <p className="text-xs text-stone-400 italic">Product unavailable.</p>
                   )}
                </div>
             </div>
           </div>
        </div>
      )}
    </div>
  );
};