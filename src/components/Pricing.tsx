type Plan = {
  name: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    blurb: 'For solo developers and side projects.',
    features: [
      'Up to 3 repositories',
      'AI reviews on every PR',
      'Preview environments',
      'Community support',
    ],
    cta: 'Start free',
  },
  {
    name: 'Team',
    price: '$24',
    cadence: 'per user / month',
    blurb: 'For growing engineering teams that ship daily.',
    features: [
      'Unlimited repositories',
      'AI reviews tuned to your codebase',
      'One-click rollbacks',
      'Flaky test detection',
      'SAML SSO & audit logs',
      'Priority support',
    ],
    cta: 'Start 14-day trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'tailored to you',
    blurb: 'For organizations with advanced needs.',
    features: [
      'Self-hosted or VPC option',
      'Custom data retention',
      'SOC 2 Type II report',
      'Dedicated solutions architect',
      '99.99% uptime SLA',
    ],
    cta: 'Talk to sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300 font-medium">
            Pricing
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Start free. Upgrade when your team is ready. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                p.highlight
                  ? 'border border-violet-400/40 bg-gradient-to-b from-violet-500/10 to-slate-900/40 shadow-2xl shadow-violet-500/10'
                  : 'border border-white/10 bg-white/[0.03]'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.blurb}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-white tracking-tight">{p.price}</span>
                <span className="text-sm text-slate-400">{p.cadence}</span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                  p.highlight
                    ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-white/10'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
