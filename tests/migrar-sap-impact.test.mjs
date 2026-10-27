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
