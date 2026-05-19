"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/content";
import { whatsappUrl } from "@/lib/utils";

export function FloatingActions({ locale }: { locale: Locale }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <Button asChild size="icon" aria-label="WhatsApp">
        <a href={whatsappUrl(locale)} target="_blank" rel="noreferrer">
          <MessageCircle className="size-5" />
        </a>
      </Button>
      <Button
        variant="secondary"
        size="icon"
        aria-label={locale === "pt" ? "Voltar ao topo" : "Back to top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="size-5" />
      </Button>
    </div>
  );
}
