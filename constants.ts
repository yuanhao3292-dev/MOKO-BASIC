

import { Product, Language } from './types';

// =====================================================================
// 🖼️ GLOBAL MEDIA LIBRARY (ASSETS) | 图片资源库
// =====================================================================
// Instructions: Replace the URL strings below with your own image links.
// Recommended pixel dimensions are noted in the comments.
// 说明：请替换下方的链接为您自己的图片地址。推荐像素尺寸已在注释中标注。
// =====================================================================

export const ASSETS = {
  // --- HOMEPAGE HERO (首页主图) ---
  HERO: {
    // Main full-screen background
    MAIN: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop', // Rec: 1920 x 1080 px (Landscape)
  },

  // --- CATEGORY BANNERS (分类横幅) ---
  CATEGORY: {
    // Boy / Male collection banner
    MALE: 'https://images.unsplash.com/photo-1620021673322-26f6345dc553?q=80&w=2000&auto=format&fit=crop',   // Rec: 2000 x 1000 px (Wide)
    // Girl / Female collection banner
    FEMALE: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=2000&auto=format&fit=crop', // Rec: 2000 x 1000 px (Wide)
  },

  // --- PHILOSOPHY & CRAFT (理念与工艺) ---
  PHILOSOPHY: {
    // "The Origin" section image
    ORIGIN: 'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=1000&auto=format&fit=crop', // Rec: 800 x 1000 px (Portrait)
    // "Material Science" section image (Macro shot of fabric)
    MATERIAL: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop', // Rec: 1000 x 1000 px (Square)
    // "Tailoring" section image (Hotspot background)
    TAILOR: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop', // Rec: 2000 x 1200 px (Landscape)
  },

  // --- OCCASIONS (场景轮播) ---
  OCCASIONS: {
    HOME: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 1066 px (Portrait 3:4)
    WALK: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 1066 px (Portrait 3:4)
    RAIN: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 1066 px (Portrait 3:4)
    SLEEP: 'https://images.unsplash.com/photo-1541781777631-fa9537171859?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 1066 px (Portrait 3:4)
  },

  // --- STORE MANAGER (店长) ---
  MANAGER: {
    // Avatar for Company Profile
    AVATAR: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 800 px (Square)
  },

  // --- FITTING ROOM MODELS (试衣间模特) ---
  MODELS: {
    WHITE: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 800 px (Square or 4:3)
    APRICOT: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 800 px
    BLACK: 'https://images.unsplash.com/photo-1620021673322-26f6345dc553?q=80&w=800&auto=format&fit=crop', // Rec: 800 x 800 px
  },

  // --- PRODUCT DEMO IMAGES (产品示例) ---
  // You can point specific products to these or unique URLs
  PRODUCTS: {
    TEE: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop',      // Rec: 1000 x 1200 px (Portrait 5:6)
    HOODIE: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',   // Rec: 1000 x 1200 px
    STRIPE: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop',      // Rec: 1000 x 1200 px
    VEST: 'https://images.unsplash.com/photo-1517423568366-6975535403b3?q=80&w=1000&auto=format&fit=crop',     // Rec: 1000 x 1200 px
    TRENCH: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop',   // Rec: 1000 x 1200 px
    LEASH_L: 'https://images.unsplash.com/photo-1629898038755-6b589434860b?q=80&w=1000&auto=format&fit=crop',  // Rec: 1000 x 1200 px
    LEASH_R: 'https://images.unsplash.com/photo-1551529834-525807d6b4f3?q=80&w=1000&auto=format&fit=crop',     // Rec: 1000 x 1200 px
    COLLAR_P: 'https://images.unsplash.com/photo-1605218427360-36390f85b34c?q=80&w=1000&auto=format&fit=crop', // Rec: 1000 x 1200 px
    COLLAR_L: 'https://images.unsplash.com/photo-1598583486847-c0258074d0a9?q=80&w=1000&auto=format&fit=crop', // Rec: 1000 x 1200 px
    BOWTIE: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=1000&auto=format&fit=crop',   // Rec: 1000 x 1200 px
    HAIRCLIP: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop', // Rec: 1000 x 1200 px
    DRESS: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop',    // Rec: 1000 x 1200 px
    BOWL: 'https://images.unsplash.com/photo-1585846416120-3a7354ed7d6d?q=80&w=1000&auto=format&fit=crop',     // Rec: 1000 x 1200 px
    BOTTLE: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=1000&auto=format&fit=crop',   // Rec: 1000 x 1200 px
    RAIN_CLEAR: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1000&auto=format&fit=crop', // Rec: 1000 x 1200 px
    BED: 'https://images.unsplash.com/photo-1541781777631-fa9537171859?q=80&w=1000&auto=format&fit=crop',      // Rec: 1000 x 1200 px
    CARRIER: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?q=80&w=1000&auto=format&fit=crop',  // Rec: 1000 x 1200 px
  },

  // --- PRODUCT DETAIL GALLERY (详情页细节图) ---
  GALLERY_DETAILS: [
    'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=800&auto=format&fit=crop', // Detail 1 Rec: 800 x 800 px
    'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop', // Detail 2 Rec: 800 x 800 px
    'https://images.unsplash.com/photo-1598133869164-6eb75f380f70?q=80&w=800&auto=format&fit=crop', // Detail 3 Rec: 800 x 800 px
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop'  // Detail 4 Rec: 800 x 800 px
  ]
};

