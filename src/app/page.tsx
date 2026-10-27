import { FeaturedProject } from "@/components/sections/featured-project";
import { HomeHero } from "@/components/sections/home-hero";
import { EngineeringTrace } from "@/components/sections/engineering-trace";
import { ComplementaryEvidence } from "@/components/sections/complementary-evidence";
import { siteConfig } from "@/content/site/site-config";
import { getFeaturedProjectEntries } from "@/lib/mdx";

export default async function Home() {
  const [featuredProject] = await getFeaturedProjectEntries();

  return (
    <div className="relative">
      <HomeHero />
      {featuredProject ? <FeaturedProject project={featuredProject} /> : null}
      <EngineeringTrace content={siteConfig.engineeringTrace} />
      <ComplementaryEvidence content={siteConfig.projectEvidence} />
    </div>
  );
}
