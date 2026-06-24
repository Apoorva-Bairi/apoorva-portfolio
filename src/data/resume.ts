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
  title: "Full Stack Developer | React.js | MERN Stack | UI/UX",
  email: "apoorvappu6534@gmail.com",
  phone: "+91 9390827907",
  location: "Hyderabad, India",
  availability: "Open to Frontend / React Developer roles",
  github: "https://github.com/Apoorva-Bairi",
  linkedin: "https://www.linkedin.com/in/apoorva-bairi-b78893214/",

  bio: "Frontend-focused developer with experience building responsive web applications using React, TypeScript, and the MERN stack. Passionate about creating clean user interfaces and turning ideas into production-ready products.",

  experience: [
    {
      id: 1,
      company: "Fesigns",
      position: "UI/UX & Frontend Designer Intern",
      duration: "Mar 2025 – Sep 2025",
      description:
        "Designed and developed responsive, user-friendly web interfaces with a focus on clean layouts, usability, and smooth user experience.",
      achievements: [
        "Designed and developed a CKD patient portal with structured dietary reminders and stage-based guidance",
        "Built interactive UI overlays for Talenfarm, enhancing user interaction and visual feedback",
        "Developed responsive landing pages for the Vijay Project using modern frontend practices",
        "Designed scalable multi-role dashboard interfaces for Zepul (Admin, Manager, Recruiter)",
        "Redesigned PlentyOdds (sports prediction platform), improving navigation flow and usability",
        "Converted Figma designs into responsive websites using Webflow",
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: 1,
      title: "College Placement Management System",
      image: "/college-placement.png",
      description:
        "A full-stack campus recruitment platform supporting Student, Company, and Admin roles with JWT authentication and real-time notifications.",
      technologies: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Socket.IO",
      ],
      github:
        "https://github.com/Apoorva-Bairi/college-placement-management-system",
      demo: "https://college-placement-frontend.netlify.app/",
      features: [
        "JWT-based authentication and role-based authorization",
        "Real-time notifications with Socket.IO",
        "Admin analytics dashboards",
        "Interview scheduling and application tracking",
        "Responsive UI with React Router",
      ],
    },
    {
      id: 2,
      title: "Recipe Explorer",
      image: "/recipe-app.png",
      description:
        "A recipe discovery platform integrating TheMealDB API for dynamic recipe search and filtering with favorite management.",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "REST APIs",
        "React Router",
      ],
      github: "https://github.com/Apoorva-Bairi/Recipe-App",
      demo: "https://recipeapp-assignment.netlify.app/",
      features: [
        "Category-based recipe filtering",
        "Ingredient-based search",
        "Keyword-based filtering",
        "Favorite management with localStorage",
        "Reusable React components",
      ],
    },
    {
      id: 3,
      title: "Movie App",
      image: "/movie-app.png",
      description:
        "A movie browsing platform with genre-based filtering, top-rated movie sorting, and dark mode support.",
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
      github: "https://github.com/Apoorva-Bairi/movie-app",
      demo: "https://moviereview-assignment.netlify.app/",
      features: [
        "Genre-based filtering",
        "Top-rated movie sorting",
        "Dark mode support",
        "Reusable card-based layouts",
        "Responsive design",
      ],
    },
  ] as Project[],

  skills: [
    {
      category: "Frontend",
      items: [
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
        "React Router",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "CRUD Operations"],
    },
    {
      category: "Database",
      items: ["MongoDB", "MySQL", "MS SQL Server"],
    },
    {
      category: "Tools & DevOps",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Figma",
        "Webflow",
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
      duration: "2019",
      score: "84.4%",
    },
    {
      id: 3,
      institution: "Jawahar Navodaya Vidyalaya, Choppadandi",
      degree: "10th",
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