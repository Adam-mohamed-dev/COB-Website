import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('NotFoundPage');

  return (
    <div className="min-h-[80vh] bg-[#f8fafc] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="relative flex flex-col items-center text-center max-w-md">
        <h1 className="text-[160px] font-black bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent leading-none mb-2 tracking-[-0.05em]">
          404
        </h1>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#246fb1] to-[#06b6d4] mb-8" />
        <h2 className="text-3xl font-black text-slate-900 tracking-[-0.03em] mb-4">
          {t('title')}
        </h2>
        <p className="text-slate-500 font-medium text-[16px] leading-relaxed mb-12">
          {t('description')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-12 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          {t('cta')}
        </Link>
      </div>
    </div>
  );
}
