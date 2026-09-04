export const profile = {
  name: "Rohit Deogharkar",
  role: "Full Stack Developer",
  tagline: "Full Stack Developer building fast, reliable web applications.",
  roles: [
    "I turn slow APIs into fast ones.",
    "Full Stack Developer, MERN specialist.",
    "I've shipped 70+ features to production.",
    "Currently debugging something at 2 AM.",
  ],
  summary:
    "I like the unglamorous parts of the job — tracing a slow query back to its root cause, untangling a flaky production bug, shaving 80% off an API's response time just because it bothered me. Over the last 1.5 years I've shipped 70+ features on a SaaS platform used by 100+ companies, mostly living in React, Node, and one too many Redis dashboards.",
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
      "Maintained and enhanced backend services for a Dialer SaaS platform serving 100+ client organizations, supporting 30+ microservices and contributing to production releases and feature deployments.",
      "Diagnosed and resolved L3 production issues, ensuring application stability and reducing downtime.",
      "Delivered client-specific customizations based on business requirements within the customer delivery team.",
      "Delivered 70+ change requests and development tasks across backend services, reporting modules, and platform integrations, including feature enhancements, production fixes, and performance improvements.",
      "Reduced API response time by approximately 60-80% by optimizing SQL query execution and implementing Redis pipelining, resulting in faster data retrieval and improved user experience.",
      "Built and enhanced an automated report scheduling module supporting client organizations and executing 50+ scheduled report jobs monthly, improving reporting efficiency and reducing manual intervention.",
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
