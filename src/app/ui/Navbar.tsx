import Image from "next/image";
import logo from "../../../public/emoji.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className="flex md:max-w-5xl w-full items-center font-sans justify-between mx-auto py-3 px-3">
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

        <ul className="flex gap-8 text-2xl">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#experience">Experience</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="#skills">Skills</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
