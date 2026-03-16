import type { HTMLAttributes } from "react";
import { resolveTagVisual } from "@/lib/tag-visuals";
import { cn } from "@/lib/utils";

interface TagChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  size?: "sm" | "md";
  variant?: "default" | "marquee";
}

const chipSizeClassNames = {
  sm: {
    chip: "px-3 py-1 text-xs",
    icon: "size-5",
    svg: "size-3",
  },
  md: {
    chip: "px-4 py-2 text-sm",
    icon: "size-6",
    svg: "size-3.5",
  },
} as const;

export function TagChip({
  label,
  size = "sm",
  variant = "default",
  className,
  ...props
}: TagChipProps) {
  const { icon: Icon, accentClassName } = resolveTagVisual(label);
  const sizeClassNames = chipSizeClassNames[size];

  return (
    <span
      className={cn(
        "interactive-chip inline-flex items-center gap-2 rounded-full border border-border/70 font-medium",
        variant === "marquee"
          ? "marquee-chip bg-background/82 text-foreground shadow-sm dark:bg-background/18"
          : "bg-background/72 text-muted-foreground dark:bg-background/14",
        sizeClassNames.chip,
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full",
          variant === "marquee" && "marquee-icon",
          sizeClassNames.icon,
          accentClassName,
        )}
      >
        <Icon className={sizeClassNames.svg} />
      </span>
      {label}
    </span>
  );
}
