import { solutionsData } from '@/lib/solutions-data';
import { solutionsOrderedBySuite } from '@/lib/solution-utils';

export interface NavServiceItem {
  slug: string;
  title: string;
  description?: string;
}

export interface NavSolutionColumn {
  slug: string;
  title: string;
  services: NavServiceItem[];
}

export const PRODUCTS_SOLUTION_SUITE_NUMBERS = [1, 2, 3, 4] as const;
export const SERVICES_MENU_SUITE_NUMBERS = [5, 6, 7] as const;

export const getNavSolutionColumns = (
  suiteNumbers: readonly number[]
): NavSolutionColumn[] =>
  solutionsOrderedBySuite
    .filter((s) => suiteNumbers.includes(s.suiteNumber))
    .map((s) => {
      const solution = solutionsData[s.slug];
      return {
        slug: s.slug,
        title: s.title,
        services: solution.subCategories.map((sub) => ({
          slug: sub.slug,
          title: sub.title,
          description:
            sub.slug === 'healthcare-financial-management'
              ? 'payroll, bookkeeping, tax filing, FP&A, AP/AR, valuation'
              : sub.slug === 'virtual-medical-assistants'
                ? 'experienced PTs as virtual assistants to in-clinic PTs'
                : undefined,
        })),
      };
    });

/** Exact suite overview page only (not child service routes). */
export const isSuiteOverviewActive = (pathname: string, solutionSlug: string): boolean =>
  pathname === `/solutions/${solutionSlug}`;

export const isServiceRouteActive = (
  pathname: string,
  solutionSlug: string,
  serviceSlug: string
): boolean => pathname === `/solutions/${solutionSlug}/${serviceSlug}`;

/** True if pathname is this suite or any of its service pages (for dropdown trigger only). */
export const isSolutionMenuActive = (pathname: string, solutionSlug: string): boolean =>
  pathname === `/solutions/${solutionSlug}` ||
  pathname.startsWith(`/solutions/${solutionSlug}/`);

export const isAnySolutionMenuActive = (
  pathname: string,
  columns: NavSolutionColumn[]
): boolean => columns.some((col) => isSolutionMenuActive(pathname, col.slug));

/** Hash anchor links — only the matching section is active on the home page. */
export const isHashHrefActive = (
  pathname: string,
  currentHash: string,
  href: string
): boolean => {
  if (!href.startsWith('/#')) return false;
  if (pathname !== '/') return false;
  const targetHash = href.slice(1);
  return currentHash === targetHash;
};

export interface NavSimpleLink {
  label: string;
  href: string;
}

export const industriesMenu: { heading: string; links: NavSimpleLink[] }[] = [
  {
    heading: 'Inpatient & Acute Care',
    links: [
      {
        label: 'Hospitals & Health Systems',
        href: '/solutions/practice-infrastructure-strategic-operations/credentialing-provider-network-management',
      },
      {
        label: 'Surgical Centers (ASC)',
        href: '/solutions/revenue-maximization-protection/authorizations-mnr-management',
      },
      {
        label: 'Health System M&A & Integration',
        href: '/solutions/executive-consulting-tailored-business-development/m-a-diligence-post-acquisition-integration',
      },
    ],
  },
  {
    heading: 'Outpatient & Specialty',
    links: [
      {
        label: 'Primary Care Clinics',
        href: '/solutions/patient-engagement-growth-ecosystem/virtual-front-desk-operations',
      },
      {
        label: 'Multi-Specialty Groups',
        href: '/solutions/patient-engagement-growth-ecosystem/referral-coordination',
      },
      {
        label: 'Specialty Billing & Coding',
        href: '/solutions/revenue-maximization-protection/live-medical-coding',
      },
    ],
  },
  {
    heading: 'Diagnostics & Ancillary',
    links: [
      {
        label: 'Clinical Laboratories',
        href: '/solutions/revenue-maximization-protection/advanced-medical-billing-revenue-recovery',
      },
      {
        label: 'Imaging & Radiology',
        href: '/solutions/revenue-maximization-protection/specialized-compliance-coding-audits',
      },
      {
        label: 'High-Volume Claim Operations',
        href: '/solutions/dedicated-outsourcing-services/medical-coders-billers',
      },
    ],
  },
  {
    heading: 'Enterprise & Multi-Site',
    links: [
      {
        label: 'Multi-Location Networks',
        href: '/solutions/cob-innovation-lab-enterprise-solutions/custom-enterprise-bpo-tailored-operations',
      },
      {
        label: 'EMR & Cloud Platforms',
        href: '/solutions/software-solutions-technology-platform/data-cloud-services',
      },
      {
        label: 'Compliance & RCM Advisory',
        href: '/solutions/executive-consulting-tailored-business-development/operations-rcm-consultation',
      },
    ],
  },
];

export const companyMenu: { heading: string; links: NavSimpleLink[] }[] = [
  {
    heading: 'About Us',
    links: [
      { label: 'Our Mission', href: '/#solutions' },
      { label: 'Leadership Team', href: '/#achievements' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case Studies', href: '/#success-stories' },
      { label: 'Blog & Articles', href: '/#success-stories' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Contact Us', href: '/#solutions' },
      { label: 'Client Portal', href: '/#solutions' },
    ],
  },
];
