import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import { PageAside } from "@/components/shared/page-aside";
import { PageIntro } from "@/components/shared/page-intro";
import { PageSection } from "@/components/shared/page-section";
import { Button } from "@/components/ui/button";
import { profileContent } from "@/content/site/profile-content";

const contactMethodMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const topicMotionDelays = [
  "motion-delay-2",
  "motion-delay-3",
  "motion-delay-4",
] as const;

const contactIcons = {
  email: Mail,
  linkedin: Linkedin,
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
        />

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
                      <Link href={method.href} target="_blank" rel="noreferrer">
                        {contact.methodsSection.actionLabel}
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
          />
        </div>

        <PageSection
          eyebrow={contact.topicsSection.eyebrow}
          title={contact.topicsSection.title}
          description={contact.topicsSection.description}
          contentClassName="grid gap-4 md:grid-cols-3"
        >
          {contact.topics.map((topic, index) => (
            <div
              key={topic}
              className={`motion-enter ${topicMotionDelays[index] ?? "motion-delay-4"}`}
            >
              <div className="interactive-card rounded-[1.5rem] border border-border/70 bg-background/72 p-4 text-sm leading-6 text-muted-foreground shadow-[0_18px_48px_-42px_rgb(15_23_42_/_0.28)] backdrop-blur dark:bg-background/10">
                {topic}
              </div>
            </div>
          ))}
        </PageSection>
      </Container>
    </section>
  );
}
