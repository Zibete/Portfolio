import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pagina no encontrada",
  description:
    "La ruta solicitada no existe o ya no esta disponible dentro del portfolio.",
};

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <div className="interactive-card relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/78 p-8 shadow-[0_28px_90px_-60px_rgb(15_23_42_/_0.35)] backdrop-blur-xl sm:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.12),_transparent)] dark:bg-[linear-gradient(180deg,_rgb(84_139_255_/_0.14),_transparent)]" />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-primary">
                Error 404
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground [font-family:var(--font-display)] sm:text-4xl">
                Esta pagina no forma parte del portfolio.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                La ruta que intentaste abrir no esta publicada o ya no existe.
                Podes volver al inicio o revisar los proyectos vigentes.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft />
                  Volver al inicio
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/projects">
                  Ver proyectos
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