// Updated Navigation Structure
// Left: Male, Female
// Right: Philosophy
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
    label: { EN: 'Size Guide', JP: '犬種とサイズの測り方', ZH_TW: '犬種與尺寸測量' },
    content: {
      EN: `
        <div class="space-y-12 font-sans">
          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">Points on Measurement & Selection</h3>
            <ul class="space-y-6 text-sm md:text-base">
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">Start with the Basic 3</strong>
                <span class="text-stone-600">Measure "Weight, Neck, and Chest" first, then check the closest values in the size chart.</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">Check Product Specifics</strong>
                <span class="text-stone-600">Dimensions and materials (stretch) vary by product. Please refer to the "Information" section on each product page.</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">About Coverall Length</strong>
                <span class="text-stone-600">Due to the open structure for hygiene, it can be worn even if the length is 5-15cm shorter than your dog's back length.</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-gold">Water Play Caution</strong>
                <span class="text-stone-600">A snug fit is recommended to prevent accidental removal underwater. Always use a floating vest and leash, and never leave your dog unattended.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">Size Guide by Breed</h3>
            <p class="text-xs text-stone-400 mb-4">* Estimates only. Please measure before selecting.</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">Type</th>
                    <th class="py-3 px-4 border-b border-stone-200">Est. Weight</th>
                    <th class="py-3 px-4 border-b border-stone-200">Recommended</th>
                    <th class="py-3 px-4 border-b border-stone-200">Typical Breeds</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">Small</td>
                    <td class="py-3 px-4">1.5 〜 5.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">SS / S / SM / M</td>
                    <td class="py-3 px-4">Chihuahua, Toy Poodle, Papillon</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">Medium</td>
                    <td class="py-3 px-4">6.0 〜 12.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">ML / L / 1L / LL</td>
                    <td class="py-3 px-4">Shiba, Schnauzer, Cavalier</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">Large</td>
                    <td class="py-3 px-4">14.0 〜 45.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">3L 〜 2XL</td>
                    <td class="py-3 px-4">Retriever, Border Collie, Shepherd</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">Special Body Types</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">Type</th>
                    <th class="py-3 px-4 border-b border-stone-200">Est. Weight</th>
                    <th class="py-3 px-4 border-b border-stone-200">Recommended</th>
                    <th class="py-3 px-4 border-b border-stone-200">Breeds</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">Dachs</td>
                    <td class="py-3 px-4">3.0 〜 8.5kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">DXS / DXM / DXL</td>
                    <td class="py-3 px-4">Miniature Dachshund</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">Frenchie</td>
                    <td class="py-3 px-4">7.5 〜 16.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">FPS / FPM / FPL</td>
                    <td class="py-3 px-4">French Bulldog, Pug</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      `,
      JP: `
        <div class="space-y-12 font-sans">
          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">採寸と選び方のポイント</h3>
            <ul class="space-y-6 text-sm md:text-base">
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">まずは基本3点から</strong>
                <span class="text-stone-600">「体重・首周り・胴周り」を計測し、サイズ表の近い数値を確認してください。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">商品ごとの個性を確認</strong>
                <span class="text-stone-600">商品により寸法や素材（伸縮性）が異なります。各商品ページの案内（Information）を必ずご参照ください。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">カバーオールの着丈について</strong>
                <span class="text-stone-600">お尻部分が開いた構造（排泄用）のため、愛犬の着丈より5〜15cm短くても着用可能です。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-gold">水遊びでの着用注意</strong>
                <span class="text-stone-600">水中での脱衣事故を防ぐため、ぴったりめのサイズを推奨します。安全のため、必ずフローティングベストとリードを併用し、目を離さずにご使用ください。</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">犬種別サイズ目安表</h3>
            <p class="text-xs text-stone-400 mb-4">※あくまで目安です。必ず実測の上でお選びください。</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">タイプ</th>
                    <th class="py-3 px-4 border-b border-stone-200">目安体重</th>
                    <th class="py-3 px-4 border-b border-stone-200">推奨サイズ</th>
                    <th class="py-3 px-4 border-b border-stone-200">代表犬種</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">小型犬</td>
                    <td class="py-3 px-4">1.5 〜 5.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">SS / S / SM / M</td>
                    <td class="py-3 px-4">チワワ、トイプードル、パピヨン 等</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">中型犬</td>
                    <td class="py-3 px-4">6.0 〜 12.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">ML / L / 1L / LL</td>
                    <td class="py-3 px-4">柴犬、シュナウザー、キャバリア 等</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">大型犬</td>
                    <td class="py-3 px-4">14.0 〜 45.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">3L 〜 2XL</td>
                    <td class="py-3 px-4">レトリバー種、ボーダーコリー、シェパード 等</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">専用サイズ（特殊体型）</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">タイプ</th>
                    <th class="py-3 px-4 border-b border-stone-200">目安体重</th>
                    <th class="py-3 px-4 border-b border-stone-200">推奨サイズ</th>
                    <th class="py-3 px-4 border-b border-stone-200">対象犬種</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">ダックス</td>
                    <td class="py-3 px-4">3.0 〜 8.5kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">DXS / DXM / DXL</td>
                    <td class="py-3 px-4">ミニチュアダックスフンド</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">フレブル</td>
                    <td class="py-3 px-4">7.5 〜 16.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">FPS / FPM / FPL</td>
                    <td class="py-3 px-4">フレンチブルドッグ、パグ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-12 font-sans">
          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">測量與挑選重點</h3>
            <ul class="space-y-6 text-sm md:text-base">
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">首先測量基本 3 點</strong>
                <span class="text-stone-600">請測量「體重、頸圍、胸圍」，並對照尺寸表中最接近的數值。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">確認商品特性</strong>
                <span class="text-stone-600">不同商品的尺寸與材質（彈性）皆不同。請務必參閱各商品頁面的說明（Information）。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-black">關於連身衣衣長</strong>
                <span class="text-stone-600">由於臀部採用開口構造（便於排泄），即使衣長比愛犬背長短 5〜15cm 亦可穿著。</span>
              </li>
              <li class="flex flex-col md:flex-row gap-2 md:gap-4">
                <strong class="min-w-[180px] text-mofu-gold">戲水穿著注意事項</strong>
                <span class="text-stone-600">為防止在水中脫落，建議選擇較合身的尺寸。為了安全，請務必搭配救生衣與牽繩，並時刻關注愛犬。</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">犬種尺寸對照表</h3>
            <p class="text-xs text-stone-400 mb-4">※僅供參考，請務必實際測量後選擇。</p>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">類型</th>
                    <th class="py-3 px-4 border-b border-stone-200">參考體重</th>
                    <th class="py-3 px-4 border-b border-stone-200">建議尺寸</th>
                    <th class="py-3 px-4 border-b border-stone-200">代表犬種</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">小型犬</td>
                    <td class="py-3 px-4">1.5 〜 5.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">SS / S / SM / M</td>
                    <td class="py-3 px-4">吉娃娃、貴賓犬、蝴蝶犬 等</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">中型犬</td>
                    <td class="py-3 px-4">6.0 〜 12.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">ML / L / 1L / LL</td>
                    <td class="py-3 px-4">柴犬、雪納瑞、查理士王小獵犬 等</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">大型犬</td>
                    <td class="py-3 px-4">14.0 〜 45.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">3L 〜 2XL</td>
                    <td class="py-3 px-4">尋回犬、邊境牧羊犬、牧羊犬 等</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">專用尺寸（特殊體型）</h3>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left border-collapse min-w-[500px]">
                <thead class="bg-stone-50 text-mofu-black font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th class="py-3 px-4 border-b border-stone-200">類型</th>
                    <th class="py-3 px-4 border-b border-stone-200">參考體重</th>
                    <th class="py-3 px-4 border-b border-stone-200">建議尺寸</th>
                    <th class="py-3 px-4 border-b border-stone-200">對象犬種</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-stone-100 text-stone-600">
                  <tr>
                    <td class="py-3 px-4">臘腸</td>
                    <td class="py-3 px-4">3.0 〜 8.5kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">DXS / DXM / DXL</td>
                    <td class="py-3 px-4">迷你臘腸犬</td>
                  </tr>
                  <tr>
                    <td class="py-3 px-4">法鬥</td>
                    <td class="py-3 px-4">7.5 〜 16.0kg</td>
                    <td class="py-3 px-4 font-bold text-mofu-black">FPS / FPM / FPL</td>
                    <td class="py-3 px-4">法國鬥牛犬、巴哥</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      `
    }
  },
  { 
    id: 'contact', 
    label: { EN: 'Contact Us', JP: 'お問い合わせ', ZH_TW: '聯絡我們' },
    content: {
      EN: 'Our concierges are available 24/7. Email: info@niijima-soukenn.com',
      JP: 'コンシェルジュが24時間体制でサポートいたします。Email: info@niijima-soukenn.com',
      ZH_TW: '我們的專屬顧問全天候為您服務。Email: info@niijima-soukenn.com'
    }
  },
  { 
    id: 'company', 
    label: { EN: 'Company Profile', JP: '会社概要', ZH_TW: '公司概要' },
    content: {
      EN: `
        <div class="space-y-12 font-sans">
          <section class="text-center md:text-left">
             <div class="flex flex-col items-center mb-12">
               <div class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-stone-100 shadow-sm mb-4">
                  <img src="${ASSETS.MANAGER.AVATAR}" alt="Store Manager Moko" class="w-full h-full object-cover" />
               </div>
               <h4 class="font-serif text-xl text-mofu-black">Store Manager: Moko</h4>
               <p class="text-xs font-bold uppercase tracking-widest text-mofu-gold">Chief Happiness Officer</p>
             </div>

             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">CONCEPT</h3>
             <p class="text-sm md:text-base leading-loose text-stone-600 mb-8">
               "Individuality", more freely, more dearly.<br/>
               We propose a comfortable lifestyle where you and your dog can trust each other deeply, focusing on the unique personality of each boy and girl.
             </p>
             <p class="text-sm md:text-base leading-loose text-stone-600">
               Why settle for a "uniform style" when they are family, best friends, and unique individuals? We pour uncompromising dedication into every garment and bowl. MOKO BASIC uses the power of design to turn the joy of living together into something more certain.
             </p>
          </section>

          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">Company Information</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">Vendor</th><td class="py-3 px-4">Niijima Souken Co., Ltd. (Import Agency)</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Address</th><td class="py-3 px-4">Tenmabashi SE Bldg. 5F, 2-1-12 Tenma, Kita-ku, Osaka-shi, Osaka 530-0043</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Phone</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Email</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Hours</th><td class="py-3 px-4">11:00 - 17:00 (Excluding Sat, Sun, Holidays)</td></tr>
                 </tbody>
               </table>
             </div>
          </section>
        </div>
      `,
      JP: `
        <div class="space-y-12 font-sans">
          <section class="text-center md:text-left">
             <div class="flex flex-col items-center mb-12">
               <div class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-stone-100 shadow-sm mb-4">
                  <img src="${ASSETS.MANAGER.AVATAR}" alt="店長モコ" class="w-full h-full object-cover" />
               </div>
               <h4 class="font-serif text-xl text-mofu-black">店長：モコ (Moko)</h4>
               <p class="text-xs font-bold uppercase tracking-widest text-mofu-gold">Chief Happiness Officer</p>
             </div>

             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">CONCEPT</h3>
             <p class="text-sm md:text-base leading-loose text-stone-600 mb-8">
               「その子らしさ」を、もっと自由に、もっと愛おしく。<br/>
               私たちは愛犬のことを、どれだけ深く理解できているでしょうか。 彼らは家族であり、親友であり、そして唯一無二の個性を持つ存在です。
             </p>
             <p class="text-sm md:text-base leading-loose text-stone-600 mb-8">
               だからこそ、私たちは「画一的なスタイル」を選びません。<br/>
               活発な男の子には、冒険心を支える強さと快適さを。 愛らしい女の子には、その魅力を引き立てる繊細な優しさを。
             </p>
             <p class="text-sm md:text-base leading-loose text-stone-600">
               衣服ひとつ、器ひとつにも、妥協のないこだわりを込めて。 MOKO BASICは、愛犬とあなたが心から信頼し合える、心地よいライフスタイルを提案します。 共に生きる喜びを、デザインの力で、もっと確かなものへ。
             </p>
          </section>

          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">会社情報</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">販売業者</th><td class="py-3 px-4">新島総研株式会社 （輸入代理販売元）</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">所在地</th><td class="py-3 px-4">〒530-0043 大阪府大阪市北区天満2丁目1-12 天満橋SEビル5階</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">電話番号</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">メール</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">営業時間</th><td class="py-3 px-4">11:00 ～ 17:00 （土日祝を除く）</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">取扱商品</th><td class="py-3 px-4">
                     【BOY / 公犬系列】<br/>Clothing (ドッグウェア)、Leashes (リード)、Collars (首輪)、Accessories (アクセサリー)、Dog Bowls (フードボウル)、Water Dispensers (給水器)<br/><br/>
                     【GIRL / 母犬系列】<br/>Clothing (ドッグウェア)、Leashes (リード)、Collars (首輪)、Accessories (アクセサリー)、Dog Bowls (フードボウル)、Water Dispensers (給水器)
                   </td></tr>
                 </tbody>
               </table>
             </div>
          </section>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-12 font-sans">
          <section class="text-center md:text-left">
             <div class="flex flex-col items-center mb-12">
               <div class="relative w-40 h-40 rounded-full overflow-hidden border-4 border-stone-100 shadow-sm mb-4">
                  <img src="${ASSETS.MANAGER.AVATAR}" alt="店長 Moko" class="w-full h-full object-cover" />
               </div>
               <h4 class="font-serif text-xl text-mofu-black">店長：Moko</h4>
               <p class="text-xs font-bold uppercase tracking-widest text-mofu-gold">Chief Happiness Officer</p>
             </div>

             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">CONCEPT</h3>
             <p class="text-sm md:text-base leading-loose text-stone-600 mb-8">
               更自由、更珍視「那孩子的個性」。<br/>
               MOKO BASIC 提案一種您與愛犬能真心信賴的舒適生活方式。
             </p>
             <p class="text-sm md:text-base leading-loose text-stone-600">
               我們不選擇「千篇一律的風格」，因為他們是家人，是摯友，是獨一無二的存在。無論是一件衣服，還是一個食碗，我們都注入毫不妥協的堅持。用設計的力量，將共同生活的喜悅變得更加確切。
             </p>
          </section>

          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">公司資訊</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">販售業者</th><td class="py-3 px-4">新島総研株式会社 (進口代理)</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">地址</th><td class="py-3 px-4">大阪府大阪市北區天滿2丁目1-12 天滿橋SE大樓5樓</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">電話</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Email</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">營業時間</th><td class="py-3 px-4">11:00 ～ 17:00 (週六日及國定假日除外)</td></tr>
                 </tbody>
               </table>
             </div>
          </section>
        </div>
      `
    }
  },
  { 
    id: 'commercial', 
    label: { EN: 'Commercial Act', JP: '特定商取引法に基づく表示', ZH_TW: '特定商取引法表示' },
    content: {
      JP: `
        <div class="space-y-12 font-sans">
          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">店舗情報</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">販売業者</th><td class="py-3 px-4">新島総研株式会社</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">運営責任者</th><td class="py-3 px-4">員昊</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">住所</th><td class="py-3 px-4">〒530-0043 大阪府大阪市北区天満２丁目１－１２ 天満橋ＳＥビル５階</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">電話番号</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">メールアドレス</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">URL</th><td class="py-3 px-4">niijima-soukenn.com</td></tr>
                 </tbody>
               </table>
             </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">商品の販売について</h3>
            <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■販売価格・条件について</dt>
                <dd>当サイトは「MOKO BASIC」の製品紹介およびカタログサイトです。商品の販売・決済・配送は、各ショッピングモール（Amazon、楽天市場）の弊社公式店舗に委託しております。販売価格、送料、手数料等は、各販売ページの表記に準じます。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■注文方法</dt>
                <dd>各商品ページに設置されているリンク（Amazon / 楽天市場）より、各販売サイトへ移動し、画面表示に基づきご購入手続きをお願いします。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■支払方法</dt>
                <dd>ご利用のショッピングモール（Amazon、楽天市場）が定める決済方法（クレジットカード、Amazon Pay、楽天ペイ、コンビニ決済、銀行振込など）がご利用いただけます。</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■引渡しについて</dt>
                <dd>各販売サイトの配送ポリシーに基づき発送されます。通常、ご注文確定後（前払いの場合はご入金確認後）、各サイトに記載の納期（例：Amazonプライム配送、楽天あす楽等）にてお届けいたします。</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■商品の購入制限、在庫について</dt>
                <dd>在庫状況は各販売サイトにてリアルタイムで変動しております。当サイト上で「在庫あり」の表示であっても、リンク先の販売サイトにて完売となっている場合がございます。また、転売目的での大量購入や、不正な注文と判断された場合、各モールの規定に基づきキャンセルさせていただく場合がございます。</dd>
              </div>
            </dl>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">返品・交換・保証について</h3>
             <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■返品・交換について</dt>
                <dd>ご購入いただいたサイト（Amazon または 楽天市場）の返品・交換規定に準じて対応いたします。返品・交換をご希望の際は、必ずご購入されたサイトの注文履歴（購入履歴）よりお手続きをお願いいたします。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■商品不良・誤配送について</dt>
                <dd>当社では出荷前に十分な検品を行っておりますが、万が一、お届けした商品に「不良箇所」や「注文内容との相違」がございましたら、各販売サイトの問い合わせフォーム、または下記までご連絡ください。<br/><br/>連絡先： info@niijima-soukenn.com<br/>対応期限： 商品到着後7日以内<br/><br/>速やかに良品との交換、または返金対応をさせていただきます。※不良品・誤配送の場合、返品・交換にかかる送料は弊社（または各モール規定）が負担いたします。※使用済み、またはお客様の元でキズ・汚れが生じた商品につきましては、ご対応いたしかねる場合がございます。</dd>
              </div>
            </dl>
          </section>
        </div>
      `,
      EN: `
        <div class="space-y-12 font-sans">
          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">Shop Information</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">Vendor</th><td class="py-3 px-4">Niijima Souken Co., Ltd.</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Operations Manager</th><td class="py-3 px-4">Yuan Hao</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Address</th><td class="py-3 px-4">Tenmabashi SE Bldg. 5F, 2-1-12 Tenma, Kita-ku, Osaka-shi, Osaka 530-0043</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Phone</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">Email</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">URL</th><td class="py-3 px-4">niijima-soukenn.com</td></tr>
                 </tbody>
               </table>
             </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">Product Sales</h3>
            <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ Price & Conditions</dt>
                <dd>This site serves as a product catalog for "MOKO BASIC". Sales, payment, and shipping are handled by our official stores on Amazon and Rakuten. Please refer to each sales page for prices, shipping fees, and other charges.</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ How to Order</dt>
                <dd>Please click the links (Amazon / Rakuten) on each product page to proceed to the respective sales site and complete your purchase.</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ Payment Methods</dt>
                <dd>Accepted payment methods are determined by the respective shopping mall (Amazon, Rakuten), including Credit Card, Amazon Pay, Rakuten Pay, Convenience Store Payment, Bank Transfer, etc.</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■ Delivery</dt>
                <dd>Products are shipped according to the delivery policy of each sales site. Generally, items are delivered within the timeframe specified on the site (e.g., Amazon Prime, Rakuten Asuraku) after order confirmation (or payment confirmation for prepayments).</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■ Purchase Restrictions & Stock</dt>
                <dd>Stock availability fluctuates in real-time on each sales site. Even if displayed as "In Stock" here, it may be sold out on the linked site. Large quantity purchases for resale or orders deemed fraudulent may be cancelled based on mall regulations.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">Returns, Exchanges & Warranty</h3>
             <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ Returns & Exchanges</dt>
                <dd>We comply with the return/exchange policies of the site where you purchased (Amazon or Rakuten). Please process requests via your Order History on that specific site.</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ Defects & Incorrect Items</dt>
                <dd>We inspect thoroughly before shipment. However, if you receive a defective or incorrect item, please contact us via the sales site's inquiry form or below:<br/><br/>Contact: info@niijima-soukenn.com<br/>Deadline: Within 7 days of arrival<br/><br/>We will promptly exchange for a good product or refund. *Shipping costs for defective/incorrect items are covered by us. *We may not accept returns for used items or damage caused by the customer.</dd>
              </div>
            </dl>
          </section>
        </div>
      `,
      ZH_TW: `
        <div class="space-y-12 font-sans">
          <section>
             <h3 class="text-xl font-serif text-mofu-black mb-6 pb-2 border-b border-stone-200">店鋪情報</h3>
             <div class="overflow-x-auto">
               <table class="w-full text-sm text-left border-collapse border border-stone-200">
                 <tbody>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 w-1/3 md:w-1/4 whitespace-nowrap">販售業者</th><td class="py-3 px-4">新島総研株式会社</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">營運負責人</th><td class="py-3 px-4">員昊</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">地址</th><td class="py-3 px-4">〒530-0043 大阪府大阪市北区天満２丁目１－１２ 天満橋ＳＥビル５階</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">電話號碼</th><td class="py-3 px-4">06-6632-8807</td></tr>
                   <tr class="border-b border-stone-100"><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">電子郵箱</th><td class="py-3 px-4">info@niijima-soukenn.com</td></tr>
                   <tr><th class="py-3 px-4 bg-stone-50 whitespace-nowrap">URL</th><td class="py-3 px-4">niijima-soukenn.com</td></tr>
                 </tbody>
               </table>
             </div>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">關於商品銷售</h3>
            <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ 銷售價格與條件</dt>
                <dd>本網站為「MOKO BASIC」的產品介紹與目錄網站。商品的銷售、結帳與配送均委託給各購物中心（Amazon、樂天市場）的官方店鋪。銷售價格、運費、手續費等，請以各銷售頁面的標示為準。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ 訂購方式</dt>
                <dd>請透過各商品頁面的連結（Amazon / 樂天市場）前往各銷售網站，並根據畫面指示完成購買手續。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ 付款方式</dt>
                <dd>可使用各購物中心（Amazon、樂天市場）規定的付款方式（信用卡、Amazon Pay、Rakuten Pay、超商付款、銀行轉帳等）。</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■ 關於配送</dt>
                <dd>將根據各銷售網站的配送政策進行發貨。通常在訂單確認後（如為預付則在確認入帳後），按照各網站記載的交期（例如 Amazon Prime、樂天明日達等）送達。</dd>
              </div>
               <div>
                <dt class="font-bold text-mofu-black mb-2">■ 購買限制與庫存</dt>
                <dd>庫存狀況在各銷售網站上即時變動。即使本站顯示「有庫存」，連結的銷售網站也可能已售罄。此外，若被判斷為轉賣目的的大量購買或不正當訂單，可能會根據各商城的規定取消訂單。</dd>
              </div>
            </dl>
          </section>

          <section>
            <h3 class="text-xl font-serif text-mofu-black mb-4">退換貨與保固</h3>
             <dl class="space-y-6 text-sm text-stone-600">
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ 關於退換貨</dt>
                <dd>將依照您購買的網站（Amazon 或 樂天市場）的退換貨規定辦理。如需退換貨，請務必透過購買網站的訂單履歷（購買記錄）進行申請。</dd>
              </div>
              <div>
                <dt class="font-bold text-mofu-black mb-2">■ 商品瑕疵與配送錯誤</dt>
                <dd>我們在出貨前會進行嚴格檢品，但萬一收到的商品有「瑕疵」或「內容不符」，請透過各銷售網站的詢問表單或以下方式聯繫我們。<br/><br/>聯絡方式： info@niijima-soukenn.com<br/>受理期限： 商品抵達後 7 日內<br/><br/>我們將迅速為您更換良品或進行退款。※如為瑕疵品或配送錯誤，退換貨運費由我司（或依商城規定）負擔。※已使用或因客戶原因造成的污損商品，可能無法受理。</dd>
              </div>
            </dl>
          </section>
        </div>
      `
    }
  }
];

