import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, Sparkles, Code2, Rocket } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { DEVELOPER_INFO, SOCIAL_LINKS } from "@/lib/constants";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const downloadResume = () => {
    // In a real application, this would download an actual resume file
    console.log("Downloading resume...");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center discord-bg dark:bg-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-primary/10 rounded-full blur-2xl"
        ></motion.div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 opacity-20"
        >
          <Code2 className="text-primary h-8 w-8" />
        </motion.div>
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 opacity-20"
        >
          <Sparkles className="text-accent h-6 w-6" />
        </motion.div>
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-32 opacity-20"
        >
          <Rocket className="text-primary h-7 w-7" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 px-4 py-2 rounded-full border border-primary/20"
            >
              <Sparkles className="text-primary h-4 w-4" />
              <span className="text-sm font-medium text-foreground/80">Available for projects</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-black text-foreground leading-tight tracking-tight"
            >
              {DEVELOPER_INFO.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl font-bold gradient-text"
            >
              {DEVELOPER_INFO.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {DEVELOPER_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl neon-glow transform hover:scale-105 transition-all duration-200 font-semibold px-8 py-4"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transform hover:scale-105 transition-all duration-200 font-semibold px-8 py-4"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href={SOCIAL_LINKS.github}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-foreground/60 hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-foreground/60 hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.twitter}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-foreground/60 hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <FaTwitter size={28} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.email}
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-foreground/60 hover:text-primary transition-colors duration-200 p-3 rounded-full hover:bg-primary/10"
            >
              <FaEnvelope size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="text-foreground/40 h-8 w-8" />
      </motion.div>
    </section>
  );
}
