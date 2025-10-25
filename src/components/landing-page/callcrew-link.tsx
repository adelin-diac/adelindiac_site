import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import config from "@/config";

export default function CallCrewLink() {
  return (
    <div className=" mx-auto bg-gray-700/40 hover:bg-gray-700/20">
      <a
        href={config.callcrew.url}
        target="_blank"
        rel="noopener"
        className="transition shadow-lg cursor-pointer flex items-center space-x-4 p-4 max-w-7xl mx-auto"
      >
        <Image
          width={32}
          height={32}
          src="/images/callcrew-ai.png"
          alt="CallCrew AI Logo"
          className="h-10 w-10 rounded-md bg-white object-contain border"
        />
        <div className="text-base text-primary flex items-center justify-between w-full">
          <span className="mx-2">
            <strong>CallCrew AI</strong> - The AI Team member for Home Services & Trades
          </span>
          <span className="text-sm flex items-center gap-2">
            <span className="hidden md:block">Learn more</span>{" "}
            <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </a>
    </div>
  );
}
