import { Product, Language, JournalPost } from './types';

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

    // Philosophy - Origin Story
    philOriginTitle: 'The Origin',
    philOriginHead: 'Finding the "Correct Answer" in the Noise.',
    philOriginText: 'I once wandered the ocean of the internet for my dog. An overflow of options. Yet, what arrived was quality not worth the price, or sewing that unraveled immediately. "Why is there no \'obviously good\' clothing for them?" That question was the beginning. We decided to stop your confusion. We cut away complex options to pursue the ultimate balance of quality and price. To present the single "Correct Answer" in a chaotic market. That is Moko Basic\'s mission.',

    philWardrobeTitle: 'The Wardrobe',
    philWardrobeHead: 'Not for a Pet. For Family.',
    philWardrobeText: 'Dogs are not for display. They are family who sleep, walk, and feel the seasons just like us. That is why they need a dedicated closet. Soft loungewear for sunny spring days. Functional raincoats for summer showers. Exquisite pajamas for cold winter nights. Moko Basic is designed for every scene of 365 days. Accessible like Uniqlo, but with uncompromising quality. We deliver clothes they can wear with pride.',

    philValueTitle: 'The Promise',
    philValueHead: 'The Best Daily Life at a Fair Price.',
    philValueText: 'Is it natural for good things to be expensive? We don\'t think so. Because life with a dog continues every day. We reviewed the production process from scratch and cut excess costs to realize "surprising quality" at a "sustainable price". With the budget you saved, please buy them a slightly better treat today. That is also part of the "Rich Dog Life" we wish for.',

    // Philosophy - The Two Hearts Strategy (Legacy)
    philRoyalTitle: 'The Royal Spirit',
    philRoyalHead: 'Homage to the Little Royalty.',
    philRoyalText: 'Once loved in the Palace of Versailles, they embody innate nobility. Wrapping their proud 2.5kg bodies in mass-produced cloth is unthinkable. We asked: "What if a modern royal court tailored daily wear for their dog?" The answer is not decoration, but "Orthodoxy" that highlights their silhouette. Moko Basic treats your small family member as the royalty they are.',
    
    philArtisanTitle: 'The Artisan\'s Soul',
    philArtisanHead: 'Japanese Aesthetics in 0.1mm.',
    philArtisanText: '"God is in the details." This weighs heavier on smaller clothes. A millimeter of seam deviation might hurt their thin skin. Grams of extra weight might dull their step. We challenge this with Japanese Craftsmanship. The logic of 3D draping. Material selection that clings to the fingers. Our "overprotective" love and technique is sewn into every simple piece.',
    
    philPromiseTitle: 'The Two Hearts',
    philPromiseHead: 'Wearing Nobility in Daily Life.',
    philPromiseText: 'Luxury is not about price. It is the depth of care. Because it is worn daily, it needs royal dignity and national treasure comfort. Moko Basic — The new standard for 2.5kg.',
    
    trustBaby: 'Baby Standard',
    trustBabyDesc: '0% Formaldehyde. Safety standards equivalent to human infant underwear.',
    trust3D: '3D Pattern',
    trust3DDesc: 'Designed for the unique ribcage of the Poodle.',

    // Craft - Invisible Luxury
    craftTitle: 'The Invisible Luxury',
    craftSubtitle: 'Material Science & Tailoring',
    
    // Section 1: Material
    craftMatTitle: 'Material Science',
    craftMatHead: 'Purity Beyond Baby Standards.',
    craftMatText: 'A Toy Poodle\'s skin is only 1/3 the thickness of a human baby\'s. Therefore, Moko Basic is not "Apparel", it is "Skincare".',
    craftMatPoint1Title: 'Premium Extra-Long Cotton',
    craftMatPoint1Desc: 'Top 5% Global Yield. Silk-like luster, Cashmere-like touch.',
    craftMatPoint2Title: 'Zero Harmful Substances',
    craftMatPoint2Desc: 'OEKO-TEX Standard. Safe even if licked.',

    // Section 2: Tailoring
    craftTailorTitle: 'The Art of Tailoring',
    craftTailorHead: '3D Architecture for 2.5kg.',
    craftTailorText: 'A dog\'s body is not flat. We create patterns from "Motion", not still images.',
    
    // Hotspots
    hotspotArchTitle: '3D Arch Cut',
    hotspotArchDesc: 'Sculpted for the deep chest and slender waist.',
    hotspotArmTitle: 'Precision Armholes',
    hotspotArmDesc: 'Calculated to the millimeter to prevent chafing.',
    hotspotTagTitle: 'Tagless',
    hotspotTagDesc: 'Printed information. Zero irritation.',

    // Section 3: Sewing
    craftSewingTitle: 'Sewing Precision',
    craftSewingHead: 'Sewing Without Stress.',
    craftSewingText: 'The best clothes are the ones you forget you are wearing. We eliminate all "discomfort".',
    craftSewingPoint1Title: 'Flat Seaming',
    craftSewingPoint1Desc: 'Luxury lingerie technique. Flattens seams to minimize skin contact.',
    craftSewingPoint2Title: 'Tag-Free Comfort',
    craftSewingPoint2Desc: 'No scratching labels. No rustling sounds.',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: 'A Life with White Teddy',
    readStory: 'Read Story',
    shopMemory: 'Shop this memory',

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

    // Philosophy - Origin Story
    philOriginTitle: '起源',
    philOriginHead: '迷いの中に、正解を。',
    philOriginText: 'かつて、私は愛犬のためにネットの海を彷徨っていました。溢れかえる選択肢。しかし、届くのは価格に見合わない品質や、すぐに綻びる縫製ばかり。「なぜ、愛犬のための『当たり前』の良い服がないのだろう？」その問いが、すべての始まりでした。私たちは決めました。もう、あなたを迷わせない。複雑な選択肢を削ぎ落とし、品質と価格のバランスを極限まで突き詰める。混乱した市場に、たった一つの「正解」を提示すること。それが、Moko Basicの使命です。',

    philWardrobeTitle: 'クローゼット',
    philWardrobeHead: 'ペットではなく、「家族」のクローゼット。',
    philWardrobeText: '犬は、観賞用ではありません。私たちと同じように眠り、歩き、季節を感じる「家族」です。だからこそ、彼らにも専用のクローゼットが必要です。春の陽だまりで寛ぐための、柔らかなラウンジウェア。夏の夕立から身を守る、機能的なレインコート。冬の寒夜に安らぎを与える、極上のパジャマ。Moko Basicは、365日のあらゆるシーンを想定して設計されています。ユニクロのように親しみやすく、かつ、妥協のない品質管理を。あなたの家族の一員として、彼らが誇らしく着られる一着を届けます。',

    philValueTitle: '約束',
    philValueHead: '最高の日常を、適正な価格で。',
    philValueText: '良いものが高いのは当たり前？私たちはそうは思いません。愛犬との生活は、毎日続くものだから。私たちは生産工程をゼロから見直し、余分なコストをカットすることで、「驚くほどの高品質」を「続けられる価格」で実現しました。浮いた予算で、今日は少し良いおやつを買ってあげてください。それもまた、私たちが願う「豊かな愛犬生活」の一部なのです。',

    // Philosophy - The Two Hearts Strategy
    philRoyalTitle: '第一章：皇家の血脈',
    philRoyalHead: '小さな王族への、オマージュ。',
    philRoyalText: 'かつて、ヴェルサイユの宮殿で愛された彼らには、生まれながらにして「気品」が宿っています。その誇り高き2.5kgの身体を包むのは、量産された布切れであってはなりません。私たちは考えます。「もしも、現代の王室が愛犬のために普段着を仕立てるとしたら？」それは、飾り立てることではなく、その高貴なシルエットを最も美しく見せる「正統」であること。Moko Basicは、あなたの小さな家族を、本来あるべき「王族」として遇します。',
    
    philArtisanTitle: '第二章：匠人の矜持',
    philArtisanHead: '0.1ミリに宿る、日本の美学。',
    philArtisanText: '「神は細部に宿る」。この言葉は、小さな服ほど重みを増します。たった数ミリの縫い目が、彼らの薄い皮膚を傷つけるかもしれない。たった数グラムの重さが、軽やかなステップを鈍らせるかもしれない。だからこそ、私たちは日本の「職人精神」で挑みます。身体の曲線を読み解く、立体の妙。触れた瞬間、指先が吸い付くような素材の選定。裏側の始末にこそ、最大の時間を費やす愚直さ。シンプルに見える一着には、私たちの「過保護」なまでの愛情と技術が縫い込まれています。',
    
    philPromiseTitle: '二つの心臓',
    philPromiseHead: '高貴を、日常に纏う。',
    philPromiseText: 'ラグジュアリーとは、価格のことではありません。それは、相手を想う「深さ」のこと。毎日着るものだからこそ、王室級の品格と、国宝級の着心地を。Moko Basic —— それは、2.5kgのための新しいスタンダードです。',

    trustBaby: '乳幼児基準',
    trustBabyDesc: 'ホルムアルデヒド検出ゼロ。人間の乳幼児用肌着と同等の安全基準を採用。',
    trust3D: '3D 立体裁断',
    trust3DDesc: 'トイプードル特有の胸郭構造に合わせた専用設計。',

    // Craft - Invisible Luxury
    craftTitle: '見えない贅沢',
    craftSubtitle: '素材と仕立ての科学',

    // Section 1: Material
    craftMatTitle: '素材学',
    craftMatHead: '"ベビーグレード"を超える、純粋さ。',
    craftMatText: 'トイプードルの皮膚は、人間の赤ちゃんの肌よりも薄く、デリケートです。だからこそ、Moko Basicの基準は「アパレル」ではなく「スキンケア」でした。',
    craftMatPoint1Title: '厳選された超長綿',
    craftMatPoint1Desc: '世界中の綿花からわずか5%しか採れない希少綿。シルクのような光沢とカシミヤの肌触り。',
    craftMatPoint2Title: '有害物質ゼロ',
    craftMatPoint2Desc: 'OEKO-TEX級の安全性。万が一、愛犬が服を舐めてしまっても安心です。',

    // Section 2: Tailoring
    craftTailorTitle: '剪裁学',
    craftTailorHead: '2.5kgのための「立体建築」。',
    craftTailorText: '犬の体は、平らではありません。Moko Basicは、静止画ではなく「動画」からパターン（型紙）を起こしました。',
    
    // Hotspots
    hotspotArchTitle: '3D アーチ・カット',
    hotspotArchDesc: '深い胸郭と細い腰のラインに沿う立体裁断。',
    hotspotArmTitle: 'トイプー専用アームホール',
    hotspotArmDesc: '脇の擦れを防ぐため、可動域をミリ単位で計算。',
    hotspotTagTitle: 'タグレス仕様',
    hotspotTagDesc: 'プリント印字でチクチクを解消。',

    // Section 3: Sewing
    craftSewingTitle: '縫製学',
    craftSewingHead: 'ストレスを、縫い込まない。',
    craftSewingText: '良い服とは、着ていることを忘れる服のこと。そのために、私たちは「違和感」を徹底的に排除しました。',
    craftSewingPoint1Title: 'フラットシーマ縫製',
    craftSewingPoint1Desc: '高級肌着の技術。生地の継ぎ目を平らにし、肌への刺激を極限まで減らします。',
    craftSewingPoint2Title: 'ノイズレス',
    craftSewingPoint2Desc: '不快な「カサカサ音」を排除した素材選定。',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: '白テディとの生活',
    readStory: 'ストーリーを読む',
    shopMemory: 'この記憶を購入する',

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

    // Philosophy - Origin Story
    philOriginTitle: '起源',
    philOriginHead: '在迷茫之中，尋找正解。',
    philOriginText: '曾經，我為了愛犬在網絡的海洋中徬徨。選項氾濫成災。然而收到的，盡是些與價格不符的質量，或是穿幾次就開線的做工。「為什麼，找不到一件理所當然的『好衣服』呢？」那個疑問，就是一切的開始。我們決定了。再也不讓你感到迷茫。剔除複雜的選項，將品質與價格的平衡追求到極致。在混亂的市場中，給出一個唯一的「正解」。這就是 Moko Basic 的使命。',

    philWardrobeTitle: '衣櫥',
    philWardrobeHead: '不是寵物的，而是「家人」的衣櫥。',
    philWardrobeText: '狗狗不是觀賞品。牠們是和我們一樣會睡覺、會散步、能感知季節的「家人」。正因如此，牠們也需要專屬的衣櫥。為了在春日暖陽下放鬆的，柔軟居家服。為了在夏日驟雨中保護身體的，功能性雨衣。為了在冬日寒夜給予安寧的，極上睡衣。Moko Basic 設想了 365 天的所有場景來進行設計。像優衣庫一樣親切易得，同時執行絕不妥協的質量控制。作為您家庭的一員，我們獻上讓牠們能自豪穿著的每一件衣服。',

    philValueTitle: '承諾',
    philValueHead: '以合理的價格，獻上最好的日常。',
    philValueText: '好東西就一定貴？我們不這麼認為。因為與愛犬的生活，是日復一日的持續。我們從零開始審視生產流程，削減多餘成本，實現了以「可持續的價格」提供「令人驚訝的高品質」。請用省下來的預算，今天給牠買點好吃的零食吧。這也是我們所期望的「豐富愛犬生活」的一部分。',

    // Philosophy - The Two Hearts Strategy
    philRoyalTitle: '第一章：皇家的血脈',
    philRoyalHead: '致敬那微小的皇室血脈。',
    philRoyalText: '曾集萬千寵愛於凡爾賽宮的它們，生來就寄宿著「氣度」。包裹這驕傲的 2.5kg 軀體的，絕不應是廉價量產的布片。我們不禁設想：「如果現代皇室要為愛犬定制一件『日常便服』，那會是什麼樣？」答案絕非繁複的裝飾，而是能最大程度襯托其高貴輪廓的「正統」。Moko Basic，將您的那位小小家人，奉為真正的「王族」來禮遇。',
    
    philArtisanTitle: '第二章：匠人的矜持',
    philArtisanHead: '棲息在 0.1 毫米之中的，日本美學。',
    philArtisanText: '「神在細節之中」。這句話，對於越小的衣服，分量越重。僅僅幾毫米的接縫誤差，可能就會磨損它們極薄的皮膚。僅僅幾克的額外重量，可能就會遲滯它們輕盈的步伐。正因如此，我們以日本的「職人精神」發起挑戰。解讀身體曲線的立體剪裁之妙；觸碰瞬間指尖便會被吸附般的面料甄選；甚至在看不見的內襯收邊上，花費最長的時間——這種笨拙的執著。在這看似極簡的一件衣服裡，縫進了我們近乎「過保護」般的愛與技術。',
    
    philPromiseTitle: '兩顆心臟',
    philPromiseHead: '將高貴，披於日常。',
    philPromiseText: '所謂奢華，無關價格。而是關乎思念對方的「深度」。正因為是每天穿著的衣物，才更需要皇室級的品格，與國寶級的穿著感。Moko Basic —— 這是專為 2.5kg 設立的，全新標準。',

    trustBaby: '嬰兒級標準',
    trustBabyDesc: '甲醛檢測為 0。我們使用與人類嬰兒內衣同等級別的安全標準。',
    trust3D: '3D 立裁',
    trust3DDesc: '歷經 50 次樣版修正，專為泰迪犬獨特的胸腔結構設計。',

    // Craft - Invisible Luxury
    craftTitle: '看不見的奢華',
    craftSubtitle: '材質與工藝',

    // Section 1: Material
    craftMatTitle: '素材學',
    craftMatHead: '超越「嬰兒級」的純淨。',
    craftMatText: '泰迪犬的皮膚比人類嬰兒的更薄、更敏感。因此，Moko Basic 的標準不是「製衣」，而是「護膚」。',
    craftMatPoint1Title: '嚴選超長絨棉',
    craftMatPoint1Desc: '只選用全球產量僅 5% 的稀有長纖維棉。實現了絲綢般的光澤和羊絨般的觸感。',
    craftMatPoint2Title: '有害物質歸零',
    craftMatPoint2Desc: '通過 OEKO-TEX 甲醛測試。即使愛犬舔舐衣物也無需擔心。',

    // Section 2: Tailoring
    craftTailorTitle: '剪裁學',
    craftTailorHead: '專為 2.5kg 設計的「立體建築」。',
    craftTailorText: '狗狗的身體不是平面的。Moko Basic 不是從靜止畫面，而是從「動態視頻」中提取版型數據。',
    
    // Hotspots
    hotspotArchTitle: '3D 拱形剪裁',
    hotspotArchDesc: '順應泰迪犬特有的深胸腔和細腰線。',
    hotspotArmTitle: '泰迪專用袖隆',
    hotspotArmDesc: '以毫米為單位計算前肢可動域，防止腋下摩擦。',
    hotspotTagTitle: '無感標籤',
    hotspotTagDesc: '改為印字，剔除刺癢的實體標籤。',

    // Section 3: Sewing
    craftSewingTitle: '縫製學',
    craftSewingHead: '不把壓力縫進衣服裡。',
    craftSewingText: '最好的衣服，是讓人忘記穿著的衣服。為此，我們徹底排除了所有的「違和感」。',
    craftSewingPoint1Title: '平縫工藝 (Flat Seaming)',
    craftSewingPoint1Desc: '採用高級內衣技術。讓接縫處完全平整，極限降低皮膚摩擦。',
    craftSewingPoint2Title: '靜音設計',
    craftSewingPoint2Desc: '剔除會產生摩擦聲的材質，守護聽覺敏感的牠們。',

    // Journal
    journalTitle: 'Moko Journal',
    journalSub: '白泰迪生活誌',
    readStory: '閱讀故事',
    shopMemory: '購買這份記憶',

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

