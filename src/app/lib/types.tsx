import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TechType = {
  name: string;
  color: string;
  image: string;
};

export type ProjectDetails = {
  image: StaticImageData | string;
  title: string;
  description: string;
  tech: string[];
  github?: string | null;
  githubFrontend?: string | null;
  githubBackend?: string | null;
  healthFrontend?: string | null;
  healthBackend?: string | null;
  live: string | null;
};
export type Skill = {
  name: string;
  icon: StaticImport | string;
  color: string;
};
