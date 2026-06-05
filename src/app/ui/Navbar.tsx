"use client";

import Image from "next/image";
import logo from "../../../public/emoji.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1zsVWN8Wt17wl-y6XTfhrHXxWXpVj9It1/view";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="mx-auto flex w-full items-center justify-between px-3 py-3 font-sans md:max-w-5xl">
        {/* Logo */}
        <Link href="/" aria-label="Navigate to Home">
          <Image
            src={logo}
            alt="Varad Chaskar Logo"
            width={36}
            height={36}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-2xl">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors hover:text-accent"
          >
            Resume <ExternalLink size={16} className="inline" />
          </a>
        </div>

        {/* Mobile hamburger + floating dropdown */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {open && (
            <ul className="absolute right-0 top-10 w-44 rounded-xl border border-border bg-background shadow-lg px-4 py-3 flex flex-col gap-3 text-base font-sans">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block transition-colors hover:text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  Resume <ExternalLink size={16} className="inline" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
