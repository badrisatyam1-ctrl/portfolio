import type {
  Project,
  Skill,
  Certification,
  Hackathon,
  ArsenalItem,
  Note,
  CurrentFocus,
  GitHubData,
  LeetCodeData,
  NavItem,
  SocialLink,
} from "@/types";

// =============================================
// PERSONAL
// =============================================

export const PERSONAL = {
  name: "Badri Vishal Pandey",
  firstName: "Badri",
  tagline:
    "Turning logic into intelligent systems and bold ideas into shipped products.",
  email: "badrisatyam1@gmail.com",
  github: "https://github.com/badrisatyam1-ctrl",
  githubUsername: "badrisatyam1-ctrl",
  leetcode: "https://leetcode.com/u/Badri1888/",
  leetcodeUsername: "Badri1888",
  linkedin: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324",
  college: "Galgotias College of Engineering and Technology",
  location: "Greater Noida, India",
  graduation: "2028",
  degree: "B.Tech in Electronics & Communication Engineering",
} as const;

// =============================================
// NAVIGATION
// =============================================

export const NAV_ITEMS: NavItem[] = [
  { label: "projects", href: "/projects" },
  { label: "arsenal", href: "/arsenal" },
  { label: "notes", href: "/notes" },
  { label: "about", href: "/about" },
  { label: "terminal", href: "/terminal" },
  { label: "now", href: "/now" },
];

// =============================================
// FOCUS AREAS (Hero)
// =============================================

export const FOCUS_AREAS = [
  "AI/ML",
  "Embedded Systems",
  "Electronics",
  "Problem Solving",
  "Innovation",
] as const;

// =============================================
// PROJECTS
// =============================================

