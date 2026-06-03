// =============================================
// TYPE DEFINITIONS
// =============================================

export interface ProjectSection {
  title: string;
  content: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  sections: ProjectSection[];
  githubUrl?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  link?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  achievement: string;
  team?: string;
  link?: string;
}

export interface ArsenalItem {
  id: string;
  name: string;
  category: "Microcontrollers" | "Sensors & Actuators" | "AI & ML Frameworks" | "Hardware Tools";
  description: string;
  skills: string[];
}

export interface Note {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
  tags: string[];
}

export interface CurrentFocus {
  topic: string;
  description: string;
  icon: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

export interface GitHubLanguage {
  name: string;
  percentage: number;
  color: string;
}

export interface GitHubData {
  totalRepos: number;
  totalCommits: number;
  totalStars: number;
  contributionStreak: number;
  languages: GitHubLanguage[];
  repos: GitHubRepo[];
}

export interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalEasy: number;
  totalMedium: number;
  totalHard: number;
  ranking: number;
  streak: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
