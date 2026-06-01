import { HeroSection } from '@/components/home/HeroSection';
import { SolutionsSection } from '@/components/home/SolutionsSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { SuccessStoriesSection } from '@/components/home/SuccessStoriesSection';

export default function HomePage() {
  return (
    <div className="relative min-h-[200vh] w-full bg-[#fdfdfd] text-slate-900 font-sans overflow-x-hidden">
      <HeroSection />
      <SolutionsSection />
      <AchievementsSection />
      <SuccessStoriesSection />
    </div>
  );
}
