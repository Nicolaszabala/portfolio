import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Fullstack" },
    { id: "frontend", label: "Frontend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      React: "bg-blue-100 text-blue-800",
      "Node.js": "bg-green-100 text-green-800",
      PostgreSQL: "bg-purple-100 text-purple-800",
      "Vue.js": "bg-blue-100 text-blue-800",
      PWA: "bg-yellow-100 text-yellow-800",
      "Chart.js": "bg-red-100 text-red-800",
      "Next.js": "bg-blue-100 text-blue-800",
      "Socket.io": "bg-green-100 text-green-800",
      MongoDB: "bg-orange-100 text-orange-800",
      "React Native": "bg-blue-100 text-blue-800",
      Expo: "bg-purple-100 text-purple-800",
      API: "bg-green-100 text-green-800",
      Angular: "bg-blue-100 text-blue-800",
      "D3.js": "bg-red-100 text-red-800",
      WebSocket: "bg-purple-100 text-purple-800",
      Django: "bg-blue-100 text-blue-800",
      Python: "bg-yellow-100 text-yellow-800",
      Redis: "bg-green-100 text-green-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        {/* Project Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                activeFilter === filter.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-secondary">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.demo}
                        className="text-gray-600 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full font-medium ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
