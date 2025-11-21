function HowItWorks() {
  const steps = [
    {
      title: 'Upload Video',
      desc: 'Drop an MP4/AVI and we extract temporal-spatial features.',
    },
    {
      title: 'Dual-Stream AI Analysis',
      desc: 'CNN encodes frames while LSTM models temporal dynamics for deepfake detection.',
    },
    {
      title: 'Blockchain Provenance Check',
      desc: 'We verify the original media hash against Ethereum provenance records.',
    },
  ];
  return (
    <section id="how" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">How It Works</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
              <div className="text-emerald-400 text-sm">Step {i+1}</div>
              <div className="mt-2 text-xl font-semibold text-white">{s.title}</div>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
