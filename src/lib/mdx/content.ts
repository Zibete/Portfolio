import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type {
  ContentCollection,
  ContentEntry,
  ExperienceFrontmatter,
  ProjectFrontmatter,
} from "@/types/content";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");
const MDX_EXTENSION = ".mdx";

function resolveCollectionPath(collection: ContentCollection) {
  return path.join(CONTENT_ROOT, collection);
}

async function getCollectionFiles(collection: ContentCollection) {
  try {
    const items = await fs.readdir(resolveCollectionPath(collection), {
      withFileTypes: true,
    });

    return items
      .filter((item) => item.isFile() && item.name.endsWith(MDX_EXTENSION))
      .map((item) => item.name)
      .sort((left, right) => left.localeCompare(right));
  } catch {
    return [];
  }
}

async function readCollectionEntry<TFrontmatter>(
  collection: ContentCollection,
  slug: string,
): Promise<ContentEntry<TFrontmatter> | null> {
  const filePath = path.join(resolveCollectionPath(collection), `${slug}.mdx`);

  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      collection,
      frontmatter: data as TFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getCollectionSlugs(collection: ContentCollection) {
  const files = await getCollectionFiles(collection);

  return files.map((fileName) => fileName.replace(MDX_EXTENSION, ""));
}

export async function getProjectEntries() {
  const slugs = await getCollectionSlugs("projects");
  const entries = await Promise.all(
    slugs.map((slug) =>
      readCollectionEntry<ProjectFrontmatter>("projects", slug),
    ),
  );

  return entries.filter(
    (entry): entry is ContentEntry<ProjectFrontmatter> => Boolean(entry),
  );
}

export async function getProjectEntryBySlug(slug: string) {
  return readCollectionEntry<ProjectFrontmatter>("projects", slug);
}

export async function getPublishedProjectEntries() {
  const entries = await getProjectEntries();

  return entries.filter((entry) => entry.frontmatter.published !== false);
}

export async function getFeaturedProjectEntries() {
  const entries = await getPublishedProjectEntries();

  return entries.filter((entry) => entry.frontmatter.featured);
}

export async function getExperienceEntries() {
  const slugs = await getCollectionSlugs("experience");
  const entries = await Promise.all(
    slugs.map((slug) =>
      readCollectionEntry<ExperienceFrontmatter>("experience", slug),
    ),
  );

  return entries.filter(
    (entry): entry is ContentEntry<ExperienceFrontmatter> => Boolean(entry),
  );
}
