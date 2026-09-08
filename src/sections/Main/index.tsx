import { HeroSection } from "@/sections/HeroSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { FeaturedWorkSection } from "@/sections/FeaturedWorkSection";
import { ExpertiseSection } from "@/sections/ExpertiseSection";
import { CoursesSection } from "@/sections/CoursesSection";
import { JourneySection } from "@/sections/JourneySection";
import { AboutSection } from "@/sections/AboutSection";

export const Main = () => {
  return (
    <main className="relative w-full overflow-x-clip bg-black">
      <HeroSection />
      <ManifestoSection />
      <JourneySection />
      <FeaturedWorkSection />
      <ExpertiseSection />
      <CoursesSection />
      <AboutSection />
    </main>
  );
};
      