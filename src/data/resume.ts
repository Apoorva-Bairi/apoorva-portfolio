export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  features: string[];
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  score: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const resumeData = {
  name: "Apoorva Bairi",
  title: "Full Stack Developer | MERN Stack Developer | React.js | Node.js",
  email: "apoorvappu6534@gmail.com",
  phone: "+91 9390827907",
  location: "Hyderabad, India",
  availability: "Open to Frontend / React / MERN Stack Developer roles",
  github: "https://github.com/Apoorva-Bairi",
  linkedin: "https://www.linkedin.com/in/apoorva-bairi-b78893214/",

  bio: "Full Stack Developer focused on building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in developing responsive user interfaces, secure REST APIs, authentication systems, dashboards, and production-ready MERN stack applications.",

  experience: [
    {
      id: 1,
      company: "Fesigns",
      position: "UI/UX & Frontend Designer Intern",
      duration: "Mar 2025 – Sep 2025",
      description:
        "Worked on responsive frontend interfaces, dashboards, landing pages, and Webflow-based websites with a focus on usability and clean design.",
      achievements: [
        "Designed and developed a CKD patient portal with stage-based dietary tracking and reminder systems.",
        "Built responsive landing pages and interactive UI overlays improving engagement and usability.",
        "Built scalable dashboards for Admin, Manager, and Recruiter workflows.",
        "Converted Figma designs into responsive Webflow websites ensuring cross-device compatibility.",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: 1,
      title: "College Placement Management System",
      image: "/college-placement.png",
      description:
        "A full-stack campus recruitment platform supporting Student, Company, and Admin roles with authentication, dashboards, real-time notifications, and placement workflows.",
      technologies: [
        "React.js",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
      ],
      github:
        "https://github.com/Apoorva-Bairi/college-placement-management-system",
      demo: "https://college-placement-frontend.netlify.app/",
      features: [
        "Developed a full-stack campus recruitment platform supporting Student, Company, and Admin roles.",
        "Implemented JWT authentication, role-based authorization, and real-time notifications.",
        "Built admin dashboards for interview scheduling, analytics, and application tracking.",
      ],
    },
    {
      id: 2,
      title: "FilmFinder",
      image: "/filmfinder.png",
      description:
        "A full-stack movie discovery platform allowing users to explore movies, add reviews, rate films, and manage personalized watchlists.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/Apoorva-Bairi/FilmFinder-MERN",
      demo: "https://filmfinder-mern.netlify.app/",
      features: [
        "Built a full-stack movie discovery platform allowing users to explore movies, add reviews, rate films, and manage personalized watchlists.",
        "Implemented JWT authentication, secure REST APIs, and CRUD operations for movie and user management.",
        "Developed responsive UI components with filtering, search functionality, and optimized performance for better user experience.",
      ],
    },
    {
      id: 3,
      title: "Tic Tac Toe MERN",
      image: "/tic-tac-toe.png",
      description:
        "A full-stack Tic Tac Toe application with authentication, game history, leaderboard, AI difficulty levels, sounds, and responsive gameplay UI.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      github: "https://github.com/Apoorva-Bairi/tic-tac-toe-mern",
      demo: "https://tic-tac-toe-mern.netlify.app/",
      features: [
        "Built a full-stack Tic Tac Toe application with authentication, game history, and leaderboard.",
        "Implemented Player vs Player and Player vs Computer modes with AI difficulty levels.",
        "Added sound effects, confetti animations, dashboard analytics, and responsive UI.",
      ],
    },
  ] as Project[],

  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Router",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "MS SQL"],
    },
    {
      category: "Authentication & APIs",
      items: ["JWT", "REST APIs", "CRUD Operations"],
    },
    {
      category: "Tools & Deployment",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Figma",
        "Netlify",
        "Render",
      ],
    },
  ] as Skill[],

  education: [
    {
      id: 1,
      institution: "Malla Reddy Engineering College, Hyderabad",
      degree: "Bachelor of Technology (Electronics & Communication Engineering)",
      duration: "2019 – 2023",
      score: "CGPA: 8.72",
    },
    {
      id: 2,
      institution: "Jawahar Navodaya Vidyalaya, Choppadandi",
      degree: "Intermediate (MPC)",
      duration: "2018 – 2019",
      score: "84.4%",
    },
    {
      id: 3,
      institution: "Jawahar Navodaya Vidyalaya, Choppadandi",
      degree: "10th CBSE",
      duration: "2017",
      score: "CGPA: 9.4",
    },
  ] as Education[],

  certifications: [
    "GUVI MERN Stack Development Program",
    "Java (Beginner) – HackerRank",
    "SQL (Beginner) – HackerRank",
  ],
};