export const TRANSLATIONS = {
  EN: {
    heroSub: 'LifeWear for Petite Dogs (2.5kg)',
    heroTitle: 'MOKO BASIC',
    heroSlogan: 'Haute Couture for the 2.5kg Silhouette.',
    shopTops: 'The Essentials',
    shopCoats: 'Le Petit Teddy',
    discover: 'Discover Collection',
    newIn: 'New Arrivals',
    viewAll: 'View All',
    
    // Page Titles
    titleMale: 'Collection for Boys',
    subMale: 'Cool & Functional',
    titleFemale: 'Collection for Girls',
    subFemale: 'Elegant & Soft',
    titleSupplies: 'Pet Supplies',
    subSupplies: 'Curated Accessories',

    // Philosophy
    philOriginTitle: 'The Origin',
    philOriginHead: 'Finding the "Correct Answer" in the Noise.',
    philOriginText: 'I once wandered the ocean of the internet for my dog. An overflow of options. Yet, what arrived was quality not worth the price, or sewing that unraveled immediately. "Why is there no \'obviously good\' clothing for them?" That question was the beginning. We decided to stop your confusion. We cut away complex options to pursue the ultimate balance of quality and price. To present the single "Correct Answer" in a chaotic market. That is Moko Basic\'s mission.',

    philWardrobeTitle: 'The Wardrobe',
    philWardrobeHead: 'Not for a Pet. For Family.',
    philWardrobeText: 'Dogs are not for display. They are family who sleep, walk, and feel the seasons just like us. That is why they need a dedicated closet. Soft loungewear for sunny spring days. Functional raincoats for summer showers. Exquisite pajamas for cold winter nights. Moko Basic is designed for every scene of 365 days. Accessible like Uniqlo, but with uncompromising quality. We deliver clothes they can wear with pride.',

    philValueTitle: 'The Promise',
    philValueHead: 'The Best Daily Life at a Fair Price.',
    philValueText: 'Is it natural for good things to be expensive? We don\'t think so. Because life with a dog continues every day. We reviewed the production process from scratch and cut excess costs to realize "surprising quality" at a "sustainable price". With the budget you saved, please buy them a slightly better treat today. That is also part of the "Rich Dog Life" we wish for.',

    philRoyalTitle: 'The Royal Spirit',
    philRoyalHead: 'Homage to the Little Royalty.',
    philRoyalText: 'Once loved in the Palace of Versailles, they embody innate nobility. Wrapping their proud 2.5kg bodies in mass-produced cloth is unthinkable. We asked: "What if a modern royal court tailored daily wear for their dog?" The answer is not decoration, but "Orthodoxy" that highlights their silhouette. Moko Basic treats your small family member as the royalty they are.',
    
    philArtisanTitle: 'The Artisan\'s Soul',
    philArtisanHead: 'Japanese Aesthetics in 0.1mm.',
    philArtisanText: '"God is in the details." This weighs heavier on smaller clothes. A millimeter of seam deviation might hurt their thin skin. Grams of extra weight might dull their step. We challenge this with Japanese Craftsmanship. The logic of 3D draping. Material selection that clings to the fingers. Our "overprotective" love and technique is sewn into every simple piece.',
    
    // Craft
    craftTitle: 'The Invisible Luxury',
    craftSubtitle: 'Material Science & Tailoring',
    
    craftMatTitle: 'Material Science',
    craftMatHead: 'Purity Beyond Baby Standards.',
    craftMatText: 'A Toy Poodle\'s skin is only 1/3 the thickness of a human baby\'s. Therefore, Moko Basic is not "Apparel", it is "Skincare".',
    craftMatPoint1Title: 'Premium Extra-Long Cotton',
    craftMatPoint1Desc: 'Top 5% Global Yield. Silk-like luster, Cashmere-like touch.',
    craftMatPoint2Title: 'Zero Harmful Substances',
    craftMatPoint2Desc: 'OEKO-TEX Standard. Safe even if licked.',

    craftTailorTitle: 'The Art of Tailoring',
    craftTailorHead: '3D Architecture for 2.5kg.',
    craftTailorText: 'A dog\'s body is not flat. We create patterns from "Motion", not still images.',
    
    hotspotArchTitle: '3D Arch Cut',
    hotspotArchDesc: 'Sculpted for the deep chest and slender waist.',
    hotspotArmTitle: 'Precision Armholes',
    hotspotArmDesc: 'Calculated to the millimeter to prevent chafing.',
    hotspotTagTitle: 'Tagless',
    hotspotTagDesc: 'Printed information. Zero irritation.',

    craftSewingTitle: 'Sewing Precision',
    craftSewingHead: 'Sewing Without Stress.',
    craftSewingText: 'The best clothes are the ones you forget you are wearing. We eliminate all "discomfort".',
    craftSewingPoint1Title: 'Flat Seaming',
    craftSewingPoint1Desc: 'Luxury lingerie technique. Flattens seams to minimize skin contact.',
    craftSewingPoint2Title: 'Tag-Free Comfort',
    craftSewingPoint2Desc: 'No scratching labels. No rustling sounds.',

    fittingTitle: 'Moko Fitting Room',
    fittingSub: 'See it in their true colors.',
    fittingCoat: 'Coat Color',
    fittingFabric: 'Fabric Color',
    fittingReset: 'Reset',

    footerNewsletter: 'Newsletter',
    footerSubscribe: 'Join Club Moko',
    footerHelp: 'Client Services',
    footerServices: 'Savoir-Faire',
    footerAbout: 'The Maison',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'Bonjour. I am your Moko Concierge. How may I assist in tailoring your White Teddy\'s wardrobe?',
    newBadge: 'Nouveau',
    addToCart: 'Add to Bag', // Deprecated but kept for type safety
    buyAmazon: 'Visit Amazon Store',
    buyRakuten: 'Visit Rakuten Store',
    sizeGuide: 'Moko Fit Finder',
    specs: {
      warmth: 'Warmth',
      breathability: 'Breathability',
      stretch: 'Stretch',
      softness: 'Softness'
    },
    journalSub: 'Stories from the Atelier',
    readStory: 'Read Story',
    shopMemory: 'Shop The Memory'
  },
  JP: {
    heroSub: '小さな家族のための、偉大なる日常',
    heroTitle: 'MOKO BASIC',
    heroSlogan: '2.5kgのための、オートクチュール。',
    shopTops: '定番・ベーシック',
    shopCoats: 'テディ専用・仕立て',
    discover: 'コレクションを見る',
    newIn: '最新のクリエーション',
    viewAll: 'すべて見る',

    titleMale: '男の子コレクション',
    subMale: 'クール & 機能的',
    titleFemale: '女の子コレクション',
    subFemale: 'エレガント & ソフト',
    titleSupplies: 'ペット用品',
    subSupplies: '厳選されたアクセサリー',
    
    philOriginTitle: '起源',
    philOriginHead: '迷いの中に、正解を。',
    philOriginText: 'かつて、私は愛犬のためにネットの海を彷徨っていました。溢れかえる選択肢。しかし、届くのは価格に見合わない品質や、すぐに綻びる縫製ばかり。「なぜ、愛犬のための『当たり前』の良い服がないのだろう？」その問いが、すべての始まりでした。私たちは決めました。もう、あなたを迷わせない。複雑な選択肢を削ぎ落とし、品質と価格のバランスを極限まで突き詰める。混乱した市場に、たった一つの「正解」を提示すること。それが、Moko Basicの使命です。',

    philWardrobeTitle: 'クローゼット',
    philWardrobeHead: 'ペットではなく、「家族」のクローゼット。',
    philWardrobeText: '犬は、観賞用ではありません。私たちと同じように眠り、歩き、季節を感じる「家族」です。だからこそ、彼らにも専用のクローゼットが必要です。春の陽だまりで寛ぐための、柔らかなラウンジウェア。夏の夕立から身を守る、機能的なレインコート。冬の寒夜に安らぎを与える、極上のパジャマ。Moko Basicは、365日のあらゆるシーンを想定して設計されています。ユニクロのように親しみやすく、かつ、妥協のない品質管理を。あなたの家族の一員として、彼らが誇らしく着られる一着を届けます。',

    philValueTitle: '約束',
    philValueHead: '最高の日常を、適正な価格で。',
    philValueText: '良いものが高いのは当たり前？私たちはそうは思いません。愛犬との生活は、毎日続くものだから。私たちは生産工程をゼロから見直し、余分なコストをカットすることで、「驚くほどの高品質」を「続けられる価格」で実現しました。浮いた予算で、今日は少し良いおやつを買ってあげてください。それもまた、私たちが願う「豊かな愛犬生活」の一部なのです。',

    philRoyalTitle: '第一章：皇家の血脈',
    philRoyalHead: '小さな王族への、オマージュ。',
    philRoyalText: 'かつて、ヴェルサイユの宮殿で愛された彼らには、生まれながらにして「気品」が宿っています。その誇り高き2.5kgの身体を包むのは、量産された布切れであってはなりません。私たちは考えます。「もしも、現代の王室が愛犬のために普段着を仕立てるとしたら？」それは、飾り立てることではなく、その高貴なシルエットを最も美しく見せる「正統」であること。Moko Basicは、あなたの小さな家族を、本来あるべき「王族」として遇します。',
    
    philArtisanTitle: '第二章：匠人の矜持',
    philArtisanHead: '0.1ミリに宿る、日本の美学。',
    philArtisanText: '「神は細部に宿る」。この言葉は、小さな服ほど重みを増します。たった数ミリの縫い目が、彼らの薄い皮膚を傷つけるかもしれない。たった数グラムの重さが、軽やかなステップを鈍らせるかもしれない。だからこそ、私たちは日本の「職人精神」で挑みます。身体の曲線を読み解く、立体の妙。触れた瞬間、指先が吸い付くような素材の選定。裏側の始末にこそ、最大の時間を費やす愚直さ。シンプルに見える一着には、私たちの「過保護」なまでの愛情と技術が縫い込まれています。',
    
    // Craft
    craftTitle: '見えない贅沢',
    craftSubtitle: '素材と仕立ての科学',

    craftMatTitle: '素材学',
    craftMatHead: '"ベビーグレード"を超える、純粋さ。',
    craftMatText: 'トイプードルの皮膚は、人間の赤ちゃんの肌よりも薄く、デリケートです。だからこそ、Moko Basicの基準は「アパレル」ではなく「スキンケア」でした。',
    craftMatPoint1Title: '厳選された超長綿',
    craftMatPoint1Desc: '世界中の綿花からわずか5%しか採れない希少綿。シルクのような光沢とカシミヤの肌触り。',
    craftMatPoint2Title: '有害物質ゼロ',
    craftMatPoint2Desc: 'OEKO-TEX級の安全性。万が一、愛犬が服を舐めてしまっても安心です。',

    craftTailorTitle: '剪裁学',
    craftTailorHead: '2.5kgのための「立体建築」。',
    craftTailorText: '犬の体は、平らではありません。Moko Basicは、静止画ではなく「動画」からパターン（型紙）を起こしました。',
    
    hotspotArchTitle: '3D アーチ・カット',
    hotspotArchDesc: '深い胸郭と細い腰のラインに沿う立体裁断。',
    hotspotArmTitle: 'トイプー専用アームホール',
    hotspotArmDesc: '脇の擦れを防ぐため、可動域をミリ単位で計算。',
    hotspotTagTitle: 'タグレス仕様',
    hotspotTagDesc: 'プリント印字でチクチクを解消。',

    craftSewingTitle: '縫製学',
    craftSewingHead: 'ストレスを、縫い込まない。',
    craftSewingText: '良い服とは、着ていることを忘れる服のこと。そのために、私たちは「違和感」を徹底的に排除しました。',
    craftSewingPoint1Title: 'フラットシーマ縫製',
    craftSewingPoint1Desc: '高級肌着の技術。生地の継ぎ目を平らにし、肌への刺激を極限まで減らします。',
    craftSewingPoint2Title: 'ノイズレス',
    craftSewingPoint2Desc: '不快な「カサカサ音」を排除した素材選定。',

    fittingTitle: '試着室',
    fittingSub: 'あなたの愛犬の色を見つけよう',
    fittingCoat: '毛色を選ぶ',
    fittingFabric: '服の色を選ぶ',
    fittingReset: 'リセット',

    footerNewsletter: 'ニュースレター',
    footerSubscribe: 'Club Mokoに参加',
    footerHelp: 'クライアントサービス',
    footerServices: '工藝傳承',
    footerAbout: '会社概要',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'Bonjour. Mokoコンシェルジュです。ホワイトテディのためのコーディネートをお手伝いします。',
    newBadge: '新作',
    addToCart: 'カートに入れる',
    buyAmazon: 'Amazonで購入',
    buyRakuten: '楽天で購入',
    sizeGuide: 'Moko サイズ診断',
    specs: {
      warmth: '暖かさ',
      breathability: '通気性',
      stretch: '伸縮性',
      softness: '柔らかさ'
    },
    journalSub: 'アトリエからの物語',
    readStory: '続きを読む',
    shopMemory: 'この思い出を購入する'
  },
  ZH_TW: {
    heroSub: '專為小型犬設計的日常服 (2.5kg)',
    heroTitle: 'MOKO BASIC',
    heroSlogan: '為 2.5kg 體型打造的高級訂製。',
    shopTops: '經典系列',
    shopCoats: '泰迪專用・外套',
    discover: '探索系列',
    newIn: '最新商品',
    viewAll: '查看全部',

    titleMale: '公犬系列',
    subMale: '帥氣 & 機能',
    titleFemale: '母犬系列',
    subFemale: '優雅 & 柔軟',
    titleSupplies: '寵物用品',
    subSupplies: '精選配飾',
    
    philOriginTitle: '起源',
    philOriginHead: '在喧囂中，尋找正解。',
    philOriginText: '曾經，我為了愛犬在網路海洋中徬徨。選項過多，但送來的卻是價格不符的品質，或是一洗就壞的縫製。「為什麼沒有為他們設計的『理所當然』的好衣服呢？」這個疑問是一切的開始。我們決定不再讓您困惑。刪減複雜的選項，極致追求品質與價格的平衡。在混亂的市場中，提供唯一的「正解」。這就是 Moko Basic 的使命。',

    philWardrobeTitle: '衣櫥',
    philWardrobeHead: '不是寵物，是「家人」的衣櫥。',
    philWardrobeText: '狗狗不是觀賞用的。他們和我們一樣睡覺、散步、感受四季，是「家人」。正因如此，他們也需要專屬的衣櫥。陽光普照的春日需要柔軟的居家服。夏季陣雨需要機能性的雨衣。寒冷的冬夜需要極致舒適的睡衣。Moko Basic 為 365 天的所有場景而設計。像 Uniqlo 一樣親民，但擁有毫不妥協的品質管理。作為您家庭的一員，我們提供讓他們能自豪穿著的服裝。',

    philValueTitle: '承諾',
    philValueHead: '最好的日常，合理的價格。',
    philValueText: '好東西就該貴嗎？我們不這麼認為。因為與愛犬的生活是每天持續的。我們從零開始檢視生產過程，削減多餘成本，實現了「驚人的高品質」與「可持續的價格」。省下的預算，今天請買些好一點的零食給他吧。這也是我們所期望的「豐富愛犬生活」的一部分。',

    philRoyalTitle: '第一章：皇室血脈',
    philRoyalHead: '向小小的皇室致敬。',
    philRoyalText: '曾經在凡爾賽宮備受寵愛的他們，天生就宿有「氣質」。包裹那驕傲的 2.5kg 身體的，不該是量產的布料。我們思考：「如果現代皇室為愛犬縫製日常服會是怎樣？」那不是過度的裝飾，而是最能襯托其高貴輪廓的「正統」。Moko Basic 將您的小小家人，視為應有的「皇室」來對待。',
    
    philArtisanTitle: '第二章：職人矜持',
    philArtisanHead: '宿於 0.1 毫米的日本美學。',
    philArtisanText: '「神在細節中」。這句話對小衣服來說更為重要。僅數毫米的縫線偏差，都可能傷到他們薄薄的皮膚。僅數公克的重量，都可能遲鈍他們輕盈的步伐。正因如此，我們以日本的「職人精神」挑戰。解讀身體曲線的立體奧妙。觸摸瞬間便能感受的素材選定。在看不見的收邊處花費最多時間的愚直。看似簡單的一件衣服，縫入了我們近乎「過度保護」的愛與技術。',
    
    // Craft
    craftTitle: '看不見的奢華',
    craftSubtitle: '素材與剪裁的科學',

    craftMatTitle: '素材學',
    craftMatHead: '超越嬰兒標準的純淨。',
    craftMatText: '玩具貴賓犬的皮膚厚度僅為人類嬰兒的三分之一，非常嬌嫩。因此，Moko Basic 的標準不是「服飾」，而是「護膚」。',
    craftMatPoint1Title: '嚴選超長棉',
    craftMatPoint1Desc: '僅佔全球棉花產量 5% 的稀有棉。擁有絲綢般的光澤與喀什米爾羊毛般的觸感。',
    craftMatPoint2Title: '零有害物質',
    craftMatPoint2Desc: 'OEKO-TEX 級安全性。萬一愛犬舔舐衣物也安心無虞。',

    craftTailorTitle: '剪裁學',
    craftTailorHead: '為 2.5kg 打造的「立體建築」。',
    craftTailorText: '狗狗的身體不是平面的。Moko Basic 不是從靜止圖，而是從「動態」中建立版型。',
    
    hotspotArchTitle: '3D 拱形剪裁',
    hotspotArchDesc: '順應深胸與細腰線條的立體剪裁。',
    hotspotArmTitle: '貴賓專用袖孔',
    hotspotArmDesc: '為防止腋下摩擦，以毫米為單位計算活動範圍。',
    hotspotTagTitle: '無標籤設計',
    hotspotTagDesc: '採用印花標示，消除刺癢感。',

    craftSewingTitle: '縫製學',
    craftSewingHead: '不縫入壓力。',
    craftSewingText: '好的衣服，是讓人忘記穿著的衣服。為此，我們徹底排除了「違和感」。',
    craftSewingPoint1Title: '平縫技術',
    craftSewingPoint1Desc: '高級內衣技術。將布料接縫處壓平，極限減少對皮膚的刺激。',
    craftSewingPoint2Title: '無噪音',
    craftSewingPoint2Desc: '排除會發出不悅「沙沙聲」的素材選定。',

    fittingTitle: '試衣間',
    fittingSub: '找到屬於您愛犬的顏色',
    fittingCoat: '選擇毛色',
    fittingFabric: '選擇衣服顏色',
    fittingReset: '重置',

    footerNewsletter: '電子報',
    footerSubscribe: '加入 Club Moko',
    footerHelp: '客戶服務',
    footerServices: '工藝傳承',
    footerAbout: '關於工坊',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'Bonjour. 我是您的 Moko 專屬顧問。今天想為您的白色泰迪挑選什麼樣的精品呢？',
    newBadge: '新作',
    addToCart: '加入購物袋',
    buyAmazon: '前往 Amazon',
    buyRakuten: '前往樂天',
    sizeGuide: 'Moko 尺寸診斷',
    specs: {
      warmth: '保暖性',
      breathability: '透氣性',
      stretch: '彈性',
      softness: '柔軟度'
    },
    journalSub: '來自工坊的故事',
    readStory: '閱讀故事',
    shopMemory: '購買這份回憶'
  }
};

