import DarkBox from "@/components/Darkbox";
import GridList from "@/components/GridList";

export default function AboutMe() {
  const techStack = [
    "RoR",
    "C#/.NET",
    "Docker",
    "GHA",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "JS",
    "Git",
    "C++",
    "C",
    "Swift",
    "Firebase",
    "Bash",
  ];

  return (
    <div className="w-full max-w-5xl px-6 sm:px-8 md:py-0 py-8 mx-auto md:mt-20">
      <h1 className="relative inline-block text-5xl font-extrabold text-primary mb-16">
        <span>Who am I?</span>
        <span className="after-light-line"></span>
      </h1>
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 lg:gap-8">
        <div className="flex flex-1 flex-col justify-center items-center gap-4">
          <div className="relative w-full max-w-[400px] aspect-square">
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
            <p className="text-sm tracking-wider font-light mb-2 text-center">
              Here's some technologies I have experience with:
            </p>
            <GridList items={techStack} columns={3} />
          </div>
        </div>
        <div className="flex lg:flex-1 flex-2 flex-col justify-center items-center">
          <DarkBox className="xs:max-w-md p-6">
            <p className="text-sm tracking-widest">
              Hi! My name is Peyton, I'm a 22 year-old Software Engineer with
              practical work experience in developing full-stack web
              applications using Ruby on Rails. I recently graduated with high
              honors from Florida State University in May 2023, earning my
              Bachelor's degree in Computer Engineering. At a young age, I've
              had a passion for math and science which then led me to explore
              the world of computers and technology as a whole. During high
              school, I had a deep interest for math, tutoring fellow classmates
              and assistant teaching our high school algebra class.
            </p>
            <p className="text-sm mt-2 tracking-widest">
              As I entered college, I was new to coding but quickly grew to
              enjoy it. Starting with C++, I then delved into
              engineering-focused languages such as MATLAB and C, before
              progressing to higher-level languages for full-stack app
              development like C# and self-learning web development using HTML,
              CSS, and JS. My personal projects and work expertise have also
              allowed me to expand my skillset to include Python, SQL, Swift,
              and most recently Ruby on Rails for a startup company in midterm
              rentals! I'm happy with my journey so far, and I'm excited to see
              what the future holds for the years to come.
            </p>
          </DarkBox>
        </div>
      </div>
    </div>
  );
}
