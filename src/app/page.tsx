import { FeaturedProject } from "@/components/sections/featured-project";
import { HomeHero } from "@/components/sections/home-hero";
import { getFeaturedProjectEntries } from "@/lib/mdx";

export default async function Home() {
  const [featuredProject] = await getFeaturedProjectEntries();

  return (
    <>
      <HomeHero />
      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}
    </>
  );
}
