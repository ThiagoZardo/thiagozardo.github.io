"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile, type Locale } from "@/lib/content";

type Labels = {
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
};

export function ContactForm({ locale, labels }: { locale: Locale; labels: Labels }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = locale === "pt" ? "Solicitacao de orcamento" : "Quote request";
    const body = [
      `${labels.name}: ${form.get("name")}`,
      `${labels.email}: ${form.get("email")}`,
      `${labels.company}: ${form.get("company")}`,
      "",
      `${labels.message}:`,
      form.get("message")
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Card className="p-5 sm:p-6">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            {labels.name}
            <Input name="name" autoComplete="name" required />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {labels.email}
            <Input name="email" type="email" autoComplete="email" required />
          </label>
        </div>
        <label className="grid gap-2 text-sm font-medium">
          {labels.company}
          <Input name="company" autoComplete="organization" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          {labels.message}
          <Textarea name="message" required />
        </label>
        <Button type="submit" className="w-full sm:w-fit">
          <Send className="size-4" />
          {labels.submit}
        </Button>
      </form>
    </Card>
  );
}
