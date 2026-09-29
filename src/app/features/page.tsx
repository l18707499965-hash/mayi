import type { Metadata } from 'next';
import {
  Film,
  MonitorPlay,
  HardDriveDownload,
  Layers,
  Zap,
  ShieldCheck,
  Headset,
  SlidersHorizontal,
  Bookmark,
  Subtitles,
  MessageSquareText,
} from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero, PageCta } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '功能介绍',
  description: `蚂蚁影视功能介绍：海量影视资源、高清极速播放、离线缓存、智能搜片、纯净界面、贴心客服。${SITE.name}安卓版免费下载，畅享免费高清观影。`,
  alternates: { canonical: '/features' },
};

const FEATURES = [
  {
    icon: Film,
    title: '海量影视聚合',
    desc: '电影、电视剧、综艺、动漫、纪录片等海量内容一站式聚合，热门新片、经典老片实时更新，你想看的这里基本都有。',
  },
  {
    icon: Zap,
    title: '极速秒开播放',
    desc: '采用智能分发与多线路切换技术，点击即播，缓冲迅速，观影过程流畅不卡顿。',
  },
  {
    icon: MonitorPlay,
    title: '高清极清画质',
    desc: '支持 1080P 高清及更高画质，清晰呈现每一帧画面细节，大屏观看更震撼。',
  },
  {
    icon: HardDriveDownload,
    title: '离线缓存下载',
    desc: '支持将影片缓存到本地，随时随地离线观看，摆脱流量与网络的束缚。',
  },
  {
    icon: Layers,
    title: '智能搜索分类',
    desc: '强大的搜索引擎配合精准的分类标签与筛选条件，快速锁定你想找的影片。',
  },
  {
    icon: Subtitles,
    title: '多字幕多音轨',
    desc: '支持多字幕切换与多音轨选择，满足不同语言与观看偏好的需求。',
  },
  {
    icon: SlidersHorizontal,
    title: '个性化设置',
    desc: '倍速播放、清晰度切换、音量手势等丰富设置，观影体验更随心。',
  },
  {
    icon: Bookmark,
    title: '收藏与历史',
    desc: '一键收藏喜欢的影视，自动记录播放历史，追剧续看无缝衔接。',
  },
  {
    icon: ShieldCheck,
    title: '安全纯净',
    desc: '严格的内容与安全审核，清爽无打扰的播放环境，守护你的观影体验。',
  },
];

const DETAILS = [
  {
    title: '多线路智能切换',
    desc: '当某条播放线路出现波动时，蚂蚁影视会自动切换至可用线路，最大程度保证播放的稳定与流畅。',
  },
  {
    title: '高清画质随心选',
    desc: '根据网络环境自动匹配合适清晰度，也可手动切换标清、高清、超清等画质，流量与画质由你把控。',
  },
  {
    title: '断点续播',
    desc: '再次打开正在看的剧集，自动从上次播放位置继续，无需手动拖动进度条。',
  },
  {
    title: '跨页面无缝体验',
    desc: '清晰的分类导航与搜索，从想看片到看片只需几步，操作简单直观。',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        kicker="功能介绍"
        title="一个 App，装下你想看的整个世界"
        description="蚂蚁影视集合海量影视资源与专业播放能力，为安卓用户带来免费、高清、流畅的一站式观影体验。"
      />

      {/* 功能卡片 */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md shadow-sky-200">
                  <f.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 细节 */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              更懂你的播放体验
            </h2>
            <p className="mt-3 text-slate-500">
              每一个细节，都为让你看得更省心、更舒服。
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {DETAILS.map((d) => (
              <div
                key={d.title}
                className="flex gap-4 rounded-2xl border border-slate-200 p-6 transition hover:border-sky-200 hover:bg-slate-50/50"
              >
                <MessageSquareText className="mt-0.5 h-6 w-6 shrink-0 text-sky-500" />
                <div>
                  <h3 className="font-semibold text-slate-900">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}