"use client";

import { BLOG_TAGS } from "@/app/blogs/blog-constants";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export default function TagFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedTags = searchParams.get("q")?.split(",").filter(Boolean) || [];

  const handleAllPosts = useCallback(() => {
    router.push("/blogs");
  }, [router]);

  const toggleTag = useCallback(
    (slug: string) => {
      const newTags = selectedTags.includes(slug)
        ? selectedTags.filter((t) => t !== slug)
        : [...selectedTags, slug];

      if (newTags.length === 0) {
        router.push("/blogs");
      } else {
        router.push(`/blogs?q=${newTags.join(",")}`);
      }
    },
    [selectedTags, router]
  );

  const isAllPostsSelected = selectedTags.length === 0;

  // Unified badge style
  const getBadgeClasses = (isSelected: boolean) => {
    return `px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer border ${
      isSelected
        ? "bg-foreground/20 text-foreground border-border"
        : "bg-background/20 text-foreground border-border hover:bg-secondary"
    }`;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-12 px-4">
      {/* All Posts Button */}
      <button
        onClick={handleAllPosts}
        className={getBadgeClasses(isAllPostsSelected)}
      >
        All Posts
      </button>

      {/* Individual Tag Buttons */}
      {Object.values(BLOG_TAGS).map((tag) => {
        const isSelected = selectedTags.includes(tag.slug);
        return (
          <button
            key={tag.slug}
            onClick={() => toggleTag(tag.slug)}
            className={getBadgeClasses(isSelected)}
          >
            {tag.label}
          </button>
        );
      })}
    </div>
  );
}
