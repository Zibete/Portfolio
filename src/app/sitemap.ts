import type { MetadataRoute } from "next";
import { hasProjectMdxModule } from "@/content/projects/registry";
import { getPublishedProjectEntries } from "@/lib/mdx";
import { getAbsoluteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "/",
    "/about",
    "/projects",
    "/experience",
    "/skills",
    "/contact",
  ];
  const lastModified = new Date();
  const projectEntries = (await getPublishedProjectEntries()).filter((entry) =>
    hasProjectMdxModule(entry.slug),
  );

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route, index) => ({
    url: getAbsoluteUrl(route).toString(),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : index < 3 ? 0.8 : 0.7,
  }));
  const projectEntriesWithMetadata: MetadataRoute.Sitemap = projectEntries.map(
    (entry) => ({
      url: getAbsoluteUrl(`/projects/${entry.slug}`).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: entry.frontmatter.featured ? 0.9 : 0.8,
    }),
  );

  return [
    ...staticEntries,
    ...projectEntriesWithMetadata,
  ];
}
