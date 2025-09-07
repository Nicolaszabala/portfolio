import { motion } from "framer-motion";
import { ChevronDown, Download, Eye, Sparkles, Code2, Rocket, Zap, Star } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    console.log("Downloading resume...");
  };

  // Variantes de animación mejoradas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center discord-bg dark:bg-background overflow-hidden">
      {/* Partículas flotantes mejoradas */}
      <div className="floating-particles"></div>
      
      {/* Elementos de fondo animados mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            x: [0, -120, 0],
            y: [0, 120, 0],
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full blur-2xl"
        />
      </div>

      {/* Elementos de código flotantes mejorados */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [-20, 30, -20],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 opacity-30"
        >
          <div className="glass-premium p-3 rounded-xl">
            <Code2 className="text-primary h-8 w-8" />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [30, -20, 30],
            rotate: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-32 opacity-25"
        >
          <div className="glass-premium p-2 rounded-lg">
            <Sparkles className="text-accent h-6 w-6" />
          </div>
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [-25, 25, -25],
            rotate: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-32 opacity-20"
        >
          <div className="glass-premium p-3 rounded-xl">
            <Rocket className="text-primary h-7 w-7" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [15, -35, 15],
            rotate: [0, -10, 0],
            x: [-5, 15, -5]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-60 right-20 opacity-25"
        >
          <div className="glass-premium p-2 rounded-lg">
            <Zap className="text-accent h-5 w-5" />
          </div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [-10, 40, -10],
            rotate: [0, 25, 0],
            scale: [0.8, 1.3, 0.8]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-16 opacity-15"
        >
          <div className="glass-premium p-3 rounded-xl">
            <Star className="text-primary h-6 w-6" />
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              className="inline-flex items-center space-x-3 glass-premium px-6 py-3 rounded-full border border-primary/20 hover-lift animate-pulse-glow"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-primary h-5 w-5" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Available for projects
              </span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground leading-none tracking-tighter"
            >
              <span className="gradient-text-advanced">
                {DEVELOPER_INFO.name}
              </span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold"
            >
              <span className="gradient-text">
                {DEVELOPER_INFO.title}
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            {DEVELOPER_INFO.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="group relative bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 neon-glow hover-lift magnetic-btn focus-ring font-bold px-10 py-6 text-lg rounded-2xl overflow-hidden"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                View My Work
              </motion.div>
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="group glass-premium border-2 border-primary/50 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover-lift magnetic-btn focus-ring font-bold px-10 py-6 text-lg rounded-2xl"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </motion.div>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8 pt-12"
          >
            {/* SOLO GITHUB Y LINKEDIN */}
            <motion.a
              href={SOCIAL_LINKS.github}
              whileHover={{ 
                scale: 1.3, 
                rotate: 10,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-gray-400 transition-all duration-300 p-4 rounded-2xl glass-premium hover-lift focus-ring"
            >
              <FaGithub size={32} />
            </motion.a>
            
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              whileHover={{ 
                scale: 1.3, 
                rotate: -10,
                y: -5
              }}
              whileTap={{ scale: 0.9 }}
              className="text-foreground/60 hover:text-blue-400 transition-all duration-300 p-4 rounded-2xl glass-premium hover-lift focus-ring"
            >
              <FaLinkedin size={32} />
            </motion.a>
          </motion.div>

          {/* Indicador de scroll mejorado */}
          <motion.div
            variants={itemVariants}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-flex flex-col items-center space-y-2 glass-premium p-4 rounded-2xl hover-lift cursor-pointer"
              onClick={scrollToProjects}
            >
              <span className="text-sm font-medium text-foreground/60">Scroll to explore</span>
              <ChevronDown className="text-foreground/40 h-6 w-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}