import { strict as assert } from "node:assert";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { siteConfig } from "../src/content/site/site-config.ts";
import { profileContent } from "../src/content/site/profile-content.ts";

const complementaryEvidence = await readFile(
  new URL("../src/components/sections/complementary-evidence.tsx", import.meta.url),
  "utf8",
);
const engineeringTrace = await readFile(
  new URL("../src/components/sections/engineering-trace.tsx", import.meta.url),
  "utf8",
);
const siteFooter = await readFile(
  new URL("../src/components/layout/site-footer.tsx", import.meta.url),
  "utf8",
);

test("Home presenta desarrollo e IA con decisiones y validación técnicas", () => {
  assert.match(siteConfig.hero.description, /^Desarrollo herramientas y automatizaciones con Python y VBA/);
  assert.match(siteConfig.hero.description, /Uso herramientas de IA/);
  assert.match(siteConfig.hero.description, /tomo decisiones técnicas, reviso el código y verifico los resultados con pruebas/);
  assert.equal(
    siteConfig.hero.impactStatement,
    "Del problema operativo al código: automatización, integraciones y controles verificables.",
  );
});

test("Home usa títulos directos y describe los hábitos de desarrollo", () => {
  assert.equal(siteConfig.homeComposition.featuredProject.eyebrow, "Caso de automatización");
  assert.equal(siteConfig.engineeringTrace.title, "Decisiones de ingeniería, con fuentes.");
  assert.equal(
    siteConfig.engineeringTrace.description,
    "A lo largo de mis proyectos fui incorporando prácticas que hoy guían mi forma de desarrollar: entender el problema, definir el alcance, apoyarme en IA, implementar y validar resultados.",
  );
  assert.equal(siteConfig.engineeringTrace.stages.length, 5);
});

test("ZIBE se identifica como desarrollo de aplicaciones Android", () => {
  assert.equal(siteConfig.projectEvidence.eyebrow, "Android / Kotlin");
  assert.equal(siteConfig.projectEvidence.title, "Desarrollo de aplicaciones");
  const android = siteConfig.projectEvidence.cases.find(({ id }) => id === "zibe");
  assert.ok(android);
  assert.doesNotMatch(android.label, /complementario|complementaria/i);
  assert.equal(android.sources.length, 3);
  assert.match(android.boundary, /no acredita uso real de Firebase/);
});

test("Se retira la CTA duplicada sin quitar navegación a Contacto y CV", () => {
  assert.equal(Object.hasOwn(siteConfig.homeComposition, "closingCta"), false);
  assert.ok(siteConfig.navItems.some(({ href }) => href === "/contact"));
  assert.ok(siteConfig.navItems.some(({ label, download }) => label === "Descargar CV" && download));
  assert.equal(siteConfig.hero.secondaryCta.download, true);
});

test("La cabecera Android usa el viewBox correspondiente al dibujo original", () => {
  assert.match(complementaryEvidence, /viewBox="0 -960 960 960"/);
});

test("ZIBE usa un SVG vectorial local sin imagen raster incrustada", async () => {
  const icon = await readFile(
    new URL("../public/images/projects/zibe-icon.svg", import.meta.url),
    "utf8",
  );
  assert.match(icon, /<svg\b[^>]*xmlns="http:\/\/www\.w3\.org\/2000\/svg"/);
  assert.match(icon, /<path\b/);
  assert.doesNotMatch(icon, /<image\b|data:image|(?:href|xlink:href)="https?:\/\//i);
  assert.match(complementaryEvidence, /item\.id === "zibe"/);
  assert.match(complementaryEvidence, /src="\/images\/projects\/zibe-icon\.svg"/);
});

test("Viaje Rentable AR muestra una ruta con el mismo marco visual que ZIBE", () => {
  assert.match(complementaryEvidence, /import\s*\{[^}]*\bRoute\b[^}]*\}\s*from "lucide-react"/);
  assert.match(complementaryEvidence, /item\.id === "viaje-rentable-ar"/);
  assert.match(complementaryEvidence, /<Route\s/);
  assert.match(complementaryEvidence, /size-9.*rounded-lg/);
});

test("El texto introductorio del Trace aprovecha el ancho del contenedor", () => {
  assert.match(engineeringTrace, /className="w-full text-pretty text-base leading-7 text-muted-foreground sm:text-lg"/);
});

test("El Trace reduce aire solo con altura suficiente y preserva scroll y clipping", () => {
  assert.match(engineeringTrace, /className="trace-scroller relative mt-6 h-\[300svh\]"/);
  assert.match(engineeringTrace, /\[@media\(min-height:800px\)\]:h-\[calc\(100svh-11rem\)\]/);
  assert.match(engineeringTrace, /w-\[min\(88%,38rem\)\]/);
  assert.match(engineeringTrace, /trace-world relative min-w-0 overflow-hidden/);
  assert.match(engineeringTrace, /\"translate3d\(calc\(-50% \+ \" \+ x \+ \"%\), -50%, \"/);
});

test("El footer muestra el nombre y enlaces funcionales sin repetir el eslogan", () => {
  assert.match(siteFooter, /\{siteConfig\.name\}/);
  assert.match(siteFooter, /<nav\b[^>]*aria-label="Enlaces del pie de página"/);
  assert.match(siteFooter, /GitHub/);
  assert.match(siteFooter, /LinkedIn/);
  assert.match(siteFooter, /Contacto/);
  assert.match(siteFooter, /focus-visible:outline-2/);
  assert.doesNotMatch(siteFooter, /getFullYear|copyrightSuffix|footer\.description/);
  assert.equal(Object.hasOwn(siteConfig, "footer"), false);
  const social = profileContent.contact.methods.filter(({ id }) => id === "github" || id === "linkedin");
  assert.deepEqual(social.map(({ href }) => href).sort(), [
    "https://github.com/Zibete",
    "https://www.linkedin.com/in/matiasabelperalta/",
  ]);
});
