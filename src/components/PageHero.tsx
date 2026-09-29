import type { ReactNode } from 'react';
import { DownloadButton } from '@/components/DownloadButton';

export function PageHero({
  kicker,
  title,
  description,
  children,
}: {
  kicker?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0B1220]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-sky-500/20 blur-[110px]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-20">
        {kicker && (
          <span className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
            {kicker}
          </span>
        )}
        <h1 className="mt-5 text-3xl font-black text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 py-14">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <h2 className="text-2xl font-black text-white sm:text-3xl">
          马上开始免费观影
        </h2>
        <p className="mt-2 text-sky-50">安卓手机即刻下载，海量影视免费看</p>
        <div className="mt-6 w-full max-w-sm">
          <DownloadButton variant="dark" size="lg" className="w-full" />
        </div>
      </div>
    </section>
  );
}