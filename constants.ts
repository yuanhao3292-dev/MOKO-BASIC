import { Product, Language } from './types';

export const NAV_LINKS = [
  { label: { EN: 'Collections', JP: 'コレクション', ZH_TW: '系列作品' }, value: 'SHOP' },
  { label: { EN: 'Philosophy', JP: 'フィロソフィー', ZH_TW: '品牌理念' }, value: 'PHILOSOPHY' },
  { label: { EN: 'Craftsmanship', JP: 'クラフツマンシップ', ZH_TW: '材質工藝' }, value: 'CRAFT' },
  { label: { EN: 'Journal', JP: 'ジャーナル', ZH_TW: '視覺日記' }, value: 'JOURNAL' },
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
    
    // Collection Storytelling
    colEssentials: 'The Essentials',
    colEssentialsSub: 'The second skin for every day.',
    colEssentialsStoryTitle: 'The Perfect Tee',
    colEssentialsStory: '30 prototype revisions to find the perfect armhole arc. No chafing underarms, just pure organic cotton comfort.',
    
    colFunction: 'The Function',
    colFunctionSub: 'Technology meets comfort.',
    colFunctionStoryTitle: 'Warm-Tech Knit',
    colFunctionStory: 'Heat circulates between fibers. Ultra-light protection that respects the delicate spine of the Toy Poodle.',

    colCouture: 'Le Petit Teddy',
    colCoutureSub: 'Tailored for the 2.5kg silhouette.',
    colCoutureStoryTitle: 'The 2.5kg Standard',
    colCoutureStory: 'Designed exclusively for the deep chest and slender waist of the Poodle. Not a shrunken large dog pattern.',

    // Philosophy
    storyCh1Title: 'The Origin',
    storyCh1Head: 'Frustration turned into Creation.',
    storyCh1Text: 'It started because we couldn\'t find clothes that fit. Everything was just a smaller version of a Golden Retriever\'s outfit. Tight necks, loose waists. We decided to build the "Correct Answer" for the 2.5kg body from scratch.',
    
    storyCh2Title: 'The Creed',
    storyCh2Head: 'Simple is the Hardest.',
    storyCh2Text: 'To make a plain white tee look luxurious requires perfect fabric and perfect cutting. There is no room to hide. We are obsessed with the millimeter.',
    
    storyCh3Title: 'The Dignity',
    storyCh3Head: 'Freedom, not Vanity.',
    storyCh3Text: 'Our clothes are not for human entertainment. They are "homes" to protect small bodies from the cold and anxiety. We design for their freedom.',
    
    trustBaby: 'Baby Standard',
    trustBabyDesc: '0% Formaldehyde. Safety standards equivalent to human infant underwear.',
    trust3D: '3D Pattern',
    trust3DDesc: 'Designed for the unique ribcage of the Poodle.',

    // Craft
    craftTitle: 'The Moko Atelier',
    craftText: 'We select fabrics not for cost, but for touch. Organic cotton that breathes, technical fibers that regulate heat.',
    craftSub1: 'Material Journey',
    craftDesc1: 'Sourced from certified organic farms. It is not just fabric; it is a commitment to purity.',
    craftSub2: 'The Tagless Touch',
    craftDesc2: 'Printed labels. No scratching. Because their skin is as sensitive as a baby\'s.',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: 'A Life with White Teddy',
    journal1Title: 'Tokyo Stroll',
    journal1Date: 'April 2026',
    journal1Desc: 'A morning walk in Daikanyama with the new Trench Coat. The beige gabardine reflects the soft morning sun.',
    journal2Title: 'Care Guide',
    journal2Date: 'Daily Maintenance',
    journal2Desc: 'How to wash your Moko Basic items to keep them soft forever. Treat them like your own cashmere.',

    // Footer
    footerNewsletter: 'Newsletter',
    footerSubscribe: 'Join Club Moko',
    footerHelp: 'Client Services',
    footerServices: 'Savoir-Faire',
    footerAbout: 'The Maison',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'Bonjour. I am your Moko Concierge. How may I assist in tailoring your White Teddy\'s wardrobe?',
    newBadge: 'Nouveau',
    addToCart: 'Add to Bag',
    buyAmazon: 'Purchase on Amazon',
    sizeGuide: 'Moko Fit Finder',
    specs: {
      warmth: 'Warmth',
      breathability: 'Breathability',
      stretch: 'Stretch',
      softness: 'Softness'
    }
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
    
    // Collection Storytelling
    colEssentials: 'The Essentials',
    colEssentialsSub: '毎日の第二の皮膚。',
    colEssentialsStoryTitle: 'The Perfect Tee',
    colEssentialsStory: '30回の試作を経て辿り着いた、脇が擦れない完璧なアームホール。純粋なオーガニックコットンの優しさ。',
    
    colFunction: 'The Function',
    colFunctionSub: '機能美と快適さの融合。',
    colFunctionStoryTitle: 'Warm-Tech Knit',
    colFunctionStory: '繊維の間を熱が循環する。トイプードルの繊細な背骨を守る、超軽量の防寒着。',

    colCouture: 'Le Petit Teddy',
    colCoutureSub: '2.5kgのシルエットのための仕立て。',
    colCoutureStoryTitle: 'The 2.5kg Standard',
    colCoutureStory: 'プードル特有の深い胸と細いウエストに合わせて専用設計。大型犬の服の縮小版ではありません。',

    // Philosophy
    storyCh1Title: '起源',
    storyCh1Head: '不満から生まれた創造。',
    storyCh1Text: '合う服がない、というフラストレーションから全ては始まりました。市場にあるのは大型犬の服を小さくしただけのもの。首はきつく、腰は緩い。私たちは2.5kgの体のための「正解」をゼロから作ることにしました。',
    
    storyCh2Title: '信条',
    storyCh2Head: 'シンプルこそ、最難関。',
    storyCh2Text: '無地の白Tシャツをラグジュアリーに見せるには、完璧な生地とカッティングが必要です。誤魔化しは効きません。私たちはミリ単位に執着します。',
    
    storyCh3Title: '尊厳',
    storyCh3Head: '虚栄ではなく、自由を。',
    storyCh3Text: '私たちの服は人間の娯楽のためではありません。寒さや不安から小さな体を守る「家」です。彼らの自由のためにデザインしています。',

    trustBaby: '乳幼児基準',
    trustBabyDesc: 'ホルムアルデヒド検出ゼロ。人間の乳幼児用肌着と同等の安全基準を採用。',
    trust3D: '3D 立体裁断',
    trust3DDesc: 'トイプードル特有の胸郭構造に合わせた専用設計。',

    // Craft
    craftTitle: 'モコのアトリエ',
    craftText: 'コストではなく手触りで生地を選びます。呼吸するオーガニックコットン、熱を調整する機能素材。',
    craftSub1: '素材紀行',
    craftDesc1: '認定オーガニック農場から調達。それは単なる布ではなく、純粋さへの誓いです。',
    craftSub2: '無感タグ',
    craftDesc2: '肌に触れるタグはプリント仕様に。赤ちゃんの肌と同じくらい敏感な彼らのために。',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: '白テディとの生活',
    journal1Title: '東京散歩',
    journal1Date: '2026年4月',
    journal1Desc: '代官山での朝の散歩。新作のトレンチコートのベージュが、柔らかな朝日に映えます。',
    journal2Title: 'ケアガイド',
    journal2Date: '日常のお手入れ',
    journal2Desc: 'Moko Basicのアイテムを長く柔らかく保つための洗濯方法。カシミヤのように扱ってください。',

    // Footer
    footerNewsletter: 'ニュースレター',
    footerSubscribe: 'Club Mokoに参加',
    footerHelp: 'クライアントサービス',
    footerServices: 'サヴォアフェール',
    footerAbout: 'メゾンについて',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'ボンジュール。モコ・コンシェルジュです。白いテディちゃんのためのスタイリングをお手伝いしましょうか？',
    newBadge: '新作',
    addToCart: 'カートに入れる',
    buyAmazon: 'Amazonで購入する',
    sizeGuide: 'Mokoサイズ診断',
    specs: {
      warmth: '保温性',
      breathability: '通気性',
      stretch: '伸縮性',
      softness: '柔軟性'
    }
  },
  ZH_TW: {
    heroSub: '致敬 2.5kg 的宏大日常',
    heroTitle: 'MOKO BASIC',
    heroSlogan: '專為 2.5kg 打造的高級定制。',
    shopTops: '基礎系列',
    shopCoats: '高定系列',
    discover: '探索系列',
    newIn: '最新作品',
    viewAll: '查看全部',
    
    // Collection Storytelling
    colEssentials: 'The Essentials',
    colEssentialsSub: '每日的第二層肌膚。',
    colEssentialsStoryTitle: 'The Perfect Tee',
    colEssentialsStory: '歷經 30 次樣版修正，終於找到不卡腋下的完美弧度。純淨有機棉的極致舒適。',
    
    colFunction: 'The Function',
    colFunctionSub: '科技與舒適的融合。',
    colFunctionStoryTitle: 'Warm-Tech Knit',
    colFunctionStory: '熱量在纖維間循環。保護泰迪犬纖細脊椎的超輕量防寒衣。',

    colCouture: 'Le Petit Teddy',
    colCoutureSub: '專為 2.5kg 優雅身形打造。',
    colCoutureStoryTitle: 'The 2.5kg Standard',
    colCoutureStory: '專為貴賓犬獨特的深胸與細腰設計。絕非大型犬衣物的單純縮小版。',

    // Philosophy
    storyCh1Title: '起源',
    storyCh1Head: '始於不滿的創造。',
    storyCh1Text: '一切始於買不到合適的衣服。市場上充斥著黃金獵犬衣服的縮小版。領口太緊，腰部太鬆。我們決定從零開始，打造專屬於 2.5kg 身體的「正確答案」。',
    
    storyCh2Title: '信條',
    storyCh2Head: '極簡，即最難。',
    storyCh2Text: '要將素色白 T 恤做得高級，需要完美的布料與剪裁。沒有掩飾的空間。我們對毫米級的細節有著偏執。',
    
    storyCh3Title: '尊嚴',
    storyCh3Head: '是自由，非虛榮。',
    storyCh3Text: '我們的衣服不是為了人類的娛樂。它是保護微小身軀免受寒冷與不安的「家」。我們是為了它們的自由而設計。',

    trustBaby: '嬰兒級標準',
    trustBabyDesc: '甲醛檢測為 0。我們使用與人類嬰兒內衣同等級別的安全標準。',
    trust3D: '3D 立裁',
    trust3DDesc: '歷經 50 次樣版修正，專為泰迪犬獨特的胸腔結構設計。',

    // Craft
    craftTitle: 'Moko 工坊',
    craftText: '我們挑選布料不計成本，只為觸感。會呼吸的有機棉，調節體溫的科技纖維。',
    craftSub1: '素材紀行',
    craftDesc1: '源自認證有機農場。這不僅是布料，更是對純淨的承諾。',
    craftSub2: '無感標籤',
    craftDesc2: '接觸皮膚的標籤改為印花工藝。因為它們的皮膚和嬰兒一樣敏感。',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: '白泰迪生活誌',
    journal1Title: '東京散策',
    journal1Date: '2026年4月',
    journal1Desc: '穿著新款風衣在代官山的晨間散步。米色華達呢完美映襯著柔和的朝陽。',
    journal2Title: '養護指南',
    journal2Date: '日常護理',
    journal2Desc: '如何洗滌 Moko Basic 單品以保持永久柔軟。請像對待您的羊絨衫一樣對待它們。',

    // Footer
    footerNewsletter: '電子報',
    footerSubscribe: '加入 Club Moko',
    footerHelp: '客戶服務',
    footerServices: '工藝傳承',
    footerAbout: '關於工坊',
    footerCopy: '© 2025 MOKO BASIC',
    aiWelcome: 'Bonjour. 我是您的 Moko 專屬顧問。今天想為您的白色泰迪挑選什麼樣的精品呢？',
    newBadge: '新作',
    addToCart: '加入購物袋',
    buyAmazon: 'Amazon 官方購買',
    sizeGuide: 'Moko 尺碼診斷',
    specs: {
      warmth: '保暖性',
      breathability: '透氣性',
      stretch: '彈力',
      softness: '柔軟度'
    }
  }
};

