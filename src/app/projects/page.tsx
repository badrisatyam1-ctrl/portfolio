"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import Badge from "@/components/ui/Badge";
import { ExternalLink, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProjectsDashboard() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id);
  const activeProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0];

  return (
    <PageTransition>
      <div className="flex h-full min-h-0 flex-col md:flex-row">
        {/* Left List Pane */}
        <div className="custom-scrollbar w-full flex-shrink-0 overflow-y-auto border-b border-border/50 bg-surface/30 md:w-80 md:border-b-0 md:border-r">
          <div className="sticky top-0 z-10 border-b border-border/50 bg-surface/80 px-5 py-4 backdrop-blur-md">
            <p className="font-mono text-xs text-accent">// ARCHIVE</p>
            <h1 className="text-xl font-bold text-text">Engineering Case Studies</h1>
          </div>
          
          <div className="flex flex-col p-3">
            {PROJECTS.map((project) => {
              const isActive = activeId === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={cn(
                    "flex flex-col items-start rounded-lg border p-4 text-left transition-all",
                    isActive 
                      ? "border-accent/50 bg-accent/5" 
                      : "border-transparent hover:bg-surface"
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-mono text-[10px] text-faint">{project.index}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                  </div>
                  <h3 className={cn("mt-1 font-mono text-sm", isActive ? "text-text" : "text-muted")}>
                    {project.title}
                  </h3>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Details Pane */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-8 border-b border-border/50 pb-8">
                <div className="flex items-center gap-3">
                  <Database size={16} className="text-accent" />
                  <span className="font-mono text-xs text-faint uppercase tracking-wider">Project File {activeProject.index}</span>
                </div>
                <h2 className="mt-4 text-3xl font-bold text-text md:text-4xl">{activeProject.title}</h2>
                <p className="mt-3 text-lg text-muted">{activeProject.subtitle}</p>
                
                <p className="mt-6 text-[15px] leading-relaxed text-muted/90">
                  {activeProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent/10 px-4 py-2 font-mono text-xs text-accent transition-colors hover:bg-accent hover:text-bg"
                  >
                    View Source <ExternalLink size={14} />
                  </a>
                )}
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {activeProject.sections.map((section, idx) => (
                  <div key={section.title} className="relative pl-4 border-l border-border/50">
                    <span className="absolute -left-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-bg">
                      <span className="h-1 w-1 rounded-full bg-accent/50" />
                    </span>
                    <h3 className="font-mono text-sm uppercase tracking-wide text-text">
                      <span className="mr-2 text-faint">0{idx + 1}.</span>
                      {section.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
}
