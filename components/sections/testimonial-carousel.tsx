"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react";
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
  const visible = [
    current,
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length]
  ];

  function previous() {
    setActive((currentIndex) => (currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1));
  }

  function next() {
    setActive((currentIndex) => (currentIndex + 1) % testimonials.length);
  }

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-primary">
            <Linkedin className="size-4" />
            {locale === "pt" ? "Recomendacoes no LinkedIn" : locale === "es" ? "Recomendaciones en LinkedIn" : "LinkedIn recommendations"}
          </div>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {locale === "pt"
              ? "Como colegas descrevem meu trabalho"
              : locale === "es"
                ? "Como colegas describen mi trabajo"
                : "How colleagues describe my work"}
          </h2>
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

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {visible.map((testimonial, index) => (
          <Card
            key={`${testimonial.author}-${testimonial.quote}`}
            className={`flex min-h-64 flex-col justify-between p-5 transition ${
              index === 0 ? "border-primary/35 bg-primary/[0.055]" : "bg-white/[0.03]"
            }`}
          >
            <div>
              <Quote className="size-5 text-primary" />
              <p className="mt-5 text-base leading-7 text-foreground">"{testimonial.quote}"</p>
            </div>
            <div className="mt-8 border-t border-border pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </Card>
        ))}
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
    </div>
  );
}
