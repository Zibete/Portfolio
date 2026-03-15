import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface PageIntroProps extends HTMLAttributes<HTMLElement> {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  className,
  children,
  ...props
}: PageIntroProps) {
  return (
    <header
      className={cn("motion-reveal motion-delay-1 space-y-4", className)}
      {...props}
    >
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
        {eyebrow}
      </p>
      <div className="space-y-4">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
      {children ? <div className="flex flex-wrap gap-2">{children}</div> : null}
    </header>
  );
}
