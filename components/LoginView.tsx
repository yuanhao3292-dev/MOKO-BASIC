
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface LoginViewProps {
  language: Language;
  onBack: () => void;
}

const PREFECTURES = [
  "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県",
  "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県",
  "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県",
  "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"
];

export const LoginView: React.FC<LoginViewProps> = ({ language, onBack }) => {
  const [agreed, setAgreed] = useState(false);
  const t = TRANSLATIONS[language];

  // 自定义跨线标签输入框
  const FloatingLabelInput = ({ label, required = false, placeholder = "", type = "text", note = "" }: { label: string, required?: boolean, placeholder?: string, type?: string, note?: string }) => (
    <div className="relative pt-4 pb-4">
      <div className="absolute top-1 left-4 px-2 bg-white z-10">
        <label className="text-sm font-bold flex items-center">
          {label} {required && <span className="text-[#e60012] ml-1">＊</span>}
        </label>
      </div>
      <div className="border border-stone-300 rounded-md p-4 mt-2 focus-within:border-mofu-gold transition-colors">
        <input 
          type={type} 
          placeholder={placeholder} 
          className="w-full outline-none text-sm placeholder-stone-300 bg-transparent text-mofu-black"
        />
      </div>
      {note && <p className="text-[11px] text-stone-400 mt-1 pl-4">{note}</p>}
    </div>
  );

  // 单选按钮组
  const RadioOptionGroup = ({ label, required = false, options }: { label: string, required?: boolean, options: { id: string, label: string }[] }) => (
    <div className="py-6">
      <label className="text-sm font-bold flex items-center mb-4">
        {label} {required && <span className="text-[#e60012] ml-1">＊</span>}
      </label>
      <div className="flex flex-wrap gap-x-12 gap-y-4">
        {options.map(opt => (
          <label key={opt.id} className="flex items-center space-x-3 cursor-pointer group">
            <input type="radio" name={label} className="w-5 h-5 accent-mofu-gold cursor-pointer" />
            <span className="text-sm text-stone-700 group-hover:text-mofu-black transition-colors">{opt.label}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f6f6f6] pt-24 pb-20 font-sans text-mofu-black">
      <div className="max-w-screen-lg mx-auto px-6">
        
        {/* 返回按钮 */}
        <div className="flex justify-end mb-8">
           <button 
             onClick={onBack}
             className="bg-[#e0e0e0] hover:bg-[#d0d0d0] text-[#666] text-xs py-2 px-8 rounded-md transition-colors font-medium"
           >
             {t.loginBack}
           </button>
        </div>

        <div className="text-center mb-12">
           <h1 className="text-xl font-bold tracking-wider">{t.loginTitle}</h1>
        </div>

        {/* Amazon 快捷登录区块 */}
        <div className="bg-white border border-stone-300 p-8 md:p-12 mb-10 text-center shadow-sm">
           <h2 className="text-lg font-bold mb-6">{t.loginAmazonSub}</h2>
           
           <button 
             className="w-full max-w-lg mx-auto block py-3 rounded-md shadow-sm relative group overflow-hidden border border-[#A88734] transition-all hover:brightness-105"
             style={{ background: 'linear-gradient(to bottom, #f7dfa5 0%, #f0c14b 100%)' }}
           >
              <div className="flex items-center justify-center space-x-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-5 pt-1" />
                <span className="text-sm font-medium">{t.loginAmazonBtn}</span>
              </div>
           </button>

           <p className="mt-8 text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
             {t.loginAmazonDesc}
           </p>
        </div>

        {/* 手动注册表单区块 */}
        <div className="bg-white border border-stone-300 p-8 md:p-16 shadow-sm">
          
          <div className="mb-10 text-stone-600 text-[13px] space-y-2 leading-relaxed">
            <p>{t.loginManualTitle}</p>
            <p>{t.loginManualNote}</p>
            <p className="text-stone-400">※お名前にお旧漢字のご使用はお控えください。</p>
          </div>

          <div className="mb-10 border-b border-stone-100 pb-2">
            <p className="text-sm text-stone-500">
              <span className="text-[#e60012] font-bold text-lg mr-1">＊</span>
              {t.loginRequired}
            </p>
          </div>

          <div className="space-y-2">
            <FloatingLabelInput label={t.loginName} required placeholder={t.loginPlaceholderName} />
            <FloatingLabelInput label={t.loginNameFuri} required placeholder={t.loginPlaceholderFuri} />
            
            <FloatingLabelInput label={t.loginEmail} required placeholder="例) info@example.com" type="email" />
            <FloatingLabelInput label={t.loginEmailConfirm} required type="email" />
            
            <FloatingLabelInput label={t.loginPassword} required type="password" />
            <FloatingLabelInput label={t.loginPasswordConfirm} required type="password" />

            <RadioOptionGroup 
              label={t.loginNewsletter} 
              required 
              options={[
                { id: 'yes', label: t.loginOptIn },
                { id: 'no', label: t.loginOptOut }
              ]} 
            />

            <RadioOptionGroup 
              label={t.loginGender} 
              options={[
                { id: 'm', label: t.loginMale },
                { id: 'f', label: t.loginFemale },
                { id: 'n', label: t.loginNoAnswer }
              ]} 
            />

            <FloatingLabelInput label={t.loginBirth} placeholder={t.loginPlaceholderBirth} />
            <FloatingLabelInput label={t.loginPhone} required placeholder="例) 08001234567" type="tel" />
            <FloatingLabelInput label={t.loginZip} required placeholder="例) 1508512" />

            {/* 都道府县选择器 */}
            <div className="relative pt-4 pb-4">
              <div className="absolute top-1 left-4 px-2 bg-white z-10">
                <label className="text-sm font-bold flex items-center">
                  {t.loginPref} <span className="text-[#e60012] ml-1">＊</span>
                </label>
              </div>
              <div className="border border-stone-300 rounded-md p-4 mt-2 focus-within:border-mofu-gold">
                <select className="w-full outline-none text-sm bg-transparent appearance-none text-mofu-black">
                  <option value="">{t.loginPrefPlaceholder}</option>
                  {PREFECTURES.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 mt-1 pointer-events-none">
                   <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            <FloatingLabelInput label={t.loginCity} required placeholder="例) 渋谷区" />
            <FloatingLabelInput label={t.loginAddress} required placeholder="例) ○○町1-1-1" />
            <FloatingLabelInput label={t.loginMobile} placeholder="例) 08001234567" type="tel" />
            <FloatingLabelInput label={t.loginReferrer} placeholder={t.loginReferrerDesc} note="※会員メールアドレス" />
          </div>

          {/* 会员规约及隐私政策 */}
          <div className="mt-20">
            <h3 className="text-lg font-bold mb-8 text-center md:text-left">会員規約および個人情報の取り扱いについて</h3>
            <div className="border border-stone-200 p-8 h-80 overflow-y-auto bg-stone-50 text-[12px] text-stone-600 leading-loose rounded-sm no-scrollbar">
              <p className="font-bold mb-4">犬服 MOKO BASIC (以下「当社」という)は、当社が運営する「犬服 MOKO BASIC」の利用について、以下のとおり本規約を定めます。</p>
              
              <p className="font-bold mt-8 mb-3 text-mofu-black text-[14px]">第1条（定義）</p>
              <p>本規約においては、次の各号記載の用語はそれぞれ次の意味で使用します。</p>
              <p>「MOKO BASIC」とは、商品又はサービスの提供情報掲載、オンラインによる商品又はサービスの提供機能を持ったシステムで、当社が本規約に基づいてインターネット上で運営するサイトをいいます。</p>
              <p>「利用者」とは、MOKO BASICにアクセスする者をいいます。</p>
              <p>「本サービス」とは、当社が本規約に基づきMOKO BASICを利用する者に対し、提供するサービスをいい、サービスの内容、種類については、当社の独自の判断により随時変更、増減が行なわれるものとし、その通知は随時、MOKO BASIC上での表示、又は電子メールその他の通信手段を通じて行なわれるものとします。</p>
              
              <p className="font-bold mt-8 mb-3 text-mofu-black text-[14px]">第2条（規約の範囲及び変更）</p>
              <p>1 本規約は、本サービスの利用に関し、当社及び利用者に適用するものとし、利用者はMOKO BASICを利用するにあたり、本規約を誠実に遵守するものとします。</p>
              <p>2 当社が別途MOKO BASIC上における掲示またはその他の方法により規定する個別規定及び当社が随時利用者に対し通知する追加規定は、本規約の一部を構成します。</p>
              <p>3 当社は利用者の承諾なく、当社の独自の判断により、本規約を変更する事があります。この場合、MOKO BASICが提供するサービスの利用条件は変更後の利用規約に基づくものとします。</p>
              
              <p className="font-bold mt-8 mb-3 text-mofu-black text-[14px]">第3条（個人情報の保護）</p>
              <p>「MOKO BASIC」では利用者の皆様が安心してご利用頂けるよう最低限の个人情報を提供頂いております。「MOKO BASIC」ではご提供頂いた個人情報の保護について最大限の注意を払っています。</p>
              <p>弊社では会員様により登録された個人及び団体や法人の情報については、「MOKO BASIC」において最先端の機能やサービスを開発・提供するためにのみ利用し、会員個人情報の保護に細心の注意を払うものとします。</p>
              
              <p className="font-bold mt-8 mb-3 text-mofu-black text-[14px]">第4条（禁止事項）</p>
              <p>利用者は、以下に掲げる行為は行ってはならないものとします。</p>
              <p>(1) MOKO BASICが指定した方法以外の方法によって、MOKO BASICを利用する行為。</p>
              <p>(2) 他者になりすまして本サービスを利用する行為。</p>
              <p>(3) MOKO BASICの運営を妨害する行為。</p>
              <p>... (以下、略)</p>
            </div>

            <div className="mt-12 flex justify-center">
              <label className="flex items-center space-x-4 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-6 h-6 border-2 border-stone-300 rounded-sm accent-mofu-gold cursor-pointer" 
                  />
                </div>
                <span className="text-[14px] font-medium text-stone-700 group-hover:text-mofu-black transition-colors">{t.loginTerms}</span>
              </label>
            </div>

            <div className="mt-16 flex justify-center">
              <button 
                className={`w-full max-w-md py-5 text-white text-lg font-bold rounded-sm transition-all shadow-lg active:scale-95 ${agreed ? 'bg-[#8c8c8c] hover:bg-mofu-gold' : 'bg-[#cccccc] cursor-not-allowed opacity-70'}`}
                disabled={!agreed}
              >
                {t.loginSubmit}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
