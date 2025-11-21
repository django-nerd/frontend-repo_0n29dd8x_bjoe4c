import { useEffect, useState } from 'react';

function AdminDashboard() {
  const [stats, setStats] = useState({ analyses: 0, realtime_threats: 0 });
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  useEffect(()=>{
    const load = async () => {
      try {
        const r = await fetch(`${backend}/api/stats`);
        const d = await r.json();
        setStats(d);
      } catch {}
    };
    load();
  }, [backend]);

  return (
    <section id="admin" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Admin Dashboard</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <div className="text-slate-400 text-sm">Total Analyses</div>
            <div className="font-mono text-4xl text-emerald-400">{stats.analyses}</div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <div className="text-slate-400 text-sm">Real-time Threats</div>
            <div className="font-mono text-4xl text-cyan-400">{stats.realtime_threats}</div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <div className="text-slate-400 text-sm">Active Subscriptions</div>
            <div className="font-mono text-4xl text-blue-400">—</div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
          <div className="text-slate-300">User activity and subscription management UIs can be wired here to your billing provider (Stripe, etc.).</div>
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
