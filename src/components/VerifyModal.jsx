import { useEffect } from 'react';

function VerifyModal({ open, onClose, data }) {
  if (!open || !data?.verification) return null;
  const v = data.verification;
  const etherscan = `https://etherscan.io/tx/${v.tx_hash}`;
  const qrData = encodeURIComponent(etherscan);

  useEffect(()=>{
    const onEsc = (e)=>{ if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', onEsc);
    return ()=> window.removeEventListener('keydown', onEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-white text-xl font-semibold">Blockchain Verification</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-slate-400 text-sm">Transaction</div>
            <a href={etherscan} target="_blank" rel="noreferrer" className="break-all text-cyan-300 hover:underline">{v.tx_hash}</a>
            <div className="mt-4 text-slate-400 text-sm">Contract</div>
            <div className="font-mono text-emerald-400 break-all">{v.contract_address}</div>
            <div className="mt-4 text-slate-400 text-sm">Network</div>
            <div className="text-slate-200">{v.network}</div>
            <div className="mt-4 text-slate-400 text-sm">Verified</div>
            <div className={v.verified ? 'text-emerald-400' : 'text-red-400'}>{v.verified ? 'Yes' : 'No'}</div>
            <div className="mt-4 text-slate-400 text-sm">Timestamp</div>
            <div className="text-slate-200">{new Date(v.timestamp).toLocaleString()}</div>
          </div>
          <div className="flex items-center justify-center">
            <img alt="QR" className="rounded-lg border border-slate-700 bg-white p-2" src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrData}`} />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-slate-200 hover:bg-slate-700">Close</button>
        </div>
      </div>
    </div>
  );
}

export default VerifyModal;
