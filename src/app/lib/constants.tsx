import { Skill } from "./types";

import html from "../../../public/assets/skills/html5.svg";
import css from "../../../public/assets/skills/css3.svg";
import js from "../../../public/assets/skills/javascript.svg";
import ts from "../../../public/assets/skills/typescript.svg";
import react from "../../../public/assets/skills/react.svg";
import node from "../../../public/assets/skills/nodedotjs.svg";
import androidstudio from "../../../public/assets/skills/androidstudio.svg";
import bootstrap from "../../../public/assets/skills/bootstrap.svg";
import dart from "../../../public/assets/skills/dart.svg";
import express from "../../../public/assets/skills/express.svg";
import figma from "../../../public/assets/skills/figma.svg";
import firebase from "../../../public/assets/skills/firebase.svg";
import flutter from "../../../public/assets/skills/flutter.svg";
import framermotion from "../../../public/assets/skills/framer-motion.svg";
import git from "../../../public/assets/skills/git.svg";
import github from "../../../public/assets/skills/github.svg";
import gsap from "../../../public/assets/skills/gsap.svg";
import java from "../../../public/assets/skills/java.svg";
import jira from "../../../public/assets/skills/jira.svg";
import mongodb from "../../../public/assets/skills/mongodb.svg";
import nextjs from "../../../public/assets/skills/nextdotjs.svg";
import postman from "../../../public/assets/skills/postman.svg";
import redis from "../../../public/assets/skills/redis.svg";
import vscode from "../../../public/assets/skills/visualstudiocode.svg";
import tailwindcss from "../../../public/assets/skills/tailwindcss.svg";
import redux from "../../../public/assets/skills/redux.svg";
import zustand from "../../../public/assets/skills/zustand.svg";
import prisma from "../../../public/assets/skills/prisma.svg";
import postgresql from "../../../public/assets/skills/postgresql.svg";
import angular from "../../../public/assets/skills/angular.svg";
import spring from "../../../public/assets/skills/spring.svg";
import vue from "../../../public/assets/skills/vue.svg";
import python from "../../../public/assets/skills/python.svg";
import aws from "../../../public/assets/skills/aws.svg";

export const skills: Record<string, Skill> = {
  HTML: {
    name: "HTML",
    icon: html,
    color: "#E34F26",
  },
  CSS: {
    name: "CSS",
    icon: css,
    color: "#1572B6",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: js,
    color: "#F7DF1E",
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: ts,
    color: "#3178C6",
  },
  REACTJS: {
    name: "React",
    icon: react,
    color: "#61DAFB",
  },
  NODEJS: {
    name: "NodeJS",
    icon: node,
    color: "#339933",
  },
  ANDROIDSTUDIO: {
    name: "Android Studio",
    icon: androidstudio,
    color: "#3DDC84",
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: bootstrap,
    color: "#7952B3",
  },
  DART: {
    name: "Dart",
    icon: dart,
    color: "#0175C2",
  },
  EXPRESSJS: {
    name: "Express",
    icon: express,
    color: "#000000",
  },
  FIGMA: {
    name: "Figma",
    icon: figma,
    color: "#F24E1E",
  },
  FIREBASE: {
    name: "Firebase",
    icon: firebase,
    color: "#FFCA28",
  },
  FLUTTER: {
    name: "Flutter",
    icon: flutter,
    color: "#02569B",
  },
  FRAMERMOTION: {
    name: "Framer Motion",
    icon: framermotion,
    color: "#FF008C",
  },
  GIT: {
    name: "Git",
    icon: git,
    color: "#F05033",
  },
  GITHUB: {
    name: "Github",
    icon: github,
    color: "#181717",
  },
  GSAP: {
    name: "GSAP",
    icon: gsap,
    color: "#88CE02",
  },
  JAVA: {
    name: "Java",
    icon: java,
    color: "#007396",
  },
  JIRA: {
    name: "Jira",
    icon: jira,
    color: "#0052CC",
  },
  MONGODB: {
    name: "MongoDB",
    icon: mongodb,
    color: "#47A248",
  },
  NEXTJS: {
    name: "NextJS",
    icon: nextjs,
    color: "#fff",
  },
  POSTMAN: {
    name: "Postman",
    icon: postman,
    color: "#FF6C37",
  },
  REDIS: {
    name: "Redis",
    icon: redis,
    color: "#DC382D",
  },
  VSCODE: {
    name: "VSCode",
    icon: vscode,
    color: "#007ACC",
  },
  TAILWINDCSS: {
    name: "Tailwind CSS",
    icon: tailwindcss,
    color: "#06B6D4",
  },
  REDUX: {
    name: "Redux",
    icon: redux,
    color: "#4A0B76FF",
  },
  ZUSTAND: {
    name: "Zustand",
    icon: zustand,
    color: "#815A50",
  },
  POSTGRESQL: {
    name: "PostgreSQL",
    icon: postgresql,
    color: "#336791",
  },
  PRISMA: {
    name: "Prisma",
    icon: prisma,
    color: "#7F9CF5",
  },
  ANGULAR: {
    name: "Angular",
    icon: angular,
    color: "#DD0031",
  },
  SPRING: {
    name: "Springboot",
    icon: spring,
    color: "#70AD51",
  },
  VUE: {
    name: "Vue",
    icon: vue,
    color: "#41B883",
  },
  PYTHON: {
    name: "Python",
    icon: python,
    color: "#FFD849",
  },
  AWS: {
    name: "AWS",
    icon: aws,
    color: "#FF9900",
  },
};
