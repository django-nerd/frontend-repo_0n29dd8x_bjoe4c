function Docs() {
  return (
    <section id="docs" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Documentation</h2>
        <div className="mt-8 space-y-8">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">Model Architecture: CNN + LSTM</h3>
            <p className="mt-2 text-slate-300">Frames are sampled and passed through a convolutional encoder (ResNet-like) to extract spatial features. A bi-directional LSTM consumes the feature sequences to capture temporal inconsistencies typical of deepfakes. A final sigmoid head outputs per-frame confidence scores which are smoothed to produce the video-level likelihood.</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">Blockchain Integration</h3>
            <p className="mt-2 text-slate-300">We compute a SHA-256 hash of the original media and verify provenance by comparing against an immutable registry on Ethereum. Smart contracts store content hashes, uploader addresses, and timestamps to prove authenticity without revealing the media itself.</p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
            <h3 className="text-xl font-semibold text-white">API Reference</h3>
            <pre className="mt-3 overflow-auto rounded-lg bg-slate-950 p-4 text-slate-200"><code>{`
POST /api/analyze (multipart/form-data)
  file: video/mp4 or video/avi
  -> { job_id, filename, accuracy, deepfake_likelihood, frame_scores[], analyzed_at, verification }

POST /api/verify (application/json)
  { filehash }
  -> { filehash, contract_address, tx_hash, network, verified, timestamp }

GET /api/stats
  -> { accuracy_benchmark, realtime_threats, analyses, recent[] }
`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Docs;
