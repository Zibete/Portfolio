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

  const singleCase = cases.length === 1;

  return (
    <section className="py-6 sm:py-8" aria-labelledby="complementary-evidence-title">
      <Container>
        <div className="mb-6 max-w-2xl space-y-3">
          <div className="flex items-center gap-2.5">
            <svg
              viewBox="0 0 960 960"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
              className="size-6 shrink-0 text-signal"
            >
              <path d="M40-240q10-105 64-191t139-140l-77-129q-9-14-4.5-30t18.5-24q14-9 30-5t24 18l80 133q38-16 79.5-24t86.5-8q45 0 86.5 8t79.5 24l80-133q8-14 24-18t30 5q14 8 18 24t-4 30l-77 129q85 54 139 140t64 191H40Zm680.5-151.5Q722-409 711-426t-27-22q-16-5-29 4t-15 26q-2 17 9 34t27.5 22.5Q693-356 706-365t14.5-26.5ZM284-362q16-5 27-22t9.5-34.5Q319-436 306-445t-29.5-3.5Q260-443 249-426t-9 34q2 17 15 26t29 4Z" />
            </svg>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {content.eyebrow}
            </p>
          </div>
          <h2
            id="complementary-evidence-title"
            className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-3xl"
          >
            {content.title}
          </h2>
        </div>
        <div className={`grid gap-5 ${singleCase ? "" : "lg:grid-cols-2"}`}>
          {cases.map((item) => (
            <article
              key={item.id}
              className={`rounded-2xl border border-border/70 bg-card/75 p-6 sm:p-7 ${singleCase ? "lg:grid lg:grid-cols-2 lg:items-start lg:gap-10" : ""}`}
            >
              <div>
                <p className="font-mono text-xs text-primary">{item.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-foreground [font-family:var(--font-display)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
              </div>
              <div>
                <ul className={`mt-5 space-y-2 border-t border-border/70 pt-5 ${singleCase ? "lg:mt-0 lg:border-t-0 lg:pt-0" : ""}`}>
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
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
