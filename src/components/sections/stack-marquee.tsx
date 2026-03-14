import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site/site-config";

const marqueeItems = siteConfig.stackMarquee.items;

export function StackMarquee() {
  return (
    <section className="-mt-6 pb-14 sm:-mt-8 sm:pb-20">
      <Container className="space-y-4">
        <div className="flex items-center gap-3 px-1">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {siteConfig.stackMarquee.label}
          </p>
          <div className="h-px flex-1 bg-border/70" />
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/72 py-3 shadow-[0_24px_70px_-58px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[rgb(245_248_252)] via-[rgb(245_248_252_/_0.94)] to-transparent dark:from-[rgb(12_18_34)] dark:via-[rgb(12_18_34_/_0.94)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[rgb(245_248_252)] via-[rgb(245_248_252_/_0.94)] to-transparent dark:from-[rgb(12_18_34)] dark:via-[rgb(12_18_34_/_0.94)]" />

          <div className="stack-marquee-track flex w-max min-w-full">
            {[0, 1].map((copyIndex) => (
              <ul
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                className={`stack-marquee-group flex shrink-0 ${
                  copyIndex === 1 ? "stack-marquee-copy" : ""
                }`}
              >
                {marqueeItems.map((item) => (
                  <li
                    key={`${copyIndex}-${item}`}
                    className="shrink-0 px-2 sm:px-3"
                  >
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-medium text-foreground shadow-sm dark:bg-background/18">
                      <span className="inline-flex size-1.5 rounded-full bg-primary/80" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
