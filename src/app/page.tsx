import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

import DarkBox from "@/components/Darkbox";
import IconWrapper from "@/components/IconWrapper";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-4">
      {/* Left Column */}
      <div className="mx-auto md:mx-0 flex justify-center md:justify-start flex-col">
        <h2 className="lg:text-3xl text-2xl font-bold text-primary">
          Hey! I'm
        </h2>
        <h1 className="lg:text-7xl text-5xl font-extrabold text-secondary">
          Peyton Smith
        </h1>
        <DarkBox className="xs:max-w-md my-8">
          <p className="text-lg">
            I'm an FSU Computer Engineering graduate with a passion for software
            development. My current area of interest lies in full-stack app
            development with hands-on work experience using Ruby on Rails, and
            I'm committed to continuously learning and mastering new
            technologies along the way!
          </p>
        </DarkBox>

        {/* Social Links */}
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary"
          >
            <IconWrapper Icon={Linkedin} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary"
          >
            <IconWrapper Icon={Github} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-secondary hover:text-primary"
          >
            <IconWrapper Icon={Mail} />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-center md:justify-end items-center">
        <div className="relative w-full max-w-[400px] aspect-square">
          <div className="p-1 rounded-full border-3 border-primary">
            <img
              src="/assets/images/home/profile.jpg"
              alt="Profile picture of Peyton Smith"
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
