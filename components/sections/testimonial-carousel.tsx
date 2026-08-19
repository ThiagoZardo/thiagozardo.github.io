"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Linkedin, Quote } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { profile, type Locale } from "@/lib/content";

type Testimonial = { quote: string; author: string; role: string };

export function TestimonialCarousel({ testimonials, locale }: { testimonials: Testimonial[]; locale: Locale }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, testimonials.length]);

  const current = testimonials[active];
  const previous = () => setActive((index) => (index === 0 ? testimonials.length - 1 : index - 1));
  const next = () => setActive((index) => (index + 1) % testimonials.length);

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="testimonial-toolbar">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" />
          {locale === "pt" ? "Recomendações no LinkedIn" : "LinkedIn recommendations"}
        </a>
        <div className="testimonial-controls">
          <span>{String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <button type="button" onClick={previous} aria-label={locale === "pt" ? "Recomendação anterior" : "Previous recommendation"}><ChevronLeft aria-hidden="true" /></button>
          <button type="button" onClick={next} aria-label={locale === "pt" ? "Próxima recomendação" : "Next recommendation"}><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>

      <div className="testimonial-stage" key={`${current.author}-${active}`} aria-live="polite">
        <Quote aria-hidden="true" />
        <blockquote>“{current.quote}”</blockquote>
        <div className="testimonial-author"><strong>{current.author}</strong><span>{current.role}</span></div>
      </div>

      <div className="testimonial-tabs" aria-label={locale === "pt" ? "Selecionar recomendação" : "Select recommendation"}>
        {testimonials.map((testimonial, index) => (
          <button key={testimonial.author} type="button" onClick={() => setActive(index)} aria-pressed={index === active}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{testimonial.author}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}
