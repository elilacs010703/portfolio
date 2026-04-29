import { ArrowUpRight, Github, Truck } from "lucide-react";

const projects = [
  {
    title: "HAULIFY",
    description:
      "A multi-tenant logistics and truck booking platform built for admins, customers, and drivers. It centralizes booking dispatch, delivery tracking, invoices, fuel logs, notifications, and reporting in one operational workspace.",
    tags: [
      "React",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Logistics",
    ],
    image: "/projects/haulify.png",
    demo: "https://haulify-truck-booking-system.vercel.app",
    github:
      "https://github.com/elilacs010703/haulify-truck-booking-system.git",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Featured work
            <span className="font-serif italic font-normal text-white">
              {" "}I&apos;ve built.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Selected work that reflects my interest in practical systems,
            scalable development, and solving real-world problems.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_35px_rgba(32,178,166,0.18)] transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                <div className="relative min-h-[320px] bg-[#08131b] flex items-center justify-center p-6 md:p-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.22),transparent_55%)]" />
                  <img
                    src={project.image}
                    alt={`${project.title} logo`}
                    className="relative z-10 max-h-72 w-full object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-col md:items-start md:justify-between gap-6 p-8">
                  <div className="space-y-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                      <Truck className="w-7 h-7" />
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>

                      <p className="text-muted-foreground mt-3 max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-primary hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
