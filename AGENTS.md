# 精美画廊展示页面 - 需求拆解文档

## 产品概述

- **产品类型**: 图片画廊展示网站
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 摄影师、设计师、艺术创作者、图片收藏爱好者
- **核心价值**: 以现代简约的视觉风格，优雅地展示图片作品，提供沉浸式的浏览体验
- **界面语言**: 中文
- **主题偏好**: 浅色（现代简约、优雅高级）
- **导航模式**: 锚点导航
- **导航布局**: Topbar（顶部固定）

---

## 页面结构总览

> **说明**：单页画廊展示，使用锚点导航切换内容区块

**页面文件**: `GalleryPage.tsx`

| 区块名称 | 锚点 | 区块说明 |
|---------|------|---------|
| 首屏/Hero | `#hero` | 大标题 + 副标题 + 视差背景，营造高级氛围感 |
| 分类筛选 | `#categories` | 分类标签导航，支持按类别筛选图片 |
| 画廊网格 | `#gallery` | 图片瀑布流/网格布局，核心展示区域 |
| 页脚/Footer | `#footer` | 版权信息 + 社交链接 |

---

## 页面布局建议

- **布局模式**: 单栏流式布局 —— 画廊页面以内容展示为核心，垂直滚动浏览符合用户浏览习惯
- **视觉重心**: 内容（画廊网格区域为绝对视觉重心，占据页面主要空间）
- **结果承载区**: 画廊网格区为图片展示主区；初始态为全部类别图片的瀑布流布局，带渐入加载动画
- **灯箱层**: 点击图片后弹出全屏灯箱覆盖层，独立于页面流之外

---

## 导航配置

- **导航布局**: Topbar（顶部固定，透明背景随滚动渐变为实色）
- **导航项**:

| 导航文字 | 锚点 |
|---------|------|
| 首页 | `#hero` |
| 作品 | `#gallery` |
| 分类 | `#categories` |
| 关于 | `#footer` |

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 画廊图片数据 | demo-mock | `src/data/gallery.ts` 中定义图片数组，含 id、title、category、url、width、height、description 字段 | ✅ 本身就是 mock，内置 15-20 张示例图片 |
| 分类筛选状态 | 本地 state | React useState 管理当前选中的分类，过滤图片列表 | 无 |
| 灯箱浏览状态 | 本地 state | React useState 管理灯箱开关、当前图片索引、左右切换逻辑 | 无 |

> 说明：本需求为纯前端展示型画廊，无后端、无用户上传、无持久化需求，全部数据使用 demo-mock 内置示例图片。

---

## 功能列表

### 首屏/Hero 区块

- **区块目标**: 营造高级视觉氛围，传达画廊品牌调性
- **功能点**:
  - **视差滚动效果**: 背景图片/元素随滚动产生位移差，增强层次感
  - **标题渐入动画**: 页面加载时标题和副标题优雅淡入
  - **滚动引导提示**: 底部向下箭头，提示用户向下浏览

### 分类筛选区块

- **区块目标**: 让用户快速按类别筛选感兴趣的图片
- **功能点**:
  - **分类标签切换**: 横向排列的分类标签（全部/风景/人像/建筑/静物/街拍等），点击切换当前分类
  - **选中态动效**: 当前选中分类有下划线或背景色过渡动画
  - **筛选平滑过渡**: 切换分类时图片网格有淡出淡入 + 重排过渡效果

### 画廊网格区块

- **区块目标**: 核心展示区，以优雅的布局呈现图片作品
- **功能点**:
  - **瀑布流布局**: 多列瀑布流（桌面端 3-4 列、平板 2 列、手机 1 列），图片按原始比例错落排列
  - **图片懒加载**: 滚动到视口内才加载图片，提升首屏性能
  - **加载过渡动画**: 图片加载完成后从模糊/透明渐变为清晰，带淡入效果
  - **悬停动效**: 鼠标悬停时图片轻微放大 + 显示标题/分类遮罩层，过渡平滑优雅
  - **滚动渐入**: 图片随页面滚动依次从下方淡入进入视口

### 灯箱/大图查看

