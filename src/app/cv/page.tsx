import Link from "next/link";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { Button } from "@/components/ui/button";
import { profileContent } from "@/content/site/profile-content";
import { siteConfig } from "@/content/site/site-config";

const snapshotMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const summaryMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const cvActionIcons = {
  projects: ArrowRight,
  email: Mail,
  github: Github,
} as const;

export const metadata = {
  title: profileContent.cv.eyebrow,
};

export default function CvPage() {
  const { cv } = profileContent;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={cv.eyebrow}
          title={cv.title}
          description={cv.description}
        >
          <Button asChild>
            <a href={siteConfig.assets.cvFilePath} download>
              {cv.downloadCtaLabel}
              <Download />
            </a>
          </Button>
        </PageIntro>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <PageSection
            eyebrow={cv.snapshotSection.eyebrow}
            title={cv.snapshotSection.title}
            description={cv.snapshotSection.description}
            contentClassName="grid gap-4 md:grid-cols-3"
          >
            {cv.snapshots.map((item, index) => (
              <div
                key={item.label}
                className={`motion-enter ${snapshotMotionDelays[index] ?? "motion-delay-4"}`}
              >
                <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-foreground">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </PageSection>

          <PageAside
            eyebrow={cv.aside.eyebrow}
            title={cv.aside.title}
            description={cv.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="flex flex-col gap-2">
              {cv.actions.map((action) => {
                const Icon = cvActionIcons[action.id];

                return (
                  <Button
                    key={action.id}
                    variant={action.variant}
                    asChild
                    className="w-full"
                  >
                    <Link
                      href={action.href}
                      target={action.external ? "_blank" : undefined}
                      rel={action.external ? "noreferrer" : undefined}
                    >
                      {action.label}
                      <Icon />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </PageAside>
        </div>

        <PageSection
          eyebrow={cv.summarySection.eyebrow}
          title={cv.summarySection.title}
          description={cv.summarySection.description}
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {cv.summary.map((item, index) => (
            <div
              key={item.title}
              className={`motion-enter ${summaryMotionDelays[index] ?? "motion-delay-4"}`}
            >
              <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </PageSection>
      </Container>
    </section>
  );
}
