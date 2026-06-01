'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useInView } from '@/hooks/useInView';
import { SectionEcgDividers } from '@/components/solutions/SectionEcgDividers';

interface CardConfig {
  tKey: string;
  href: string;
  svg: (props: { className?: string }) => React.ReactNode;
}

const ClaimDashboardSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <rect x="140" y="120" width="180" height="70" rx="16" fill="url(#brand-grad-1)" stroke="#e2e8f0" strokeWidth="1.5" />
    <text x="160" y="150" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="sans-serif">99.2%</text>
    <text x="160" y="170" fill="#e0f2fe" fontSize="9" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">CLEAN CLAIM RATE</text>
    <path d="M90 140 C110 130 120 150 130 140" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="130" cy="140" r="4" fill="#06b6d4" />
    <path d="M330 100 C340 90 350 110 360 100" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" fill="none" />
    <circle cx="360" cy="100" r="4" fill="#246fb1" />
  </svg>
);

const MetricDialSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <rect x="145" y="80" width="110" height="60" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
    <text x="168" y="115" fill="#246fb1" fontSize="18" fontWeight="900" fontFamily="sans-serif">$1.4M</text>
    <path d="M50 180 C80 160 100 190 120 170" stroke="#06b6d4" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <circle cx="120" cy="170" r="4.5" fill="#06b6d4" />
    <path d="M280 180 C300 170 320 195 340 185" stroke="#246fb1" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    <circle cx="340" cy="185" r="4.5" fill="#246fb1" />
  </svg>
);

const InteropHubSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="80" y="30" width="240" height="150" rx="24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
    <line x1="140" y1="30" x2="140" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
    <line x1="200" y1="30" x2="200" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
    <line x1="260" y1="30" x2="260" y2="180" stroke="#f1f5f9" strokeWidth="1.5" />
    <circle cx="200" cy="100" r="35" fill="none" stroke="#246fb1" strokeWidth="4" strokeDasharray="6,4" />
    <path d="M200 65l5-5-5-5" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" />
    <rect x="145" y="145" width="110" height="24" rx="12" fill="#10b981" />
    <text x="160" y="161" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">100% INTEROP</text>
    <circle cx="60" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
    <path d="M56 120h8M60 116v8" stroke="#246fb1" strokeWidth="2" strokeLinecap="round" />
    <circle cx="340" cy="120" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
    <path d="M336 120l8-4-8 8" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const GaugeSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="160" cy="110" r="60" fill="#ffffff" opacity="0.6" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
    <circle cx="240" cy="110" r="60" fill="#ffffff" opacity="0.8" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
    <rect x="180" y="70" width="40" height="80" rx="20" fill="#246fb1" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="200" cy="90" r="4" fill="#fff" opacity="0.6" />
    <circle cx="195" cy="105" r="6" fill="#fff" opacity="0.8" />
    <circle cx="205" cy="110" r="3" fill="#fff" opacity="0.5" />
    <rect x="220" y="125" width="70" height="30" rx="8" fill="#10b981" />
    <text x="238" y="145" fill="#fff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">2.8s</text>
    <line x1="50" x2="110" y1="170" y2="170" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
    <line x1="290" x2="350" y1="170" y2="170" stroke="#246fb1" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const ConsultingHubSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
);

const SyncGaugeSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
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
);

const TeamSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="150" y="80" width="100" height="100" rx="50" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2.5" className="shadow-sm" />
    <circle cx="200" cy="115" r="16" fill="#246fb1" />
    <path d="M180 150 C180 135 220 135 220 150" fill="#246fb1" stroke="#246fb1" strokeWidth="2" strokeLinecap="round" />
    <circle cx="140" cy="130" r="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
    <circle cx="140" cy="120" r="12" fill="#06b6d4" />
    <path d="M125 145 C125 135 155 135 155 145" fill="#06b6d4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
    <circle cx="260" cy="130" r="40" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" className="shadow-sm" />
    <circle cx="260" cy="120" r="12" fill="#06b6d4" />
    <path d="M245 145 C245 135 275 135 275 145" fill="#06b6d4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
    <path d="M50 180 C100 180 120 150 140 150" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,6" fill="none" />
    <path d="M350 180 C300 180 280 150 260 150" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" strokeDasharray="6,6" fill="none" />
  </svg>
);

const cards: (CardConfig & { spanFull?: boolean })[] = [
  { tKey: 'core', href: '/solutions/revenue-maximization-protection', svg: ClaimDashboardSvg },
  { tKey: 'revops', href: '/solutions/patient-engagement-growth-ecosystem', svg: MetricDialSvg },
  { tKey: 'practice', href: '/solutions/practice-infrastructure-strategic-operations', svg: InteropHubSvg },
  { tKey: 'specialized', href: '/solutions/cob-innovation-lab-enterprise-solutions', svg: GaugeSvg },
  { tKey: 'consulting', href: '/solutions/executive-consulting-tailored-business-development', svg: ConsultingHubSvg },
  { tKey: 'technology', href: '/solutions/software-solutions-technology-platform', svg: SyncGaugeSvg },
  { tKey: 'outsourcing', href: '/solutions/dedicated-outsourcing-services', svg: TeamSvg, spanFull: true },
];

