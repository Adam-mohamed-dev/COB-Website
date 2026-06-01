export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] overflow-hidden">
      {/* Hero Skeleton */}
      <div className="relative">
        {/* Background shimmer */}
        <div className="absolute inset-0 h-screen bg-gradient-to-b from-slate-100/50 via-white/80 to-white" />

        <div className="relative max-w-[1600px] mx-auto px-10 pt-48 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="h-16 w-3/4 rounded-xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-16 w-1/2 rounded-xl bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              </div>
              <div className="space-y-3 max-w-2xl">
                <div className="h-5 w-full rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-5 w-2/3 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              </div>
              <div className="flex gap-6">
                <div className="h-16 w-52 rounded-full bg-gradient-to-r from-[#246fb1]/20 via-[#06b6d4]/10 to-[#246fb1]/20 animate-pulse" />
                <div className="h-16 w-52 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
              </div>
            </div>

            {/* Right Column - Rhombus Placeholder */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center items-center">
              <div className="relative w-[340px] h-[340px]">
                <div className="absolute inset-0 rounded-[50px] bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section Skeleton */}
      <section className="py-36 bg-[#f8fafc]">
        <div className="max-w-[1600px] mx-auto px-10">
          <div className="flex flex-col items-center text-center mb-24 space-y-4">
            <div className="h-10 w-96 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
            <div className="h-5 w-[500px] rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6">
                <div className="w-[380px] h-[240px] rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-8 w-48 rounded-lg bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-4 w-72 rounded-full bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
                <div className="h-14 w-44 rounded-full bg-gradient-to-r from-[#246fb1]/20 via-[#06b6d4]/10 to-[#246fb1]/20 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
