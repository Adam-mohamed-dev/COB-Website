import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import BookConsultationPageClient from './BookConsultationPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'ar' ? 'احجز استشارة - COB' : 'Book a Consultation - COB Healthcare Solutions',
    description: locale === 'ar'
      ? 'احجز استشارة مجانية مع خبراء COB في إدارة دورة الإيرادات والخدمات الطبية.'
      : 'Schedule a free consultation with COB experts in revenue cycle management and medical services.',
  };
}

export default async function BookConsultationPage() {
  return <BookConsultationPageClient />;
}
