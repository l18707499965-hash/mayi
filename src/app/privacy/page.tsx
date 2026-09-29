import type { Metadata } from 'next';
import { ShieldCheck, FileText, Database, Lock } from 'lucide-react';
import { SITE } from '@/lib/site';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: '隐私政策',
  description: `蚂蚁影视隐私政策：介绍我们如何收集、使用与保护用户信息，保障你的隐私安全。${SITE.name}官网。`,
  alternates: { canonical: '/privacy' },
};

const SECTIONS: { icon: typeof ShieldCheck; title: string; body: string[] }[] = [
  {
    icon: FileText,
    title: '一、信息收集',
    body: [
      '蚂蚁影视提供免费影视播放服务，核心观看功能无需注册登录即可使用。',
      '在正常使用过程中，我们可能收集必要的设备信息（如设备型号、系统版本）与基础的匿名使用数据，用于改善播放体验与提升服务稳定性。',
      '我们不会在未经你同意的情况下收集与观影无关的个人敏感信息。',
    ],
  },
  {
    icon: Database,
    title: '二、信息使用',
    body: [
      '所收集的信息仅用于：提供与优化影视播放服务、排查与修复故障、改进产品功能与性能。',
      '我们不会将你的个人信息出售、出租或用于任何与提供服务无关的用途。',
    ],
  },
  {
    icon: Lock,
    title: '三、信息保护',
    body: [
      '我们采取合理的技术与组织措施保护用户信息，防止越权访问、泄露、篡改或丢失。',
      '请从蚂蚁影视官网等官方渠道下载应用，避免使用来历不明的修改版，以防范安全风险。',
    ],
  },
  {
    icon: ShieldCheck,
    title: '四、内容合规',
    body: [
      '本应用原则上仅提供合规的影视内容展示与播放服务，不鼓励也不支持任何侵犯版权或其他合法权益的行为。',
      '如发现内容涉及侵权等问题，欢迎通过官网联系我们，我们将依法及时处理。',
    ],
  },
  {
    icon: Database,
    title: '五、政策更新',
    body: [
      '我们可能适时更新本隐私政策，更新后将在官网或应用内公布。继续使用本应用即视为同意更新后的政策。',
      '本政策最终解释权归蚂蚁影视团队所有。',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="法律政策"
        title="隐私政策"
        description="我们重视并保护每一位用户的隐私。以下是蚂蚁影视关于信息收集、使用与保护的说明。"
      />

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-6">
            {SECTIONS.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                  <s.icon className="h-5 w-5 text-sky-500" />
                  {s.title}
                </h2>
                <div className="mt-3 space-y-2">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-slate-600">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-slate-400">
            感谢你使用 {SITE.name}，祝你观影愉快。
          </p>
        </div>
      </section>
    </>
  );
}