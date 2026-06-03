"use client";

import { motion } from "framer-motion";
import { PERSONAL, FOCUS_AREAS, SOCIAL_LINKS } from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import { Cpu, MemoryStick, Activity, Network } from "lucide-react";
import Link from "next/link";

export default function DashboardOverview() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-5xl p-4 sm:p-6 lg:p-8">
        {/* Header Block */}
        <header className="mb-8 border-b border-border/50 pb-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs text-accent">
                // SYSTEM_OVERVIEW
              </p>
              <h1 className="mt-2 text-display text-text">{PERSONAL.name}</h1>
              <p className="mt-2 font-mono text-sm text-muted">
                {PERSONAL.tagline}
              </p>
            </div>
            <div className="mt-4 flex gap-6 sm:mt-0">
              <div className="text-right">
                <p className="font-mono text-xs text-faint">LOCATION</p>
                <p className="font-mono text-sm text-text">{PERSONAL.location}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Identity Panel (60%) */}
          <motion.section 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            className="card-panel col-span-1 flex flex-col p-6 sm:col-span-2 lg:col-span-3"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-border/50 pb-2">
              <Network size={16} className="text-accent" />
              <h2 className="font-mono text-xs uppercase text-faint">Identity Node</h2>
            </div>
            <p className="text-base leading-relaxed text-muted">
              {PERSONAL.degree} student at <span className="text-text">{PERSONAL.college}</span>.
              Building systems at the intersection of AI, embedded hardware, and product engineering.
            </p>
            <div className="mt-auto pt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map(link => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="rounded-md bg-surface-2 px-3 py-1.5 font-mono text-sm text-text transition-colors hover:bg-accent/20 hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <Link href="/about" className="font-mono text-sm text-accent hover:underline">
                more about me →
              </Link>
            </div>
          </motion.section>

          {/* Core Modules Panel (20%) */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="card-panel col-span-1 flex flex-col p-6 lg:col-span-1"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-border/50 pb-2">
              <Cpu size={16} className="text-accent" />
              <h2 className="font-mono text-xs uppercase text-faint">Core Modules</h2>
            </div>
            <div className="flex flex-col gap-2">
              {FOCUS_AREAS.map(area => (
                <div key={area} className="flex items-center justify-between rounded bg-surface-2 px-3 py-2">
                  <span className="font-mono text-sm text-text">{area}</span>
                  <span className="h-2 w-2 rounded-full bg-accent opacity-50" />
                </div>
              ))}
            </div>
          </motion.section>

          {/* Quick Access Panel (20%) */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
            className="card-panel col-span-1 flex flex-col p-6 lg:col-span-1"
          >
            <div className="mb-4 flex items-center gap-2 border-b border-border/50 pb-2">
              <Activity size={16} className="text-accent" />
              <h2 className="font-mono text-xs uppercase text-faint">Quick Access</h2>
            </div>
            <div className="flex h-full flex-col gap-4">
              <Link href="/projects" className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-lg bg-surface/50 p-4 transition-all hover:bg-surface border border-transparent hover:border-accent/20">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-text group-hover:text-accent">Archive</p>
                  <span className="font-mono text-xs text-faint group-hover:text-accent transition-colors">→</span>
                </div>
                <div className="mt-3">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-faint">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                    3 Active Cases
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/0 blur-xl transition-all group-hover:bg-accent/10" />
              </Link>

              <Link href="/terminal" className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-lg bg-surface/50 p-4 transition-all hover:bg-surface border border-transparent hover:border-accent/20">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-text group-hover:text-accent">Console</p>
                  <span className="font-mono text-xs text-faint group-hover:text-accent transition-colors">→</span>
                </div>
                <div className="mt-3 rounded border border-border/50 bg-bg p-2 font-mono text-[10px] text-muted">
                  <span className="text-accent">$</span> ./sys --status
                </div>
                {/* Glow effect on hover */}
                <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-accent/0 blur-xl transition-all group-hover:bg-accent/10" />
              </Link>
            </div>
          </motion.section>

        </div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            © 2026 {PERSONAL.name} · v1
          </p>
          <div className="flex gap-4 font-mono text-xs text-faint">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}
