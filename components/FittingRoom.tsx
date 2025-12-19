
import React, { useState, useRef, useCallback } from 'react';
import { Language, Product } from '../types';
import { TRANSLATIONS, PRODUCTS, ASSETS } from '../constants';
import {
  Upload,
  X,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Share2,
  Sparkles,
  Info,
  RefreshCcw,
  Move
} from 'lucide-react';

interface FittingRoomProps {
  language: Language;
}

interface OverlayPosition {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export const FittingRoom: React.FC<FittingRoomProps> = ({ language }) => {
  const [petImage, setPetImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [overlayPosition, setOverlayPosition] = useState<OverlayPosition>({
    x: 50,
    y: 40,
    scale: 0.8,
    rotation: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [showTips, setShowTips] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const clothingProducts = PRODUCTS.filter(p => p.productType === 'CLOTHING');

  const labels = {
    EN: {
      title: 'Virtual Fitting Room',
      subtitle: 'Upload your pet\'s photo and try on our collection',
      uploadTitle: 'Upload Your Pet\'s Photo',
      uploadDesc: 'Drag & drop or click to upload',
      uploadFormats: 'JPG, PNG up to 10MB',
      orTrySample: 'Or try with a sample:',
      selectProduct: 'Select an Item to Try On',
      adjustFit: 'Adjust Position',
      tips: 'Tips',
      tipDrag: 'Drag the clothing to position it on your pet',
      tipZoom: 'Use +/- to resize the clothing',
      tipRotate: 'Rotate to match your pet\'s pose',
      download: 'Save Image',
      share: 'Share',
      changePhoto: 'Change Photo',
      noProduct: 'Select an item from the catalog →',
      sizeRecommend: 'Designed for 2.5kg Toy Poodle',
      reset: 'Reset',
    },
    JP: {
      title: 'バーチャル試着室',
      subtitle: 'ペットのお写真をアップロードして、コレクションをお試しください',
      uploadTitle: 'ペットの写真をアップロード',
      uploadDesc: 'ドラッグ＆ドロップまたはクリック',
      uploadFormats: 'JPG, PNG 10MBまで',
      orTrySample: 'またはサンプルで試す：',
      selectProduct: '試着するアイテムを選択',
      adjustFit: '位置を調整',
      tips: 'ヒント',
      tipDrag: 'ドラッグして洋服の位置を調整',
      tipZoom: '+/- でサイズを変更',
      tipRotate: 'ペットのポーズに合わせて回転',
      download: '画像を保存',
      share: 'シェア',
      changePhoto: '写真を変更',
      noProduct: 'カタログからアイテムを選択 →',
      sizeRecommend: '2.5kgトイプードル向けデザイン',
      reset: 'リセット',
    },
    ZH_TW: {
      title: '虛擬試衣間',
      subtitle: '上傳您寵物的照片，試穿我們的系列',
      uploadTitle: '上傳寵物照片',
      uploadDesc: '拖放或點擊上傳',
      uploadFormats: 'JPG, PNG 最大10MB',
      orTrySample: '或使用範例試用：',
      selectProduct: '選擇試穿商品',
      adjustFit: '調整位置',
      tips: '提示',
      tipDrag: '拖動服裝到寵物身上',
      tipZoom: '使用 +/- 調整大小',
      tipRotate: '旋轉以配合寵物姿勢',
      download: '保存圖片',
      share: '分享',
      changePhoto: '更換照片',
      noProduct: '從目錄選擇商品 →',
      sizeRecommend: '專為2.5kg玩具貴賓設計',
      reset: '重置',
    },
  };

  const t = labels[language];

  const handleFileUpload = useCallback((file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPetImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!selectedProduct) return;
    e.preventDefault();
    setIsDragging(true);
  }, [selectedProduct]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setOverlayPosition(prev => ({
      ...prev,
      x: Math.max(10, Math.min(90, x)),
      y: Math.max(10, Math.min(90, y)),
    }));
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!selectedProduct) return;
    setIsDragging(true);
  }, [selectedProduct]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !canvasRef.current) return;

