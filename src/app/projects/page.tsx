"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import GridList from "@/components/GridList";
import DarkBox from "@/components/Darkbox";
import IconLink from "@/components/IconLink";
import IconWrapper from "@/components/IconWrapper";

import type { LucideIcon } from "lucide-react";
import { ExternalLink, Github, Youtube } from "lucide-react";

type LinkType = "external" | "github" | "youtube";

interface ProjectLink {
  Icon: LucideIcon;
  url: string;
}

interface Project {
  name: string;
  description: string;
  tags: string[];
  image: string;
  links?: ProjectLink[];
}

const projects: Project[] = [
  {
    name: "RubyGem Tazworks API Wrapper",
    description:
      "A comprehensive RubyGem API wrapper for an external service - Tazworks API, with over 30 easily interfaceable methods and classes used within the rental application flow @ Wayhome made to screen tenants and property partners.",
    tags: ["Ruby", "Rest Client", "RSpec", "OOP", "VCR", "API", "Unit Testing"],
    image: "/assets/images/projects/tazworks.png",
    links: [
      {
        Icon: ExternalLink,
        url: "https://rubygems.org/gems/tazworks-api",
      },
    ],
  },
  {
    name: "Mouthpiece",
    description:
      "A social media app whose motivation is seamlessly sharing posts, pictures, and videos for a community of those interested in sports. The app has basic social media functionality with some geolocation features.",
    tags: ["Xcode", "Swift", "Firebase", "Google Maps & Places API", "Figma"],
    image: "/assets/images/projects/mouthpiece.png",
    links: [
      {
        Icon: ExternalLink,
        url: "https://web1.eng.famu.fsu.edu/ece/senior_design/2023/team305/index.html",
      },
    ],
  },
  {
    name: "Zillow Guessing Game",
    description:
      "Ongoing personal Python web-app project where it fetches a random Zillow listing, displays the info alongside a gallery of all of the pictures and has the user guess the price.",
    tags: [
      "React",
      "Python",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "BeautifulSoup",
      "pandas",
    ],
    image: "/assets/images/projects/zillow.png",
    links: [
      {
        Icon: Github,
        url: "https://github.com/19peytonsmith/Zillow-Project",
      },
    ],
  },
  {
    name: "C# eCommerce App",
    description:
      "Starting from a basic console application, I've transformed this project into a 2-sided admin/customer full-stack desktop application with a file system-based database and a working web API to query data used to perform CRUD operations on products within the database.",
    tags: ["C#", ".NET", "XAML", "API", "Swagger"],
    image: "/assets/images/projects/ecommerce.png",
    links: [
      {
        Icon: Github,
        url: "https://github.com/mills-fsu-csharp-summer2022/eCommerce-Assignment3-PeytonSmith-Su2/tree/eCommerce-Assignment5-PeytonSmith-Su22",
      },
      {
        Icon: Youtube,
        url: "https://youtu.be/XN52Kqy6KJs?si=7RLJcbF7uiFiGowh",
      },
    ],
  },
  {
    name: "SQL Multiplayer Game Database",
    description:
      "Leveraged SQL to plot entities associated to the game including user information, friend data, map/score statistics, and tournament functionality. I also optimized and developed SQL scripts and queries to yield data from various levels of the database architecture.",
    tags: ["SQL", "mySQL", "ER Diagram", "API", "Swagger"],
    image: "/assets/images/projects/sql.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  return (
    <div className="md:mt-20 md:py-0 py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-2">
        <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
          <span>Personal Projects</span>
          <span className="after-light-line"></span>
        </h1>
        <p className="font-light">{index + 1}.</p>
      </div>
      <div className="w-full max-w-5xl px-6 sm:px-8 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-title">{project.name}</h1>
            <DarkBox className="xs:max-w-2xl p-6 min-w-[400px]">
              <p>{project.description}</p>
            </DarkBox>
            <div>
              <GridList items={project.tags} />
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              {project.links?.map((link, i) => (
                <IconLink key={i} href={link.url}>
                  <IconWrapper Icon={link.Icon} />
                </IconLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="max-w-[600px] max-h-[500px]">
              <img
                src={project.image}
                alt={`Image for ${project.name}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
        {/* Indicators */}
        <div className="flex justify-center mt-6 gap-2">
          {projects.map((_, i) => (
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
