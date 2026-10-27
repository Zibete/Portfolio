import { strict as assert } from "node:assert";
import { test } from "node:test";
import { siteConfig } from "../src/content/site/site-config.ts";

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
