import Link from 'next/link';
import { Download, Smartphone, ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/site';

export function DownloadButton({
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  variant?: 'primary' | 'ghost' | 'dark';
  size?: 'md' | 'lg';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition active:scale-[0.98]';
  const sizes =
    size === 'lg'
      ? 'rounded-2xl px-8 py-4 text-base sm:px-10'
      : 'rounded-full px-6 py-3 text-sm';
  const variants = {
    primary:
      'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-0.5 hover:shadow-sky-400/40',
    ghost:
      'border border-slate-300 bg-white text-slate-800 hover:border-sky-300 hover:text-sky-600',
    dark: 'bg-white text-[#0B1220] shadow-lg hover:-translate-y-0.5',
  };
  return (
    <Link
      href={SITE.downloadUrl}
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      <Download className="h-5 w-5" />
      立即下载安卓版
    </Link>
  );
}

export function DownloadCard() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-sky-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ant-icon.png" alt="蚂蚁影视App图标" className="h-full w-full object-contain" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold text-slate-900">蚂蚁影视</h3>
          <p className="text-sm text-slate-500">
            安卓版 {SITE.version} · {SITE.downloadFileSize}
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
            <ShieldCheck className="h-3.5 w-3.5" />
            安全下载 · 已通过安全检测
          </p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-50 text-sky-500 sm:hidden">
          <Smartphone className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        <DownloadButton size="lg" className="w-full" />
        <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
          支持 {SITE.minAndroid} · APK 直接安装，无需注册即可使用
        </p>
      </div>
    </div>
  );
}