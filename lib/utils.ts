import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteUrl = "https://thiagozardo.dev";

export function whatsappUrl(locale: "pt" | "en") {
  const message =
    locale === "pt"
      ? "Ola, Thiago! Quero solicitar um orcamento para um projeto web."
      : "Hi, Thiago! I would like to request a quote for a web project.";

  return `https://wa.me/5513988770538?text=${encodeURIComponent(message)}`;
}
