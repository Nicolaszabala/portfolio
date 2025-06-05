import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Cloud, Users, Award } from "lucide-react";
import { SKILLS } from "@/lib/constants";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIconForCategory = (category: string) => {
    const icons: Record<string, JSX.Element> = {
      development: <Code className="text-primary" size={20} />,
      design: <Palette className="text-primary" size={20} />,
      devops: <Cloud className="text-primary" size={20} />,
      collaboration: <Users className="text-primary" size={20} />,
    };
    return icons[category] || <Code className="text-primary" size={20} />;
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center space-x-2">
              <Code className="text-primary h-8 w-8" />
              <span>Technical Skills</span>
            </h3>

            <div className="space-y-8">
              {SKILLS.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground text-lg">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className={`h-4 rounded-full shadow-lg ${
                        skill.name === "Frontend Development"
                          ? "bg-gradient-to-r from-primary via-purple-500 to-primary neon-glow"
                          : skill.name === "Backend Development"
                          ? "bg-gradient-to-r from-accent via-green-500 to-accent neon-glow"
                          : skill.name === "Database & Cloud"
                          ? "bg-gradient-to-r from-purple-500 via-primary to-purple-500 neon-glow"
                          : "bg-gradient-to-r from-accent via-orange-500 to-accent neon-glow"
                      }`}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-bold border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Workflow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center space-x-2">
              <Palette className="text-primary h-8 w-8" />
              <span>Tools & Workflow</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(SKILLS.tools).map(([category, tools], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-card dark:bg-card p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group neon-glow border-border">
                    <CardContent className="p-0">
                      <h4 className="font-bold text-foreground mb-4 flex items-center capitalize text-lg group-hover:text-primary transition-colors">
                        {getIconForCategory(category)}
                        <span className="ml-2">{category}</span>
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {tools.map((tool) => (
                          <li key={tool} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="font-medium">{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 p-6 border-primary/20 neon-glow">
                <CardContent className="p-0">
                  <h4 className="font-bold text-foreground mb-6 flex items-center text-xl">
                    <Award className="text-primary mr-3" size={24} />
                    Certifications & Learning
                  </h4>
                  <div className="space-y-4">
                    {SKILLS.certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                      >
                        <span className="font-semibold text-foreground">
                          {cert.name}
                        </span>
                        <span className="text-xs text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
