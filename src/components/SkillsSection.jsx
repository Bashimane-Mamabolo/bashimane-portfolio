import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", stars: 5, category: "frontend", icon: "💻" },
  { name: "JavaScript", stars: 5, category: "frontend", icon: "📜" },
  { name: "React", stars: 5, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", stars: 4, category: "frontend", icon: "🔷" },
  { name: "Next.js", stars: 4, category: "frontend", icon: "▲" },
  { name: "Selenium WebDriver", stars: 4, category: "frontend", icon: "🌐" },

  // Backend
  { name: "Java", stars: 4, category: "backend", icon: "☕" },
  { name: "C#", stars: 4, category: "backend", icon: "🔷" },
  { name: "SpringBoot", stars: 4, category: "backend", icon: "🍃" },
  { name: ".NET Core", stars: 4, category: "backend", icon: "🔵" },
  { name: "C++", stars: 3, category: "backend", icon: "⚙️" },
  { name: "SQL Server", stars: 4, category: "backend", icon: "🗄️" },
  { name: "PostgreSQL", stars: 4, category: "backend", icon: "🐘" },
  { name: "MongoDB", stars: 3, category: "backend", icon: "🍃" },
  { name: "TDD", stars: 4, category: "backend", icon: "🧪" },
  { name: "Microsoft Azure", stars: 4, category: "backend", icon: "☁️" },
  { name: "Postman", stars: 4, category: "backend", icon: "🌐" },

  // Tools
  { name: "Git/GitHub", stars: 5, category: "tools", icon: "📊" },
  { name: "Docker", stars: 4, category: "tools", icon: "🐳" },
  { name: "Figma", stars: 4, category: "tools", icon: "🎭" },
  // { name: "VS Code", stars: 5, category: "tools", icon: "📝" },
  
  // Professional Skills
  { name: "Communication", stars: 5, category: "professional", icon: "🗣️" },
  { name: "Problem Solving", stars: 5, category: "professional", icon: "🧩" },
  { name: "Agile/Scrum", stars: 5, category: "professional", icon: "🔄" },
  { name: "Interpersonal", stars: 4, category: "professional", icon: "👥" },
  { name: "Conflict Management", stars: 4, category: "professional", icon: "🤝" },
  { name: "Growth Mindset", stars: 5, category: "professional", icon: "🌱" },
];

const categories = ["all", "frontend", "backend", "tools", "professional"];

const categoryLabels = {
  all: "All Skills",
  frontend: "Frontend Development",
  backend: "Backend Development",
  tools: "Tools & Software",
  professional: "Professional Skills"
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-lg text-primary">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 isolate">
      <div className="container mx-auto max-w-5xl relative z-0">
        <h2 className="mb-6 text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        <p className="text-center text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Here are the technologies and tools I work with to bring ideas to life.
        </p>

        <div className="flex justify-center mb-12 relative z-10">
          <div className="relative inline-block">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="appearance-none bg-card px-10 py-2.5 pr-12 rounded-lg border border-primary/20 cursor-pointer font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              {categories.map((category, key) => (
                <option key={key} value={category} className="capitalize bg-background">
                  {categoryLabels[category]}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-0">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card/20 p-2.5 transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/15 rounded-lg flex flex-col items-center"
            >
              <span 
                className="text-xl bg-primary/10 p-1.5 rounded-full w-8 h-8 flex items-center justify-center mb-1.5" 
                role="img" 
                aria-label={skill.name}
              >
                {skill.icon}
              </span>
              <h3 className="font-medium text-sm text-center mb-1">{skill.name}</h3>
              
              <StarRating rating={skill.stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
