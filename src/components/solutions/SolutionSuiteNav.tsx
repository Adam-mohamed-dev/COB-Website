'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { solutionsOrderedBySuite } from '@/lib/solution-utils';
import { SolutionIcon } from '@/components/solutions/SolutionIcon';

interface SolutionSuiteNavProps {
  currentSlug: string;
}

export const SolutionSuiteNav = ({ currentSlug }: SolutionSuiteNavProps) => {
  const t = useTranslations('SolutionPage');

  return (
    <section aria-label={t('suiteNavLabel')} className="py-16 md:py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-3">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">
            {t('suiteNavTitle')}
          </h2>
          <p className="text-slate-500 font-medium text-sm leading-relaxed">{t('suiteNavSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 items-end pt-4">
          {solutionsOrderedBySuite.map((suite) => {
            const isActive = suite.slug === currentSlug;

            const cardInner = (
              <>
                <div
                  className={`flex items-center justify-center rounded-2xl mb-4 transition-all duration-300 ${
                    isActive
                      ? 'w-14 h-14 bg-gradient-to-br from-[#246fb1] to-[#06b6d4] text-white shadow-lg shadow-cyan-500/20'
                      : 'w-11 h-11 bg-slate-100 text-[#246fb1] group-hover:bg-gradient-to-br group-hover:from-[#246fb1]/10 group-hover:to-[#06b6d4]/10'
                  }`}
                >
                  <SolutionIcon name={suite.icon} className={isActive ? 'w-6 h-6' : 'w-5 h-5'} />
                </div>
                <span
                  className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${
                    isActive ? 'text-[#06b6d4]' : 'text-slate-400 group-hover:text-[#246fb1]'
                  }`}
                >
                  {t('suiteNumber', { number: suite.suiteNumber })}
                </span>
                <h3
                  className={`font-black tracking-tight leading-snug transition-colors ${
                    isActive
                      ? 'text-base text-slate-900'
                      : 'text-sm text-slate-700 group-hover:text-[#246fb1] line-clamp-3'
                  }`}
                >
                  {suite.title}
                </h3>
                {isActive ? (
                  <span className="mt-3 inline-block text-[10px] font-black uppercase tracking-widest text-[#246fb1] bg-[#246fb1]/10 px-3 py-1 rounded-full">
                    {t('currentSuite')}
                  </span>
                ) : (
                  <span className="mt-3 inline-block h-[26px]" aria-hidden />
                )}
              </>
            );

            const baseCardClass =
              'flex flex-col w-full rounded-3xl border transition-all duration-300 min-h-[200px]';

            if (isActive) {
              return (
                <div
                  key={suite.slug}
                  aria-current="page"
                  className={`${baseCardClass} relative z-10 scale-[1.04] xl:scale-105 -translate-y-2 xl:-translate-y-3 bg-white border-[#06b6d4]/50 shadow-[0_20px_50px_-12px_rgba(6,182,212,0.35)] p-6 xl:p-7`}
                >
                  {cardInner}
                </div>
              );
            }

            return (
              <Link
                key={suite.slug}
                href={`/solutions/${suite.slug}`}
                className={`${baseCardClass} group scale-[0.98] opacity-90 hover:opacity-100 hover:scale-[1.01] hover:-translate-y-1 bg-slate-50/80 border-slate-100 hover:border-[#246fb1]/25 hover:bg-white hover:shadow-md p-5 xl:p-6`}
              >
                {cardInner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
