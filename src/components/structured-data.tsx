import config from "@/config";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Adelin Diac",
    url: `https://${config.domainName}`,
    jobTitle: "Co-Founder & CEO",
    worksFor: {
      "@type": "Organization",
      name: "CallCrewAI",
      url: "https://www.callcrew-ai.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Dublin City University",
    },
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Voice Assistants",
      "Site Reliability Engineering",
      "Full Stack Development",
      "Python",
      "TypeScript",
      "Docker",
      "Kubernetes",
    ],
    sameAs: [
      config.socials.github,
      config.socials.linkedin,
      "https://www.callcrew-ai.com/",
    ],
    description:
      "Founder & Software Engineer. Co-Founder & CEO of CallCrewAI. DCU graduate (#1 in class). Previously at SIG, IBM, Hereworks.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.appName,
    url: `https://${config.domainName}`,
    description: config.appDescription,
    author: {
      "@type": "Person",
      name: "Adelin Diac",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