export const PROJECTS: Project[] = [
  {
    id: "wafer-defect",
    index: "01",
    title: "Semiconductor Wafer Defect Classification System",
    subtitle: "Deep Learning for Manufacturing Quality Control",
    description:
      "Semiconductor wafers are circular silicon disks on which hundreds of chips are etched. Defects such as rings, scratches, and clusters reduce manufacturing yield. This project automates macro-level defect classification using deep learning and computer vision.",
    technologies: [
      "Python",
      "TensorFlow",
      "scikit-learn",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "OpenCV",
    ],
    githubUrl:
      "https://github.com/badrisatyam1-ctrl/wafer-defect-classification",
    sections: [
      {
        title: "Dataset Analysis",
        content:
          "Analyzed the WM-811K wafer map dataset containing over 811,000 wafer maps with labeled defect patterns. Performed exploratory data analysis to understand class distribution, defect frequency, and spatial feature patterns across wafer surfaces.",
      },
      {
        title: "AI Pipeline",
        content:
          "Built an end-to-end classification pipeline: data ingestion → preprocessing → feature extraction → model training → evaluation. Used transfer learning with pre-trained CNN architectures adapted for wafer map classification tasks.",
      },
      {
        title: "Defect Classification",
        content:
          "Classified wafers into defect categories including edge, center, random, scratch, and ring patterns. Implemented multi-class classification with balanced sampling strategies to handle severe class imbalance in the dataset.",
      },
      {
        title: "Training Process",
        content:
          "Trained models using cross-validation with hyperparameter tuning via grid search. Tracked loss curves, accuracy metrics, and confusion matrices throughout training. Applied data augmentation to improve model generalization.",
      },
      {
        title: "Results",
        content:
          "Achieved reliable multi-class defect classification with high accuracy across all defect categories. The model demonstrates the viability of ML-based quality control for semiconductor manufacturing environments.",
      },
      {
        title: "Future Improvements",
        content:
          "Edge deployment using TensorFlow Lite for real-time fab integration. Expansion to predict yield rates and optimize manufacturing parameters. Integration with manufacturing execution systems for automated quality gates.",
      },
    ],
  },
  {
    id: "smart-helmet",
    index: "02",
    title: "Smart Helmet",
    subtitle: "Embedded Safety Intelligence System",
    description:
      "An intelligent helmet system that combines embedded sensors with real-time processing to enhance rider safety through accident prevention, impact detection, and automated emergency communication.",
    technologies: [
      "Arduino",
      "ESP32",
      "C/C++",
      "Sensors",
      "GSM Module",
      "GPS",
    ],
    githubUrl: "https://github.com/badrisatyam1-ctrl/Smart-Helmet-System",
    sections: [
      {
        title: "Sensors",
        content:
          "Integrated multiple sensors: accelerometer and gyroscope for impact detection, alcohol sensor (MQ-3) for intoxication detection, IR sensor for helmet wear verification, and GPS module for real-time location tracking.",
      },
      {
        title: "Embedded Logic",
        content:
          "Designed the core logic on Arduino/ESP32 microcontrollers. Implemented real-time sensor fusion to differentiate between normal riding, rough terrain, and actual accidents using threshold-based and pattern-based algorithms.",
      },
      {
        title: "Accident Prevention",
        content:
          "Built pre-accident warning systems: alcohol detection prevents ignition start, helmet wear detection ensures safety compliance before ride begins, and tilt angle monitoring warns of dangerous riding posture in real-time.",
      },
      {
        title: "Communication System",
        content:
          "Integrated GSM module for automated emergency SMS with GPS coordinates to pre-configured emergency contacts upon accident detection. Includes a manual SOS button for rider-initiated emergency alerts.",
      },
      {
        title: "Safety Features",
        content:
          "Added LED indicators for turn signals, brake light integration, and ambient light detection for automatic headlight control. Designed for minimal power consumption with a rechargeable battery system supporting extended ride durations.",
      },
    ],
  },
  {
    id: "drone-system",
    index: "03",
    title: "Drone System",
    subtitle: "Autonomous Aerial Systems Experiment",
    description:
      "An experimental autonomous drone platform exploring flight control, sensor integration, and embedded intelligence for aerial systems. Built from the ground up to understand UAV fundamentals and autonomous navigation.",
    technologies: [
      "Arduino",
      "C/C++",
      "PID Control",
      "IMU Sensors",
      "RF Communication",
      "PWM",
    ],
    sections: [
      {
        title: "Control Systems",
        content:
          "Implemented PID control loops for stable flight: pitch, roll, and yaw stabilization using gyroscope and accelerometer data. Tuned PID parameters through iterative flight testing for optimal response characteristics and disturbance rejection.",
      },
      {
        title: "Hardware Architecture",
        content:
          "Designed the hardware stack: flight controller based on Arduino/STM32, ESCs for brushless motor control, LiPo power management system, and custom PCB for sensor integration. Optimized weight distribution and center of gravity for flight stability.",
      },
      {
        title: "Communication Systems",
        content:
          "Built RF-based remote control using NRF24L01 modules for low-latency command transmission. Implemented telemetry downlink for real-time flight data monitoring: altitude, orientation, battery voltage, and GPS position.",
      },
      {
        title: "Embedded Intelligence",
        content:
          "Developed autonomous flight modes: altitude hold using barometric pressure sensing, GPS waypoint navigation for pre-planned routes, and return-to-home functionality. Implemented fail-safe protocols for signal loss and low battery scenarios.",
      },
    ],
  },
];

// =============================================
// SKILLS
// =============================================

export const SKILLS: Skill[] = [
  { name: "Python", category: "Languages", level: 90 },
  { name: "C/C++", category: "Languages", level: 85 },
  { name: "TensorFlow", category: "AI & Data", level: 78 },
  { name: "scikit-learn", category: "AI & Data", level: 82 },
  { name: "Deep Learning", category: "AI & Data", level: 75 },
  { name: "Pandas", category: "AI & Data", level: 85 },
  { name: "NumPy", category: "AI & Data", level: 88 },
  { name: "Arduino", category: "Embedded", level: 88 },
  { name: "ESP32", category: "Embedded", level: 82 },
  { name: "Sensors", category: "Embedded", level: 85 },
  { name: "Microprocessors", category: "Embedded", level: 78 },
  { name: "Circuit Design", category: "Embedded", level: 75 },
  { name: "Data Structures", category: "Problem Solving", level: 82 },
  { name: "Algorithms", category: "Problem Solving", level: 80 },
];

