export interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  umami: {
    websiteId: string;
    allowedDomains: string;
    events: {};
  };
}
