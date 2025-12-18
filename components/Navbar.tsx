
import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Plus, Minus, ArrowRight, User } from 'lucide-react';
import { ViewState, Language } from '../types';
import { NAV_LINKS, CATEGORY_FILTERS, TRANSLATIONS, INFO_LINKS } from '../constants';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  forceSolid?: boolean;
  setActiveCategoryFilter: (filter: string) => void;
  onOpenInfo?: (pageId: string) => void;
  onOpenAuth: () => void;
  currentUser: any;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  setView, 
  language, 
  setLanguage, 
  forceSolid = false,
  setActiveCategoryFilter,
  onOpenInfo,
  onOpenAuth,
  currentUser
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  
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

  const showSolid = isScrolled || isMenuOpen || forceSolid;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showSolid ? 'bg-white/95 backdrop-blur-md text-mofu-black py-4 shadow-sm' : 'bg-transparent text-white py-6'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-center relative">
            <div className="flex-1 flex items-center justify-start">
              <button onClick={() => setIsMenuOpen(true)} className="flex items-center space-x-3 group hover:opacity-70 transition-opacity">
                <Menu size={24} strokeWidth={1} className={showSolid ? 'text-mofu-black' : 'text-white'} />
              </button>
            </div>

            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setView(ViewState.HOME)}>
              <span className={`font-serif text-2xl md:text-3xl tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                MOKO BASIC
              </span>
            </div>

            <div className="flex-1 flex justify-end items-center">
              <div className="flex items-center space-x-4 xl:space-x-8">
                <button onClick={cycleLanguage} className={`text-xs font-serif italic hover:opacity-70 transition-opacity ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                  {getLangLabel(language)}
                </button>
                <button className={`hidden sm:block hover:opacity-70 transition-opacity ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                  <Search size={20} strokeWidth={1} />
                </button>
                <button 
                  onClick={currentUser ? () => setView(ViewState.HOME) : onOpenAuth} 
                  className={`hover:opacity-70 transition-opacity flex items-center space-x-2 ${showSolid ? 'text-mofu-black' : 'text-white'}`}
                >
                  <User size={20} strokeWidth={1} />
                  <span className="text-[10px] font-bold tracking-widest hidden lg:block">{currentUser ? 'CONCIERGE' : 'MEMBER'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu Overlay (Keep original but add close triggers) */}
      <div className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
         <div className="px-6 md:px-12 py-6 flex justify-between items-center">
             <button onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 text-mofu-black hover:opacity-70 transition-opacity">
                <X size={24} strokeWidth={1} />
                <span className="text-xs font-bold tracking-widest uppercase">Close</span>
             </button>
         </div>
         <div className="h-full overflow-y-auto pb-32 max-w-screen-xl mx-auto px-6 md:px-12 pt-8">
            <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.value} className="border-b border-stone-100">
                     <button onClick={() => { setView(link.value as ViewState); setIsMenuOpen(false); }} className="w-full py-6 flex justify-between items-center text-left group">
                       <span className="text-2xl md:text-3xl font-serif text-mofu-black">{link.label[language]}</span>
                       <ArrowRight size={20} strokeWidth={1} />
                     </button>
                  </li>
                ))}
                <li className="border-b border-stone-100">
                    <button onClick={() => { setView(ViewState.FITTING_ROOM); setIsMenuOpen(false); }} className="w-full py-6 flex justify-between items-center text-left">
                       <span className="text-2xl md:text-3xl font-serif text-mofu-black">{TRANSLATIONS[language].fittingTitle}</span>
                       <ArrowRight size={20} strokeWidth={1} />
                    </button>
                </li>
            </ul>
         </div>
      </div>
    </>
  );
};
