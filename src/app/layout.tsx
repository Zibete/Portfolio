import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { siteConfig } from "@/content/site/site-config";
import { getAbsoluteUrl, getSiteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${siteConfig.name} | Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `Portfolio de ${siteConfig.name}`,
  alternates: {
    canonical: "/",
  },
  keywords: [
    siteConfig.name,
    "Portfolio",
    "Android",
    "Automation Engineer",
    "Next.js",
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getAbsoluteUrl("/"),
    siteName: `${siteConfig.name} | Portfolio`,
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.assets.profileImagePath,
        alt: siteConfig.assets.profileImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Portfolio`,
    description: siteConfig.description,
    images: [siteConfig.assets.profileImagePath],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1324" },
    { media: "(prefers-color-scheme: light)", color: "#f3f5fb" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn(manrope.variable, spaceGrotesk.variable)}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <SiteShell>{children}</SiteShell>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
