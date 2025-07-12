type Achievement = {
  title: string;
  description: string;
} & ({ emoji: string; image?: never } | { image: string; emoji?: never });

const ACHIEVEMENTS: Achievement[] = [
  {
    emoji: "🎓",
    title: "#1 Place Graduate",
    description:
      "Graduated top of my class and was the only one to achieve a 1st class honours degree.",
  },
  {
    emoji: "🥇",
    title: "Dean's Honors List",
    description:
      "The Dean's Honors List in DCU is the top 5% of graduates in the Faculty of Engineering & Computing.",
  },
  {
    emoji: "🏆",
    title: "Founders Weekend Winner",
    description:
      "Won the Founders Weekend at PorterShed (NDRC Galway) with an AI voice assistant for construction companies.",
  },
  {
    emoji: "💸",
    title: "€10M+ Impact",
    description:
      "HereWorks internship - I built a core analytics system saving 2,000+ hours/year and projected to generate €10M+.",
  },
  {
    emoji: "🤖",
    title: "AI Hackathon Winner",
    description:
      "Won an internal IBM AI Hackathon. Built a meeting-summary AI agent for Teams calls.",
  },
  {
    image: "/images/mh1-tutors.png",
    title: "400+ Student-Tutor Connections",
    description:
      "Founded MH1 Tutors during college. Helped 400+ students find the right tutor and get into their dream universities.",
  },
  {
    emoji: "👨‍🏫",
    title: "100+ Students Taught",
    description:
      "Tutored 100+ Leaving Cert students in Maths during college, helping them get into their dream universities.",
  },
  {
    emoji: "🎯",
    title: "Secondary School Record Points",
    description:
      "The first student in my secondary school to get over 600 CAO points (max 625) in the Leaving Cert.",
  },
];

export default ACHIEVEMENTS;
