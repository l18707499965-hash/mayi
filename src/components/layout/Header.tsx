'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { SITE } from '@/lib/site';

const NAV = [
  { href: '/', label: '首页' },
  { href: '/features', label: '功能介绍' },
  { href: '/download', label: '下载中心' },
  { href: '/help', label: '使用帮助' },
  { href: '/faq', label: '常见问题' },
  { href: '/about', label: '关于我们' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-[#0B1220]/90 backdrop-blur-md'
          : 'border-transparent bg-[#0B1220]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 overflow-hidden rounded-full ring-2 ring-sky-400/40">
            <Image
              src="/ant-icon.png"
              alt="蚂蚁影视Logo"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="text-lg font-bold text-white">
            蚂蚁影视
            <span className="ml-1.5 hidden align-middle text-[10px] font-medium text-sky-300/80 sm:inline">
              Ant Movie
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={SITE.downloadUrl}
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:shadow-sky-400/40 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            立即下载
          </Link>
          <button
            type="button"
            aria-label="打开菜单"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/90 transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0B1220] lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={SITE.downloadUrl}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30"
            >
              <Download className="h-4 w-4" />
              立即下载安卓版
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}