import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero, PageCta } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '常见问题',
  description: `蚂蚁影视常见问题解答：下载安装、免费观看、设备支持、视频播放、缓存下载等热门FAQ。${SITE.name}官网。`,
  alternates: { canonical: '/faq' },
};

const FAQS: { q: string; a: string; group: string }[] = [
  {
    group: '下载与安装',
    q: '蚂蚁影视如何下载和安装？',
    a: '在官网首页或下载中心点击「立即下载安卓版」按钮，下载 APK 安装包后，在安卓手机上允许安装未知来源应用并进行安装即可。',
  },
  {
    group: '下载与安装',
    q: '为什么安装时提示「未知来源」或「不允许安装」？',
    a: '这是安卓系统的安全机制。请在系统设置或弹窗中，为本应用「允许安装未知来源应用」并将开关打开，即可继续安装。建议仅从官网下载以保证安全。',
  },
  {
    group: '下载与安装',
    q: '蚂蚁影视是免费的吗？需要注册吗？',
    a: '蚂蚁影视完全免费，无需注册、无需登录、无需充值即可观看海量影视内容。',
  },
  {
    group: '下载与安装',
    q: '支持哪些手机系统？有 iOS 版本吗？',
    a: '蚂蚁影视支持 Android 6.0 及以上系统。目前暂未提供 iOS 版本，敬请期待。',
  },
  {
    group: '使用问题',
    q: '播放卡顿或加载缓慢怎么办？',
    a: '建议切换到稳定的 Wi-Fi 网络，并在播放页尝试切换清晰度或切换播放线路。若仍未解决，可尝试刷新或重启应用。',
  },
  {
    group: '使用问题',
    q: '如何离线下载 / 缓存视频？',
    a: '在影片详情页或播放页点击「下载」或「缓存」按钮，即可将视频缓存到本地，无网络时也可离线观看。',
  },
  {
    group: '使用问题',
    q: '如何找回播放历史？',
    a: '应用会自动记录你的播放历史，在首页或「我的」入口进入播放历史即可查看并继续播放上次追看的剧集。',
  },
  {
    group: '内容与合规',
    q: '为什么我看不到某些影片？',
    a: '受版权与区域等因素影响，部分内容可能存在观看限制或下架。我们会持续更新和优化内容库，带来更丰富、合规的影视资源。',
  },
  {
    group: '内容与合规',
    q: '如何反馈问题或建议？',
    a: '你可以通过官网「关于我们」页面的联系方式，或应用内的意见反馈入口，将你的问题或建议反馈给我们。',
  },
];

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const groups = Array.from(new Set(FAQS.map((f) => f.group)));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        kicker="帮助中心"
        title="常见问题"
        description="收录蚂蚁影视下载、安装与使用中的高频问题，帮助你快速上手。"
      />

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {groups.map((group) => (
            <div key={group} className="mb-10">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                <HelpCircle className="h-5 w-5 text-sky-500" />
                {group}
              </h2>
              <div className="space-y-3">
                {FAQS.filter((f) => f.group === group).map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-2xl border border-slate-200 bg-white open:border-sky-200 open:shadow-md open:shadow-sky-100/50"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 font-medium text-slate-900">
                      <span>{item.q}</span>
                      <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                    </summary>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
            <MessageCircle className="h-5 w-5 text-sky-500" />
            <p className="text-sm">
              还有疑问？前往{' '}
              <Link href="/about" className="font-medium text-sky-600 hover:underline">
                联系我们
              </Link>
              ，我们将尽快为你解答。
            </p>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}