"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Terminal, FolderOpen, Wrench, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const ROUTES = [
  { path: "/", label: "Overview", icon: Activity },
  { path: "/projects", label: "Archives", icon: FolderOpen },
  { path: "/arsenal", label: "Arsenal", icon: Wrench },
  { path: "/notes", label: "Notes", icon: BookOpen },
  { path: "/about", label: "Telemetry", icon: User },
  { path: "/terminal", label: "Console", icon: Terminal },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <aside className="flex h-full w-16 flex-col items-center py-6 sm:w-[240px] sm:items-stretch sm:px-6">
      {/* Brand Header */}
      <div className="mb-12 flex items-center justify-center sm:justify-start">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-base font-bold text-accent shadow-[0_0_15px_rgba(0,229,255,0.15)]">
          B.
        </span>
        <div className="ml-4 hidden flex-col sm:flex">
          <span className="font-mono text-[11px] uppercase tracking-widest text-faint">Engineer</span>
          <span className="font-mono text-sm font-semibold tracking-wide text-text">WORKSPACE</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-1 flex-col gap-2">
        {ROUTES.map((route) => {
          const isActive = pathname === route.path;
          const Icon = route.icon;
          return (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 sm:h-11 sm:w-full sm:justify-start sm:px-4",
                  isActive
                    ? "bg-accent/10 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                    : "text-muted hover:bg-surface/50 hover:text-text hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                )}
                title={route.label}
              >
              <Icon size={18} className="shrink-0" />
              <span className="ml-3 hidden font-mono text-sm sm:block">
                {route.label}
              </span>
              
              {/* Active Indicator Line (Mobile/Icon only view) */}
              {isActive && (
                <span className="absolute -left-1 top-1/2 h-4 w-1 -translate-y-1/2 rounded-r-md bg-accent sm:hidden" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Status Panel */}
      <div className="mt-auto hidden sm:block">
        <div className="card-panel p-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              {isOnline && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>}
              <span className={cn("relative inline-flex h-2 w-2 rounded-full", isOnline ? "bg-accent" : "bg-red-500")}></span>
            </span>
            <span className={cn("font-mono text-xs uppercase", isOnline ? "text-accent" : "text-red-500")}>
              Conn: {isOnline ? "Online" : "Offline"}
            </span>
          </div>
          <p className="mt-1.5 font-mono text-xs text-faint">
            CPU: 12% | RAM: 2.1GB
          </p>
        </div>
      </div>
    </aside>
  );
}
