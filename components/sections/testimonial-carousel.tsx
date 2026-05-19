"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { type Locale } from "@/lib/content";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCarousel({
  testimonials,
  locale
}: {
  testimonials: Testimonial[];
  locale: Locale;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  function previous() {
    setActive((currentIndex) => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1));
  }

  function next() {
    setActive((currentIndex) => (currentIndex + 1) % testimonials.length);
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <p className="text-sm font-semibold uppercase text-primary">
          {locale === "pt" ? "Avaliacoes" : locale === "es" ? "Recomendaciones" : "Recommendations"}
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          {locale === "pt"
            ? "Trechos-chave de recomendacoes no LinkedIn"
            : locale === "es"
              ? "Extractos clave de recomendaciones en LinkedIn"
              : "Key excerpts from LinkedIn recommendations"}
        </h2>
      </div>

      <Card className="overflow-hidden p-6">
        <div className="flex min-h-64 flex-col justify-between">
          <div>
            <div className="flex size-11 items-center justify-center rounded-md bg-primary text-[#120d05]">
              <Quote className="size-5" />
            </div>
            <p className="mt-6 text-xl leading-9 text-foreground">"{current.quote}"</p>
          </div>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-semibold">{current.author}</p>
              <p className="mt-1 text-sm text-muted-foreground">{current.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="secondary" size="icon" aria-label="Previous recommendation" onClick={previous}>
                <ChevronLeft className="size-5" />
              </Button>
              <Button variant="secondary" size="icon" aria-label="Next recommendation" onClick={next}>
                <ChevronRight className="size-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.author}-${testimonial.quote}`}
              type="button"
              aria-label={`Recommendation ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-10 bg-primary" : "w-5 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
