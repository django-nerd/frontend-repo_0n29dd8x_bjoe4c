import { useMemo, useState } from 'react';

function Results({ data, onOpenVerify }) {
  if (!data) return null;
  const timeline = useMemo(() => data.frame_scores || [], [data]);
  const avg = Math.round((data.deepfake_likelihood || 0) * 100);
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-white text-2xl font-semibold">Analysis Results</h3>
              <p className="text-slate-300">{data.filename}</p>
            </div>
            <div className="text-right">
              <div className="text-slate-400 text-sm">Deepfake Likelihood</div>
              <div className="font-mono text-4xl text-emerald-400">{avg}%</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-slate-400 text-sm mb-2">Frame-by-Frame Confidence</div>
            <div className="relative h-24 w-full overflow-hidden rounded-lg bg-slate-800">
              <div className="absolute inset-0 grid grid-cols-60">
                {timeline.map((f, idx) => (
                  <div key={idx} className="flex items-end">
                    <div style={{height: `${Math.round(f.confidence*100)}%`}} className="w-full bg-gradient-to-t from-emerald-500/80 to-cyan-400/80 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-slate-300">
              Accuracy Benchmark: <span className="font-mono text-emerald-400">95%</span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={onOpenVerify} className="rounded-lg bg-cyan-400/20 px-4 py-2 text-cyan-300 hover:bg-cyan-400/30">View Blockchain Proof</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Results;
