import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client-access/", "/private/"],
    },
    sitemap: "https://kuikengroup.com/sitemap.xml",
    host: "https://kuikengroup.com",
  };
}
