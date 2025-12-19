import React, { useState } from 'react';
import { Dog, Plus, Edit2, Trash2, Star, Loader2 } from 'lucide-react';
import { Pet, Language } from '../../types';
import { PetForm } from './PetForm';
import { userApi } from '../../src/services/api';

interface PetManagerProps {
  pets: Pet[];
  onPetsChange: () => void;
  language: Language;
}

export const PetManager: React.FC<PetManagerProps> = ({ pets, onPetsChange, language }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingPet, setEditingPet] = useState<Pet | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const labels = {
    EN: {
      title: 'My Pets',
      addPet: 'Add Pet',
      primary: 'Primary',
      weight: 'Weight',
      size: 'Recommended Size',
      noPets: 'No pets added yet',
      confirmDelete: 'Delete this pet?',
    },
    JP: {
      title: 'マイペット',
      addPet: 'ペットを追加',
      primary: 'メイン',
      weight: '体重',
      size: '推奨サイズ',
      noPets: 'ペットが登録されていません',
      confirmDelete: 'このペットを削除しますか？',
    },
    ZH_TW: {
      title: '我的寵物',
      addPet: '添加寵物',
      primary: '主要',
      weight: '體重',
      size: '推薦尺寸',
      noPets: '尚未添加寵物',
      confirmDelete: '確定要刪除這個寵物嗎？',
    },
  };

  const t = labels[language];

  const handleSavePet = async (data: Partial<Pet>) => {
    if (editingPet) {
      await userApi.updatePet(editingPet.id, data);
    } else {
      await userApi.createPet(data);
    }
    onPetsChange();
    setEditingPet(null);
  };

  const handleDeletePet = async (petId: string) => {
    if (window.confirm(t.confirmDelete)) {
      setDeletingId(petId);
      try {
        await userApi.deletePet(petId);
        onPetsChange();
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleSetPrimary = async (petId: string) => {
    await userApi.updatePet(petId, { isPrimary: true });
    onPetsChange();
  };

  return (
    <div className="bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-orange-50 p-2 rounded-full text-mofu-gold">
            <Dog size={24} />
          </div>
          <h3 className="font-serif text-xl">{t.title}</h3>
        </div>
        <button
          onClick={() => {
            setEditingPet(null);
            setShowForm(true);
          }}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest text-mofu-gold hover:text-mofu-black transition-colors"
        >
          <Plus size={14} />
          <span>{t.addPet}</span>
        </button>
      </div>

      {pets.length === 0 ? (
        <div className="text-center py-12 text-stone-400">
          <Dog size={48} className="mx-auto mb-4 opacity-30" />
          <p className="font-serif italic">{t.noPets}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className={`border rounded-sm p-4 transition-all ${
                pet.isPrimary ? 'border-mofu-gold bg-orange-50/30' : 'border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-serif text-lg">{pet.name}</h4>
                    {pet.isPrimary && (
                      <span className="flex items-center space-x-1 text-[9px] uppercase tracking-widest text-mofu-gold bg-mofu-gold/10 px-2 py-1 rounded-full">
                        <Star size={10} fill="currentColor" />
                        <span>{t.primary}</span>
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-stone-500">
                    {pet.breed && <span>{pet.breed}</span>}
                    {pet.weightKg && (
                      <span>
                        {t.weight}: {pet.weightKg}kg
                      </span>
                    )}
                    {pet.recommendedSize && (
                      <span className="text-mofu-gold font-bold">
                        {t.size}: {pet.recommendedSize}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!pet.isPrimary && (
                    <button
                      onClick={() => handleSetPrimary(pet.id)}
                      className="p-2 text-stone-400 hover:text-mofu-gold transition-colors"
                      title="Set as primary"
                    >
                      <Star size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setEditingPet(pet);
                      setShowForm(true);
                    }}
                    className="p-2 text-stone-400 hover:text-mofu-black transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDeletePet(pet.id)}
                    disabled={deletingId === pet.id}
                    className="p-2 text-stone-400 hover:text-red-500 transition-colors disabled:opacity-50"
                  >
                    {deletingId === pet.id ? (
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
        <PetForm
          pet={editingPet}
          onSave={handleSavePet}
          onClose={() => {
            setShowForm(false);
            setEditingPet(null);
          }}
          language={language}
        />
      )}
    </div>
  );
};
