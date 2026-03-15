export type ContentCollection = "projects" | "experience";

export interface BaseContentFrontmatter {
  title: string;
  summary: string;
  language?: "es" | "en";
  published?: boolean;
  featured?: boolean;
  tags?: string[];
}

export interface ProjectFrontmatter extends BaseContentFrontmatter {
  role?: string;
  stack?: string[];
  year?: string;
  githubRepo?: string;
  githubUrl?: string;
  demoUrl?: string;
  githubFeatured?: boolean;
}

export interface ExperienceFrontmatter extends BaseContentFrontmatter {
  company?: string;
  period?: string;
  focus?: string[];
}

export interface ContentEntry<TFrontmatter> {
  slug: string;
  collection: ContentCollection;
  frontmatter: TFrontmatter;
  content: string;
}
