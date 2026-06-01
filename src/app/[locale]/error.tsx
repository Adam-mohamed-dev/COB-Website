'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('ErrorPage');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-[#f8fafc] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="relative flex flex-col items-center text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#246fb1] to-[#06b6d4] flex items-center justify-center mb-8 shadow-[0_8px_30px_rgba(36,111,177,0.2)]">
          <span className="text-4xl font-black text-white">!</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 tracking-[-0.03em] mb-4">{t('title')}</h1>
        <p className="text-slate-500 font-medium text-[16px] leading-relaxed mb-12">{t('description')}</p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-12 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          {t('cta')}
        </button>
      </div>
    </div>
  );
}
