
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { AiAssistant } from './components/AiAssistant';
import { FabricSpecs } from './components/FabricSpecs';
import { FitFinder } from './components/FitFinder';
import { SeasonalCollection } from './components/SeasonalCollection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductHotspots } from './components/ProductHotspots';
import { OccasionCarousel } from './components/OccasionCarousel';
import { FittingRoom } from './components/FittingRoom';
import { InfoPage } from './components/InfoPage';
import { LoginView } from './components/LoginView';
import { ContactView } from './components/ContactView'; // New
import { getProducts, TRANSLATIONS, CATEGORY_FILTERS, INFO_LINKS, ASSETS } from './constants';
import { ViewState, Language, Product, ProductType } from './types';
import { ChevronDown, ExternalLink, X, ShoppingBag, Microscope, Scissors, Tag, Smile } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('JP');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeInfoPage, setActiveInfoPage] = useState<string>('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');

  const products = getProducts(language);
  const t = TRANSLATIONS[language];

  const maleProducts = products.filter(p => p.gender === 'MALE' || p.gender === 'UNISEX');
  const femaleProducts = products.filter(p => p.gender === 'FEMALE' || p.gender === 'UNISEX');
  
  const handleSetView = (newView: ViewState) => {
    setSelectedProduct(null);
    setView(newView);
    setActiveCategoryFilter('ALL');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInfoPage = (pageId: string) => {
    if (pageId === 'contact') {
      handleSetView(ViewState.CONTACT);
      return;
    }
    setActiveInfoPage(pageId);
    handleSetView(ViewState.INFO);
  };

  const renderHome = () => (
    <>
      <section className="relative h-screen w-full bg-[#F37021] overflow-hidden">
        <img src={ASSETS.HERO.MAIN} className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Hero" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-serif font-medium tracking-widest mb-8 text-white drop-shadow-sm fade-in-up">MOKO BASIC</h1>
          <p className="text-sm md:text-lg font-serif italic tracking-[0.15em] text-white/90 fade-in-up">{t.heroSlogan}</p>
        </div>
      </section>
      <SeasonalCollection products={products} language={language} onProductClick={setSelectedProduct} />
      <CategoryShowcase title={t.titleMale} subtitle={t.subMale} image={ASSETS.CATEGORY.MALE} products={maleProducts.slice(0, 4)} language={language} onProductClick={setSelectedProduct} />
      <CategoryShowcase title={t.titleFemale} subtitle={t.subFemale} image={ASSETS.CATEGORY.FEMALE} products={femaleProducts.slice(0, 4)} language={language} onProductClick={setSelectedProduct} />
    </>
  );

  const isPlainView = view === ViewState.LOGIN || view === ViewState.CONTACT;

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-mofu-gold selection:text-white">
      {!isPlainView && (
        <Navbar 
          currentView={view} 
          setView={handleSetView} 
          language={language} 
          setLanguage={setLanguage} 
          forceSolid={view !== ViewState.HOME || selectedProduct !== null}
          setActiveCategoryFilter={setActiveCategoryFilter}
          onOpenInfo={handleOpenInfoPage}
        />
      )}
      
      <main>
        {view === ViewState.HOME && renderHome()}
        {view === ViewState.LOGIN && <LoginView language={language} onBack={() => handleSetView(ViewState.HOME)} />}
        {view === ViewState.CONTACT && <ContactView language={language} onBack={() => handleSetView(ViewState.HOME)} />}
        {view === ViewState.FITTING_ROOM && <FittingRoom language={language} />}
        {view === ViewState.PHILOSOPHY && <div className="pt-32 text-center">Philosophy View</div>}
        {view === ViewState.INFO && <InfoPage pageId={activeInfoPage} language={language} />}
        {(view === ViewState.MALE || view === ViewState.FEMALE) && <div className="pt-32 text-center">Category View</div>}
      </main>

      {!isPlainView && (
        <footer className="bg-mofu-black text-white pt-24 pb-12">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-12 text-center">
             <span className="font-serif text-2xl tracking-widest text-white">MOKO BASIC</span>
             <div className="text-[9px] text-stone-500 uppercase tracking-widest mt-4">{t.footerCopy}</div>
             <div className="mt-8 flex justify-center space-x-6 text-[10px] uppercase tracking-widest text-stone-400">
               <button onClick={() => handleSetView(ViewState.PHILOSOPHY)}>Philosophy</button>
               <button onClick={() => handleOpenInfoPage('contact')}>Contact</button>
               <button onClick={() => handleOpenInfoPage('size-guide')}>Size Guide</button>
             </div>
          </div>
        </footer>
      )}

      <AiAssistant language={language} />
    </div>
  );
};

export default App;
