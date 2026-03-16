import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PageAsideProps extends HTMLAttributes<HTMLElement> {
  eyebrow: string;
  title?: string;
  description?: string;
  delayClassName?: string;
}

export function PageAside({
  eyebrow,
  title,
  description,
  className,
  children,
  delayClassName = "motion-enter motion-delay-3",
  ...props
}: PageAsideProps) {
  return (
    <aside className={cn(delayClassName, className)} {...props}>
      <div className="interactive-card rounded-[1.75rem] border border-border/70 bg-background/78 p-5 shadow-[0_22px_64px_-54px_rgb(15_23_42_/_0.3)] backdrop-blur dark:bg-card/76">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {eyebrow}
          </p>
          {title ? (
            <h2 className="text-xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)]">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </aside>
  );
}
