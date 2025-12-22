import { BlogItem } from "@/types/blogs.types";
import { BLOG_TAGS } from "@/app/blogs/blog-constants";
import Link from "next/link";

type BlogCardProps = {
  blog: BlogItem;
};

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group block bg-card rounded-lg overflow-hidden transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-video bg-muted relative overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Meta Info - Date and Read Time */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{blog.readTimeMins} min read</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.map((tagSlug) => {
            const tag = Object.values(BLOG_TAGS).find(
              (t) => t.slug === tagSlug
            );
            if (!tag) return null;
            return (
              <span
                key={tagSlug}
                className={`px-2 py-1 text-xs font-sm rounded ${tag.extraClasses}`}
              >
                {tag.label}
              </span>
            );
          })}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 text-foreground leading-tight">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
          {blog.description}
        </p>
      </div>
    </Link>
  );
}
