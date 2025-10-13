import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TechType = {
  name: string;
  color: string;
  image: string;
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
  icon: StaticImport | string;
  color: string;
};
