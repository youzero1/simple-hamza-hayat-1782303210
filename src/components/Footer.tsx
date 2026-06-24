const columns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Brand'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'Blog', 'Community', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 17l6-6 4 4 6-8" />
                </svg>
              </span>
              <span className="font-semibold tracking-tight text-white">Nimbus</span>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              The calm command center for shipping code. Built in San Francisco and remote.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <span className="text-sm text-slate-300 hover:text-white transition-colors cursor-default">
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Nimbus Labs, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="inline-flex items-center gap-1.5 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems normal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