const DEFAULT_GALLERY_TEXT = [
  { EN: "A silhouette perfected through 30 prototypes. We obsessed over the armhole curve to prevent chafing during long walks.", JP: "30回の試作を重ねて完成したシルエット。長時間の散歩でも脇が擦れないよう、アームホールのカーブにこだわりました。", ZH_TW: "歷經30次樣品改良的完美剪裁。我們專注於袖孔的弧度，防止長時間散步時的摩擦。" },
  { EN: "Fabric that breathes with them. Our organic cotton allows for maximum airflow, keeping the skin healthy.", JP: "呼吸する素材。オーガニックコットンが空気の循環を促し、皮膚を健やかに保ちます。", ZH_TW: "會呼吸的面料。我們的有機棉允許最大程度的空氣流通，保持皮膚健康。" },
  { EN: "Details that matter. Flat-seam stitching ensures that nothing irritates the delicate skin of a toy poodle.", JP: "細部へのこだわり。フラットシーマ縫製により、トイプードルの繊細な肌を刺激するものを排除しました。", ZH_TW: "細節至關重要。平縫技術確保沒有任何東西會刺激玩具貴賓犬嬌嫩的皮膚。" },
  { EN: "Designed for movement. The 3D cut accommodates the deep chest while staying snug on the waist.", JP: "動きやすさの追求。深い胸にはゆとりを持たせつつ、腰回りはフィットする3Dカットを採用。", ZH_TW: "為運動而生。3D剪裁在貼合腰部的同時，也為深胸提供了足夠的空間。" }
];

