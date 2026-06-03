"use client";

import { motion } from "framer-motion";
import { CURRENT_FOCUS } from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import { fadeInUp, stagger } from "@/lib/animations";

export default function NowPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        <p className="label text-faint">now</p>
        <h1 className="mt-3 text-display text-text">Current Focus</h1>
        <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-muted">
          What I&apos;m actively learning and working on right now. This page is
          a living document — updated as my focus evolves.
        </p>

        <motion.div
          className="mt-12 space-y-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CURRENT_FOCUS.map((item) => (
            <motion.div
              key={item.topic}
              variants={fadeInUp}
              className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-border-hover"
            >
              <span className="mt-0.5 text-xl" role="img" aria-label={item.topic}>
                {item.icon}
              </span>
              <div>
                <h3 className="font-display text-base font-medium text-text">
                  {item.topic}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 font-mono text-[11px] text-faint">
          Last updated: June 2025
        </p>
      </div>
    </PageTransition>
  );
}
