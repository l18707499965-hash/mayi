import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: '产品',
    links: [
      { href: '/features', label: '功能介绍' },
      { href: '/download', label: '下载中心' },
      { href: '/changelog', label: '版本更新' },
    ],
  },
  {
    title: '支持',
    links: [
      { href: '/help', label: '使用帮助' },
      { href: '/faq', label: '常见问题' },
      { href: '/privacy', label: '隐私政策' },
      { href: '/about', label: '关于我们' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B1220] text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-sky-400/40">
                <Image
                  src="/ant-icon.png"
                  alt="蚂蚁影视Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-lg font-bold text-white">蚂蚁影视</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed">
              蚂蚁影视是一款免费的安卓高清影视播放应用，聚合海量电影、电视剧、综艺、动漫资源，极速播放、高清画质、离线缓存，热门影视免费在线观看。
            </p>
            <p className="mt-4 text-xs text-slate-500">
              当前版本：{SITE.version} · 支持 {SITE.minAndroid}
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-sky-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name} 版权所有 · 本应用仅供安卓设备下载使用
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-sky-300">
              隐私政策
            </Link>
            <Link href="/faq" className="hover:text-sky-300">
              常见问题
            </Link>
            <Link href="/about" className="hover:text-sky-300">
              联系我们
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}