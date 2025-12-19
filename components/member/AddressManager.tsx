import React, { useState } from 'react';
import { MapPin, Plus, Edit2, Trash2, Check, Loader2 } from 'lucide-react';
import { ShippingAddress, Language } from '../../types';
import { AddressForm } from './AddressForm';
import { userApi } from '../../src/services/api';

interface AddressManagerProps {
  addresses: ShippingAddress[];
  onAddressesChange: () => void;
  language: Language;
}

export const AddressManager: React.FC<AddressManagerProps> = ({
  addresses,
  onAddressesChange,
  language,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<ShippingAddress | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const labels = {
    EN: {
      title: 'Shipping Addresses',
      addAddress: 'Add Address',
      default: 'Default',
      noAddresses: 'No addresses saved',
      confirmDelete: 'Delete this address?',
    },
    JP: {
      title: '配送先住所',
      addAddress: '住所を追加',
      default: 'デフォルト',
      noAddresses: '登録されている住所がありません',
      confirmDelete: 'この住所を削除しますか？',
    },
    ZH_TW: {
      title: '收貨地址',
      addAddress: '添加地址',
      default: '預設',
      noAddresses: '尚無已保存的地址',
      confirmDelete: '確定要刪除這個地址嗎？',
    },
  };

  const t = labels[language];

  const handleSaveAddress = async (data: Partial<ShippingAddress>) => {
    if (editingAddress) {
      await userApi.updateAddress(editingAddress.id, data);
    } else {
      await userApi.createAddress(data);
    }
    onAddressesChange();
    setEditingAddress(null);
  };

  const handleDeleteAddress = async (addressId: string) => {
    if (window.confirm(t.confirmDelete)) {
      setDeletingId(addressId);
      try {
        await userApi.deleteAddress(addressId);
        onAddressesChange();
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleSetDefault = async (addressId: string) => {
    await userApi.updateAddress(addressId, { isDefault: true });
    onAddressesChange();
  };

  const formatAddress = (addr: ShippingAddress) => {
    return `〒${addr.postalCode} ${addr.prefecture}${addr.city}${addr.addressLine1}${
      addr.addressLine2 ? ` ${addr.addressLine2}` : ''
    }`;
  };

  return (
    <div className="bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-stone-100 p-2 rounded-full text-stone-600">
            <MapPin size={24} />
          </div>
          <h3 className="font-serif text-xl">{t.title}</h3>
        </div>
        <button
          onClick={() => {
            setEditingAddress(null);
            setShowForm(true);
          }}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest text-mofu-gold hover:text-mofu-black transition-colors"
        >
          <Plus size={14} />
          <span>{t.addAddress}</span>
        </button>
      </div>

      {addresses.length === 0 ? (
        <div className="text-center py-12 text-stone-400">
          <MapPin size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-serif italic">{t.noAddresses}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <div
              key={address.id}
              className={`border rounded-sm p-4 transition-all ${
                address.isDefault ? 'border-mofu-gold bg-orange-50/30' : 'border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-bold text-sm">{address.recipientName}</h4>
                    {address.isDefault && (
                      <span className="flex items-center space-x-1 text-[9px] uppercase tracking-widest text-mofu-gold bg-mofu-gold/10 px-2 py-1 rounded-full">
                        <Check size={10} />
                        <span>{t.default}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600">{formatAddress(address)}</p>
                  {address.phone && (
                    <p className="text-xs text-stone-400 mt-1">TEL: {address.phone}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="p-2 text-stone-400 hover:text-mofu-gold transition-colors"
                      title="Set as default"
                    >
                      <Check size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setEditingAddress(address);
                      setShowForm(true);
                    }}
                    className="p-2 text-stone-400 hover:text-mofu-black transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    disabled={deletingId === address.id}
                    className="p-2 text-stone-400 hover:text-red-500 transition-colors disabled:opacity-50"
                  >
                    {deletingId === address.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Trash2 size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <AddressForm
          address={editingAddress}
          onSave={handleSaveAddress}
          onClose={() => {
            setShowForm(false);
            setEditingAddress(null);
          }}
          language={language}
        />
      )}
    </div>
  );
};
