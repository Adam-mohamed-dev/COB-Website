'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  ChevronRight,
  Plus,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { SolutionDetail } from '@/lib/solutions-data';
import { getServicePageContent } from '@/lib/service-page-content';
import { getServiceIndex, getSolutionBackgroundImage } from '@/lib/solution-utils';
import { useConsultationStore } from '@/store/useConsultationStore';
import { Link } from '@/i18n/routing';
import { SectionEcgDividers } from '@/components/solutions/SectionEcgDividers';

interface Service {
  slug: string;
  title: string;
  description: string;
}

interface Props {
  locale: string;
  solution: SolutionDetail;
  service: Service;
}

export default function ServiceClientPage({ solution, service }: Props) {
  const t = useTranslations('ServicePage');
  const { selectedSolutions, toggleSolution } = useConsultationStore();

  const serviceIndex = getServiceIndex(solution, service.slug);
  const content = useMemo(
    () => getServicePageContent(solution, service, Math.max(0, serviceIndex)),
    [solution, service, serviceIndex]
  );

  const [heroVisible, setHeroVisible] = useState(false);
  const [overviewVisible, setOverviewVisible] = useState(false);
  const [highlightsVisible, setHighlightsVisible] = useState(false);
  const [processVisible, setProcessVisible] = useState(false);
  const [relatedVisible, setRelatedVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = React.useRef<HTMLElement>(null);
  const overviewRef = React.useRef<HTMLElement>(null);
  const highlightsRef = React.useRef<HTMLElement>(null);
  const processRef = React.useRef<HTMLElement>(null);
  const relatedRef = React.useRef<HTMLElement>(null);
  const ctaRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };

      const observe = (
        ref: React.RefObject<HTMLElement | null>,
        setter: React.Dispatch<React.SetStateAction<boolean>>
      ) => {
        if (!ref.current) return null;
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        }, observerOptions);
        observer.observe(ref.current);
        return observer;
      };

      const observers = [
        observe(heroRef, setHeroVisible),
        observe(overviewRef, setOverviewVisible),
        observe(highlightsRef, setHighlightsVisible),
        observe(processRef, setProcessVisible),
        observe(relatedRef, setRelatedVisible),
        observe(ctaRef, setCtaVisible),
      ].filter(Boolean);

      return () => observers.forEach((o) => o?.disconnect());
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const isSelected = selectedSolutions.includes(solution.slug);
  const otherServices = solution.subCategories.filter((s) => s.slug !== service.slug);
  const bgImageSrc = getSolutionBackgroundImage(solution.slug);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden">
      {/* Hero — starts at page top (navbar offset only) */}
      <section
        ref={heroRef}
        className="relative pb-28 overflow-hidden bg-[#fdfdfd] border-b border-slate-100/50"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImageSrc}
            alt=""
            fill
            className="object-cover object-center opacity-100 mix-blend-multiply"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/88 to-white" />
        </div>

        <div
          className={`relative max-w-[1200px] mx-auto px-6 md:px-10 pt-28 md:pt-32 z-10 transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <nav aria-label={t('breadcrumbLabel')} className="mb-8 md:mb-10">
            <Link
              href={`/solutions/${solution.slug}`}
              className="inline-flex items-center gap-2.5 text-sm font-bold text-slate-600 hover:text-[#246fb1] transition-colors group"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 border border-slate-200/80 shadow-sm group-hover:border-[#246fb1]/30 group-hover:shadow-md transition-all">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              </span>
              {t('backToSuite')}
            </Link>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            <div className="max-w-3xl space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[1.08]">
                {service.title}
              </h1>

              <p className="text-slate-500 font-semibold text-lg md:text-xl leading-relaxed border-l-4 border-[#06b6d4] pl-6">
                {content.tagline}
              </p>

              <p className="text-slate-400 font-medium text-sm md:text-[15px] leading-relaxed max-w-2xl">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-6 opacity-50">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-normal">
                  <ShieldCheck className="w-4 h-4 text-brand" />
                  {t('hipaaBadge')}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-normal">
                  <Zap className="w-4 h-4 text-brand" />
                  {t('slaBadge')}
                </div>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                type="button"
                onClick={() => toggleSolution(solution.slug)}
                className={`w-full sm:w-[280px] h-16 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
                  isSelected
                    ? 'bg-slate-950 text-white hover:bg-slate-900 shadow-slate-900/10 border border-slate-800'
                    : 'bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white hover:from-[#1b5588] hover:to-[#048fa6] shadow-brand/10'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    {t('suiteAdded')}
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    {t('addSuite')}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Outcome metrics strip */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-0 rounded-[24px] border border-slate-100 bg-white/90 backdrop-blur-sm overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            {content.outcomes.map((outcome, idx) => (
              <div
                key={outcome.label}
                className={`p-8 text-center ${
                  idx < content.outcomes.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-slate-100' : ''
                }`}
              >
                <div className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2 bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent">
                  {outcome.value}
                </div>
                <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What this capability delivers */}
      <section ref={overviewRef} className="py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100/50">
        <SectionEcgDividers gradientId="medical-growth-grad-svc-overview" />

        <div
          className={`max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 transition-all duration-1000 delay-200 transform ${
            overviewVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-5/12 bg-gradient-to-br from-[#246fb1] to-[#06b6d4] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

              <div className="absolute right-0 bottom-0 left-0 h-full pointer-events-none overflow-hidden opacity-20">
                <svg className="w-full h-full min-w-[800px] absolute right-0 bottom-[-20%] stroke-white fill-none" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <path d="M 0,100 L 400,100 L 420,80 L 440,160 L 460,20 L 480,100 L 800,100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 0,120 L 400,120 L 420,100 L 440,180 L 460,40 L 480,120 L 800,120" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">
                  {t('overviewTitle')}
                </h2>
                <p className="text-cyan-50 font-medium text-lg leading-relaxed opacity-90">
                  {t('overviewSubtitle', { suite: solution.title })}
                </p>
              </div>
            </div>

            <div className="lg:w-7/12 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src={bgImageSrc}
                  alt=""
                  fill
                  className="object-cover object-center mix-blend-multiply opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
              </div>

              <p className="relative z-10 text-xl md:text-[22px] font-normal text-slate-800 leading-[1.7] tracking-tight">
                {content.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key highlights */}
      <section ref={highlightsRef} className="py-24 bg-white relative overflow-hidden border-b border-slate-100/50">
        <div
          className={`max-w-[1200px] mx-auto px-6 md:px-10 transition-all duration-1000 transform ${
            highlightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">
              {t('highlightsTitle')}
            </h2>
            <p className="text-slate-500 font-medium text-sm leading-relaxed">{t('highlightsSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.highlights.map((item, idx) => (
              <article
                key={item.title}
                className="group relative bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-[#06b6d4]/40 rounded-3xl p-8 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 text-[#246fb1] flex items-center justify-center font-black text-sm mb-6 group-hover:scale-110 transition-transform">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + process */}
      <section ref={processRef} className="py-24 bg-[#f8fafc] border-b border-slate-100/50 relative overflow-hidden">
        <SectionEcgDividers gradientId="medical-growth-grad-svc-process" />
        <div
          className={`max-w-[1200px] mx-auto px-6 md:px-10 relative z-10 transition-all duration-1000 transform ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Deliverables */}
            <div className="bg-white rounded-[2rem] border border-slate-100 p-10 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter mb-3">
                {t('deliverablesTitle')}
              </h2>
              <p className="text-slate-500 font-medium text-sm mb-10">{t('deliverablesSubtitle')}</p>
              <ul className="space-y-5">
                {content.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-slate-700 font-medium text-[15px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter mb-3">
                {t('processTitle')}
              </h2>
              <p className="text-slate-500 font-medium text-sm mb-10">{t('processSubtitle')}</p>
              <ol className="space-y-6">
                {content.processSteps.map((step) => (
                  <li
                    key={step.step}
                    className="relative flex gap-6 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:border-[#246fb1]/20 transition-colors"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#246fb1] to-[#06b6d4] flex items-center justify-center text-white font-black text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Related capabilities */}
      <section ref={relatedRef} className="py-24 bg-white relative overflow-hidden border-b border-slate-100/50">
        <div
          className={`max-w-[1200px] mx-auto px-6 md:px-10 transition-all duration-1000 transform ${
            relatedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
                {t('relatedTitle', { number: solution.suiteNumber })}
              </h2>
              <p className="text-slate-500 font-medium text-sm">{t('relatedSubtitle', { suite: solution.title })}</p>
            </div>
            <Link
              href={`/solutions/${solution.slug}`}
              className="group inline-flex items-center gap-2 text-[#246fb1] font-bold text-sm hover:text-[#06b6d4] transition-colors shrink-0"
            >
              {t('suiteOverview')}
              <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((sub, idx) => (
              <Link
                key={sub.slug}
                href={`/solutions/${solution.slug}/${sub.slug}`}
                className="group relative bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-[#06b6d4]/50 hover:scale-[1.02] transition-all duration-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 text-[#246fb1] flex items-center justify-center font-black text-xs mb-5">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#246fb1] transition-colors mb-3 leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed line-clamp-3">
                    {sub.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-[#06b6d4] transition-colors">
                  {t('exploreCapability')}
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-32 bg-white relative overflow-hidden">
        <SectionEcgDividers gradientId="medical-growth-grad-svc-cta" />
        <div
          className={`max-w-[1100px] mx-auto px-6 md:px-10 relative z-10 transition-all duration-1000 transform ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white rounded-[32px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_-15px_rgba(6,182,212,0.4)] border border-white/20 group hover:shadow-[0_30px_60px_-15px_rgba(36,111,177,0.5)] transition-shadow duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.3),transparent_60%)] pointer-events-none mix-blend-overlay" />

            <div className="absolute right-0 bottom-0 left-1/4 h-full pointer-events-none overflow-hidden opacity-20">
              <svg className="w-full h-full min-w-[800px] absolute right-0 bottom-[-20%] stroke-white fill-none" viewBox="0 0 800 200" preserveAspectRatio="none">
                <path d="M 0,100 L 400,100 L 420,80 L 440,160 L 460,20 L 480,100 L 800,100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 0,120 L 400,120 L 420,100 L 440,180 L 460,40 L 480,120 L 800,120" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>

            <div className="space-y-5 max-w-xl z-10 text-center md:text-left relative">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.1]">
                {t('ctaTitle', { service: service.title })}
              </h2>
              <p className="text-cyan-50 font-medium text-[15px] leading-relaxed opacity-90 max-w-lg">
                {t('ctaDescription')}
              </p>
            </div>

            <div className="z-10 shrink-0 w-full md:w-auto relative">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/40 transition-colors duration-500" />
              <button
                type="button"
                onClick={() => toggleSolution(solution.slug)}
                className={`relative w-full md:w-auto h-16 px-10 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-[0.1em] transition-all duration-500 shadow-xl cursor-pointer hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-slate-950 text-white hover:bg-slate-900 border border-slate-800'
                    : 'bg-white text-[#246fb1] hover:bg-slate-50 border border-white/50'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-5 h-5 text-cyan-400" />
                    {t('suiteAdded')}
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 text-[#06b6d4]" />
                    {t('addSuite')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
