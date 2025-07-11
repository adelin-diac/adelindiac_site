import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" mx-auto bg-gray-700/40 hover:bg-gray-700/20">
        <Link
          href="https://callcrew-ai.com"
          target="_blank"
          rel="noopener noreferrer"
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
              <strong>CallCrew AI</strong> - The Voice AI built for Construction
              Companies
            </span>
            <span className="text-sm flex items-center gap-2">
              <span className="hidden md:block">Learn more</span>{" "}
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
      <div className="py-20 px-5 md:px-20">
        <h1 className="text-4xl font-bold text-foreground text-center">
          Coming Soon...
        </h1>
        <h3 className="text-base text-muted-foreground text-center my-8">
          👋 Hey there, I'm Adelin.
        </h3>
      </div>
    </main>
  );
}
