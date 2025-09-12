import { CareerBlock } from "@/types/career.types";

// will have:
// 2019-2020 - part time jobs (kitchen porter + worked on a construction site - humble beginnigns)
// 2020 - MILESTONE - started college
// 2020 - 2022 START_UP - started a grinds tutoring business in my first year of college - helped over 100 students+
// 2022 - 2023 - JOB - Internship at Hereworks
// 2023 - 2024 - STARTUP - MH1 Tutors - helping students connect with grinds tutors in ireland - 400+ student connections & got some of the biggest teachers in ireland to signup
// 2024 - MILESTONE - graduated college top of my class
// 2024-2025 - JOB - Grad SWE at IBM
// 2025 - Present - SRE @ Susquehanna International Group

// Reminder - do this in reverse chronological order (newest first)
const CAREER_BLOCKS: CareerBlock[] = [
  {
    title: "Co-Founder & CEO",
    company: "CallCrewAI",
    description:
      "Co-Founded CallCrewAI, the AI team member for construction companies.",
    image: "/images/callcrew-ai.png",
    link: "https://www.callcrew-ai.com/",
    tags: ["AI", "Voice Assistant", "Construction", "Startups"],
    startDate: "September 2025",
    endDate: "Present",
    type: "START_UP",
  },
  {
    title: "Site Reliability Engineer",
    company: "Susquehanna International Group",
    description:
      "Maintained 99.999% uptime, wrote automations, migrated legacy systems to Docker/Kubernetes, and more. Developed a concerning gambling addiction.",
    image: "/images/susquehanna.png",
    link: "https://www.sig.com/",
    tags: [
      "Python",
      "Docker",
      "CI/CD",
      "GitLab",
      "Linux",
      "Networking",
      "DNS",
      "DHCP",
      "Poker",
    ],
    startDate: "April 2025",
    endDate: "September 2025",
    type: "JOB",
  },
  {
    title: "Software Engineer",
    company: "International Business Machines",
    description:
      "Working on IBM's Multi-Cloud SaaS Platform team, enabling any IBM Cloud product to become a subscription service without additional code. Also won the internal new joiner hackathon with an AI Voice Agent for meeting summarisation.",
    image: "/images/ibm.png",
    link: "https://www.ibm.com/",
    tags: [
      "Python",
      "Golang",
      "Bash",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitLab",
      "Linux",
    ],
    startDate: "September 2024",
    endDate: "April 2025",
    type: "JOB",
  },
  {
    title:
      "🎓 Graduated top of my class from DCU with a B.Eng in Mechatronics Engineering",
    type: "MILESTONE",
    image: "/images/dcu.jpg",
    startDate: "June 2024",
  },
  {
    title: "Founder",
    company: "MH1 Tutors",
    description:
      "Expanded my tutoring business into MH1 Tutors, a platform connecting Irish grinds tutors with students. Facilitated 400+ successful student-tutor connections, enabling tutors to monetise their expertise while helping students achieve academic goals.",
    image: "/images/mh1-tutors.png",
    link: "https://www.mh1-tutors.com/",
    tags: [
      "Entrepreneurship",
      "Full Stack",
      "Sales",
      "Marketing",
      "Python",
      "React",
      "NodeJS",
      "AWS",
      "GCP",
    ],
    startDate: "March 2023",
    endDate: "June 2024",
    type: "START_UP",
  },
  {
    title: "Software Engineer",
    company: "Hereworks",
    description:
      "Built React + Firebase app for smart building project tracking, saving 100+ hours through QR tagging and role-based access. Automated smart building deployments with Python, reducing 30+ hour tasks to seconds. Integrated ML anomaly detection models and automated alerts, saving 10-20 hours/week. Contributed to Google's Digital Buildings open-source project and developed digital twin Config Models.",
    image: "/images/hereworks.jpg",
    link: "https://hereworks.io/",
    tags: [
      "Full Stack",
      "Python",
      "React",
      "NodeJS",
      "AWS",
      "GCP",
      "Data Analysis",
    ],
    startDate: "June 2022",
    endDate: "September 2023",
    type: "JOB",
  },
  {
    title: "Maths Tutoring Business",
    description:
      "Started an online maths tutoring business. Provided 1-on-1 Maths grinds to Junior Cert, Leaving Cert and College students via Zoom. Taught 100+ students while managing a team of two additional tutors.",
    company: "Maths Help Ireland",
    image: "/images/mh1-tutors.png",
    link: "https://www.mh1-tutors.com/tutors/adelin-diac",
    tags: [
      "Entrepreneurship",
      "Sales",
      "Marketing",
      "Communication",
      "Teaching",
      "Mentoring",
    ],
    startDate: "October 2020",
    endDate: "March 2023",
    type: "START_UP",
  },
  {
    title: "Started my B.Eng. in Engineering at DCU",
    type: "MILESTONE",
    image: "/images/dcu.jpg",
    startDate: "September 2020",
  },
  // TODO: Add like some icon/image - or maybe marqette?? - probably not
  // {
  //   title: "Previous part time jobs",
  //   type: "JOB",
  //   image: "/images/dcu.png",
  //   startDate: "2019",
  //   endDate: "2020",
  // },
];

export default CAREER_BLOCKS;
