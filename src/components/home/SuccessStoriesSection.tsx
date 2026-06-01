'use client';

import { useTranslations } from 'next-intl';
import { useConsultationStore } from '@/store/useConsultationStore';
import { useInView } from '@/hooks/useInView';
import { SectionEcgDividers } from '@/components/solutions/SectionEcgDividers';

interface StoryConfig {
  tKey: string;
  screenContent: React.ReactNode;
}

const StoryScreen1 = () => (
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

    {/* Dashboard Content */}
    <div className="flex-1 py-1.5 flex flex-col justify-between">
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

      <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-between">
        <div className="flex justify-between text-[4px] text-slate-500 leading-none">
          <span>Claims Denial Index</span>
          <span className="text-emerald-400">Optimization Active</span>
        </div>
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
);

const StoryScreen2 = () => (
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

    {/* Dashboard Content */}
    <div className="flex-1 py-1.5 flex flex-col justify-between">
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

      <div className="bg-slate-900/40 border border-slate-800/40 rounded-[2px] p-1 mt-1 flex-1 flex flex-col justify-between">
        <div className="text-[4px] text-slate-500 flex justify-between leading-none">
          <span>Credentialing Timeline</span>
          <span className="text-emerald-400">99% Automation</span>
        </div>
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
);

const StoryScreen3 = () => (
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

    {/* Dashboard Content */}
    <div className="flex-1 py-1.5 flex flex-col justify-between">
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
);

const LaptopMockup = ({ screenContent }: { screenContent: React.ReactNode }) => (
  <div className="relative w-full max-w-[280px] transition-transform duration-500 group-hover:-translate-y-2">
    <div className="relative bg-slate-950 rounded-t-[14px] p-2 pb-1.5 border-[3px] border-slate-800 shadow-xl shadow-slate-900/10">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-slate-700" />
      <div className="relative aspect-[16/10] bg-slate-900 rounded-[2px] overflow-hidden border border-slate-950">
        {screenContent}
      </div>
    </div>
    <div className="relative w-[112%] -left-[6%] h-2.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-[5px] shadow-lg border-t border-slate-600">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-950 rounded-b-[2px] opacity-60" />
    </div>
  </div>
);

const stories: StoryConfig[] = [
  { tKey: 'story1', screenContent: <StoryScreen1 /> },
  { tKey: 'story2', screenContent: <StoryScreen2 /> },
  { tKey: 'story3', screenContent: <StoryScreen3 /> },
];

export const SuccessStoriesSection = () => {
  const ss = useTranslations('SuccessStories');
  const { setFormOpen } = useConsultationStore();
  const { ref: headerRef, isInView: isHeaderVisible } = useInView();
  const card1View = useInView();
  const card2View = useInView();
  const card3View = useInView();
  const cardViews = [card1View, card2View, card3View];

  return (
    <section
      id="success-stories"
      className="relative z-10 py-36 bg-[#f8fafc] text-slate-900 overflow-hidden"
    >
      {/* Soft Radial Ambient Brand Blurs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Creative Micro Tech Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      <SectionEcgDividers gradientId="success-stories-ecg" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${
            isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.04em] leading-[1.05] mb-8">
            {ss('title')}
          </h2>
          <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
            {ss('description')}
          </p>
        </div>

        {/* Grid of Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 relative z-10">
          {stories.map((story, i) => (
            <div
              key={story.tKey}
              ref={cardViews[i].ref}
              className={`flex flex-col items-center text-center space-y-6 group transition-all duration-1000 transform ${
                cardViews[i].isInView
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-16 opacity-0'
              }`}
            >
              <LaptopMockup screenContent={story.screenContent} />

              <div className="space-y-2">
                <h3 className="text-xl lg:text-2xl font-black text-slate-900 tracking-[-0.03em] leading-snug px-2">
                  {ss(`${story.tKey}.facility`)}
                </h3>
                <p className="text-slate-500 text-[13px] font-semibold leading-relaxed max-w-[240px] mx-auto">
                  {ss(`${story.tKey}.challenge`)} {ss(`${story.tKey}.solution`)}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setFormOpen(true)}
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#246fb1] to-[#06b6d4] hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  {ss('cta')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
