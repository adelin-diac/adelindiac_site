import { LinkedinIcon, GithubIcon } from "@/icons";
import ChangingHeadline from "./changing-headline";
import Link from "next/link";
import config from "@/config";

export default function HeroSection() {
  return (
    <div className="w-full h-[50vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="sr-only">Adelin Diac - Founder & Software Engineer</h1>
        <ChangingHeadline />
        <span className="text-center my-8 flex items-center justify-center gap-2">
          <div className="animate-[wiggle-10_2s_ease-in-out_infinite] text-3xl">
            👋
          </div>
          <h3 className="text-lg text-muted-foreground">
            Hey there, I'm Adelin
          </h3>
        </span>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link href={config.socials.github} target="_blank" rel="noopener">
          <GithubIcon className="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-100" />
        </Link>
        <Link href={config.socials.linkedin} target="_blank" rel="noopener">
          <LinkedinIcon className="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-100" />
        </Link>
      </div>
    </div>
  );
}
