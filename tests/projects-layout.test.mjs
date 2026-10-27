import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const listPage = await readFile(new URL("../src/app/projects/page.tsx", import.meta.url), "utf8");
const detailPage = await readFile(new URL("../src/app/projects/[slug]/page.tsx", import.meta.url), "utf8");

test("El listado compacta sus separaciones y conserva las cards de estudio", () => {
  assert.match(listPage, /className="pt-8 pb-10 sm:pt-10 sm:pb-13"/);
  assert.match(listPage, /className="space-y-6"/);
  assert.match(listPage, /className="grid gap-4"/);
  assert.match(listPage, /Caso de automatización/);
});

test("El detalle compacta el espacio exterior y respeta la preferencia de imagen", () => {
  assert.match(detailPage, /className="py-12 sm:py-20"/);
  assert.match(detailPage, /<Container className="space-y-8">/);
  assert.match(detailPage, /coverImageFit === "contain"/);
  assert.match(listPage, /coverImageFit === "contain"/);
});
