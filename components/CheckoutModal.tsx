
import React, { useState } from 'react';
import { X, Check, CreditCard, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  clearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, cart, total, clearCart }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleAmazonPay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      clearCart();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
      {/* Close Button Desktop */}
      <button onClick={onClose} className="absolute top-8 right-8 z-50 p-2 hover:bg-stone-50 rounded-full hidden md:block">
        <X size={24} strokeWidth={1} />
      </button>

      {/* Left: Summary */}
      <div className="w-full md:w-[400px] bg-stone-50 p-8 md:p-12 overflow-y-auto">
        <div className="flex justify-between items-center mb-12 md:hidden">
            <span className="font-serif text-xl tracking-widest">MOKO BASIC</span>
            <button onClick={onClose}><X strokeWidth={1} /></button>
        </div>
        
        <div className="space-y-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">Your Selection</h3>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.cartId} className="flex space-x-4 text-sm">
                <div className="w-16 h-20 bg-white border border-stone-100 rounded-sm overflow-hidden flex-shrink-0">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                   <p className="font-serif text-mofu-black">{item.name}</p>
                   <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                </div>
                <div className="flex flex-col justify-center items-end">
                   <span className="text-stone-500">¥{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-stone-200 pt-10 space-y-4">
            <div className="flex justify-between text-xs text-stone-500 uppercase tracking-widest">
               <span>Total Value</span>
               <span className="text-lg font-serif text-mofu-black">¥{total.toLocaleString()}</span>
            </div>
            <p className="text-[10px] text-stone-400 italic">Complimentary shipping on all orders.</p>
          </div>
        </div>
      </div>

      {/* Right: Payment Method Choice */}
      <div className="flex-1 bg-white p-8 md:p-24 flex flex-col justify-center items-center">
         {step < 3 && (
           <div className="max-w-md w-full space-y-12 fade-in-up text-center">
             <div className="space-y-4">
               <h2 className="text-4xl font-serif">Checkout</h2>
               <p className="text-sm text-stone-500">Choose your preferred secure payment method.</p>
             </div>

             {/* Amazon Pay Primary CTA */}
             <div className="space-y-4">
               <button 
                 onClick={handleAmazonPay}
                 disabled={isLoading}
                 className="w-full bg-[#FF9900] text-white py-5 px-8 flex items-center justify-between group hover:brightness-110 transition-all duration-300 shadow-xl shadow-orange-100"
               >
                 <div className="flex items-center space-x-3">
                   <span className="text-sm font-bold tracking-widest uppercase">Amazon Pay</span>
                 </div>
                 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                 Use your Amazon shipping & payment details
               </p>
             </div>

             <div className="relative">
               <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-100"></div></div>
               <div className="relative flex justify-center text-[10px] uppercase tracking-widest"><span className="bg-white px-4 text-stone-300">Or traditional entry</span></div>
             </div>

             <button 
               className="text-xs font-bold uppercase tracking-widest text-mofu-black border-b border-mofu-black pb-1 hover:text-mofu-gold hover:border-mofu-gold transition-colors opacity-50"
             >
               Manual Card Entry
             </button>
           </div>
         )}

         {step === 3 && (
           <div className="text-center fade-in-up flex flex-col items-center max-w-sm">
             <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-mofu-gold mb-10">
               <Check size={48} strokeWidth={1} />
             </div>
             <h2 className="text-4xl font-serif text-mofu-black mb-6 italic">Merci Beaucoup</h2>
             <p className="text-stone-500 text-sm leading-loose mb-12">
               Your Amazon Pay transaction was successful. A confirmation has been sent to your Amazon associated email address.
             </p>
             <button onClick={onClose} className="bg-mofu-black text-white px-16 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-stone-800 transition-colors">
               Back to Atelier
             </button>
           </div>
         )}
      </div>
    </div>
  );
};
