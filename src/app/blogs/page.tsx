import TagFilter from "@/components/blog/tag-filter";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllBlogs, filterBlogsByTags } from "@/lib/blogs";

type PageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function BlogsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const selectedTags = params.q?.split(",").filter(Boolean) || [];

  // Get all blogs and filter by selected tags
  const allBlogs = await getAllBlogs();
  const filteredBlogs = filterBlogsByTags(allBlogs, selectedTags);

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4">
      {/* Header Section */}
      <div className="w-full flex flex-col items-center text-center mb-16">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground hidden">
          Adelin's Blog
        </h1>

        {/* Badge */}
        <div className="mb-4">
          <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-foreground/10 text-foreground border border-border">
            ✨ Latest Blogs
          </span>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground max-w-2xl">
          A peak inside my mind
        </p>
      </div>

      {/* Tag Filter Badges */}
      <TagFilter />

      {/* Blog Grid */}
      <div className="w-full max-w-6xl">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No blogs found for the selected tags.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
