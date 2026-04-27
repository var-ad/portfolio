"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

import { ProjectDetails } from "../lib/types";
import { cn } from "../lib/utils";
import { skills } from "../lib/constants";

export function WorkCard({
  image,
  title,
  description,
  tech,
  github,
  githubFrontend,
  githubBackend,
  healthFrontend,
  healthBackend,
  live,
}: ProjectDetails) {
  const primaryUrl = live ?? githubFrontend ?? githubBackend ?? github;
  const [feHealthStatus, setFeHealthStatus] = useState<
    "200 OK" | "503 Service Unavailable" | "Waiting"
  >("Waiting");
  const [beHealthStatus, setBeHealthStatus] = useState<
    "200 OK" | "503 Service Unavailable" | "Waiting"
  >("Waiting");

  function getHealthColor(
    status: "200 OK" | "503 Service Unavailable" | "Waiting",
  ) {
    if (status === "200 OK") {
      return "#22c55e";
    }
    if (status === "503 Service Unavailable") {
      return "#ef4444";
    }
    return "currentColor";
  }

  useEffect(() => {
    let cancelled = false;

    async function checkHealth(
      endpoint: string | null | undefined,
      setStatus: (
        status: "200 OK" | "503 Service Unavailable" | "Waiting",
      ) => void,
    ) {
      if (!endpoint) {
        setStatus("503 Service Unavailable");
        return;
      }

      try {
        const response = await fetch(endpoint, { cache: "no-store" });
        if (cancelled) {
          return;
        }
        setStatus(
          response.status === 200 ? "200 OK" : "503 Service Unavailable",
        );
      } catch {
        if (!cancelled) {
          setStatus("503 Service Unavailable");
        }
      }
    }

    void checkHealth(healthFrontend, setFeHealthStatus);
    void checkHealth(healthBackend, setBeHealthStatus);

    return () => {
      cancelled = true;
    };
  }, [healthFrontend, healthBackend]);

  return (
    <div className={cn("flex flex-col justify-between gap-4 pb-4 shadow-md")}>
      {primaryUrl ? (
        <Link href={primaryUrl} target="_blank" rel="noreferrer">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={675}
            className="h-auto w-full rounded-sm"
          />
        </Link>
      ) : (
        <Image
          src={image}
          alt={title}
          width={1200}
          height={675}
          className="h-auto w-full rounded-sm"
        />
      )}

      <h2 className="mt-2 text-2xl font-bubblegum font-bold">{title}</h2>
      <p className="text-justify text-sm">{description}</p>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {tech.map((techItem, idx) => {
          const skill = skills[techItem.toUpperCase()];
          return skill ? (
            <span
              key={idx}
              className="flex cursor-default items-center gap-1 rounded border px-2 py-1 text-sm"
              style={{ borderColor: skill.color, color: skill.color }}
            >
              <Image alt={skill.name} src={skill.icon} width={16} height={16} />
              {skill.name}
            </span>
          ) : (
            <span
              key={idx}
              className="cursor-default rounded border px-2 py-1 text-sm"
            >
              {techItem}
            </span>
          );
        })}
      </div>
      <div className="flex gap-4 text-sm flex-nowrap">
        {live && (
          <Link
            href={live}
            target="_blank"
            className="flex items-center gap-2 rounded border px-2 py-1 hover:bg-white hover:text-black"
          >
            Live <ExternalLink size={18} />
          </Link>
        )}
        {githubFrontend && (
          <Link
            href={githubFrontend}
            target="_blank"
            className="flex items-center gap-2 rounded border px-2 py-1 hover:bg-white hover:text-black"
          >
            FE
            <span style={{ color: getHealthColor(feHealthStatus) }}>
              {feHealthStatus}
            </span>
            <Github size={18} />
          </Link>
        )}
        {githubBackend && (
          <Link
            href={githubBackend}
            target="_blank"
            className="flex items-center gap-2 rounded border px-2 py-1 hover:bg-white hover:text-black"
          >
            BE
            <span style={{ color: getHealthColor(beHealthStatus) }}>
              {beHealthStatus}
            </span>
            <Github size={18} />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-2 rounded border px-2 py-1 hover:bg-white hover:text-black"
          >
            Github <Github size={18} />
          </Link>
        )}
      </div>
    </div>
  );
}
