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
    <div className="flex flex-col space-y-4 justify-between p-6 rounded-lg shadow-slate-800 shadow-md">
      <div className="flex justify-between md:flex-row flex-col items-start md:items-center space-y-2">
        <h2 className="font-bold text-xl font-mono">{company}</h2>
        <div className="text-sm text-gray-500 md:flex md:space-x-2">
          <h4 className="flex items-center text-orange-500">
            {location} <div className="hidden text-white md:flex ml-2">●</div>{" "}
          </h4>
          <h4 className="text-yellow-600">{duration}</h4>
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
              className={`flex items-center hover:cursor-default gap-1 border px-2 py-1 rounded text-sm`}
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
