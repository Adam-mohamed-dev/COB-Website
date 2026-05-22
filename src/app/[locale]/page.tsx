'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, ArrowRight, ShieldCheck, Zap, FileText, TrendingUp, Activity, FlaskConical, CheckCircle2, Pill, Heart, Building2, Stethoscope, Dna, Bot, MessageSquare, User, Mail, ShoppingBag, Trash2, Plus } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useConsultationStore } from '@/store/useConsultationStore';
import { solutionsData } from '@/lib/solutions-data';

export default function HomePage() {
  const t = useTranslations('Hero');
  const n = useTranslations('Navbar');
  const f = useTranslations('Hero.Form');
  const s = useTranslations('Solutions');
  const w = useTranslations('WhyChoose');
  const ss = useTranslations('SuccessStories');
  const tf = useTranslations('Footer');
  const chat = useTranslations('Chatbot');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showChatGreeting, setShowChatGreeting] = useState(false);
  const { selectedSolutions, isFormOpen, setFormOpen, toggleSolution, removeSolution } = useConsultationStore();
  const [selectedOrgType, setSelectedOrgType] = useState<string>('clinic');
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSolution, setActiveSolution] = useState<'core' | 'revops' | 'practice' | 'specialized'>('core');
  const [activePillar, setActivePillar] = useState<'operator' | 'tech' | 'security' | 'partnerships'>('operator');
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const card1Ref = useRef<HTMLDivElement>(null);
  const [isCard1Visible, setIsCard1Visible] = useState(false);
  const card2Ref = useRef<HTMLDivElement>(null);
  const [isCard2Visible, setIsCard2Visible] = useState(false);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [isCard3Visible, setIsCard3Visible] = useState(false);
  const card4Ref = useRef<HTMLDivElement>(null);
  const [isCard4Visible, setIsCard4Visible] = useState(false);
  const card5Ref = useRef<HTMLDivElement>(null);
  const [isCard5Visible, setIsCard5Visible] = useState(false);
  const card6Ref = useRef<HTMLDivElement>(null);
  const [isCard6Visible, setIsCard6Visible] = useState(false);
  const card7Ref = useRef<HTMLDivElement>(null);
  const [isCard7Visible, setIsCard7Visible] = useState(false);

  const achievementsRef = useRef<HTMLDivElement>(null);
  const [isAchievementsVisible, setIsAchievementsVisible] = useState(false);
  const [achVolume, setAchVolume] = useState(0.0);
  const [achAccuracy, setAchAccuracy] = useState(80.0);
  const [achSpeed, setAchSpeed] = useState(60);
  const [achCapacity, setAchCapacity] = useState(0);

  const [stat1Count, setStat1Count] = useState(0);
  const [stat2Count, setStat2Count] = useState(0);
  const [stat3Count, setStat3Count] = useState(0);
  const [stat4Count, setStat4Count] = useState(0);

  const ssHeaderRef = useRef<HTMLDivElement>(null);
  const [isSsHeaderVisible, setIsSsHeaderVisible] = useState(false);
  const ssCard1Ref = useRef<HTMLDivElement>(null);
  const [isSsCard1Visible, setIsSsCard1Visible] = useState(false);
  const ssCard2Ref = useRef<HTMLDivElement>(null);
  const [isSsCard2Visible, setIsSsCard2Visible] = useState(false);
  const ssCard3Ref = useRef<HTMLDivElement>(null);
  const [isSsCard3Visible, setIsSsCard3Visible] = useState(false);

  const partnerLogos = [
    { name: 'Apex Health Network', icon: Building2 },
    { name: 'CardioLife Centers', icon: Heart },
    { name: 'Omni Diagnostics', icon: FlaskConical },
    { name: 'RxCare Labs', icon: Pill },
    { name: 'Vanguard Medical', icon: Stethoscope },
    { name: 'Helix Genomics', icon: Dna },
    { name: 'Beacon Hospitals', icon: Building2 },
    { name: 'Pulse Therapeutics', icon: Activity }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Auto-open form after 30 seconds if not already opened
    const timer = setTimeout(() => {
      setFormOpen(true);
    }, 30000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Individual Intersection Observers for Solutions Header & Cards
  useEffect(() => {
    const observerOptions = { threshold: 0.15 };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsHeaderVisible(true);
        headerObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const card1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard1Visible(true);
        card1Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card2Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard2Visible(true);
        card2Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card3Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard3Visible(true);
        card3Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card4Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard4Visible(true);
        card4Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card5Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard5Visible(true);
        card5Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card6Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard6Visible(true);
        card6Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const card7Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsCard7Visible(true);
        card7Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const achievementsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsAchievementsVisible(true);
        achievementsObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const ssHeaderObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSsHeaderVisible(true);
        ssHeaderObserver.unobserve(entry.target);
      }
    }, observerOptions);

    const ssCard1Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSsCard1Visible(true);
        ssCard1Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const ssCard2Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSsCard2Visible(true);
        ssCard2Observer.unobserve(entry.target);
      }
    }, observerOptions);

    const ssCard3Observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsSsCard3Visible(true);
        ssCard3Observer.unobserve(entry.target);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (card1Ref.current) card1Observer.observe(card1Ref.current);
    if (card2Ref.current) card2Observer.observe(card2Ref.current);
    if (card3Ref.current) card3Observer.observe(card3Ref.current);
    if (card4Ref.current) card4Observer.observe(card4Ref.current);
    if (card5Ref.current) card5Observer.observe(card5Ref.current);
    if (card6Ref.current) card6Observer.observe(card6Ref.current);
    if (card7Ref.current) card7Observer.observe(card7Ref.current);
    if (achievementsRef.current) achievementsObserver.observe(achievementsRef.current);
    if (ssHeaderRef.current) ssHeaderObserver.observe(ssHeaderRef.current);
    if (ssCard1Ref.current) ssCard1Observer.observe(ssCard1Ref.current);
    if (ssCard2Ref.current) ssCard2Observer.observe(ssCard2Ref.current);
    if (ssCard3Ref.current) ssCard3Observer.observe(ssCard3Ref.current);

    return () => {
      headerObserver.disconnect();
      card1Observer.disconnect();
      card2Observer.disconnect();
      card3Observer.disconnect();
      card4Observer.disconnect();
      achievementsObserver.disconnect();
      ssHeaderObserver.disconnect();
      ssCard1Observer.disconnect();
      ssCard2Observer.disconnect();
      ssCard3Observer.disconnect();
    };
  }, []);

  // Key Milestones & Achievements Counter Animation
  useEffect(() => {
    if (!isAchievementsVisible) return;

    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out quad
      const easeProgress = progress * (2 - progress);

      setAchVolume(easeProgress * 1.2);
      setAchAccuracy(80.0 + easeProgress * (99.8 - 80.0));
      setAchSpeed(Math.round(60 - easeProgress * (60 - 15)));
      setAchCapacity(Math.round(easeProgress * 10));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAchievementsVisible]);

  // Hero Stats Counter Count-up Animation
  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out quad
      const easeProgress = progress * (2 - progress);

      setStat1Count(Math.round(easeProgress * 98));
      setStat2Count(Math.round(easeProgress * 30));
      setStat3Count(Math.round(easeProgress * 45));
      setStat4Count(Math.round(easeProgress * 500));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[200vh] w-full bg-[#fdfdfd] text-slate-900 font-sans overflow-x-hidden">

      {/* Immersive Background Layer */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image
          src="/images/hero-bg-bridge.jpeg"
          alt="Healthcare Excellence"
          fill
          className="object-cover object-center opacity-100 mix-blend-multiply"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        <div className="absolute inset-0 bg-medical-grid opacity-0" />
      </div>



      {/* Creative Layout: Symmetrical Two-Column Hero */}
      <main className="relative z-10 max-w-[1600px] mx-auto px-10 pt-48 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">

            <h1 className="text-6xl md:text-[80px] lg:text-[85px] font-black text-slate-900 leading-[1.2] tracking-[-0.05em] mb-12">
              <div className="overflow-hidden">
                <span className={`block transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  {t('title')}
                </span>
              </div>
              <div className="overflow-hidden mt-2">
                <span className={`block bg-gradient-to-r from-[#246fb1] to-[#06b6d4] bg-clip-text text-transparent transition-all duration-[1200ms] delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
                  {t('titleGradient')}
                </span>
              </div>
            </h1>

            <div className={`max-w-2xl transition-all duration-1000 delay-700 flex flex-col items-start ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-plus-jakarta text-slate-500 text-xl leading-relaxed font-medium mb-16">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-start w-full">
                <Button
                  onClick={() => setFormOpen(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white rounded-full px-12 py-8 text-sm uppercase tracking-normal font-black flex items-center gap-4 group transition-all duration-300 shadow-[0_8px_30px_rgba(26,86,219,0.15)] hover:from-[#1b5588] hover:to-[#048fa6] h-auto"
                >
                  {t('bookConsultation')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>

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

          {/* Right Column: Rotating Interlocking Rhombus Grid with Animation Sequence */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center items-center lg:justify-start lg:-ml-16 xl:-ml-28 lg:-mt-24 xl:-mt-32 mt-12 lg:mt-0">
            <div ref={statsSectionRef} className="relative w-[600px] h-[600px] scale-[0.55] sm:scale-[0.65] lg:scale-[0.75] xl:scale-[0.85] origin-center lg:origin-left flex items-center justify-center">

              {/* Elegant Tech Panel Background Underlay */}
              <div className="absolute inset-0 pointer-events-none rounded-[50px] overflow-hidden border border-slate-100/80 bg-slate-50/40 backdrop-blur-[3px] shadow-[0_30px_100px_rgba(0,0,0,0.02)] flex items-center justify-center">
                {/* Technical grid pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

                {/* Glowing radial meshes */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/5 via-brand/10 to-transparent opacity-80" />

                {/* Concentric Circle Orbits */}
                <div className="absolute w-[460px] h-[460px] rounded-full border border-slate-200/50 flex items-center justify-center">
                  <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-slate-200/60 flex items-center justify-center">
                    <div className="absolute w-[260px] h-[260px] rounded-full border border-slate-200/40 flex items-center justify-center">
                      {/* Logo Mark Watermark */}
                      <div className="text-[100px] font-black text-slate-100 leading-none select-none tracking-[-0.08em] opacity-80">
                        COB
                      </div>
                    </div>
                  </div>
                </div>

                {/* Elegant dynamic ECG curve horizontally crossing the background panel */}
                <svg className="absolute bottom-20 left-0 w-full h-24 text-brand-secondary opacity-30" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,50 L180,50 L195,30 L210,80 L225,10 L240,50 L360,50 L375,40 L390,70 L405,20 L420,50 L600,50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </div>

              {/* Stat 1: Clean Claim Rate */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000 
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translate(-40px, -90px) rotate(45deg)',
                  zIndex: 10,
                  width: '340px',
                  height: '220px'
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">{t('stat1Label')}</span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">{stat1Count}%</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,15 L35,15 L40,10 L45,25 L50,5 L55,15 L80,15 L85,10 L90,25 L95,5 L100,15 L120,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 2: Revenue Increase */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translate(40px, -90px) rotate(45deg)',
                  zIndex: 20,
                  width: '340px',
                  height: '220px'
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">{t('stat2Label')}</span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">{stat2Count}%</div>
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
                className={`rhombus-card absolute transition-opacity duration-1000
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translate(-40px, 90px) rotate(45deg)',
                  zIndex: 30,
                  width: '340px',
                  height: '220px'
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">{t('stat3Label')}</span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">{stat3Count}%</div>
                  <svg className="w-[45%] h-6 mt-3 relative top-[12px] -left-2 mx-auto text-brand-primary opacity-80 overflow-visible" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,15 Q30,5 60,25 T120,15" stroke="currentColor" strokeWidth="2" strokeDasharray="3,3" />
                    <path d="M0,15 C20,15 40,5 60,15 C80,25 100,15 120,15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>

              {/* Stat 4: Happy Clients */}
              <div
                className={`rhombus-card absolute transition-opacity duration-1000
                  ${isVisible ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transform: 'translate(40px, 90px) rotate(45deg)',
                  zIndex: 40,
                  width: '340px',
                  height: '220px'
                }}
              >
                <div className="rhombus-content">
                  <span className="relative left-[18px] text-[11px] font-black text-brand uppercase tracking-normal block text-center whitespace-nowrap mb-2">{t('stat4Label')}</span>
                  <div className="text-5xl font-black text-slate-900 tracking-tighter">{stat4Count}+</div>
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

        {/* Elegant "Trusted by" Infinite Horizontal Marquee Section */}
        <div className={`w-full mt-4 border-t border-slate-100/80 pt-8 flex flex-col items-center transition-all duration-[1200ms] delay-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-center text-[12px] font-black text-slate-400 uppercase tracking-normal mb-6">
            Trusted by 100+ Leading Healthcare Networks & Partners
          </p>
          <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_15%,_black_85%,transparent_100%)]">
            <div className="animate-marquee flex gap-24 py-4 items-center shrink-0">
              {partnerLogos.map((logo, idx) => (
                <div key={`logo-1-${idx}`} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-90 transition-all duration-300 cursor-pointer">
                  <logo.icon className="w-6 h-6 text-brand" />
                  <span className="text-xl font-black text-slate-800 tracking-tighter">{logo.name}</span>
                </div>
              ))}
              {partnerLogos.map((logo, idx) => (
                <div key={`logo-2-${idx}`} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-90 transition-all duration-300 cursor-pointer">
                  <logo.icon className="w-6 h-6 text-brand" />
                  <span className="text-xl font-black text-slate-800 tracking-tighter">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Pristine & Focused Enterprise Solutions Showcases */}
      <section id="solutions" className="relative z-10 py-36 bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* Soft Radial Ambient Brand Blurs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Creative Micro Tech Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

        {/* Dynamic & Sophisticated ECG Medical-Growth Backdrop (Center) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.08] flex items-center">
          <svg className="w-full h-full min-w-[1440px] min-h-[600px]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medical-growth-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#246fb1" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#246fb1" />
              </linearGradient>
            </defs>
            {/* Majestic Central ECG Growth Trend Line */}
            <path d="M-100,500 L200,500 L220,500 L235,480 L250,520 L265,400 L285,600 L300,500 L450,460 C550,430 650,450 750,380 L770,360 L785,340 L800,400 L820,280 L840,460 L855,360 L1000,320 C1100,290 1200,310 1300,220 L1320,200 L1335,180 L1350,240 L1370,120 L1390,300 L1405,200 L1600,150" stroke="url(#medical-growth-grad)" strokeWidth="3" strokeLinecap="round" />
            <path d="M-100,520 L200,520 L220,520 L235,500 L250,540 L265,420 L285,620 L300,520 L450,480 C550,450 650,470 750,400 L770,380 L785,360 L800,420 L820,300 L840,480 L855,380 L1000,340 C1100,310 1200,330 1300,240 L1320,220 L1335,200 L1350,260 L1370,140 L1390,320 L1405,220 L1600,170" stroke="url(#medical-growth-grad)" strokeWidth="1" strokeDasharray="10 8" strokeLinecap="round" opacity="0.6" />

            {/* Glowing Tech Nodes on ECG Peaks */}
            <circle cx="265" cy="400" r="6" fill="#06b6d4" />
            <circle cx="820" cy="280" r="6" fill="#246fb1" />
            <circle cx="1370" cy="120" r="6" fill="#06b6d4" />
            <circle cx="450" cy="460" r="4" fill="#246fb1" />
            <circle cx="1000" cy="320" r="4" fill="#06b6d4" />
          </svg>
        </div>

        {/* Technical Top Border ECG Medical-Growth Separator */}
        <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10" stroke="url(#medical-growth-grad)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,49 L200,49 L210,49 L220,42 L230,56 L240,19 L255,59 L265,49 L450,39 C550,34 650,39 750,29 L760,24 L770,39 L780,9 L795,49 L805,29 L950,24 C1100,19 1250,29 1440,14" stroke="url(#medical-growth-grad)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Technical Bottom Border ECG Medical-Growth Separator */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#medical-growth-grad)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54" stroke="url(#medical-growth-grad)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Subtle Floating Medical Cross Accents */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          {/* Medical Cross 1 */}
          <svg className="absolute top-12 left-16 w-8 h-8 text-[#246fb1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
          </svg>
          {/* Medical Cross 2 */}
          <svg className="absolute bottom-20 left-24 w-12 h-12 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
          </svg>
          {/* Medical Cross 3 */}
          <svg className="absolute top-24 right-20 w-10 h-10 text-[#246fb1]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
          </svg>
          {/* Medical Cross 4 */}
          <svg className="absolute bottom-16 right-36 w-6 h-6 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-10">

          <div ref={headerRef} className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight mb-6">
              {s('title')}
            </h2>
            <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
              {s('description')}
            </p>
          </div>

          {/* 2x2 Symmetrical Creative Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 mt-16 relative z-10">

            {/* Card 1: Core Billing & Compliance */}
            <div ref={card1Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard1Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Sleek Technical Claims Dashboard Mockup */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="brand-grad-1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#246fb1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <rect x="80" y="30" width="240" height="150" rx="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
                <rect x="100" y="60" width="120" height="12" rx="4" fill="#f1f5f9" />
                <rect x="100" y="82" width="80" height="8" rx="3" fill="#f1f5f9" opacity="0.8" />
                <rect x="100" y="98" width="150" height="8" rx="3" fill="#f1f5f9" opacity="0.6" />
                <circle cx="280" cy="66" r="12" fill="#10b981" />
                <path d="M275 66l2.5 2.5 5-5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

                {/* Embedded High Fidelity Analytical Status Card */}
                <rect x="140" y="120" width="180" height="70" rx="16" fill="url(#brand-grad-1)" stroke="#e2e8f0" strokeWidth="1.5" />
                <text x="160" y="150" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">99.2%</text>
                <text x="160" y="170" fill="#e0f2fe" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">CLEAN CLAIM RATE</text>

                {/* Modern graphic line */}
                <path d="M90 140 C110 130 120 150 130 140" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="130" cy="140" r="4" fill="#06b6d4" />
                <path d="M330 100 C340 90 350 110 360 100" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="360" cy="100" r="4" fill="#246fb1" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('core.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('core.description')}
              </p>
              <Link
                href="/solutions/revenue-maximization-protection"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('core.action')}
              </Link>
            </div>

            {/* Card 2: Revenue Operations */}
            <div ref={card2Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard2Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Sleek Optimization Metric Dial Mockup */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="brand-grad-2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#246fb1" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="110" r="80" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
                <path d="M200 30a80 80 0 0180 80h-80z" fill="url(#brand-grad-2)" opacity="0.9" />
                <path d="M200 110h80a80 80 0 01-80 80z" fill="#06b6d4" opacity="0.8" />
                <path d="M200 110v80a80 80 0 01-80-80z" fill="#f8fafc" opacity="0.9" stroke="#e2e8f0" />
                <path d="M120 110a80 80 0 0180-80v80z" fill="#246fb1" opacity="0.1" />

                {/* Embedded Funnel Growth Value */}
                <rect x="145" y="80" width="110" height="60" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
                <text x="168" y="115" fill="#246fb1" fontSize="18" fontWeight="900" fontFamily="sans-serif">$1.4M</text>

                {/* Elegant Trend Line Graph */}
                <path d="M50 180 C80 160 100 190 120 170" stroke="#06b6d4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx="120" cy="170" r="4.5" fill="#06b6d4" />
                <path d="M280 180 C300 170 320 195 340 185" stroke="#246fb1" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx="340" cy="185" r="4.5" fill="#246fb1" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('revops.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('revops.description')}
              </p>
              <Link
                href="/solutions/patient-engagement-growth-ecosystem"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('revops.action')}
              </Link>
            </div>

            {/* Card 3: Practice Management */}
            <div ref={card3Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard3Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Sleek Interoperability Data Hub Network */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="30" width="240" height="150" rx="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
                <line x1="140" y1="30" x2="140" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
                <line x1="200" y1="30" x2="200" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
                <line x1="260" y1="30" x2="260" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />

                {/* Connected network circular flow */}
                <circle cx="200" cy="100" r="35" fill="none" stroke="#246fb1" strokeWidth="4" strokeDasharray="6,4" />
                <path d="M200 65l5-5-5-5" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" />
                <rect x="145" y="145" width="110" height="24" rx="12" fill="#10b981" />
                <text x="160" y="161" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">100% INTEROP</text>

                {/* Elegant floating node metrics */}
                <circle cx="60" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M56 120h8M60 116v8" stroke="#246fb1" strokeWidth="2" strokeLinecap="round" />
                <circle cx="340" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M336 120l8-4-8 8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('practice.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('practice.description')}
              </p>
              <Link
                href="/solutions/practice-infrastructure-strategic-operations"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('practice.action')}
              </Link>
            </div>

            {/* Card 4: Specialized Healthcare */}
            <div ref={card4Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard4Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Sleek Claims Verification Gauge Mockup */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160" cy="110" r="60" fill="#ffffff" opacity="0.6" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
                <circle cx="240" cy="110" r="60" fill="#ffffff" opacity="0.8" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />

                {/* Premium Speed Badge */}
                <rect x="180" y="70" width="40" height="80" rx="20" fill="#246fb1" stroke="#06b6d4" strokeWidth="2" />
                <circle cx="200" cy="90" r="4" fill="#fff" opacity="0.6" />
                <circle cx="195" cy="105" r="6" fill="#fff" opacity="0.8" />
                <circle cx="205" cy="110" r="3" fill="#fff" opacity="0.5" />
                <rect x="220" y="125" width="70" height="30" rx="8" fill="#10b981" />
                <text x="238" y="145" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">2.8s</text>

                {/* Minimalist data streams */}
                <line x1="50" x2="110" y1="170" y2="170" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                <line x1="290" x2="350" y1="170" y2="170" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('specialized.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('specialized.description')}
              </p>
              <Link
                href="/solutions/cob-innovation-lab-enterprise-solutions"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('specialized.action')}
              </Link>
            </div>

            {/* Card 5: Consulting */}
            <div ref={card5Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard5Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Copied from Card 3 for UI consistency */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="80" y="30" width="240" height="150" rx="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
                <line x1="140" y1="30" x2="140" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
                <line x1="200" y1="30" x2="200" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
                <line x1="260" y1="30" x2="260" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />

                <circle cx="200" cy="100" r="35" fill="none" stroke="#06b6d4" strokeWidth="4" strokeDasharray="6,4" />
                <path d="M200 65l5-5-5-5" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
                <rect x="145" y="145" width="110" height="24" rx="12" fill="#246fb1" />
                <text x="160" y="161" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">ADVISORY HUB</text>

                <circle cx="60" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M56 120h8M60 116v8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                <circle cx="340" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
                <path d="M336 120l8-4-8 8" stroke="#246fb1" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('consulting.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('consulting.description')}
              </p>
              <Link
                href="/solutions/executive-consulting-tailored-business-development"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('consulting.action')}
              </Link>
            </div>

            {/* Card 6: Technology */}
            <div ref={card6Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${isCard6Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Copied from Card 4 for UI consistency */}
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="160" cy="110" r="60" fill="#ffffff" opacity="0.6" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
                <circle cx="240" cy="110" r="60" fill="#ffffff" opacity="0.8" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />

                <rect x="180" y="70" width="40" height="80" rx="20" fill="#06b6d4" stroke="#246fb1" strokeWidth="2" />
                <circle cx="200" cy="90" r="4" fill="#fff" opacity="0.6" />
                <circle cx="195" cy="105" r="6" fill="#fff" opacity="0.8" />
                <circle cx="205" cy="110" r="3" fill="#fff" opacity="0.5" />
                <rect x="220" y="125" width="70" height="30" rx="8" fill="#10b981" />
                <text x="238" y="145" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">SYNC</text>

                <line x1="50" x2="110" y1="170" y2="170" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" />
                <line x1="290" x2="350" y1="170" y2="170" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('technology.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
                {s('technology.description')}
              </p>
              <Link
                href="/solutions/software-solutions-technology-platform"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('technology.action')}
              </Link>
            </div>

            {/* Card 7: Outsourcing */}
            <div ref={card7Ref} className={`flex flex-col items-center text-center group transition-all duration-1000 transform lg:col-span-2 max-w-3xl mx-auto ${isCard7Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              <svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Team / Outsourcing Iconography */}
                <rect x="150" y="80" width="100" height="100" rx="50" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
                <circle cx="200" cy="115" r="16" fill="#246fb1" />
                <path d="M180 150 C180 135 220 135 220 150" fill="#246fb1" stroke="#246fb1" strokeWidth="2" strokeLinecap="round" />
                
                <circle cx="140" cy="130" r="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
                <circle cx="140" cy="120" r="12" fill="#06b6d4" />
                <path d="M125 145 C125 135 155 135 155 145" fill="#06b6d4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />

                <circle cx="260" cy="130" r="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
                <circle cx="260" cy="120" r="12" fill="#06b6d4" />
                <path d="M245 145 C245 135 275 135 275 145" fill="#06b6d4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />

                {/* Connecting lines indicating dedicated team integration */}
                <path d="M50 180 C100 180 120 150 140 150" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,6" fill="none" />
                <path d="M350 180 C300 180 280 150 260 150" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,6" fill="none" />
              </svg>
              <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">
                {s('outsourcing.tab')}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-8">
                {s('outsourcing.description')}
              </p>
              <Link
                href="/solutions/dedicated-outsourcing-services"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                {s('outsourcing.action')}
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Direct & Modern Achievements Section */}
      <section id="achievements" ref={achievementsRef} className="relative z-10 py-36 bg-[#fcfdfe] text-slate-900 overflow-hidden border-t border-slate-100/50">

        {/* Immersive Background Layer */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/images/hero-bg1.jpeg"
            alt="Healthcare Excellence Background"
            fill
            className="object-cover object-center opacity-100 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
        </div>

        {/* Soft Radial Ambient Brand Blurs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#06b6d4]/3 to-[#246fb1]/3 rounded-full blur-[130px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#246fb1]/3 to-[#06b6d4]/3 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-10">

          {/* Pristine Modern Section Header */}
          <div className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${isAchievementsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.04em] leading-[1.05] mb-8">
              {w('title')}
            </h2>

            <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
              {w('description')}
            </p>
          </div>

          {/* Direct, Modern 4-Column Metric Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-[32px] border border-slate-100 bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-1000 delay-[200ms] transform ${isAchievementsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}>

            {/* Metric 1 */}
            <div className="relative overflow-hidden p-10 lg:p-12 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 group min-h-[280px]">
              {/* Diagonal Upward Medical-Financial Revenue Trend Wave */}
              <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <svg className="w-full h-full stroke-slate-200/50 group-hover:stroke-brand/15 transition-colors duration-500 fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,100 L 25,85 L 45,78 L 65,48 L 85,38 L 100,10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 0,90 L 100,90 M 0,70 L 100,70 M 0,50 L 100,50 M 0,30 L 100,30" strokeWidth="0.4" strokeDasharray="3 3" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-[13px] font-black text-slate-400 uppercase tracking-[0.1em] mb-8">01 / VOLUMES MANAGED</div>
                <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#246fb1] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent">
                  ${achVolume.toFixed(1)}B+
                </div>
              </div>
              <div className="text-left relative z-10">
                <h3 className="text-lg font-black text-slate-900 tracking-[-0.02em] mb-2">{w('pillar1Title')}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{w('pillar1Desc')}</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="relative overflow-hidden p-10 lg:p-12 border-b md:border-b-0 lg:border-r border-slate-100 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 group min-h-[280px]">
              {/* Diagonal High-Precision Clinical ECG / Heartbeat Wave */}
              <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <svg className="w-full h-full stroke-slate-200/50 group-hover:stroke-brand/15 transition-colors duration-500 fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,85 L 25,70 L 30,70 L 33,35 L 38,90 L 43,65 L 48,65 L 68,50 L 73,15 L 78,80 L 83,45 L 100,30" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-[13px] font-black text-slate-400 uppercase tracking-[0.1em] mb-8">02 / BILLING ACCURACY</div>
                <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#246fb1] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent">
                  {achAccuracy.toFixed(1)}%
                </div>
              </div>
              <div className="text-left relative z-10">
                <h3 className="text-lg font-black text-slate-900 tracking-[-0.02em] mb-2">{w('pillar2Title')}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{w('pillar2Desc')}</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="relative overflow-hidden p-10 lg:p-12 border-b md:border-r border-slate-100 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 group min-h-[280px]">
              {/* Diagonal Rapid Telemetry Wave */}
              <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <svg className="w-full h-full stroke-slate-200/50 group-hover:stroke-brand/15 transition-colors duration-500 fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,90 L 15,90 L 25,75 L 30,55 L 35,85 L 45,80 L 55,55 L 60,25 L 65,70 L 75,65 L 85,40 L 90,10 L 95,55 L 100,45" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-[13px] font-black text-slate-400 uppercase tracking-[0.1em] mb-8">03 / OPERATIONS SPEED</div>
                <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#246fb1] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent">
                  &lt;{achSpeed}m
                </div>
              </div>
              <div className="text-left relative z-10">
                <h3 className="text-lg font-black text-slate-900 tracking-[-0.02em] mb-2">{w('pillar3Title')}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{w('pillar3Desc')}</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="relative overflow-hidden p-10 lg:p-12 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 group min-h-[280px]">
              {/* Diagonal Medical DNA Double Helix Wave */}
              <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
                <svg className="w-full h-full stroke-slate-200/50 group-hover:stroke-brand/15 transition-colors duration-500 fill-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M 0,85 Q 25,60 50,60 T 100,35" strokeWidth="1.2" strokeLinecap="round" />
                  <path d="M 0,60 Q 25,85 50,35 T 100,60" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" />
                  <line x1="15" y1="69" x2="15" y2="76" strokeWidth="0.8" />
                  <line x1="35" y1="62" x2="35" y2="73" strokeWidth="0.8" />
                  <line x1="50" y1="60" x2="50" y2="35" strokeWidth="0.8" />
                  <line x1="65" y1="47" x2="65" y2="58" strokeWidth="0.8" />
                  <line x1="85" y1="41" x2="85" y2="53" strokeWidth="0.8" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="text-[13px] font-black text-slate-400 uppercase tracking-[0.1em] mb-8">04 / CLINICAL CAPACITY</div>
                <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#246fb1] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent">
                  {achCapacity}k+
                </div>
              </div>
              <div className="text-left relative z-10">
                <h3 className="text-lg font-black text-slate-900 tracking-[-0.02em] mb-2">{w('pillar4Title')}</h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{w('pillar4Desc')}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Creative & Immersive Recent Success Stories Section */}
      <section id="success-stories" className="relative z-10 py-36 bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* Soft Radial Ambient Brand Blurs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none z-0" />

        {/* Creative Micro Tech Dot Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

        {/* Technical Top Border ECG Medical-Growth Separator */}
        <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="medical-growth-grad-ss" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#246fb1" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#246fb1" />
              </linearGradient>
            </defs>
            <path d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10" stroke="url(#medical-growth-grad-ss)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,49 L200,49 L210,49 L220,42 L230,56 L240,19 L255,59 L265,49 L450,39 C550,34 650,39 750,29 L760,24 L770,39 L780,9 L795,49 L805,29 L950,24 C1100,19 1250,29 1440,14" stroke="url(#medical-growth-grad-ss)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Technical Bottom Border ECG Medical-Growth Separator */}
        <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
          <svg className="w-full h-full min-w-[1440px]" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50" stroke="url(#medical-growth-grad-ss)" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54" stroke="url(#medical-growth-grad-ss)" strokeWidth="0.8" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-10">

          {/* Section Header */}
          <div ref={ssHeaderRef} className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${isSsHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.04em] leading-[1.05] mb-8">
              {ss('title')}
            </h2>
            <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
              {ss('description')}
            </p>
          </div>

          {/* Grid of Success Stories inspired by laptop display mockup */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative z-10">

            {/* Story 1 */}
            <div ref={ssCard1Ref} className={`flex flex-col items-center text-center space-y-6 group transition-all duration-1000 transform ${isSsCard1Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Laptop mockup */}
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
                          <span className="text-[5px] text-slate-500 font-mono ml-0.5 scale-90 origin-left">cob.health/rcm-analytics</span>
                        </div>
                        <span className="text-[5px] font-black text-emerald-400 bg-emerald-950/80 border border-emerald-900/60 px-1 rounded-[1.5px] scale-90">LIVE SECURE</span>
                      </div>

                      {/* Graphic Dashboard content */}
                      <div className="flex-1 py-1.5 flex flex-col justify-between">
                        {/* Upper row: Mini charts */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Denials</div>
                            <div className="text-[9px] font-black text-emerald-400 mt-0.5 leading-none">-90%</div>
                          </div>
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Clean Rate</div>
                            <div className="text-[9px] font-black text-cyan-400 mt-0.5 leading-none">99.8%</div>
                          </div>
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Prior-Auth</div>
                            <div className="text-[7px] font-black text-[#246fb1] mt-0.5 leading-none">AUTO</div>
                          </div>
                        </div>

                        {/* Interactive Analytics Waveform */}
                        <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-between">
                          <div className="flex justify-between text-[4px] text-slate-500 leading-none">
                            <span>Claims Denial Index</span>
                            <span className="text-emerald-400">Optimization Active</span>
                          </div>
                          {/* Simulated SVG Graph */}
                          <div className="h-4 w-full mt-0.5">
                            <svg className="w-full h-full" viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
                              <defs>
                                <linearGradient id="glow-grad-ss1" x1="0%" y1="0%" x2="0%" y2="100%">
                                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </linearGradient>
                              </defs>
                              <path d="M0,25 L15,22 L30,24 L45,12 L60,18 L75,5 L90,8 L100,2" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
                              <path d="M0,25 L15,22 L30,24 L45,12 L60,18 L75,5 L90,8 L100,2 L100,30 L0,30 Z" fill="url(#glow-grad-ss1)" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="flex items-center justify-between border-t border-slate-900 pt-1 text-slate-600 text-[4.5px] leading-none">
                        <span>Manhattan Cardio Group</span>
                        <span>API Scrubbing v2.1</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Keyboard Base */}
                <div className="relative w-[112%] -left-[6%] h-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-[5px] shadow-lg border-t border-slate-600">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-950 rounded-b-[2px] opacity-60" />
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-[-0.03em] leading-snug px-2">
                  {ss('story1.facility')}
                </h3>
                <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-[240px] mx-auto">
                  {ss('story1.challenge')} {ss('story1.solution')}
                </p>
              </div>

              {/* Read Case Study Button */}
              <div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#246fb1] to-[#06b6d4] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  {ss('cta')}
                </button>
              </div>
            </div>

            {/* Story 2 */}
            <div ref={ssCard2Ref} className={`flex flex-col items-center text-center space-y-6 group transition-all duration-1000 transform ${isSsCard2Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Laptop mockup */}
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
                          <span className="text-[5px] text-slate-500 font-mono ml-0.5 scale-90 origin-left">cob.health/ehr-console</span>
                        </div>
                        <span className="text-[5px] font-black text-[#246fb1] bg-cyan-950/80 border border-cyan-900/60 px-1 rounded-[1.5px] scale-90">EHR SYNC</span>
                      </div>

                      {/* Graphic Dashboard content */}
                      <div className="flex-1 py-1.5 flex flex-col justify-between">
                        {/* Upper row: Mini grid */}
                        <div className="grid grid-cols-2 gap-1">
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px] flex items-center justify-between">
                            <div>
                              <div className="text-[4px] text-slate-500 leading-none">SLA Speed</div>
                              <div className="text-[9px] font-black text-emerald-400 mt-0.5 leading-none">8 Days</div>
                            </div>
                            <span className="text-[4px] text-emerald-500 font-black scale-90">80% Faster</span>
                          </div>
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px] flex items-center justify-between">
                            <div>
                              <div className="text-[4px] text-slate-500 leading-none">Providers</div>
                              <div className="text-[9px] font-black text-cyan-400 mt-0.5 leading-none">Active</div>
                            </div>
                            <span className="text-[4px] text-cyan-500 font-black scale-90">Sync Ok</span>
                          </div>
                        </div>

                        {/* Interactive Scheduler Calendar Grid */}
                        <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-between">
                          <div className="text-[4px] text-slate-500 flex justify-between leading-none">
                            <span>Credentialing Timeline</span>
                            <span className="text-emerald-400">99% Automation</span>
                          </div>
                          {/* Calendar bars */}
                          <div className="space-y-0.5 mt-1">
                            <div className="flex items-center gap-1">
                              <span className="w-5 text-[3.5px] text-slate-400 leading-none">Payer A</span>
                              <div className="flex-1 h-1 bg-slate-800 rounded-[0.5px] overflow-hidden relative">
                                <div className="absolute left-0 top-0 h-full w-2/3 bg-emerald-500 rounded-[0.5px]" />
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-5 text-[3.5px] text-slate-400 leading-none">Payer B</span>
                              <div className="flex-1 h-1 bg-slate-800 rounded-[0.5px] overflow-hidden relative">
                                <div className="absolute left-0 top-0 h-full w-[90%] bg-emerald-500 rounded-[0.5px]" />
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="w-5 text-[3.5px] text-slate-400 leading-none">Payer C</span>
                              <div className="flex-1 h-1 bg-slate-800 rounded-[0.5px] overflow-hidden relative">
                                <div className="absolute left-0 top-0 h-full w-1/2 bg-emerald-500 rounded-[0.5px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="flex items-center justify-between border-t border-slate-900 pt-1 text-slate-600 text-[4.5px] leading-none">
                        <span>Houston Orthopedic Clinic</span>
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

              {/* Headline */}
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-[-0.03em] leading-snug px-2">
                  {ss('story2.facility')}
                </h3>
                <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-[240px] mx-auto">
                  {ss('story2.challenge')} {ss('story2.solution')}
                </p>
              </div>

              {/* Read Case Study Button */}
              <div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#246fb1] to-[#06b6d4] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  {ss('cta')}
                </button>
              </div>
            </div>

            {/* Story 3 */}
            <div ref={ssCard3Ref} className={`flex flex-col items-center text-center space-y-6 group transition-all duration-1000 transform ${isSsCard3Visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}>
              {/* Laptop mockup */}
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
                          <span className="text-[5px] text-slate-500 font-mono ml-0.5 scale-90 origin-left">cob.health/billing-audit</span>
                        </div>
                        <span className="text-[5px] font-black text-cyan-400 bg-cyan-950/80 border border-cyan-900/60 px-1 rounded-[1.5px] scale-90">API HIGH-SPEED</span>
                      </div>

                      {/* Graphic Dashboard content */}
                      <div className="flex-1 py-1.5 flex flex-col justify-between">
                        {/* Upper row: Mini charts */}
                        <div className="grid grid-cols-3 gap-1">
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Volume</div>
                            <div className="text-[9px] font-black text-slate-200 mt-0.5 leading-none">85k/mo</div>
                          </div>
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Clean Rate</div>
                            <div className="text-[9px] font-black text-emerald-400 mt-0.5 leading-none">99.4%</div>
                          </div>
                          <div className="bg-slate-900/60 border border-slate-800/50 p-1 rounded-[2px]">
                            <div className="text-[4px] text-slate-500 leading-none">Audits</div>
                            <div className="text-[9px] font-black text-cyan-400 mt-0.5 leading-none">100%</div>
                          </div>
                        </div>

                        {/* Flow Pipeline map */}
                        <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-center">
                          <div className="flex items-center justify-between px-0.5">
                            <span className="text-[4px] text-slate-400 font-bold">Lab</span>
                            <span className="text-[3.5px] text-slate-600">→</span>
                            <span className="text-[4px] text-emerald-400 font-bold bg-emerald-950 px-0.5 rounded-[1px]">COB Audit</span>
                            <span className="text-[3.5px] text-slate-600">→</span>
                            <span className="text-[4px] text-cyan-400 font-bold bg-cyan-950 px-0.5 rounded-[1px]">Clearinghouse</span>
                          </div>
                          <div className="w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-1 animate-pulse" />
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="flex items-center justify-between border-t border-slate-900 pt-1 text-slate-600 text-[4.5px] leading-none">
                        <span>Apex Diagnostic Labs</span>
                        <span>Audit Engine v1.8</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Keyboard Base */}
                <div className="relative w-[112%] -left-[6%] h-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-[5px] shadow-lg border-t border-slate-600">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-950 rounded-b-[2px] opacity-60" />
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-[-0.03em] leading-snug px-2">
                  {ss('story3.facility')}
                </h3>
                <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-[240px] mx-auto">
                  {ss('story3.challenge')} {ss('story3.solution')}
                </p>
              </div>

              {/* Read Case Study Button */}
              <div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#246fb1] to-[#06b6d4] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  {ss('cta')}
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