    const touch = e.touches[0];
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    setOverlayPosition(prev => ({
      ...prev,
      x: Math.max(10, Math.min(90, x)),
      y: Math.max(10, Math.min(90, y)),
    }));
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const adjustScale = (delta: number) => {
    setOverlayPosition(prev => ({
      ...prev,
      scale: Math.max(0.3, Math.min(2, prev.scale + delta)),
    }));
  };

  const adjustRotation = (delta: number) => {
    setOverlayPosition(prev => ({
      ...prev,
      rotation: prev.rotation + delta,
    }));
  };

  const resetPosition = () => {
    setOverlayPosition({ x: 50, y: 40, scale: 0.8, rotation: 0 });
  };

  const handleDownload = async () => {
    // Simple implementation - in production use html2canvas
    alert(language === 'JP' ? 'ダウンロード機能は準備中です' : 'Download feature coming soon!');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Pet in MOKO BASIC',
          text: 'Check out my pet trying on MOKO BASIC!',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pt-32 pb-24">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center space-x-2 text-mofu-gold mb-4">
          <Sparkles size={20} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Virtual Try-On</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-mofu-black mb-4">{t.title}</h1>
        <p className="text-stone-500 font-serif italic tracking-wide max-w-lg mx-auto">{t.subtitle}</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Main Canvas Area */}
          <div className="w-full lg:w-2/3">
            {!petImage ? (
              /* Upload Area */
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square md:aspect-[4/3] bg-white border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-mofu-gold hover:bg-mofu-gold/5 transition-all duration-300"
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-6">
                    <Upload size={32} className="text-stone-400" />
                  </div>
                  <h3 className="text-xl font-serif text-mofu-black mb-2">{t.uploadTitle}</h3>
                  <p className="text-stone-500 mb-2">{t.uploadDesc}</p>
                  <p className="text-xs text-stone-400">{t.uploadFormats}</p>

                  {/* Sample images */}
                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="text-xs text-stone-400 mb-4">{t.orTrySample}</p>
                    <div className="flex justify-center gap-4">
                      {[ASSETS.MODELS.WHITE, ASSETS.MODELS.APRICOT, ASSETS.MODELS.BLACK].map((img, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPetImage(img);
                          }}
                          className="w-20 h-20 rounded-full overflow-hidden border-2 border-stone-200 hover:border-mofu-gold hover:scale-110 transition-all duration-300 shadow-sm"
                        >
                          <img src={img} alt="Sample" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  className="hidden"
                />
              </div>
            ) : (
              /* Try-On Canvas */
              <div className="relative">
                <div
                  ref={canvasRef}
                  className="relative aspect-square md:aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-xl border border-stone-200 select-none"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Pet Image */}
                  <img
                    src={petImage}
                    alt="Your pet"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Clothing Overlay */}
                  {selectedProduct && (
                    <div
                      className={`absolute cursor-move select-none touch-none ${isDragging ? 'z-20' : 'z-10'}`}
                      style={{
                        left: `${overlayPosition.x}%`,
                        top: `${overlayPosition.y}%`,
                        transform: `translate(-50%, -50%) scale(${overlayPosition.scale}) rotate(${overlayPosition.rotation}deg)`,
                        transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                      }}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                    >
                      <div className="relative">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-56 h-56 object-contain drop-shadow-2xl"
                          style={{
                            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
                          }}
                          draggable={false}
                        />
                        {/* Drag indicator */}
                        <div className="absolute -top-2 -right-2 bg-mofu-gold text-white p-1 rounded-full opacity-70">
                          <Move size={12} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* No product selected message */}
                  {!selectedProduct && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                      <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-lg text-center shadow-lg">
                        <p className="text-sm text-stone-600 font-medium">{t.noProduct}</p>
                      </div>
                    </div>
                  )}

                  {/* Product label */}
                  {selectedProduct && (
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-sm shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-widest text-mofu-black">
                        {selectedProduct.name}
                      </span>
                      <span className="text-xs text-mofu-gold ml-2">
                        ¥{selectedProduct.price.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Position Controls */}
                {selectedProduct && (
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    {/* Scale controls */}
                    <div className="flex items-center bg-white rounded-full shadow-sm border border-stone-200 p-1">
                      <button
                        onClick={() => adjustScale(-0.1)}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        title="Zoom out"
                      >
                        <ZoomOut size={18} />
                      </button>
                      <span className="px-3 text-xs text-stone-500 min-w-[50px] text-center">
                        {Math.round(overlayPosition.scale * 100)}%
                      </span>
                      <button
                        onClick={() => adjustScale(0.1)}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                        title="Zoom in"
                      >
                        <ZoomIn size={18} />
                      </button>
                    </div>

                    {/* Rotation controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => adjustRotation(-15)}
                        className="p-2 bg-white rounded-full shadow-sm border border-stone-200 hover:bg-stone-100 transition-colors"
                        title="Rotate left"
                      >
                        <RotateCw size={18} className="transform -scale-x-100" />
                      </button>
                      <button
                        onClick={() => adjustRotation(15)}
                        className="p-2 bg-white rounded-full shadow-sm border border-stone-200 hover:bg-stone-100 transition-colors"
                        title="Rotate right"
                      >
                        <RotateCw size={18} />
                      </button>
                    </div>

                    {/* Reset */}
                    <button
                      onClick={resetPosition}
                      className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-stone-200 hover:bg-stone-100 transition-colors text-xs uppercase tracking-wider"
                    >
                      <RefreshCcw size={14} />
                      {t.reset}
                    </button>
                  </div>
                )}

                {/* Action buttons */}
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setPetImage(null);
                      setSelectedProduct(null);
                    }}
                    className="px-6 py-3 border border-stone-300 text-xs uppercase tracking-widest hover:border-mofu-black transition-colors rounded-sm"
                  >
                    {t.changePhoto}
                  </button>
                  {selectedProduct && (
                    <>
                      <button
                        onClick={handleDownload}
                        className="px-6 py-3 bg-mofu-black text-white text-xs uppercase tracking-widest hover:bg-stone-800 transition-colors rounded-sm flex items-center gap-2"
                      >
                        <Download size={14} />
                        {t.download}
                      </button>
                      {typeof navigator !== 'undefined' && navigator.share && (
                        <button
                          onClick={handleShare}
                          className="px-6 py-3 bg-mofu-gold text-white text-xs uppercase tracking-widest hover:bg-amber-600 transition-colors rounded-sm flex items-center gap-2"
                        >
                          <Share2 size={14} />
                          {t.share}
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Tips */}
            {petImage && showTips && (
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4 relative">
                <button
                  onClick={() => setShowTips(false)}
                  className="absolute top-2 right-2 text-amber-400 hover:text-amber-600"
                >
                  <X size={16} />
                </button>
                <div className="flex items-start gap-3">
                  <Info size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-800 mb-2">{t.tips}</h4>
                    <ul className="text-xs text-amber-700 space-y-1">
                      <li>• {t.tipDrag}</li>
                      <li>• {t.tipZoom}</li>
                      <li>• {t.tipRotate}</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product Selection Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-mofu-gold mb-6">
                {t.selectProduct}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {clothingProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setSelectedProduct(product);
                      if (!petImage) {
                        // Auto-select first sample if no image uploaded
                        setPetImage(ASSETS.MODELS.WHITE);
                      }
                      resetPosition();
                    }}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 group ${
                      selectedProduct?.id === product.id
                        ? 'border-mofu-gold shadow-lg scale-105'
                        : 'border-stone-200 hover:border-stone-400 hover:shadow-md'
                    }`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {selectedProduct?.id === product.id && (
                      <div className="absolute inset-0 bg-mofu-gold/20 flex items-center justify-center">
                        <span className="bg-mofu-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                          ✓
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-white text-xs font-medium truncate">{product.name}</p>
                      <p className="text-white/80 text-[10px]">¥{product.price.toLocaleString()}</p>
                    </div>
                    {product.badge && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-mofu-gold text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          {product.badge}
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Size recommendation note */}
              <div className="mt-6 pt-6 border-t border-stone-100 text-center">
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">
                  {t.sizeRecommend}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
