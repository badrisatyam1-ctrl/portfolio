// =============================================
// TERMINAL COMMAND PROCESSOR
// =============================================

const COMMANDS: Record<string, string> = {
  help: `Available commands:

  about          — Who is Badri Vishal Pandey
  projects       — Engineering case studies
  skills         — Technical competencies
  github         — GitHub activity
  leetcode       — Problem solving stats
  resume         — View resume
  certifications — Certifications earned
  hackathons     — Hackathon experiences
  vision         — Engineering philosophy
  contact        — Get in touch
  clear          — Clear terminal`,

  about: `╔══════════════════════════════════════════╗
║  BADRI VISHAL PANDEY                     ║
║  AI Engineer · Embedded Systems Builder  ║
╚══════════════════════════════════════════╝

  B.Tech in Electronics & Communication Engineering
  Galgotias College of Engineering and Technology
  Greater Noida · Graduation 2028

  Turning logic into intelligent systems and
  bold ideas into shipped products.

  Currently focused on deep learning, embedded systems,
  and building products that solve real problems.`,

  projects: `Engineering Projects
  ────────────────────────

  01  Semiconductor Wafer Defect Classification System
      Deep learning pipeline for manufacturing QC
      → github.com/badrisatyam1-ctrl/wafer-defect-classification

  02  Smart Helmet
      Embedded safety intelligence system
      Sensors · Accident Prevention · Emergency Communication

  03  Drone System
      Autonomous aerial systems experiment
      PID Control · RF Communication · GPS Navigation`,

  skills: `Technical Stack
  ────────────────────────

  Languages     Python · C/C++
  AI & Data     TensorFlow · scikit-learn · Pandas · NumPy · Deep Learning
  Embedded      Arduino · ESP32 · Sensors · Microprocessors · Circuit Design
  Solving       86 LeetCode problems (47E · 36M · 3H)`,

  github: `Engineering Activity Dashboard
  ────────────────────────

  Repositories     2
  Total Commits    145
  Stars            2
  Streak           12 days

  Top Languages:
  ▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░  Python (65%)
  ▓▓▓▓▓▓▓░░░░░░░░░░░░░  Jupyter (35%)

  → github.com/badrisatyam1-ctrl`,

  leetcode: `Problem Solving Index
  ────────────────────────

  Total Solved     86
  Easy             47 / 830
  Medium           36 / 1,740
  Hard             3  / 760

  Streak           15 days
  Global Ranking   1,726,435

  → leetcode.com/u/Badri1888`,

  resume: `BADRI VISHAL PANDEY
  ════════════════════════════════════════

  EDUCATION
  ──────────
  B.Tech in Electronics & Communication Engineering
  Galgotias College of Engineering and Technology
  Greater Noida · 2024 - 2028

  SKILLS
  ──────
  Languages:   Python, C/C++
  AI/ML:       TensorFlow, scikit-learn, Deep Learning
  Embedded:    Arduino, ESP32, Sensors, Microprocessors

  PROJECTS
  ──────────
  • Semiconductor Wafer Defect Classification System
    ML pipeline for automated defect detection in semiconductor manufacturing
  • Smart Helmet — Embedded Safety Intelligence System
    Real-time accident prevention with sensor fusion and emergency communication
  • Drone System — Autonomous Aerial Systems Experiment
    PID-controlled flight with GPS navigation and telemetry

  CERTIFICATIONS
  ──────────────
  • ChatGPT for SEO and Content
  • Generative AI Studio (Google Cloud)
  • Trust and Security with Google Cloud
  • Google Cloud Professional Cloud Architect
  • Skills Boost Arcade Trivia

  HACKATHONS
  ──────────
  • Voyager Blitz HackIndia Spark-4 — Finalist
  • HackDays GCET — Team Tensor1888

  CONTACT
  ────────
  Email:    badrisatyam1@gmail.com
  GitHub:   github.com/badrisatyam1-ctrl
  LinkedIn: linkedin.com/in/badri-vishal-pandey-0a7913324
  LeetCode: leetcode.com/u/Badri1888`,

  certifications: `Certifications
  ────────────────────────

  ◆  ChatGPT for SEO and Content
     Great Learning Academy

  ◆  Introduction to Generative AI Studio
     Google Cloud

  ◆  Trust and Security with Google Cloud
     Google Cloud

  ◆  Google Cloud Professional Cloud Architect
     Google Cloud

  ◆  Skills Boost Arcade Trivia
     Google Cloud`,

  hackathons: `Hackathon Experiences
  ────────────────────────

  ◆  Voyager Blitz HackIndia Spark-4
     Achievement: Finalist
     India's largest Web3 & AI hackathon series

  ◆  HackDays GCET
     Team: Tensor1888
     College-level engineering hackathon`,

  vision: `Engineering Philosophy
  ────────────────────────

  "Build systems, not features."

  I believe in understanding problems deeply
  before writing a single line of code.

  The best technology is invisible — it works
  so well that people forget it exists.

  Every system I build follows three principles:
  1. Solve a real problem
  2. Design for the next decade
  3. Ship something that matters

  Current trajectory:
  → AI/ML systems for real-world applications
  → Embedded intelligence at the edge
  → Products that bridge hardware and software`,

  contact: `Contact
  ────────────────────────

  Email      badrisatyam1@gmail.com
  GitHub     github.com/badrisatyam1-ctrl
  LinkedIn   linkedin.com/in/badri-vishal-pandey-0a7913324
  LeetCode   leetcode.com/u/Badri1888`,
};

/**
 * Process a terminal command and return the output string.
 */
export function processCommand(cmd: string): string {
  const trimmed = cmd.trim().toLowerCase();

  if (trimmed in COMMANDS) {
    return COMMANDS[trimmed];
  }

  // Easter eggs
  switch (trimmed) {
    case "sudo":
      return "Nice try. No root access here.";
    case "sudo su":
      return "Permission denied. This isn't your server.";
    case "rm -rf /":
    case "rm -rf":
      return "I appreciate the chaos, but no.";
    case "ls":
      return "projects/  notes/  lab/  about.md  resume.pdf  .secrets/";
    case "cd .secrets":
      return "There are no secrets here. Just hard work.";
    case "pwd":
      return "/home/badri/portfolio";
    case "whoami":
      return "badri";
    case "date":
      return new Date().toLocaleString();
    case "uptime":
      return "System has been running since 2004. Still going strong.";
    case "neofetch":
      return `  ╔══════════════╗
  ║   BADRI OS   ║
  ╚══════════════╝
  OS:      Portfolio v1.0
  Host:    Next.js 15
  Kernel:  React 19
  Shell:   BADRI TERMINAL
  Theme:   Cinematic Dark
  Accent:  Cyan (#00E5FF)`;
    case "ping google.com":
      return "64 bytes from google.com: time=0ms (you're already connected)";
    case "exit":
      return "You can leave, but the code stays with you.";
    case "hello":
    case "hi":
      return "Hey! 👋 Type 'help' to see what I can do.";
    case "matrix":
      return "Wake up, Badri... The Matrix has you...";
    default:
      if (trimmed.startsWith("echo ")) {
        return trimmed.slice(5);
      }
      return `Command not found: ${trimmed}. Type "help" for available commands.`;
  }
}