export const RAW_PRODUCTS = [
  // --- CLOTHING ---
  {
    id: 'e1',
    name: { EN: 'Pure Cotton Tee', JP: 'ピュアコットンTシャツ', ZH_TW: '純淨棉質 T 恤' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 1900,
    image: ASSETS.PRODUCTS.TEE, 
    tags: ['Cotton', 'Basic'],
    description: { EN: '100% Organic Cotton. Breathable daily wear.', JP: 'オーガニックコットン100%。通気性のある日常着。', ZH_TW: '100% 有機棉。透氣舒適的日常穿著。' },
    layout: 'normal',
    specs: { warmth: 30, breathability: 95, stretch: 80, softness: 90 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'CLOTHING'
  },
  {
    id: 'e2',
    name: { EN: 'Everyday Hoodie', JP: 'エブリデイ・フーディー', ZH_TW: '日常連帽衫' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 2500,
    image: ASSETS.PRODUCTS.HOODIE, 
    tags: ['Comfort', 'Basic'],
    description: { EN: 'Soft loopback jersey. Relaxed fit.', JP: '柔らかいループバックジャージ。リラックスフィット。', ZH_TW: '柔軟毛圈布。舒適寬鬆剪裁。' },
    layout: 'normal',
    specs: { warmth: 60, breathability: 70, stretch: 85, softness: 85 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'MALE',
    productType: 'CLOTHING'
  },
  {
    id: 'e3',
    name: { EN: 'Striped Breton', JP: 'ブレトン・ストライプ', ZH_TW: '法式條紋衫' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 2200,
    image: ASSETS.PRODUCTS.STRIPE, 
    tags: ['Classic', 'Pattern'],
    description: { EN: 'Timeless French stripes.', JP: '時代を超越したフレンチストライプ。', ZH_TW: '永不過時的法式條紋。' },
    layout: 'normal',
    specs: { warmth: 40, breathability: 90, stretch: 70, softness: 80 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'FEMALE',
    productType: 'CLOTHING'
  },
  {
    id: 'f1',
    name: { EN: 'Thermo-Light Vest', JP: 'サーモライト・ベスト', ZH_TW: '輕量蓄熱背心' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'FUNCTION',
    price: 3900,
    image: ASSETS.PRODUCTS.VEST, 
    tags: ['Heat', 'Tech'],
    description: { EN: 'Retains body heat. Ultra-lightweight.', JP: '体温を逃がさない。超軽量。', ZH_TW: '鎖住體溫。極致輕量。' },
    badge: 'BESTSELLER',
    layout: 'normal',
    specs: { warmth: 95, breathability: 60, stretch: 40, softness: 60 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'MALE',
    productType: 'CLOTHING'
  },
  {
    id: 'c1',
    name: { EN: 'The Trench', JP: 'ザ・トレンチ', ZH_TW: '經典風衣' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'COUTURE',
    price: 12000,
    image: ASSETS.PRODUCTS.TRENCH, 
    tags: ['Classic', 'Tailored'],
    description: { EN: 'Water-resistant gabardine. Horn buttons.', JP: '撥水ギャバジン。水牛ボタン。', ZH_TW: '防潑水華達呢。天然牛角扣。' },
    badge: 'LUXURY',
    layout: 'large',
    specs: { warmth: 60, breathability: 50, stretch: 10, softness: 40 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'MALE',
    productType: 'CLOTHING'
  },

  // --- LEASHES ---
  {
    id: 'l1',
    name: { EN: 'Leather Leash', JP: 'レザーリード', ZH_TW: '真皮牽引繩' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'ESSENTIALS',
    price: 4500,
    image: ASSETS.PRODUCTS.LEASH_L,
    tags: ['Leather', 'Walk'],
    description: { EN: 'Vegetable tanned leather. Ages beautifully.', JP: '植物タンニンなめし革。経年変化を楽しめます。', ZH_TW: '植物鞣製皮革。隨時間展現獨特光澤。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 0, stretch: 10, softness: 60 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'LEASH'
  },
  {
    id: 'l2',
    name: { EN: 'Rope Leash - Navy', JP: 'ロープリード (紺)', ZH_TW: '登山繩牽引繩 (海軍藍)' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'FUNCTION',
    price: 3200,
    image: ASSETS.PRODUCTS.LEASH_R,
    tags: ['Durable', 'Walk'],
    description: { EN: 'Durable climbing rope material.', JP: '耐久性のあるクライミングロープ素材。', ZH_TW: '耐用登山繩材質。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 0, stretch: 20, softness: 50 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'MALE',
    productType: 'LEASH'
  },

  // --- COLLARS ---
  {
    id: 'c4',
    name: { EN: 'Pearl Collar', JP: 'パール・カラー', ZH_TW: '珍珠項圈' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'COUTURE',
    price: 8800,
    image: ASSETS.PRODUCTS.COLLAR_P,
    tags: ['Pearl', 'Jewelry'],
    description: { EN: 'Freshwater pearls. Elastic fit.', JP: '淡水パール。伸縮性のあるフィット。', ZH_TW: '天然淡水珍珠。彈性舒適。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 100, stretch: 100, softness: 80 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'FEMALE',
    productType: 'COLLAR'
  },
  {
    id: 'col1',
    name: { EN: 'Minimalist Leather Collar', JP: 'ミニマリスト・カラー', ZH_TW: '極簡皮革項圈' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'ESSENTIALS',
    price: 3500,
    image: ASSETS.PRODUCTS.COLLAR_L,
    tags: ['Leather', 'Basic'],
    description: { EN: 'Soft leather lining for comfort.', JP: '快適なソフトレザーの裏地。', ZH_TW: '柔軟皮革內襯，佩戴舒適。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 80, stretch: 10, softness: 70 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'COLLAR'
  },

  // --- ACCESSORIES ---
  {
    id: 'c3',
    name: { EN: 'Silk Bow Tie', JP: 'シルク・ボウタイ', ZH_TW: '絲綢領結' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'COUTURE',
    price: 5500,
    image: ASSETS.PRODUCTS.BOWTIE,
    tags: ['Silk', 'Accessory'],
    description: { EN: 'Vintage silk from Kyoto.', JP: '京都産のヴィンテージシルク。', ZH_TW: '來自京都的復古絲綢。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 100, stretch: 0, softness: 100 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'MALE',
    productType: 'ACCESSORY'
  },
  {
    id: 'acc1',
    name: { EN: 'Poodle Hair Clip', JP: 'プードル・ヘアクリップ', ZH_TW: '貴賓髮夾' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'COUTURE',
    price: 1200,
    image: ASSETS.PRODUCTS.HAIRCLIP,
    tags: ['Cute', 'Accessory'],
    description: { EN: 'Gentle clip for fluffy ears.', JP: 'ふわふわの耳に優しいクリップ。', ZH_TW: '不傷毛髮的溫柔髮夾。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 100, stretch: 0, softness: 100 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'FEMALE',
    productType: 'ACCESSORY'
  },
  {
    id: 'f2',
    name: { EN: 'Tweed Harness Dress', JP: 'ツイード・ハーネスドレス', ZH_TW: '粗花呢胸背裙' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'COUTURE',
    price: 7800,
    image: ASSETS.PRODUCTS.DRESS,
    tags: ['Dress', 'Harness'],
    description: { EN: 'Integrated harness in a classic tweed dress.', JP: 'ハーネス機能付きのクラシックなツイードドレス。', ZH_TW: '結合胸背帶功能的經典粗花呢連衣裙。' },
    layout: 'normal',
    specs: { warmth: 60, breathability: 50, stretch: 10, softness: 50 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'FEMALE',
    productType: 'CLOTHING'
  },

  // --- BOWLS ---
  {
    id: 'b1',
    name: { EN: 'Ceramic Tilt Bowl', JP: 'セラミック・チルトボウル', ZH_TW: '陶瓷傾斜碗' },
    category: { EN: 'Maison', JP: 'ホーム', ZH_TW: '居家' },
    subcategory: 'FUNCTION',
    price: 2800,
    image: ASSETS.PRODUCTS.BOWL,
    tags: ['Home', 'Ceramic'],
    description: { EN: 'Ergonomic tilt for easier eating.', JP: '食べやすい人間工学に基づいた傾斜。', ZH_TW: '符合工學的傾斜設計，進食更輕鬆。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 0, stretch: 0, softness: 0 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'BOWL'
  },
  
  // --- WATER DISPENSERS ---
  {
    id: 'd1',
    name: { EN: 'Travel Water Bottle', JP: 'トラベル・ウォーターボトル', ZH_TW: '便攜飲水杯' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'FUNCTION',
    price: 1800,
    image: ASSETS.PRODUCTS.BOTTLE,
    tags: ['Travel', 'Hydration'],
    description: { EN: 'Leak-proof and portable.', JP: '漏れ防止で持ち運びに便利。', ZH_TW: '防漏設計，方便攜帶。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 0, stretch: 0, softness: 0 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'DISPENSER'
  },

  // --- NEW ITEMS TO REACH 16 ---
  {
    id: 'r1',
    name: { EN: 'Clear Rain Mac', JP: 'クリアレインコート', ZH_TW: '透明雨衣' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'FUNCTION',
    price: 4200,
    image: ASSETS.PRODUCTS.RAIN_CLEAR,
    tags: ['Rain', 'Waterproof'],
    description: { EN: 'Transparent PVC. Keep dry without hiding the outfit.', JP: '透明PVC。コーディネートを隠さずに雨から守ります。', ZH_TW: '透明PVC材質。擋雨同時不遮擋穿搭。' },
    layout: 'normal',
    specs: { warmth: 20, breathability: 10, stretch: 0, softness: 30 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'CLOTHING'
  },
  {
    id: 'h1',
    name: { EN: 'Cloud Bed', JP: 'クラウド・ベッド', ZH_TW: '雲朵睡床' },
    category: { EN: 'Maison', JP: 'ホーム', ZH_TW: '居家' },
    subcategory: 'ESSENTIALS',
    price: 15000,
    image: ASSETS.PRODUCTS.BED,
    tags: ['Home', 'Sleep'],
    description: { EN: 'Memory foam base. Marshmallow touch cover.', JP: 'メモリーフォームのベース。マシュマロのような肌触りのカバー。', ZH_TW: '記憶棉基底。如棉花糖般柔軟的觸感。' },
    layout: 'normal',
    specs: { warmth: 100, breathability: 50, stretch: 50, softness: 100 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'BOWL' 
  },
  {
    id: 't1',
    name: { EN: 'Canvas Carrier', JP: 'キャンバス・キャリー', ZH_TW: '帆布外出包' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'FUNCTION',
    price: 18000,
    image: ASSETS.PRODUCTS.CARRIER,
    tags: ['Travel', 'Bag'],
    description: { EN: 'Heavyweight canvas. Safety hook included.', JP: '厚手のキャンバス地。飛び出し防止フック付き。', ZH_TW: '重磅帆布。附有防暴衝掛鉤。' },
    layout: 'normal',
    specs: { warmth: 40, breathability: 60, stretch: 0, softness: 40 },
    amazonUrl: 'https://amazon.co.jp',
    rakutenUrl: 'https://rakuten.co.jp',
    galleryImages: ASSETS.GALLERY_DETAILS,
    galleryText: DEFAULT_GALLERY_TEXT,
    gender: 'UNISEX',
    productType: 'ACCESSORY'
  }
];

export const getProducts = (lang: Language): Product[] => {
  return RAW_PRODUCTS.map(p => ({
    ...p,
    name: p.name[lang],
    category: p.category[lang],
    description: p.description[lang],
    subcategory: p.subcategory as any,
    badge: p.badge as any,
    layout: p.layout as any,
    gender: p.gender as any,
    productType: p.productType as any,
    galleryText: p.galleryText,
    galleryImages: p.galleryImages
  }));
};

export const OCCASIONS = [
  {
    id: 'home',
    image: ASSETS.OCCASIONS.HOME,
    title: { EN: 'Relaxing Pajamas', JP: 'パジャマ', ZH_TW: '居家服' },
    sub: { EN: 'Home', JP: 'おうち時間', ZH_TW: '居家' }
  },
  {
    id: 'walk',
    image: ASSETS.OCCASIONS.WALK,
    title: { EN: 'Daily Essentials', JP: 'お散歩ウェア', ZH_TW: '散步必備' },
    sub: { EN: 'Walk', JP: 'お散歩', ZH_TW: '散步' }
  },
  {
    id: 'rain',
    image: ASSETS.OCCASIONS.RAIN,
    title: { EN: 'Rain Protection', JP: 'レインコート', ZH_TW: '雨衣' },
    sub: { EN: 'Rain', JP: '雨の日', ZH_TW: '雨天' }
  },
  {
    id: 'sleep',
    image: ASSETS.OCCASIONS.SLEEP,
    title: { EN: 'Deep Sleep', JP: '熟睡ニット', ZH_TW: '熟睡針織' },
    sub: { EN: 'Sleep', JP: '睡眠', ZH_TW: '睡眠' }
  }
];
