import type { ComponentType } from "react";

type ProjectModule = {
  default: ComponentType;
};

const projectRegistry = {
  zibe: () => import("./zibe.mdx"),
} as const;

export function hasProjectMdxModule(
  slug: string,
): slug is keyof typeof projectRegistry {
  return slug in projectRegistry;
}

export async function getProjectMdxModule(
  slug: string,
): Promise<ProjectModule | null> {
  if (!hasProjectMdxModule(slug)) {
    return null;
  }

  return projectRegistry[slug]();
}
