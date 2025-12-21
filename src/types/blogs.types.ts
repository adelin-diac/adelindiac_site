export type BlogTag = {
  slug: string;
  label: string;
  extraClasses: string;
};

export type BlogItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
  createdAt: string;
  // Array of blog tag slugs (e.g., ["tech", "ai"])
  tags: string[];
  keywords: string[];
  readTimeMins: number;
};
