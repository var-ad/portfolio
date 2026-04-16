"use client";
import { skills } from "../lib/constants";
import Image from "next/image";

function ExperienceCard({
  title,
  description,
  company,
  location,
  technologies,
  duration,
}: {
  title: string;
  description: string[];
  company: string;
  technologies: string[];
  duration: string;
  location: string;
}) {
  return (
    <div className="card-surface flex flex-col justify-between space-y-4 p-6">
      <div className="flex justify-between md:flex-row flex-col items-start md:items-center space-y-2">
        <h2 className="font-bold text-xl font-mono">{company}</h2>
        <div className="text-sm text-muted md:flex md:space-x-2">
          <h4 className="flex items-center">
            {location}{" "}
            <div className="hidden text-muted md:flex ml-2">●</div>{" "}
          </h4>
          <h4 className="text-accent">{duration}</h4>
        </div>
      </div>
      <h3 className="font-semibold text-lg font-bubblegum">{title}</h3>
      <ul className="list-disc ml-5 font-mono">
        {description.map((desc, idx) => (
          <li key={idx} className="text-sm mt-2">
            {desc}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 my-2 font-bubblegum">
        {technologies.map((tech, idx) => {
          const skill = skills[tech.toUpperCase()];
          return (
            <span
              key={idx}
              className="flex items-center gap-1 rounded border bg-surface-elevated px-2 py-1 text-sm"
              style={{ borderColor: skill.color, color: skill.color }}
            >
              <Image alt={skill.name} src={skill.icon} width={16} height={16} />
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
