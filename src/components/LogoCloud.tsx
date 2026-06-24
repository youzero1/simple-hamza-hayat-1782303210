const logos = ['Linear', 'Vercel', 'Stripe', 'Notion', 'Figma', 'Loom'];

export default function LogoCloud() {
  return (
    <section id="customers" className="py-16 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 mb-10">
          Trusted by fast-moving teams at
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-10 gap-y-8 items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="text-center text-xl font-semibold tracking-tight text-slate-400/80 hover:text-slate-200 transition-colors"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
