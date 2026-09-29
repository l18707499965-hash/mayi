import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ShieldCheck,
  Smartphone,
  HardDrive,
  Rocket,
  CheckCircle2,
  HelpCircle,
  FileWarning,
} from 'lucide-react';
import { SITE } from '@/lib/site';
import { DownloadButton } from '@/components/DownloadButton';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '下载中心 - 安卓版免费下载',
  description: `蚂蚁影视安卓版(APK)免费下载。点击即可安全下载官方安装包，支持${SITE.minAndroid}，安装后免费观看海量高清影视。蚂蚁影视App官网下载中心。`,
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        kicker="下载中心"
        title="下载蚂蚁影视安卓版"
        description="官方 APK 安装包，安全可靠，一键安装，免费畅享海量高清影视。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* 下载卡片 */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
            <div className="flex flex-col items-center gap-5 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-sky-50/50 p-8 sm:flex-row sm:p-10">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl ring-2 ring-sky-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/ant-icon.png"
                  alt="蚂蚁影视App图标"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-slate-900">蚂蚁影视</h2>
                <p className="mt-1 text-sm text-slate-500">
                  安卓版 {SITE.version} · {SITE.downloadFileSize}
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-slate-500 sm:justify-start">
                  <span className="flex items-center gap-1">
                    <Smartphone className="h-3.5 w-3.5 text-sky-500" /> 安卓 (APK)
                  </span>
                  <span className="flex items-center gap-1">
                    <Rocket className="h-3.5 w-3.5 text-sky-500" /> 免注册即用
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 p-8 sm:p-10">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
                <span className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>
                    <strong>安全提醒：</strong>请从蚂蚁影视官网或官方渠道下载安装包，认准官方蓝色播放图标，谨防第三方修改版与木马病毒。
                  </span>
                </span>
              </div>

              <DownloadButton size="lg" className="w-full" />

              <p className="pb-2 text-center text-xs text-slate-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <span className="inline-flex items-center gap-1">
                  <HardDrive className="h-3.5 w-3.5" />
                  系统要求：{SITE.minAndroid} · 下载即代表同意《用户协议》
                </span>
              </p>
            </div>
          </div>

          {/* 安装说明 */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900">安装指南</h2>
            <div className="mt-5 space-y-4">
              {[
                { t: '第1步：下载安装包', d: '点击上方「立即下载安卓版」按钮，将 APK 文件下载到手机。' },
                { t: '第2步：允许安装未知来源', d: '若系统提示，需在设置中允许从「此来源」安装应用（仅本次授权）。' },
                { t: '第3步：完成安装并打开', d: '点击安装包完成安装，打开蚂蚁影视即可直接开始免费观影。' },
              ].map((s, i) => (
                <div
                  key={s.t}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{s.t}</h3>
                    <p className="mt-1 text-sm text-slate-500">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 其他提示 */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <HelpCircle className="h-6 w-6 text-sky-500" />
              <h3 className="mt-3 font-semibold text-slate-900">遇到问题？</h3>
              <p className="mt-1 text-sm text-slate-500">
                安装或使用过程中有任何疑问，请前往帮助中心查看。
              </p>
              <Link
                href="/help"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline"
              >
                前往使用帮助
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <CheckCircle2 className="h-6 w-6 text-sky-500" />
              <h3 className="mt-3 font-semibold text-slate-900">查看版本更新</h3>
              <p className="mt-1 text-sm text-slate-500">
                了解最新版本功能与优化内容，第一时间体验新特性。
              </p>
              <Link
                href="/changelog"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline"
              >
                查看更新日志
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-700">
            <span className="flex items-start gap-2">
              <FileWarning className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                <strong>温馨提示：</strong>蚂蚁影视当前仅提供安卓版本，iOS 用户暂无法下载使用。下载前请确认系统满足{' '}
                {SITE.minAndroid} 要求。
              </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}