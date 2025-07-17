import { JobOrStartupCareerBlock } from "@/types/career.types";
import Image from "next/image";
import Link from "next/link";

export default function CareerSection({
  careerBlock,
}: {
  careerBlock: JobOrStartupCareerBlock;
}) {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="group relative bg-card/50 rounded-xl p-6 hover:scale-102 focus:scale-102 transition-all duration-300 ease-in-out cursor-pointer focus:outline-none max-w-4xl w-full">
        {/* Main content layout */}
        <div className="flex flex-col-reverse md:flex-row items-start gap-6">
          {/* Left side - Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground">
                {careerBlock.title}
              </h3>
              {careerBlock.type === "START_UP" && (
                <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full">
                  Startup
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground mb-4">
              <span className="text-blue-600 font-medium">
                {careerBlock.company}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                {careerBlock.startDate} - {careerBlock.endDate}
              </span>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {careerBlock.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {careerBlock.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold bg-background/50 text-foreground px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Image and Link */}
          <div className="flex flex-row md:flex-col justify-between md:justify-center items-center w-full md:w-auto gap-3 my-auto">
            <div className="rounded-md bg-background/20 w-full md:w-auto">
              <Image
                src={careerBlock.image}
                alt={careerBlock.title}
                width={96}
                height={72}
                className="object-cover rounded-lg"
              />
            </div>

            <Link
              href={careerBlock.link}
              target="_blank"
              rel="noopener"
              className="text-sm text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group/link"
            >
              Visit
              <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
