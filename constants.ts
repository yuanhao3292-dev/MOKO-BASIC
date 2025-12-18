
import { Product, Language } from './types';

// =====================================================================
// 🖼️ GLOBAL MEDIA LIBRARY (ASSETS) | 图片资源库
// =====================================================================
export const ASSETS = {
  HERO: {
    MAIN: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop',
  },
  CATEGORY: {
    MALE: 'https://i.ibb.co/MkxwX2kZ/Chat-GPT-Image-2025-12-17-01-01-42-1.png',
    FEMALE: 'https://i.ibb.co/VWjDCLqN/F9-F82-ABA-2-D08-4259-B455-90-EF48868-A5-D.jpg',
  },
  PHILOSOPHY: {
    ORIGIN: 'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=1000&auto=format&fit=crop',
    MATERIAL: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop',
    TAILOR: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop',
  },
  OCCASIONS: {
    HOME: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop',
    WALK: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format&fit=crop',
    RAIN: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop',
    SLEEP: 'https://images.unsplash.com/photo-1541781777631-fa9537171859?q=80&w=800&auto=format&fit=crop',
  },
  MANAGER: {
    AVATAR: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
  },
  MODELS: {
    WHITE: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop',
    APRICOT: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=800&auto=format&fit=crop',
    BLACK: 'https://images.unsplash.com/photo-1620021673322-26f6345dc553?q=80&w=800&auto=format&fit=crop',
  },
  PRODUCTS: {
    TEE: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop',
    HOODIE: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',
    STRIPE: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop',
    VEST: 'https://images.unsplash.com/photo-1517423568366-6975535403b3?q=80&w=1000&auto=format&fit=crop',
    TRENCH: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop',
    LEASH_L: 'https://i.ibb.co/VvWpL_1.jpg',
    LEASH_R: 'https://i.ibb.co/VvWpL_2.jpg',
    COLLAR_P: 'https://i.ibb.co/VvWpL_3.jpg',
    COLLAR_L: 'https://i.ibb.co/VvWpL_4.jpg',
    BOWTIE: 'https://i.ibb.co/VvWpL_5.jpg',
    HAIRCLIP: 'https://i.ibb.co/VvWpL_6.jpg',
    DRESS: 'https://i.ibb.co/VvWpL_7.jpg',
    BOWL: 'https://i.ibb.co/VvWpL_8.jpg',
    BOTTLE: 'https://i.ibb.co/VvWpL_9.jpg',
    RAIN_CLEAR: 'https://i.ibb.co/VvWpL_10.jpg',
    BED: 'https://i.ibb.co/VvWpL_11.jpg',
    CARRIER: 'https://i.ibb.co/VvWpL_12.jpg',
  },
  GALLERY_DETAILS: [
    'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1598133869164-6eb75f380f70?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop'
  ]
};

export const NAV_LINKS = [
  { label: { EN: 'Boy', JP: '男の子', ZH_TW: '公狗' }, value: 'MALE' },
  { label: { EN: 'Girl', JP: '女の子', ZH_TW: '母狗' }, value: 'FEMALE' },
  { label: { EN: 'Philosophy & Craft', JP: '理念と工芸', ZH_TW: '理念與工藝' }, value: 'PHILOSOPHY' },
];

export const CATEGORY_FILTERS = [
  { id: 'ALL', label: { EN: 'All', JP: 'すべて', ZH_TW: '全部' } },
  { id: 'CLOTHING', label: { EN: 'Clothing', JP: 'ウェア', ZH_TW: '衣服' } },
  { id: 'LEASH', label: { EN: 'Leashes', JP: 'リード', ZH_TW: '牽引繩' } },
  { id: 'COLLAR', label: { EN: 'Collars', JP: '首輪', ZH_TW: '項圈' } },
  { id: 'ACCESSORY', label: { EN: 'Accessories', JP: 'アクセサリー', ZH_TW: '配飾' } },
  { id: 'BOWL', label: { EN: 'Bowls', JP: 'フードボウル', ZH_TW: '狗碗' } },
  { id: 'DISPENSER', label: { EN: 'Water', JP: '給水器', ZH_TW: '飲水器' } },
];

