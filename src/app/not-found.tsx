import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* ECG Divider Top */}
      <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-20">
        <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="root-404-ecg" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#246fb1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#246fb1" />
            </linearGradient>
          </defs>
          <path d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10" stroke="url(#root-404-ecg)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative flex flex-col items-center text-center max-w-md">
        <h1 className="text-[160px] font-black bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent leading-none mb-2 tracking-[-0.05em]">
          404
        </h1>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#246fb1] to-[#06b6d4] mb-8" />
        <h2 className="text-3xl font-black text-slate-900 tracking-[-0.03em] mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-500 font-medium text-[16px] leading-relaxed mb-12">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-12 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>

      {/* ECG Divider Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-20">
        <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none">
          <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#root-404-ecg)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
