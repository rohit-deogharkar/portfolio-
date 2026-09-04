export const profile = {
  name: "Rohit Deogharkar",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer building fast, reliable web applications.",
  roles: [
    "Professional bug detective.",
    "Full Stack Developer, MERN specialist.",
    "I turn slow APIs into fast ones.",
    "Currently debugging something at 2 AM.",
  ],
  summary:
    "Full-stack developer, professional bug detective. I live in React and Node, chase down slow queries for fun, and have a weird soft spot for the unglamorous parts of the job nobody else wants to touch.",
  location: "Jogeshwari (E), Mumbai",
  email: "rohitdeogharkar03@gmail.com",
  phone: "+91 98194 07257",
  github: "https://github.com/rohit-deogharkar",
  linkedin: "https://www.linkedin.com/in/rohit-deogharkar/",
  resumeUrl: "/Rohit-Deogharkar-Resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "BullMQ", "Microservices"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Redis"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Docker", "Postman", "Linux", "Debugging", "Production Support"],
  },
];

export const experience = [
  {
    company: "SlashRTC Software Services",
    role: "Software Developer",
    duration: "Oct 2024 — Jun 2026",
    points: [
      "Maintain backend services for a Dialer SaaS platform used by 100+ client organizations across a sprawling microservices architecture.",
      "Diagnose and resolve production issues fast, and keep shipping — features, fixes, and performance work, sprint after sprint.",
      "Optimized SQL queries and added Redis pipelining to make a sluggish API noticeably faster.",
      "Built an automated report scheduler that quietly does its job every month without anyone thinking about it.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science (Information Technology)",
  school: "Patkar Varde College",
  detail: "CGPA: 9.3",
};

export const projects = [
  {
    title: "Chat Application",
    description:
      "A real-time chat app that doesn't fall over when things get busy. Socket.IO drives the live messaging, typing indicators, and presence — while BullMQ and Redis queue everything behind the scenes so no message gets dropped under load.",
    stack: ["React.js", "Node.js", "Express.js", "Socket.IO", "Redis", "BullMQ", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "MyNotebook",
    description:
      "My take on nailing the fundamentals — a note-taking app with proper JWT auth, clean RESTful APIs, and a UI that stays out of your way. No bloat, just CRUD done right.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "#",
    live: "#",
  },
];
