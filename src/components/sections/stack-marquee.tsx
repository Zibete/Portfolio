"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  Building2,
  FileSpreadsheet,
  Flame,
  Layers3,
  PanelsTopLeft,
  TableProperties,
  Wind,
} from "lucide-react";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site/site-config";

const marqueeItems = siteConfig.stackMarquee.items;
const baseMarqueeSpeed = 34;
const hoverMarqueeSpeed = 18;
const activeChipSpeed = 0;

const skillVisuals: Record<
  string,
  { icon: LucideIcon; accentClass: string }
> = {
  Kotlin: {
    icon: Braces,
    accentClass:
      "bg-indigo-500/12 text-indigo-700 dark:bg-indigo-400/14 dark:text-indigo-200",
  },
  "Jetpack Compose": {
    icon: Layers3,
    accentClass:
      "bg-sky-500/12 text-sky-700 dark:bg-sky-400/14 dark:text-sky-200",
  },
  Firebase: {
    icon: Flame,
    accentClass:
      "bg-amber-500/14 text-amber-700 dark:bg-amber-400/14 dark:text-amber-200",
  },
  Python: {
    icon: Bot,
    accentClass:
      "bg-emerald-500/12 text-emerald-700 dark:bg-emerald-400/14 dark:text-emerald-200",
  },
  VBA: {
    icon: FileSpreadsheet,
    accentClass:
      "bg-lime-500/12 text-lime-700 dark:bg-lime-400/14 dark:text-lime-200",
  },
  Excel: {
    icon: TableProperties,
    accentClass:
      "bg-green-500/12 text-green-700 dark:bg-green-400/14 dark:text-green-200",
  },
  "SAP FI": {
    icon: Building2,
    accentClass:
      "bg-cyan-500/12 text-cyan-700 dark:bg-cyan-400/14 dark:text-cyan-200",
  },
  "Next.js": {
    icon: PanelsTopLeft,
    accentClass:
      "bg-slate-500/12 text-slate-700 dark:bg-slate-300/16 dark:text-slate-100",
  },
  TypeScript: {
    icon: Braces,
    accentClass:
      "bg-blue-500/12 text-blue-700 dark:bg-blue-400/14 dark:text-blue-200",
  },
  "Tailwind CSS": {
    icon: Wind,
    accentClass:
      "bg-teal-500/12 text-teal-700 dark:bg-teal-400/14 dark:text-teal-200",
  },
};

export function StackMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLUListElement>(null);
  const frameRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(baseMarqueeSpeed);
  const surfaceHoverRef = useRef(false);
  const chipHoverRef = useRef(false);
  const [isSurfaceHovered, setIsSurfaceHovered] = useState(false);
  const [activeChipId, setActiveChipId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    surfaceHoverRef.current = isSurfaceHovered;
  }, [isSurfaceHovered]);

  useEffect(() => {
    chipHoverRef.current = Boolean(activeChipId);
  }, [activeChipId]);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;

    if (!track || !group) {
      return;
    }

    if (prefersReducedMotion) {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }

      offsetRef.current = 0;
      speedRef.current = baseMarqueeSpeed;
      track.style.transform = "none";

      return;
    }

    let previousTimestamp = performance.now();

    const animate = (timestamp: number) => {
      const delta = Math.min((timestamp - previousTimestamp) / 1000, 0.05);
      previousTimestamp = timestamp;

      const groupWidth = group.offsetWidth;
      const targetSpeed = chipHoverRef.current
        ? activeChipSpeed
        : surfaceHoverRef.current
          ? hoverMarqueeSpeed
          : baseMarqueeSpeed;

      speedRef.current += (targetSpeed - speedRef.current) * Math.min(1, delta * 7);
      offsetRef.current -= speedRef.current * delta;

      if (groupWidth > 0 && Math.abs(offsetRef.current) >= groupWidth) {
        offsetRef.current += groupWidth;
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [prefersReducedMotion]);

  return (
    <section className="-mt-6 pb-14 sm:-mt-8 sm:pb-15">
      <Container className="space-y-3">
        <div className="motion-reveal motion-delay-1 flex items-center gap-3 px-1">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
            {siteConfig.stackMarquee.label}
          </p>
          <div className="h-px flex-1 bg-border/70" />
        </div>

        <div
          className="stack-marquee-surface interactive-card motion-reveal motion-delay-2 relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/72 py-3 shadow-[0_24px_70px_-58px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:py-4"
          onPointerEnter={() => setIsSurfaceHovered(true)}
          onPointerLeave={() => {
            setIsSurfaceHovered(false);
            setActiveChipId(null);
          }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[rgb(245_248_252)] via-[rgb(245_248_252_/_0.94)] to-transparent dark:from-[rgb(12_18_34)] dark:via-[rgb(12_18_34_/_0.94)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[rgb(245_248_252)] via-[rgb(245_248_252_/_0.94)] to-transparent dark:from-[rgb(12_18_34)] dark:via-[rgb(12_18_34_/_0.94)]" />

          <div ref={trackRef} className="stack-marquee-track flex w-max min-w-full">
            {[0, 1].map((copyIndex) => (
              <ul
                key={copyIndex}
                aria-hidden={copyIndex === 1}
                ref={copyIndex === 0 ? groupRef : undefined}
                className={`stack-marquee-group flex shrink-0 ${
                  copyIndex === 1 ? "stack-marquee-copy" : ""
                }`}
              >
                {marqueeItems.map((item) => {
                  const visual = skillVisuals[item];
                  const Icon = visual?.icon ?? Braces;
                  const chipId = `${copyIndex}-${item}`;

                  return (
                    <li
                      key={`${copyIndex}-${item}`}
                      className="shrink-0 px-2 sm:px-3"
                    >
                      <span
                        className="marquee-chip inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/82 px-4 py-2 text-sm font-medium text-foreground shadow-sm dark:bg-background/18"
                        data-active={activeChipId === chipId ? "true" : "false"}
                        onPointerEnter={() => setActiveChipId(chipId)}
                        onPointerLeave={() => setActiveChipId(null)}
                      >
                        <span
                          className={cn(
                            "marquee-icon inline-flex size-6 items-center justify-center rounded-full",
                            visual?.accentClass ??
                              "bg-primary/12 text-primary dark:bg-primary/16",
                          )}
                        >
                          <Icon className="size-3.5" />
                        </span>
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
