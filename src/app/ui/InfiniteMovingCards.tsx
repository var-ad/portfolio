"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--animation-direction",
          direction === "left" ? "forwards" : "reverse",
        );

        containerRef.current.style.setProperty(
          "--animation-duration",
          speed === "fast" ? "30s" : speed === "normal" ? "40s" : "80s",
        );
      }

      setStart(true);
    }
  }, [direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden max-w-7xl", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-6 py-4 animate-scroll w-max",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="flex w-fit items-center justify-center gap-4 rounded-sm border border-border bg-surface-elevated px-4 py-2 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            {item.image && (
              <Image
                width={100}
                height={100}
                src={item.image}
                alt={item.name}
                className="size-8"
              />
            )}
            <p className="text-sm md:text-base text-center font-medium">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
