import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { getSEOTags } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BackButton from "@/components/layout/back-button";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {};
  }

  return getSEOTags({
    title: `${blog.title} | Adelin's Blog`,
    description: blog.description,
    keywords: blog.keywords,
    canonicalUrlRelative: `/blogs/${blog.slug}`,
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Dynamically import the MDX content
  let MDXContent;
  try {
    const contentModule = await import(
      `@/app/blogs/_content/${slug}/content.mdx`
    );
    MDXContent = contentModule.default;
  } catch (error) {
    console.error(`Error loading MDX content for ${slug}:`, error);
    notFound();
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      {/* Back Button */}
      <BackButton href="/blogs" className="mb-4" variant="outline" />

      {/* Blog Header */}
      <article>
        {/* Meta Info */}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {blog.title}
        </h1>
        {/* Description */}
        <p className="text-base md:text-lg text-justify italic text-muted-foreground my-8">
          {blog.description}
        </p>

        {/* Banner Image */}
        <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={blog.createdAt}>
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{blog.readTimeMins} min read</span>
        </div>
        <hr className="my-4" />
        {/* MDX Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none text-justify">
          <MDXContent />
        </div>
      </article>
    </section>
  );
}
