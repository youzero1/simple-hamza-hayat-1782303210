export default function CTA() {
  return (
    <section id="cta" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10 sm:p-16 text-center">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-fuchsia-600/30" />
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-indigo-500/30 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Ship your next release with Nimbus.
          </h2>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
            Set up takes two minutes. The first PR review is free, forever.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#top"
              className="group inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 font-medium px-5 py-3 shadow-xl shadow-black/20 hover:bg-slate-100 transition"
            >
              Start free trial
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 text-white font-medium px-5 py-3 hover:bg-white/15 transition backdrop-blur"
            >
              Read the docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
