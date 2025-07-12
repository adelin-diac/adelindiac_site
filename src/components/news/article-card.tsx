import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/articles.types";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener"
      className="group block w-full max-w-3xl mx-auto"
    >
      <div className="bg-card border border-border rounded-lg p-6 hover:scale-102 transition-transform duration-300 ease-in-out">
        <div className="flex flex-col md:flex-row items-start gap-4">
          {/* Article content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                {article.source}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {article.date}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>

            <p className="text-muted-foreground line-clamp-2">
              {article.description}
            </p>
          </div>
          <div className="my-auto mx-auto">
            <Image
              className="rounded-md"
              src={article.image}
              alt={article.title}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
