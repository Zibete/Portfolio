import { Container } from "@/components/shared/container";
import { siteConfig } from "@/content/site/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <Container className="flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}.{" "}
          {siteConfig.footer.copyrightSuffix}
        </p>
        <p>{siteConfig.footer.description}</p>
      </Container>
    </footer>
  );
}
