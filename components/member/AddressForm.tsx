import React, { useState, useEffect } from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import { ShippingAddress, Language } from '../../types';

interface AddressFormProps {
  address?: ShippingAddress | null;
  onSave: (data: Partial<ShippingAddress>) => Promise<void>;
  onClose: () => void;
  language: Language;
}

const JAPAN_PREFECTURES = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];

export const AddressForm: React.FC<AddressFormProps> = ({
  address,
  onSave,
  onClose,
  language,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    recipientName: '',
    postalCode: '',
    prefecture: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
    phone: '',
  });

  useEffect(() => {
    if (address) {
      setFormData({
        recipientName: address.recipientName || '',
        postalCode: address.postalCode || '',
        prefecture: address.prefecture || '',
        city: address.city || '',
        addressLine1: address.addressLine1 || '',
        addressLine2: address.addressLine2 || '',
        phone: address.phone || '',
      });
    }
  }, [address]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSave({
        recipientName: formData.recipientName,
        postalCode: formData.postalCode,
        prefecture: formData.prefecture,
        city: formData.city,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2 || undefined,
        phone: formData.phone || undefined,
      });
      onClose();
    } catch (error) {
      console.error('Failed to save address:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const labels = {
    EN: {
      title: address ? 'Edit Address' : 'Add New Address',
      recipientName: 'Recipient Name',
      postalCode: 'Postal Code',
      prefecture: 'Prefecture',
      city: 'City',
      addressLine1: 'Address Line 1',
      addressLine2: 'Address Line 2 (Optional)',
      phone: 'Phone Number (Optional)',
      save: 'Save',
      cancel: 'Cancel',
      selectPrefecture: 'Select Prefecture',
    },
    JP: {
      title: address ? '住所を編集' : '新しい住所を追加',
      recipientName: '受取人名',
      postalCode: '郵便番号',
      prefecture: '都道府県',
      city: '市区町村',
      addressLine1: '町名・番地',
      addressLine2: '建物名・部屋番号（任意）',
      phone: '電話番号（任意）',
      save: '保存',
      cancel: 'キャンセル',
      selectPrefecture: '都道府県を選択',
    },
    ZH_TW: {
      title: address ? '編輯地址' : '添加新地址',
      recipientName: '收件人姓名',
      postalCode: '郵遞區號',
      prefecture: '都道府縣',
      city: '市區町村',
      addressLine1: '詳細地址',
      addressLine2: '建築物名稱（選填）',
      phone: '電話號碼（選填）',
      save: '儲存',
      cancel: '取消',
      selectPrefecture: '選擇都道府縣',
    },
  };

  const t = labels[language];

  const isValid =
    formData.recipientName &&
    formData.postalCode &&
    formData.prefecture &&
    formData.city &&
    formData.addressLine1;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-white p-8 shadow-2xl animate-[fadeInUp_0.3s_ease-out] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-black transition-colors"
        >
          <X size={20} strokeWidth={1} />
        </button>

        <h2 className="text-2xl font-serif text-mofu-black mb-8">{t.title}</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
              {t.recipientName} *
            </label>
            <input
              type="text"
              value={formData.recipientName}
              onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
              required
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.postalCode} *
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) =>
                  setFormData({ ...formData, postalCode: e.target.value.replace(/[^0-9-]/g, '') })
                }
                placeholder="123-4567"
                required
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.prefecture} *
              </label>
              <select
                value={formData.prefecture}
                onChange={(e) => setFormData({ ...formData, prefecture: e.target.value })}
                required
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors bg-transparent"
              >
                <option value="">{t.selectPrefecture}</option>
                {JAPAN_PREFECTURES.map((pref) => (
                  <option key={pref} value={pref}>
                    {pref}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
              {t.city} *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              required
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
              {t.addressLine1} *
            </label>
            <input
              type="text"
              value={formData.addressLine1}
              onChange={(e) => setFormData({ ...formData, addressLine1: e.target.value })}
              required
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
              {t.addressLine2}
            </label>
            <input
              type="text"
              value={formData.addressLine2}
              onChange={(e) => setFormData({ ...formData, addressLine2: e.target.value })}
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
              {t.phone}
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value.replace(/[^0-9-]/g, '') })
              }
              placeholder="090-1234-5678"
              className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 border border-stone-200 text-xs uppercase tracking-widest hover:border-stone-400 transition-colors"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              disabled={isLoading || !isValid}
              className="flex-1 py-3 bg-mofu-black text-white text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  <Save size={14} />
                  <span>{t.save}</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
