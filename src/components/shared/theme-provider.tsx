"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { siteConfig } from "@/content/site/site-config";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={siteConfig.defaultTheme}
      disableTransitionOnChange
      enableSystem={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