- **区块目标**: 沉浸式查看单张图片细节
- **功能点**:
  - **点击打开灯箱**: 点击画廊中任意图片，弹出全屏灯箱查看大图
  - **左右切换浏览**: 支持左右箭头按钮 / 键盘方向键 / 点击左右区域切换上一张/下一张
  - **关闭交互**: 点击背景 / 关闭按钮 / ESC 键关闭灯箱
  - **图片信息展示**: 灯箱底部显示图片标题、分类、描述等信息
  - **平滑过渡**: 打开/关闭/切换图片时有缩放淡入淡出动画

### 页脚/Footer 区块

- **区块目标**: 收尾页面，提供版权和联系信息
- **功能点**:
  - **品牌署名**: 画廊名称 + 简短标语
  - **社交链接图标**: 可选的社交平台图标链接
  - **版权声明**: 版权年份与所有权利声明

---

## 设计风格指引

> 供 design-agent 参考的视觉方向，非强制约束

- **整体调性**: 现代简约、优雅高级、留白充足
- **配色方案**: 以黑白灰为基底，搭配 1 个低饱和度点缀色（如莫兰迪色系），图片本身作为主要色彩来源
- **字体**: 无衬线字体，标题轻盈优雅，正文清晰易读
- **动效原则**: 所有动画时长 300-500ms，缓动函数使用 cubic-bezier 平滑曲线，避免突兀弹跳
- **间距**: 图片间距适中（20-32px），保持呼吸感
- **响应式断点**: 移动端（<640px）单列、平板（640-1024px）双列、桌面（>1024px）三至四列

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Free —— 无参考材料，按画廊展示产品语义自主建立视觉方向
- **核心情绪 / 应用类型**: 沉浸式艺术画廊体验，现代简约中带有美术馆般的静谧与高级感
- **独特记忆点**: 图片卡片悬停时微妙的"展墙打光"效果——轻微上浮 + 底部柔光阴影 + 图片微缩放，模拟画廊射灯照在作品上的质感

## 2. Art Direction

- **方向名**: 美术馆白墙
- **Design Style**: Swiss Minimalist + Editorial —— 瑞士极简的网格秩序与经典排版的留白呼吸感，让图片成为绝对主角
- **DNA 参数**: 圆角 subtle (rounded-md) / 阴影 layered (hover 时柔光阴影) / 间距 spacious (gap-6~8) / 字体方向 无衬线正文 + 衬线展示标题 / 装饰手法 极细分割线、大量留白、低饱和点缀
- **应用类型**: Content / Gallery —— 以图片网格为核心，顶部导航 + 筛选 + 灯箱浏览

## 3. Color System

**色彩关系**: 暖白展墙背景 + 墨黑标题文字 + 深炭灰主交互 + 极浅灰卡片/边界 + 暖金微量点缀
**配色设计理由**: 模拟美术馆白墙展陈氛围，背景用暖白而非冷白让图片更有温度；primary 用深炭灰而非纯黑，减少刺眼感；accent 暖金色只用于筛选激活态和少量装饰，营造高级画廊的精致感
**主色推导**: 从画廊/美术馆语义出发，墙面是暖白、画框/文字是深墨色、金属挂钩/射灯是暖金；primary 承担导航与主交互，克制不抢图片风头
**使用比例**: 70% 中性(暖白+深灰) / 25% 辅助(浅灰层次) / 5% primary+accent；图片是视觉主体，UI 元素退到背景

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(40 20% 97%) | 暖白展墙背景，略带米色温度 |
| card | `--card` | `bg-card` | hsl(0 0% 100%) | 纯白卡片承载图片，如画纸般干净 |
| text | `--foreground` | `text-foreground` | hsl(24 10% 12%) | 深墨色标题正文，柔和不刺眼 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(24 5% 45%) | 中灰辅助文字，低干扰 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(24 10% 18%) | 深炭灰主交互，CTA 与激活态 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(40 20% 97%) | 主色上的暖白文字 |
| accent | `--accent` | `bg-accent` | hsl(36 30% 92%) | 暖金浅底，hover/选中态 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(24 10% 20%) | accent 上的深墨文字 |
| border | `--border` | `border-border` | hsl(30 8% 88%) | 极浅暖灰边界，几乎隐形 |

**语义色提示**: 无额外语义色；筛选激活用 primary 文字 + accent 背景；灯箱关闭/切换按钮用半透明白底 + 白图标，与深色蒙层形成对比

## 4. 字体与节奏

