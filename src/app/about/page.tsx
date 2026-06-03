"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SKILLS,
  SKILL_CATEGORIES,
  GITHUB_DATA,
  LEETCODE_DATA,
  CERTIFICATIONS,
  HACKATHONS
} from "@/lib/constants";
import PageTransition from "@/components/layout/PageTransition";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { ExternalLink, Star, GitFork, GitCommit, Code2, Award, Trophy } from "lucide-react";
import Badge from "@/components/ui/Badge";

export default function AboutTelemetry() {
  const [liveLeetCode, setLiveLeetCode] = useState(LEETCODE_DATA);
  const [liveGitHub, setLiveGitHub] = useState(GITHUB_DATA);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLiveData() {
      try {
        const [lcRes, ghRes] = await Promise.all([
          fetch("/api/leetcode").catch(() => null),
          fetch("/api/github").catch(() => null)
        ]);

        if (lcRes?.ok) {
          const lcData = await lcRes.json();
          if (lcData.status === "success") {
            setLiveLeetCode({
              ...LEETCODE_DATA, // keep fallbacks for things not returned by API
              totalSolved: lcData.totalSolved || LEETCODE_DATA.totalSolved,
              easySolved: lcData.easySolved || LEETCODE_DATA.easySolved,
              mediumSolved: lcData.mediumSolved || LEETCODE_DATA.mediumSolved,
              hardSolved: lcData.hardSolved || LEETCODE_DATA.hardSolved,
              ranking: lcData.ranking || LEETCODE_DATA.ranking,
            });
          }
        }

        if (ghRes?.ok) {
          const ghData = await ghRes.json();
          if (ghData.repos) {
            setLiveGitHub({
              ...GITHUB_DATA,
              totalRepos: ghData.totalRepos || GITHUB_DATA.totalRepos,
              totalStars: ghData.totalStars || GITHUB_DATA.totalStars,
              repos: ghData.repos || GITHUB_DATA.repos,
            });
          }
        }
      } catch (err) {
        console.error("Live data fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLiveData();
  }, []);

  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
        <header className="mb-6 flex items-center justify-between border-b border-border/50 pb-4">
          <div>
            <p className="font-mono text-xs text-accent">// TELEMETRY</p>
            <h1 className="mt-1 text-2xl font-bold text-text">System Analytics & Skills</h1>
          </div>
          <div className="flex gap-2">
            <span className={`h-2 w-2 rounded-full ${isLoading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'}`} />
            <span className="font-mono text-[10px] text-faint uppercase">
              {isLoading ? "Fetching Live Data..." : "Live Feed Active"}
            </span>
          </div>
        </header>

        {/* Dashboard Flow */}
        <div className="flex flex-col gap-8">
          
          {/* Top Row: Quick Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-semibold text-faint uppercase">LeetCode Solved</p>
                <Code2 size={14} className="text-accent" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-text"><AnimatedCounter target={liveLeetCode.totalSolved} /></p>
              <p className="mt-1 font-mono text-[10px] text-muted">Streak: {liveLeetCode.streak}d</p>
            </div>
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-semibold text-faint uppercase">GitHub Commits</p>
                <GitCommit size={14} className="text-accent" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-text"><AnimatedCounter target={liveGitHub.totalRepos} /></p>
              <p className="mt-1 font-mono text-[10px] text-muted">Total Repos</p>
            </div>
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-semibold text-faint uppercase">Certifications</p>
                <Award size={14} className="text-accent" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-text"><AnimatedCounter target={CERTIFICATIONS.length} /></p>
            </div>
            <div className="card-panel p-5">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-semibold text-faint uppercase">Hackathons</p>
                <Trophy size={14} className="text-accent" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-text"><AnimatedCounter target={HACKATHONS.length} /></p>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* Skills Radar / Matrix */}
            <div className="card-panel p-6">
              <h2 className="mb-4 font-mono text-[11px] uppercase text-faint">Competency Matrix</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {SKILL_CATEGORIES.map((category) => (
                  <div key={category}>
                    <h3 className="mb-3 font-mono text-[10px] uppercase text-accent">{category}</h3>
                    <div className="space-y-3">
                      {SKILLS.filter((s) => s.category === category).map((skill) => (
                        <div key={skill.name}>
                          <div className="mb-1 flex justify-between">
                            <span className="font-mono text-xs text-text">{skill.name}</span>
                            <span className="font-mono text-[10px] text-faint">{skill.level}%</span>
                          </div>
                          <div className="h-1 w-full overflow-hidden rounded-full bg-surface-2">
                            <motion.div
                              className="h-full rounded-full bg-accent"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repositories */}
            <div className="card-panel p-6">
              <h2 className="mb-4 font-mono text-[11px] uppercase text-faint">Active Repositories</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {liveGitHub.repos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-between rounded-lg border border-border/50 bg-bg p-4 transition-colors hover:border-accent/50"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm text-text truncate pr-2">{repo.name}</span>
                        <ExternalLink size={12} className="text-faint shrink-0" />
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-2">{repo.description || "No description provided."}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <span className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                        {repo.language}
                      </span>
                      {repo.stars > 0 && (
                        <span className="flex items-center gap-1 font-mono text-[10px] text-faint">
                          <Star size={10} /> {repo.stars}
                        </span>
                      )}
                      {repo.forks > 0 && (
                        <span className="flex items-center gap-1 font-mono text-[10px] text-faint">
                          <GitFork size={10} /> {repo.forks}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar Area -> Now flows straight below or as a new row */}
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* LeetCode Details */}
            <div className="card-panel p-6">
              <h2 className="mb-4 font-mono text-[11px] uppercase text-faint">LeetCode Distribution</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-emerald-500">Easy</span>
                    <span className="text-faint">{liveLeetCode.easySolved} / {liveLeetCode.totalEasy}</span>
                  </div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${(liveLeetCode.easySolved/liveLeetCode.totalEasy)*100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-amber-500">Medium</span>
                    <span className="text-faint">{liveLeetCode.mediumSolved} / {liveLeetCode.totalMedium}</span>
                  </div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full bg-amber-500 transition-all duration-1000" style={{ width: `${(liveLeetCode.mediumSolved/liveLeetCode.totalMedium)*100}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-red-500">Hard</span>
                    <span className="text-faint">{liveLeetCode.hardSolved} / {liveLeetCode.totalHard}</span>
                  </div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-surface-2">
                    <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${(liveLeetCode.hardSolved/liveLeetCode.totalHard)*100}%` }} />
                  </div>
                </div>
                <div className="pt-2 font-mono text-[10px] text-faint text-right">
                  Global Rank: {liveLeetCode.ranking.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Certifications & Hackathons List */}
            <div className="card-panel p-6">
              <h2 className="mb-4 font-mono text-[11px] uppercase text-faint">Credentials & Events</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-mono text-[10px] uppercase text-accent">Certifications</h3>
                  <div className="space-y-2">
                    {CERTIFICATIONS.map(cert => (
                      <div key={cert.id} className="flex justify-between border-l-2 border-border/50 pl-3">
                        <div>
                          <p className="text-xs text-text">{cert.title}</p>
                          <p className="font-mono text-[9px] text-faint">{cert.issuer}</p>
                        </div>
                        {cert.link && (
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-accent">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="mb-2 font-mono text-[10px] uppercase text-accent">Hackathons</h3>
                  <div className="space-y-2">
                    {HACKATHONS.map(hack => (
                      <div key={hack.id} className="flex justify-between border-l-2 border-border/50 pl-3">
                        <div>
                          <p className="text-xs text-text">{hack.name}</p>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge variant="accent">{hack.achievement}</Badge>
                            {hack.team && <span className="font-mono text-[9px] text-faint">{hack.team}</span>}
                          </div>
                        </div>
                        {hack.link && (
                          <a href={hack.link} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-accent">
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
