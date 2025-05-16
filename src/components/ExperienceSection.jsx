import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Java Developer",
    period: "July 2020 - October 2022",
    skills: "Java, SpringBoot, Hibernate, PostgreSQL, and Maven",
    alignment: "left",
  },
  {
    id: 2,
    company: "Thooto",
    position: "Backend Engineer .Net",
    period: " September 2024 - Present",
    skills: "C#, .Net, SQL Server, MongoDB,Identity Server4, Azure and Entity Framework",
    alignment: "right",
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-2xl sm:text-3xl md:text-4xl">
          My<span className="text-primary text-glow"> Experience</span>
        </h2>

        <div className="relative mt-8 sm:mt-16">
          {/* Timeline line - visible only on md screens and up */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/50 z-0"
            style={{ 
              top: "0", 
              bottom: "0",
              height: "100%"
            }}
          ></div>
          
          {/* Mobile timeline line - left aligned */}
          <div 
            className="md:hidden absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/50 z-0 h-full"
          ></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative ${index === experiences.length - 1 ? "mb-0" : "mb-12 sm:mb-16"} pt-8`}
            >
              {/* Timeline dot - desktop (centered) */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-0 w-16 h-16 rounded-full bg-secondary/30 border-4 border-primary items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <Briefcase className="text-primary" size={20} />
                </div>
              </div>
              
              {/* Timeline dot - mobile (left aligned) */}
              <div className="md:hidden absolute left-4 sm:left-8 transform -translate-x-1/2 top-0 w-12 h-12 rounded-full bg-secondary/30 border-3 border-primary flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <Briefcase className="text-primary" size={16} />
                </div>
              </div>

              {/* Date - desktop positioning */}
              <div 
                className={`hidden md:block absolute text-sm font-medium text-primary whitespace-nowrap top-0 mt-5 px-3 py-1 rounded-md bg-card shadow-sm border border-border/40 ${
                  exp.alignment === "left" 
                    ? "left-[calc(50%+4rem)]" 
                    : "right-[calc(50%+4rem)]"
                }`}
              >
                {exp.period}
              </div>
              
              {/* Mobile date - always above content */}
              <div className="md:hidden text-xs sm:text-sm font-medium text-primary whitespace-nowrap ml-10 sm:ml-16 mb-2 px-2 py-1 rounded-md bg-card shadow-sm border border-border/40 inline-block">
                {exp.period}
              </div>

              {/* Content card */}
              <div
                className={`ml-10 sm:ml-16 md:ml-0 w-[calc(100%-2.5rem)] sm:w-[calc(100%-4rem)] md:w-5/12 p-4 sm:p-6 rounded-lg bg-card shadow-md border border-border/40 ${
                  exp.alignment === "left"
                    ? "md:mr-auto md:pr-6 sm:md:pr-8"
                    : "md:ml-auto md:pl-6 sm:md:pl-8"
                }`}
              >
                <div className="mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-primary">{exp.company}</h3>
                  <h4 className="text-base sm:text-lg font-semibold">{exp.position}</h4>
                </div>
                <div className="mt-3 sm:mt-4">
                  <p className="font-medium text-xs sm:text-sm">Skills: <span className="text-foreground/80">{exp.skills}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 