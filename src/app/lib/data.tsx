import { ProjectDetails } from "./types";

export const experience = [
  {
    title: "Project Intern",
    description: [
      "Developing a Speech Emotion Recognition system that classifies emotions from voice input by fine-tuning DL models",
      "Integrating real-time inference through an SDK, for seamless interaction between the model and applications",
      "Designing an optimized audio pipeline for low-latency preprocessing and accurate model inference",
    ],
    company: "ArrayPointer",
    location: "Pune, India",
    duration: "Jul 2025 - May 2026",
    technologies: ["Python", "ReactJS", "PostgreSQL", "MongoDB", "Javascript"],
  },
  {
    title: "Full Stack Developer Intern",
    description: [
      "Worked on multiple projects for smaller businesses and institutions using modern frameworks",
      "Independently developed a Warehouse Management System customizing GreaterWMS using React, Node, Prisma, PostgreSQL and AWS",
      "Implemented real-time inventory tracking, role-based access control, and AI-driven restocking logic to improve warehouse efficiency",
    ],
    company: "NovaNectar",
    location: "Remote",
    duration: "Jan 2025 - Apr 2025",
    technologies: [
      "ReactJS",
      "NodeJS",
      "PostgreSQL",
      "Prisma",
      "AWS",
      "Python",
    ],
  },
];

export const languages = [
  { name: "HTML", image: "/assets/skills/html5.svg" },
  { name: "CSS", image: "/assets/skills/css3.svg" },
  { name: "JavaScript", image: "/assets/skills/javascript.svg" },
  { name: "TypeScript", image: "/assets/skills/typescript.svg" },
  { name: "Python", image: "/assets/skills/python.svg" },
  { name: "Go", image: "/assets/skills/go.svg" },
  { name: "MongoDB", image: "/assets/skills/mongodb.svg" },
  { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
  { name: "Prisma", image: "/assets/skills/prisma.svg" },
  { name: "ReactJS", image: "/assets/skills/react.svg" },
  { name: "NodeJS", image: "/assets/skills/nodedotjs.svg" },
  { name: "Express", image: "/assets/skills/express.svg" },
  { name: "NextJS", image: "/assets/skills/nextdotjs.svg" },
  { name: "FastAPI", image: "/assets/skills/fastapi.svg" },
  { name: "Git", image: "/assets/skills/git.svg" },
  { name: "GitHub", image: "/assets/skills/github.svg" },
  { name: "LangGraph", image: "/assets/skills/langgraph.svg" },
  { name: "Postman", image: "/assets/skills/postman.svg" },
  { name: "Redis", image: "/assets/skills/redis.svg" },
  { name: "Docker", image: "/assets/skills/docker.svg" },
  { name: "AWS", image: "/assets/skills/aws.svg" },
  { name: "Oracle OCI", image: "/assets/skills/oracle.svg" },
];

import mirrormates from "../../../public/assets/work/mirrormates.png";
import underconstruction from "../../../public/assets/work/underconstruction.png";

export const projects: ProjectDetails[] = [
  {
    image: mirrormates,
    title: "MirrorMates",
    description:
      "A Johari Window-based platform for self-awareness through anonymous peer feedback. Users invite peers to share perceptions, and the platform maps responses into blind spots, strengths, and hidden areas. With 50+ users and 200+ feedback submissions.",
    tech: [
      "NextJS",
      "NodeJS",
      "TypeScript",
      "Prisma",
      "Docker",
      "PostgreSQL",
      "MongoDB",
    ],
    github: null,
    githubFrontend: "https://github.com/var-ad/MirrorMates-frontend",
    githubBackend: "https://github.com/var-ad/MirrorMates-backend",
    healthFrontend: "https://mirrormates.varad.fyi",
    healthBackend: "https://api.mirrormates.varad.fyi/health",
    live: "https://mirrormates.varad.fyi",
  },
  {
    image: underconstruction,
    title: "Compliance Auditor AI (Under Construction)",
    description:
      "A multi-agent AI compliance auditor that scans GitHub repositories against SOC 2, ISO 27001, GDPR, and India's DPDP Act 2023. Uses LangGraph orchestration, Semgrep static analysis, OSV dependency scanning, and RAG over official legal documents to generate grounded compliance gap reports with severity scoring.",
    tech: ["Python", "FastAPI", "LangGraph", "NextJS"],
    github: "https://github.com/var-ad/Compliance-Auditor-AI",
    healthFrontend: null,
    healthBackend: null,
    live: null,
  },
];
