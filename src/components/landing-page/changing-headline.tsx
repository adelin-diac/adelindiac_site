"use client";

import useTypingAnimation from "@/hooks/useTypingAnimation";

export default function ChangingHeadline() {
  const words = [
    "Founder",
    "Software Engineer",
    "Mechanictronics Grad",
    "Slight Gambler",
    "Sports Enthusiast",
  ];
  const currentText = useTypingAnimation(words);

  return (
    <h4 className="text-4xl md:text-6xl font-bold text-foreground text-center h-[3rem]">
      {currentText}
    </h4>
  );
}
