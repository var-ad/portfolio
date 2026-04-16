import Image from "next/image";
import logo from "../../../public/emoji.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex w-full items-center justify-between px-3 py-3 font-sans md:max-w-5xl">
        <div className="text-3xl font-bold">
          <Link href="/" aria-label="Navigate to Home">
            <Image
              src={logo}
              alt="Varad Chaskar Logo"
              width={36}
              height={36}
              priority
            />
          </Link>
        </div>

        <ul className="flex gap-4 text-base sm:gap-8 sm:text-2xl flex-wrap justify-center">
          <li className="cursor-pointer">
            <Link href="/" className="transition-colors hover:text-accent">
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="#experience"
              className="transition-colors hover:text-accent"
            >
              Experience
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="#projects"
              className="transition-colors hover:text-accent"
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              href="#skills"
              className="transition-colors hover:text-accent"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
