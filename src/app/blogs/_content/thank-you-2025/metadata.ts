import { BlogItem } from "@/types/blogs.types";
import { BLOG_TAGS } from "../../blog-constants";

export const metadata: BlogItem = {
  title: "Thank you 2025",
  slug: "thank-you-2025",
  description:
    "Two full-time jobs, two side-projects, one startup, many ups and downs. A reflection on the year that changed my life.",
  image: "/images/blog/thank-you-2025-cover.png",
  createdAt: "2025-12-22",
  tags: [BLOG_TAGS.LIFE.slug],
  keywords: [],
  readTimeMins: 6,
};