export const SKILL_CATEGORIES = [
  "Languages",
  "AI & Data",
  "Embedded",
  "Problem Solving",
] as const;

// =============================================
// CERTIFICATIONS
// =============================================

export const CERTIFICATIONS: Certification[] = [
  {
    id: "chatgpt-seo",
    title: "ChatGPT for SEO and Content",
    issuer: "Great Learning Academy",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/certifications/",
  },
  {
    id: "gen-ai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/certifications/",
  },
  {
    id: "trust-security",
    title: "Trust and Security with Google Cloud",
    issuer: "Google Cloud",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/certifications/",
  },
  {
    id: "cloud-architect",
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/certifications/",
  },
  {
    id: "skills-boost",
    title: "Skills Boost Arcade Trivia",
    issuer: "Google Cloud",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/certifications/",
  },
];

// =============================================
// HACKATHONS
// =============================================

export const HACKATHONS: Hackathon[] = [
  {
    id: "hackindia",
    name: "Voyager Blitz HackIndia Spark-4",
    achievement: "Finalist",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/projects/",
  },
  {
    id: "hackdays",
    name: "HackDays GCET",
    achievement: "Participant",
    team: "Team Tensor1888",
    link: "https://www.linkedin.com/in/badri-vishal-pandey-0a7913324/details/projects/",
  },
];

// =============================================
// GITHUB FALLBACK DATA
// =============================================

export const GITHUB_DATA: GitHubData = {
  totalRepos: 2,
  totalCommits: 145,
  totalStars: 2,
  contributionStreak: 12,
  languages: [
    { name: "Python", percentage: 65, color: "#3572A5" },
    { name: "Jupyter Notebook", percentage: 35, color: "#DA5B0B" },
  ],
  repos: [
    {
      name: "wafer-defect-classification",
      description: "Wafer defect classification using machine learning",
      url: "https://github.com/badrisatyam1-ctrl/wafer-defect-classification",
      language: "Python",
      languageColor: "#3572A5",
      stars: 2,
      forks: 0,
    },
    {
      name: "badrisatyam1-ctrl",
      description: "GitHub Profile README",
      url: "https://github.com/badrisatyam1-ctrl/badrisatyam1-ctrl",
      language: "Markdown",
      languageColor: "#083fa1",
      stars: 0,
      forks: 0,
    },
  ],
};

// =============================================
// LEETCODE FALLBACK DATA
// =============================================

export const LEETCODE_DATA: LeetCodeData = {
  totalSolved: 87,
  easySolved: 47,
  mediumSolved: 37,
  hardSolved: 3,
  totalEasy: 830,
  totalMedium: 1740,
  totalHard: 760,
  ranking: 1726435,
  streak: 107,
};

// =============================================
// CURRENT FOCUS
// =============================================

export const CURRENT_FOCUS: CurrentFocus[] = [
  {
    topic: "Deep Learning",
    description: "Neural networks, CNNs, transformers",
    icon: "🧠",
  },
  {
    topic: "AI/ML",
    description: "Model training, data pipelines, MLOps",
    icon: "🤖",
  },
  {
    topic: "Embedded Systems",
    description: "Microcontroller programming, IoT protocols",
    icon: "⚡",
  },
  {
    topic: "Arduino",
    description: "Sensor integration, actuator control",
    icon: "🔧",
  },
  {
    topic: "Sensors",
    description: "Data acquisition, calibration, fusion",
    icon: "📡",
  },
  {
    topic: "Microprocessors",
    description: "ARM architecture, register-level programming",
    icon: "💻",
  },
  {
    topic: "DSA in C++",
    description: "Data structures, algorithms, competitive programming",
    icon: "📊",
  },
];

// =============================================
// WORKBENCH ARSENAL
// =============================================

