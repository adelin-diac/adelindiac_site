"use client";

import useTypingAnimation from "@/hooks/useTypingAnimation";

export default function ChangingHeadline() {
  const words = [
    "Founder",
    "Software Engineer",
    "Entrepreneur",
    "Mechatronics Grad",
    "Family Person <3",
    "Sports Enthusiast",
    "Constant Learner",
    "Slight Gambler",
  ];
  const currentText = useTypingAnimation(words);

  return (
    <h4 className="text-4xl md:text-6xl font-bold text-foreground text-center h-[3rem]">
      {currentText}
    </h4>
  );
}
