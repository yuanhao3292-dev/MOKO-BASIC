// =====================================================================
// 🖼️ IMAGE CONFIGURATION | 图片配置
// =====================================================================
//
// 所有图片 URL 集中管理，支持 S3 或其他 CDN
//
// 使用方法:
// 1. 本地开发: 直接修改此文件中的 URL
// 2. 生产环境: 设置 VITE_IMAGE_BASE_URL 环境变量指向 S3 bucket
//
// S3 配置示例:
// VITE_IMAGE_BASE_URL=https://your-bucket.s3.ap-northeast-1.amazonaws.com
//
// 图片命名规范:
// - 产品主图: products/{product-id}/main.jpg
// - 产品画廊: products/{product-id}/gallery-{1-4}.jpg
// - 分类图: categories/{category}.jpg
// - Hero 图: hero/{name}.jpg
// =====================================================================

// S3 基础 URL (从环境变量读取，默认使用占位图)
const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || '';

// 辅助函数：构建完整图片 URL
const img = (path: string, fallback: string): string => {
  if (IMAGE_BASE_URL) {
    return `${IMAGE_BASE_URL}/${path}`;
  }
  return fallback;
};

// =====================================================================
// HERO 区域图片
// =====================================================================
export const HERO_IMAGES = {
  MAIN: img(
    'hero/main.jpg',
    'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop'
  ),
};

// =====================================================================
// 分类展示图片
// =====================================================================
export const CATEGORY_IMAGES = {
  MALE: img(
    'categories/male.jpg',
    'https://i.ibb.co/MkxwX2kZ/Chat-GPT-Image-2025-12-17-01-01-42-1.png'
  ),
  FEMALE: img(
    'categories/female.jpg',
    'https://i.ibb.co/VWjDCLqN/F9-F82-ABA-2-D08-4259-B455-90-EF48868-A5-D.jpg'
  ),
};

// =====================================================================
// 品牌理念页面图片
// =====================================================================
export const PHILOSOPHY_IMAGES = {
  ORIGIN: img(
    'philosophy/origin.jpg',
    'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=1000&auto=format&fit=crop'
  ),
  MATERIAL: img(
    'philosophy/material.jpg',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1000&auto=format&fit=crop'
  ),
  TAILOR: img(
    'philosophy/tailor.jpg',
    'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?q=80&w=2000&auto=format&fit=crop'
  ),
};

// =====================================================================
// 场景图片
// =====================================================================
export const OCCASION_IMAGES = {
  HOME: img(
    'occasions/home.jpg',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=800&auto=format&fit=crop'
  ),
  WALK: img(
    'occasions/walk.jpg',
    'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800&auto=format&fit=crop'
  ),
  RAIN: img(
    'occasions/rain.jpg',
    'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop'
  ),
  SLEEP: img(
    'occasions/sleep.jpg',
    'https://images.unsplash.com/photo-1541781777631-fa9537171859?q=80&w=800&auto=format&fit=crop'
  ),
};

// =====================================================================
// 其他图片
// =====================================================================
export const MISC_IMAGES = {
  MANAGER_AVATAR: img(
    'misc/manager-avatar.jpg',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop'
  ),
  MODEL_WHITE: img(
    'models/white-poodle.jpg',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop'
  ),
  MODEL_APRICOT: img(
    'models/apricot-poodle.jpg',
    'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=800&auto=format&fit=crop'
  ),
  MODEL_BLACK: img(
    'models/black-poodle.jpg',
    'https://images.unsplash.com/photo-1620021673322-26f6345dc553?q=80&w=800&auto=format&fit=crop'
  ),
};

// =====================================================================
// 产品图片
// =====================================================================
export const PRODUCT_IMAGES = {
  // 服装类
  'p1': {
    main: img('products/p1/main.jpg', 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=1000&auto=format&fit=crop'),
    gallery: [
      img('products/p1/gallery-1.jpg', 'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=800&auto=format&fit=crop'),
      img('products/p1/gallery-2.jpg', 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop'),
    ],
  },
  'p2': {
    main: img('products/p2/main.jpg', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop'),
    gallery: [],
  },
  'p3': {
    main: img('products/p3/main.jpg', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop'),
    gallery: [],
  },
  'p4': {
    main: img('products/p4/main.jpg', 'https://images.unsplash.com/photo-1517423568366-6975535403b3?q=80&w=1000&auto=format&fit=crop'),
    gallery: [],
  },
  // 其他产品 - 可以继续添加
  'trench': {
    main: img('products/trench/main.jpg', 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?q=80&w=1000&auto=format&fit=crop'),
    gallery: [],
  },
  'leash-leather': {
    main: img('products/leash-leather/main.jpg', 'https://i.ibb.co/VvWpL_1.jpg'),
    gallery: [],
  },
  'leash-ribbon': {
    main: img('products/leash-ribbon/main.jpg', 'https://i.ibb.co/VvWpL_2.jpg'),
    gallery: [],
  },
  'collar-pearl': {
    main: img('products/collar-pearl/main.jpg', 'https://i.ibb.co/VvWpL_3.jpg'),
    gallery: [],
  },
  'collar-leather': {
    main: img('products/collar-leather/main.jpg', 'https://i.ibb.co/VvWpL_4.jpg'),
    gallery: [],
  },
  'bowtie': {
    main: img('products/bowtie/main.jpg', 'https://i.ibb.co/VvWpL_5.jpg'),
    gallery: [],
  },
  'hairclip': {
    main: img('products/hairclip/main.jpg', 'https://i.ibb.co/VvWpL_6.jpg'),
    gallery: [],
  },
  'dress': {
    main: img('products/dress/main.jpg', 'https://i.ibb.co/VvWpL_7.jpg'),
    gallery: [],
  },
  'bowl': {
    main: img('products/bowl/main.jpg', 'https://i.ibb.co/VvWpL_8.jpg'),
    gallery: [],
  },
  'bottle': {
    main: img('products/bottle/main.jpg', 'https://i.ibb.co/VvWpL_9.jpg'),
    gallery: [],
  },
  'rain-clear': {
    main: img('products/rain-clear/main.jpg', 'https://i.ibb.co/VvWpL_10.jpg'),
    gallery: [],
  },
  'bed': {
    main: img('products/bed/main.jpg', 'https://i.ibb.co/VvWpL_11.jpg'),
    gallery: [],
  },
  'carrier': {
    main: img('products/carrier/main.jpg', 'https://i.ibb.co/VvWpL_12.jpg'),
    gallery: [],
  },
};

// 通用画廊详情图
export const GALLERY_DETAIL_IMAGES = [
  img('gallery/detail-1.jpg', 'https://images.unsplash.com/photo-1599148401005-fe6d75f68c32?q=80&w=800&auto=format&fit=crop'),
  img('gallery/detail-2.jpg', 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=800&auto=format&fit=crop'),
  img('gallery/detail-3.jpg', 'https://images.unsplash.com/photo-1598133869164-6eb75f380f70?q=80&w=800&auto=format&fit=crop'),
  img('gallery/detail-4.jpg', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop'),
];

// =====================================================================
// 获取产品图片的辅助函数
// =====================================================================
export const getProductImage = (productId: string): string => {
  return PRODUCT_IMAGES[productId as keyof typeof PRODUCT_IMAGES]?.main ||
    'https://via.placeholder.com/400x400?text=No+Image';
};

export const getProductGallery = (productId: string): string[] => {
  return PRODUCT_IMAGES[productId as keyof typeof PRODUCT_IMAGES]?.gallery || [];
};
