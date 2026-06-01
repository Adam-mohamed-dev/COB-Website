import { SectionEcgDividers } from '@/components/solutions/SectionEcgDividers';

export default function SolutionLoading() {
  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#246fb1]/6 to-[#06b6d4]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-[#06b6d4]/8 to-[#246fb1]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#246fb1_1.2px,transparent_1.2px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />

      {/* Hero Skeleton */}
      <div className="relative overflow-hidden bg-white">
        <SectionEcgDividers gradientId="skeleton-solution-ecg" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="flex-1 space-y-6 w-full">
              <div className="h-4 w-32 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              <div className="h-12 w-3/4 rounded-xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              <div className="space-y-3">
                <div className="h-4 w-full rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-4 w-2/3 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              </div>
              <div className="flex gap-4 pt-4">
                <div className="h-14 w-44 rounded-full bg-gradient-to-r from-[#246fb1]/20 via-[#06b6d4]/10 to-[#246fb1]/20 animate-pulse" />
                <div className="h-14 w-44 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              </div>
            </div>
            <div className="w-full md:w-80 h-80 rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Sub-categories Skeleton */}
      <section className="py-20 md:py-24 relative">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="h-8 w-64 mx-auto rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
            <div className="h-4 w-96 mx-auto rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-white p-8 space-y-5">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-6 w-3/4 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="space-y-2">
                  <div className="h-4 w-full rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                  <div className="h-4 w-2/3 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
