import { solutionsData, type SolutionDetail } from '@/lib/solutions-data';

export interface SolutionNavItem {
  slug: string;
  title: string;
  suiteNumber: number;
  icon: string;
}

export const solutionsOrderedBySuite: SolutionNavItem[] = Object.values(solutionsData)
  .sort((a, b) => a.suiteNumber - b.suiteNumber)
  .map(({ slug, title, suiteNumber, icon }) => ({ slug, title, suiteNumber, icon }));

export const getAdjacentSolutions = (
  currentSlug: string
): { prev: SolutionNavItem | null; next: SolutionNavItem | null } => {
  const index = solutionsOrderedBySuite.findIndex((s) => s.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? solutionsOrderedBySuite[index - 1] : null,
    next: index < solutionsOrderedBySuite.length - 1 ? solutionsOrderedBySuite[index + 1] : null,
  };
};

export const getSolutionBackgroundImage = (slug: string): string => {
  switch (slug) {
    case 'patient-engagement-growth-ecosystem':
      return '/images/patient-engagement.jpeg';
    case 'practice-infrastructure-strategic-operations':
      return '/images/practice-infrastructure.jpeg';
    case 'revenue-maximization-protection':
      return '/images/revenue-bg.jpeg';
    case 'cob-innovation-lab-enterprise-solutions':
      return '/images/innovation-lab.jpeg';
    case 'executive-consulting-tailored-business-development':
      return '/images/executive-consulting.jpeg';
    case 'software-solutions-technology-platform':
      return '/images/software-solutions.jpeg';
    case 'dedicated-outsourcing-services':
      return '/images/dedicated-outsourcing.jpeg';
    default:
      return '/images/revenue-bg.jpeg';
  }
};

export type SolutionIconName =
  | 'Activity'
  | 'Heart'
  | 'Building2'
  | 'FlaskConical'
  | 'Stethoscope'
  | 'Dna';

export const isSolutionIconName = (name: string): name is SolutionIconName =>
  ['Activity', 'Heart', 'Building2', 'FlaskConical', 'Stethoscope', 'Dna'].includes(name);

export const getServiceIndex = (solution: SolutionDetail, serviceSlug: string): number =>
  solution.subCategories.findIndex((s) => s.slug === serviceSlug);
