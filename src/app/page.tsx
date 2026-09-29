import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Play,
  Film,
  Clapperboard,
  Tv,
  Zap,
  Download,
  ShieldCheck,
  Smartphone,
  MonitorPlay,
  HardDriveDownload,
  Layers,
  Headset,
  ChevronRight,
  Star,
} from 'lucide-react';
import { SITE } from '@/lib/site';
import { DownloadButton, DownloadCard } from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: `${SITE.name}官网 - 免费高清影视追剧App|安卓版免费下载`,
  description:
    '【蚂蚁影视官网】海量电影、电视剧、综艺、动漫免费在线看，支持高清极速播放、离线缓存、多线路切换。蚂蚁影视安卓版(APK)免费下载，安装即用，无需注册，让你畅享精彩影视内容。',
  alternates: { canonical: '/' },
};

const heroFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '蚂蚁影视是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '蚂蚁影视是一款面向安卓用户的免费高清影视播放应用，聚合海量电影、电视剧、综艺、动漫等影视资源，支持极速播放、高清画质和离线缓存。',
      },
    },
    {
      '@type': 'Question',
      name: '如何下载蚂蚁影视安卓版？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '在蚂蚁影视官网点击「立即下载安卓版」按钮，即可下载官方 APK 安装包，在安卓手机上直接安装后即可免费使用。',
      },
    },
    {
      '@type': 'Question',
      name: '蚂蚁影视收费吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '不收费。蚂蚁影视完全免费，无需充值或注册即可观看海量影视内容。',
      },
    },
  ],
};

const FEATURES = [
  {
    icon: Film,
    title: '海量影视资源',
    desc: '电影、电视剧、综艺、动漫、纪录片一站聚合，热门新片实时更新，一网打尽想看的内容。',
  },
  {
    icon: MonitorPlay,
    title: '高清极速播放',
    desc: '多线路智能切换，支持 1080P 高清画质，秒开播放不卡顿，观影体验流畅顺滑。',
  },
  {
    icon: HardDriveDownload,
    title: '离线缓存',
    desc: '支持视频离线下载缓存，无网也能看，地铁通勤、旅行路上追剧不停歇。',
  },
  {
    icon: Layers,
    title: '智能搜片',
    desc: '强大的搜索引擎与精准的分类标签，想看什么一点即达，告别大海捞针。',
  },
  {
    icon: ShieldCheck,
    title: '纯净无打扰',
    desc: '清爽简洁的界面，持续优化的播放体验，专注观影，少一点打扰多一点好片。',
  },
  {
    icon: Headset,
    title: '贴心客服',
    desc: '遇到任何问题都有客服支持，反馈渠道畅通，只为让你看得更舒心。',
  },
];

const STATS = [
  { value: '10000+', label: '海量影视' },
  { value: '1080P', label: '高清画质' },
  { value: '24h', label: '热门实时更新' },
  { value: '0元', label: '完全免费' },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroFaqJsonLd) }}
      />

      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-[#0B1220]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-sky-500/25 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
            <span className="flex h-1.5 w-1.5 rounded-full bg-sky-300" />
            完全免费 · 无需注册 · 即下即用
          </span>

          <div className="relative mt-8 flex h-28 w-28 items-center justify-center">
            <span className="absolute inset-0 animate-ping rounded-[1.6rem] bg-sky-400/30" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ant-icon.png"
              alt="蚂蚁影视App图标"
              className="relative h-28 w-28 overflow-hidden rounded-[1.6rem] object-contain shadow-2xl shadow-sky-500/40"
            />
          </div>

          <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-6xl">
            蚂蚁影视
            <span className="mt-2 block bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-2xl text-transparent sm:text-4xl">
              海量影视，免费高清在线看
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {SITE.name}是一款免费的安卓高清影视播放应用，聚合海量电影、电视剧、综艺、动漫资源，支持极速极清播放、离线缓存、多线路切换，让追剧观影随心所欲。
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <DownloadButton size="lg" />
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Play className="h-5 w-5" />
              了解更多功能
            </Link>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
            <Smartphone className="h-3.5 w-3.5" />
            安卓 APK 安装包 · {SITE.downloadFileSize} · 支持 {SITE.minAndroid}
          </p>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 sm:px-6 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              为什么选择蚂蚁影视？
            </h2>
            <p className="mt-3 text-slate-500">
              从头到尾，为你打造更省心、更顺滑的免费追剧体验。
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-md shadow-sky-200">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DOWNLOAD CTA ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-sky-200/10 blur-2xl" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
          <div className="h-16 w-16 overflow-hidden rounded-2xl ring-4 ring-white/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ant-icon.png" alt="蚂蚁影视图标" className="h-full w-full object-contain" />
          </div>
          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
            现在就下载，开启畅看之旅
          </h2>
          <p className="mt-3 max-w-xl text-sky-50">
            安卓手机用户点击下方按钮即可下载官方安装包，安装后无需注册，海量影视免费看。
          </p>
          <div className="mt-8 w-full max-w-sm">
            <DownloadButton variant="dark" size="lg" className="w-full" />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-sky-100">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5" /> 安全安装包
            </span>
            <span className="flex items-center gap-1">
              <Tv className="h-3.5 w-3.5" /> 免费观看
            </span>
            <span className="flex items-center gap-1">
              <Zap className="h-3.5 w-3.5" /> 极速播放
            </span>
            <span className="flex items-center gap-1">
              <Clapperboard className="h-3.5 w-3.5" /> 高清资源
            </span>
          </div>
        </div>
      </section>

      {/* ===================== FAQ PREVIEW ===================== */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">常见问题</h2>
            <p className="mt-3 text-slate-500">快速了解蚂蚁影视，常见疑问一网打尽。</p>
          </div>
          <div className="mt-10 space-y-3">
            {[
              { q: '蚂蚁影视是免费的吗？', a: '是的，蚂蚁影视完全免费，无需注册、无需充值即可观看海量影视内容。' },
              { q: '如何下载蚂蚁影视安卓版？', a: '在官网点击「立即下载安卓版」按钮，下载 APK 安装包后直接在手机上安装即可。' },
              { q: '支持哪些设备？', a: '蚂蚁影视支持 Android 6.0 及以上版本的安卓手机与平板设备。' },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-sky-200 hover:bg-white"
              >
                <h3 className="flex items-center gap-2 font-semibold text-slate-900">
                  <Star className="h-4 w-4 text-sky-500" /> {item.q}
                </h3>
                <p className="mt-2 pl-6 text-sm leading-relaxed text-slate-500">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1 font-medium text-sky-600 transition hover:gap-2"
            >
              查看全部常见问题 <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DownloadCard />
        </div>
      </section>
    </>
  );
}