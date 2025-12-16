

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { AiAssistant } from './components/AiAssistant';
import { FabricSpecs } from './components/FabricSpecs';
import { FitFinder } from './components/FitFinder';
import { SeasonalCollection } from './components/SeasonalCollection';
import { CategoryShowcase } from './components/CategoryShowcase'; // New Component
import { ProductHotspots } from './components/ProductHotspots';
import { OccasionCarousel } from './components/OccasionCarousel';
import { FittingRoom } from './components/FittingRoom';
import { InfoPage } from './components/InfoPage';
import { getProducts, TRANSLATIONS, CATEGORY_FILTERS, INFO_LINKS, ASSETS } from './constants';
import { ViewState, Language, Product, ProductType } from './types';
import { ChevronDown, ExternalLink, X, ShoppingBag, Microscope, Scissors, Tag, Smile } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('EN');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeInfoPage, setActiveInfoPage] = useState<string>('');
  
  // Category Filter State
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');

  const products = getProducts(language);
  const t = TRANSLATIONS[language];

  // Filter products for homepage sections
  const maleProducts = products.filter(p => p.gender === 'MALE' || p.gender === 'UNISEX');
  const femaleProducts = products.filter(p => p.gender === 'FEMALE' || p.gender === 'UNISEX'); // Reuse unisex to fill grid if needed, though strictly female preferred if available
  
  // Wrapper to handle view changes and clean up modal states
  const handleSetView = (newView: ViewState) => {
    setSelectedProduct(null);
    setView(newView);
    setActiveCategoryFilter('ALL'); // Reset filter on view change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInfoPage = (pageId: string) => {
    setActiveInfoPage(pageId);
    handleSetView(ViewState.INFO);
  };

  // --- RENDER FUNCTIONS FOR PAGES ---

  const renderHome = () => (
    <>
      {/* 1. Main Hero Image */}
      <section className="relative h-screen w-full bg-[#F37021] overflow-hidden">
        <img
          src={ASSETS.HERO.MAIN}
          alt="White Teddy Moko"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-100 animate-[pulse_20s_ease-in-out_infinite]"
        />
        {/* Hermes Orange Overlay to Tint the Atmosphere */}
        <div className="absolute inset-0 bg-[#F37021]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F37021]/50"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-serif font-medium tracking-widest mb-8 text-white drop-shadow-sm fade-in-up" style={{ animationDelay: '0.2s' }}>
            MOKO BASIC
          </h1>
          <div className="h-px w-16 bg-white/50 mb-8 fade-in-up" style={{ animationDelay: '0.8s' }}></div>
          <p className="text-sm md:text-lg font-serif italic tracking-[0.15em] text-white/90 fade-in-up" style={{ animationDelay: '1.2s' }}>
            {t.heroSlogan}
          </p>
        </div>
        <div className="absolute bottom-12 w-full flex justify-center fade-in-up" style={{ animationDelay: '2s' }}>
           <ChevronDown className="text-white animate-bounce" size={32} strokeWidth={1} />
        </div>
      </section>

      {/* 2. New Arrivals (8 Products Grid) */}
      <SeasonalCollection 
        products={products} 
        language={language} 
        onProductClick={setSelectedProduct} 
      />

      {/* 3. Male Collection Section */}
      <CategoryShowcase 
        title={t.titleMale}
        subtitle={t.subMale}
        image={ASSETS.CATEGORY.MALE} // Cool Dog
        products={maleProducts.slice(0, 4)} // First 4 items
        language={language}
        onProductClick={setSelectedProduct}
      />

      {/* 4. Female Collection Section */}
      <CategoryShowcase 
        title={t.titleFemale}
        subtitle={t.subFemale}
        image={ASSETS.CATEGORY.FEMALE} // Elegant Dog
        products={femaleProducts.slice(0, 4)} // First 4 items
        language={language}
        onProductClick={setSelectedProduct}
      />
    </>
  );

  const renderCategoryPage = () => {
    let baseProducts: Product[] = [];
    let title = '';
    let subtitle = '';

    if (view === ViewState.MALE) {
      // Base: Male or Unisex
      baseProducts = products.filter(p => p.gender === 'MALE' || p.gender === 'UNISEX');
      title = t.titleMale;
      subtitle = t.subMale;
    } else if (view === ViewState.FEMALE) {
      // Base: Female or Unisex
      baseProducts = products.filter(p => p.gender === 'FEMALE' || p.gender === 'UNISEX');
      title = t.titleFemale;
      subtitle = t.subFemale;
    }

    // Apply Sub-Category Filter
    const filteredProducts = activeCategoryFilter === 'ALL' 
      ? baseProducts 
      : baseProducts.filter(p => p.productType === activeCategoryFilter);

    const displayItems: React.ReactNode[] = [];
    filteredProducts.forEach(p => {
         let spanClass = "col-span-1";
         if (p.layout === 'large') spanClass = "col-span-2 row-span-2";
         if (p.layout === 'wide') spanClass = "col-span-2";
         displayItems.push(<div key={p.id} className={spanClass}><ProductCard product={p} language={language} onClick={() => setSelectedProduct(p)} /></div>);
    });

    return (
      <div className="bg-white min-h-screen pt-32 pb-24">
         <div className="max-w-screen-2xl mx-auto px-6 mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-mofu-black mb-4">{title}</h1>
            <p className="font-serif italic text-stone-500">{subtitle}</p>
         </div>

         {/* Sub-Navigation Filter */}
         <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-stone-100 mb-12 py-4">
            <div className="max-w-screen-xl mx-auto px-6 overflow-x-auto no-scrollbar">
              <div className="flex justify-center min-w-max space-x-6 md:space-x-12">
                {CATEGORY_FILTERS.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveCategoryFilter(filter.id)}
                    className={`text-xs font-bold uppercase tracking-[0.2em] pb-2 transition-colors duration-300 border-b-2 ${
                      activeCategoryFilter === filter.id 
                        ? 'text-mofu-black border-mofu-gold' 
                        : 'text-stone-400 border-transparent hover:text-mofu-black'
                    }`}
                  >
                    {filter.label[language]}
                  </button>
                ))}
              </div>
            </div>
         </div>

         <div className="max-w-screen-2xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-20 grid-flow-dense">
              {displayItems.length > 0 ? displayItems : (
                <div className="col-span-4 py-24 text-center text-stone-400 italic">
                   No products found in this category.
                </div>
              )}
           </div>
         </div>
      </div>
    );
  };

  const renderPhilosophyMerged = () => (
    <div className="min-h-screen bg-stone-50">
       
       {/* --- ORIGIN STORY --- */}
       <div className="bg-white py-32 px-6">
          <div className="max-w-screen-xl mx-auto">
             <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <img src={ASSETS.PHILOSOPHY.ORIGIN} className="w-full h-full object-cover grayscale opacity-90" alt="Lost in Noise" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
                   </div>
                </div>
                <div className="w-full md:w-1/2">
                   <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 block mb-6">Chapter 01 : {t.philOriginTitle}</span>
                   <h2 className="text-3xl md:text-5xl font-serif text-mofu-black mb-8 leading-tight">
                      {t.philOriginHead}
                   </h2>
                   <div className="w-12 h-px bg-mofu-gold mb-8"></div>
                   <p className="text-base font-serif leading-loose text-stone-600 tracking-wide text-justify">
                      {t.philOriginText}
                   </p>
                </div>
             </div>
          </div>
       </div>

       {/* --- WARDROBE --- */}
       <div className="bg-[#fcfbf9] py-32 px-6 overflow-hidden">
          <div className="max-w-screen-xl mx-auto mb-16 text-center">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block mb-6">Chapter 02 : {t.philWardrobeTitle}</span>
             <h2 className="text-3xl md:text-5xl font-serif text-mofu-black mb-8">{t.philWardrobeHead}</h2>
             <p className="text-sm font-light leading-loose text-stone-600 max-w-2xl mx-auto mb-16">
               {t.philWardrobeText}
             </p>
             <div className="mt-12">
               <OccasionCarousel language={language} />
             </div>
          </div>
       </div>

       {/* --- TWO HEARTS --- */}
       <div className="bg-mofu-black text-white py-32 px-6">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
             <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 block mb-6">{t.philRoyalTitle}</span>
                <h3 className="text-2xl font-serif text-white mb-6">{t.philRoyalHead}</h3>
                <p className="text-sm font-light leading-loose text-stone-400 text-justify">{t.philRoyalText}</p>
             </div>
             <div>
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-500 block mb-6">{t.philArtisanTitle}</span>
                <h3 className="text-2xl font-serif text-white mb-6">{t.philArtisanHead}</h3>
                <p className="text-sm font-light leading-loose text-stone-400 text-justify">{t.philArtisanText}</p>
             </div>
          </div>
       </div>

       {/* --- PROMISE --- */}
       <div className="bg-white py-32 text-center px-6">
         <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-mofu-gold mx-auto mb-8">
               <Smile size={32} strokeWidth={1} />
            </div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold mb-6 block">Chapter 04 : {t.philValueTitle}</span>
            <h2 className="text-3xl md:text-4xl font-serif text-mofu-black mb-8">{t.philValueHead}</h2>
            <p className="text-sm font-serif leading-loose text-stone-600 mb-12">
               {t.philValueText}
            </p>
         </div>
       </div>

       {/* --- CRAFTSMANSHIP (Merged) --- */}
       <div className="bg-stone-50 pt-32 pb-24 border-t border-stone-200">
          <div className="max-w-screen-2xl mx-auto px-6">
              {/* Header */}
              <div className="mb-32 text-center">
                 <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-4 block">Savoir-Faire</span>
                 <h1 className="text-6xl font-serif text-mofu-black mb-4">{t.craftTitle}</h1>
                 <p className="font-serif italic text-stone-500">{t.craftSubtitle}</p>
              </div>

              {/* Material Science */}
              <div className="mb-48">
                 <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                    <div className="w-full md:w-1/2 relative">
                       <div className="aspect-square bg-stone-100 overflow-hidden relative rounded-sm group">
                          <img src={ASSETS.PHILOSOPHY.MATERIAL} className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]" alt="Macro Cotton" />
                          <div className="absolute top-12 right-12 text-mofu-gold">
                             <Microscope size={24} strokeWidth={1} />
                          </div>
                       </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-12">
                       <div>
                          <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">01 — {t.craftMatTitle}</span>
                          <h2 className="text-4xl font-serif text-mofu-black mb-8 leading-tight">{t.craftMatHead}</h2>
                          <p className="text-sm font-light leading-loose text-stone-600 mb-12">{t.craftMatText}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-stone-200 pt-8">
                             <div>
                                <h4 className="text-sm font-serif font-bold text-mofu-black mb-2">{t.craftMatPoint1Title}</h4>
                                <p className="text-xs text-stone-500 leading-relaxed">{t.craftMatPoint1Desc}</p>
                             </div>
                             <div>
                                <h4 className="text-sm font-serif font-bold text-mofu-black mb-2">{t.craftMatPoint2Title}</h4>
                                <p className="text-xs text-stone-500 leading-relaxed">{t.craftMatPoint2Desc}</p>
                             </div>
                          </div>
                       </div>
                       <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col items-center">
                          <FabricSpecs 
                            specs={{ warmth: 90, breathability: 95, stretch: 85, softness: 100 }} 
                            language={language} 
                          />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Tailoring */}
              <div className="mb-48">
                 <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">02 — {t.craftTailorTitle}</span>
                    <h2 className="text-4xl font-serif text-mofu-black mb-6">{t.craftTailorHead}</h2>
                    <p className="text-sm font-light leading-loose text-stone-600">{t.craftTailorText}</p>
                 </div>
                 <div className="w-full h-[80vh] border border-stone-200 shadow-xl relative">
                    <ProductHotspots 
                       image={ASSETS.PHILOSOPHY.TAILOR}
                       hotspots={[
                          { id: 'h1', x: 45, y: 35, title: t.hotspotArchTitle, description: t.hotspotArchDesc },
                          { id: 'h2', x: 30, y: 45, title: t.hotspotArmTitle, description: t.hotspotArmDesc },
                          { id: 'h3', x: 50, y: 20, title: t.hotspotTagTitle, description: t.hotspotTagDesc },
                       ]}
                    />
                 </div>
              </div>

              {/* Sewing & Badges */}
              <div className="mb-32">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div className="space-y-8">
                       <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">03 — {t.craftSewingTitle}</span>
                       <h2 className="text-4xl font-serif text-mofu-black">{t.craftSewingHead}</h2>
                       <p className="text-sm font-light leading-loose text-stone-600">{t.craftSewingText}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 border border-stone-100 hover:border-mofu-gold transition-colors duration-500 group">
                          <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-400 group-hover:text-mofu-gold group-hover:bg-orange-50 mb-6 transition-colors">
                             <Scissors size={24} strokeWidth={1} />
                          </div>
                          <h4 className="text-lg font-serif mb-4">{t.craftSewingPoint1Title}</h4>
                          <p className="text-xs text-stone-500 leading-relaxed">{t.craftSewingPoint1Desc}</p>
                       </div>
                       <div className="p-8 border border-stone-100 hover:border-mofu-gold transition-colors duration-500 group">
                          <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-400 group-hover:text-mofu-gold group-hover:bg-orange-50 mb-6 transition-colors">
                             <Tag size={24} strokeWidth={1} />
                          </div>
                          <h4 className="text-lg font-serif mb-4">{t.craftSewingPoint2Title}</h4>
                          <p className="text-xs text-stone-500 leading-relaxed">{t.craftSewingPoint2Desc}</p>
                       </div>
                    </div>
                 </div>
              </div>
          </div>
       </div>
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;
    return (
      <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-24 pb-12 animate-[fadeIn_0.5s_ease-out]">
        <button 
          onClick={() => setSelectedProduct(null)}
          className="fixed top-24 right-8 z-50 bg-white/80 p-2 rounded-full hover:rotate-90 transition-transform duration-300 shadow-sm border border-stone-100 hover:text-mofu-gold"
        >
          <X size={24} strokeWidth={1} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative h-[60vh] lg:h-screen bg-stone-100 overflow-hidden">
             <img 
               src={selectedProduct.image} 
               alt={selectedProduct.name}
               className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[2s] ease-out"
             />
             <div className="absolute bottom-8 left-8">
               <span className="text-xxs font-bold tracking-[0.3em] uppercase bg-white/90 backdrop-blur px-3 py-2 text-mofu-black">
                 {selectedProduct.category}
               </span>
             </div>
          </div>

          <div className="flex flex-col p-8 lg:p-24 bg-white">
             {/* Upper Info */}
             <div className="mb-16">
               <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold mb-6 block">MOKO {selectedProduct.subcategory}</span>
               <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4 leading-tight">{selectedProduct.name}</h1>
               <p className="text-xl font-serif italic text-stone-400 mb-8">¥{selectedProduct.price.toLocaleString()}</p>
               <div className="w-12 h-px bg-mofu-gold mb-8"></div>
               <p className="text-sm font-light leading-loose text-stone-600 mb-12 tracking-wide max-w-md">{selectedProduct.description}</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <FabricSpecs specs={selectedProduct.specs} language={language} />
                  <FitFinder language={language} />
               </div>

               {/* External Actions - Replaced Cart Buttons */}
               <div className="space-y-4 max-w-md">
                 {selectedProduct.amazonUrl && (
                    <a 
                      href={selectedProduct.amazonUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-mofu-black text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-colors flex items-center justify-center space-x-2 border border-mofu-black"
                    >
                      <span>{t.buyAmazon}</span>
                      <ExternalLink size={14} />
                    </a>
                 )}
                 {selectedProduct.rakutenUrl && (
                    <a 
                      href={selectedProduct.rakutenUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#BF0000] text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-red-800 transition-colors flex items-center justify-center space-x-2 border border-[#BF0000]"
                    >
                      <span>{t.buyRakuten}</span>
                      <ExternalLink size={14} />
                    </a>
                 )}
               </div>
             </div>
          </div>
        </div>

        {/* Detailed Story Section (4 Images + 4 Texts) */}
        {selectedProduct.galleryImages && selectedProduct.galleryText && (
          <div className="w-full bg-stone-50 border-t border-stone-100">
             {selectedProduct.galleryImages.map((imgUrl, index) => {
               const textObj = selectedProduct.galleryText?.[index];
               if (!textObj) return null;
               
               // Alternate Layout: Even index = Image Left, Odd index = Image Right
               const isEven = index % 2 === 0;

               return (
                 <div key={index} className="flex flex-col md:flex-row min-h-[500px]">
                    <div className={`w-full md:w-1/2 relative h-[400px] md:h-auto ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                       <img src={imgUrl} alt={`Detail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className={`w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 bg-white ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                       <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-300 mb-6 block">
                         Detail 0{index + 1}
                       </span>
                       <p className="text-lg md:text-xl font-serif text-mofu-black leading-relaxed">
                         {textObj[language]}
                       </p>
                    </div>
                 </div>
               );
             })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-mofu-gold selection:text-white">
      <Navbar 
        currentView={view} 
        setView={handleSetView} 
        language={language} 
        setLanguage={setLanguage} 
        forceSolid={view !== ViewState.HOME || selectedProduct !== null}
        setActiveCategoryFilter={setActiveCategoryFilter}
        onOpenInfo={handleOpenInfoPage}
      />
      
      {/* Product Detail Modal */}
      {selectedProduct && renderProductDetail()}

      <main>
        {view === ViewState.HOME && renderHome()}
        {(view === ViewState.MALE || view === ViewState.FEMALE) && renderCategoryPage()}
        {view === ViewState.FITTING_ROOM && <FittingRoom language={language} />}
        {view === ViewState.PHILOSOPHY && renderPhilosophyMerged()}
        {view === ViewState.INFO && <InfoPage pageId={activeInfoPage} language={language} />}
      </main>

      {/* Footer - High Contrast Luxury */}
      {!selectedProduct && (
        <footer className="bg-mofu-black text-white pt-24 pb-12">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-24">
              <div className="col-span-1 md:col-span-1">
                 <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerNewsletter}</h4>
                 <div className="flex border-b border-white/30 py-2">
                   <input type="email" placeholder="Email Address" className="w-full bg-transparent outline-none text-sm placeholder-stone-500 text-white" />
                   <button className="text-xs uppercase font-bold hover:text-mofu-gold transition-colors">{t.footerSubscribe}</button>
                 </div>
              </div>
              
              {/* Dynamic Footer Links from INFO_LINKS */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerHelp}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                  {INFO_LINKS.slice(0, 4).map(link => (
                    <li key={link.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => handleOpenInfoPage(link.id)}>
                      {link.label[language]}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerServices}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                  <li onClick={() => setView(ViewState.PHILOSOPHY)} className="hover:text-white cursor-pointer transition-colors">Craftsmanship</li>
                   {INFO_LINKS.slice(4, 7).map(link => (
                    <li key={link.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => handleOpenInfoPage(link.id)}>
                      {link.label[language]}
                    </li>
                  ))}
                </ul>
              </div>
              
               <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerAbout}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                   {INFO_LINKS.slice(7).map(link => (
                    <li key={link.id} className="hover:text-white cursor-pointer transition-colors" onClick={() => handleOpenInfoPage(link.id)}>
                      {link.label[language]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-4 md:mb-0">
                 <span className="font-serif text-2xl tracking-widest text-white">MOKO BASIC</span>
               </div>
               <div className="text-[9px] text-stone-500 uppercase tracking-widest">{t.footerCopy}</div>
            </div>
          </div>
        </footer>
      )}

      <AiAssistant language={language} />
    </div>
  );
};

export default App;
