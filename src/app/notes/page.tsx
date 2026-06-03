"use client";

import { motion } from "framer-motion";
import { NOTES } from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import Badge from "@/components/ui/Badge";
import { BookOpen, Calendar, Clock } from "lucide-react";

export default function NotesDashboard() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <header className="mb-8 flex items-center justify-between border-b border-border/50 pb-4">
          <div>
            <p className="font-mono text-xs text-accent">// KNOWLEDGE_BASE</p>
            <h1 className="mt-1 text-2xl font-bold text-text">Engineering Notes</h1>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          {NOTES.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent/50 sm:flex-row sm:items-center"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-4 text-faint">
                  <span className="flex items-center gap-1 font-mono text-[10px] uppercase">
                    <Calendar size={12} /> {new Date(note.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[10px] uppercase">
                    <Clock size={12} /> {note.readingTime}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                  {note.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                  {note.excerpt}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {note.tags.map(tag => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex sm:mt-0 sm:ml-6 sm:flex-col sm:items-end">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-bg text-faint transition-colors group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
                  <BookOpen size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
