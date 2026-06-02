'use client';

import { useRouter } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { ConsultationBookingForm } from '@/components/consultation/ConsultationBookingForm';

export default function BookConsultationPageClient() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-36 pb-24">
      <div className="max-w-[1600px] mx-auto px-10">
        <button
          type="button"
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand transition-colors mb-10 cursor-pointer bg-transparent border-0"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24">
          {/* Form */}
          <div className="flex-1 max-w-[680px]">
            <ConsultationBookingForm
              onClose={() => router.push('/')}
              variant="page"
            />
          </div>

          {/* Image */}
          <div className="w-full lg:flex-1 min-w-0 shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/images/contact1.jpeg"
                alt="Medical consultation"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#246fb1]/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
