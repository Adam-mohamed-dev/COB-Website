import { solutionsData } from '@/lib/solutions-data';
import { notFound } from 'next/navigation';
import SolutionClientPage from './SolutionClientPage';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData[slug];
  if (!solution) return {};

  return {
    title: `${solution.title} - COB Healthcare Solutions`,
    description: solution.description,
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  return <SolutionClientPage solution={solution} />;
}
