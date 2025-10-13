import { StaticImageData } from "next/image";

export type TechType = {
  name: String;
  color: String;
  image: String;
};

export type ProjectDetails = {
  image: StaticImageData;
  title: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
};
export type Skill = {
  name: string;
  icon: any;
  color: string;
};
