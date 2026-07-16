export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  mediumUrl: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "llms-101",
    title: "LLMs 101: What They Are, What They Are Not",
    excerpt: "An introductory exploration of Large Language Models that clarifies common misconceptions — LLMs predict the next token rather than truly understanding language.",
    mediumUrl: "https://medium.com/@dixitkumar300/llms-101-what-they-are-what-they-are-not-f4099b34af1d?sharedUserId=dixitkumar300",
    date: "Jan 2026",
    readTime: "2 min read",
    tags: ["LLMs", "Generative AI"],
  },
  {
    id: "rapido-otp",
    title: "Why Rapido Uses the Same OTP While Uber and Ola Don't",
    excerpt: "How ride-hailing platforms employ different OTP strategies — reusable account-level PINs versus dynamic ride-scoped OTPs — and the engineering trade-offs behind each.",
    mediumUrl: "https://medium.com/@dixitkumar300/why-rapido-uses-the-same-otp-while-uber-and-ola-dont-a-backend-engineering-perspective-7bf686de1486?sharedUserId=dixitkumar300",
    date: "May 2026",
    readTime: "4 min read",
    tags: ["System Design", "Backend"],
  },
  {
    id: "auth-vs-authz",
    title: "Authentication vs Authorization",
    excerpt: "Two foundational security concepts answer critical questions: “Who are you?” and “What are you allowed to do?” — how authentication verifies identity while authorization controls access.",
    mediumUrl: "https://medium.com/@dixitkumar300/authentication-vs-authorization-understanding-the-two-pillars-of-secure-backend-systems-04277be2e11d?sharedUserId=dixitkumar300",
    date: "May 2026",
    readTime: "2 min read",
    tags: ["Security", "Backend"],
  },
  {
    id: "rbac-vs-abac",
    title: "RBAC vs ABAC: Why Simple Permission Systems Break as Products Scale",
    excerpt: "As products grow, permissions become one of the hardest backend engineering problems to manage — how authorization models evolve from role-based to attribute-based approaches.",
    mediumUrl: "https://medium.com/@dixitkumar300/rbac-vs-abac-why-simple-permission-systems-break-as-products-scale-e9fc48283557?sharedUserId=dixitkumar300",
    date: "May 2026",
    readTime: "3 min read",
    tags: ["Authorization", "System Design"],
  },
];
