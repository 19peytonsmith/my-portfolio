"use client";

import { useState, useEffect } from "react";

import DarkBox from "@/components/Darkbox";
import IconLink from "@/components/IconLink";
import IconWrapper from "@/components/IconWrapper";
import Indicators from "@/components/Indicators";

import { motion, AnimatePresence } from "framer-motion";

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
      'A comprehensive RubyGem API wrapper for an external service - <a href="https://docs.developer.tazworks.com/" class="text-primary" target="_blank" rel="noopener noreferrer">Tazworks API</a>, with over 30 easily interfaceable methods and classes used within the rental application flow @ Wayhome made to screen tenants and property partners.',
    tags: [
      "Ruby",
      "RubyGems",
      "API",
      "HTTP Client",
      "RSpec",
      "VCR",
      "Unit Testing",
      "Integration Testing",
    ],
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
    tags: [
      "Xcode",
      "Swift",
      "Firebase",
      "Google Maps API",
      "Google Places API",
      "Figma",
    ],
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
      "A Python + React web app that fetches a random Zillow listing, displays its images and details, and has the user guess the price. Includes scraping, data handling, and a Flask API backend.",
    tags: [
      "Python",
      "Flask",
      "React",
      "Docker",
      "Web Scraping",
      "BeautifulSoup",
      "Pandas",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    image: "/assets/images/projects/zillow.png",
    links: [
      {
        Icon: Github,
        url: "https://github.com/19peytonsmith/ZillowGuessr",
      },
    ],
  },
  {
    name: "C# eCommerce App",
    description:
      "A multi-layered C# project that evolved from a basic console app into a full-stack desktop and web application with admin and customer views. Features a file-based database and a RESTful API (Swagger-documented) to handle CRUD operations on product data.",
    tags: ["C#", ".NET", "UWP", "XAML", "REST API", "Swagger"],
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
      "Developed and optimized SQL/MariaDB schemas and queries for a gaming database, modeling users, friends, scores, maps, and tournaments. Included ER diagram design and multi-level data retrieval across the architecture.",
    tags: [
      "SQL",
      "MySQL",
      "MariaDB",
      "ER Diagram",
      "Database Design",
      "Query Optimization",
    ],
    image: "/assets/images/projects/sql.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const project = projects[index];

  // Preload images to avoid flickering
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  return (
    <div className="md:mt-20 md:mb-8 md:py-0 py-8">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-2">
        <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
          <span>Personal Projects</span>
          <span className="after-light-line"></span>
        </h1>
      </div>
      <div className="w-full max-w-7xl px-6 sm:px-8 mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className={
              "flex flex-col md:flex-row justify-center items-center gap-8"
            }
          >
            <div className="flex flex-col gap-4 md:items-start items-center max-w-[500px]">
              <p className="text-gray">{index + 1}.</p>
              <h1 className="text-3xl font-bold text-title md:text-left text-center">
                {project.name}
              </h1>
              <DarkBox className="xs:max-w-md p-6">
                <p dangerouslySetInnerHTML={{ __html: project.description }} />
              </DarkBox>
              <div>
                <ul className="flex flex-wrap ml-4 gap-2 md:justify-start justify-center">
                  {project.tags.map((tag, i) => (
                    <li
                      key={i}
                      className="tracking-widest text-sm font-fira-code"
                    >
                      {tag}
                      {i < project.tags.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                {project.links?.map((link, i) => (
                  <IconLink key={i} href={link.url}>
                    <IconWrapper Icon={link.Icon} />
                  </IconLink>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="w-full max-w-[600px] h-auto max-h-[500px]">
                <img
                  src={project.image}
                  alt={`Image for ${project.name}`}
                  className="w-full h-auto max-h-[500px] object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <Indicators items={projects} currentIndex={index} onSelect={setIndex} />
      </div>
    </div>
  );
}
