import { Briefcase, Code, User } from "lucide-react";
import resumePDF from "../assets/Bashimane_Resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3>
              Passionate Backend Engineer & Problem Solver
            </h3>

            <p className="text-foreground leading-relaxed">
              With over 2 years of experience in backend development, I've built 
              reliable, secure, and efficient systems using Java, C#, and .NET Core. 
              I love working with databases and creating APIs that make apps come to life.
            </p>

            <p className="text-foreground leading-relaxed">
              I believe great software is built through careful planning, quality code,
              and thorough testing. When I'm not writing code, I'm exploring new technologies
              or collaborating with teams to solve interesting problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors duration-300"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
                  <p className="text-foreground">
                    Building robust APIs, database integrations, and server-side 
                    applications with Java, C#, and .NET Core.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Cloud & DevOps</h4>
                  <p className="text-foreground">
                    Deploying and maintaining applications with Docker, Microsoft Azure,
                    and modern CI/CD practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">Test-Driven Development</h4>
                  <p className="text-foreground">
                    Creating reliable, maintainable software through disciplined TDD 
                    practices and quality-focused development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
