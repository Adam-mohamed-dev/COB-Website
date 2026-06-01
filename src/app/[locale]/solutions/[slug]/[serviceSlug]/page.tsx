import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { solutionsData } from '@/lib/solutions-data';
import ServiceClientPage from './ServiceClientPage';

type Props = {
  params: Promise<{ locale: string; slug: string; serviceSlug: string }>;
};

export const generateStaticParams = () => {
  const params: { locale: string; slug: string; serviceSlug: string }[] = [];
  const locales = ['en', 'ar'];

  Object.values(solutionsData).forEach((solution) => {
    solution.subCategories.forEach((sub) => {
      locales.forEach((locale) => {
        params.push({
          locale,
          slug: solution.slug,
          serviceSlug: sub.slug,
        });
      });
    });
  });

  return params;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  const solution = solutionsData[slug];
  if (!solution) return {};

  const service = solution.subCategories.find((s) => s.slug === serviceSlug);
  if (!service) return {};

  return {
    title: `${service.title} | ${solution.title} - COB Healthcare`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug, serviceSlug } = await params;
  const solution = solutionsData[slug];

  if (!solution) {
    notFound();
  }

  const service = solution.subCategories.find((s) => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <ServiceClientPage
      solution={solution}
      service={service}
    />
  );
}
