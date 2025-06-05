import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { DEVELOPER_INFO, STATS } from "@/lib/constants";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-secondary">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {DEVELOPER_INFO.story}
              </p>
              <p className="text-gray-600 leading-relaxed">
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
                  <Card className="text-center p-4 bg-slate-50 hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-primary">
                        {value}
                      </div>
                      <div className="text-gray-600 font-medium capitalize">
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
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="Professional developer portrait"
                className="rounded-2xl shadow-2xl w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Available for projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
