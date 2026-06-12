export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  year: string;
  tier: 1 | 2 | 3;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "ml" | "systems";
}

export const personalInfo = {
  name: "Dixit Kumar",
  role: "Software Engineer",
  company: "Kimbal",
  location: "Noida, India",
  email: "dixitkumar300@gmail.com",
  phone: "+91 7060137673",
  tagline: "Building reliable systems at scale.",
  subTagline: "From embedded firmware to AI-powered web products.",
  github: "https://github.com/Dixit1010",
  linkedin: "https://www.linkedin.com/in/dixitkum",
  portfolio: "https://portfoliodixitt.netlify.app",
};

export const stats = [
  { value: "900+", label: "DSA Problems Solved" },
  { value: "0.5%", label: "Amazon ML Top Applicants" },
  { value: "10K+", label: "Lines of Code Refactored" },
  { value: "8", label: "Projects Shipped" },
];

export const roles = [
  "MERN Stack Developer",
  "Embedded Systems Engineer",
  "Full Stack Developer",
  "ML Integration Engineer",
  "Open to Opportunities",
];

export const projects: Project[] = [
  {
    id: "travplan",
    title: "TravPlan",
    description: "AI-powered travel planner generating personalized day-by-day itineraries for 50+ destinations in under 30 seconds.",
    longDescription: "AI-powered travel planner generating personalized day-by-day itineraries for 50+ destinations in under 30 seconds.",
    tech: ["React 18", "Vite", "Gemini 2.0", "Firebase", "Tailwind", "Framer Motion"],
    year: "2026",
    tier: 1,
    featured: true,
    category: "web",
  },
  {
    id: "hirexx",
    title: "Hirexx",
    description: "Production-grade job portal with RBAC, real-time search, Clerk OAuth, and 10+ type-safe REST endpoints.",
    longDescription: "Production-grade job portal with RBAC, real-time search, Clerk OAuth, and 10+ type-safe REST endpoints.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Clerk", "TanStack Query", "Zod"],
    year: "2026",
    tier: 1,
    featured: true,
    category: "web",
  },
  {
    id: "chatify",
    title: "Chatify",
    description: "Real-time chat with 1:1 and group messaging, typing indicators, online presence, and push notifications.",
    longDescription: "Real-time chat with 1:1 and group messaging, typing indicators, online presence, and push notifications.",
    tech: ["MERN", "Socket.IO", "Tailwind", "JWT"],
    year: "2025",
    tier: 1,
    featured: true,
    category: "web",
  },
  {
    id: "tradebook",
    title: "TradeBook",
    description: "Stock trading journal with live market data integration.",
    longDescription: "Stock trading journal with live market data integration.",
    tech: ["Next.js", "Market APIs"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "web",
  },
  {
    id: "plant-ai",
    title: "Plant AI",
    description: "CNN image classifier with 98% accuracy across 38 plant disease classes.",
    longDescription: "CNN image classifier with 98% accuracy across 38 plant disease classes.",
    tech: ["PyTorch", "CNN", "Transfer Learning", "Python"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "ml",
  },
  {
    id: "job-zee",
    title: "JOB-ZEE",
    description: "Full-stack MERN job portal — the predecessor to Hirexx.",
    longDescription: "Full-stack MERN job portal — the predecessor to Hirexx.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    year: "2024",
    tier: 2,
    featured: false,
    category: "web",
  },
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    description: "Interactive sorting algorithm visualizer.",
    longDescription: "Interactive sorting algorithm visualizer.",
    tech: ["JavaScript", "HTML Canvas"],
    year: "2023",
    tier: 3,
    featured: false,
    category: "web",
  },
  {
    id: "car-price-prediction",
    title: "Car Price Prediction",
    description: "ML regression model for used car price prediction.",
    longDescription: "ML regression model for used car price prediction.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    year: "2023",
    tier: 3,
    featured: false,
    category: "ml",
  },
];

export const experience = [
  {
    company: "Kimbal",
    role: "Software Developer",
    period: "Jan 2025 – Present",
    location: "Noida",
    type: "full-time",
    highlights: [
      "Refactored 10,000+ lines of embedded C middleware for RL78/I1C smart meters, reducing memory footprint by 25% and raising packet reliability from 60% to 95%.",
      "Built Windows desktop automation framework using C# .NET, WPF, and MVVM for RF/4G module testing; automated 8 critical test sequences.",
      "Reduced firmware variants from 20+ to a single binary via production configuration system for smart meters.",
      "Python CLI tools and bash scripts reduced manual QA effort by 66% and boosted testing throughput by 3x.",
      "Engineered real-time optical pulse decoding system integrated with internal ML labeling pipelines, increasing data processing throughput by 2x.",
    ],
  },
  {
    company: "Amazon ML Summer School",
    role: "Mentee, Applied ML Program",
    period: "Jun 2024 – Aug 2024",
    location: "Remote",
    type: "program",
    highlights: [
      "Selected among the top 0.5% of 80,000+ applicants.",
      "Built end-to-end ML pipelines using Python, Scikit-learn, Pandas, Flask APIs.",
      "Deployed ML models on AWS SageMaker for real-time predictions.",
    ],
  },
];

export const skills = {
  web: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Framer Motion"],
  systems: ["C", "C++", "C#", ".NET", "WPF", "MVVM", "RTOS", "UART", "RL78"],
  ml: ["Python", "PyTorch", "Scikit-learn", "Flask", "AWS SageMaker", "Pandas"],
  tools: ["Git", "Postman", "Vercel", "Render", "Cloudinary", "MongoDB Atlas"],
};

export const education = {
  institution: "Netaji Subhas University of Technology (NSUT)",
  degree: "B.Tech in Electronics and Communication Engineering",
  period: "Aug 2021 – May 2025",
  location: "Delhi, India",
  cgpa: "7.3/10",
  coursework: ["OS", "DBMS", "CN", "Software Engineering", "Algorithms"],
};