export const RAW_PRODUCTS = [
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

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'j1',
    category: 'URBAN',
    title: {
      EN: 'Sunday Morning in Omotesando',
      JP: '表参道の星期日早晨',
      ZH_TW: '表參道的星期日早晨'
    },
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1552353617-3bfd679b3bdd?q=80&w=1200&auto=format&fit=crop',
    content: {
      EN: "The silence before the city wakes. The chill of asphalt turns into a comfortable rhythm with cashmere-touch knit. The empty tree-lined avenue is our private runway.",
      JP: "街が目覚める前の静寂。アスファルトの冷たさも、カシミヤタッチのニットがあれば、心地よいリズムに変わる。誰もいない並木道は、私たちだけのランウェイ。",
      ZH_TW: "城市甦醒前的靜寂。即便柏油路透著涼意，有了羊絨觸感的針織衫，步伐也變成了舒適的韻律。空無一人的林蔭道，此刻只屬於我們的 T 台。"
    },
    relatedProductId: 'c1' // Trench
  },
  {
    id: 'j2',
    category: 'HOME',
    title: {
      EN: 'The Luxury of Doing Nothing',
      JP: '何もしない贅沢',
      ZH_TW: '不做任何事的奢侈'
    },
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop',
    content: {
      EN: "The best holiday is having no plans. Soft sunlight, a half-read book. And the peaceful breathing of my dog beside me. When the cotton touching the skin is gentle, time seems to flow gently too.",
      JP: "最高の休日は、予定がないこと。柔らかな日差しと、読みかけの本。そして、隣で聞こえる愛犬の安らかな寝息。肌に触れるコットンが優しいと、時間まで優しく流れる気がする。",
      ZH_TW: "最好的假日，就是沒有任何安排。柔和的陽光，讀了一半的書。還有身旁愛犬那安穩的呼吸聲。當觸碰肌膚的棉是溫柔的，彷彿連時間的流逝也變得溫柔了。"
    },
    relatedProductId: 'e1' // Tee
  },
  {
    id: 'j3',
    category: 'STYLE',
    title: {
      EN: 'Layering Autumn',
      JP: '秋色の重なり',
      ZH_TW: '秋色的重疊'
    },
    date: 'October 2026',
    image: 'https://images.unsplash.com/photo-1459207982041-691653f8a706?q=80&w=1200&auto=format&fit=crop',
    content: {
      EN: "Deep 'Cinnamon Brown' suits the trench coat best. If enjoying a link-coord with your dog, matching textures is the adult rule. Refined basics become the best supporting role to highlight the protagonist.",
      JP: "トレンチコートに似合うのは、深みのある「シナモン・ブラウン」。愛犬とリンクコーデ（お揃い）を楽しむなら、素材感を合わせるのが大人のルール。洗練されたベーシックは、主役を引き立てる名脇役になる。",
      ZH_TW: "最襯風衣的，是深邃的「肉桂棕」。若要享受與愛犬的「親子裝」樂趣，統一材質感才是大人的法則。洗練的基礎款，永遠是襯托主角的最佳配角。"
    },
    relatedProductId: 'c2' // Cashmere
  },
  {
    id: 'j4',
    category: 'STYLE',
    title: {
      EN: 'The Art of Texture',
      JP: 'テクスチャーのアート',
      ZH_TW: '材質的藝術'
    },
    date: 'December 2026',
    image: 'https://images.unsplash.com/photo-1596464716127-f9a08596048d?q=80&w=1200&auto=format&fit=crop',
    content: {
      EN: "Exploring the subtlety of white on white. Different shades of cream, ivory, and snow weave a story of elegance.",
      JP: "白と白の繊細な重なり。クリーム、アイボリー、スノーホワイト。異なる白が織りなすエレガンスの物語。",
      ZH_TW: "探索白與白的微妙層次。奶油色、象牙白、雪白，編織出優雅的故事。"
    },
    relatedProductId: 'c4' // Pearl Collar
  }
];

export const OCCASIONS = [
  {
    id: 'home',
    image: 'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=800&auto=format&fit=crop',
    title: { EN: 'Relaxing Pajamas', JP: 'パジャマ', ZH_TW: '居家服' },
    sub: { EN: 'Home', JP: 'おうち時間', ZH_TW: '居家' }
  },
  {
    id: 'walk',
    image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format&fit=crop',
    title: { EN: 'Daily Essentials', JP: 'お散歩ウェア', ZH_TW: '散步必備' },
    sub: { EN: 'Walk', JP: 'お散歩', ZH_TW: '散步' }
  },
  {
    id: 'rain',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop',
    title: { EN: 'Rain Protection', JP: 'レインコート', ZH_TW: '雨衣' },
    sub: { EN: 'Rain', JP: '雨の日', ZH_TW: '雨天' }
  },
  {
    id: 'sleep',
    image: 'https://images.unsplash.com/photo-1529429612779-c8e40df2f5ce?q=80&w=800&auto=format&fit=crop',
    title: { EN: 'Deep Sleep', JP: '熟睡ニット', ZH_TW: '熟睡針織' },
    sub: { EN: 'Sleep', JP: '睡眠', ZH_TW: '睡眠' }
  }
];