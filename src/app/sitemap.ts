import config from "@/config";
import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Get all blog posts
  const blogs = await getAllBlogs();

  // Generate blog URLs
  const blogUrls: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `https://${config.domainName}/blogs/${blog.slug}`,
    lastModified: new Date(blog.createdAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: `https://${config.domainName}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `https://${config.domainName}/news`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `https://${config.domainName}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogUrls,
  ];
}
