import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, X, Search, User as UserIcon } from 'lucide-react';
import { ViewState, Language } from '../types';
import { NAV_LINKS, TRANSLATIONS } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  forceSolid?: boolean;
  onOpenCart: () => void;
  onOpenLogin: () => void;
  cartCount: number;
  isLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  setView, 
  language, 
  setLanguage, 
  forceSolid = false,
  onOpenCart,
  onOpenLogin,
  cartCount,
  isLoggedIn
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleLanguage = () => {
    if (language === 'EN') setLanguage('JP');
    else if (language === 'JP') setLanguage('ZH_TW');
    else setLanguage('EN');
  };

  const getLangLabel = (lang: Language) => {
    if (lang === 'EN') return 'EN';
    if (lang === 'JP') return 'JP';
    return '繁';
  };

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2, 4);

  const showSolid = isScrolled || isMenuOpen || forceSolid;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showSolid ? 'bg-white/95 backdrop-blur-md text-mofu-black py-4 shadow-sm' : 'bg-transparent text-white py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center">
            
            {/* Mobile Menu Toggle */}
            <div className="flex-1 flex items-center justify-start lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 -ml-1 hover:opacity-70 transition-opacity"
              >
                {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>

            {/* Desktop Left Links */}
            <div className="hidden lg:flex flex-1 justify-end space-x-8 xl:space-x-12 pr-12">
              {leftLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setView(link.value as ViewState)}
                  className={`text-xs font-bold tracking-widest uppercase hover-underline-animation ${
                    showSolid ? 'text-mofu-black' : 'text-white'
                  }`}
                >
                  {link.label[language]}
                </button>
              ))}
            </div>

            {/* Brand Logo - Single Line */}
            <div className="flex-shrink-0 cursor-pointer px-4" onClick={() => setView(ViewState.HOME)}>
              <span className={`font-serif text-2xl md:text-3xl tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                MOKO BASIC
              </span>
            </div>

            {/* Desktop Right Links */}
            <div className="hidden lg:flex flex-1 justify-start space-x-8 xl:space-x-12 pl-12">
              {rightLinks.map((link) => (
                <button
                  key={link.value}
                  onClick={() => setView(link.value as ViewState)}
                  className={`text-xs font-bold tracking-widest uppercase hover-underline-animation ${
                    showSolid ? 'text-mofu-black' : 'text-white'
                  }`}
                >
                  {link.label[language]}
                </button>
              ))}
            </div>

            {/* Utilities */}
            <div className="flex-1 flex justify-end items-center">
              <div className="flex items-center space-x-4 xl:space-x-6">
                <button 
                  onClick={cycleLanguage}
                  className="text-xs font-serif italic hover:opacity-70 transition-opacity"
                >
                  {getLangLabel(language)}
                </button>

                <button className="hidden sm:block hover:opacity-70 transition-opacity">
                  <Search size={20} strokeWidth={1} />
                </button>
                
                <button 
                  onClick={() => isLoggedIn ? setView(ViewState.PROFILE) : onOpenLogin()}
                  className={`hover:opacity-70 transition-opacity ${isLoggedIn ? 'text-mofu-gold' : ''}`}
                >
                  <UserIcon size={20} strokeWidth={1} />
                </button>
                
                <button onClick={onOpenCart} className="hover:opacity-70 transition-opacity relative">
                  <ShoppingBag size={20} strokeWidth={1} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-mofu-gold rounded-full border border-white"></span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-32 px-8 fade-in-up lg:hidden">
           <div className="flex flex-col space-y-8">
             {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  setView(link.value as ViewState);
                  setIsMenuOpen(false);
                }}
                className="text-2xl font-serif text-mofu-black text-left border-b border-stone-100 pb-4"
              >
                {link.label[language]}
              </button>
            ))}
            <div className="pt-8 flex flex-col space-y-6">
              <button onClick={() => { setView(ViewState.PROFILE); setIsMenuOpen(false); }} className="text-xs uppercase tracking-widest text-stone-400 text-left">Client Services</button>
              <span className="text-xs uppercase tracking-widest text-stone-400">Stores</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};