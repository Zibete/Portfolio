"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, FileCode2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import type {
  SiteEngineeringTraceContent,
  SiteEngineeringTraceStage,
} from "@/types/site";
import { cn } from "@/lib/utils";

interface EngineeringTraceProps {
  content: SiteEngineeringTraceContent;
}

function ArtifactPanel({
  stage,
  interactive = true,
}: {
  stage: SiteEngineeringTraceStage;
  interactive?: boolean;
}) {
  const { artifact } = stage;

  return (
    <div className="overflow-hidden rounded-xl border border-border/75 bg-background/95 shadow-[0_24px_85px_-57px_rgb(0_0_0_/_0.5)]">
      <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-muted/65 px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <FileCode2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
          <span className="truncate font-mono text-xs text-foreground">
            {artifact.file}
          </span>
        </div>
        <span className="shrink-0 rounded-full border border-border/70 px-2 py-1 text-[0.65rem] text-muted-foreground">
          {artifact.origin} · fuente pública
        </span>
      </div>

      <div className="space-y-3 px-4 py-5">
        {artifact.lines.map((line, index) => (
          <div className="flex items-start gap-4" key={line}>
            <span className="w-5 shrink-0 font-mono text-xs tabular-nums text-muted-foreground/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="min-w-0 font-mono text-xs leading-6 text-foreground/85 sm:text-sm">
              {line}
            </p>
          </div>
        ))}
      </div>

      <a
        tabIndex={interactive ? 0 : -1}
        className="inline-flex min-h-10 items-center gap-2 border-t border-border/70 px-4 py-3 text-xs font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        href={artifact.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        Inspeccionar evidencia pública
        <ArrowUpRight aria-hidden="true" className="size-3.5" />
      </a>
    </div>
  );
}

function TraceScene({
  stage,
  interactive = true,
}: {
  stage: SiteEngineeringTraceStage;
  interactive?: boolean;
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
          {stage.label}
        </p>
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground [font-family:var(--font-display)] sm:text-3xl">
          {stage.title}
        </h3>
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          {stage.description}
        </p>
      </div>
      <ArtifactPanel stage={stage} interactive={interactive} />
      <p className="inline-flex items-center gap-2 text-xs font-medium text-foreground/85">
        <CheckCircle2 aria-hidden="true" className="size-4 text-signal" />
        {stage.outcome}
      </p>
    </div>
  );
}

