export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] rounded-full bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-transparent blur-3xl" />
        <div className="absolute top-40 -left-40 w-96 h-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black 30%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 text-center">
        {/* Announcement pill */}
        <a
          href="#features"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1 text-xs text-slate-200 hover:bg-white/10 transition"
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            New
          </span>
          <span>Nimbus 2.0 — AI-powered code reviews</span>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 opacity-70" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </a>

        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
          Ship faster.
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
            Sleep better.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
          Nimbus is the developer platform that turns chaotic pull requests into calm,
          confident releases — with AI reviews, instant previews, and one-click rollbacks.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 font-medium px-5 py-3 shadow-xl shadow-violet-500/20 hover:bg-slate-100 transition"
          >
            Start free trial
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 text-white font-medium px-5 py-3 hover:bg-white/10 transition backdrop-blur"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" />
            </svg>
            Watch demo
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          No credit card required · 14-day free trial · Cancel anytime
        </p>

        {/* Product preview */}
        <div className="relative mt-20 mx-auto max-w-5xl">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 rounded-3xl blur-2xl opacity-60" />
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-900/80">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex items-center gap-2 text-xs text-slate-400">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                app.nimbus.dev / pull-requests
              </div>
            </div>
            {/* App body */}
            <div className="grid grid-cols-12 min-h-[26rem]">
              {/* Sidebar */}
              <aside className="col-span-3 border-r border-white/5 p-4 hidden md:block">
                <div className="space-y-1">
                  {['Dashboard', 'Pull Requests', 'Deployments', 'Previews', 'Insights', 'Settings'].map((l, i) => (
                    <div
                      key={l}
                      className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs ${
                        i === 1 ? 'bg-white/10 text-white' : 'text-slate-400'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                      {l}
                    </div>
                  ))}
                </div>
              </aside>
              {/* Main */}
              <div className="col-span-12 md:col-span-9 p-5 text-left">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm font-medium text-white">Pull Requests</div>
                    <div className="text-xs text-slate-400">12 open · 3 awaiting review</div>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">All</div>
                    <div className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300">Mine</div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { title: 'Add OAuth provider for SSO', author: 'maya', status: 'Approved', color: 'emerald' },
                    { title: 'Refactor billing webhooks', author: 'leo', status: 'In review', color: 'amber' },
                    { title: 'Fix flaky e2e tests on staging', author: 'kira', status: 'Changes', color: 'rose' },
                    { title: 'Optimize dashboard query (-42%)', author: 'sam', status: 'Approved', color: 'emerald' },
                  ].map((pr) => (
                    <div
                      key={pr.title}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5 hover:bg-white/[0.06] transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500" />
                        <div className="min-w-0">
                          <div className="text-sm text-white truncate">{pr.title}</div>
                          <div className="text-xs text-slate-400">@{pr.author} · 2h ago</div>
                        </div>
                      </div>
                      <span
                        className={`shrink-0 text-[10px] font-medium uppercase tracking-wide rounded-full px-2 py-0.5 ${
                          pr.color === 'emerald'
                            ? 'bg-emerald-500/15 text-emerald-300'
                            : pr.color === 'amber'
                            ? 'bg-amber-500/15 text-amber-300'
                            : 'bg-rose-500/15 text-rose-300'
                        }`}
                      >
                        {pr.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
