
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
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentView, 
  setView, 
  language, 
  setLanguage, 
  forceSolid = false,
  setActiveCategoryFilter,
  onOpenInfo
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

  const getMenuLabel = () => {
     if (language === 'JP') return 'メニュー';
     if (language === 'ZH_TW') return '選單';
     return 'Menu';
  };

  const getCloseLabel = () => {
     if (language === 'JP') return '閉じる';
     if (language === 'ZH_TW') return '關閉';
     return 'Close';
  };

  const toggleAccordion = (val: string) => {
    if (expandedMenu === val) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(val);
    }
  };

  const handleSubCategoryClick = (viewValue: string, filterId: string) => {
    setView(viewValue as ViewState);
    setActiveCategoryFilter(filterId);
    setIsMenuOpen(false);
    setExpandedMenu(null);
  };
  
  const handleInfoClick = (id: string) => {
    if (onOpenInfo) onOpenInfo(id);
    setIsMenuOpen(false);
  }

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
            
            {/* Left: Hamburger */}
            <div className="flex-1 flex items-center justify-start">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center space-x-3 group hover:opacity-70 transition-opacity"
              >
                <Menu size={24} strokeWidth={1} className={showSolid ? 'text-mofu-black' : 'text-white'} />
                <span className={`text-xs font-bold tracking-widest uppercase hidden md:block ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                  {getMenuLabel()}
                </span>
              </button>
            </div>

            {/* Center: Brand Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" onClick={() => setView(ViewState.HOME)}>
              <span className={`font-serif text-2xl md:text-3xl tracking-[0.2em] transition-colors duration-300 ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                MOKO BASIC
              </span>
            </div>

            {/* Right: Utilities */}
            <div className="flex-1 flex justify-end items-center space-x-4 md:space-x-8">
                <button 
                  onClick={cycleLanguage}
                  className={`text-xs font-serif italic hover:opacity-70 transition-opacity ${showSolid ? 'text-mofu-black' : 'text-white'}`}
                >
                  {getLangLabel(language)}
                </button>

                <button 
                  onClick={() => setView(ViewState.LOGIN)}
                  className={`flex items-center space-x-2 hover:opacity-70 transition-opacity ${showSolid ? 'text-mofu-black' : 'text-white'}`}
                >
                  <User size={20} strokeWidth={1} />
                </button>
                
                <button className={`hidden sm:block hover:opacity-70 transition-opacity ${showSolid ? 'text-mofu-black' : 'text-white'}`}>
                  <Search size={20} strokeWidth={1} />
                </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         <div className="px-6 md:px-12 py-6 flex justify-between items-center">
             <button onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 text-mofu-black">
                <X size={24} strokeWidth={1} />
                <span className="text-xs font-bold tracking-widest uppercase">{getCloseLabel()}</span>
             </button>
         </div>

         <div className="h-full overflow-y-auto pb-32">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-8 md:pt-16">
               <ul className="flex flex-col">
                  {NAV_LINKS.map((link) => {
                    const isExpandable = link.value === 'MALE' || link.value === 'FEMALE';
                    const isExpanded = expandedMenu === link.value;

                    return (
                      <li key={link.value} className="border-b border-stone-100">
                         {isExpandable ? (
                           <div>
                             <button onClick={() => toggleAccordion(link.value)} className="w-full py-6 flex justify-between items-center group">
                               <span className="text-2xl md:text-3xl font-serif text-mofu-black group-hover:text-stone-600">
                                 {link.label[language]}
                               </span>
                               <span className="text-stone-400 group-hover:text-mofu-black">
                                 {isExpanded ? <Minus size={20} strokeWidth={1} /> : <Plus size={20} strokeWidth={1} />}
                               </span>
                             </button>
                             
                             <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 pl-4">
                                   {CATEGORY_FILTERS.filter(f => f.id !== 'ALL').map((cat) => (
                                     <button key={cat.id} onClick={() => handleSubCategoryClick(link.value, cat.id)} className="text-left text-sm text-stone-500 hover:text-mofu-gold py-2">
                                       {cat.label[language]}
                                     </button>
                                   ))}
                                </div>
                             </div>
                           </div>
                         ) : (
                           <button onClick={() => { setView(link.value as ViewState); setIsMenuOpen(false); }} className="w-full py-6 flex justify-between items-center group">
                             <span className="text-2xl md:text-3xl font-serif text-mofu-black group-hover:text-stone-600">
                               {link.label[language]}
                             </span>
                             <ArrowRight size={20} className="text-transparent group-hover:text-mofu-black transform duration-300" />
                           </button>
                         )}
                      </li>
                    );
                  })}
               </ul>
            </div>
         </div>
      </div>
    </>
  );
};