export function EngineeringTrace({ content }: EngineeringTraceProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<(HTMLElement | null)[]>([]);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const activeRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = content.stages.length - 1;

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || lastIndex <= 0) return;

    const motionQuery = window.matchMedia(
      "(min-width: 1024px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)",
    );

    const update = () => {
      frameRef.current = null;
      if (!motionQuery.matches) return;

      const rect = rail.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;

      const travel = Math.max(1, rail.offsetHeight - window.innerHeight);
      const unit = Math.max(0, Math.min(1, -rect.top / travel));
      const position = unit * lastIndex;
      const current = Math.round(position);

      if (activeRef.current !== current) {
        const previousScene = sceneRefs.current[activeRef.current];
        if (document.activeElement && previousScene?.contains(document.activeElement)) {
          navRefs.current[current]?.focus({ preventScroll: true });
        }
        activeRef.current = current;
        setActiveIndex(current);
      }

      if (progressRef.current) {
        progressRef.current.style.width = String(unit * 100) + "%";
      }

      sceneRefs.current.forEach((scene, index) => {
        if (!scene) return;
        const offset = index - position;
        const distance = Math.abs(offset);
        const scale = Math.max(0.84, 1 - distance * 0.08);
        const x = offset * 100;
        const depth = -Math.min(2, distance) * 180;
        const rotate = -Math.max(-1.5, Math.min(1.5, offset)) * 10;

        scene.style.transform =
          "translate3d(calc(-50% + " + x + "%), -50%, " + depth +
          "px) rotateY(" + rotate + "deg) scale(" + scale + ")";
        scene.style.opacity = String(Math.max(0, 1 - distance * 0.68));
        scene.style.visibility = distance > 1.5 ? "hidden" : "visible";
        scene.style.pointerEvents = distance < 0.48 ? "auto" : "none";
        scene.style.zIndex = String(10 - Math.round(distance * 2));
      });
    };

    const schedule = () => {
      if (!motionQuery.matches || frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(update);
    };

    const syncMotionMode = () => {
      if (motionQuery.matches) {
        schedule();
      } else if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };

    syncMotionMode();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motionQuery.addEventListener("change", syncMotionMode);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motionQuery.removeEventListener("change", syncMotionMode);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [lastIndex]);

  const navigateTo = (index: number) => {
    const rail = railRef.current;
    if (!rail || lastIndex <= 0) return;

    const top = rail.getBoundingClientRect().top + window.scrollY;
    const travel = Math.max(1, rail.offsetHeight - window.innerHeight);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: top + (index / lastIndex) * travel,
      behavior: prefersReducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <section
      id="engineering-trace"
      className="relative scroll-mt-24 border-y border-border/50 bg-card/20 py-10 sm:py-11"
      aria-labelledby="engineering-trace-title"
    >
      <Container>
        <div className="w-full space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {content.eyebrow}
          </p>
          <h2
            id="engineering-trace-title"
            className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-5xl"
          >
            {content.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="trace-static mt-8 grid gap-5">
          {content.stages.map((stage, index) => (
            <article
              className="rounded-2xl border border-border/70 bg-card/65 p-5 sm:p-7"
              key={stage.id}
            >
              <p className="mb-5 font-mono text-xs text-primary">
                {String(index + 1).padStart(2, "0")} / {String(content.stages.length).padStart(2, "0")}
              </p>
              <TraceScene stage={stage} />
            </article>
          ))}
        </div>

        <div className="trace-scroller relative mt-8 h-[300svh]" ref={railRef}>
          <div className="sticky top-28 flex h-[calc(100svh-9rem)] min-h-[27rem] flex-col overflow-hidden rounded-3xl border border-border/70 bg-card/70 shadow-[0_24px_90px_-70px_rgb(15_23_42_/_0.65)]">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 px-6 py-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Evidence inspector / 0{activeIndex + 1} — 0{content.stages.length}
              </p>
              <div className="flex items-center gap-2">
                <span className="hidden items-center gap-1.5 text-xs text-muted-foreground xl:inline-flex">
                  Scroll o elegí una etapa
                  <ArrowDown aria-hidden="true" className="size-3.5" />
                </span>
                <button
                  type="button"
                  onClick={() => navigateTo(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  aria-label="Etapa anterior"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 text-foreground transition-colors hover:border-primary/50 hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo(activeIndex + 1)}
                  disabled={activeIndex === lastIndex}
                  aria-label="Etapa siguiente"
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-border/70 text-foreground transition-colors hover:border-primary/50 hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-[12.5rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)]">
              <nav
                className="flex flex-col justify-center gap-2 border-r border-border/65 p-4 xl:p-5"
                aria-label="Etapas del proceso de ingeniería"
              >
                {content.stages.map((stage, index) => (
                  <button
                    key={stage.id}
                    type="button"
                    ref={(node) => { navRefs.current[index] = node; }}
                    onClick={() => navigateTo(index)}
                    aria-current={activeIndex === index ? "step" : undefined}
                    className={cn(
                      "group flex min-h-14 items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                      activeIndex === index
                        ? "border-signal/55 bg-signal/10 text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border/70 hover:bg-muted/60 hover:text-foreground",
                    )}
                  >
                    <span className={cn("font-mono text-xs tabular-nums", activeIndex === index ? "text-signal" : "text-primary")}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs font-medium xl:text-sm">
                      {stage.label}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="trace-world relative min-w-0 overflow-hidden">
                <div aria-hidden="true" className="trace-floor pointer-events-none absolute inset-x-0 bottom-0 h-3/5" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 border-t border-primary/10" />
                {content.stages.map((stage, index) => (
                  <article
                    key={stage.id}
                    ref={(node) => { sceneRefs.current[index] = node; }}
                    className="trace-scene absolute left-1/2 top-1/2 w-[min(82%,35rem)] rounded-2xl border border-border/70 bg-card/95 p-5 shadow-[0_32px_120px_-65px_rgb(0_0_0_/_0.6)] xl:p-7"
                    aria-hidden={activeIndex !== index}
                  >
                    <TraceScene stage={stage} interactive={activeIndex === index} />
                  </article>
                ))}
              </div>
            </div>

            <div className="h-1 bg-border/40" aria-hidden="true">
              <div ref={progressRef} className="h-full w-0 bg-signal" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
