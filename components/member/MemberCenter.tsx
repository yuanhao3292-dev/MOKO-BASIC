import React, { useState, useEffect, useCallback } from 'react';
import {
  User,
  LogOut,
  Package,
  Dog,
  MapPin,
  Gift,
  Ticket,
  Settings,
  ChevronRight,
  Loader2,
  Star,
} from 'lucide-react';
import { User as UserType, Pet, ShippingAddress, Language } from '../../types';
import { userApi } from '../../src/services/api';
import { PetManager } from './PetManager';
import { AddressManager } from './AddressManager';

type TabType = 'overview' | 'pets' | 'addresses' | 'orders' | 'points' | 'settings';

interface MemberCenterProps {
  user: UserType;
  onLogout: () => void;
  language: Language;
}

export const MemberCenter: React.FC<MemberCenterProps> = ({ user, onLogout, language }) => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [profileData, setProfileData] = useState<{
    pets: Pet[];
    addresses: ShippingAddress[];
    pointsBalance: number;
  }>({
    pets: [],
    addresses: [],
    pointsBalance: user.pointsBalance || 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const labels = {
    EN: {
      clientId: 'Client ID',
      greeting: 'Welcome back',
      signOut: 'Sign Out',
      overview: 'Overview',
      pets: 'My Pets',
      addresses: 'Addresses',
      orders: 'Orders',
      points: 'Points',
      settings: 'Settings',
      primaryPet: 'Primary Pet',
      recommendedSize: 'Recommended Size',
      noPet: 'No pet registered',
      addPet: 'Add your pet',
      recentOrders: 'Recent Orders',
      noOrders: 'No orders yet',
      startShopping: 'Start Shopping',
      pointsBalance: 'Points Balance',
      viewAll: 'View All',
      comingSoon: 'Coming Soon',
    },
    JP: {
      clientId: 'クライアントID',
      greeting: 'おかえりなさい',
      signOut: 'ログアウト',
      overview: '概要',
      pets: 'マイペット',
      addresses: '住所',
      orders: '注文履歴',
      points: 'ポイント',
      settings: '設定',
      primaryPet: 'メインペット',
      recommendedSize: '推奨サイズ',
      noPet: 'ペット未登録',
      addPet: 'ペットを追加',
      recentOrders: '最近の注文',
      noOrders: '注文履歴がありません',
      startShopping: 'ショッピングを始める',
      pointsBalance: 'ポイント残高',
      viewAll: 'すべて見る',
      comingSoon: '準備中',
    },
    ZH_TW: {
      clientId: '會員編號',
      greeting: '歡迎回來',
      signOut: '登出',
      overview: '總覽',
      pets: '我的寵物',
      addresses: '地址',
      orders: '訂單記錄',
      points: '積分',
      settings: '設定',
      primaryPet: '主要寵物',
      recommendedSize: '推薦尺寸',
      noPet: '尚未登記寵物',
      addPet: '添加寵物',
      recentOrders: '最近訂單',
      noOrders: '尚無訂單',
      startShopping: '開始購物',
      pointsBalance: '積分餘額',
      viewAll: '查看全部',
      comingSoon: '即將推出',
    },
  };

  const t = labels[language];

  const fetchProfile = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await userApi.getProfile();
      if (response.data) {
        setProfileData({
          pets: response.data.pets || [],
          addresses: response.data.addresses || [],
          pointsBalance: response.data.pointsBalance || 0,
        });
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const primaryPet = profileData.pets.find((p) => p.isPrimary) || profileData.pets[0];

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: t.overview, icon: <User size={18} /> },
    { id: 'pets', label: t.pets, icon: <Dog size={18} /> },
    { id: 'addresses', label: t.addresses, icon: <MapPin size={18} /> },
    { id: 'orders', label: t.orders, icon: <Package size={18} /> },
    { id: 'points', label: t.points, icon: <Gift size={18} /> },
  ];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-24">
          <Loader2 size={32} className="animate-spin text-mofu-gold" />
        </div>
      );
    }

    switch (activeTab) {
      case 'pets':
        return (
          <PetManager pets={profileData.pets} onPetsChange={fetchProfile} language={language} />
        );
      case 'addresses':
        return (
          <AddressManager
            addresses={profileData.addresses}
            onAddressesChange={fetchProfile}
            language={language}
          />
        );
      case 'orders':
        return (
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-stone-100 p-2 rounded-full text-stone-600">
                <Package size={24} />
              </div>
              <h3 className="font-serif text-xl">{t.orders}</h3>
            </div>
            <div className="text-center py-12 text-stone-400">
              <Package size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-serif italic mb-4">{t.noOrders}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-mofu-gold pb-1">
                {t.startShopping}
              </button>
            </div>
          </div>
        );
      case 'points':
        return (
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-orange-50 p-2 rounded-full text-mofu-gold">
                <Gift size={24} />
              </div>
              <h3 className="font-serif text-xl">{t.points}</h3>
            </div>
            <div className="text-center py-8">
              <div className="text-5xl font-serif text-mofu-gold mb-2">
                {profileData.pointsBalance.toLocaleString()}
              </div>
              <p className="text-xs uppercase tracking-widest text-stone-400">{t.pointsBalance}</p>
            </div>
            <div className="border-t border-stone-100 pt-6 text-center text-stone-400 text-sm">
              <p>{t.comingSoon}</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Primary Pet Card */}
              <div
                className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow border-t-4 border-mofu-gold"
                onClick={() => setActiveTab('pets')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">
                    {t.primaryPet}
                  </span>
                  <ChevronRight size={16} className="text-stone-300" />
                </div>
                {primaryPet ? (
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-serif text-lg">{primaryPet.name}</h4>
                      <Star size={12} className="text-mofu-gold" fill="currentColor" />
                    </div>
                    <p className="text-xs text-stone-500">
                      {primaryPet.breed}
                      {primaryPet.weightKg && ` • ${primaryPet.weightKg}kg`}
                    </p>
                    {primaryPet.recommendedSize && (
                      <p className="text-sm font-bold text-mofu-gold mt-2">
                        {t.recommendedSize}: {primaryPet.recommendedSize}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-stone-400">
                    <Dog size={24} className="mb-2 opacity-50" />
                    <p className="text-sm">{t.noPet}</p>
                    <p className="text-xs text-mofu-gold">{t.addPet} →</p>
                  </div>
                )}
              </div>

              {/* Points Card */}
              <div
                className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveTab('points')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">
                    {t.pointsBalance}
                  </span>
                  <ChevronRight size={16} className="text-stone-300" />
                </div>
                <div className="text-3xl font-serif text-mofu-gold">
                  {profileData.pointsBalance.toLocaleString()}
                </div>
                <p className="text-xs text-stone-400 mt-1">pts</p>
              </div>

              {/* Addresses Card */}
              <div
                className="bg-white p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => setActiveTab('addresses')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400">
                    {t.addresses}
                  </span>
                  <ChevronRight size={16} className="text-stone-300" />
                </div>
                <div className="text-3xl font-serif">{profileData.addresses.length}</div>
                <p className="text-xs text-stone-400 mt-1">
                  {profileData.addresses.length === 1 ? 'address' : 'addresses'} saved
                </p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">{t.recentOrders}</h3>
                <button
                  onClick={() => setActiveTab('orders')}
                  className="text-xs uppercase tracking-widest text-mofu-gold hover:text-mofu-black transition-colors"
                >
                  {t.viewAll} →
                </button>
              </div>
              <div className="text-center py-8 text-stone-400">
                <Package size={32} className="mx-auto mb-3 opacity-30" />
                <p className="font-serif italic">{t.noOrders}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen pt-32 pb-24">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-stone-200 pb-8">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-2 block">
              {t.clientId}: {user.id.slice(0, 8)}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-mofu-black">
              {t.greeting}, {user.name?.split(' ')[0] || 'Member'}
            </h1>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 text-xs uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors mt-4 md:mt-0"
          >
            <LogOut size={14} />
            <span>{t.signOut}</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="bg-white shadow-sm p-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all ${
                    activeTab === tab.id
                      ? 'bg-mofu-gold/10 text-mofu-gold'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">{renderContent()}</main>
        </div>
      </div>
    </div>
  );
};

export default MemberCenter;
