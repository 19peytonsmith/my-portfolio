import { Linkedin, Github, Mail } from "lucide-react";

import DarkBox from "@/components/Darkbox";
import IconWrapper from "@/components/IconWrapper";
import IconLink from "@/components/IconLink";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 min-h-[calc(100vh-7rem)] mx-auto w-full px-6 sm:px-8 py-8 max-w-5xl">
      <div className="mx-auto md:mx-0 flex justify-center md:justify-start flex-col">
        <h2 className="lg:text-3xl text-2xl font-bold text-primary">
          Hey! I'm
        </h2>
        <h1 className="lg:text-7xl text-5xl font-extrabold text-secondary">
          Peyton Smith
        </h1>
        <DarkBox className="xs:max-w-md my-8">
          <p className="text-lg tracking-widest">
            An FSU Computer Engineering graduate passionate about full-stack
            development. I have hands-on experience with .NET and Ruby on Rails,
            building scalable web apps and CI/CD pipelines. I'm driven by clean
            code, strong UX, and continuous learning across the software stack.
          </p>
        </DarkBox>
        <div className="flex space-x-4 justify-center md:justify-start">
          <IconLink
            href="https://www.linkedin.com/in/19peytonsmith/"
            title="LinkedIn"
            ariaLabel="LinkedIn Profile"
          >
            <IconWrapper Icon={Linkedin} />
          </IconLink>
          <IconLink
            href="https://github.com/19peytonsmith"
            title="GitHub"
            ariaLabel="GitHub Profile"
          >
            <IconWrapper Icon={Github} />
          </IconLink>
          <IconLink
            href="mailto:19peytonsmith@gmail.com"
            title="Send Email"
            ariaLabel="Email Peyton"
          >
            <IconWrapper Icon={Mail} />
          </IconLink>
        </div>
      </div>
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
