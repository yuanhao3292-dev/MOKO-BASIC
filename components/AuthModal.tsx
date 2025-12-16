import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Language } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: any) => void; // Using any for mock user
  language: Language;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, language }) => {
  const [mode, setMode] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin({
        id: 'user_123',
        name: 'Moko Parent',
        email: 'hello@mokobasic.com',
        petName: 'Coco',
        petWeight: 2.6,
        orders: []
      });
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white p-8 md:p-12 shadow-2xl animate-[fadeInUp_0.3s_ease-out]">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-stone-400 hover:text-black">
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-mofu-black mb-2">
            {mode === 'LOGIN' ? 'Welcome Back' : 'Join Club Moko'}
          </h2>
          <p className="text-xs text-stone-500 tracking-wide uppercase">
            {mode === 'LOGIN' ? 'Access your White Teddy profile' : 'Exclusive benefits for Poodle owners'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === 'REGISTER' && (
             <div className="space-y-1">
               <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Name</label>
               <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors">
                 <User size={16} className="text-stone-400 mr-3" />
                 <input type="text" required placeholder="Your Name" className="w-full outline-none text-sm placeholder-stone-300" />
               </div>
             </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email</label>
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors">
              <Mail size={16} className="text-stone-400 mr-3" />
              <input type="email" required placeholder="name@example.com" className="w-full outline-none text-sm placeholder-stone-300" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Password</label>
            <div className="flex items-center border-b border-stone-200 focus-within:border-mofu-gold py-2 transition-colors">
              <Lock size={16} className="text-stone-400 mr-3" />
              <input type="password" required placeholder="••••••••" className="w-full outline-none text-sm placeholder-stone-300" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-mofu-black text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-all flex items-center justify-center space-x-2 group"
          >
            {isLoading ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>
                <span>{mode === 'LOGIN' ? 'Sign In' : 'Create Account'}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button 
            onClick={() => setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN')}
            className="text-xs text-stone-500 underline hover:text-mofu-gold transition-colors"
          >
            {mode === 'LOGIN' ? "Don't have an account? Join us." : "Already a member? Sign in."}
          </button>
        </div>
      </div>
    </div>
  );
};