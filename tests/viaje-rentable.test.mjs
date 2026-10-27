import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import matter from "gray-matter";
import { siteConfig } from "../src/content/site/site-config.ts";

const projectPath = new URL("../src/content/projects/viaje-rentable-ar.mdx", import.meta.url);

test("Viaje Rentable AR integra la segunda tarjeta Android con fuentes y límites honestos", () => {
  const androidCases = siteConfig.projectEvidence.cases.filter(({ id }) => id !== "migrar-sap");
  assert.deepEqual(androidCases.map(({ id }) => id), ["zibe", "viaje-rentable-ar"]);

  const caseStudy = androidCases[1];
  assert.equal(caseStudy.caseHref, "/projects/viaje-rentable-ar");
  assert.match(caseStudy.boundary, /alpha experimental/i);
  assert.ok(caseStudy.sources.some(({ href }) => href.includes("/docs/ARCHITECTURE.md")));
  assert.ok(caseStudy.sources.some(({ href }) => href.includes("/calculator/DriverProfitCalculator.kt")));
});

test("El quinto proyecto está publicado, utiliza fuente pública y conserva el preview vertical", async () => {
  const { data, content } = matter(await readFile(projectPath, "utf8"));
  assert.equal(data.order, 5);
  assert.equal(data.published, true);
  assert.equal(data.featured, false);
  assert.equal(data.githubUrl, "https://github.com/Zibete/viaje-rentable-ar");
  assert.equal(Object.hasOwn(data, "githubRepo"), false);
  assert.equal(data.coverImageFit, "contain");
  assert.match(data.coverImage, /\.webp$/);
  assert.match(data.year, /alpha experimental/i);
  assert.match(content, /ML Kit/);
  assert.match(content, /validaci[oó]n.*dispositivos|dispositivos.*validaci[oó]n/i);
  assert.match(content, /no.*acept.*autom[aá]tic|no.*rechaz.*autom[aá]tic/i);
});
