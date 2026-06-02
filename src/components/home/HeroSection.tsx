'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Building2,
  Heart,
  FlaskConical,
  Pill,
  Stethoscope,
  Dna,
  Activity,
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

const partnerLogos = [
  { name: 'Apex Health Network', icon: Building2 },
  { name: 'CardioLife Centers', icon: Heart },
  { name: 'Omni Diagnostics', icon: FlaskConical },
  { name: 'RxCare Labs', icon: Pill },
  { name: 'Vanguard Medical', icon: Stethoscope },
  { name: 'Helix Genomics', icon: Dna },
  { name: 'Beacon Hospitals', icon: Building2 },
  { name: 'Pulse Therapeutics', icon: Activity },
];

export const HeroSection = () => {
  const t = useTranslations('Hero');
  const [isVisible, setIsVisible] = useState(false);
  const { ref: statsSectionRef } = useInView();

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));

    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src="/images/hero-bg-bridge.jpeg"
          alt="Healthcare Excellence"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-100 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        <div className="absolute inset-0 bg-medical-grid opacity-0" />
      </div>

      <main className="relative z-10 max-w-[1600px] mx-auto px-10 pt-48 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            <h1 className="text-6xl md:text-[80px] lg:text-[85px] font-black text-slate-900 leading-[1.2] tracking-[-0.05em] mb-12">
              <div className="overflow-hidden">
                <span
                  className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {t('title')}
                </span>
              </div>
              <div className="overflow-hidden mt-2">
                <span
                  className={`block bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent transition-all duration-[1200ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? 'translate-y-0' : 'translate-y-full'
                  }`}
                >
                  {t('titleGradient')}
                </span>
              </div>
            </h1>

            <div
              className={`max-w-2xl transition-all duration-1000 delay-700 flex flex-col items-start ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="font-plus-jakarta text-slate-500 text-xl leading-relaxed font-medium mb-16">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-start w-full">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center gap-4 bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white rounded-full px-12 py-8 text-sm uppercase tracking-normal font-black group transition-all duration-300 shadow-[0_8px_30px_rgba(26,86,219,0.15)] hover:from-[#1b5588] hover:to-[#048fa6] h-auto"
                >
                  {t('bookConsultation')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-2 border-slate-200 hover:border-slate-800 hover:bg-slate-50 text-slate-800 rounded-full px-12 py-8 text-sm uppercase tracking-normal font-black flex items-center gap-4 transition-all duration-300 h-auto"
                >
                  {t('exploreSolutions')}
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap gap-8 opacity-40">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-normal">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                  HIPAA Compliant System
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-normal">
                  <Zap className="w-5 h-5 text-brand" />
                  Instant Operations Audit
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Rotating Interlocking Rhombus Grid */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center items-center lg:justify-start lg:-ml-16 xl:-ml-28 lg:-mt-24 xl:-mt-32 mt-12 lg:mt-0">
            <div
              ref={statsSectionRef}
              className="relative w-[600px] h-[600px] scale-[0.55] sm:scale-[0.65] lg:scale-[0.75] xl:scale-[0.85] origin-center lg:origin-left flex items-center justify-center"
            >
              {/* Elegant Tech Panel Background */}
              <div className="absolute inset-0 pointer-events-none rounded-[50px] overflow-hidden border border-slate-100/80 bg-slate-50/40 backdrop-blur-[3px] shadow-[0_30px_100px_rgba(0,0,0,0.02)] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-brand/10 to-transparent opacity-80" />
                <div className="absolute w-[460px] h-[460px] rounded-full border border-slate-200/50 flex items-center justify-center">
                  <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-200/60 flex items-center justify-center">
                    <div className="absolute w-[260px] h-[260px] rounded-full border border-slate-200/40 flex items-center justify-center">
                      <div className="text-[100px] font-black text-slate-100 leading-none select-none tracking-[-0.08em] opacity-80">
                        COB
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  className="absolute bottom-20 left-0 w-full h-24 text-brand-secondary opacity-30"
                  viewBox="0 0 600 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,50 L180,50 L195,30 L210,80 L225,10 L240,50 L360,50 L375,40 L390,70 L405,20 L420,50 L600,50"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Stat 1: Clean Claim Rate */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translate(-40px, -90px) rotate(45deg)',
                  zIndex: 10,
                  width: '340px',
                  height: '220px',
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">
                    {t('stat1Label')}
                  </span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">98%</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,15 L35,15 L40,10 L45,25 L50,5 L55,15 L80,15 L85,10 L90,25 L95,5 L100,15 L120,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 2: Revenue Increase */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translate(40px, -90px) rotate(45deg)',
                  zIndex: 20,
                  width: '340px',
                  height: '220px',
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">
                    {t('stat2Label')}
                  </span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">30%</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="grad-revenue" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="currentColor" stopOpacity={0} />
                        <stop offset="100%" stopColor="currentColor" stopOpacity={0.2} />
                      </linearGradient>
                    </defs>
                    <path d="M0,25 Q15,22 35,15 T75,12 T110,3 L120,0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M0,25 Q15,22 35,15 T75,12 T110,3 L120,0 L120,30 L0,30 Z" fill="url(#grad-revenue)" opacity={0.3} />
                    <circle cx="110" cy="3" r="3" fill="currentColor" className="animate-bounce" />
                  </svg>
                </div>
              </div>

              {/* Stat 3: Fewer Denials */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translate(-40px, 90px) rotate(45deg)',
                  zIndex: 30,
                  width: '340px',
                  height: '220px',
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">
                    {t('stat3Label')}
                  </span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">45%</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,15 Q30,5 60,25 T120,15" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                    <path d="M0,15 C20,15 40,5 60,15 C80,25 100,15 120,15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 4: Happy Clients */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translate(40px, 90px) rotate(45deg)',
                  zIndex: 40,
                  width: '340px',
                  height: '220px',
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">
                    {t('stat4Label')}
                  </span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">500+</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="15" r="5" fill="currentColor" />
                    <circle cx="30" cy="8" r="3" fill="currentColor" opacity={0.6} />
                    <circle cx="90" cy="22" r="3" fill="currentColor" opacity="0.6" />
                    <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.4" />
                    <circle cx="100" cy="10" r="2" fill="currentColor" opacity="0.4" />
                    <line x1="30" y1="8" x2="60" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity={0.5} />
                    <line x1="90" y1="22" x2="60" y2="15" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.5" />
                    <line x1="20" y1="20" x2="30" y2="8" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
                    <line x1="100" y1="10" x2="90" y2="22" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2" opacity="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by Marquee */}
        <div
          className={`w-full mt-4 border-t border-slate-100/80 pt-8 flex flex-col items-center transition-all duration-[1200ms] delay-[1000ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-center text-[12px] font-black text-slate-400 uppercase tracking-normal mb-6">
            Trusted by 100+ Leading Healthcare Networks & Partners
          </p>
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
            <div className="animate-marquee flex gap-24 py-4 items-center shrink-0">
              {partnerLogos.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-90 transition-all duration-300 cursor-pointer"
                >
                  <logo.icon className="w-6 h-6 text-brand" />
                  <span className="text-xl font-black text-slate-800 tracking-tighter">{logo.name}</span>
                </div>
              ))}
              {partnerLogos.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-90 transition-all duration-300 cursor-pointer"
                >
                  <logo.icon className="w-6 h-6 text-brand" />
                  <span className="text-xl font-black text-slate-800 tracking-tighter">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
