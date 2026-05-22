import type { SolutionDetail } from '@/lib/solutions-data';

export interface ServiceHighlight {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceOutcome {
  value: string;
  label: string;
}

export interface ServicePageContent {
  tagline: string;
  overview: string;
  highlights: ServiceHighlight[];
  deliverables: string[];
  processSteps: ServiceProcessStep[];
  outcomes: ServiceOutcome[];
}

const SUITE_OUTCOMES: Record<string, ServiceOutcome[]> = {
  'revenue-maximization-protection': [
    { value: '99.2%', label: 'Clean Claim Target' },
    { value: '14d', label: 'Average A/R Cycle' },
    { value: '90%', label: 'Denial Reduction Potential' },
  ],
  'patient-engagement-growth-ecosystem': [
    { value: '24/7', label: 'Patient Access Coverage' },
    { value: '35%', label: 'Recall Recovery Uplift' },
    { value: '94%', label: 'Retention Benchmark' },
  ],
  'practice-infrastructure-strategic-operations': [
    { value: '60%', label: 'Faster Credentialing' },
    { value: '100%', label: 'HIPAA Payroll Compliance' },
    { value: '30d', label: 'Audit Readiness Window' },
  ],
  'cob-innovation-lab-enterprise-solutions': [
    { value: '100%', label: 'Workflow Custom Fit' },
    { value: '3x', label: 'Chart Velocity Gain' },
    { value: '14d', label: 'BPO Pod Stand-up' },
  ],
  'executive-consulting-tailored-business-development': [
    { value: '30d', label: 'Leakage Audit Cycle' },
    { value: '100%', label: 'Diligence Sign-off' },
    { value: '90d', label: 'Post-M&A Integration' },
  ],
  'software-solutions-technology-platform': [
    { value: '40%', label: 'Software Cost Reduction' },
    { value: '99.9%', label: 'Cloud Uptime SLA' },
    { value: 'HL7', label: 'Interop Standard' },
  ],
  'dedicated-outsourcing-services': [
    { value: '60%', label: 'Overhead Savings' },
    { value: '100%', label: 'Dedicated Allocation' },
    { value: '14d', label: 'Team Ramp Timeline' },
  ],
};

const buildHighlights = (
  solution: SolutionDetail,
  serviceTitle: string,
  serviceDescription: string,
  index: number
): ServiceHighlight[] => {
  const rotated = [...solution.whyChoose, ...solution.whyChoose];
  const base = rotated.slice(index, index + 4);

  if (base.length >= 4) {
    return base.map((point, i) => ({
      title:
        i === 0
          ? 'Precision Execution'
          : i === 1
            ? 'HIPAA-Aligned Operations'
            : i === 2
              ? 'Measurable ROI'
              : 'Dedicated Specialist Pods',
      description: point,
    }));
  }

  return [
    {
      title: 'Precision Execution',
      description: `${serviceTitle} is engineered to remove manual bottlenecks and deliver consistent operational output across your network.`,
    },
    {
      title: 'HIPAA-Aligned Operations',
      description:
        'Every workflow is mapped to payer rules, privacy standards, and audit-ready documentation from day one.',
    },
    {
      title: 'Measurable ROI',
      description: serviceDescription,
    },
    {
      title: 'Suite Integration',
      description: `Fully embedded inside ${solution.title} so your teams inherit enterprise-grade governance without fragmented vendors.`,
    },
  ];
};

const buildDeliverables = (serviceTitle: string, solutionTitle: string): string[] => [
  `Dedicated ${serviceTitle} operating playbook aligned to your organization`,
  `Weekly performance dashboards with SLA tracking and escalation paths`,
  `Direct integration with your EHR, clearinghouse, and communication stack`,
  `Certified specialists assigned under the ${solutionTitle} governance model`,
  `Executive readouts with actionable recommendations every review cycle`,
];

const buildProcessSteps = (serviceTitle: string): ServiceProcessStep[] => [
  {
    step: '01',
    title: 'Discovery & Baseline',
    description: `We map your current ${serviceTitle.toLowerCase()} workflows, payer mix, and volume profile to establish a performance baseline.`,
  },
  {
    step: '02',
    title: 'Configuration & Alignment',
    description:
      'Clinical, billing, and operations leaders co-design SOPs, escalation rules, and reporting cadences tailored to your sites.',
  },
  {
    step: '03',
    title: 'Deployment & Training',
    description:
      'COB pods go live inside your systems with structured onboarding, shadow periods, and real-time QA checkpoints.',
  },
  {
    step: '04',
    title: 'Optimize & Scale',
    description:
      'Continuous improvement cycles refine throughput, accuracy, and patient experience as volumes and payer rules evolve.',
  },
];

export const getServicePageContent = (
  solution: SolutionDetail,
  service: { slug: string; title: string; description: string },
  index: number
): ServicePageContent => {
  const outcomes =
    SUITE_OUTCOMES[solution.slug] ?? SUITE_OUTCOMES['revenue-maximization-protection'];

  return {
    tagline: `A tactical layer inside ${solution.title} — built for enterprise healthcare operators.`,
    overview: `${service.description} As part of Suite ${solution.suiteNumber}, ${service.title} connects directly to COB's broader ${solution.tagline.toLowerCase()} framework, giving your organization a single accountable partner instead of fragmented vendors.`,
    highlights: buildHighlights(solution, service.title, service.description, index),
    deliverables: buildDeliverables(service.title, solution.title),
    processSteps: buildProcessSteps(service.title),
    outcomes,
  };
};
