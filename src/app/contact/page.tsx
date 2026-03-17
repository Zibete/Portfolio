import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { Button } from "@/components/ui/button";
import { profileContent } from "@/content/site/profile-content";
import { siteConfig } from "@/content/site/site-config";

const contactMethodMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const summaryMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const contactIcons = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
} as const;

const contactActionIcons = {
  projects: ArrowRight,
  email: Mail,
  github: Github,
} as const;

export const metadata = {
  title: profileContent.contact.eyebrow,
};

export default function ContactPage() {
  const { contact } = profileContent;

  return (
    <section className="py-16 sm:py-24">
      <Container className="space-y-10">
        <PageIntro
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        >
          <Button asChild>
            <a href={siteConfig.assets.cvFilePath} download>
              {contact.downloadCtaLabel}
              <Download />
            </a>
          </Button>
        </PageIntro>

        <PageSection
          eyebrow={contact.summarySection.eyebrow}
          title={contact.summarySection.title}
          description={contact.summarySection.description}
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {contact.summary.map((item, index) => (
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

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <PageSection
            eyebrow={contact.methodsSection.eyebrow}
            title={contact.methodsSection.title}
            description={contact.methodsSection.description}
            contentClassName="grid gap-4"
          >
            {contact.methods.map((method, index) => {
              const Icon = contactIcons[method.id];

              return (
                <div
                  key={method.label}
                  className={`motion-enter ${contactMethodMotionDelays[index] ?? "motion-delay-4"}`}
                >
                  <div className="interactive-card flex flex-col gap-4 rounded-[1.5rem] border border-border/70 bg-background/72 p-5 shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                        <Icon className="size-4 text-primary" />
                        {method.label}
                      </div>
                      <p className="text-base font-medium text-foreground">
                        {method.value}
                      </p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {method.description}
                      </p>
                    </div>

                    <Button
                      variant="outline"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <Link
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noreferrer" : undefined}
                      >
                        {method.actionLabel}
                        <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </PageSection>

          <PageAside
            eyebrow={contact.aside.eyebrow}
            title={contact.aside.title}
            description={contact.aside.description}
            className="lg:sticky lg:top-24"
          >
            <div className="flex flex-col gap-2">
              {contact.aside.actions.map((action) => {
                const Icon = contactActionIcons[action.id];

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
      </Container>
    </section>
  );
}
