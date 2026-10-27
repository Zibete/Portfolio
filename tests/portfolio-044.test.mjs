import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import matter from "gray-matter";
import { siteConfig } from "../src/content/site/site-config.ts";
import { migrarSapImpact } from "../src/content/site/migrar-sap-impact.ts";

const source = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("Las métricas mantienen límites explícitos sin un enlace circular al README del perfil", async () => {
  const home = await source("src/components/sections/featured-project.tsx");
  const project = await source("src/content/projects/migrar-sap-portfolio.mdx");
  assert.equal(Object.hasOwn(migrarSapImpact, "sourceUrl"), false);
  assert.doesNotMatch(home, /Fuente de las métricas|migrarSapImpact\.sourceUrl/);
  assert.doesNotMatch(project, /Fuente editorial de las métricas|migrarSapImpact\.sourceUrl/);
  assert.match(home, /migrarSapImpact\.estimated\.boundary/);
  assert.match(project, /no una medición general/);
});

test("Cada evidencia de Migrar SAP enlaza documentación representativa del tema", () => {
  const caseStudy = siteConfig.projectEvidence.cases.find(({ id }) => id === "migrar-sap");
  const implementation = siteConfig.engineeringTrace.stages.find(({ id }) => id === "implementation");
  const validation = siteConfig.engineeringTrace.stages.find(({ id }) => id === "validation");
  assert.ok(caseStudy);
  assert.ok(implementation);
  assert.ok(validation);
  assert.equal(caseStudy.sources[0].label, "Arquitectura y módulos");
  assert.match(caseStudy.sources[0].href, /\/docs\/PORTFOLIO_OVERVIEW\.md$/);
  assert.match(caseStudy.sources[1].href, /\/docs\/TESTING\.md$/);
  assert.equal(implementation.artifact.file, "docs/MANIFEST.md");
  assert.match(implementation.artifact.href, /\/docs\/MANIFEST\.md$/);
  assert.match(implementation.outcome, /documentada/i);
  assert.equal(validation.artifact.file, "docs/TESTING.md");
  assert.doesNotMatch(JSON.stringify({ caseStudy, implementation }), /modCoreValidation\.bas/);
});

test("Las tarjetas de proyectos comparten borde neutro y verde signal en hover y foco", async () => {
  const listing = await source("src/app/projects/page.tsx");
  const styles = await source("src/app/globals.css");
  assert.match(listing, /interactive-card project-card/);
  assert.doesNotMatch(listing, /border-signal\/35/);
  assert.doesNotMatch(listing, /interactive-card-subtle/);
  assert.match(styles, /\.project-card\.interactive-card:hover/);
  assert.match(styles, /\.project-card\.interactive-card:focus-within/);
  assert.match(styles, /border-color:\s*color-mix\(in srgb, var\(--signal\)/);
  assert.match(styles, /\.dark \.project-card\.interactive-card:hover/);
});

test("Proyectos y Home priorizan enlaces al repositorio y no consultan métricas sociales", async () => {
  const listing = await source("src/app/projects/page.tsx");
  const detail = await source("src/app/projects/[slug]/page.tsx");
  const home = await source("src/components/sections/featured-project.tsx");
  const combined = [listing, detail, home].join("\n");
  assert.doesNotMatch(combined, /getGitHubRepoStats|formatGitHubMetric|formatGitHubDate/);
  assert.doesNotMatch(combined, /Stars|Forks|Issues abiertas|Último push|Push \$\{/);
  assert.match(detail, /entry\.frontmatter\.githubUrl/);
  assert.match(detail, /Ver repositorio/);
  assert.match(listing, /Ver caso completo/);
});

test("Los proyectos enlazan GitHub directamente, sin frontmatter de estadísticas obsoletas", async () => {
  for (const slug of ["migrar-sap-portfolio", "zibe", "viaje-rentable-ar"]) {
    const { data } = matter(await source(`src/content/projects/${slug}.mdx`));
    assert.match(data.githubUrl, /^https:\/\/github\.com\/Zibete\//);
    assert.equal(Object.hasOwn(data, "githubRepo"), false);
    assert.equal(Object.hasOwn(data, "githubFeatured"), false);
  }
  assert.doesNotMatch(await source(".env.example"), /GITHUB_TOKEN/);
});
