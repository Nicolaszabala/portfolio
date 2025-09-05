import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Code, Zap, Trophy } from "lucide-react";
import { DEVELOPER_INFO, STATS } from "@/lib/constants";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatIcon = (key: string) => {
    const icons = {
      projects: <Code className="text-primary h-6 w-6" />,
      experience: <Zap className="text-accent h-6 w-6" />,
      clients: <Trophy className="text-primary h-6 w-6" />,
      technologies: <Sparkles className="text-accent h-6 w-6" />,
    };
    return icons[key as keyof typeof icons];
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground flex items-center space-x-2">
                <Sparkles className="text-primary h-8 w-8" />
                <span>My Journey</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {DEVELOPER_INFO.story}
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                I believe in continuous learning and staying at the forefront of
                technology trends. When I'm not coding, you'll find me
                contributing to open source projects, mentoring junior
                developers, or exploring the latest in AI and machine learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {Object.entries(STATS).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="text-center p-6 bg-card dark:bg-card border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group neon-glow">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-3">
                        {getStatIcon(key)}
                      </div>
                      <div className="text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                        {value}
                      </div>
                      <div className="text-muted-foreground font-semibold text-sm capitalize">
                        {key === "experience"
                          ? "Years Experience"
                          : key === "clients"
                          ? "Happy Clients"
                          : key === "projects"
                          ? "Projects Completed"
                          : "Technologies"}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="nicoconexos.png"
                alt="Professional developer portrait"
                className="relative rounded-2xl shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-[1.02] border-2 border-border"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-xl shadow-xl border border-primary/30"
              >
                <div className="flex items-center space-x-3">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-accent rounded-full"
                  ></motion.div>
                  <span className="text-sm font-bold text-foreground">
                    Available for projects
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