const SolutionCard = ({
  card,
  isInView,
  ref,
}: {
  card: CardConfig & { spanFull?: boolean };
  isInView: boolean;
  ref: React.Ref<HTMLDivElement>;
}) => {
  const s = useTranslations('Solutions');
  const Svg = card.svg;

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center group transition-all duration-1000 transform ${
        card.spanFull ? 'lg:col-span-2 max-w-3xl mx-auto' : ''
      } ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
    >
      <Svg className="w-[380px] h-[240px] mx-auto overflow-visible mb-8 group-hover:scale-105 transition-transform duration-500" />
      <h3 className="text-3xl font-black text-slate-900 tracking-[-0.02em] mb-4">{s(`${card.tKey}.tab`)}</h3>
      <p className="text-slate-500 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
        {s(`${card.tKey}.description`)}
      </p>
      <Link
        href={card.href}
        className="inline-flex items-center justify-center bg-gradient-to-r from-[#246fb1] to-[#06b6d4] text-white font-black uppercase text-xs tracking-wider px-10 py-5 rounded-full hover:from-[#1b5588] hover:to-[#048fa6] hover:shadow-[0_10px_25px_-5px_rgba(36,111,177,0.3)] shadow-lg shadow-brand/10 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
      >
        {s(`${card.tKey}.action`)}
      </Link>
    </div>
  );
};

export const SolutionsSection = () => {
  const s = useTranslations('Solutions');
  const { ref: headerRef, isInView: isHeaderVisible } = useInView();
  const card1View = useInView();
  const card2View = useInView();
  const card3View = useInView();
  const card4View = useInView();
  const card5View = useInView();
  const card6View = useInView();
  const card7View = useInView();
  const cardViews = [card1View, card2View, card3View, card4View, card5View, card6View, card7View];

  return (
    <section
      id="solutions"
      className="relative z-10 py-36 bg-[#f8fafc] text-slate-900 overflow-hidden"
    >
      {/* Soft Radial Ambient Brand Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Creative Micro Tech Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none z-0" />

      {/* Dynamic ECG Medical-Growth Backdrop */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.08] flex items-center">
        <svg className="w-full h-full min-w-[1440px] min-h-[600px]" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="medical-growth-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#246fb1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#246fb1" />
            </linearGradient>
          </defs>
          <path d="M-100,500 L200,500 L220,500 L235,480 L250,520 L265,400 L285,600 L300,500 L450,460 C550,430 650,450 750,380 L770,360 L785,340 L800,400 L820,280 L840,460 L855,360 L1000,320 C1100,290 1200,310 1300,220 L1320,200 L1335,180 L1350,240 L1370,120 L1390,300 L1405,200 L1600,150" stroke="url(#medical-growth-grad)" strokeWidth="3" strokeLinecap="round" />
          <path d="M-100,520 L200,520 L220,520 L235,500 L250,540 L265,420 L285,620 L300,520 L450,480 C550,450 650,470 750,400 L770,380 L785,360 L800,420 L820,300 L840,480 L855,380 L1000,340 C1100,310 1200,330 1300,240 L1320,220 L1335,200 L1350,260 L1370,140 L1390,320 L1405,220 L1600,170" stroke="url(#medical-growth-grad)" strokeWidth="1" strokeDasharray="10 8" strokeLinecap="round" opacity="0.6" />
          <circle cx="265" cy="400" r="6" fill="#06b6d4" />
          <circle cx="820" cy="280" r="6" fill="#246fb1" />
          <circle cx="1370" cy="120" r="6" fill="#06b6d4" />
          <circle cx="450" cy="460" r="4" fill="#246fb1" />
          <circle cx="1000" cy="320" r="4" fill="#06b6d4" />
        </svg>
      </div>

      <SectionEcgDividers gradientId="solutions-ecg" />

      {/* Subtle Floating Medical Cross Accents */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
        <svg className="absolute top-12 left-16 w-8 h-8 text-[#246fb1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
        </svg>
        <svg className="absolute bottom-20 left-24 w-12 h-12 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
        </svg>
        <svg className="absolute top-24 right-20 w-10 h-10 text-[#246fb1]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
        </svg>
        <svg className="absolute bottom-16 right-36 w-6 h-6 text-[#06b6d4]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2h2v9h9v2h-9v9h-2v-9H2v-2h9V2z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-10">
        <div
          ref={headerRef}
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${
            isHeaderVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-[-0.03em] leading-tight mb-6">
            {s('title')}
          </h2>
          <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
            {s('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24 mt-16 relative z-10">
          {cards.map((card, i) => (
            <SolutionCard
              key={card.tKey}
              card={card}
              isInView={cardViews[i].isInView}
              ref={cardViews[i].ref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
