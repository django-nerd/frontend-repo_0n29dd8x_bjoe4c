import { useCallback, useState } from 'react';

function UploadZone({ onResult }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleFiles = useCallback(async (files) => {
    const file = files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const form = new FormData();
      form.append('file', file);
      const res = await fetch(`${backend}/api/analyze`, { method: 'POST', body: form });
      if (!res.ok) throw new Error('Failed to analyze');
      const data = await res.json();
      onResult?.(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setUploading(false);
    }
  }, [backend, onResult]);

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  return (
    <section id="upload" className="relative w-full bg-slate-950 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div
          onDragEnter={() => setDragActive(true)}
          onDragOver={(e)=>{e.preventDefault(); setDragActive(true);}}
          onDragLeave={()=> setDragActive(false)}
          onDrop={onDrop}
          className={`rounded-2xl border-2 border-dashed p-12 text-center transition ${dragActive ? 'border-emerald-400 bg-emerald-500/5' : 'border-slate-700 bg-slate-900/60'}`}
        >
          <p className="text-slate-300">Drag and drop an MP4/AVI file here</p>
          <p className="text-slate-500 text-sm mt-1">or click to select</p>
          <input
            type="file"
            accept="video/mp4,video/x-msvideo"
            className="mt-6 block w-full cursor-pointer rounded-md border border-slate-700 bg-slate-800 p-3 text-slate-200 file:mr-4 file:rounded-md file:border-0 file:bg-emerald-500 file:px-4 file:py-2 file:text-slate-900"
            onChange={(e)=>handleFiles(e.target.files)}
          />
          {uploading && <p className="mt-4 animate-pulse text-emerald-400">Analyzing...</p>}
          {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
      </div>
    </section>
  );
}

export default UploadZone;