export const INFO_LINKS = [
  { 
    id: 'size-guide', 
    label: { EN: 'Size Guide', JP: '犬種とサイズの測り方', ZH_TW: '尺寸指南' },
    content: {
      EN: `
        <div class="space-y-12">
          <section class="space-y-4">
            <h3 class="text-xl font-serif text-mofu-black">Optimized for 2.5kg Toy Poodles</h3>
            <p class="text-sm text-stone-600 leading-relaxed">
              MOKO BASIC designs are engineered based on the skeletal structure of a 2.5kg White Teddy. 
              Please measure your pet accurately to ensure the "Moko Fit".
            </p>
          </section>
          
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-stone-50">
                <tr>
                  <th class="p-4 border border-stone-200 text-left font-bold">Size</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">Neck (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">Chest (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">Length (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">XS (Micro)</td>
                  <td class="p-4 border border-stone-200">15 - 18</td>
                  <td class="p-4 border border-stone-200">24 - 28</td>
                  <td class="p-4 border border-stone-200">18 - 21</td>
                </tr>
                <tr class="bg-orange-50/30">
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">S (Moko Std)</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">18 - 21</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">28 - 32</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">22 - 25</td>
                </tr>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">M (Relaxed)</td>
                  <td class="p-4 border border-stone-200">21 - 24</td>
                  <td class="p-4 border border-stone-200">32 - 38</td>
                  <td class="p-4 border border-stone-200">25 - 29</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="bg-stone-50 p-6 rounded-sm space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest">How to Measure</h4>
            <ul class="text-xs text-stone-500 space-y-2 leading-relaxed">
              <li>• Neck: Measure around the base of the neck where a collar would sit.</li>
              <li>• Chest: Measure the widest part of the ribcage.</li>
              <li>• Length: Measure from the base of the neck to the base of the tail.</li>
            </ul>
          </section>
        </div>
      `,
      JP: `
        <div class="space-y-12">
          <section class="space-y-4">
            <h3 class="text-xl font-serif text-mofu-black">2.5kgのトイプードルに特化した設計</h3>
            <p class="text-sm text-stone-600 leading-relaxed">
              MOKO BASICのウェアは、体重2.5kg前後のホワイトテディの骨格を基準に設計されています。
              究極の「モコ・フィット」を実現するため、正確な採寸をお勧めします。
            </p>
          </section>
          
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-stone-50">
                <tr>
                  <th class="p-4 border border-stone-200 text-left font-bold">サイズ</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">首回り (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">胴回り (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">着丈 (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">XS (Micro)</td>
                  <td class="p-4 border border-stone-200">15 - 18</td>
                  <td class="p-4 border border-stone-200">24 - 28</td>
                  <td class="p-4 border border-stone-200">18 - 21</td>
                </tr>
                <tr class="bg-orange-50/30">
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">S (Moko Std)</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">18 - 21</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">28 - 32</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">22 - 25</td>
                </tr>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">M (Relaxed)</td>
                  <td class="p-4 border border-stone-200">21 - 24</td>
                  <td class="p-4 border border-stone-200">32 - 38</td>
                  <td class="p-4 border border-stone-200">25 - 29</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="bg-stone-50 p-6 rounded-sm space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest">サイズの測り方</h4>
            <ul class="text-xs text-stone-500 space-y-2 leading-relaxed">
              <li>• 首回り：首の付け根、首輪がくる位置を一周测ります。</li>
              <li>• 胴回り：前足の付け根あたり、胴の最も太い部分を一周测ります。</li>
              <li>• 着丈：首の付け根から、しっぽの付け根までを测ります。</li>
            </ul>
          </section>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-12">
          <section class="space-y-4">
            <h3 class="text-xl font-serif text-mofu-black">專為 2.5kg 玩具貴賓犬優化設計</h3>
            <p class="text-sm text-stone-600 leading-relaxed">
              MOKO BASIC 的服飾是以 2.5kg 左右的白色貴賓犬骨骼結構為基準進行設計。
              請精確測量您的寵物尺寸，以確保完美的「Moko Fit」合身感。
            </p>
          </section>
          
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-stone-50">
                <tr>
                  <th class="p-4 border border-stone-200 text-left font-bold">尺寸</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">頸圍 (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">胸圍 (cm)</th>
                  <th class="p-4 border border-stone-200 text-left font-bold">背長 (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">XS (Micro)</td>
                  <td class="p-4 border border-stone-200">15 - 18</td>
                  <td class="p-4 border border-stone-200">24 - 28</td>
                  <td class="p-4 border border-stone-200">18 - 21</td>
                </tr>
                <tr class="bg-orange-50/30">
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">S (Moko Std)</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">18 - 21</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">28 - 32</td>
                  <td class="p-4 border border-stone-200 font-bold text-mofu-gold">22 - 25</td>
                </tr>
                <tr class="hover:bg-stone-50 transition-colors">
                  <td class="p-4 border border-stone-200 font-bold">M (Relaxed)</td>
                  <td class="p-4 border border-stone-200">21 - 24</td>
                  <td class="p-4 border border-stone-200">32 - 38</td>
                  <td class="p-4 border border-stone-200">25 - 29</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section class="bg-stone-50 p-6 rounded-sm space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-widest">如何測量</h4>
            <ul class="text-xs text-stone-500 space-y-2 leading-relaxed">
              <li>• 頸圍：測量頸部最底端，即項圈位置的一圈。</li>
              <li>• 胸圍：測量前肢後方，胸部最寬處的一圈。</li>
              <li>• 背長：從頸部底端測量至尾巴根部。</li>
            </ul>
          </section>
        </div>
      `
    }
  },
  { 
    id: 'contact', 
    label: { EN: 'Contact Us', JP: 'お問い合わせ', ZH_TW: '聯絡我們' },
    content: {
      EN: `
        <div class="space-y-10 max-w-5xl mx-auto">
          <div class="flex justify-between items-end pb-8">
             <h2 class="text-2xl font-bold text-mofu-black">Inquiry</h2>
             <button class="bg-[#e5e5e5] text-[#666] px-6 py-2 text-sm rounded-sm hover:bg-stone-300 transition-colors">Back to Shop</button>
          </div>
          
          <p class="text-sm text-stone-600 leading-relaxed">
            Please fill out the following items in the form and click the "Submit" button.
          </p>
          
          <div class="space-y-4 pt-4 border-t border-stone-100">
            <p class="text-sm font-bold">To customers using Gmail</p>
            <p class="text-sm text-stone-600 leading-relaxed">
              Since February 2024, Gmail has significantly strengthened its anti-spam measures (anti-impersonation).<br/>
              Due to this, we have received reports that emails from our shop are being filtered into spam folders or not arriving at all.<br/>
              Please configure your settings to allow emails from "info@niijima-soukenn.com".
            </p>
          </div>

          <div class="border border-stone-200 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">Name</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">REQUIRED</span>
              </div>
              <div class="p-4 bg-white">
                <input type="text" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">Email Address</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">REQUIRED</span>
              </div>
              <div class="p-4 bg-white">
                <input type="email" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <div class="bg-[#f2f2f2] p-6 flex items-start justify-between">
                <span class="text-sm font-bold text-mofu-black mt-1">Inquiry Content</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm mt-1">REQUIRED</span>
              </div>
              <div class="p-4 bg-white space-y-2">
                <textarea class="w-full border border-stone-300 px-3 py-2 h-64 outline-none focus:border-mofu-gold resize-none"></textarea>
                <p class="text-[11px] text-[#999]">※Up to 2000 characters</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center pt-12">
            <button class="bg-mofu-black text-white px-16 py-5 text-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity shadow-sm">
              Submit this content
            </button>
          </div>
        </div>
      `,
      JP: `
        <div class="space-y-10 max-w-5xl mx-auto">
          <div class="flex justify-between items-end pb-8">
             <h2 class="text-2xl font-bold text-mofu-black">お問い合わせ</h2>
             <button class="bg-[#e5e5e5] text-[#666] px-6 py-2 text-sm rounded-sm hover:bg-stone-300 transition-colors">ショップへ戻る</button>
          </div>
          
          <p class="text-sm text-stone-600 leading-relaxed">
            以下のフォームの項目を入力し、よろしければ「この内容で問い合わせる」ボタンをクリックしてください。
          </p>
          
          <div class="space-y-4 pt-4 border-t border-stone-100">
            <p class="text-sm font-bold">Gmailをご利用のお客様様</p>
            <p class="text-sm text-stone-600 leading-relaxed">
              2024年2月以降, Gmailでは迷惑メール（なりすましメール）対策を大幅に強化いたしました。<br/>
              上記にともない, 当ショップからのメールが迷惑メールフォルダまたは着信しないとのご連絡をいただいております。<br/>
              当ショップからのメール「info@niijima-soukenn.com」の受信設定をお願いいたします。
            </p>
          </div>

          <div class="border border-stone-200 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">お名前</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">必須</span>
              </div>
              <div class="p-4 bg-white">
                <input type="text" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">メールアドレス</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">必須</span>
              </div>
              <div class="p-4 bg-white">
                <input type="email" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <div class="bg-[#f2f2f2] p-6 flex items-start justify-between">
                <span class="text-sm font-bold text-mofu-black mt-1">お問い合わせ内容</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm mt-1">必須</span>
              </div>
              <div class="p-4 bg-white space-y-2">
                <textarea class="w-full border border-stone-300 px-3 py-2 h-64 outline-none focus:border-mofu-gold resize-none"></textarea>
                <p class="text-[11px] text-[#999]">※全角2000文字まで</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center pt-12">
            <button class="bg-mofu-black text-white px-16 py-5 text-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity shadow-sm">
              この内容で問い合わせる
            </button>
          </div>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-10 max-w-5xl mx-auto">
          <div class="flex justify-between items-end pb-8">
             <h2 class="text-2xl font-bold text-mofu-black">諮詢</h2>
             <button class="bg-[#f2f2f2] text-[#666] px-6 py-2 text-sm rounded-sm hover:bg-stone-300 transition-colors">返回商店</button>
          </div>
          
          <p class="text-sm text-stone-600 leading-relaxed">
            請在下方的表單中填寫相關項目，確認無誤後點擊「送出諮詢」按鈕。
          </p>
          
          <div class="space-y-4 pt-4 border-t border-stone-100">
            <p class="text-sm font-bold">致使用 Gmail 的用戶</p>
            <p class="text-sm text-stone-600 leading-relaxed">
              自 2024 年 2 月起，Gmail 大幅強化了垃圾郵件（防冒名郵件）對策。<br/>
              因此，我們收到部分用戶反應來自本商店的郵件被分類至垃圾郵件箱或未送達。<br/>
              請將「info@niijima-soukenn.com」設為允許接收的郵件地址。
            </p>
          </div>

          <div class="border border-stone-200 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">姓名</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">必須</span>
              </div>
              <div class="p-4 bg-white">
                <input type="text" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
              <div class="bg-[#f2f2f2] p-6 flex items-center justify-between">
                <span class="text-sm font-bold text-mofu-black">電子郵件信箱</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm">必須</span>
              </div>
              <div class="p-4 bg-white">
                <input type="email" class="w-full border border-stone-300 px-3 py-2 outline-none focus:border-mofu-gold" />
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-[240px_1fr]">
              <div class="bg-[#f2f2f2] p-6 flex items-start justify-between">
                <span class="text-sm font-bold text-mofu-black mt-1">諮詢內容</span>
                <span class="bg-[#e60000] text-white text-[10px] px-2 py-0.5 rounded-sm mt-1">必須</span>
              </div>
              <div class="p-4 bg-white space-y-2">
                <textarea class="w-full border border-stone-300 px-3 py-2 h-64 outline-none focus:border-mofu-gold resize-none"></textarea>
                <p class="text-[11px] text-[#999]">※全形字體限 2000 字以內</p>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center pt-12">
            <button class="bg-mofu-black text-white px-16 py-5 text-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity shadow-sm">
              送出諮詢內容
            </button>
          </div>
        </div>
      `
    }
  },
  { 
    id: 'legal', 
    label: { EN: 'Legal Information', JP: '特定商取引法に基づく表記', ZH_TW: '特定商業交易法標記' },
    content: {
      EN: `
        <div class="space-y-16">
          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">Store Information</h3>
            <div class="border border-stone-200 divide-y divide-stone-200 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Seller</div><div class="p-4">Niijima Soukenn Co., Ltd. (Importer & Distributor)</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Representative</div><div class="p-4">Yuan Hao</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Address</div><div class="p-4">5F Tenmabashi SE Bldg, 2-1-12 Tenma, Kita-ku, Osaka, 530-0043 Japan</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Phone</div><div class="p-4">06-4792-7606</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">FAX</div><div class="p-4">06-4792-7607</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Email</div><div class="p-4">info@niijima-soukenn.com</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Business Hours</div><div class="p-4">11:00 ～ 17:00 (Excluding weekends and holidays)</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">Return Warehouse</div><div class="p-4">NIC Bldg 602, 1-2-21 Daikoku, Naniwa-ku, Osaka, 556-0014 Japan</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">URL</div><div class="p-4">niijima-soukenn.com</div></div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">About Product Sales</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Selling Price & Conditions</p>
                <p>This site is a product introduction and catalog site for "MOKO BASIC". Sales, payments, and shipping are handled by our official stores on various shopping malls (Amazon, Rakuten). Prices, shipping fees, and other charges follow the terms on those platforms.</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Order Method</p>
                <p>Please follow the links on each product page to Amazon or Rakuten and proceed with the purchase based on the on-screen instructions.</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Payment Method</p>
                <p>All payment methods accepted by the respective malls (Credit Cards, Amazon Pay, Rakuten Pay, Convenience Store, Bank Transfer, etc.) are available.</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Delivery</p>
                <p>Items are shipped according to the delivery policy of each platform. Usually delivered within the timeframe specified on the product page (e.g., Prime or Asuraku).</p>
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">Returns & Exchanges</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Returns & Exchanges Policy</p>
                <p>Follows the policy of the site where you made the purchase (Amazon or Rakuten). Please process all requests via your order history on the respective platform.</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ Defects & Incorrect Items</p>
                <p>If you receive a defective or incorrect item, please contact us at info@niijima-soukenn.com or through the platform's inquiry form within 7 days of arrival.</p>
              </div>
            </div>
          </section>
        </div>
      `,
      JP: `
        <div class="space-y-16">
          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">店舗情報</h3>
            <div class="border border-stone-200 divide-y divide-stone-200 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">販売業者</div><div class="p-4">新島総研株式会社 （輸入代理販売元）</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">運営責任者</div><div class="p-4">員昊</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">住所</div><div class="p-4">〒530-0043 大阪府大阪市北区天満２丁目１－１２ 天満橋ＳＥビル５階</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">電話番号</div><div class="p-4">06-4792-7606</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">FAX番号</div><div class="p-4">06-4792-7607</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">メールアドレス</div><div class="p-4">info@niijima-soukenn.com</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">営業時間</div><div class="p-4">11:00 ～ 17:00 （土日祝を除く）</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">返品倉庫</div><div class="p-4">〒556-0014 大阪府大阪市浪速区大国1-2-21　NICビル602号</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold text-mofu-black">URL</div><div class="p-4">niijima-soukenn.com</div></div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">商品の販売について</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 販売価格・条件について</p>
                <p>当サイトは「MOKO BASIC」の製品紹介およびカタログサイトです。商品の販売・決済・配送は、各ショッピングモール（Amazon、楽天市場）の弊社公式店舗に委託しております。販売価格、送料、手数料等は、各販売ページの表記に準じます。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 注文方法</p>
                <p>各商品ページに設置されているリンク（Amazon / 楽天市場）より, 各販売サイトへ移動し, 画面表示に基づきご購入手続きをお願いします。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 支払方法</p>
                <p>ご利用のショッピングモール（Amazon、楽天市場）が定める決済方法（クレジットカード、Amazon Pay、楽天ペイ、コンビニ決済、銀行振込など）がご利用いただけます。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 引渡しについて</p>
                <p>各販売サイトの配送ポリシーに基づき発送されます。通常, ご注文確定後, 各サイトに記載の納期にてお届けいたします。</p>
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">返品・交換・保証について</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 返品・交換について</p>
                <p>ご購入いただいたサイト（Amazon または 楽天市場）の返品・交換規定に準じて対応いたします。返品・交換をご希望の際は, 必ずご購入されたサイトの注文履歴よりお手続きをお願いいたします。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 商品不良・誤配送について</p>
                <p>万が一, 商品に「不良箇所」や「注文内容との相違」がございましたら, 商品到着後7日以内に, 各販売サイトの問い合わせフォーム, または info@niijima-soukenn.com までご連絡ください。</p>
              </div>
            </div>
          </section>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-16">
          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">店鋪資訊</h3>
            <div class="border border-stone-200 divide-y divide-stone-200 text-sm">
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">銷售業者</div><div class="p-4">新島總研株式會社 （進口代理銷售商）</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">營運負責人</div><div class="p-4">員昊</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">地址</div><div class="p-4">〒530-0043 日本大阪府大阪市北區天滿２丁目１－１２ 天滿橋ＳＥ大樓５樓</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">電話號碼</div><div class="p-4">06-4792-7606</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">傳真號碼</div><div class="p-4">06-4792-7607</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">電子郵件</div><div class="p-4">info@niijima-soukenn.com</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">營業時間</div><div class="p-4">11:00 ～ 17:00 （週末及例假日除外）</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">退貨倉庫</div><div class="p-4">〒556-0014 日本大阪府大阪市浪速區大國1-2-21 NIC大樓602號</div></div>
              <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]"><div class="bg-stone-50 p-4 font-bold">網址</div><div class="p-4">niijima-soukenn.com</div></div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">關於商品銷售</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 關於銷售價格與條件</p>
                <p>本網站為「MOKO BASIC」之產品介紹及型錄網站。商品銷售、結算與配送皆委由 Amazon、日本樂天等購物平台之我司官方店鋪處理。銷售價格、運費、手續費等皆依照各平台銷售頁面之記載為準。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 訂購方式</p>
                <p>請點擊各商品頁面之連結（Amazon / 樂天）跳轉至銷售網站, 並依照畫面提示完成購買程序。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 支付方式</p>
                <p>可使用各購物平台所提供之支付方式（信用卡、Amazon Pay、樂天支付、超商繳費、銀行轉帳等）。</p>
              </div>
            </div>
          </section>

          <section class="space-y-6">
            <h3 class="text-xs font-bold uppercase tracking-widest text-mofu-gold border-b border-stone-100 pb-2">關於退換貨</h3>
            <div class="space-y-8 text-sm text-stone-600 leading-loose">
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 關於退換貨政策</p>
                <p>依照您購買的平台（Amazon 或 日本樂天）之退換貨規定辦理。如需退換貨, 請務必透過該平台的訂單記錄進行申請。</p>
              </div>
              <div>
                <p class="font-bold text-mofu-black mb-2">■ 商品瑕疵與寄錯商品</p>
                <p>若收到商品有瑕疵 or 與訂購內容不符, 請於收到商品後7日內透過銷售平台諮詢表單, 或寄信至 info@niijima-soukenn.com 與我們聯絡。</p>
              </div>
            </div>
          </section>
        </div>
      `
    }
  },
  { 
    id: 'company', 
    label: { EN: 'Company Profile', JP: '会社概要', ZH_TW: '公司概要' },
    content: {
      EN: `
        <div class="space-y-24">
          <!-- Concept Section -->
          <div class="text-center space-y-8">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block mb-2">CONCEPT</span>
            <h3 class="text-3xl font-serif text-mofu-black leading-tight">
              "Celebrating their uniqueness, more freely, more dearly."
            </h3>
            <div class="max-w-2xl mx-auto text-base leading-loose text-stone-600 font-serif">
              <p class="mb-6">How deeply do we really understand our beloved dogs? They are family, best friends, and beings with one-of-a-kind personalities.</p>
              <p class="mb-6">That is why we do not choose "one-size-fits-all" styles.</p>
              <p class="mb-6">For active boys, we provide strength and comfort to support their adventurous spirit. For adorable girls, we offer delicate gentleness that brings out their charm.</p>
              <p>In every garment and every bowl, we put uncompromising dedication. MOKO BASIC proposes a comfortable lifestyle where you and your dog can truly trust each other. We use the power of design to make the joy of living together even more certain.</p>
            </div>
          </div>

          <!-- Message from Manager Moko -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-stone-100 pt-24">
            <div class="aspect-square bg-stone-100 overflow-hidden">
               <img src="${ASSETS.MANAGER.AVATAR}" class="w-full h-full object-cover grayscale" />
            </div>
            <div class="space-y-6">
               <span class="text-[10px] font-bold tracking-widest text-mofu-gold uppercase">Message from Manager Moko</span>
               <h4 class="text-3xl font-serif text-mofu-black">Elegance is an Attitude</h4>
               <p class="text-base text-stone-600 leading-relaxed">
                 Welcome to MOKO BASIC. As the manager, my goal is to ensure every fellow Poodle feels as comfortable and stylish as I do. We focus exclusively on the 2.5kg Toy Poodle silhouette to achieve a level of fit that is truly unparalleled.
               </p>
               <p class="text-sm font-serif text-stone-400">— Moko, Brand Manager & Resident Teddy</p>
            </div>
          </div>

          <!-- Formal Table -->
          <div class="border-t border-stone-200 pt-16">
            <h3 class="text-xs font-bold tracking-widest text-mofu-black uppercase mb-10">Corporate Information</h3>
            <div class="border border-stone-200">
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Seller</div>
                  <div class="p-6 text-sm">Niijima Soukenn Co., Ltd. (Importer & Distributor)</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Address</div>
                  <div class="p-6 text-sm">5F Tenmabashi SE Bldg, 2-1-12 Tenma, Kita-ku, Osaka, 530-0043 Japan</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Phone Number</div>
                  <div class="p-6 text-sm">06-4792-7606</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">FAX</div>
                  <div class="p-6 text-sm">06-4792-7607</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Email</div>
                  <div class="p-6 text-sm">info@niijima-soukenn.com</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Business Hours</div>
                  <div class="p-6 text-sm">11:00 ～ 17:00 (Excluding weekends and holidays)</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[200px_1fr]">
                  <div class="bg-stone-50 p-6 text-sm font-bold">Products</div>
                  <div class="p-6 text-sm space-y-4">
                     <div>
                       <p class="font-bold mb-1">【BOY SERIES】</p>
                       <p class="text-xs text-stone-500">Clothing, Leashes, Collars, Accessories, Dog Bowls, Water Dispensers</p>
                     </div>
                     <div>
                       <p class="font-bold mb-1">【GIRL SERIES】</p>
                       <p class="text-xs text-stone-500">Clothing, Leashes, Collars, Accessories, Dog Bowls, Water Dispensers</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      `,
      JP: `
        <div class="space-y-24">
          <!-- Concept Section -->
          <div class="text-center space-y-8">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block mb-2">CONCEPT</span>
            <h3 class="text-3xl font-serif text-mofu-black leading-tight">
              「その子らしさ」を、もっと自由に、もっと愛おしく。
            </h3>
            <div class="max-w-2xl mx-auto text-base leading-loose text-stone-600 font-serif text-justify">
              <p class="mb-6">私たちは愛犬のことを, どれだけ深く理解できているでしょうか。 彼らは家族であり, 親友であり, そして唯一無二の個性を持つ存在です。</p>
              <p class="mb-6">だからこそ, 私たちは「画一的なスタイル」を選びません。</p>
              <p class="mb-6">活発な男の子には, 冒険心を支える強さと快適さを。 愛らしい女の子には, その力を引き立てる繊細な優しさを。</p>
              <p>衣服ひとつ, 器ひとつにも, 妥協のないこだわりを込めて。 MOKO BASICは, 愛犬とあなたが心から信頼し合える, 心地よいライフスタイルを提案します。 共に生きる喜びを, デザインの力で, もっと確かなものへ。</p>
            </div>
          </div>

          <!-- Message from Manager Moko -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-stone-100 pt-24">
            <div class="aspect-square bg-stone-100 overflow-hidden">
               <img src="${ASSETS.MANAGER.AVATAR}" class="w-full h-full object-cover grayscale" />
            </div>
            <div class="space-y-6">
               <span class="text-[10px] font-bold tracking-widest text-mofu-gold uppercase">モコ店長からのメッセージ</span>
               <h4 class="text-3xl font-serif text-mofu-black">エレガンスとは姿勢である</h4>
               <p class="text-base text-stone-600 leading-relaxed">
                 MOKO BASICへようこそ。店長のモコです。私たちの願いは, すべてのトイプードルが私と同じように快適で, 誇り高く過ごせることです。業界で類を見ないフィット感を実現するため, 私たちは2.5kgのシルエットのみを追求しています。
               </p>
               <p class="text-sm font-serif text-stone-400">— モコ店長, ブランドアンバサダー</p>
            </div>
          </div>

          <!-- Formal Table -->
          <div class="border-t border-stone-200 pt-16">
            <h3 class="text-xs font-bold tracking-widest text-mofu-black uppercase mb-10">会社概要</h3>
            <div class="border border-stone-200">
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">販売業者</div>
                  <div class="p-6 text-sm">新島総研株式会社 （輸入代理販売元）</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">所在地</div>
                  <div class="p-6 text-sm text-stone-600">〒530-0043 大阪府大阪市北区天満2丁目1-12 天満橋SEビル5階</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">電話番号</div>
                  <div class="p-6 text-sm text-stone-600">06-4792-7606</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">FAX番号</div>
                  <div class="p-6 text-sm text-stone-600">06-4792-7607</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">メールアドレス</div>
                  <div class="p-6 text-sm text-stone-600">info@niijima-soukenn.com</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">営業時間</div>
                  <div class="p-6 text-sm text-stone-600">11:00 ～ 17:00 （土日祝を除く）</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr]">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">取扱商品</div>
                  <div class="p-6 text-sm space-y-4">
                     <div>
                       <p class="font-bold mb-1">【BOY / 公犬系列】</p>
                       <p class="text-xs text-stone-500">Clothing (ドッグウェア), Leashes (リード), Collars (首輪), Accessories (アクセサリー), Dog Bowls (フードボウル), Water Dispensers (給水器)</p>
                     </div>
                     <div>
                       <p class="font-bold mb-1">【GIRL / 母犬系列】</p>
                       <p class="text-xs text-stone-500">Clothing (ドッグウェア), Leashes (リード), Collars (首輪), Accessories (アクセサリー), Dog Bowls (フードボウル), Water Dispensers (給水器)</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-24">
          <!-- Concept Section -->
          <div class="text-center space-y-8">
            <span class="text-xs font-bold tracking-[0.3em] uppercase text-mofu-gold block mb-2">CONCEPT</span>
            <h3 class="text-3xl font-serif text-mofu-black leading-tight">
              「展現牠的本色」更自由、更可愛。
            </h3>
            <div class="max-w-2xl mx-auto text-base leading-loose text-stone-600 font-serif">
              <p class="mb-6">我們對愛犬的了解，究竟有多深？牠們是家人、是摯友，也是擁有獨一無二個性的存在。</p>
              <p class="mb-6">正因如此，我們不選擇「千篇一律的風格」。</p>
              <p class="mb-6">為活潑的公犬，提供支撐冒險心的強韌與舒適；為可愛的母犬，展現襯托魅力的細膩與溫柔。</p>
              <p>每一件衣服、每一個器皿，都蘊含著毫不妥協的堅持。MOKO BASIC 旨在提案一個讓您與愛犬能打從心底互相信賴、舒適的生活方式。透過設計的力量，讓共同生活的喜悅更加確切。</p>
            </div>
          </div>

          <!-- Message from Manager Moko -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-stone-100 pt-24">
            <div class="aspect-square bg-stone-100 overflow-hidden">
               <img src="${ASSETS.MANAGER.AVATAR}" class="w-full h-full object-cover grayscale" />
            </div>
            <div class="space-y-6">
               <span class="text-[10px] font-bold tracking-widest text-mofu-gold uppercase">店長 Moko 的寄語</span>
               <h4 class="text-3xl font-serif text-mofu-black">優雅是一種態度</h4>
               <p class="text-base text-stone-600 leading-relaxed">
                 歡迎來到 MOKO BASIC。作為店長，我的目標是確保每一位貴賓犬夥伴都能像我一樣，享受到極致的舒適與風格。我們專注於 2.5kg 的體型曲線，是為了在服裝界實現真正無與倫比的合身度。
               </p>
               <p class="text-sm font-serif text-stone-400">— Moko, 品牌店長 & 首席模特</p>
            </div>
          </div>

          <!-- Formal Table -->
          <div class="border-t border-stone-200 pt-16">
            <h3 class="text-xs font-bold tracking-widest text-mofu-black uppercase mb-10">公司概要</h3>
            <div class="border border-stone-200">
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">銷售業者</div>
                  <div class="p-6 text-sm">新島總研株式會社 （進口代理銷售商）</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">所在地</div>
                  <div class="p-6 text-sm text-stone-600">〒530-0043 日本大阪府大阪市北區天滿2丁目1-12 天滿橋SE大樓5樓</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">電話號碼</div>
                  <div class="p-6 text-sm text-stone-600">06-4792-7606</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">傳真號碼</div>
                  <div class="p-6 text-sm text-stone-600">06-4792-7607</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">電子郵件</div>
                  <div class="p-6 text-sm text-stone-600">info@niijima-soukenn.com</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr] border-b border-stone-200">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">營業時間</div>
                  <div class="p-6 text-sm text-stone-600">11:00 ～ 17:00 （週末及例假日除外）</div>
               </div>
               <div class="grid grid-cols-1 md:grid-cols-[240px_1fr]">
                  <div class="bg-stone-50 p-6 text-sm font-bold text-mofu-black">經營項目</div>
                  <div class="p-6 text-sm space-y-4">
                     <div>
                       <p class="font-bold mb-1">【BOY / 公犬系列】</p>
                       <p class="text-xs text-stone-500">Clothing (寵物服飾), Leashes (牽繩), Collars (項圈), Accessories (配件), Dog Bowls (餐具), Water Dispensers (飲水器)</p>
                     </div>
                     <div>
                       <p class="font-bold mb-1">【GIRL / 母犬系列】</p>
                       <p class="text-xs text-stone-500">Clothing (寵物服飾), Leashes (牽繩), Collars (項圈), Accessories (配件), Dog Bowls (餐具), Water Dispensers (飲水器)</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      `
    }
  }
];

