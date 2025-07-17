import CAREER_BLOCKS from "@/static-data/career-list";
import CareerSection from "./career-section";
import CareerMilestone from "./career-milestone";

export default function Career() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10">
      <div>
        <h2 className="text-4xl font-bold text-foreground text-center">
          My Career
        </h2>
      </div>
      <div>
        {CAREER_BLOCKS.map((careerBlock, index) =>
          careerBlock.type === "JOB" || careerBlock.type === "START_UP" ? (
            <CareerSection key={index} careerBlock={careerBlock} />
          ) : (
            <CareerMilestone
              key={careerBlock.title}
              careerBlock={careerBlock}
            />
          )
        )}
      </div>
    </div>
  );
}
