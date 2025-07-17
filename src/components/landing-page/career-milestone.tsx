import { CareerBlock } from "@/types/career.types";
import Image from "next/image";

export default function CareerMilestone({
  careerBlock,
}: {
  careerBlock: CareerBlock;
}) {
  return (
    <div className="flex items-center justify-center my-4">
      <div className="group relative bg-gradient-to-br from-card/50 to-primary/10 rounded-2xl p-4 hover:scale-105 focus:scale-105 transition-all duration-300 ease-in-out cursor-pointer focus:outline-none max-w-sm border border-primary/20 hover:border-primary/40">
        {/* Image and Title Row */}
        <div className="flex items-center gap-3 mb-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10 p-1 flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300">
            <Image
              src={careerBlock.image}
              alt={careerBlock.title}
              width={32}
              height={32}
              className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {careerBlock.title}
          </h3>
        </div>

        {/* Date with celebration emoji */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {careerBlock.startDate}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              🎉
            </span>
          </p>
        </div>

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      </div>
    </div>
  );
}
