import type { ComponentPropsWithoutRef, ElementType } from "react";

type MDXComponents = Record<string, ElementType>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
      <h1
        className={[
          "text-4xl font-semibold tracking-tight text-foreground",
          "[font-family:var(--font-display)]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    h2: ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2
        className={[
          "text-2xl font-semibold tracking-tight text-foreground",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    p: ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
      <p
        className={["leading-7 text-muted-foreground", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
      <ul
        className={["list-disc space-y-2 pl-5 text-muted-foreground", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ol: ({ className, ...props }: ComponentPropsWithoutRef<"ol">) => (
      <ol
        className={[
          "list-decimal space-y-2 pl-5 text-muted-foreground",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    blockquote: ({
      className,
      ...props
    }: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        className={[
          "border-l-2 border-primary/40 pl-4 italic text-muted-foreground",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    a: ({ className, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a
        className={[
          "font-medium text-foreground underline underline-offset-4",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    hr: () => <hr className="my-8 border-border/80" />,
    pre: ({ className, ...props }: ComponentPropsWithoutRef<"pre">) => (
      <pre
        className={[
          "overflow-x-auto rounded-2xl border border-border/80 bg-card/80 p-4",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    code: ({ className, ...props }: ComponentPropsWithoutRef<"code">) => (
      <code
        className={[
          "rounded bg-muted px-1.5 py-0.5 text-sm text-foreground",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    wrapper: ({ className, ...props }: ComponentPropsWithoutRef<"div">) => (
      <div
        className={["space-y-6", className].filter(Boolean).join(" ")}
        {...props}
      />
    ),
    ...components,
  };
}
