import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Mail, ShieldCheck, Sparkles, Target, Eye } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero, PageCta } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '关于我们',
  description: `关于${SITE.name}：我们的愿景与使命、产品理念、联系我们。${SITE.name}是一款免费高清影视追剧App。`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="关于我们"
        title="关于蚂蚁影视"
        description="用心做好一款免费、高清、好用的影视App，让每个人都能轻松享受观影的乐趣。"
      />

      <section className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* 简介 */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">我们的故事</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              {SITE.name}
              是一款面向安卓用户的免费高清影视播放应用。我们深知大家追剧观影的热情，也理解「想看却找不到、能看却不流畅」的烦恼。因此，蚂蚁影视把
              「海量资源、高清播放、简单好用」作为出发点和目标，聚合丰富影视内容，持续优化播放体验，让每一位用户都能少一点等待、多一点快乐。
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              从内容聚合到多线路智能切换，从离线缓存到智能搜片，我们始终围绕「免费、高清、省心」打磨产品，力求把一款简单可靠的影视应用做到极致。
            </p>
          </div>

          {/* 理念 */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { icon: Target, t: '使命', d: '让人人都有免费看高清好片的机会，让观影更简单。' },
              { icon: Eye, t: '愿景', d: '成为国内最受欢迎的免费影视播放应用之一。' },
              { icon: Heart, t: '价值观', d: '用户第一、内容合规、体验至上、持续进步。' },
            ].map((v) => (
              <div
                key={v.t}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <v.icon className="h-6 w-6 text-sky-500" />
                <h3 className="mt-3 font-semibold text-slate-900">{v.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{v.d}</p>
              </div>
            ))}
          </div>

          {/* 承诺 */}
          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <span className="flex items-start gap-2 text-sm leading-relaxed text-emerald-700">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                <strong>合规与安全承诺：</strong>
                我们严格遵守相关法律法规，秉持内容合规原则运营，同时注重用户账号与隐私安全。请务必认准蚂蚁影视官方下载渠道。
              </span>
            </span>
          </div>

          {/* 联系 */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">联系我们</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              无论你是对产品有任何建议、遇到使用问题，还是有合作意向，都欢迎随时通过以下方式与我们联系。
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-sky-500" />
                商务合作 / 意见反馈：请访问本页面或通过应用内「意见反馈」入口提交
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-sky-500" />
                厂商：{SITE.name}团队
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/download"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-400 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 transition hover:-translate-y-0.5"
              >
                立即下载
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
              >
                隐私政策
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}