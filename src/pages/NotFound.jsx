import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="text-center max-w-md">
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-primary opacity-10 select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl font-bold text-primary text-glow">404</div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-foreground/80 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="cosmic-button flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
