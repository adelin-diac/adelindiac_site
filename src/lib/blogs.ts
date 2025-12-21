import { BlogItem } from "@/types/blogs.types";
import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/app/blogs/_content");

/**
 * Get all blog posts from the _content directory
 * This runs at build time and automatically discovers all blogs
 */
export async function getAllBlogs(): Promise<BlogItem[]> {
  // Check if content directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.warn("Blog content directory not found:", CONTENT_DIR);
    return [];
  }

  const blogDirs = fs.readdirSync(CONTENT_DIR);

  const blogs = await Promise.all(
    blogDirs.map(async (dir) => {
      const metadataPath = path.join(CONTENT_DIR, dir, "metadata.ts");

      // Skip if metadata doesn't exist
      if (!fs.existsSync(metadataPath)) {
        console.warn(`No metadata.ts found for blog: ${dir}`);
        return null;
      }

      try {
        // Dynamically import the metadata
        const { metadata } = await import(`@/app/blogs/_content/${dir}/metadata`);
        return metadata as BlogItem;
      } catch (error) {
        console.error(`Error loading metadata for ${dir}:`, error);
        return null;
      }
    })
  );

  // Filter out null values and sort by date (newest first)
  return blogs
    .filter((blog): blog is BlogItem => blog !== null)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * Get a single blog by slug
 */
export async function getBlogBySlug(slug: string): Promise<BlogItem | null> {
  const metadataPath = path.join(CONTENT_DIR, slug, "metadata.ts");

  if (!fs.existsSync(metadataPath)) {
    return null;
  }

  try {
    const { metadata } = await import(`@/app/blogs/_content/${slug}/metadata`);
    return metadata as BlogItem;
  } catch (error) {
    console.error(`Error loading blog ${slug}:`, error);
    return null;
  }
}

/**
 * Filter blogs by tag slugs
 */
export function filterBlogsByTags(blogs: BlogItem[], tagSlugs: string[]): BlogItem[] {
  if (tagSlugs.length === 0) {
    return blogs;
  }

  return blogs.filter((blog) =>
    tagSlugs.some((tagSlug) => blog.tags.includes(tagSlug))
  );
}
