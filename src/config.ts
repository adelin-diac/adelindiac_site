import { ConfigProps } from "./types/config.types";

const config: ConfigProps = {
  appName: "Adelin Diac",
  appDescription: "Founder & Software Engineer. I build cool things.",
  domainName: "adelindiac.site",

  //// 3rd party things
  umami: {
    websiteId: "8c619fba-a86e-490f-bbc8-bcabacd46958",
    allowedDomains: "adelindiac.site,www.adelindiac.site",
    events: {},
  },
  callcrew: {
    url: "https://callcrew-ai.com",
  },
  socials: {
    github: "https://github.com/adelin-diac",
    linkedin: "https://www.linkedin.com/in/adelin-denis-diac/",
  },
};

export default config;
