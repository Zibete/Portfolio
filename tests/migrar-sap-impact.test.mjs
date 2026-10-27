import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const root = new URL("../", import.meta.url);
const source = (path) => readFile(new URL(path, root), "utf8");

test("La fuente tipada conserva alcance SAP FI observado y eficiencia estimada sin confundirlos", async () => {
  const { migrarSapImpact } = await import("../src/content/site/migrar-sap-impact.ts");
  assert.equal(migrarSapImpact.observed.share, "54,6 %");
  assert.equal(migrarSapImpact.observed.shareValue, 54.6);
  assert.equal(migrarSapImpact.observed.invoices, "3.932");
  assert.equal(migrarSapImpact.observed.totalInvoices, "7.198");
  assert.equal(migrarSapImpact.observed.suppliers, "57");
  assert.match(migrarSapImpact.observed.boundary, /no (?:indica|mide) el porcentaje automatizado/);
  assert.equal(migrarSapImpact.estimated.reduction, "≈86 %");
  assert.equal(migrarSapImpact.estimated.before, "150 s");
  assert.equal(migrarSapImpact.estimated.after, "21 s");
  assert.match(migrarSapImpact.estimated.boundary, /estimación|estimado/i);
  assert.equal(migrarSapImpact.sourceUrl, "https://github.com/Zibete/Zibete/blob/main/README.md");
});

test("Home reemplaza las tres fichas de metadata por dos bloques de impacto accesibles", async () => {
  const featured = await source("src/components/sections/featured-project.tsx");
  assert.match(featured, /migrarSapImpact\.observed\.share/);
  assert.match(featured, /migrarSapImpact\.estimated\.reduction/);
  assert.match(featured, /role="progressbar"/);
  assert.match(featured, /aria-valuenow=\{migrarSapImpact\.observed\.shareValue\}/);
  assert.match(featured, /lg:grid-rows-2/);
  assert.doesNotMatch(featured, /featuredProjectContent\.metadata|metadataMotionDelays|focusPreview/);
});

test("Proyectos presenta el mismo impacto sin sustituir metadatos útiles de los casos", async () => {
  const list = await source("src/app/projects/page.tsx");
  const detail = await source("src/content/projects/migrar-sap-portfolio.mdx");
  assert.match(list, /entry\.slug === "migrar-sap-portfolio"/);
  assert.match(list, /migrarSapImpact\.observed\.share/);
  assert.match(list, /migrarSapImpact\.estimated\.reduction/);
  assert.match(detail, /import \{ migrarSapImpact \} from/);
  assert.match(detail, /migrarSapImpact\.observed\.invoices/);
  assert.match(detail, /migrarSapImpact\.estimated\.before/);
  assert.match(detail, /migrarSapImpact\.sourceUrl/);
  assert.doesNotMatch(detail, /(?:60\s*(?:a|→)\s*500|ocho veces|~60|~500)/i);
  assert.match(list, /entry\.frontmatter\.role/);
});

test("Experiencia y límites editoriales usan el mismo corte PAE/AXION sin atribuirlo a Cabify", async () => {
  const { profileContent } = await import("../src/content/site/profile-content.ts");
  const { siteConfig } = await import("../src/content/site/site-config.ts");
  const experience = await source("src/content/experience/pan-american-energy-axion-ap.mdx");
  assert.equal(profileContent.experience.metrics.length, 3);
  assert.match(profileContent.experience.metrics[0].value, /54,6 %/);
  assert.match(profileContent.experience.metrics[1].value, /3\.932.*7\.198.*57/);
  assert.match(profileContent.experience.metrics[2].value, /150 s.*21 s.*86 %/);
  assert.match(profileContent.experience.aside.description, /PAE \/ AXION/);
  assert.match(profileContent.experience.aside.description, /no.*Cabify/i);
  const migrarSapCase = siteConfig.projectEvidence.cases.find((item) => item.id === "migrar-sap");
  assert.ok(migrarSapCase);
  assert.match(migrarSapCase.boundary, /observado/i);
  assert.match(migrarSapCase.boundary, /estimad[oa]/i);
  assert.doesNotMatch(experience, /evolución de productividad|mejora de productividad documentada/i);
  const relevantContent = [
    await source("src/content/site/site-config.ts"),
    await source("src/content/site/profile-content.ts"),
    experience,
  ].join("\n");
  assert.doesNotMatch(relevantContent, /de ~60|~60 a ~500|70 % del monto|alrededor del 70 %/);
});
