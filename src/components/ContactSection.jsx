import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-2xl sm:text-3xl md:text-4xl">
          Get In <span className="text-primary text-glow">Touch</span>
        </h2>

        <p className="text-center text-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Looking for a backend developer to bring your ideas to life? Or maybe you 
          just want to talk tech? I'm always open to discussing new projects, 
          collaboration opportunities, or just having a good conversation about Java or .NET.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <h3 className="mb-4 sm:mb-6 text-center md:text-left md:pl-24">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6 flex flex-col items-center md:items-start md:pl-24">
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:mamabolobashimane@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    mamabolobashimane@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +27 (67) 0617 931
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 w-full max-w-xs">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold mb-1">Location</h4>
                  <a className="text-foreground hover:text-primary transition-colors">
                    Alberton, Johannesburg, Gauteng
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 sm:pt-8 flex flex-col items-center md:items-start md:pl-24">
              <h4 className="font-semibold mb-4 text-center md:text-left">Connect With Me</h4>
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/bashimane-mamabolo/" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                {/* <a href="#" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" target="_blank" className="text-foreground hover:text-primary transition-colors">
                  <Twitch className="h-5 w-5 sm:h-6 sm:w-6" />
                </a> */}
              </div>
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 rounded-lg shadow-md mt-6 md:mt-0">
            <h3 className="mb-6 text-center md:text-left">Send a Message</h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Bashimane..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="hi@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
