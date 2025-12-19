import React, { useState, useEffect } from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import { Pet, Language } from '../../types';

interface PetFormProps {
  pet?: Pet | null;
  onSave: (data: Partial<Pet>) => Promise<void>;
  onClose: () => void;
  language: Language;
}

export const PetForm: React.FC<PetFormProps> = ({ pet, onSave, onClose, language }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    breed: '',
    weightKg: '',
    birthDate: '',
    gender: '',
    color: '',
    neckCm: '',
    chestCm: '',
    lengthCm: '',
  });

  useEffect(() => {
    if (pet) {
      setFormData({
        name: pet.name || '',
        breed: pet.breed || '',
        weightKg: pet.weightKg?.toString() || '',
        birthDate: pet.birthDate || '',
        gender: pet.gender || '',
        color: pet.color || '',
        neckCm: pet.neckCm?.toString() || '',
        chestCm: pet.chestCm?.toString() || '',
        lengthCm: pet.lengthCm?.toString() || '',
      });
    }
  }, [pet]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSave({
        name: formData.name,
        breed: formData.breed || undefined,
        weightKg: formData.weightKg ? parseFloat(formData.weightKg) : undefined,
        birthDate: formData.birthDate || undefined,
        gender: formData.gender as Pet['gender'] || undefined,
        color: formData.color || undefined,
        neckCm: formData.neckCm ? parseFloat(formData.neckCm) : undefined,
        chestCm: formData.chestCm ? parseFloat(formData.chestCm) : undefined,
        lengthCm: formData.lengthCm ? parseFloat(formData.lengthCm) : undefined,
      });
      onClose();
    } catch (error) {
      console.error('Failed to save pet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const labels = {
    EN: {
      title: pet ? 'Edit Pet' : 'Add New Pet',
      name: 'Name',
      breed: 'Breed',
      weight: 'Weight (kg)',
      birthDate: 'Birth Date',
      gender: 'Gender',
      color: 'Color',
      measurements: 'Measurements',
      neck: 'Neck (cm)',
      chest: 'Chest (cm)',
      length: 'Back Length (cm)',
      save: 'Save',
      cancel: 'Cancel',
      male: 'Male',
      female: 'Female',
    },
    JP: {
      title: pet ? 'ペット情報を編集' : '新しいペットを追加',
      name: '名前',
      breed: '犬種',
      weight: '体重 (kg)',
      birthDate: '生年月日',
      gender: '性別',
      color: '毛色',
      measurements: 'サイズ測定',
      neck: '首周り (cm)',
      chest: '胸囲 (cm)',
      length: '背丈 (cm)',
      save: '保存',
      cancel: 'キャンセル',
      male: 'オス',
      female: 'メス',
    },
    ZH_TW: {
      title: pet ? '編輯寵物資料' : '添加新寵物',
      name: '名字',
      breed: '品種',
      weight: '體重 (kg)',
      birthDate: '出生日期',
      gender: '性別',
      color: '毛色',
      measurements: '尺寸測量',
      neck: '頸圍 (cm)',
      chest: '胸圍 (cm)',
      length: '背長 (cm)',
      save: '儲存',
      cancel: '取消',
      male: '公',
      female: '母',
    },
  };

  const t = labels[language];

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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.name} *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.breed}
              </label>
              <input
                type="text"
                value={formData.breed}
                onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                placeholder="Toy Poodle"
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.weight}
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={formData.weightKg}
                onChange={(e) => setFormData({ ...formData, weightKg: e.target.value })}
                placeholder="2.5"
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.gender}
              </label>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors bg-transparent"
              >
                <option value="">-</option>
                <option value="male">{t.male}</option>
                <option value="female">{t.female}</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.color}
              </label>
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>

            <div className="col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                {t.birthDate}
              </label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
              />
            </div>
          </div>

          {/* Measurements */}
          <div className="pt-4 border-t border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">
              {t.measurements}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                  {t.neck}
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={formData.neckCm}
                  onChange={(e) => setFormData({ ...formData, neckCm: e.target.value })}
                  className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                  {t.chest}
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={formData.chestCm}
                  onChange={(e) => setFormData({ ...formData, chestCm: e.target.value })}
                  className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-stone-400 block mb-2">
                  {t.length}
                </label>
                <input
                  type="number"
                  step="0.5"
                  min="0"
                  value={formData.lengthCm}
                  onChange={(e) => setFormData({ ...formData, lengthCm: e.target.value })}
                  className="w-full border-b border-stone-200 py-2 outline-none focus:border-mofu-gold transition-colors"
                />
              </div>
            </div>
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
              disabled={isLoading || !formData.name}
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