export const WORKBENCH_ARSENAL: ArsenalItem[] = [
  {
    id: "esp32",
    name: "ESP32 / ESP8266",
    category: "Microcontrollers",
    description: "Primary IoT computing platform for connected embedded projects, utilizing integrated Wi-Fi and Bluetooth capabilities.",
    skills: ["C/C++", "FreeRTOS", "Wi-Fi/Bluetooth", "IoT protocols"],
  },
  {
    id: "arduino-mega-uno",
    name: "Arduino Mega & Uno",
    category: "Microcontrollers",
    description: "Rapid prototyping boards for sensor integration, motor control, and basic robotic logic.",
    skills: ["C++", "I2C / SPI", "PWM", "Interrupts"],
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "Microcontrollers",
    description: "Single-board computing for edge AI deployment, ROS integration, and heavier processing tasks.",
    skills: ["Linux", "Python", "Bash", "ROS"],
  },
  {
    id: "lidar-imu",
    name: "LiDAR & IMU Systems",
    category: "Sensors & Actuators",
    description: "Spatial mapping and orientation sensors (MPU6050, RPLIDAR) used in autonomous drone and robotic navigation.",
    skills: ["Sensor Fusion", "Kalman Filters", "UART"],
  },
  {
    id: "env-sensors",
    name: "Environmental Sensors",
    category: "Sensors & Actuators",
    description: "DHT22, BMP180, and MQ-3 alcohol sensors for telemetry, safety verification, and environmental monitoring.",
    skills: ["Analog Reading", "Calibration", "Signal Processing"],
  },
  {
    id: "tf-pytorch",
    name: "TensorFlow & scikit-learn",
    category: "AI & ML Frameworks",
    description: "Core frameworks for building, training, and optimizing deep learning models for computer vision and defect classification.",
    skills: ["CNNs", "Transfer Learning", "Data Augmentation"],
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "AI & ML Frameworks",
    description: "Computer vision library utilized for real-time image processing, edge detection, and visual data preprocessing.",
    skills: ["Image Processing", "Feature Extraction", "Real-time CV"],
  },
  {
    id: "soldering-pcb",
    name: "PCB Design & Soldering",
    category: "Hardware Tools",
    description: "Hands-on electronics assembly, soldering surface-mount components, and custom prototyping.",
    skills: ["Circuit Design", "Soldering", "Multimeter Diagnostics"],
  },
];

// =============================================
// TECHNICAL NOTES
// =============================================

export const NOTES: Note[] = [
  {
    id: "convolution-cnns",
    title: "Understanding Convolution in CNNs",
    date: "2026-05-15",
    excerpt:
      "A deep dive into how convolutional layers extract spatial features from images, from basic kernels to learned filters in deep networks.",
    readingTime: "8 min",
    tags: ["Deep Learning", "Computer Vision"],
  },
  {
    id: "arduino-interrupts",
    title: "Arduino Interrupt Handling",
    date: "2026-04-22",
    excerpt:
      "How to use hardware and software interrupts on Arduino for responsive embedded systems. Covers ISR best practices and debouncing techniques.",
    readingTime: "5 min",
    tags: ["Arduino", "Embedded"],
  },
  {
    id: "binary-search-patterns",
    title: "Binary Search Patterns in DSA",
    date: "2026-04-10",
    excerpt:
      "Common binary search patterns beyond the basic algorithm: search in rotated arrays, finding boundaries, and template-based approaches for competitive programming.",
    readingTime: "6 min",
    tags: ["DSA", "Algorithms"],
  },
  {
    id: "esp32-wifi",
    title: "ESP32 WiFi Configuration Guide",
    date: "2026-03-15",
    excerpt:
      "Configuring ESP32 for WiFi connectivity: station mode, access point mode, and hybrid configurations for IoT project architectures.",
    readingTime: "4 min",
    tags: ["ESP32", "IoT"],
  },
];

// =============================================
// SOCIAL LINKS
// =============================================

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: PERSONAL.github },
  { name: "LinkedIn", url: PERSONAL.linkedin },
  { name: "Email", url: `mailto:${PERSONAL.email}` },
];
