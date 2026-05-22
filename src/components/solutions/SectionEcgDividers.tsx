interface SectionEcgDividersProps {
  gradientId: string;
}

export const SectionEcgDividers = ({ gradientId }: SectionEcgDividersProps) => {
  const stroke = `url(#${gradientId})`;

  return (
    <>
      <div className="absolute top-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
        <svg
          className="w-full h-full min-w-[1440px]"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#246fb1" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#246fb1" />
            </linearGradient>
          </defs>
          <path
            d="M0,45 L200,45 L210,45 L220,38 L230,52 L240,15 L255,55 L265,45 L450,35 C550,30 650,35 750,25 L760,20 L770,35 L780,5 L795,45 L805,25 L950,20 C1100,15 1250,25 1440,10"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,49 L200,49 L210,49 L220,42 L230,56 L240,19 L255,59 L265,49 L450,39 C550,34 650,39 750,29 L760,24 L770,39 L780,9 L795,49 L805,29 L950,24 C1100,19 1250,29 1440,14"
            stroke={stroke}
            strokeWidth="0.8"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-[60px] pointer-events-none z-10 overflow-hidden opacity-30">
        <svg
          className="w-full h-full min-w-[1440px]"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M0,15 L150,15 L160,15 L170,8 L180,22 L190,-15 L205,25 L215,15 L400,25 C500,30 600,20 700,35 L710,30 L720,45 L730,10 L745,50 L755,35 L900,40 C1050,45 1200,35 1440,50"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0,19 L150,19 L160,19 L170,12 L180,26 L190,-11 L205,29 L215,19 L400,29 C500,34 600,24 700,39 L710,34 L720,49 L730,14 L745,54 L755,39 L900,44 C1050,49 1200,39 1440,54"
            stroke={stroke}
            strokeWidth="0.8"
            strokeDasharray="6 4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
};
