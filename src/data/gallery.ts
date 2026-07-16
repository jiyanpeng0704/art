// EXPORTS: IGalleryImage, MOCK_GALLERY_IMAGES
// 图片来源：Unsplash (https://unsplash.com)
// 版权协议：Unsplash License（免费可商用，无需署名，可用于公开网站）
// 详见：https://unsplash.com/license

export interface IGalleryImage {
  id: string
  title: string
  category: 'landscape' | 'portrait' | 'architecture' | 'still_life' | 'street'
  imageUrl: string
  width: number
  height: number
  description: string
}

export const MOCK_GALLERY_IMAGES: IGalleryImage[] = [
  {
    id: '1',
    title: '山间晨雾',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop&q=80',
    width: 800,
    height: 1200,
    description: '清晨山谷间弥漫的薄雾，阳光穿透云层洒下'
  },
  {
    id: '2',
    title: '城市人像',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1000&fit=crop&q=80',
    width: 800,
    height: 1000,
    description: '都市背景下的人物肖像，光影交织'
  },
  {
    id: '3',
    title: '现代建筑',
    category: 'architecture',
    imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&q=80',
    width: 800,
    height: 600,
    description: '极简主义建筑线条与几何美感'
  },
  {
    id: '4',
    title: '静物花卉',
    category: 'still_life',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=800&fit=crop&q=80',
    width: 800,
    height: 800,
    description: '精心布置的花卉静物，柔和自然光'
  },
  {
    id: '5',
    title: '街头瞬间',
    category: 'street',
    imageUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=1100&fit=crop&q=80',
    width: 800,
    height: 1100,
    description: '城市街头捕捉的生活瞬间'
  },
  {
    id: '6',
    title: '海岸日落',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&q=80',
    width: 800,
    height: 500,
    description: '海边落日余晖，金色洒满海面'
  },
  {
    id: '7',
    title: '光影人像',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=900&fit=crop&q=80',
    width: 800,
    height: 900,
    description: '窗边自然光下的人像摄影'
  },
  {
    id: '8',
    title: '古典建筑',
    category: 'architecture',
    imageUrl: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=1200&fit=crop&q=80',
    width: 800,
    height: 1200,
    description: '历史悠久的古典建筑细节'
  },
  {
    id: '9',
    title: '咖啡时光',
    category: 'still_life',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=700&fit=crop&q=80',
    width: 800,
    height: 700,
    description: '午后咖啡与书本的静谧时光'
  },
  {
    id: '10',
    title: '霓虹夜色',
    category: 'street',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=1000&fit=crop&q=80',
    width: 800,
    height: 1000,
    description: '夜晚城市霓虹灯下的街景'
  },
  {
    id: '11',
    title: '森林小径',
    category: 'landscape',
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=1100&fit=crop&q=80',
    width: 800,
    height: 1100,
    description: '阳光透过树叶洒在林间小路上'
  },
  {
    id: '12',
    title: '艺术人像',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=1200&fit=crop&q=80',
    width: 800,
    height: 1200,
    description: '充满艺术感的黑白人像作品'
  },
  {
    id: '13',
    title: '摩天大楼',
    category: 'architecture',
    imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=1000&fit=crop&q=80',
    width: 800,
    height: 1000,
    description: '仰视角度下的现代摩天大楼群'
  },
  {
    id: '14',
    title: '复古物件',
    category: 'still_life',
    imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&q=80',
    width: 800,
    height: 600,
    description: '充满年代感的复古收藏品'
  },
  {
    id: '15',
    title: '雨中漫步',
    category: 'street',
    imageUrl: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=800&h=900&fit=crop&q=80',
    width: 800,
    height: 900,
    description: '雨天街道上撑伞行人的剪影'
  }
]
