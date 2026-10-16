import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/speaking", "/coaching", "/speaker-kit", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    // Build time: every deploy republishes the content.
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
