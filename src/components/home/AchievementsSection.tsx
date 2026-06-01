'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';

interface MetricConfig {
  index: number;
  label: string;
  tKey: string;
  value: number;
  suffix: string;
  prefix?: string;
  svg: React.ReactNode;
}

const MetricWaveSvg = ({ className }: { className?: string }) => (
  <svg className={className} preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M 0,100 L 25,85 L 45,78 L 65,48 L 85,38 L 100,10" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 0,90 L 100,90 M 0,70 L 100,70 M 0,50 L 100,50 M 0,30 L 100,30" strokeWidth="0.4" strokeDasharray="3 3" />
  </svg>
);

const EcgWaveSvg = ({ className }: { className?: string }) => (
  <svg className={className} preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M 0,85 L 25,70 L 30,70 L 33,35 L 38,90 L 43,65 L 48,65 L 68,50 L 73,15 L 78,80 L 83,45 L 100,30" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TelemetryWaveSvg = ({ className }: { className?: string }) => (
  <svg className={className} preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M 0,90 L 15,90 L 25,75 L 30,55 L 35,85 L 45,80 L 55,55 L 60,25 L 65,70 L 75,65 L 85,40 L 90,10 L 95,55 L 100,45" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DnaWaveSvg = ({ className }: { className?: string }) => (
  <svg className={className} preserveAspectRatio="none" viewBox="0 0 100 100">
    <path d="M 0,85 Q 25,60 50,60 T 100,35" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M 0,60 Q 25,85 50,35 T 100,60" strokeWidth="1.2" strokeDasharray="3 3" strokeLinecap="round" />
    <line x1="15" y1="69" x2="15" y2="76" strokeWidth="0.8" />
    <line x1="35" y1="62" x2="35" y2="73" strokeWidth="0.8" />
    <line x1="50" y1="60" x2="50" y2="35" strokeWidth="0.8" />
    <line x1="65" y1="47" x2="65" y2="58" strokeWidth="0.8" />
    <line x1="85" y1="41" x2="85" y2="53" strokeWidth="0.8" />
  </svg>
);

const MetricCard = ({
  metric,
  animatedValue,
  ref,
}: {
  metric: MetricConfig;
  animatedValue: string;
  ref: React.Ref<HTMLDivElement>;
}) => {
  const w = useTranslations('WhyChoose');

  return (
    <div
      ref={metric.index === 3 ? ref : undefined}
      className="relative overflow-hidden p-10 lg:p-12 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between hover:bg-slate-50/30 transition-all duration-300 group min-h-[280px]"
    >
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none">
        <div className="w-full h-full stroke-slate-200/50 group-hover:stroke-brand/15 transition-colors duration-500 fill-none">
          {metric.svg}
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-[13px] font-black text-slate-400 uppercase tracking-[0.1em] mb-8">
          {metric.label}
        </div>
        <div className="text-5xl lg:text-6xl font-black text-slate-950 tracking-tighter mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#246fb1] group-hover:to-[#06b6d4] group-hover:bg-clip-text group-hover:text-transparent">
          {metric.prefix}{animatedValue}{metric.suffix}
        </div>
      </div>
      <div className="text-left relative z-10">
        <h3 className="text-lg font-black text-slate-900 tracking-[-0.02em] mb-2">{w(`${metric.tKey}Title`)}</h3>
        <p className="text-slate-500 text-[14px] leading-relaxed font-medium">{w(`${metric.tKey}Desc`)}</p>
      </div>
    </div>
  );
};

export const AchievementsSection = () => {
  const w = useTranslations('WhyChoose');
  const { ref: sectionRef, isInView } = useInView();

  const [achVolume, setAchVolume] = useState(0.0);
  const [achAccuracy, setAchAccuracy] = useState(80.0);
  const [achSpeed, setAchSpeed] = useState(60);
  const [achCapacity, setAchCapacity] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
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
  }, [isInView]);

  const metrics: MetricConfig[] = [
    {
      index: 0,
      label: '01 / VOLUMES MANAGED',
      tKey: 'pillar1',
      value: achVolume,
      suffix: 'B+',
      prefix: '$',
      svg: <MetricWaveSvg />,
    },
    {
      index: 1,
      label: '02 / BILLING ACCURACY',
      tKey: 'pillar2',
      value: achAccuracy,
      suffix: '%',
      svg: <EcgWaveSvg />,
    },
    {
      index: 2,
      label: '03 / OPERATIONS SPEED',
      tKey: 'pillar3',
      value: achSpeed,
      suffix: 'm',
      prefix: '<',
      svg: <TelemetryWaveSvg />,
    },
    {
      index: 3,
      label: '04 / CLINICAL CAPACITY',
      tKey: 'pillar4',
      value: achCapacity,
      suffix: 'k+',
      svg: <DnaWaveSvg />,
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative z-10 py-36 bg-[#fcfdfe] text-slate-900 overflow-hidden border-t border-slate-100/50"
    >
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
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-24 transition-all duration-1000 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.04em] leading-[1.05] mb-8">
            {w('title')}
          </h2>
          <p className="text-slate-500 font-medium text-[16px] leading-relaxed">
            {w('description')}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-[32px] border border-slate-100 bg-white overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.01)] transition-all duration-1000 delay-[200ms] transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          {metrics.map((metric) => (
            <MetricCard
              key={metric.tKey}
              metric={metric}
              animatedValue={
                metric.index === 0
                  ? achVolume.toFixed(1)
                  : metric.index === 1
                    ? achAccuracy.toFixed(1)
                    : metric.index === 2
                      ? String(achSpeed)
                      : String(achCapacity)
              }
              ref={sectionRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
