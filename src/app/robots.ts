import type { MetadataRoute } from "next";
import config from "@/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/404", "/500", "/api"],
      },
    ],
    sitemap: `https://${config.domainName}/sitemap.xml`,
  };
}
