import { ArticleCard } from "@/components/news/article-card";
import { ARTICLES } from "./articles";

export default function Page() {
  return (
    <div className="py-30 px-5 md:px-20">
      <h1 className="text-5xl font-bold text-foreground text-center">
        Press Coverage
      </h1>
      <h2 className="text-lg my-4 font-light text-foreground text-center">
        Any articles covering me, my work, achievements, projects, and more.
      </h2>
      <div className="flex flex-col gap-6 my-16 max-w-3xl mx-auto">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <div className="text-center text-sm text-muted-foreground">
        More coming soon. Watch this space...
      </div>
    </div>
  );
}
