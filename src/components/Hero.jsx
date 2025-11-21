import Spline from '@splinetool/react-spline';

function Hero({ onAnalyzeClick }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-emerald-300 text-sm">
          Deepfake-Driven Cyber Deception
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Secure Your Digital Integrity
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-300">
          Detect AI-generated videos with dual-stream Deep Learning and verify authenticity on Ethereum.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button onClick={onAnalyzeClick} className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">
            Analyze Media
            <svg className="size-5 transition -rotate-45 group-hover:rotate-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
          <a href="#how" className="rounded-xl border border-slate-700 bg-slate-800/60 px-6 py-3 text-slate-200 hover:bg-slate-700/60 transition">How it works</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
