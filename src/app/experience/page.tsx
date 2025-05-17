"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import GridList from "@/components/GridList";
import DarkBox from "@/components/Darkbox";

interface Experience {
  company: string;
  title: string;
  duration: string;
  image: string;
  website: string;
  highlights: string[];
  techs: ExperienceTech;
}

interface ExperienceTech {
  techStack: string[];
  // Minimum column width for grid elements (nasty hack to get it to work, based on width of the longest tech)
  // Hoping for a change in the future to make this more dynamic (based off max-content)
  minColumnWidth: number;
}

const experiences = [
  {
    company: "Institute for Intergovernmental Research",
    title: "Application Developer",
    duration: "January 2025 - Present",
    image: "/assets/images/experience/iir.png",
    website: "https://www.iir.com/",
    highlights: [
      "Developed responsive web applications for the Department of Justice and Bureau of Justice Assistance using .NET and the U.S. Web Design System (USWDS).",
      "Ensured full mobile compatibility to support law enforcement training, intelligence sharing, and criminal justice resource platforms.",
      "Maintained and enhanced web application functionality to meet evolving project requirements.",
      "Streamlined deployment processes using Azure DevOps.",
      "Managed version control with Git to improve development workflow.",
      "Optimized performance of Azure Cosmos DB integrations for scalable and high-availability web applications.",
    ],
    techs: {
      techStack: [
        ".NET",
        "Azure DevOps",
        "Git",
        "JavaScript",
        "HTML",
        "CSS",
        "USWDS",
        "Azure Cosmos DB",
        "RESTful APIs",
        "C#",
      ],
      minColumnWidth: 180,
    },
  },
  {
    company: "Wayhome Services Co.",
    title: "Software Engineering Intern",
    duration: "August - December 2023",
    image: "/assets/images/experience/wayhome.png",
    website: "https://www.rentwayhome.com/",
    highlights: [
      "Overhauled rental listing and applications process incorporating mobile responsive designs, rental screenings, geolocation search, and fixed over 150 bugs.",
      "Migrated from local to S3 storage to facilitate scalability.",
      "Implemented CI/CD with GitHub Actions.",
      "Upgraded app from Rails 6 to 7.",
      "Integrated RSpec and Cypress testing to boost efficiency by 50%.",
      "Led UX overhaul efforts, increasing user satisfaction by 30%.",
    ],
    techs: {
      techStack: [
        "Ruby on Rails",
        "Docker",
        "GitHub Actions",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "SCSS",
        "Rspec",
        "Cypress",
        "Redis",
        "RESTful APIs",
        "MinIO",
        "RubyGem",
        "Kanban",
        "Git",
        "Bash",
      ],
      minColumnWidth: 170,
    },
  },
];

export default function Experience() {
  const [index, setIndex] = useState(0);
  const experience = experiences[index];

  return (
    <div className="md:mt-20 md:py-0 py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
          <span>Work Experience</span>
          <span className="after-light-line"></span>
        </h1>
      </div>
      <div className="w-full max-w-7xl px-6 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="order-2 md:order-1 flex flex-col gap-4 flex-1">
            <div className="w-full max-w-[800px] max-h-[400px]">
              <img
                src={experience.image}
                alt={`Image for ${experience.company}`}
              />
            </div>
            <div>
              <p className="text-sm tracking-wider font-light mb-2 text-center md:text-left">
                Technologies I have been experiencing here:
              </p>
              <GridList
                items={experience.techs.techStack}
                minColumnWidth={experience.techs.minColumnWidth}
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col flex-1 gap-4 max-w-[540px]">
            <h2 className="text-xl font-bold text-secondary">
              {experience.title} @
            </h2>
            <Link
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl font-extrabold text-title hover:underline"
            >
              {experience.company}
            </Link>
            <h3 className="text-base font-bold text-primary ml-8">
              {experience.duration}
            </h3>
            <DarkBox className="xs:max-w-2xl p-6">
              <ul className="flex flex-col gap-2 text-sm">
                {experience.highlights.map((item, i) => (
                  <li key={i} className="carrot-bullet-item tracking-wider">
                    {item}
                  </li>
                ))}
              </ul>
            </DarkBox>
          </div>
        </div>

        {/* Indicators */}
        <div
          className={`
            flex justify-center mt-6 gap-2
            ${"md:fixed md:bottom-6 md:left-1/2 md:-translate-x-1/2"}
          `}
        >
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-4 w-4 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
