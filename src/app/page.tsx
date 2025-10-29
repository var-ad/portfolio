"use client";

import Navbar from "./ui/Navbar";
import ContactForm from "./ui/ContactForm";
import ExperienceCard from "./ui/ExperienceCard";
import SectionLayout from "./SectionLayout";
import { File, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { languages, experience } from "./lib/data";

import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandLeetcode,
  IconCopy,
} from "@tabler/icons-react";
import snakeall from "../../public/github-snake.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionLayout className="flex flex-col items-start space-y-4 w-full">
        <h1 className="text-4xl font-black font-bubblegum mb-0">
          Hello! I&apos;m Varad Chaskar
        </h1>
        <div className="flex items-center justify-center w-full md:h-full mt-0">
          <Link
            href="https://github.com/var-ad"
            aria-label="GitHub"
            className="block"
          >
            <Image
              src={snakeall}
              alt="Varad Chaskar GitHub Snake Animation"
              priority
              className="mx-auto"
            />
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-justify font-mono">
          <p>
            Welcome to my for your information! I am Varad Chaskar, an aspiring
            software developer from Pune, India. I love converting ideas into
            products. I have worked with technologies like Python, Reactjs,
            Nextjs, PostgreSQL, Nodejs etc.
          </p>

          <p>
            Currently seeking Internship and Full Time Opportunities. I love to
            work in fast paced environment where I get to challenge myself.
          </p>

          <p>
            Currently I am working on{" "}
            <Link
              href="https://mirrormates.varad.fyi"
              className="text-cyan-800"
              target="_blank"
            >
              MirrorMates
            </Link>{" "}
          </p>

          <p>I&apos;m open for work, collaboration and freelance projects.</p>
        </div>
        <h2
          className="text-4xl font-bold text-left font-bubblegum "
          id="experience"
        >
          Experience
        </h2>
        <div className="w-full flex-col space-y-4">
          {experience.map((exp, idx) => (
            <ExperienceCard
              title={exp.title}
              description={exp.description}
              company={exp.company}
              location={exp.location}
              duration={exp.duration}
              technologies={exp.technologies}
              key={idx}
            />
          ))}
        </div>
        <h2
          className="text-4xl font-bold text-left font-bubblegum"
          id="projects"
        >
          Projects
        </h2>
        <h2 className="text-4xl font-bold text-left font-bubblegum" id="skills">
          Skills
        </h2>
        <div className="w-full px-4 sm:px-6 md:px-8 overflow-hidden">
          <InfiniteMovingCards items={languages.slice(0, 10)} />
          <InfiniteMovingCards
            items={languages.slice(10, 20)}
            direction="right"
          />
          <InfiniteMovingCards items={languages.slice(20)} />
        </div>
        <h2 className="text-4xl font-bold text-left font-bubblegum">Contact</h2>
        <div className="flex flex-col md:flex-row h-full gap-4 font-mono">
          <div className="space-y-8 justify-between h-full gap-4 w-full md:w-1/2">
            <p className="text-justify">
              I&apos;m open to new opportunities, collaborations and projects.
              Feel free to reach out to me on any of the platforms below.
            </p>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Mail />
                  <Link
                    href="mailto:varad.chaskar.27@gmail.com"
                    target="_blank"
                  >
                    varad.chaskar.27@gmail.com
                  </Link>
                </div>
                <button
                  onClick={() => {
                    const email = "varad.chaskar.27@gmail.com";
                    if (
                      navigator.clipboard &&
                      typeof navigator.clipboard.writeText === "function"
                    ) {
                      navigator.clipboard.writeText(email).catch(() => {
                        const textarea = document.createElement("textarea");
                        textarea.value = email;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                      });
                    } else {
                      const textarea = document.createElement("textarea");
                      textarea.value = email;
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand("copy");
                      document.body.removeChild(textarea);
                    }
                  }}
                  className="text-sm rounded-md hover:bg-gray-700 transition-all p-1"
                >
                  <IconCopy />
                </button>
              </div>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Phone />
                  +91 9697345454
                </div>
                <button
                  onClick={() => {
                    const phone = "9697345454";
                    if (
                      navigator.clipboard &&
                      typeof navigator.clipboard.writeText === "function"
                    ) {
                      navigator.clipboard.writeText(phone).catch(() => {
                        const textarea = document.createElement("textarea");
                        textarea.value = phone;
                        document.body.appendChild(textarea);
                        textarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(textarea);
                      });
                    } else {
                      const textarea = document.createElement("textarea");
                      textarea.value = phone;
                      document.body.appendChild(textarea);
                      textarea.select();
                      document.execCommand("copy");
                      document.body.removeChild(textarea);
                    }
                  }}
                  className="text-sm rounded-md hover:bg-gray-700 transition-all p-1"
                >
                  <IconCopy />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <File />{" "}
                <Link href="https://resume.varad.fyi" target="_blank">
                  Resume
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                target="_blank"
                href="https://github.com/var-ad"
                className="p-2  hover:border-gray-500 border rounded-full hover:bg-gray-500 hover:text-white cursor-pointer"
              >
                <IconBrandGithub />
              </Link>

              <Link
                target="_blank"
                href="https://leetcode.com/u/varad2711/"
                className="p-2 rounded-full border hover:border-[#FFA116] hover:bg-[#FFA116] hover:text-white cursor-pointer transition-all"
              >
                <IconBrandLeetcode />
              </Link>

              <Link
                target="_blank"
                href="https://x.com/vichstein"
                className="p-2 rounded-full  hover:border-black border hover:bg-black hover:text-white cursor-pointer"
              >
                <IconBrandX />
              </Link>

              <Link
                target="_blank"
                href="https://www.linkedin.com/in/varad-chaskar/"
                className="p-2 rounded-full hover:border-blue-700 border hover:bg-blue-700 hover:text-white cursor-pointer"
              >
                <IconBrandLinkedin />
              </Link>

              <Link
                target="_blank"
                href="https://www.instagram.com/_varadd_"
                className="p-2 rounded-full  hover:border-pink-500 border hover:bg-pink-500 hover:text-white cursor-pointer"
              >
                <IconBrandInstagram />
              </Link>

              <Link
                target="_blank"
                href="https://discord.com/users/756488390744211467"
                className="p-2 rounded-full  hover:border-indigo-600 border hover:bg-indigo-600 hover:text-white cursor-pointer"
              >
                <IconBrandDiscord />
              </Link>
            </div>
          </div>
          <ContactForm />
        </div>
      </SectionLayout>
    </>
  );
}
