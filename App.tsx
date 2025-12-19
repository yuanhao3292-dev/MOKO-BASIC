
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { ProductCard } from './components/ProductCard.tsx';
import { FabricSpecs } from './components/FabricSpecs.tsx';
import { FitFinder } from './components/FitFinder.tsx';
import { SeasonalCollection } from './components/SeasonalCollection.tsx';
import { CategoryShowcase } from './components/CategoryShowcase.tsx';
import { ProductHotspots } from './components/ProductHotspots.tsx';
import { OccasionCarousel } from './components/OccasionCarousel.tsx';
import { FittingRoom } from './components/FittingRoom.tsx';
import { InfoPage } from './components/InfoPage.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { CheckoutModal } from './components/CheckoutModal.tsx';
import { UserProfile } from './components/UserProfile.tsx';
import { getProducts, TRANSLATIONS, CATEGORY_FILTERS, INFO_LINKS, ASSETS } from './constants.ts';
import { ViewState, Language, Product, User } from './types.ts';
import { ChevronDown, ExternalLink, X, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('EN');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeInfoPage, setActiveInfoPage] = useState<string>('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');
  
  // Member & Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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
    setActiveInfoPage(pageId);
    handleSetView(ViewState.INFO);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView(ViewState.HOME);
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setView(ViewState.MEMBER_CENTER);
    setIsAuthOpen(false);
  };

  // --- RENDER FUNCTIONS ---

  const renderHome = () => (
    <>
      <section className="relative h-screen w-full bg-[#F37021] overflow-hidden">
        <img src={ASSETS.HERO.MAIN} className="absolute inset-0 w-full h-full object-cover opacity-90 scale-100" />
        <div className="absolute inset-0 bg-[#F37021]/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-serif font-medium tracking-widest mb-8 text-white fade-in-up">MOKO BASIC</h1>
          <p className="text-sm md:text-lg font-serif italic tracking-[0.15em] text-white/90 fade-in-up">{t.heroSlogan}</p>
        </div>
        <div className="absolute bottom-12 w-full flex justify-center"><ChevronDown className="text-white animate-bounce" size={32} strokeWidth={1} /></div>
      </section>

      <SeasonalCollection products={products} language={language} onProductClick={setSelectedProduct} />
      <CategoryShowcase title={t.titleMale} subtitle={t.subMale} image={ASSETS.CATEGORY.MALE} products={maleProducts.slice(0, 4)} language={language} onProductClick={setSelectedProduct} />
      <CategoryShowcase title={t.titleFemale} subtitle={t.subFemale} image={ASSETS.CATEGORY.FEMALE} products={femaleProducts.slice(0, 4)} language={language} onProductClick={setSelectedProduct} />
    </>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;
    return (
      <div className="fixed inset-0 z-40 bg-white overflow-y-auto pt-24 pb-12">
        <button onClick={() => setSelectedProduct(null)} className="fixed top-24 right-8 z-50 bg-white/80 p-2 rounded-full hover:rotate-90 transition-all border border-stone-100"><X size={24} strokeWidth={1} /></button>
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative h-[60vh] lg:h-screen bg-stone-50 overflow-hidden">
             <img src={selectedProduct.image} className="w-full h-full object-cover object-center" />
          </div>
          <div className="flex flex-col p-8 lg:p-24 bg-white justify-center">
             <div className="max-w-md">
               <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-mofu-gold mb-6 block">Collection {selectedProduct.subcategory}</span>
               <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4 leading-tight">{selectedProduct.name}</h1>
               <p className="text-xl font-serif italic text-stone-400 mb-8">¥{selectedProduct.price.toLocaleString()}</p>
               <p className="text-sm font-light leading-loose text-stone-600 mb-12 tracking-wide">{selectedProduct.description}</p>
               
               <div className="space-y-6 mb-16">
                  <FabricSpecs specs={selectedProduct.specs} language={language} />
               </div>

               {/* Amazon Pay Direct Purchase CTA */}
               <div className="space-y-4">
                 <button 
                   onClick={() => setIsCheckoutOpen(true)}
                   className="w-full bg-[#FF9900] text-white py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:brightness-110 transition-all flex items-center justify-between px-8"
                 >
                   <span>Amazon Pay Checkout</span>
                   <ArrowRight size={16} />
                 </button>
                 <div className="flex justify-between">
                    <button className="text-[10px] font-bold uppercase tracking-widest text-stone-400 border-b border-stone-200 pb-1">External Links</button>
                    <div className="flex space-x-4">
                       <a href={selectedProduct.amazonUrl} target="_blank" className="text-stone-300 hover:text-stone-600"><ExternalLink size={14} /></a>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
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
        onOpenAuth={() => setIsAuthOpen(true)}
        currentUser={currentUser}
      />
      
      <main>
        {view === ViewState.HOME && renderHome()}
        {(view === ViewState.MALE || view === ViewState.FEMALE) && (
          <div className="pt-32 pb-24 max-w-screen-2xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {products.filter(p => p.gender === (view === ViewState.MALE ? 'MALE' : 'FEMALE') || p.gender === 'UNISEX').map(p => (
                 <ProductCard key={p.id} product={p} language={language} onClick={() => setSelectedProduct(p)} />
               ))}
            </div>
          </div>
        )}
        {view === ViewState.FITTING_ROOM && <FittingRoom language={language} />}
        {view === ViewState.MEMBER_CENTER && currentUser && <UserProfile user={currentUser} onLogout={handleLogout} language={language} />}
        {view === ViewState.PHILOSOPHY && <div className="pt-32 text-center font-serif text-4xl">Coming Soon</div>}
        {view === ViewState.INFO && <InfoPage pageId={activeInfoPage} language={language} />}
      </main>

      {/* Modals & Overlays */}
      {selectedProduct && renderProductDetail()}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={handleLoginSuccess} language={language} />
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
        cart={selectedProduct ? [{ ...selectedProduct, cartId: 'temp', quantity: 1 }] : []} 
        total={selectedProduct?.price || 0}
        clearCart={() => setSelectedProduct(null)} 
      />

      {/* Footer */}
      <footer className="bg-mofu-black text-white pt-24 pb-12 mt-24">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col items-center mb-12">
            <span className="font-serif text-2xl tracking-[0.3em] mb-8">MOKO BASIC</span>
            <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-white/60">
              {INFO_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleOpenInfoPage(link.id)}
                  className="hover:text-white transition-colors"
                >
                  {link.label[language]}
                </button>
              ))}
            </div>
          </div>
          <div className="text-center text-[9px] uppercase tracking-widest text-white/40">
            {t.footerCopy}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
