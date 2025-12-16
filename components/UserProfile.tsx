import React from 'react';
import { User, LogOut, Package, Dog } from 'lucide-react';
import { User as UserType, Language } from '../types';

interface UserProfileProps {
  user: UserType;
  onLogout: () => void;
  language: Language;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, language }) => {
  return (
    <div className="bg-stone-50 min-h-screen pt-32 pb-24">
      <div className="max-w-screen-lg mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-200 pb-8">
          <div>
             <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-2 block">Client ID: {user.id}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-mofu-black">Bonjour, {user.name.split(' ')[0]}</h1>
          </div>
          <button 
            onClick={onLogout} 
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors mt-4 md:mt-0"
          >
            <LogOut size={14} />
            <span>Sign Out</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pet Profile Card */}
          <div className="md:col-span-1">
             <div className="bg-white p-8 shadow-sm h-full border-t-4 border-mofu-gold">
                <div className="flex items-center space-x-3 mb-6">
                   <div className="bg-orange-50 p-2 rounded-full text-mofu-gold">
                      <Dog size={24} />
                   </div>
                   <h3 className="font-serif text-xl">Teddy Profile</h3>
                </div>
                <div className="space-y-4">
                   <div>
                      <span className="text-[10px] uppercase text-stone-400 tracking-widest block mb-1">Name</span>
                      <p className="font-serif text-lg">{user.petName || 'Add Pet Name'}</p>
                   </div>
                   <div>
                      <span className="text-[10px] uppercase text-stone-400 tracking-widest block mb-1">Weight</span>
                      <p className="font-serif text-lg">{user.petWeight ? `${user.petWeight}kg` : 'Add Weight'}</p>
                   </div>
                   <div>
                      <span className="text-[10px] uppercase text-stone-400 tracking-widest block mb-1">Recommended Size</span>
                      <p className="font-serif text-lg text-mofu-gold">S (Standard)</p>
                   </div>
                </div>
                <button className="w-full mt-8 border border-stone-200 py-3 text-xs uppercase tracking-widest hover:border-mofu-gold hover:text-mofu-gold transition-colors">
                  Edit Profile
                </button>
             </div>
          </div>

          {/* Order History */}
          <div className="md:col-span-2">
             <div className="bg-white p-8 shadow-sm min-h-[400px]">
                <div className="flex items-center space-x-3 mb-8">
                   <div className="bg-stone-50 p-2 rounded-full text-stone-600">
                      <Package size={24} />
                   </div>
                   <h3 className="font-serif text-xl">Order History</h3>
                </div>

                {(!user.orders || user.orders.length === 0) ? (
                   <div className="flex flex-col items-center justify-center h-48 text-stone-400">
                      <p className="font-serif italic mb-4">No recent orders found.</p>
                      <button className="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-mofu-gold pb-1">Start Shopping</button>
                   </div>
                ) : (
                   // Map orders here if they existed in mock data
                   <div className="space-y-4">
                     {/* Placeholder for saved order structure */}
                   </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};