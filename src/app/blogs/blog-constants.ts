import { BlogTag } from "@/types/blogs.types";

export const BLOG_TAGS: Record<string, BlogTag> = {
  // TECH: {
  //   slug: "tech",
  //   label: "Tech",
  //   extraClasses: "text-blue-500 bg-blue-500/10 border border-blue-500/30",
  // },
  // STARTUPS: {
  //   slug: "startups",
  //   label: "Startups",
  //   extraClasses: "text-purple-500 bg-purple-500/10 border border-purple-500/30",
  // },
  // AI: {
  //   slug: "ai",
  //   label: "AI",
  //   extraClasses: "text-pink-500 bg-pink-500/10 border border-pink-500/30",
  // },
  PRODUCTIVITY: {
    slug: "productivity",
    label: "Productivity",
    extraClasses: "text-green-500 bg-green-500/10 border border-green-500/30",
  },
  LIFE: {
    slug: "life",
    label: "Life",
    extraClasses: "text-amber-500 bg-amber-500/10 border border-amber-500/30",
  },
  // SMART_HOME: {
  //   slug: "smart-home",
  //   label: "Smart Home",
  //   extraClasses: "text-cyan-500 bg-cyan-500/10 border border-cyan-500/30",
  // },
};
