import DarkBox from "@/components/Darkbox";
import GridList from "@/components/GridList";

export default function AboutMe() {
  const techStack = [
    "C#/.NET",
    "RoR",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "Docker",
    "Azure",
    "Git",
    "GHA",
    "Python",
    "Firebase",
    "Swift",
    "C++",
    "Bash",
  ];

  return (
    <div className="md:py-0 py-8 md:mt-20">
      <div className="max-w-5xl mx-auto w-full px-6 sm:px-8">
        <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
          <span>Who am I?</span>
          <span className="after-light-line"></span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 lg:gap-8 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-1 flex-col gap-4">
          <div className="relative w-full max-w-[400px] aspect-square mx-auto md:mx-0">
            <div className="absolute top-[-20px] left-[-20px] w-full h-full rounded-3xl border-3 border-primary z-0"></div>
            <div className="relative z-10">
              <img
                src="/assets/images/about-me/profile.jpg"
                alt="Profile picture of Peyton Smith"
                className="rounded-3xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <p className="text-sm tracking-wider font-light mb-2 text-center md:text-left">
              Here's some technologies I have experience with:
            </p>
            <GridList items={techStack} minColumnWidth={130} />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <DarkBox className="p-6">
            <p className="text-sm tracking-widest">
              Hi! My name is Peyton — I'm a 23-year-old Software Engineer with
              hands-on experience developing full-stack web applications using
              Ruby on Rails and .NET. I graduated with high honors from Florida
              State University in May 2023 with a Bachelor's degree in Computer
              Engineering. From a young age, I was passionate about math and
              science, which naturally led me to explore the world of
              technology. In high school, I had a deep interest for math,
              tutoring fellow classmates and assistant teaching our high school
              algebra class.
            </p>
            <p className="text-sm mt-2 tracking-widest">
              When I entered college, I was new to coding but quickly grew to
              enjoy it. I began with C++, explored engineering languages like
              MATLAB and C, and eventually transitioned into full-stack
              development with C#, HTML, CSS, and JavaScript. Through
              self-driven projects and real-world experience, I've expanded my
              skillset to include Python, SQL, Swift, and Ruby on Rails.
            </p>
            <p className="text-sm mt-2 tracking-widest">
              Since graduating, I've worked as an Application Developer at the
              Institute for Intergovernmental Research, where I build scalable,
              accessible web applications for justice and law enforcement
              agencies using .NET and Azure. Prior to that, I interned at a
              rental-tech startup, where I led the upgrade of a Rails app,
              migrated infrastructure to AWS, and improved the user experience
              and reliability of their platform.
            </p>
            <p className="text-sm mt-2 tracking-widest">
              I'm proud of my journey so far and excited to keep growing—whether
              that's mastering new frameworks, collaborating with creative
              teams, or tackling technical challenges that make a real impact.
            </p>
          </DarkBox>
        </div>
      </div>
    </div>
  );
}
