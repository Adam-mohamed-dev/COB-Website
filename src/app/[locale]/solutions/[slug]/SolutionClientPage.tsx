'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronRight, Plus, Check
} from 'lucide-react';
import { SolutionDetail } from '@/lib/solutions-data';
import { getSolutionBackgroundImage } from '@/lib/solution-utils';
import { useConsultationStore } from '@/store/useConsultationStore';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { SolutionSuiteNav } from '@/components/solutions/SolutionSuiteNav';

interface Props {
  solution: SolutionDetail;
}

export default function SolutionClientPage({ solution }: Props) {
  const {
    selectedSolutions,
    toggleSolution,
    setFormOpen
  } = useConsultationStore();

  // Scroll Animation States
  const [heroVisible, setHeroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const [whyChooseVisible, setWhyChooseVisible] = useState(false);
  const [storiesVisible, setStoriesVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  const heroRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const whyChooseRef = React.useRef<HTMLDivElement>(null);
  const storiesRef = React.useRef<HTMLDivElement>(null);
  const ctaRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small timeout to ensure DOM is ready before observing
    const timer = setTimeout(() => {
      const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

      const observerCallback = (setter: React.Dispatch<React.SetStateAction<boolean>>) =>
        new IntersectionObserver(([entry], observer) => {
          if (entry.isIntersecting) {
            setter(true);
            observer.unobserve(entry.target);
          }
        }, observerOptions);

      const heroObs = observerCallback(setHeroVisible);
      const aboutObs = observerCallback(setAboutVisible);
      const servicesObs = observerCallback(setServicesVisible);
      const whyChooseObs = observerCallback(setWhyChooseVisible);
      const storiesObs = observerCallback(setStoriesVisible);
      const ctaObs = observerCallback(setCtaVisible);

      if (heroRef.current) heroObs.observe(heroRef.current);
      if (aboutRef.current) aboutObs.observe(aboutRef.current);
      if (servicesRef.current) servicesObs.observe(servicesRef.current);
      if (whyChooseRef.current) whyChooseObs.observe(whyChooseRef.current);
      if (storiesRef.current) storiesObs.observe(storiesRef.current);
      if (ctaRef.current) ctaObs.observe(ctaRef.current);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const isSelected = selectedSolutions.includes(solution.slug);

  const bgImageSrc = getSolutionBackgroundImage(solution.slug);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 overflow-x-hidden">



      {/* Hero Header Section */}
      <section className="relative pt-44 pb-32 overflow-hidden bg-[#fdfdfd] border-b border-slate-100">
        {/* Immersive Background Layer */}
        <div className="absolute inset-0 z-0 h-full">
          <Image
            src={bgImageSrc}
            alt="Healthcare Excellence"
            fill
            className="object-cover object-center opacity-100 mix-blend-multiply"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white" />
        </div>

        <div
          ref={heroRef}
          className={`relative max-w-[1200px] mx-auto px-10 z-10 transition-all duration-1000 transform ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.05]">
                {solution.title}
              </h1>

              <p className="text-slate-500 font-semibold text-lg md:text-xl leading-relaxed border-l-3 border-[#06b6d4] pl-6">
                {solution.tagline}
              </p>

              <p className="text-slate-400 font-medium text-sm md:text-[15px] leading-relaxed max-w-xl">
                {solution.description}
              </p>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => toggleSolution(solution.slug)}
                className={`w-full lg:w-[280px] h-16 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-wider transition-all duration-300 shadow-md cursor-pointer ${isSelected
                  ? 'bg-slate-950 text-white hover:bg-slate-900 shadow-slate-900/10 border border-slate-800'
                  : 'bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white hover:from-[#1b5588] hover:to-[#048fa6] shadow-brand/10'
                  }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-5 h-5 text-cyan-400" />
                    Selected for Strategy
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" />
                    Add to Strategy Plan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What is this Solution section */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-100/50">
        {/* Technical Top Border ECG Medical-Growth Separator */}
        <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medical-growth-grad-sol1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#246fb1" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#246fb1" />
              </linearGradient>
            </defs>
            <path d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10" stroke="url(#medical-growth-grad-sol1)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,49 L200,49 L210,49 L220,42 L230,56 L240,19 L255,59 L265,49 L450,39 C550,34 650,39 750,29 L760,24 L770,39 L780,9 L795,49 L805,29 L950,24 C1100,19 1250,29 1440,14" stroke="url(#medical-growth-grad-sol1)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Technical Bottom Border ECG Medical-Growth Separator */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#medical-growth-grad-sol1)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54" stroke="url(#medical-growth-grad-sol1)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        <div
          ref={aboutRef}
          className={`max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 transition-all duration-1000 delay-200 transform ${aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">

            {/* Left Column: Vibrant Brand Gradient & Title */}
            <div className="lg:w-5/12 bg-gradient-to-br from-[#246fb1] to-[#06b6d4] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden group">
              {/* Dynamic Overlays */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

              {/* High-Fidelity Background ECG / Telemetry Graph */}
              <div className="absolute right-0 bottom-0 left-0 h-full pointer-events-none overflow-hidden opacity-20">
                <svg className="w-full h-full min-w-[800px] absolute right-0 bottom-[-20%] stroke-white fill-none" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <path d="M 0,100 L 400,100 L 420,80 L 440,160 L 460,20 L 480,100 L 800,100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 0,120 L 400,120 L 420,100 L 440,180 L 460,40 L 480,120 L 800,120" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">
                  What is this Solution?
                </h2>
              </div>
            </div>

            {/* Right Column: Massive Typography & Content */}
            <div className="lg:w-7/12 p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={bgImageSrc}
                  alt="Solution Background"
                  fill
                  className="object-cover object-center mix-blend-multiply opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]" />
              </div>

              <p className="relative z-10 text-xl md:text-[22px] font-normal text-slate-800 leading-[1.7] tracking-tight">
                {solution.aboutText}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sub Categories section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div
          ref={servicesRef}
          className={`max-w-[1200px] mx-auto px-10 transition-all duration-1000 transform ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Services & Capabilities
            </h2>
            <p className="text-slate-400 font-semibold text-sm leading-relaxed">
              Explore the exact technical layers provided under this operations suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.subCategories.map((sub, idx) => (
              <Link
                key={sub.slug}
                href={`/solutions/${solution.slug}/${sub.slug}`}
                className="group relative bg-slate-50/50 hover:bg-white hover:scale-[1.02] border border-slate-100 hover:border-brand/20 transition-all duration-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 text-[#246fb1] flex items-center justify-center font-black text-sm mb-6 group-hover:scale-110 transition-transform">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-brand transition-colors mb-3 leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-slate-400 font-semibold text-xs leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#246fb1] group-hover:text-[#06b6d4] transition-colors">
                  Explore Capability <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose section */}
      <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-slate-100/50 border-b border-slate-100/50">
        {/* Technical Top Border ECG Medical-Growth Separator */}
        <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medical-growth-grad-sol3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#246fb1" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#246fb1" />
              </linearGradient>
            </defs>
            <path d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10" stroke="url(#medical-growth-grad-sol3)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,49 L200,49 L210,49 L220,42 L230,56 L240,19 L255,59 L265,49 L450,39 C550,34 650,39 750,29 L760,24 L770,39 L780,9 L795,49 L805,29 L950,24 C1100,19 1250,29 1440,14" stroke="url(#medical-growth-grad-sol3)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Technical Bottom Border ECG Medical-Growth Separator */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#medical-growth-grad-sol3)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54" stroke="url(#medical-growth-grad-sol3)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>
        <div
          ref={whyChooseRef}
          className={`max-w-[1400px] mx-auto px-6 md:px-10 relative z-10 transition-all duration-1000 transform ${whyChooseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row-reverse">

            {/* Right Column: Vibrant Brand Gradient & Title */}
            <div className="lg:w-5/12 bg-gradient-to-br from-[#246fb1] to-[#06b6d4] p-12 md:p-16 flex flex-col justify-center relative overflow-hidden group">
              {/* Dynamic Overlays */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000" />

              {/* High-Fidelity Background ECG / Telemetry Graph */}
              <div className="absolute right-0 bottom-0 left-0 h-full pointer-events-none overflow-hidden opacity-20">
                <svg className="w-full h-full min-w-[800px] absolute right-0 bottom-[-20%] stroke-white fill-none" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <path d="M 0,100 L 400,100 L 420,80 L 440,160 L 460,20 L 480,100 L 800,100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 0,120 L 400,120 L 420,100 L 440,180 L 460,40 L 480,120 L 800,120" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1]">
                  Why Choose This Solution?
                </h2>
                <p className="text-cyan-50 font-medium text-lg leading-relaxed opacity-90">
                  Unlock immediate velocity and bulletproof administrative frameworks designed for modern clinical success.
                </p>
              </div>
            </div>

            {/* Left Column: Value Proposition List */}
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
              <ul className="relative z-10 space-y-6">
                {solution.whyChoose.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#246fb1]/10 text-[#246fb1] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span className="text-slate-700 font-medium text-lg leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Success Stories section matching landing page light-theme UI */}
      <section className="py-32 bg-white text-slate-900 relative overflow-hidden z-10">
        {/* Accent Radial Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#06b6d4]/5 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#246fb1]/4 to-transparent rounded-full blur-[140px] pointer-events-none" />

        {/* Creative Micro Tech Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

        {/* Technical Bottom Border ECG Medical-Growth Separator */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medical-growth-grad-ss" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#246fb1" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#246fb1" />
              </linearGradient>
            </defs>
            <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#medical-growth-grad-ss)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54" stroke="url(#medical-growth-grad-ss)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        <div
          ref={storiesRef}
          className={`relative z-10 max-w-[1400px] mx-auto px-10 transition-all duration-1000 transform ${storiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="text-center max-w-2xl mx-auto mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 leading-[1.05] mb-8">
              Ecosystem Success Stories
            </h2>
            <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
              Real metrics achieved through direct integration of these tactical workflows.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-16 mt-16 relative z-10">
            {solution.successStories.map((story, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-8 group max-w-[380px] w-full"
              >
                {/* Laptop display mockup */}
                <div className="relative w-full max-w-[280px] transition-transform duration-500 group-hover:-translate-y-2">
                  {/* Laptop Bezel */}
                  <div className="relative bg-slate-950 rounded-t-[14px] p-2 pb-1.5 border-[3px] border-slate-800 shadow-xl shadow-slate-900/10">
                    {/* Camera dot */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-700" />

                    {/* Laptop Display Screen */}
                    <div className="relative aspect-[16/10] bg-slate-900 rounded-[2px] overflow-hidden border border-slate-950">
                      <div className="w-full h-full bg-[#0a0f1d] p-2.5 flex flex-col justify-between text-[6px] text-slate-300 font-sans">
                        {/* Top browser bar */}
                        <div className="flex items-center justify-between border-b border-slate-800/80 pb-1">
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-red-500/80" />
                            <span className="w-1 h-1 rounded-full bg-yellow-500/80" />
                            <span className="w-1 h-1 rounded-full bg-emerald-500/80" />
                            <span className="text-[5px] text-slate-500 font-mono ml-0.5 scale-90 origin-left">cob.health/analytics</span>
                          </div>
                          <span className="text-[5px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-900/60 px-1 rounded-[1.5px] scale-90">LIVE ACTIVE</span>
                        </div>

                        {/* Graphic Dashboard content */}
                        <div className="flex-1 py-1.5 flex flex-col justify-between">
                          {/* Upper row: Mini charts */}
                          <div className="grid grid-cols-2 gap-1">
                            <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                              <div className="text-[4px] text-slate-500 leading-none">OPTIMIZATION</div>
                              <div className="text-[8px] font-black text-emerald-400 mt-0.5 leading-none">{story.metric}</div>
                            </div>
                            <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                              <div className="text-[4px] text-slate-500 leading-none">STATUS</div>
                              <div className="text-[8px] font-black text-cyan-400 mt-0.5 leading-none">SECURE</div>
                            </div>
                          </div>

                          {/* Interactive Analytics Waveform */}
                          <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-between">
                            <div className="flex justify-between text-[4px] text-slate-500 leading-none">
                              <span className="truncate max-w-[70px]">{story.metricLabel}</span>
                              <span className="text-emerald-400 font-mono scale-90 origin-right">100% SLA</span>
                            </div>
                            {/* Simulated SVG Graph */}
                            <div className="h-4 w-full mt-0.5">
                              <svg className="w-full h-full" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id={`glow-grad-${solution.slug}-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                  </linearGradient>
                                </defs>
                                <path d="M0,25 L15,22 L30,24 L45,12 L60,18 L75,5 L90,8 L100,2" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                                <path d="M0,25 L15,22 L30,24 L45,12 L60,18 L75,5 L90,8 L100,2 L100,30 L0,30 Z" fill={`url(#glow-grad-${solution.slug}-${idx})`} />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Bottom bar */}
                        <div className="flex items-center justify-between border-t border-slate-900 pt-1 text-slate-600 text-[4.5px] leading-none">
                          <span className="truncate max-w-[65px]">{story.title.split(":")[0]}</span>
                          <span>Sync Engine v4.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Laptop Keyboard Base */}
                  <div className="relative w-[112%] -left-[6%] h-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-[5px] shadow-lg border-t border-slate-600">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-950 rounded-b-[2px] opacity-60" />
                  </div>
                </div>

                {/* Story Details Card */}
                <div className="space-y-2 text-center">
                  <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-[-0.03em] leading-snug px-2">
                    {story.title}
                  </h3>
                  <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-[280px] mx-auto">
                    {story.challenge} {story.solution}
                  </p>
                </div>

                {/* Read Case Study Button */}
                <div>
                  <button
                    onClick={() => setFormOpen(true)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#246fb1] to-[#06b6d4] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer border-0"
                  >
                    Read Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Consultation Cart CTA Banner */}
      <section className="py-32 bg-white relative">
        <div
          ref={ctaRef}
          className={`max-w-[1100px] mx-auto px-10 relative transition-all duration-1000 transform ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          {/* Subtle Ambient Background Glows behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-r from-[#246fb1]/10 to-[#06b6d4]/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white rounded-[32px] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_30px_60px_-15px_rgba(6,182,212,0.4)] border border-white/20 group hover:shadow-[0_30px_60px_-15px_rgba(36,111,177,0.5)] transition-shadow duration-500">

            {/* Creative Micro Tech Dot Matrix */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

            {/* Elegant Radial Lighting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.3),transparent_60%)] pointer-events-none mix-blend-overlay" />

            {/* High-Fidelity Background ECG / Telemetry Graph */}
            <div className="absolute right-0 bottom-0 left-1/4 h-full pointer-events-none overflow-hidden opacity-20">
              <svg className="w-full h-full min-w-[800px] absolute right-0 bottom-[-20%] stroke-white fill-none" viewBox="0 0 800 200" preserveAspectRatio="none">
                <path d="M 0,100 L 400,100 L 420,80 L 440,160 L 460,20 L 480,100 L 800,100" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 0,120 L 400,120 L 420,100 L 440,180 L 460,40 L 480,120 L 800,120" strokeWidth="1" strokeDasharray="4 8" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>

            <div className="space-y-5 max-w-xl z-10 text-center md:text-left relative">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-[1.1]">
                Assemble Your Strategy Session Topics
              </h2>

              <p className="text-cyan-50 font-medium text-[15px] leading-relaxed opacity-90 max-w-lg">
                Add this operations suite to your upcoming consultation. Our clinical operations specialists will generate custom workflows tailored exactly to your selected categories.
              </p>
            </div>

            <div className="z-10 shrink-0 w-full md:w-auto relative">
              {/* Outer glowing ring around button */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:bg-white/40 transition-colors duration-500" />

              <button
                onClick={() => toggleSolution(solution.slug)}
                className={`relative w-full md:w-auto h-16 px-10 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-xs tracking-[0.1em] transition-all duration-500 shadow-xl cursor-pointer hover:-translate-y-1 ${isSelected
                  ? 'bg-slate-950 text-white hover:bg-slate-900 border border-slate-800'
                  : 'bg-white text-[#246fb1] hover:bg-slate-50 border border-white/50'
                  }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-5 h-5 text-cyan-400" />
                    Added to Strategy
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 text-[#06b6d4]" />
                    Add to Strategy Plan
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SolutionSuiteNav currentSlug={solution.slug} />

    </div>
  );
}
