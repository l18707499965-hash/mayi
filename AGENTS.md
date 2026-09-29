# AGENTS.md

## 项目概览

蚂蚁影视（Ant Movie）官网 —— 一个面向「免费高清影视追剧 App」的品牌介绍与安卓 APK 下载网站。目标用户为国内安卓用户，核心转化点是「下载官方 APK」。

技术栈：Next.js 16 (App Router) + React 19 + TypeScript 5 + Tailwind CSS 4 + shadcn/ui。

### 主要页面
- `/` 首页：Hero、数据、功能、下载 CTA、FAQ 预览
- `/features` 功能介绍
- `/download` 下载中心（安装指南）
- `/help` 使用帮助
- `/faq` 常见问题（含 FAQPage 结构化数据）
- `/about` 关于我们
- `/changelog` 版本更新
- `/privacy` 隐私政策

### SEO 文件
- `/robots.txt`：由 `src/app/robots.ts` 生成
- `/sitemap.xml`：由 `src/app/sitemap.ts` 生成（force-static）
- `/site.webmanifest`：`public/site.webmanifest`
- JSON-LD 结构化数据：SoftwareApplication（根布局）+ FAQPage（首页与 FAQ）
- 百度统计：`src/app/layout.tsx` 中 `next/script` 注入，ID 配置于 `src/lib/site.ts`

## 关键配置（src/lib/site.ts）

所有站点级常量集中于此，修改前先改这里：
- `SITE.name` / `SITE.url`（生产域名通过 `NEXT_PUBLIC_SITE_URL` 或 `COZE_PROJECT_DOMAIN_DEFAULT` 注入）
- `SITE.downloadUrl`：**安卓 APK 下载链接**
- `SITE.baiduAnalyticsId`：百度统计 ID
- `SITE.version`、`SITE.downloadFileSize`、`SITE.minAndroid`

## 命令

- 安装依赖：`pnpm install`
- 开发：`pnpm dev`（端口由 `DEPLOY_RUN_PORT` 决定）
- 构建：`pnpm build`
- 启动生产：`pnpm start`
- 检查：`pnpm ts-check` / `pnpm lint` / `pnpm validate`

## 编码规范

- 仅使用 pnpm 作为包管理器。
- 遵循 TS strict，禁止隐式 `any`；函数参数/返回值/事件对象需明确类型。
- 禁止在 JSX 中直接使用 `window`/`Date.now()`/`Math.random()` 等动态值（需 `use client` + `useEffect`/`useState`）。
- Hydration 防范：客户端组件（Header）使用 `useEffect` 处理滚动与菜单状态。
- 布局组件位于 `src/components/layout/`，通用下载组件 `src/components/DownloadButton.tsx`、页面 Hero/CTA `src/components/PageHero.tsx`。
- 图片素材使用 `public/ant-icon.png`（App 图标：蓝色播放按钮），勿替换或删除。

## 设计

详见 `DESIGN.md`：主色天空蓝（#2E86F9 系），深色电影底 #0B1220，图标强绑定。