"use client";

import { useState, useCallback, useRef } from "react";
import { processCommand } from "@/lib/terminal-commands";

export interface TerminalLine {
  id: number;
  type: "input" | "output" | "system";
  content: string;
}

/**
 * Terminal state management hook.
 * Handles command processing, history navigation, and output management.
 */
export function useTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 0, type: "system", content: "BADRI TERMINAL v1.0" },
    {
      id: 1,
      type: "system",
      content: "Type \"help\" for available commands.",
    },
    { id: 2, type: "system", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const nextId = useRef(3);

  const addLine = useCallback(
    (type: TerminalLine["type"], content: string) => {
      const id = nextId.current++;
      setLines((prev) => [...prev, { id, type, content }]);
    },
    []
  );

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim();
      if (!trimmed) return;

      addLine("input", `badri@portfolio:~$ ${trimmed}`);
      setHistory((prev) => [...prev, trimmed.toLowerCase()]);
      setHistoryIndex(-1);

      if (trimmed.toLowerCase() === "clear") {
        setLines([]);
        setInput("");
        return;
      }

      const output = processCommand(trimmed);
      output.split("\n").forEach((line) => addLine("output", line));
      addLine("output", "");
      setInput("");
    },
    [addLine]
  );

  const navigateHistory = useCallback(
    (direction: "up" | "down") => {
      if (history.length === 0) return;

      if (direction === "up") {
        const newIndex =
          historyIndex === -1
            ? history.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else {
        if (historyIndex === -1) return;
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    },
    [history, historyIndex]
  );

  return { lines, input, setInput, handleCommand, navigateHistory };
}
