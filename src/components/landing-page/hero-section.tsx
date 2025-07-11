import { LinkedinIcon, GithubIcon } from "@/icons";
import ChangingHeadline from "./changing-headline";

export default function HeroSection() {
  return (
    <div className="py-20 px-5 md:px-20">
      <h1 className="sr-only">Adelin Diac - Founder & Software Engineer</h1>
      <ChangingHeadline />
      <h3 className="text-base text-muted-foreground text-center my-8">
        👋 Hey there, I'm Adelin.
      </h3>
      <div className="flex justify-center gap-4">
        <GithubIcon className="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-100" />
        <LinkedinIcon className="w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-100" />
      </div>
    </div>
  );
}
