import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
  language: Language;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, onClose, cart, updateQuantity, onCheckout, language 
}) => {
  const t = TRANSLATIONS[language];
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 10000 ? 0 : 800;
  const total = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Slide-over Panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-stone-100">
            <h2 className="text-xl font-serif text-mofu-black">Shopping Bag ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
            <button onClick={onClose} className="p-2 hover:bg-stone-50 rounded-full transition-colors">
              <X size={20} strokeWidth={1} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-stone-400 space-y-4">
                <ShoppingBag size={48} strokeWidth={0.5} />
                <p className="font-serif italic">Your wardrobe is empty.</p>
                <button onClick={onClose} className="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-mofu-gold pb-1 mt-4">
                  Discover Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.cartId} className="flex space-x-4">
                  <div className="w-24 h-32 bg-stone-50 flex-shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-serif text-mofu-black">{item.name}</h3>
                        <span className="text-xs font-sans text-stone-500">¥{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                      <p className="text-xs text-stone-400 mt-1">{item.subcategory} {item.selectedSize ? `/ ${item.selectedSize}` : ''}</p>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center border border-stone-200">
                        <button 
                          onClick={() => updateQuantity(item.cartId, -1)}
                          className="p-1 hover:bg-stone-50 text-stone-500"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-xs font-sans">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.cartId, 1)}
                          className="p-1 hover:bg-stone-50 text-stone-500"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => updateQuantity(item.cartId, -item.quantity)}
                        className="text-[10px] uppercase tracking-widest text-stone-400 hover:text-red-500 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="p-6 bg-stone-50 border-t border-stone-100">
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Subtotal</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-500">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Complimentary' : `¥${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-mofu-black pt-4 border-t border-stone-200 mt-2">
                  <span>Total</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-mofu-gold text-white py-4 text-xs font-bold tracking-[0.25em] uppercase hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};