import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://thiagozardo.github.io";

export function whatsappUrl(locale: "pt" | "en" | "es") {
  const messages = {
    pt: "Ola, Thiago! Quero solicitar um orcamento para um projeto web.",
    en: "Hi, Thiago! I would like to request a quote for a web project.",
    es: "Hola, Thiago! Quiero solicitar un presupuesto para un proyecto web."
  };

  return `https://wa.me/5513988770538?text=${encodeURIComponent(messages[locale])}`;
}
