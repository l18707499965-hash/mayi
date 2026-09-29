import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const baseUrl = SITE.url.replace(/\/$/, '');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE.name}官网 - ${SITE.name}安卓版免费下载 | 免费高清影视追剧App`,
    template: `%s | ${SITE.name}官网`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  generator: '蚂蚁影视',
  category: '影音播放',
  icons: {
    icon: '/ant-icon.png',
    shortcut: '/ant-icon.png',
    apple: '/ant-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  formatDetection: { telephone: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: baseUrl,
    siteName: SITE.name,
    title: `${SITE.name}官网 - 免费高清影视追剧App`,
    description: SITE.description,
    images: [{ url: `${baseUrl}/ant-icon.png`, width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: 'summary',
    title: `${SITE.name}官网 - 免费高清影视追剧App`,
    description: SITE.description,
    images: [`${baseUrl}/ant-icon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0B1220',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.name,
  applicationCategory: 'EntertainmentApplication',
  operatingSystem: 'Android',
  description: SITE.description,
  url: baseUrl,
  image: `${baseUrl}/ant-icon.png`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  fileSize: SITE.downloadFileSize,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* 百度统计 */}
        <Script id="baidu-analytics" strategy="afterInteractive">
          {`
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?${SITE.baiduAnalyticsId}";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}