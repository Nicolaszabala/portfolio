import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Database,
  Layers,
  Lock,
  Maximize2,
  Presentation,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { LATEST_PROJECTS } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";

const ICONS: Record<string, typeof Layers> = {
  Layers,
  Workflow,
  Database,
  ShieldCheck,
  RefreshCw,
  Presentation,
};

type Screenshot = { src: string; caption: string };

function ProjectShowcase({ screenshots }: { screenshots: Screenshot[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const current = screenshots[active];
  const { theme } = useTheme();
  const isNewspaper = theme === "newspaper";

  return (
    <div className="space-y-4">
      <motion.button
        type="button"
        onClick={() => setZoomed(true)}
        whileHover={isNewspaper ? {} : { scale: 1.01 }}
        className={`group relative block w-full overflow-hidden rounded-2xl border border-border text-left hover:border-primary/40 transition-colors ${
          isNewspaper ? "bg-muted" : "bg-[#0b0b12]"
        }`}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.caption}
          loading="lazy"
          className="w-full aspect-[16/9] object-contain"
        />
        <span className="absolute top-3 right-3 glass-effect rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <Maximize2 size={16} />
        </span>
      </motion.button>

      <p className="text-sm text-muted-foreground leading-relaxed min-h-[2.5rem]">
        {current.caption}
      </p>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {screenshots.map((shot, index) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`View screenshot ${index + 1}`}
            className={`shrink-0 overflow-hidden rounded-lg border transition-all duration-200 ${
              index === active
                ? "border-primary ring-2 ring-primary/40"
                : "border-border opacity-60 hover:opacity-100 hover:border-primary/40"
            }`}
          >
            <img
              src={shot.src}
              alt=""
              loading="lazy"
              className="h-16 w-28 object-cover object-top"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomed(false)}
            className={`fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 cursor-zoom-out ${
              isNewspaper ? "bg-background/95" : "bg-black/90"
            }`}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 glass-effect rounded-full p-3 text-white hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={current.src}
              alt={current.caption}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-xl object-contain shadow-2xl cursor-default"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LatestProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="latest"
      ref={ref}
      className="relative py-20 bg-background dark:bg-background overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full text-xs font-bold uppercase tracking-widest glass-effect text-primary">
            <Sparkles size={14} />
            Latest Work
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            Latest Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            What I'm building right now — platform work, AI pipelines and the
            architecture decisions behind them
          </p>
        </motion.div>

        <div className="space-y-12">
          {LATEST_PROJECTS.map((project, projectIndex) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.2 + projectIndex * 0.15 }}
              className="glass-effect rounded-3xl border border-border/60 p-6 sm:p-10"
            >
              <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {project.context}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground">
                        {project.period}
                      </span>
                      {project.private && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
                          <Lock size={12} />
                          Private
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg font-bold gradient-text">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full font-bold bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ProjectShowcase screenshots={project.screenshots} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 pt-10 border-t border-border/60">
                {project.highlights.map((highlight) => {
                  const Icon = ICONS[highlight.icon] ?? Sparkles;
                  return (
                    <div
                      key={highlight.title}
                      className="rounded-2xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="rounded-xl bg-primary/10 p-2 text-primary border border-primary/20">
                          <Icon size={18} />
                        </span>
                        <h4 className="font-bold text-foreground text-sm">
                          {highlight.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
