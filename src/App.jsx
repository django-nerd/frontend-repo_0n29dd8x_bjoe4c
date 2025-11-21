import { useRef, useState } from 'react';
import Hero from './components/Hero';
import UploadZone from './components/UploadZone';
import HowItWorks from './components/HowItWorks';
import LiveStats from './components/LiveStats';
import Results from './components/Results';
import VerifyModal from './components/VerifyModal';
import Docs from './components/Docs';
import Pricing from './components/Pricing';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const uploadRef = useRef(null);
  const [result, setResult] = useState(null);
  const [verifyOpen, setVerifyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399]" />
            <span className="font-semibold text-white">DeepTrace</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#upload" className="hover:text-white">Upload</a>
            <a href="#how" className="hover:text-white">How It Works</a>
            <a href="#docs" className="hover:text-white">Docs</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#admin" className="hover:text-white">Admin</a>
          </nav>
        </div>
      </header>

      <Hero onAnalyzeClick={() => {
        document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })
      }} />
      <UploadZone onResult={(d)=> setResult(d)} />
      <HowItWorks />
      <LiveStats />
      <Results data={result} onOpenVerify={() => setVerifyOpen(true)} />
      <Docs />
      <Pricing />
      <AdminDashboard />

      <VerifyModal open={verifyOpen} onClose={()=> setVerifyOpen(false)} data={result} />

      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <div className="text-slate-400 text-sm">© {new Date().getFullYear()} DeepTrace</div>
          <div className="text-slate-500 text-sm">Secure your digital integrity</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
