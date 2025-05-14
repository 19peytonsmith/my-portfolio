"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import GridList from "@/components/GridList";
import DarkBox from "@/components/Darkbox";

const experiences = [
  {
    company: "Institute for Intergovernmental Research",
    title: "Application Developer",
    duration: "January 2025 - Present",
    image: "/assets/images/experience/iirlogo.png",
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
      columns: 2,
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
      columns: 3,
    },
  },
];

export default function Experience() {
  const [index, setIndex] = useState(0);
  const experience = experiences[index];

  return (
    <div className="md:mt-24 md:py-0 py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
          <span>Work Experience</span>
          <span className="after-light-line"></span>
        </h1>
      </div>
      <div className="w-full max-w-7xl px-6 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="order-2 md:order-1 flex flex-col justify-center items-center gap-4">
            <div className="w-full max-w-[800px] max-h-[400px]">
              <img
                src={experience.image}
                alt={`Image for ${experience.company}`}
              />
            </div>
            <div>
              <p className="text-sm tracking-wider font-light mb-2">
                Technologies I have been experiencing here:
              </p>
              <GridList
                items={experience.techs.techStack}
                columns={experience.techs.columns}
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-4">
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
            <DarkBox className="xs:max-w-2xl p-6 min-w-[400px]">
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
        <div className="flex justify-center mt-6 gap-2">
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