- **font-display**: Playfair Display —— 衬线字体带来美术馆展览标题的经典与高级感，只用于页面大标题
- **font-body**: Inter + Noto Sans SC —— 现代无衬线保证正文和导航的清晰可读性
- **字号**: H1 text-5xl md:text-6xl (Playfair Display)；H2 text-2xl (Inter)；body text-base；muted text-sm
- **圆角**: 小 (rounded-md) —— 图片卡片轻微圆角，接近真实画框的直角感但更柔和

## 5. 全局布局契约

- **Reference Layout Use**: 按需求结构推导
- **Page / Section Order**: 顶部导航(标题+分类筛选) → 画廊网格主区 → 灯箱(模态) → 页脚
- **Standard Content Zone**: `max-w-7xl` + `mx-auto` —— 画廊需要足够宽度展示多列图片，大屏 4-5 列舒适
- **Shell / Frame Alignment**: 内容区与导航同宽对齐，统一在 max-w-7xl 容器内
- **Padding & Rhythm**: `px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20`，垂直间距保持 8px 倍数，区块间用 py-12~20 营造呼吸感
- **Full-bleed Zones**: 无全宽区域；灯箱蒙层全屏，但图片内容受 max-w-5xl 约束
- **Local Narrowing**: 无；画廊网格利用全宽
- **Overflow Strategy**: 筛选标签行在移动端使用 `overflow-x-auto` 横向滚动
- **Flexibility Boundary**: 允许移动端列数(1-2列)、卡片间距、padding 微调；不允许切换圆角、主色、字体风格

## 6. 视觉与动效

- **装饰**: 极细水平分割线、大量留白、暖金微点缀
- **阴影/边界**: 轻 —— 默认无阴影，hover 时出现柔和底部柔光阴影模拟射灯效果
- **动效**: 精致克制 —— 图片加载 fade-in + 轻微上移；hover 时图片 1.03 倍缩放 + 卡片上浮 4px + 底部柔光渐现；滚动渐入用 IntersectionObserver 分批触发；灯箱打开/关闭用 backdrop 淡入 + 图片缩放过渡

## 7. 组件原则

- 导航链接默认 textMuted，当前分类用 primary 文字 + accent 下划线
- 筛选按钮用 pill 形态，默认 ghost 风格，激活态 bg-accent + text-accent-foreground
- 图片卡片默认 overflow-hidden + rounded-md，内部图片 object-cover，hover 时 transform 过渡 300ms ease-out
- 灯箱使用 fixed 全屏蒙层 bg-black/90，图片居中 max-h-[85vh]，左右切换按钮半透明圆形 + hover 不透明
- 所有交互元素必须有 :focus-visible 环(2px solid primary + 2px offset)

## 8. Image Direction

- **Image Role**: 画廊主体内容 —— 图片是页面的绝对主角，UI 只为衬托图片服务
- **Image Art Direction**: 高质量摄影作品集合，涵盖建筑、自然、人像、静物、抽象五个分类；统一使用柔和自然光或影棚光，色调偏暖低饱和，构图讲究有呼吸感；避免过度 HDR、过度锐化、廉价滤镜感
- **Image Prompt Keywords**: fine art photography, soft natural lighting, warm muted tones, minimalist composition, architectural detail, botanical close-up, portrait study, abstract texture, gallery quality, shallow depth of field
- **Image Avoidance**: 避免通用图库素材感、过度饱和色彩、水印、构图杂乱的照片、明显 AI 生成的不自然细节、低分辨率模糊图

## 9. Anti-patterns

- **Over-designed chrome**: 导航、筛选、页脚视觉权重过高，抢了图片的风头；UI 元素必须退到背景，让图片成为唯一主角
- **Heavy shadows everywhere**: 所有卡片都加厚重阴影，像电商卡片堆；默认无阴影，只在 hover 时用柔光模拟射灯
- **Color explosion**: 用高饱和彩色做筛选标签或按钮；整个画廊 UI 只用暖白、深墨、暖金三个层次
- **Abrupt animations**: 图片加载闪烁、灯箱弹出生硬、hover 缩放幅度过大；所有过渡控制在 200-400ms，ease-out 曲线，幅度克制
- **Masonry chaos**: 瀑布流列宽不一、间距混乱，像拼图游戏；即使瀑布流也要保持列宽一致、间距统一，维持画廊秩序感
- **Lightbox bloat**: 灯箱里堆满信息、评论、分享按钮；灯箱只保留图片、左右切换、关闭按钮，极简沉浸