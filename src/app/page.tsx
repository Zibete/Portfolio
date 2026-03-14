import { FeaturedProject } from "@/components/sections/featured-project";
import { HomeHero } from "@/components/sections/home-hero";
import { StackMarquee } from "@/components/sections/stack-marquee";
import { getFeaturedProjectEntries } from "@/lib/mdx";

export default async function Home() {
  const [featuredProject] = await getFeaturedProjectEntries();

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_16%_0%,_rgb(84_139_255_/_0.14),_transparent_34%),radial-gradient(circle_at_84%_12%,_rgb(148_163_184_/_0.16),_transparent_30%)] dark:hidden" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-[42rem] bg-[radial-gradient(circle_at_16%_0%,_rgb(84_139_255_/_0.18),_transparent_36%),radial-gradient(circle_at_84%_12%,_rgb(14_165_233_/_0.11),_transparent_30%)] dark:block" />
      <HomeHero />
      <StackMarquee />
      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}
    </div>
  );
}
