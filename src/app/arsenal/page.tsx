"use client";

import { motion } from "framer-motion";
import { WORKBENCH_ARSENAL } from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import Badge from "@/components/ui/Badge";
import { Wrench, Cpu, Database, CpuIcon } from "lucide-react";

export default function ArsenalWorkbench() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex items-center justify-between border-b border-border/50 pb-4">
          <div>
            <p className="font-mono text-xs text-accent">// HARDWARE_&_SOFTWARE</p>
            <h1 className="mt-1 text-2xl font-bold text-text">Workbench Arsenal</h1>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {WORKBENCH_ARSENAL.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group card-panel flex flex-col justify-between p-6"
            >
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-border/30 pb-3">
                  <div className="flex items-center gap-2 text-accent">
                    {item.category.includes("Microcontrollers") ? (
                      <Cpu size={16} />
                    ) : item.category.includes("AI") ? (
                      <Database size={16} />
                    ) : (
                      <Wrench size={16} />
                    )}
                    <span className="font-mono text-[10px] uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-text">{item.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
