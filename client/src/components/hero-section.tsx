import { motion } from "framer-motion";
import { ChevronDown, Download, Eye } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 font-medium"
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-secondary leading-tight"
            >
              {DEVELOPER_INFO.name}
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-semibold gradient-text"
            >
              {DEVELOPER_INFO.title}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
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
              className="bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Eye className="mr-2 h-4 w-4" />
              View My Work
            </Button>
            
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center space-x-6 pt-8"
          >
            <a
              href={SOCIAL_LINKS.github}
              className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.twitter}
              className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              className="text-gray-600 hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-gray-400 h-8 w-8" />
      </motion.div>
    </section>
  );
}