export const OCCASIONS = [
  {
    id: 'home',
    image: ASSETS.OCCASIONS.HOME,
    title: { EN: 'At Home', JP: 'おうち時間', ZH_TW: '居家時光' },
    sub: { EN: 'Relaxed & Soft', JP: 'リラックス', ZH_TW: '輕鬆柔軟' }
  },
  {
    id: 'walk',
    image: ASSETS.OCCASIONS.WALK,
    title: { EN: 'Daily Walk', JP: 'お散步', ZH_TW: '日常散步' },
    sub: { EN: 'Durable & Breathable', JP: '丈夫で通気性抜群', ZH_TW: '耐穿且透氣' }
  },
  {
    id: 'rain',
    image: ASSETS.OCCASIONS.RAIN,
    title: { EN: 'Rainy Day', JP: '雨の日', ZH_TW: '下雨天' },
    sub: { EN: 'Water Repellent', JP: '撥水加工', ZH_TW: '防潑水' }
  },
  {
    id: 'sleep',
    image: ASSETS.OCCASIONS.SLEEP,
    title: { EN: 'Slumber', JP: 'おやすみ', ZH_TW: '睡眠' },
    sub: { EN: 'Ultimate Warmth', JP: '究極の暖かさ', ZH_TW: '極致保暖' }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Heritage Cotton Tee',
    category: 'CLOTHING',
    subcategory: 'ESSENTIALS',
    price: 8800,
    image: ASSETS.PRODUCTS.TEE,
    tags: ['new', 'cotton'],
    description: 'A pure cotton tee designed for the unique 2.5kg silhouette.',
    badge: 'NEW',
    specs: { warmth: 30, breathability: 90, stretch: 70, softness: 95 },
    gender: 'UNISEX',
    productType: 'CLOTHING',
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: [ASSETS.GALLERY_DETAILS[0], ASSETS.GALLERY_DETAILS[1]],
    galleryText: [
      { EN: 'Meticulous stitching.', JP: '緻密なステッチ。', ZH_TW: '精細的縫線。' }
    ]
  },
  {
    id: 'p2',
    name: 'Signature Hoodie',
    category: 'CLOTHING',
    subcategory: 'FUNCTION',
    price: 12000,
    image: ASSETS.PRODUCTS.HOODIE,
    tags: ['warm', 'winter'],
    description: 'Elegant warmth for your white teddy.',
    badge: 'BESTSELLER',
    specs: { warmth: 85, breathability: 50, stretch: 60, softness: 90 },
    gender: 'UNISEX',
    productType: 'CLOTHING'
  },
  {
    id: 'p3',
    name: 'Breton Stripe Knit',
    category: 'CLOTHING',
    subcategory: 'ESSENTIALS',
    price: 9500,
    image: ASSETS.PRODUCTS.STRIPE,
    tags: ['classic'],
    description: 'Timeless stripes for daily elegance.',
    specs: { warmth: 50, breathability: 70, stretch: 80, softness: 85 },
    gender: 'MALE',
    productType: 'CLOTHING'
  },
  {
    id: 'p4',
    name: 'Quilted Heritage Vest',
    category: 'CLOTHING',
    subcategory: 'COUTURE',
    price: 18000,
    image: ASSETS.PRODUCTS.VEST,
    tags: ['luxury'],
    badge: 'LUXURY',
    description: 'The pinnacle of poodle outerwear.',
    specs: { warmth: 95, breathability: 30, stretch: 20, softness: 80 },
    gender: 'FEMALE',
    productType: 'CLOTHING'
  }
];

