import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/client-access/", "/contact/success/", "/login/", "/portal/", "/private/"],
    },
    sitemap: "https://kuikengroup.com/sitemap.xml",
    host: "https://kuikengroup.com",
  };
}
