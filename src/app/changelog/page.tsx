import type { Metadata } from 'next';
import { Sparkles, Wrench, ArrowUp } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero, PageCta } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '版本更新',
  description: `蚂蚁影视安卓版更新日志，了解最新版本功能与优化内容。当前版本 ${SITE.version}。${SITE.name}官网。`,
  alternates: { canonical: '/changelog' },
};

const LOGS: {
  version: string;
  date: string;
  tag: string;
  notes: string[];
}[] = [
  {
    version: 'v3.2.0',
    date: '2026-09-20',
    tag: '新功能',
    notes: [
      '新增离线下载缓存功能，支持无网络离线观看。',
      '优化多线路智能切换，播放更稳定流畅。',
      '新增断点续播，再次进入自动续看。',
      '修复部分机型播放闪退问题。',
    ],
  },
  {
    version: 'v3.1.0',
    date: '2026-08-05',
    tag: '优化',
    notes: [
      '大幅提升搜索与分类筛选响应速度。',
      '新增个人收藏与播放历史管理。',
      '优化界面交互与视觉体验。',
    ],
  },
  {
    version: 'v3.0.0',
    date: '2026-06-18',
    tag: '重要更新',
    notes: [
      '全新改版，整体界面焕然一新。',
      '接入更多高清影视资源，内容更丰富。',
      '优化启动速度与资源占用。',
    ],
  },
  {
    version: 'v2.8.0',
    date: '2026-04-02',
    tag: '优化',
    notes: [
      '新增倍速播放与亮度/音量手势控制。',
      '修复部分剧集无法加载的问题。',
      '改进缓存清理机制。',
    ],
  },
  {
    version: 'v2.5.0',
    date: '2026-01-10',
    tag: '功能',
    notes: [
      '新增多字幕多音轨支持。',
      '优化播放内核，提升高清播放稳定性。',
    ],
  },
];

const TAG_COLORS: Record<string, string> = {
  新功能: 'bg-emerald-100 text-emerald-700',
  优化: 'bg-sky-100 text-sky-700',
  重要更新: 'bg-amber-100 text-amber-700',
  功能: 'bg-violet-100 text-violet-700',
};

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        kicker="版本更新"
        title="更新日志"
        description="蚂蚁影视持续迭代，持续进步。以下为各版本更新记录。"
      />

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="relative space-y-6 before:absolute before:left-[118px] before:top-2 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-slate-200 sm:before:block">
            {LOGS.map((log) => (
              <div
                key={log.version}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-lg font-bold text-slate-900">
                    {SITE.name} {log.version}
                  </h2>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TAG_COLORS[log.tag] ?? 'bg-slate-100 text-slate-600'}`}
                  >
                    {log.tag}
                  </span>
                  <span className="text-xs text-slate-400">{log.date}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {log.notes.map((n) => (
                    <li key={n} className="flex gap-2 text-sm text-slate-600">
                      <ArrowUp className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            <Sparkles className="h-5 w-5 text-sky-500" />
            保持更新，就是保持最好的观影体验。更多功能持续开发中。
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}