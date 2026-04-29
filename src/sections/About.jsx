import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building complete web applications by integrating scalable backend services with modern frontend interfaces.",
  },
  {
    icon: Rocket,
    title: "Backend Architecture",
    description:
      "Designing APIs, handling databases, and optimizing server-side logic for reliable system performance.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Working closely with developers to design, test, and deploy production-ready applications.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Continuously improving my skills and exploring modern technologies across the full stack.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building reliable software,
              <span className="font-serif italic font-normal text-white">
                {" "}one system at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm a Computer Engineering student and currently working as an Intern
                Full Stack Developer at System Sense Corporation (Japan). I
                contribute to building scalable applications by developing both
                backend services and frontend integrations.
              </p>

              <p>
                My earlier work primarily focused on backend development,
                where I built APIs, handled database operations, and optimized
                server-side logic to improve system performance and reliability.
                This experience gave me a strong foundation in backend
                architecture and system design.
              </p>

              <p>
                Today, I work across the full stack — integrating frontend
                interfaces with backend services, managing databases, and
                contributing to scalable and efficient software systems. I
                enjoy solving complex technical problems and continuously
                improving my development skills.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build scalable and reliable software solutions
                that solve real-world problems while continuously growing as a
                full stack developer."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};