export const getProducts = (lang: Language): Product[] => {
  return PRODUCTS;
};

export const TRANSLATIONS = {
  EN: {
    heroSlogan: 'Purity in every stitch.',
    titleMale: 'For Boys',
    subMale: 'The Masculine Silhouette',
    titleFemale: 'For Girls',
    subFemale: 'The Feminine Grace',
    newBadge: 'NEW',
    newIn: 'NEW ARRIVALS',
    footerCopy: '© 2025 MOKO BASIC. ALL RIGHTS RESERVED.',
    buyAmazon: 'SHOP ON AMAZON',
    buyRakuten: 'SHOP ON RAKUTEN',
    aiWelcome: 'Welcome to Moko Basic Concierge. How may I assist you today?',
    specs: { warmth: 'Warmth', breathability: 'Breath', softness: 'Soft', stretch: 'Stretch' },
    sizeGuide: 'Size Guide',
    journalSub: 'Stories from the Atelier',
    readStory: 'READ STORY',
    shopMemory: 'SHOP THIS LOOK',
    fittingTitle: 'Virtual Fitting Room',
    fittingSub: 'Visualize the perfect color harmony',
    fittingCoat: 'Coat Color',
    fittingFabric: 'Fabric',
    fittingReset: 'Reset',
    loginBack: 'BACK',
    loginTitle: 'MEMBER ACCESS',
    loginAmazonSub: 'Amazon Account Link',
    loginAmazonDesc: 'Login with Amazon to sync your orders and sizes.',
    loginAmazonBtn: 'Login with Amazon',
    loginManualTitle: 'OR CREATE ACCOUNT',
    loginName: 'NAME',
    loginNameFuri: 'FURIGANA',
    loginEmail: 'EMAIL',
    loginPassword: 'PASSWORD',
    loginPlaceholderName: 'Full Name',
    loginPlaceholderFuri: 'Name in Katakana',
    loginTerms: 'I agree to the terms of service and privacy policy.',
    loginSubmit: 'JOIN CLUB MOKO',
    viewAll: 'View All',
    philOriginTitle: 'Our Origin',
    philOriginHead: 'Born from a search for purity.',
    philOriginText: 'MOKO BASIC was founded in Tokyo with a single mission: to provide the ultimate fit for the 2.5kg White Toy Poodle.',
    philWardrobeTitle: 'The Wardrobe',
    philWardrobeHead: 'Occasions for Elegance',
    philWardrobeText: 'From morning walks to quiet evenings at home, our collection is designed to accompany every moment of your poodle\'s life.',
    philRoyalTitle: 'Royal Lineage',
    philRoyalHead: 'Noble Heritage',
    philRoyalText: 'Inspired by the regal history of poodles in French courts, our Heritage collection uses only the finest materials.',
    philArtisanTitle: 'Artisan Spirit',
    philArtisanHead: 'Japanese Craftsmanship',
    philArtisanText: 'Every piece is hand-finished in our Tokyo atelier, where masters of their craft ensure excellence.',
    philValueTitle: 'Our Values',
    philValueHead: 'A Promise of Quality',
    philValueText: 'We use sustainable practices to ensure our products are as kind to the planet as they are to your pet.',
    craftTitle: 'Craftsmanship',
    craftSubtitle: 'The Science of the Moko Fit',
    craftMatTitle: 'Materials',
    craftMatHead: 'Innovation in Textiles',
    craftMatText: 'We source exclusive fabrics that offer the perfect balance of comfort and durability.',
    craftMatPoint1Title: 'Breathable Cotton',
    craftMatPoint1Desc: 'Long-staple fibers for ultimate softness.',
    craftMatPoint2Title: 'Thermal Tech',
    craftMatPoint2Desc: 'Retains body heat without adding bulk.',
    craftTailorTitle: 'Tailoring',
    craftTailorHead: 'Precision Engineering',
    craftTailorText: 'Our patterns are specifically drafted for the unique poodle skeletal structure.',
    hotspotArchTitle: 'Skeletal Arch',
    hotspotArchDesc: 'Conforms to the natural curve of the spine.',
    hotspotArmTitle: 'Limb Freedom',
    hotspotArmDesc: 'Allows full range of motion without friction.',
    hotspotTagTitle: 'Seamless Tag',
    hotspotTagDesc: 'Prevents skin irritation for sensitive dogs.',
    craftSewingTitle: 'Sewing',
    craftSewingHead: 'Meticulous Assembly',
    craftSewingText: 'No detail is too small for our master tailors.',
    craftSewingPoint1Title: 'French Seams',
    craftSewingPoint1Desc: 'Hidden edges for internal smoothness.',
    craftSewingPoint2Title: 'Reinforced Points',
    craftSewingPoint2Desc: 'Added durability at high-stress areas.',
    footerNewsletter: 'Newsletter',
    footerSubscribe: 'Subscribe',
    footerHelp: 'Help',
    footerServices: 'Services',
    footerAbout: 'About'
  },
  JP: {
    heroSlogan: '一針一針に, 純粋さを。',
    titleMale: '男の子',
    subMale: '凛としたシルエット',
    titleFemale: '女の子',
    subFemale: 'しなやかな気品',
    newBadge: '新着',
    newIn: '最新コレクション',
    footerCopy: '© 2025 MOKO BASIC. 全著作権所有。',
    buyAmazon: 'Amazonで購入',
    buyRakuten: '楽天で購入',
    aiWelcome: 'Moko Basic コンシェルジュへようこそ。どのようなお手伝いが必要ですか？',
    specs: { warmth: '保温性', breathability: '通気性', softness: '肌触り', stretch: '伸縮性' },
    sizeGuide: 'サイズガイド',
    journalSub: 'アトリエからの物語',
    readStory: '詳しく読む',
    shopMemory: 'このアイテムを見る',
    fittingTitle: 'バーチャル試着室',
    fittingSub: '理想のカラーハーモニーをシミュレーション',
    fittingCoat: '毛色',
    fittingFabric: '生地',
    fittingReset: 'リセット',
    loginBack: '戻る',
    loginTitle: 'メンバーログイン',
    loginAmazonSub: 'Amazon連携',
    loginAmazonDesc: 'Amazonアカウントでログインすると, 注文履歴やサイズ設定が同期されます。',
    loginAmazonBtn: 'Amazonでログイン',
    loginManualTitle: 'または新規登録',
    loginName: 'お名前',
    loginNameFuri: 'フリガナ',
    loginEmail: 'メールアドレス',
    loginPassword: 'パスワード',
    loginPlaceholderName: '山田 太郎',
    loginPlaceholderFuri: 'ヤマダ タロウ',
    loginTerms: '利用規約およびプライバシーポリシーに同意します。',
    loginSubmit: '会員登録する',
    viewAll: 'すべて見る',
    philOriginTitle: '起源',
    philOriginHead: '純粋さの追求から生まれました。',
    philOriginText: 'MOKO BASICは, 2.5kgのトイプードルに究極のフィット感を提供することを使命として東京で設立されました。',
    philWardrobeTitle: 'ワードローブ',
    philWardrobeHead: '気品ある日常',
    philWardrobeText: '朝の散步から家での静かな夕べまで, 愛犬のすべての瞬間に寄り添うよう設計されています。',
    philRoyalTitle: 'ロイヤル・リネージュ',
    philRoyalHead: '高貴な遺産',
    philRoyalText: 'フランス宮廷におけるプードルの高貴な歴史にインスパイアされた, 最高級素材のコレクション。',
    philArtisanTitle: '職人精神',
    philArtisanHead: '日本の匠の技',
    philArtisanText: '東京のアトリエで, 熟練職人が一針一針心を込めて仕上げいています。',
    philValueTitle: '価値観',
    philValueHead: '品質への約束',
    philValueText: '持続可能な手法を通じて, 地球にもペットにも優しい製品づくりを行っています。',
    craftTitle: '工芸',
    craftSubtitle: 'モコ・フィットの科学',
    craftMatTitle: '素材',
    craftMatHead: 'テキスタイルの革新',
    craftMatText: '快適さと耐久性の完璧なバランスを実現する独自の生地。',
    craftMatPoint1Title: '通気性コットン',
    craftMatPoint1Desc: '極上の柔らかさを実現する超長綿。',
    craftMatPoint2Title: 'サーマルテック',
    craftMatPoint2Desc: 'かさばらずに体温を保持します。',
    craftTailorTitle: '仕立て',
    craftTailorHead: '精密なエンジニアリング',
    craftTailorText: 'プードル独自の骨格構造に合わせて設計されたパターン。',
    hotspotArchTitle: 'スケルタルアーチ',
    hotspotArchDesc: '背骨の自然な曲線にフィットします。',
    hotspotArmTitle: '自由な動き',
    hotspotArmDesc: '摩擦なくフルレンジの動きを可能にします。',
    hotspotTagTitle: 'シームレスタグ',
    hotspotTagDesc: '敏感な犬の肌への刺激を防ぎます。',
    craftSewingTitle: '縫製',
    craftSewingHead: '細部へのこだわり',
    craftSewingText: '熟練の職人にとって, 小さすぎるディテールはありません。',
    craftSewingPoint1Title: '折り伏せ縫い',
    craftSewingPoint1Desc: '肌当たりの良さを追求した内側の仕上げ。',
    craftSewingPoint2Title: '補強ポイント',
    craftSewingPoint2Desc: '負荷のかかる部分の耐久性を向上。',
    footerNewsletter: 'メールマガジン',
    footerSubscribe: '購読する',
    footerHelp: 'ヘルプ',
    footerServices: 'サービス',
    footerAbout: '企業情報'
  },
  ZH_TW: {
    heroSlogan: '每一道縫線，皆為純粹。',
    titleMale: '公狗',
    subMale: '英姿颯爽的輪廓',
    titleFemale: '母狗',
    subFemale: '優雅柔美的曲線',
    newBadge: '新品',
    newIn: '最新系列',
    footerCopy: '© 2025 MOKO BASIC. 版權所有。',
    buyAmazon: '前往 Amazon 購買',
    buyRakuten: '前往 樂天 購買',
    aiWelcome: '歡迎來到 Moko Basic 諮詢台。請問今天有什麼可以幫您的？',
    specs: { warmth: '保暖度', breathability: '透氣性', softness: '柔軟度', stretch: '彈性' },
    sizeGuide: '尺寸指南',
    journalSub: '來自工坊的故事',
    readStory: '閱讀全文',
    shopMemory: '選購此造型',
    fittingTitle: '虛擬試衣間',
    fittingSub: '模擬完美的色彩搭配',
    fittingCoat: '毛色',
    fittingFabric: '面料',
    fittingReset: '重置',
    loginBack: '返回',
    loginTitle: '會員登入',
    loginAmazonSub: 'Amazon 帳號連結',
    loginAmazonDesc: '使用 Amazon 帳號登入以同步您的訂單與尺寸設定。',
    loginAmazonBtn: '使用 Amazon 帳號登入',
    loginManualTitle: '或 建立新帳號',
    loginName: '姓名',
    loginNameFuri: '姓名拼音',
    loginEmail: '電子郵件',
    loginPassword: '傳輸密碼',
    loginPlaceholderName: '您的姓名',
    loginPlaceholderFuri: '您的姓名拼音',
    loginTerms: '我同意服務條款與隱私權政策。',
    loginSubmit: '加入 CLUB MOKO',
    viewAll: '查看全部',
    philOriginTitle: '品牌起源',
    philOriginHead: '源於對純粹的追求。',
    philOriginText: 'MOKO BASIC 專為 2.5kg 的白色玩具貴賓犬提供極致的合身感。',
    philWardrobeTitle: '衣櫥系列',
    philWardrobeHead: '優雅的場合',
    philWardrobeText: '旨在優雅地陪伴您愛犬生命中的每一個時刻。',
    philRoyalTitle: '皇家血統',
    philRoyalHead: '高貴傳承',
    philRoyalText: '靈感源自法國宮廷，Heritage 系列僅使用最優質的面料。',
    philArtisanTitle: '匠心精神',
    philArtisanHead: '日本工藝',
    philArtisanText: '每一件作品均在東京工坊手工完成。',
    philValueTitle: '核心價值',
    philValueHead: '品質承諾',
    philValueText: '採用永續發展實踐，確保對地球和寵物同樣友善。',
    craftTitle: '工藝細節',
    craftSubtitle: 'Moko Fit 的科學',
    craftMatTitle: '面料選擇',
    craftMatHead: '紡織技術創新',
    craftMatText: '獨家面料，在舒適度與耐用性之間取得完美平衡。',
    craftMatPoint1Title: '透氣棉',
    craftMatPoint1Desc: '長纖維確保極致柔軟。',
    craftMatPoint2Title: '保溫技術',
    craftMatPoint2Desc: '在不增加厚度的情況下保留體溫。',
    craftTailorTitle: '剪裁工藝',
    craftTailorHead: '精密工程',
    craftTailorText: '針對貴賓犬獨特的骨骼結構設計。',
    hotspotArchTitle: '骨骼弧度',
    hotspotArchDesc: '符合脊椎的自然曲線。',
    hotspotArmTitle: '肢體自由',
    hotspotArmDesc: '允許全方位的運動。',
    hotspotTagTitle: '無感標籤',
    hotspotTagDesc: '防止對敏感犬隻的皮膚產生刺激。',
    craftSewingTitle: '縫製工法',
    craftSewingHead: '一絲不苟的組裝',
    craftSewingText: '對於大師而言，沒有任何細節是微不足道的。',
    craftSewingPoint1Title: '法式縫',
    craftSewingPoint1Desc: '隱藏邊緣以確保內部平整。',
    craftSewingPoint2Title: '加固點',
    craftSewingPoint2Desc: '在受力區域增加耐用性。',
    footerNewsletter: '新聞通訊',
    footerSubscribe: '新聞通訊',
    footerHelp: '幫助',
    footerServices: '服務',
    footerAbout: '關於我們'
  }
};
