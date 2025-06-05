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
    <section id="skills" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {SKILLS.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isInView ? { width: `${skill.level}%` } : { width: 0 }
                      }
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-3 rounded-full shadow-sm ${
                        skill.name === "Frontend Development"
                          ? "bg-gradient-to-r from-primary to-blue-600"
                          : skill.name === "Backend Development"
                          ? "bg-gradient-to-r from-green-500 to-green-600"
                          : skill.name === "Database & Cloud"
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-accent to-orange-600"
                      }`}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium"
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
            <h3 className="text-2xl font-semibold text-secondary mb-6">
              Tools & Workflow
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {Object.entries(SKILLS.tools).map(([category, tools], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-slate-50 p-6 hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-0">
                      <h4 className="font-semibold text-gray-700 mb-4 flex items-center capitalize">
                        {getIconForCategory(category)}
                        <span className="ml-2">{category}</span>
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {tools.map((tool) => (
                          <li key={tool}>{tool}</li>
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
              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 p-6">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-gray-700 mb-4 flex items-center">
                    <Award className="text-primary mr-2" size={20} />
                    Certifications & Learning
                  </h4>
                  <div className="space-y-3">
                    {SKILLS.certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm text-gray-600">
                          {cert.name}
                        </span>
                        <span className="text-xs text-gray-500">
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
