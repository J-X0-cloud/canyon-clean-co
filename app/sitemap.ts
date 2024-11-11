import type { MetadataRoute } from "next";
import { areas } from "@/lib/data/areas";
import { legalPages } from "@/lib/data/legal";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/quote",
    ...areas.map((area) => `/house-cleaning/${area.slug}`),
    ...legalPages.map((page) => `/legal/${page.slug}`),
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/legal") ? 0.2 : 0.8,
  }));
}
