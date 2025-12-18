
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface ContactViewProps {
  language: Language;
  onBack: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ language, onBack }) => {
  const [agreed, setAgreed] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <div className="min-h-screen bg-[#f6f6f6] pt-24 pb-20 font-sans text-[#333]">
      <div className="max-w-screen-lg mx-auto px-6">
        
        {/* Header Navigation */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">{t.contactTitle}</h1>
          <button 
            onClick={onBack}
            className="bg-[#e0e0e0] hover:bg-[#d0d0d0] text-[#666] text-sm py-2 px-8 rounded-sm transition-colors"
          >
            {t.loginBack}
          </button>
        </div>

        {/* Instructions */}
        <div className="mb-10 text-sm leading-relaxed space-y-8">
          <p>{t.contactInstruction}</p>
          
          <div className="space-y-2">
            <h2 className="font-bold">{t.contactGmailNoticeTitle}</h2>
            <p>{t.contactGmailNoticeBody}</p>
          </div>
        </div>

        {/* Form Section */}
        <form className="bg-white border border-[#ccc] shadow-sm mb-12 overflow-hidden">
          {/* Row 1: Name */}
          <div className="flex border-b border-[#ccc]">
            <div className="w-1/3 md:w-1/4 bg-[#eee] p-4 flex items-center justify-between border-r border-[#ccc]">
              <span className="font-bold text-sm">{t.contactLabelName}</span>
              <span className="bg-[#e60012] text-white text-[10px] px-2 py-0.5 rounded-sm font-bold">
                {t.contactRequired}
              </span>
            </div>
            <div className="w-2/3 md:w-3/4 p-4">
              <input 
                type="text" 
                className="w-full border border-[#ccc] p-2 text-sm outline-none focus:border-mofu-gold"
                placeholder={language === 'JP' ? '例）山田太郎' : 'Example: John Doe'}
                required
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="flex border-b border-[#ccc]">
            <div className="w-1/3 md:w-1/4 bg-[#eee] p-4 flex items-center justify-between border-r border-[#ccc]">
              <span className="font-bold text-sm">{t.contactLabelEmail}</span>
              <span className="bg-[#e60012] text-white text-[10px] px-2 py-0.5 rounded-sm font-bold">
                {t.contactRequired}
              </span>
            </div>
            <div className="w-2/3 md:w-3/4 p-4">
              <input 
                type="email" 
                className="w-full border border-[#ccc] p-2 text-sm outline-none focus:border-mofu-gold"
                placeholder="info@example.com"
                required
              />
            </div>
          </div>

          {/* Row 3: Body */}
          <div className="flex">
            <div className="w-1/3 md:w-1/4 bg-[#eee] p-4 flex items-start justify-between border-r border-[#ccc]">
              <span className="font-bold text-sm mt-1">{t.contactLabelBody}</span>
              <span className="bg-[#e60012] text-white text-[10px] px-2 py-0.5 rounded-sm font-bold mt-1">
                {t.contactRequired}
              </span>
            </div>
            <div className="w-2/3 md:w-3/4 p-4">
              <textarea 
                className="w-full border border-[#ccc] p-2 text-sm h-64 outline-none focus:border-mofu-gold resize-none"
                required
              ></textarea>
              <p className="text-[11px] text-[#666] mt-1">{t.contactCharLimit}</p>
            </div>
          </div>
        </form>

        {/* Privacy Policy Section */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-bold mb-6">{t.contactPrivacyTitle}</h3>
          
          <div className="max-w-3xl mx-auto border border-[#ccc] bg-white p-6 h-48 overflow-y-auto text-[11px] text-[#666] leading-loose text-left mb-8 no-scrollbar">
            <p className="font-bold mb-4">犬服 MOKO BASIC (以下「当社」という)は、当社が運営する「犬服 MOKO BASIC」の利用について、以下のとおり本規約を定めます。</p>
            
            <p className="font-bold mt-4 mb-2">1．プライバシーポリシーについての考え方が適用される範囲</p>
            <p>■ 会員が「MOKO BASIC」のサービスを利用される場合に適用されます。</p>
            <p>■ 収集される個人情報は、MOKO BASICの個人情報保護についての考え方に従って管理されます。</p>
            
            <p className="font-bold mt-4 mb-2">2．個人情報の収集と利用</p>
            <p>■ ショップのID・パスワードは利用者ご自身の責任において管理をお願い致します。</p>
            <p>■ 収集された個人情報はMOKO BASICのサービスを提供するために必要な限度においてのみ利用し、いかなる第三者にも提供致しません。</p>
            
            <p className="font-bold mt-4 mb-2">3．問い合わせ先</p>
            <p>ここに示した個人情報についての考え方についてご不明な点などございましたら、お問合せフォームからお問い合わせください。</p>
          </div>

          <div className="flex justify-center items-center mb-10">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-4 h-4 cursor-pointer accent-mofu-gold"
              />
              <span className="text-sm font-medium text-[#333] group-hover:text-mofu-gold transition-colors">
                {t.contactPrivacyAgree}
              </span>
            </label>
          </div>

          <div className="flex justify-center">
            <button 
              className={`w-full max-w-sm py-5 text-white text-lg font-bold rounded-sm transition-all shadow-md ${
                agreed ? 'bg-[#8c8c8c] hover:bg-mofu-gold' : 'bg-[#d0d0d0] cursor-not-allowed'
              }`}
              disabled={!agreed}
              type="button"
            >
              {t.contactSubmit}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
