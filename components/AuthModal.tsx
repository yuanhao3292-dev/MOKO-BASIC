import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { authApi } from '../src/services/api';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
  language: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  language,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const t = TRANSLATIONS[language];

  const handleAmazonLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await authApi.getAmazonAuthUrl();

      if (response.data?.authorization_url) {
        // Redirect to Amazon OAuth
        window.location.href = response.data.authorization_url;
      } else {
        setError(response.error || 'Failed to connect to Amazon');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Amazon login error:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-2xl animate-[fadeInUp_0.4s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-black"
        >
          <X size={20} strokeWidth={1} />
        </button>

        <div className="text-center mb-10">
          <span className="text-[10px] font-bold tracking-[0.3em] text-mofu-gold uppercase mb-4 block">
            Concierge Access
          </span>
          <h2 className="text-3xl font-serif text-mofu-black mb-4">
            {t.loginTitle}
          </h2>
          <p className="text-xs text-stone-500 leading-relaxed max-w-[280px] mx-auto">
            Securely access your profile to manage your 2.5kg Toy Poodle sizing.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs rounded-sm">
            {error}
          </div>
        )}

        {/* Amazon One-Click Login */}
        <div className="space-y-4 mb-10">
          <button
            onClick={handleAmazonLogin}
            disabled={isLoading}
            className="w-full bg-[#FF9900]/10 border border-[#FF9900]/20 py-4 px-6 rounded-sm flex items-center justify-between group hover:bg-[#FF9900]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-bold text-[#FF9900] uppercase tracking-widest mb-1">
                {t.loginAmazonSub}
              </span>
              <span className="text-sm font-bold text-stone-700">
                {isLoading ? 'Connecting...' : t.loginAmazonBtn}
              </span>
            </div>
            {isLoading ? (
              <Loader2
                size={18}
                className="text-[#FF9900] animate-spin"
              />
            ) : (
              <ArrowRight
                size={18}
                className="text-[#FF9900] group-hover:translate-x-1 transition-transform"
              />
            )}
          </button>
          <div className="flex items-center justify-center space-x-2 text-[9px] text-stone-400 uppercase tracking-widest">
            <ShieldCheck size={12} />
            <span>Orders and sizes will be synced from your Amazon account</span>
          </div>
        </div>

        <div className="relative mb-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-100"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
            <span className="bg-white px-4 text-stone-300">Or use email</span>
          </div>
        </div>

        {/* Traditional Form (Disabled - Coming Soon) */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-1">
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors opacity-40">
              <Mail size={16} className="text-stone-400 mr-3" strokeWidth={1} />
              <input
                type="email"
                placeholder={t.loginEmail}
                className="w-full outline-none text-sm placeholder-stone-300 bg-transparent cursor-not-allowed"
                disabled
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors opacity-40">
              <Lock size={16} className="text-stone-400 mr-3" strokeWidth={1} />
              <input
                type="password"
                placeholder={t.loginPassword}
                className="w-full outline-none text-sm placeholder-stone-300 bg-transparent cursor-not-allowed"
                disabled
              />
            </div>
          </div>
          <button
            type="button"
            className="w-full bg-mofu-black text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-all opacity-40 cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </form>

        <p className="mt-8 text-[10px] text-stone-400 text-center uppercase tracking-widest">
          By joining, you agree to Moko's Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};
