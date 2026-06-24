export default function Testimonial() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <svg viewBox="0 0 24 24" className="mx-auto h-8 w-8 text-violet-400/70" fill="currentColor">
          <path d="M7.17 17q-2.165 0-3.668-1.526T2 11.616q0-1.95 1.225-3.778T6.61 4.5L8 6q-1.665.78-2.77 1.998T3.797 11h.213q1.665 0 2.793 1.155t1.127 2.83Q7.93 16.66 7.17 17m9 0q-2.165 0-3.668-1.526T11 11.616q0-1.95 1.225-3.778T15.61 4.5L17 6q-1.665.78-2.77 1.998T12.797 11h.213q1.665 0 2.793 1.155T16.93 14.985Q16.93 16.66 16.17 17" />
        </svg>

        <blockquote className="mt-6 text-2xl sm:text-3xl font-medium leading-snug tracking-tight text-white">
          "We cut review time by <span className="bg-gradient-to-r from-indigo-300 to-fuchsia-300 bg-clip-text text-transparent">68%</span> and
          shipped twice as many releases last quarter — without a single rollback gone wrong.
          Nimbus is the calmest tool in our stack."
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-semibold">
            EA
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Elena Alvarez</div>
            <div className="text-xs text-slate-400">VP Engineering, Northwind</div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 max-w-2xl mx-auto gap-6">
          {[
            { k: '68%', v: 'Faster reviews' },
            { k: '2.4×', v: 'More deploys' },
            { k: '99.99%', v: 'Uptime' },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-white/10 bg-white/[0.03] py-5">
              <div className="text-2xl sm:text-3xl font-semibold text-white">{s.k}</div>
              <div className="mt-1 text-xs text-slate-400">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
