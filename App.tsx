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
import { ProductHotspots } from './components/ProductHotspots';
import { JournalViewer } from './components/JournalViewer';
import { OccasionCarousel } from './components/OccasionCarousel';
import { getProducts, TRANSLATIONS, JOURNAL_POSTS } from './constants';
import { ViewState, Language, Product, CartItem, User } from './types';
import { ArrowRight, ChevronDown, Ruler, Leaf, Camera, X, ExternalLink, ShoppingBag, ShieldCheck, Box, Tag, Droplet, Scissors, Award, Microscope, HeartHandshake, Smile } from 'lucide-react';

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
    <div className="min-h-screen bg-stone-50">
       
       {/* PART 1: THE ORIGIN (Noise & Clarity) */}
       <div className="bg-white py-32 px-6">
          <div className="max-w-screen-xl mx-auto">
             <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                      <img src="https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-90" alt="Lost in Noise" />
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

       {/* PART 2: THE WARDROBE (Shop by Occasion UI) */}
       <div className="bg-[#fcfbf9] py-32 px-6 overflow-hidden">
          <div className="max-w-screen-xl mx-auto mb-16 text-center">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block mb-6">Chapter 02 : {t.philWardrobeTitle}</span>
             <h2 className="text-3xl md:text-5xl font-serif text-mofu-black mb-8">{t.philWardrobeHead}</h2>
             <p className="text-sm font-light leading-loose text-stone-600 max-w-2xl mx-auto mb-16">
               {t.philWardrobeText}
             </p>
             
             {/* The Visual Component */}
             <div className="mt-12">
               <OccasionCarousel language={language} />
             </div>
          </div>
       </div>

       {/* PART 3: THE TWO HEARTS (Legacy Concept - Deep Dive) */}
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

       {/* PART 4: THE PROMISE (Value) */}
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" className="h-10 mx-auto opacity-20" alt="Signature" />
         </div>
       </div>
    </div>
  );

  const renderCraft = () => (
    <div className="bg-white min-h-screen pt-32 pb-24">
       <div className="max-w-screen-2xl mx-auto px-6">
          {/* Header */}
          <div className="mb-32 text-center">
             <span className="text-xs font-bold tracking-[0.3em] uppercase text-stone-400 mb-4 block">Savoir-Faire</span>
             <h1 className="text-6xl font-serif text-mofu-black mb-4">{t.craftTitle}</h1>
             <p className="font-serif italic text-stone-500">{t.craftSubtitle}</p>
          </div>

          {/* SECTION 1: MATERIAL SCIENCE (Macro Shot + Data Radar) */}
          <div className="mb-48">
             <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                {/* Visual: Macro Shot */}
                <div className="w-full md:w-1/2 relative">
                   <div className="aspect-square bg-stone-100 overflow-hidden relative rounded-sm group">
                      <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]" alt="Macro Cotton" />
                      <div className="absolute inset-0 border-[1px] border-mofu-gold/20 m-8"></div>
                      <div className="absolute top-12 right-12 text-mofu-gold">
                         <Microscope size={24} strokeWidth={1} />
                      </div>
                      <div className="absolute bottom-12 left-12 bg-white/90 backdrop-blur px-4 py-2">
                         <span className="text-xs font-bold uppercase tracking-widest text-mofu-black">Cotton 100x Zoom</span>
                      </div>
                   </div>
                </div>

                {/* Content: Material Theory */}
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

                   {/* Data Visualization */}
                   <div className="bg-stone-50 p-8 rounded-sm border border-stone-100 flex flex-col items-center">
                      <FabricSpecs 
                        specs={{ warmth: 90, breathability: 95, stretch: 85, softness: 100 }} 
                        language={language} 
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* SECTION 2: TAILORING (Interactive Hotspots) */}
          <div className="mb-48">
             <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-4 block">02 — {t.craftTailorTitle}</span>
                <h2 className="text-4xl font-serif text-mofu-black mb-6">{t.craftTailorHead}</h2>
                <p className="text-sm font-light leading-loose text-stone-600">{t.craftTailorText}</p>
             </div>

             <div className="w-full h-[80vh] border border-stone-200 shadow-xl relative">
                <ProductHotspots 
                   image="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop"
                   hotspots={[
                      { id: 'h1', x: 45, y: 35, title: t.hotspotArchTitle, description: t.hotspotArchDesc },
                      { id: 'h2', x: 30, y: 45, title: t.hotspotArmTitle, description: t.hotspotArmDesc },
                      { id: 'h3', x: 50, y: 20, title: t.hotspotTagTitle, description: t.hotspotTagDesc },
                   ]}
                />
             </div>
          </div>

          {/* SECTION 3: SEWING (Minimalist Graphics) */}
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

          {/* TRUST BADGES */}
          <div className="border-t border-stone-200 pt-24 pb-12">
             <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex flex-col items-center gap-4">
                   <Award size={32} strokeWidth={1} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">100% Organic</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                   <ShieldCheck size={32} strokeWidth={1} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Baby Safe</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                   <Box size={32} strokeWidth={1} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">3D Tailored</span>
                </div>
                <div className="flex flex-col items-center gap-4">
                   <HeartHandshake size={32} strokeWidth={1} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Hand Finished</span>
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
        {view === ViewState.JOURNAL && <JournalViewer posts={JOURNAL_POSTS} products={products} language={language} onAddToCart={addToCart} />}
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