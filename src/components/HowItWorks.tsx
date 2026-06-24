const steps = [
  {
    n: '01',
    title: 'Connect your repo',
    body: 'Install the Nimbus GitHub or GitLab app in under a minute. Zero config to get going.',
  },
  {
    n: '02',
    title: 'Open a pull request',
    body: 'Nimbus reviews your code, spins up a preview, and posts a single, actionable summary.',
  },
  {
    n: '03',
    title: 'Merge with confidence',
    body: 'Auto-deploy, monitor, and roll back in one click. Every release is reversible.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300 font-medium">
            How it works
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            From commit to production in three calm steps.
          </h2>
        </div>

        <div className="relative mt-16 grid md:grid-cols-3 gap-6">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur p-6"
            >
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/30">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
