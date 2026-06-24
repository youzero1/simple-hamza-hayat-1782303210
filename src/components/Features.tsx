type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
};

const features: Feature[] = [
  {
    title: 'AI code review',
    description:
      'Catch bugs, security issues, and style nits before a human ever opens the PR. Tuned to your codebase.',
    accent: 'from-indigo-500 to-violet-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 5.4L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-1.6L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Instant previews',
    description:
      'Every pull request gets a live, sharable URL in seconds. Reviewers click and see, not just read.',
    accent: 'from-cyan-500 to-sky-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      </svg>
    ),
  },
  {
    title: 'One-click rollback',
    description:
      'Bad deploy? Roll back the moment you notice, with zero downtime and full audit trail. Sleep easy.',
    accent: 'from-fuchsia-500 to-pink-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 109-9" />
        <path d="M3 4v5h5" />
      </svg>
    ),
  },
  {
    title: 'Flaky test detection',
    description:
      'Nimbus learns which tests are unreliable and quarantines them, so red CI actually means something.',
    accent: 'from-emerald-500 to-teal-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v6l-4 8a4 4 0 003.6 5.7h6.8A4 4 0 0019 16l-4-8V2" />
        <path d="M9 2h6" />
      </svg>
    ),
  },
  {
    title: 'Deploy insights',
    description:
      'Performance, error rate, and user impact for every release — surfaced where you already work.',
    accent: 'from-amber-500 to-orange-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 14l4-4 4 4 5-6" />
      </svg>
    ),
  },
  {
    title: 'Built for teams',
    description:
      'SAML SSO, granular roles, audit logs, and SOC 2 Type II — production-ready from day one.',
    accent: 'from-rose-500 to-red-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300 font-medium">
            Everything you need
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            A calm command center for shipping code.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Nimbus brings reviews, previews, deploys, and insights into a single workflow your
            team will actually enjoy using.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/20 transition"
            >
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-lg`}
              >
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{f.description}</p>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/5 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
