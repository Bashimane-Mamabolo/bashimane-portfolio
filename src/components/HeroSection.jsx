import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-0"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="tracking-tight">
            <span className="opacity-0 animate-fade-in block text-2xl sm:text-3xl"> Hi, I'm</span>
            {/* <span className="text-primary opacity-0 animate-fade-in-delay-1 block text-glow">
              Pedro
            </span> */}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block text-3xl sm:text-4xl md:text-5xl">
              Bashimane Mamabolo
            </span>
          </h1>

          <div className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-2xl opacity-0 animate-fade-in-delay-2 mb-6 sm:mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-primary/30">
              <img 
                src="/heroes/dev.jpg" 
                alt="Developer Workspace" 
                className="w-full h-auto object-cover"
                style={{ height: "300px", maxHeight: "50vh", objectPosition: "center bottom" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I build robust, scalable backend solutions that power amazing experiences.
            Specializing in Java and .NET technologies, I create the foundation that
            makes modern applications work flawlessly behind the scenes.
          </p>

          <div className="pt-4 sm:pt-6 opacity-80 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-sm sm:text-base">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer group hover:text-primary transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <span className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300"> Scroll </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </a>
    </section>
  );
};
