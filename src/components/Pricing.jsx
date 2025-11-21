function Pricing() {
  const tiers = [
    { name: 'Free', price: 0, features: ['1 analysis/day', 'Basic report', 'Community support'], cta: 'Get Started' },
    { name: 'Pro', price: 29, features: ['50 analyses/mo', 'Priority queue', 'Blockchain proof', 'Email support'], cta: 'Start Pro' },
    { name: 'Enterprise', price: 199, features: ['Unlimited analyses', 'SLA & SSO', 'Custom models', 'On-chain registry'], cta: 'Contact Sales' },
  ];
  return (
    <section id="pricing" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Pricing</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.name==='Pro' ? 'border-emerald-400' : 'border-slate-700'} bg-slate-900/60 p-6`}>
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold text-white">{t.name}</div>
                {t.name==='Pro' && <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Most Popular</span>}
              </div>
              <div className="mt-4 text-4xl font-mono text-emerald-400">{t.price===0? 'Free' : `$${t.price}`}<span className="text-slate-400 text-base">{t.price===0? '' : '/mo'}</span></div>
              <ul className="mt-4 space-y-2 text-slate-300">
                {t.features.map((f, i)=> (
                  <li key={i} className="flex items-center gap-2"><span className="text-emerald-400">▸</span>{f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-lg px-4 py-2 font-semibold ${t.name==='Pro' ? 'bg-emerald-500 text-slate-900 hover:bg-emerald-400' : 'border border-slate-700 text-slate-200 hover:bg-slate-800'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;
