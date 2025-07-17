export type CareerBlockType = "JOB" | "START_UP" | "MILESTONE";

type BaseCareerBlock = {
  title: string;
  type: CareerBlockType;
  startDate: string;
  endDate?: string;
};

export type JobOrStartupCareerBlock = BaseCareerBlock & {
  type: "START_UP" | "JOB";
  company: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

export type MilestoneCareerBlock = BaseCareerBlock & {
  type: "MILESTONE";
  image: string;
};

export type CareerBlock = JobOrStartupCareerBlock | MilestoneCareerBlock;
