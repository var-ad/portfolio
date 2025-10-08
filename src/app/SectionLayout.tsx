"use client";

import { cn } from "./lib/utils";

interface SectionLayoutProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionLayout({
  children,
  className,
  id,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        `w-full max-w-5xl mx-auto flex flex-col 
         items-start justify-start text-left
         px-4 sm:px-6 md:px-8 py-12 overflow-hidden`,
        className
      )}
    >
      {children}
    </section>
  );
}
