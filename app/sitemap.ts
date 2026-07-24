import type { MetadataRoute } from "next";

const baseUrl = "https://kuikengroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/work/lawn-fadez",
      priority: 0.7,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/work/kuiken-group",
      priority: 0.7,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
  }));
}
