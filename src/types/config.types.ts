export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;

  //// 3rd party things
  umami: {
    websiteId: string;
    allowedDomains: string;
    events: {};
  };

  callcrew: {
    url: string;
  };

  socials: {
    github: string;
    linkedin: string;
  };
}
