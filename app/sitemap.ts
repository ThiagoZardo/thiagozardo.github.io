import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-19");

  return [
    {
      url: `${siteUrl}/pt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/es`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
