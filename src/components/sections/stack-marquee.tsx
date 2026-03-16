"use client";

import { useEffect, useRef, useState } from "react";
import { TagChip } from "@/components/shared/tag-chip";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site/site-config";

const marqueeItems = siteConfig.stackMarquee.items;
const baseMarqueeSpeed = 34;
const hoverMarqueeSpeed = 18;
const activeChipSpeed = 0;

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

        <div className="motion-reveal motion-delay-2">
          <div
            className="stack-marquee-surface relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/72 py-3 shadow-[0_24px_70px_-58px_rgb(15_23_42_/_0.34)] backdrop-blur-xl sm:py-4"
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
                    const chipId = `${copyIndex}-${item}`;

                    return (
                      <li
                        key={`${copyIndex}-${item}`}
                        className="shrink-0 px-2 sm:px-3"
                      >
                        <TagChip
                          label={item}
                          size="md"
                          variant="marquee"
                          data-active={activeChipId === chipId ? "true" : "false"}
                          onPointerEnter={() => setActiveChipId(chipId)}
                          onPointerLeave={() => setActiveChipId(null)}
                        />
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
