
import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void;
  language: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const t = TRANSLATIONS[language];

  const handleAmazonLogin = () => {
    setIsLoading(true);
    // Simulate Amazon OAuth
    setTimeout(() => {
      onLogin({
        id: 'AMZN_9901',
        name: 'Moko Parent',
        email: 'moko@amazon.com',
        petName: 'Moko',
        petWeight: 2.5,
        orders: [],
        provider: 'AMAZON'
      });
      setIsLoading(false);
      onClose();
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-2xl animate-[fadeInUp_0.4s_ease-out]">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-stone-400 hover:text-black">
          <X size={20} strokeWidth={1} />
        </button>

        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-[0.3em] text-mofu-gold uppercase mb-4 block">Concierge Access</span>
          <h2 className="text-3xl font-serif text-mofu-black mb-4">{t.loginTitle}</h2>
          <p className="text-xs text-stone-500 leading-relaxed max-w-[280px] mx-auto">
            Securely access your profile to manage your 2.5kg Toy Poodle sizing.
          </p>
        </div>

        {/* Amazon One-Click Login */}
        <div className="space-y-4 mb-10">
           <button 
             onClick={handleAmazonLogin}
             disabled={isLoading}
             className="w-full bg-[#FF9900]/10 border border-[#FF9900]/20 py-4 px-6 rounded-sm flex items-center justify-between group hover:bg-[#FF9900]/20 transition-all duration-300"
           >
              <div className="flex flex-col items-start">
                 <span className="text-[9px] font-bold text-[#FF9900] uppercase tracking-widest mb-1">{t.loginAmazonSub}</span>
                 <span className="text-sm font-bold text-stone-700">{t.loginAmazonBtn}</span>
              </div>
              <ArrowRight size={18} className="text-[#FF9900] group-hover:translate-x-1 transition-transform" />
           </button>
           <div className="flex items-center justify-center space-x-2 text-[9px] text-stone-400 uppercase tracking-widest">
              <ShieldCheck size={12} />
              <span>Orders and sizes will be synced from your Amazon account</span>
           </div>
        </div>

        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-white px-4 text-stone-300">Or use email</span></div>
        </div>

        {/* Traditional Form (Simplified) */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors">
              <Mail size={16} className="text-stone-400 mr-3" strokeWidth={1} />
              <input type="email" placeholder={t.loginEmail} className="w-full outline-none text-sm placeholder-stone-300 bg-transparent" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors">
              <Lock size={16} className="text-stone-400 mr-3" strokeWidth={1} />
              <input type="password" placeholder={t.loginPassword} className="w-full outline-none text-sm placeholder-stone-300 bg-transparent" />
            </div>
          </div>
          <button className="w-full bg-mofu-black text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-all opacity-40 cursor-not-allowed">
            Continue with Email
          </button>
        </form>

        <p className="mt-8 text-[10px] text-stone-400 text-center uppercase tracking-widest">
           By joining, you agree to Moko's Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};
