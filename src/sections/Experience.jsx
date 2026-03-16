import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaJs
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiPostgresql
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  TypeScript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
  JavaScript: <FaJs />,
  "Node.js": <FaNodeJs />,
  Java: <FaJava />,
  Python: <FaPython />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
};

const experiences = [
  {
    period: "March 2026 — Present",
    role: "Full Stack Developer Intern",
    company: "System Sense Corporation (Japan)",
    description:
      "Expanded responsibilities from backend development to full stack development. Built server-side APIs and integrated frontend interfaces using React and TypeScript while improving system performance and scalability.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind",
      "JavaScript",
      "Node.js",
      "Java",
      "Python",
      "MySQL",
      "PostgreSQL"
    ],
    current: true,
  },
  {
    period: "January 2026 — March 2026",
    role: "Backend Developer Intern",
    company: "System Sense Corporation (Japan)",
    description:
      "Developed and maintained backend services and APIs, worked with relational databases, and collaborated with the development team to improve application reliability and system performance.",
    technologies: [
      "Node.js",
      "Java",
      "Python",
      "MySQL",
      "PostgreSQL"
    ],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
<div className="max-w-3xl mx-auto mb-20 text-center">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Internship Experience
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Professional{" "}
            <span className="font-serif italic font-normal text-white">
              experience.
            </span>
          </h2>

          <p className="text-muted-foreground">
            My experience working as a backend developer intern contributing
            to real-world systems and later expanding into full stack
            development while collaborating with a professional engineering team.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px]
          bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
          md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

{/* Impact Highlights */}
<div className="absolute left-[58%] top-1/3 hidden lg:block w-[320px]">

  {/* connector line */}
  <div className="absolute left-[-60px] top-10 w-[60px] h-[2px] bg-primary/60 shadow-[0_0_10px_rgba(32,178,166,0.8)]" />

  {/* node */}
  <div className="absolute left-[-68px] top-9 w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(32,178,166,0.9)]" />

  <div className="glass p-6 rounded-2xl border border-primary/30
  hover:border-primary/50
  hover:shadow-[0_0_25px_rgba(32,178,166,0.25)]
  transition-all duration-300">

    <h3 className="text-lg font-semibold text-primary mb-4">
      Impact Highlights
    </h3>

    <ul className="space-y-3 text-sm text-muted-foreground">

      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Built REST APIs
      </li>

      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Integrated React frontend
      </li>

      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Worked with SQL databases
      </li>

      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Improved backend performance
      </li>

      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-primary rounded-full"></span>
        Collaborated with dev team
      </li>

    </ul>

  </div>

</div>

          {/* Experience cards */}
          <div className="space-y-16">

            {experiences.map((exp, idx) => (

              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0
                w-4 h-4 bg-primary rounded-full
                -translate-x-1/2 ring-4 ring-background
                shadow-[0_0_15px_rgba(32,178,166,0.9)]">

                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}

                </div>

                {/* Card */}
                <div className="pl-8 md:pl-0 md:pr-16 md:text-right">

                  <div
                    className="glass p-6 rounded-2xl border border-primary/30
                    hover:border-primary hover:scale-[1.02]
                    hover:shadow-[0_0_30px_rgba(32,178,166,0.25)]
                    transition-all duration-300"
                  >

                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Tech badges */}
                    <div className="flex flex-wrap gap-3 mt-4 md:justify-end">

                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-2 px-3 py-1
                          rounded-full bg-surface border border-border
                          text-xs text-muted-foreground
                          hover:border-primary hover:text-primary
                          transition-all duration-300"
                        >
                          {techIcons[tech]}
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};