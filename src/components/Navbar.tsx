import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Customers', href: '#customers' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-slate-950/70 border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30">
            <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 17l6-6 4 4 6-8" />
            </svg>
          </span>
          <span className="font-semibold tracking-tight text-white">Nimbus</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="text-sm text-slate-300 hover:text-white transition-colors">
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white text-slate-900 text-sm font-medium px-4 py-2 hover:bg-slate-100 transition-colors shadow-lg shadow-white/10"
          >
            Get started
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 text-slate-200"
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-300 hover:text-white py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-white text-slate-900 text-sm font-medium px-4 py-2"
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
