import { useEffect, useState } from 'react';

function LiveStats() {
  const [stats, setStats] = useState({ accuracy_benchmark: 0.95, realtime_threats: 0, analyses: 0 });
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(() => {
    let active = true;
    const fetchStats = async () => {
      try {
        const res = await fetch(`${backend}/api/stats`);
        const data = await res.json();
        if (active) setStats(data);
      } catch {}
    };
    fetchStats();
    const id = setInterval(fetchStats, 4000);
    return () => { active = false; clearInterval(id); };
  }, [backend]);

  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <div className="text-slate-400 text-sm">Detection Accuracy</div>
          <div className="mt-2 font-mono text-4xl text-emerald-400">{Math.round(stats.accuracy_benchmark*100)}%</div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <div className="text-slate-400 text-sm">Real-time Threats Monitored</div>
          <div className="mt-2 font-mono text-4xl text-cyan-400">{stats.realtime_threats}</div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <div className="text-slate-400 text-sm">Analyses Recorded</div>
          <div className="mt-2 font-mono text-4xl text-blue-400">{stats.analyses}</div>
        </div>
      </div>
    </section>
  );
}
export default LiveStats;
