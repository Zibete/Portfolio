import { Container } from "@/components/shared/container";

interface PagePlaceholderProps {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  nextStep: string;
  sourcePath?: string;
}

export function PagePlaceholder({
  eyebrow,
  title,
  description,
  bullets,
  nextStep,
  sourcePath,
}: PagePlaceholderProps) {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>
          <ul className="grid gap-3">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm text-muted-foreground backdrop-blur"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm backdrop-blur">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Estado actual
          </p>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            {nextStep}
          </p>

          {sourcePath ? (
            <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Fuente futura
              </p>
              <code className="mt-3 block text-sm text-foreground">
                {sourcePath}
              </code>
            </div>
          ) : null}
        </aside>
      </Container>
    </section>
  );
}
