"use client";

import { useRef, useEffect } from "react";
import { useTerminal } from "@/hooks/useTerminal";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/layout/PageTransition";
import type { Metadata } from "next";

export default function TerminalPage() {
  const { lines, input, setInput, handleCommand, navigateHistory } =
    useTerminal();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down");
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion
      const commands = [
        "help",
        "about",
        "projects",
        "skills",
        "github",
        "leetcode",
        "resume",
        "certifications",
        "hackathons",
        "vision",
        "contact",
        "clear",
      ];
      const match = commands.find((c) =>
        c.startsWith(input.trim().toLowerCase())
      );
      if (match) setInput(match);
    }
  };

  return (
    <PageTransition>
      <div className="flex h-full flex-col p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
          <div>
            <h1 className="label text-accent">BADRI TERMINAL</h1>
            <p className="mt-1 text-[13px] text-muted">
              Interactive command interface
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="font-mono text-[11px] text-faint">ACTIVE</span>
          </div>
        </div>

        {/* Terminal window */}
        <div
          className="relative flex min-h-0 flex-1 cursor-text flex-col overflow-hidden rounded-lg border border-border bg-[#0A0A0A] shadow-xl"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
            <span className="ml-2 font-mono text-[11px] text-faint">
              badri@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="custom-scrollbar flex-1 overflow-y-auto p-4 font-mono text-sm leading-relaxed">
            {lines.map((line) => (
              <div
                key={line.id}
                className={cn(
                  "whitespace-pre-wrap",
                  line.type === "input" && "text-accent",
                  line.type === "system" && "text-muted",
                  line.type === "output" && "text-text/80"
                )}
              >
                {line.content || "\u00A0"}
              </div>
            ))}

            {/* Active input line */}
            <div className="flex items-center">
              <span className="mr-2 shrink-0 text-accent">
                badri@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="min-w-0 flex-1 bg-transparent text-text caret-accent outline-none"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
              />
              <span className="terminal-cursor" />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>

        {/* Help text */}
        <p className="mt-4 text-center font-mono text-[11px] text-faint">
          Type &quot;help&quot; to see available commands · ↑↓ history · Tab
          to autocomplete
        </p>
      </div>
    </PageTransition>
  );
}
