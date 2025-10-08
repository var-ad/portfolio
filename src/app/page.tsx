import Navbar from "./ui/Navbar";
import ContactForm from "./ui/ContactForm";
import SectionLayout from "./SectionLayout";
import { File, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import snakeall from "../../public/github-snake.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionLayout>
        <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
          <h1 className="text-5xl font-bold">Hello, I&apos;m Varad Chaskar!</h1>
        </main>
        <div className="flex items-center justify-center w-full h-[50vh]">
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

        <h2 className="text-4xl font-bold text-left font-bubblegum">Contact</h2>
        <div className="flex flex-col md:flex-row h-full gap-4 font-mono">
          <div className="space-y-8 justify-between h-full gap-4 w-full md:w-1/2">
            <p className="text-justify">
              I&apos;m open to new opportunities, collaborations and projects.
              Feel free to reach out to me on any of the platforms below.
            </p>
            <div className="flex gap-2 flex-col">
              <div className="flex items-center gap-2">
                <Mail /> varad.chaskar.27@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <File />{" "}
                <Link href="resume.varad.fyi" target="_blanks">
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
