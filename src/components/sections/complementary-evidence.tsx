import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import type { SiteProjectEvidenceContent } from "@/types/site";

export function ComplementaryEvidence({
  content,
}: {
  content: SiteProjectEvidenceContent;
}) {
  const cases = content.cases.filter((item) => item.id !== "migrar-sap");

  if (!cases.length) return null;

  return (
    <section className="py-14 sm:py-20" aria-labelledby="complementary-evidence-title">
      <Container>
        <div className="mb-7 max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {content.eyebrow}
          </p>
          <h2
            id="complementary-evidence-title"
            className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-3xl"
          >
            {content.title}
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {cases.map((item) => (
            <article key={item.id} className="rounded-2xl border border-border/70 bg-card/75 p-6 sm:p-7">
              <p className="font-mono text-xs text-primary">{item.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-foreground [font-family:var(--font-display)]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
              <ul className="mt-5 space-y-2 border-t border-border/70 pt-5">
                {item.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-l-2 border-border pl-3 text-xs leading-6 text-muted-foreground">{item.boundary}</p>
              <Link
                href={item.caseHref}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Leer caso completo
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
