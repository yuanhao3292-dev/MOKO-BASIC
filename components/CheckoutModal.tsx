import React, { useState } from 'react';
import { X, Check, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  total: number;
  clearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, cart, total, clearCart }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1); // 1: Info, 2: Payment, 3: Success
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
      clearCart();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-stone-100 flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
      {/* Left: Summary (Mobile: Top, Desktop: Left Sidebar) */}
      <div className="w-full md:w-1/3 bg-stone-50 p-8 border-b md:border-r border-stone-200 overflow-y-auto">
        <div className="flex justify-between items-center mb-8 md:hidden">
            <span className="font-serif text-xl">MOKO BASIC</span>
            <button onClick={onClose}><X /></button>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400">Order Summary</h3>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.cartId} className="flex justify-between text-sm">
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-white border border-stone-200 rounded-sm overflow-hidden relative">
                     <img src={item.image} className="w-full h-full object-cover" />
                     <span className="absolute -top-1 -right-1 bg-stone-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{item.quantity}</span>
                   </div>
                   <span className="font-serif text-mofu-black">{item.name}</span>
                </div>
                <span className="text-stone-500">¥{(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-stone-200 pt-6 space-y-2">
            <div className="flex justify-between text-sm text-stone-500">
               <span>Subtotal</span>
               <span>¥{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-stone-500">
               <span>Shipping</span>
               <span>Included</span>
            </div>
            <div className="flex justify-between text-lg font-serif text-mofu-black pt-2">
               <span>Total</span>
               <span className="text-mofu-gold">¥{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Steps */}
      <div className="flex-1 bg-white p-8 md:p-12 md:max-w-2xl mx-auto flex flex-col justify-center relative">
         <button onClick={onClose} className="absolute top-8 right-8 hidden md:block p-2 hover:bg-stone-50 rounded-full">
           <X size={24} />
         </button>

         {step === 1 && (
           <div className="space-y-8 fade-in-up">
             <div className="flex items-center space-x-2 text-mofu-gold mb-4">
                <Truck size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Shipping</span>
             </div>
             <h2 className="text-3xl font-serif mb-8">Where should we send your Moko?</h2>
             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="First Name" required className="border-b border-stone-200 py-3 focus:border-mofu-gold outline-none" />
                   <input type="text" placeholder="Last Name" required className="border-b border-stone-200 py-3 focus:border-mofu-gold outline-none" />
                </div>
                <input type="text" placeholder="Address" required className="w-full border-b border-stone-200 py-3 focus:border-mofu-gold outline-none" />
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="City" required className="border-b border-stone-200 py-3 focus:border-mofu-gold outline-none" />
                   <input type="text" placeholder="Postal Code" required className="border-b border-stone-200 py-3 focus:border-mofu-gold outline-none" />
                </div>
                <button type="submit" className="w-full bg-mofu-black text-white py-4 mt-8 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-colors">
                  Continue to Payment
                </button>
             </form>
           </div>
         )}

         {step === 2 && (
           <div className="space-y-8 fade-in-up">
             <div className="flex items-center space-x-2 text-mofu-gold mb-4">
                <CreditCard size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Payment</span>
             </div>
             <h2 className="text-3xl font-serif mb-8">Secure Checkout</h2>
             <div className="bg-stone-50 p-6 rounded-sm border border-stone-100 mb-8">
               <div className="flex items-center space-x-4 mb-4">
                 <ShieldCheck className="text-green-600" size={20} />
                 <span className="text-sm text-stone-600">SSL Encrypted Transaction</span>
               </div>
               <input type="text" placeholder="Card Number" className="w-full bg-white border border-stone-200 p-3 rounded-sm mb-4 outline-none focus:border-mofu-gold" />
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="MM / YY" className="bg-white border border-stone-200 p-3 rounded-sm outline-none focus:border-mofu-gold" />
                 <input type="text" placeholder="CVC" className="bg-white border border-stone-200 p-3 rounded-sm outline-none focus:border-mofu-gold" />
               </div>
             </div>
             <button 
                onClick={handlePayment} 
                disabled={isLoading}
                className="w-full bg-mofu-gold text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200 flex justify-center items-center"
             >
                {isLoading ? <span className="animate-pulse">Processing...</span> : `Pay ¥${total.toLocaleString()}`}
             </button>
             <button onClick={() => setStep(1)} className="w-full text-center text-xs text-stone-400 underline mt-4">Back to Shipping</button>
           </div>
         )}

         {step === 3 && (
           <div className="text-center fade-in-up flex flex-col items-center">
             <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8">
               <Check size={40} />
             </div>
             <h2 className="text-4xl font-serif text-mofu-black mb-4">Merci!</h2>
             <p className="text-stone-500 font-serif italic mb-8 max-w-sm">
               Your order has been confirmed. We are preparing your Moko Basic package with care.
             </p>
             <button onClick={onClose} className="bg-mofu-black text-white px-12 py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-stone-800 transition-colors">
               Continue Shopping
             </button>
           </div>
         )}
      </div>
    </div>
  );
};