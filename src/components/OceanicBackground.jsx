import { useEffect, useState } from "react";

export const OceanicBackground = () => {
  const [bubbles, setBubbles] = useState([]);
  const [particles, setParticles] = useState([]);
  const [seaweeds, setSeaweeds] = useState([]);
  const [fish, setFish] = useState([]);

  useEffect(() => {
    generateBubbles();
    generateParticles();
    generateSeaweeds();
    generateFish();

    const handleResize = () => {
      generateBubbles();
      generateParticles();
      generateSeaweeds();
      generateFish();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor(
      (window.innerWidth * window.innerHeight) / 15000
    );

    const newBubbles = [];

    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 15 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.2,
        animationDuration: Math.random() * 20 + 10,
        delay: Math.random() * 15,
      });
    }

    setBubbles(newBubbles);
  };

  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );
    const newParticles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.1,
        animationDuration: Math.random() * 15 + 10,
        delay: Math.random() * 10,
      });
    }

    setParticles(newParticles);
  };

  const generateSeaweeds = () => {
    const numberOfSeaweeds = Math.floor(window.innerWidth / 100);
    const newSeaweeds = [];

    for (let i = 0; i < numberOfSeaweeds; i++) {
      newSeaweeds.push({
        id: i,
        height: Math.random() * 150 + 100,
        width: Math.random() * 30 + 20,
        x: Math.random() * 100,
        segments: Math.floor(Math.random() * 3) + 3,
        animationDuration: Math.random() * 5 + 8,
        delay: Math.random() * 2,
        color: `rgba(${Math.floor(Math.random() * 50)}, ${
          Math.floor(Math.random() * 80) + 100
        }, ${Math.floor(Math.random() * 50) + 50}, ${
          Math.random() * 0.3 + 0.2
        })`,
      });
    }

    setSeaweeds(newSeaweeds);
  };

  const generateFish = () => {
    const numberOfFish = Math.floor(window.innerWidth / 200) + 3;
    const newFish = [];

    for (let i = 0; i < numberOfFish; i++) {
      newFish.push({
        id: i,
        size: Math.random() * 30 + 20,
        x: Math.random() * 100,
        y: Math.random() * 70 + 10,
        speed: Math.random() * 30 + 20,
        delay: Math.random() * 15,
        direction: Math.random() > 0.5 ? 'right' : 'left',
        color: `hsl(${Math.random() * 60 + 180}, ${
          Math.random() * 40 + 60
        }%, ${Math.random() * 40 + 40}%)`,
      });
    }

    setFish(newFish);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 dark:from-blue-950 dark:via-blue-900 dark:to-blue-800">
      <div className="ocean-light absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-300 to-transparent opacity-20 dark:opacity-10"></div>
      
      {/* Light rays */}
      <div className="light-ray absolute left-1/4" style={{ transform: 'rotate(-15deg)' }}></div>
      <div className="light-ray absolute left-2/4" style={{ transform: 'rotate(0deg)' }}></div>
      <div className="light-ray absolute left-3/4" style={{ transform: 'rotate(15deg)' }}></div>
      
      {/* Seaweeds */}
      {seaweeds.map((seaweed) => (
        <div
          key={seaweed.id}
          className="seaweed absolute bottom-0"
          style={{
            left: seaweed.x + "%",
            height: seaweed.height + "px",
            width: seaweed.width + "px",
          }}
        >
          {Array.from({ length: seaweed.segments }).map((_, i) => (
            <div
              key={i}
              className="seaweed-segment absolute bottom-0 w-full origin-bottom animate-sway"
              style={{
                height: (seaweed.height / seaweed.segments) * (seaweed.segments - i) + "px",
                backgroundColor: seaweed.color,
                borderRadius: "40% 40% 0 0",
                animationDuration: seaweed.animationDuration + "s",
                animationDelay: seaweed.delay + i * 0.2 + "s",
              }}
            ></div>
          ))}
        </div>
      ))}
      
      {/* Fish */}
      {fish.map((f) => {
        // For right-swimming fish
        if (f.direction === 'right') {
          return (
            <div
              key={f.id}
              className="fish absolute animate-swim-right"
              style={{
                width: f.size + "px",
                height: f.size / 2 + "px",
                left: "-5%",
                top: f.y + "%",
                animationDuration: f.speed + "s",
                animationDelay: f.delay + "s",
              }}
            >
              <div 
                className="fish-body rounded-full rounded-l-none"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  backgroundColor: f.color,
                  position: "relative",
                }}
              >
                {/* Tail */}
                <div 
                  className="fish-tail absolute top-0 left-0 h-full animate-tail"
                  style={{
                    width: f.size / 3 + "px",
                    backgroundColor: f.color,
                    clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
                  }}
                ></div>
                
                {/* Eye */}
                <div 
                  className="fish-eye absolute bg-white rounded-full"
                  style={{
                    width: f.size / 6 + "px",
                    height: f.size / 6 + "px",
                    top: "30%",
                    left: "70%",
                  }}
                >
                  <div 
                    className="fish-pupil absolute bg-black rounded-full"
                    style={{
                      width: "50%",
                      height: "50%",
                      top: "25%",
                      left: "25%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        } 
        // For left-swimming fish
        else {
          return (
            <div
              key={f.id}
              className="fish absolute animate-swim-left"
              style={{
                width: f.size + "px",
                height: f.size / 2 + "px",
                left: "105%",
                top: f.y + "%",
                animationDuration: f.speed + "s",
                animationDelay: f.delay + "s",
              }}
            >
              <div 
                className="fish-body rounded-full rounded-l-none"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  backgroundColor: f.color,
                  position: "relative",
                  transform: "scaleX(-1)",
                }}
              >
                {/* Tail */}
                <div 
                  className="fish-tail absolute top-0 right-0 h-full animate-tail"
                  style={{
                    width: f.size / 3 + "px",
                    backgroundColor: f.color,
                    clipPath: "polygon(0 0, 0 100%, 100% 50%)",
                  }}
                ></div>
                
                {/* Eye */}
                <div 
                  className="fish-eye absolute bg-white rounded-full"
                  style={{
                    width: f.size / 6 + "px",
                    height: f.size / 6 + "px",
                    top: "30%",
                    left: "70%",
                  }}
                >
                  <div 
                    className="fish-pupil absolute bg-black rounded-full"
                    style={{
                      width: "50%",
                      height: "50%",
                      top: "25%",
                      left: "25%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        }
      })}
      
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble rounded-full border border-blue-200 absolute animate-rise"
          style={{
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.x + "%",
            bottom: "-5%",
            opacity: bubble.opacity,
            '--opacity': bubble.opacity,
            animationDuration: bubble.animationDuration + "s",
            animationDelay: bubble.delay + "s",
          }}
        />
      ))}
      
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle rounded-full absolute animate-drift"
          style={{
            width: particle.size + "px",
            height: particle.size + "px",
            left: particle.x + "%",
            top: particle.y + "%",
            opacity: particle.opacity,
            background: "rgba(255, 255, 255, 0.6)",
            animationDuration: particle.animationDuration + "s",
            animationDelay: particle.delay + "s",
          }}
        />
      ))}
    </div>
  );
}; 