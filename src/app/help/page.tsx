import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  MousePointerClick,
  Settings,
  Search,
  BookOpen,
  FileVideo,
} from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero, PageCta } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '使用帮助',
  description: `蚂蚁影视使用帮助中心：下载安装教程、播放设置、离线缓存、搜片技巧等新手入门与进阶使用指南。${SITE.name}官网。`,
  alternates: { canonical: '/help' },
};

const SECTIONS: {
  icon: typeof Download;
  title: string;
  steps: string[];
}[] = [
  {
    icon: Download,
    title: '下载与安装',
    steps: [
      '在官网点击「立即下载安卓版」获取 APK 安装包。',
      '下载完成后点击文件，如触发安全提示，请在弹窗中允许安装未知来源应用。',
      '安装完成后点击「打开」，即可进入蚂蚁影视开始使用。',
    ],
  },
  {
    icon: Search,
    title: '搜索与找片',
    steps: [
      '在首页顶部的搜索框输入影片名、演员或关键词进行搜索。',
      '也可通过首页的分类导航（电影、电视剧、综艺、动漫等）浏览内容。',
      '结合年代、地区、题材等筛选条件，更快找到心仪的影片。',
    ],
  },
  {
    icon: FileVideo,
    title: '高清播放',
    steps: [
      '进入影片详情页，点击播放按钮开始观看。',
      '播放画面右上角可切换清晰度（标清/高清/超清等）。',
      '如遇卡顿，可在播放页切换播放线路或切换清晰度。',
    ],
  },
  {
    icon: Settings,
    title: '个性化设置',
    steps: [
      '在「我的」或设置页面可管理播放历史、收藏、缓存与离线下载。',
      '支持倍速播放、亮度/音量手势等便捷操作。',
      '可按个人偏好调整播放清晰度与默认线路。',
    ],
  },
  {
    icon: MousePointerClick,
    title: '离线缓存',
    steps: [
      '在影片详情页点击「下载/缓存」按钮添加缓存任务。',
      '在「我的 - 离线缓存」中可查看、删除已缓存内容。',
      '缓存完成后，无网络也能离线观看该影片。',
    ],
  },
  {
    icon: BookOpen,
    title: '账号与数据',
    steps: [
      '蚂蚁影视无需注册登录即可使用核心功能。',
      '播放历史与收藏默认保存在本设备，清理应用数据会导致记录清除。',
      '卸载或更换设备前，请留意本地缓存与历史数据。',
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        kicker="使用帮助"
        title="轻松上手，畅快观影"
        description="从下载安装到高清播放、离线缓存，蚂蚁影视新手使用指南，几步就能上手。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SECTIONS.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-slate-900">{s.title}</h2>
                </div>
                <ol className="mt-4 space-y-3">
                  {s.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-500">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-600">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <p className="text-sm text-slate-500">
              仍在使用中遇到问题？前往{' '}
              <Link href="/faq" className="font-medium text-sky-600 hover:underline">
                常见问题
              </Link>{' '}
              或{' '}
              <Link href="/about" className="font-medium text-sky-600 hover:underline">
                联系我们
              </Link>
              。
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}