const RAW_PRODUCTS = [
  // --- ESSENTIALS (Basic / Uniqlo Vibe) ---
  {
    id: 'e1',
    name: { EN: 'Pure Cotton Tee', JP: 'ピュアコットンTシャツ', ZH_TW: '純淨棉質 T 恤' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Cotton', 'Basic'],
    description: { EN: '100% Organic Cotton. Breathable daily wear.', JP: 'オーガニックコットン100%。通気性のある日常着。', ZH_TW: '100% 有機棉。透氣舒適的日常穿著。' },
    layout: 'normal',
    specs: { warmth: 30, breathability: 95, stretch: 80, softness: 90 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'e2',
    name: { EN: 'Everyday Hoodie', JP: 'エブリデイ・フーディー', ZH_TW: '日常連帽衫' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Comfort', 'Basic'],
    description: { EN: 'Soft loopback jersey. Relaxed fit.', JP: '柔らかいループバックジャージ。リラックスフィット。', ZH_TW: '柔軟毛圈布。舒適寬鬆剪裁。' },
    layout: 'normal',
    specs: { warmth: 60, breathability: 70, stretch: 85, softness: 85 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'e3',
    name: { EN: 'Striped Breton', JP: 'ブレトン・ストライプ', ZH_TW: '法式條紋衫' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Classic', 'Pattern'],
    description: { EN: 'Timeless French stripes.', JP: '時代を超越したフレンチストライプ。', ZH_TW: '永不過時的法式條紋。' },
    layout: 'normal',
    specs: { warmth: 40, breathability: 90, stretch: 70, softness: 80 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'e4',
    name: { EN: 'Waffle Knit Tank', JP: 'ワッフルニット・タンク', ZH_TW: '華夫格背心' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'ESSENTIALS',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Texture', 'Summer'],
    description: { EN: 'Textured comfort for home.', JP: '家でのリラックスに最適な質感。', ZH_TW: '居家休閒的質感之選。' },
    layout: 'normal',
    specs: { warmth: 30, breathability: 100, stretch: 90, softness: 90 },
    amazonUrl: 'https://amazon.co.jp'
  },

  // --- FUNCTION (Tech / Practical) ---
  {
    id: 'f1',
    name: { EN: 'Thermo-Light Vest', JP: 'サーモライト・ベスト', ZH_TW: '輕量蓄熱背心' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'FUNCTION',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1517423568366-6975535403b3?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Heat', 'Tech'],
    description: { EN: 'Retains body heat. Ultra-lightweight.', JP: '体温を逃がさない。超軽量。', ZH_TW: '鎖住體溫。極致輕量。' },
    badge: 'BESTSELLER',
    layout: 'normal',
    specs: { warmth: 95, breathability: 60, stretch: 40, softness: 60 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'f2',
    name: { EN: 'Rain Defender', JP: 'レイン・ディフェンダー', ZH_TW: '全天候防雨罩' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'FUNCTION',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Waterproof', 'Tech'],
    description: { EN: 'Seam-sealed protection.', JP: 'シームテープ加工の保護。', ZH_TW: '接縫壓膠，全面防護。' },
    layout: 'normal',
    specs: { warmth: 70, breathability: 40, stretch: 20, softness: 40 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'f3',
    name: { EN: 'Night Walker', JP: 'ナイト・ウォーカー', ZH_TW: '夜行反光衣' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'FUNCTION',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Safety', 'Reflective'],
    description: { EN: 'High visibility for evening strolls.', JP: '夜の散歩のための高い視認性。', ZH_TW: '為夜間散步提供高能見度。' },
    layout: 'normal',
    specs: { warmth: 50, breathability: 70, stretch: 50, softness: 50 },
    amazonUrl: 'https://amazon.co.jp'
  },

  // --- COUTURE (High End / LV Vibe) ---
  {
    id: 'c1',
    name: { EN: 'The Trench', JP: 'ザ・トレンチ', ZH_TW: '經典風衣' },
    category: { EN: 'Manteaux', JP: 'コート', ZH_TW: '外套' },
    subcategory: 'COUTURE',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Classic', 'Tailored'],
    description: { EN: 'Water-resistant gabardine. Horn buttons.', JP: '撥水ギャバジン。水牛ボタン。', ZH_TW: '防潑水華達呢。天然牛角扣。' },
    badge: 'LUXURY',
    layout: 'large',
    specs: { warmth: 60, breathability: 50, stretch: 10, softness: 40 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'c2',
    name: { EN: 'Cashmere Cable Knit', JP: 'カシミヤ・ケーブルニット', ZH_TW: '純喀什米爾絞花衫' },
    category: { EN: 'Tricot', JP: 'ニット', ZH_TW: '針織' },
    subcategory: 'COUTURE',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1588022274752-37d00f86b77c?q=80&w=1000&auto=format&fit=crop', 
    tags: ['Cashmere', 'Handmade'],
    description: { EN: 'Hand-finished in Scotland.', JP: 'スコットランドで手仕上げ。', ZH_TW: '蘇格蘭手工收邊。' },
    badge: 'LUXURY',
    layout: 'wide',
    specs: { warmth: 90, breathability: 80, stretch: 70, softness: 100 },
    amazonUrl: 'https://amazon.co.jp'
  },
  {
    id: 'c3',
    name: { EN: 'Silk Bow Tie', JP: 'シルク・ボウタイ', ZH_TW: '絲綢領結' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'COUTURE',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Silk', 'Accessory'],
    description: { EN: 'Vintage silk from Kyoto.', JP: '京都産のヴィンテージシルク。', ZH_TW: '來自京都的復古絲綢。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 100, stretch: 0, softness: 100 },
    amazonUrl: 'https://amazon.co.jp'
  },
   {
    id: 'c4',
    name: { EN: 'Pearl Collar', JP: 'パール・カラー', ZH_TW: '珍珠項圈' },
    category: { EN: 'Accessoires', JP: 'アクセサリー', ZH_TW: '配飾' },
    subcategory: 'COUTURE',
    price: 8800,
    image: 'https://images.unsplash.com/photo-1605218427360-36390f85b34c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Pearl', 'Jewelry'],
    description: { EN: 'Freshwater pearls. Elastic fit.', JP: '淡水パール。伸縮性のあるフィット。', ZH_TW: '天然淡水珍珠。彈性舒適。' },
    layout: 'normal',
    specs: { warmth: 0, breathability: 100, stretch: 100, softness: 80 },
    amazonUrl: 'https://amazon.co.jp'
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
    layout: p.layout as any
  }));
};