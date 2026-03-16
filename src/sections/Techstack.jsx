import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const highlights = [
  {
    title: "Backend API Development",
    description:
      "Designed and implemented RESTful APIs for scalable backend services. Handled authentication, database queries, and optimized API performance.",
    image: "/projects/backend.png",
    tags: ["Node.js", "Java", "REST API"],
    link: "#",
    github: "#",
  },
  {
    title: "Database Engineering",
    description: 
      "Worked with relational databases including MySQL and PostgreSQL. Designed schemas, optimized queries, and improved backend performance.",
    image: "/projects/database.png",
    tags: ["MySQL", "PostgreSQL", "SQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Frontend Integration",
    description:
      "Connected frontend interfaces with backend APIs using React. Built responsive UI components and handled real-time data interactions.",
    image: "/projects/frontend.png",
    tags: ["React", "TypeScript", "API Integration"],
    link: "#",
    github: "#",
  },
  {
    title: "System Performance Improvements",
    description:
      "Improved backend performance through optimized queries, efficient API design, and collaboration with the development team.",
    image: "/projects/performance.png",
    tags: ["Optimization", "Backend", "Performance"],
    link: "#",
    github: "#",
  },
];

export const Techstack = () => {
  return (
    <section id="techstack" className="py-32 relative overflow-hidden">
      
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Engineering Highlights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Technologies and systems
            <span className="font-serif italic font-normal text-white">
              {" "}I've worked with.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Real technologies and engineering experiences from my work as a
            backend and full stack developer intern.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all" />
                </div>

                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            More Work Coming Soon
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};