type Achievement = {
  title: string;
  description: string;
} & ({ emoji: string; image?: never } | { image: string; emoji?: never });

const ACHIEVEMENTS: Achievement[] = [
  {
    image: "/images/mh1-tutors.png",
    title: "Previous Startup - MH1 Tutors",
    description:
      "Consectetur adipiscing elit. Integer nec odio. Praesent libero. Consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    emoji: "🚀",
    title: "Sed cursus ante dapibus",
    description:
      "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
  },
  {
    emoji: "🎯",
    title: "Praesent mauris",
    description: "Fusce nec tellus sed augue semper porta. Mauris massa.",
  },
  {
    emoji: "💡",
    title: "Vestibulum lacinia arcu",
    description: "Eget nulla. Class aptent taciti sociosqu ad litora torquent.",
  },
  {
    emoji: "🌟",
    title: "Curabitur sodales ligula",
    description:
      "Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum.",
  },
  {
    emoji: "📈",
    title: "Morbi lectus risus",
    description:
      "Iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis.",
  },
  {
    emoji: "🛠️",
    title: "Pellentesque posuere",
    description:
      "Praesent blandit dolor. Sed non quam. In vel mi sit amet augue.",
  },
  {
    emoji: "🌍",
    title: "Vivamus euismod mauris",
    description:
      "Quisque volutpat condimentum velit. Class aptent taciti sociosqu.",
  },
];

export default ACHIEVEMENTS;
