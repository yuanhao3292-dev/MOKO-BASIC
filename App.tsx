import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { AiAssistant } from './components/AiAssistant';
import { FabricSpecs } from './components/FabricSpecs';
import { FitFinder } from './components/FitFinder';
import { SeasonalCollection } from './components/SeasonalCollection';
import { CartSidebar } from './components/CartSidebar';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { UserProfile } from './components/UserProfile';
import { getProducts, TRANSLATIONS } from './constants';
import { ViewState, Language, Product, CartItem, User } from './types';
import { ArrowRight, ChevronDown, Ruler, Leaf, Camera, X, ExternalLink, ShoppingBag, ShieldCheck, Box, Tag, Droplet } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [language, setLanguage] = useState<Language>('EN');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'ESSENTIALS' | 'FUNCTION' | 'COUTURE'>('ALL');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // --- E-Commerce State ---
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const products = getProducts(language);
  const t = TRANSLATIONS[language];

  // Wrapper to handle view changes and clean up modal states
  const handleSetView = (newView: ViewState) => {
    setSelectedProduct(null);
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Cart Actions ---
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, cartId: `${product.id}-${Date.now()}`, quantity: 1 }];
    });
    setIsCartOpen(true);
    // If detail modal is open, keep it open, cart slides over
  };

  const updateCartQuantity = (cartId: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.cartId === cartId) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartTotal > 10000 ? 0 : 800;

  // --- Auth Actions ---
  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsAuthOpen(false);
    setView(ViewState.PROFILE);
  };

  const handleLogout = () => {
    setUser(null);
    setView(ViewState.HOME);
  };

  // --- RENDER FUNCTIONS FOR PAGES ---

  const renderHome = () => (
    <>
      <section className="relative h-screen w-full bg-stone-50 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1948&auto=format&fit=crop"
          alt="Moko Basic Morning Light"
          className="absolute inset-0 w-full h-full object-cover opacity-90 scale-100 animate-[pulse_20s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-white/10 mix-blend-screen"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-9xl font-serif font-medium tracking-widest mb-8 text-mofu-black fade-in-up" style={{ animationDelay: '0.2s' }}>
            MOKO BASIC
          </h1>
          <div className="h-px w-16 bg-mofu-black/30 mb-8 fade-in-up" style={{ animationDelay: '0.8s' }}></div>
          <p className="text-sm md:text-lg font-serif italic tracking-[0.15em] text-mofu-black/80 fade-in-up" style={{ animationDelay: '1.2s' }}>
            {t.heroSlogan}
          </p>
        </div>
        <div className="absolute bottom-12 w-full flex justify-center fade-in-up" style={{ animationDelay: '2s' }}>
           <ChevronDown className="text-mofu-gold animate-bounce" size={32} strokeWidth={1} />
        </div>
      </section>
      <SeasonalCollection 
        products={products} 
        language={language} 
        onProductClick={setSelectedProduct} 
      />
    </>
  );

  const renderPhilosophy = () => (
    <div className="bg-white min-h-screen">
       {/* Chapter 1: The Origin */}
       <div className="max-w-screen-2xl mx-auto px-6 py-32 md:py-48">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1">
                <div className="flex items-center space-x-4 mb-8">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block">Chapter 01</span>
                    <div className="h-px w-12 bg-mofu-gold"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-mofu-black mb-12">{t.storyCh1Title}</h2>
                <div className="md:flex md:space-x-12">
                   {(language === 'JP' || language === 'ZH_TW') && (
                      <h3 className="hidden md:block text-2xl font-serif text-mofu-black h-64 [writing-mode:vertical-rl] tracking-widest border-r border-stone-200 pr-6 mr-6">
                        {t.storyCh1Head}
                      </h3>
                   )}
                   {(language === 'EN') && (
                      <h3 className="text-2xl font-serif text-mofu-black mb-6 md:mb-0 md:w-1/3">
                        {t.storyCh1Head}
                      </h3>
                   )}
                   <p className="text-sm font-serif leading-loose text-stone-600 tracking-wide text-justify md:flex-1">
                      {t.storyCh1Text}
                   </p>
                </div>
             </div>
             <div className="order-1 md:order-2 h-[500px] md:h-[700px] bg-stone-100 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:scale-105 transition-transform duration-[3s]" alt="Discovery" />
             </div>
          </div>
       </div>

       {/* Chapter 2: The Creed (Parallax) */}
       <div className="relative h-[80vh] w-full overflow-hidden bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=1000&auto=format&fit=crop")' }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
             <span className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-mofu-gold">Chapter 02</span>
             <h2 className="text-5xl md:text-7xl font-serif mb-12">{t.storyCh2Title}</h2>
             <div className="max-w-2xl border-l-2 border-mofu-gold pl-8 text-left">
                <h3 className={`text-2xl md:text-3xl font-serif mb-6 ${language !== 'EN' ? '[writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] md:h-48 md:absolute md:-left-24 md:top-0' : ''}`}>
                   {t.storyCh2Head}
                </h3>
                <p className="text-sm md:text-base font-light leading-loose tracking-wide opacity-90">
                   {t.storyCh2Text}
                </p>
             </div>
          </div>
       </div>

       {/* Chapter 3: The Dignity & Trust */}
       <div className="bg-mofu-light-gray py-32 md:py-48">
         <div className="max-w-screen-xl mx-auto px-6">
            <div className="text-center mb-24 max-w-2xl mx-auto">
               <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold mb-6 block">Chapter 03</span>
               <h2 className="text-4xl font-serif text-mofu-black mb-8">{t.storyCh3Head}</h2>
               <p className="text-sm font-serif leading-loose text-stone-600 mb-12">
                  {t.storyCh3Text}
               </p>
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-12 mx-auto opacity-30" alt="Signature" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-200 pt-24">
               <div className="bg-white p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
                  <div className="bg-stone-50 p-4 rounded-full mb-6 group-hover:bg-mofu-gold/10 transition-colors">
                    <ShieldCheck size={32} strokeWidth={1} className="text-mofu-gold" />
                  </div>
                  <h4 className="text-xl font-serif text-mofu-black mb-4">{t.trustBaby}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest max-w-xs">{t.trustBabyDesc}</p>
               </div>
               <div className="bg-white p-12 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-500 group">
                  <div className="bg-stone-50 p-4 rounded-full mb-6 group-hover:bg-mofu-gold/10 transition-colors">
                    <Box size={32} strokeWidth={1} className="text-mofu-gold" />
                  </div>
                  <h4 className="text-xl font-serif text-mofu-black mb-4">{t.trust3D}</h4>
                  <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest max-w-xs">{t.trust3DDesc}</p>
               </div>
            </div>
         </div>
       </div>
    </div>
  );

  const renderCraft = () => (
    <div className="bg-mofu-light-gray min-h-screen pt-32 pb-24">
       <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-24 text-center">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-4 block">Savoir-Faire</span>
             <h1 className="text-6xl font-serif text-mofu-black">{t.craftTitle}</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
             <div className="order-2 lg:order-1 space-y-12">
                <div className="flex flex-col space-y-4">
                   <span className="text-xs font-bold uppercase tracking-widest text-mofu-gold flex items-center gap-2">
                       <Leaf size={14} /> {t.craftSub1}
                   </span>
                   <h3 className="text-3xl font-serif">Organic Cotton</h3>
                   <p className="text-sm font-light leading-loose text-stone-600">{t.craftDesc1}</p>
                   <p className="text-sm font-light leading-loose text-stone-600">{t.craftText}</p>
                </div>
             </div>
             <div className="order-1 lg:order-2 h-[600px] overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Fabric"/>
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-4 py-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-mofu-black">Macro View 100x</span>
                </div>
             </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="h-[600px] overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1596464716127-f9a08596048d?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Atelier"/>
             </div>
             <div className="space-y-12">
                <div className="flex flex-col space-y-4">
                   <span className="text-xs font-bold uppercase tracking-widest text-mofu-gold flex items-center gap-2">
                       <Tag size={14} /> {t.craftSub2}
                   </span>
                   <h3 className="text-3xl font-serif">Zero Irritation</h3>
                   <p className="text-sm font-light leading-loose text-stone-600">{t.craftDesc2}</p>
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  const renderJournal = () => (
    <div className="bg-white min-h-screen pt-32 pb-24">
       <div className="max-w-screen-2xl mx-auto px-6 mb-24 text-center">
          <h1 className="text-9xl font-serif text-stone-100 absolute left-0 right-0 -z-10 select-none">JOURNAL</h1>
          <h2 className="text-4xl font-serif text-mofu-black mt-12 relative z-10">{t.journalSub}</h2>
       </div>
       <div className="max-w-screen-xl mx-auto px-6 space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Tokyo Stroll"/>
                <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
             </div>
             <div className="md:pl-12">
                <span className="text-xs font-bold tracking-widest uppercase text-mofu-gold mb-4 block">{t.journal1Date}</span>
                <h3 className="text-3xl font-serif mb-6 hover:text-mofu-gold cursor-pointer transition-colors">{t.journal1Title}</h3>
                <p className="text-sm font-light leading-loose text-stone-600 mb-8">{t.journal1Desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:border-mofu-gold hover:text-mofu-gold transition-colors">Read Story</button>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="md:order-2 relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9205?q=80&w=1000&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Care Guide"/>
                 <div className="absolute bottom-6 right-6 bg-white p-2 rounded-full text-mofu-gold opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Droplet size={20} />
                 </div>
             </div>
             <div className="md:pr-12 md:order-1 text-right md:text-right text-left">
                <span className="text-xs font-bold tracking-widest uppercase text-mofu-gold mb-4 block">{t.journal2Date}</span>
                <h3 className="text-3xl font-serif mb-6 hover:text-mofu-gold cursor-pointer transition-colors">{t.journal2Title}</h3>
                <p className="text-sm font-light leading-loose text-stone-600 mb-8 ml-auto">{t.journal2Desc}</p>
                <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:border-mofu-gold hover:text-mofu-gold transition-colors">Read Guide</button>
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

          <div className="flex flex-col justify-center p-8 lg:p-24 bg-white">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold mb-6">MOKO {selectedProduct.subcategory}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4 leading-tight">{selectedProduct.name}</h1>
             <p className="text-xl font-serif italic text-stone-400 mb-8">¥{selectedProduct.price.toLocaleString()}</p>
             <div className="w-12 h-px bg-mofu-gold mb-8"></div>
             <p className="text-sm font-light leading-loose text-stone-600 mb-12 tracking-wide max-w-md">{selectedProduct.description}</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <FabricSpecs specs={selectedProduct.specs} language={language} />
                <FitFinder language={language} />
             </div>
             <div className="space-y-4">
               <button 
                  onClick={() => addToCart(selectedProduct)}
                  className="w-full bg-mofu-black text-white py-5 text-xs font-bold tracking-[0.25em] uppercase hover:bg-mofu-gold transition-colors flex items-center justify-center space-x-2"
               >
                 <span>{t.addToCart}</span>
                 <ShoppingBag size={14} />
               </button>
               {selectedProduct.amazonUrl && (
                  <button className="w-full border border-stone-300 text-stone-500 py-4 text-xs font-bold tracking-[0.25em] uppercase hover:border-mofu-black hover:text-mofu-black transition-colors flex items-center justify-center space-x-2">
                    <span>{t.buyAmazon}</span>
                    <ExternalLink size={14} />
                  </button>
               )}
             </div>
          </div>
        </div>
      </div>
    );
  };

  const renderShop = () => {
    const filteredProducts = selectedCategory === 'ALL' 
      ? products 
      : products.filter(p => p.subcategory === selectedCategory);
    
    const renderFeatureBlock = (title: string, sub: string, storyTitle: string, story: string) => (
       <div className="col-span-2 md:col-span-4 py-24 my-8 flex flex-col justify-center items-center bg-stone-50/50">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold mb-4 block">Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4">{title}</h2>
          <p className="font-serif italic text-stone-500 mb-12">{sub}</p>
          <div className="max-w-2xl text-center border-t border-stone-200 pt-12 mt-4 px-6">
             <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2 block">{storyTitle}</span>
             <p className="text-sm font-light leading-loose text-stone-600">{story}</p>
          </div>
       </div>
    );

    const displayItems: React.ReactNode[] = [];
    if (selectedCategory === 'ALL') {
      displayItems.push(<React.Fragment key="header-essentials">{renderFeatureBlock(t.colEssentials, t.colEssentialsSub, t.colEssentialsStoryTitle, t.colEssentialsStory)}</React.Fragment>);
      products.filter(p => p.subcategory === 'ESSENTIALS').forEach(p => {
         displayItems.push(<div key={p.id} className="col-span-1"><ProductCard product={p} language={language} onClick={() => setSelectedProduct(p)} /></div>);
      });
      displayItems.push(<React.Fragment key="header-function">{renderFeatureBlock(t.colFunction, t.colFunctionSub, t.colFunctionStoryTitle, t.colFunctionStory)}</React.Fragment>);
      products.filter(p => p.subcategory === 'FUNCTION').forEach(p => {
         displayItems.push(<div key={p.id} className="col-span-1"><ProductCard product={p} language={language} onClick={() => setSelectedProduct(p)} /></div>);
      });
      displayItems.push(<React.Fragment key="header-couture">{renderFeatureBlock(t.colCouture, t.colCoutureSub, t.colCoutureStoryTitle, t.colCoutureStory)}</React.Fragment>);
      products.filter(p => p.subcategory === 'COUTURE').forEach(p => {
         let spanClass = "col-span-1";
         if (p.layout === 'large') spanClass = "col-span-2 row-span-2";
         if (p.layout === 'wide') spanClass = "col-span-2";
         displayItems.push(<div key={p.id} className={spanClass}><ProductCard product={p} language={language} onClick={() => setSelectedProduct(p)} /></div>);
      });
    } else {
        filteredProducts.forEach(p => {
             let spanClass = "col-span-1";
             if (p.layout === 'large') spanClass = "col-span-2 row-span-2";
             if (p.layout === 'wide') spanClass = "col-span-2";
             displayItems.push(<div key={p.id} className={spanClass}><ProductCard product={p} language={language} onClick={() => setSelectedProduct(p)} /></div>);
        });
    }

    return (
      <div className="bg-white min-h-screen pt-32 pb-24">
         <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-stone-100 py-6 mb-12">
            <div className="flex justify-center space-x-4 md:space-x-12 overflow-x-auto no-scrollbar px-6">
               <button onClick={() => setSelectedCategory('ALL')} className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${selectedCategory === 'ALL' ? 'text-mofu-black border-b border-mofu-black pb-1' : 'text-stone-400 hover:text-mofu-gold'}`}>View All</button>
               <button onClick={() => setSelectedCategory('ESSENTIALS')} className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${selectedCategory === 'ESSENTIALS' ? 'text-mofu-black border-b border-mofu-black pb-1' : 'text-stone-400 hover:text-mofu-gold'}`}>Essentials</button>
               <button onClick={() => setSelectedCategory('FUNCTION')} className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${selectedCategory === 'FUNCTION' ? 'text-mofu-black border-b border-mofu-black pb-1' : 'text-stone-400 hover:text-mofu-gold'}`}>Function</button>
               <button onClick={() => setSelectedCategory('COUTURE')} className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${selectedCategory === 'COUTURE' ? 'text-mofu-black border-b border-mofu-black pb-1' : 'text-stone-400 hover:text-mofu-gold'}`}>Le Petit Teddy</button>
            </div>
         </div>
         <div className="max-w-screen-2xl mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-20 grid-flow-dense">
              {displayItems}
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
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => !user && setIsAuthOpen(true)}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        isLoggedIn={!!user}
      />
      
      {/* Overlays & Modals */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateCartQuantity}
        onCheckout={() => { setIsCartOpen(false); setIsCheckoutOpen(true); }}
        language={language}
      />
      
      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        language={language}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        total={cartTotal + shipping}
        clearCart={clearCart}
      />
      
      {/* Product Detail Modal */}
      {selectedProduct && renderProductDetail()}

      <main>
        {view === ViewState.HOME && renderHome()}
        {view === ViewState.SHOP && renderShop()}
        {view === ViewState.PHILOSOPHY && renderPhilosophy()}
        {view === ViewState.CRAFT && renderCraft()}
        {view === ViewState.JOURNAL && renderJournal()}
        {view === ViewState.PROFILE && user && <UserProfile user={user} onLogout={handleLogout} language={language} />}
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
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerHelp}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                  <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Size Guide</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerServices}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                  <li className="hover:text-white cursor-pointer transition-colors">After-Sales</li>
                  <li onClick={() => setView(ViewState.CRAFT)} className="hover:text-white cursor-pointer transition-colors">Craftsmanship</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Gifting</li>
                </ul>
              </div>
               <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-8 text-white">{t.footerAbout}</h4>
                <ul className="space-y-4 text-xs text-stone-400">
                  <li onClick={() => handleSetView(ViewState.PHILOSOPHY)} className="hover:text-white cursor-pointer transition-colors">La Maison</li>
                  <li onClick={() => handleSetView(ViewState.JOURNAL)} className="hover:text-white cursor-pointer transition-colors">Journal</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Legal</li>
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