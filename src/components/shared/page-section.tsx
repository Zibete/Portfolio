import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  contentClassName?: string;
  delayClassName?: string;
}

export function PageSection({
  eyebrow,
  title,
  description,
  className,
  children,
  contentClassName,
  delayClassName = "motion-delay-2",
  ...props
}: PageSectionProps) {
  return (
    <section className={cn("motion-reveal", delayClassName, className)} {...props}>
      <div className="interactive-card rounded-[2rem] border border-border/70 bg-card/78 p-6 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:p-8">
        {eyebrow || title || description ? (
          <div className="space-y-3">
            {eyebrow ? (
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}

        {children ? (
          <div
            className={cn(
              eyebrow || title || description ? "mt-6" : undefined,
              contentClassName,
            )}
          >
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
