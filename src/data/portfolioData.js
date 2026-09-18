export const personalInfo = {
  name: "Venkata Surya Kiran Maddipudi",
  shortName: "Surya Kiran",
  title: "Full Stack Developer | Java & MERN Specialist",
  tagline: "Building scalable web platforms, real-time applications, and AI-driven solutions.",
  email: "suryamaddipudi10@gmail.com",
  phone: "+91 8919673278",
  location: "Andhra Pradesh, India",
  github: "https://github.com/Surya-Kiran22",
  linkedin: "https://linkedin.com/in/maddipudi-venkata-surya-kiran-2ba6842ba",
  objective: "Aspiring Computer Science and Engineering student with expertise in C, Java, React, Node.js, and Database Management. Passionate about designing robust real-world web systems and cloud deployment through hands-on full-stack development.",
  stats: [
    { label: "Projects Completed", value: "14+" },
    { label: "Internships", value: "2" },
    { label: "Academic CGPA", value: "8.48" },
    { label: "Hackathon Awards", value: "2 Wins" }
  ]
};

export const skillsData = {
  programming: [
    { name: "Java", level: 90, icon: "Code2" },
    { name: "C", level: 85, icon: "Cpu" },
    { name: "Python", level: 82, icon: "Terminal" },
    { name: "JavaScript (ES6+)", level: 92, icon: "FileCode" },
    { name: "TypeScript", level: 80, icon: "FileJson" },
    { name: "Dart", level: 75, icon: "Smartphone" }
  ],
  frontend: [
    { name: "React.js (Vite)", level: 92, icon: "Atom" },
    { name: "Tailwind CSS", level: 90, icon: "Palette" },
    { name: "HTML5 / CSS3", level: 95, icon: "Layout" },
    { name: "Flutter", level: 75, icon: "Smartphone" },
    { name: "Redux / State Mgmt", level: 82, icon: "Boxes" }
  ],
  backend: [
    { name: "Node.js", level: 88, icon: "Server" },
    { name: "Express.js", level: 90, icon: "Network" },
    { name: "Spring Boot", level: 84, icon: "ShieldCheck" },
    { name: "RESTful APIs", level: 92, icon: "Webhook" },
    { name: "WebSockets / Socket.io", level: 86, icon: "Zap" }
  ],
  databases: [
    { name: "PostgreSQL", level: 85, icon: "Database" },
    { name: "MongoDB", level: 88, icon: "Leaf" },
    { name: "Oracle SQL", level: 82, icon: "HardDrive" }
  ],
  toolsCloud: [
    { name: "AWS (S3 & Cloud)", level: 80, icon: "Cloud" },
    { name: "GitHub Actions / CI-CD", level: 82, icon: "GitBranch" },
    { name: "Git & GitHub", level: 90, icon: "GitCommit" },
    { name: "Render & Vercel", level: 88, icon: "Globe" },
    { name: "OpenAI GPT API", level: 85, icon: "Bot" },
    { name: "Google Maps API", level: 84, icon: "MapPin" }
  ]
};

export const experiences = [
  {
    id: "infosys",
    role: "Java Full Stack Developer Intern",
    company: "Infosys",
    period: "Ongoing (2025 - Present)",
    badge: "Enterprise Industry Internship",
    description: "Developing ShipTrack Pro – Shipment Tracking & Delivery Visibility Platform using Java Spring Boot, React, PostgreSQL, and Google Maps API.",
    achievements: [
      "Building real-time shipment tracking, live delivery monitoring, and ETA prediction modules integrated with Google Maps API and PostgreSQL.",
      "Designing proof-of-delivery workflows, analytics dashboards, and role-based access control (RBAC) for customers, business clients, and administrators.",
      "Architected mid-transit re-routing with historic audit trails for compliance and supply chain analytics."
    ],
    skills: ["Java", "Spring Boot", "React", "PostgreSQL", "WebSockets", "Google Maps API"]
  },
  {
    id: "smartbridge",
    role: "Full Stack Developer Intern (MERN)",
    company: "SmartBridge (AICTE Collaboration)",
    period: "May 2025 – July 2025",
    badge: "AICTE Certified Internship",
    description: "Completed an intensive 2-month internship focused on end-to-end MERN stack web application development.",
    achievements: [
      "Built responsive React.js interfaces with modular component structures and state management.",
      "Implemented backend RESTful microservices using Node.js and Express.js with MongoDB database persistence.",
      "Integrated secure authentication mechanisms and handled API performance optimization."
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"]
  }
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lakireddy Bali Reddy College of Engineering (LBRCE)",
    period: "2023 - Present",
    score: "CGPA: 8.48 / 10",
    details: "Focusing on Data Structures, Algorithms, Full-Stack Software Engineering, Cloud Systems, and Database Management."
  },
  {
    degree: "Intermediate [MPC - Maths, Physics, Chemistry]",
    institution: "Tirumala Junior College",
    period: "2021 - 2023",
    score: "Percentage: 96.7%",
    details: "State Board higher secondary education with distinction in Mathematics and Physical Sciences."
  },
  {
    degree: "Secondary School Education (SSC)",
    institution: "Tirumala E.M High School",
    period: "2020 - 2021",
    score: "Percentage: 100%",
    details: "Completed secondary education with perfect academic record."
  }
];

export const projects = [
  {
    id: "shiptrack-pro",
    title: "ShipTrack Pro – Real-Time Logistics Platform",
    category: "Full-Stack",
    status: "Ongoing",
    featured: true,
    subtitle: "Shipment Tracking & Delivery Visibility Platform",
    tech: ["Spring Boot", "React (Vite)", "PostgreSQL", "WebSockets", "Google Maps API"],
    description: "Real-time logistics platform using Spring Boot and PostgreSQL for backend and React (Vite) for frontend, integrated with Google Maps Directions API for traffic-aware route optimization.",
    bullets: [
      "Live GPS tracking via WebSockets (STOMP/SockJS) with dynamic ETA recalculation on location updates.",
      "Designed mid-transit re-routing with full historic audit trail, preserving previous routes for compliance.",
      "Built admin analytics dashboard reporting route distance, ETA accuracy, and best/worst performing routes.",
      "Implemented proof-of-delivery workflows with digital signature and photo upload."
    ],
    github: "https://github.com/Surya-Kiran22/ShipTrack-Pro",
    demo: null
  },
  {
    id: "placement-portal",
    title: "Placement Preparation Portal",
    category: "Full-Stack",
    status: "Completed",
    featured: true,
    subtitle: "MERN Stack, AWS S3 & AI Interview System",
    tech: ["React 18", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AWS S3", "AI"],
    description: "Full-stack placement-training platform for students and admins with JWT authentication and role-based access control.",
    bullets: [
      "Modules for company listings, online aptitude/technical tests with auto-scored results.",
      "Student profile management with AWS S3 document and resume uploads.",
      "Integrated AI-based mock interview module, resume analyzer, and in-browser code compiler for practice."
    ],
    github: "https://github.com/Surya-Kiran22/Placement-Preparation-Portal",
    demo: null
  },
  {
    id: "ai-wheelchair",
    title: "AI Head Gesture Controlled Robot Wheelchair",
    category: "AI & IoT",
    status: "Ongoing",
    featured: true,
    subtitle: "Computer Vision & IoT Hands-Free Navigation",
    tech: ["Python", "OpenCV", "AI / Computer Vision", "Bluetooth", "IoT"],
    description: "AI-based head gesture-controlled robot wheelchair using computer vision for real-time gesture recognition and hands-free navigation.",
    bullets: [
      "Real-time head pose and gesture recognition using OpenCV and deep learning models.",
      "Wireless Bluetooth communication, obstacle detection sensors, and smooth movement control for user safety."
    ],
    github: "https://github.com/Surya-Kiran22/AI-Gesture-Wheelchair",
    demo: null
  },
  {
    id: "syncspaces",
    title: "SyncSpaces – Real-Time Collaboration Tool",
    category: "Real-Time",
    status: "Completed",
    featured: true,
    subtitle: "Shared Whiteboard & Multi-User Document Co-Editing",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebSockets"],
    description: "Real-time collaboration platform enabling multiple users to co-edit shared documents and an interactive whiteboard simultaneously.",
    bullets: [
      "Live bi-directional synchronization across client sessions using Socket.io.",
      "MongoDB document persistence and custom session room management.",
      "Automated test coverage for concurrent editing flows."
    ],
    github: "https://github.com/Surya-Kiran22/SyncSpaces",
    demo: null
  },
  {
    id: "smart-interview",
    title: "Smart Interview – AI Mock Interview Platform",
    category: "AI & IoT",
    status: "Completed",
    featured: true,
    subtitle: "Voice & Text AI Technical Interviewer",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI GPT API"],
    description: "AI-powered mock interview practice tool combining text and voice-based interaction for candidates.",
    bullets: [
      "Integrated OpenAI GPT API to generate dynamic technical interview questions tailored to candidate roles.",
      "Evaluates candidate answers in real time providing actionable feedback and scoring."
    ],
    github: "https://github.com/Surya-Kiran22/Smart-Interview-AI",
    demo: null
  },
  {
    id: "forma-ai",
    title: "Forma AI – AI-Powered Form Builder",
    category: "AI & IoT",
    status: "Completed",
    featured: false,
    subtitle: "Automated Form Generation from Uploaded Documents",
    tech: ["MERN Stack", "OpenAI GPT API", "GitHub Actions"],
    description: "Form builder that auto-generates dynamic form fields by parsing uploaded documents using OpenAI API.",
    bullets: [
      "Automatic schema generation and form field mapping from raw text/PDF documents.",
      "Configured CI/CD deployment pipeline with GitHub Actions and environment secret security."
    ],
    github: "https://github.com/Surya-Kiran22/Forma-AI",
    demo: null
  },
  {
    id: "ebook-store",
    title: "E-Book Store Application",
    category: "Full-Stack",
    status: "Completed",
    featured: false,
    subtitle: "Role-Based MERN E-Commerce Store",
    tech: ["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT"],
    description: "Full-stack e-book store with JWT-based authentication and role-based access control for users and admins.",
    bullets: [
      "Responsive UI featuring book search, categorization, shopping cart, and wishlist.",
      "Admin CRUD capabilities for managing catalog listings backed by Node/Express/MongoDB."
    ],
    github: "https://github.com/Surya-Kiran22/E-Book-Store",
    demo: null
  },
  {
    id: "househunt",
    title: "HouseHunt – Rental Home Finder",
    category: "Full-Stack",
    status: "Completed",
    featured: false,
    subtitle: "Multi-Role Property Rental Portal",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT Auth"],
    description: "Role-based backend (Admin, Owner, User) for a rental property platform with separate controllers and routes for each role.",
    bullets: [
      "Designed schemas for users, properties, and bookings with custom auth middleware.",
      "Property management for owners and instant search & booking for users."
    ],
    github: "https://github.com/Surya-Kiran22/HouseHunt",
    demo: null
  },
  {
    id: "dj-promix",
    title: "DJ Promix – Mobile DJ Mixing App",
    category: "Mobile",
    status: "Completed",
    featured: false,
    subtitle: "Cross-Platform Flutter Audio Mixer",
    tech: ["Flutter", "Dart", "REST API", "Audio Processing"],
    description: "Cross-platform (Android/iOS) DJ mixing app in Flutter combining live audio mixing, sound effects, and BPM sync.",
    bullets: [
      "Responsive UI with custom dark/light theme options.",
      "Integrated custom REST API backend for user track storage and playlist management."
    ],
    github: "https://github.com/Surya-Kiran22/DJ-Promix",
    demo: null
  },
  {
    id: "student-attendance",
    title: "Student Attendance Tracker",
    category: "Utilities",
    status: "Completed",
    featured: false,
    subtitle: "QR Code & Geolocation Verification System",
    tech: ["React", "Node.js", "Express", "MongoDB", "QR Code API"],
    description: "Full-stack attendance tracking system enabling faculty to mark attendance via QR code and geolocation verification.",
    bullets: [
      "Real-time attendance analytics and percentage monitoring reports.",
      "Geolocation verification preventing proxy attendance."
    ],
    github: "https://github.com/Surya-Kiran22/Student-Attendance-Tracker",
    demo: null
  },
  {
    id: "ebulk-certificate",
    title: "Ebulk-Certificate – Bulk Certificate Generator",
    category: "Utilities",
    status: "Completed",
    featured: false,
    subtitle: "Automated Certificate Generation & Email Pipeline",
    tech: ["Node.js", "Python", "SMTP", "Render"],
    description: "Certificate generation tool that auto-generates and emails personalized certificates in bulk via direct SMTP integration.",
    bullets: [
      "Rate-limited batch sending pipeline delivering up to 900 emails per day.",
      "Deployed on Render cloud infrastructure with dedicated build script."
    ],
    github: "https://github.com/Surya-Kiran22/Ebulk-Certificate",
    demo: null
  },
  {
    id: "lbrce-attendance-automation",
    title: "LBRCE ERP Attendance Automation",
    category: "Utilities",
    status: "Completed",
    featured: false,
    subtitle: "Automated ERP Scraper & Telegram Bot Alerts",
    tech: ["Python", "Telegram Bot API", "GitHub Actions"],
    description: "Automated attendance tracking system that retrieves student attendance data from LBRCE ERP and sends Telegram updates.",
    bullets: [
      "Automated scheduled checks using GitHub Actions cron workflow.",
      "Zero manual monitoring with JSON data persistence."
    ],
    github: "https://github.com/Surya-Kiran22/LBRCE-ERP-Attendance-Automation",
    demo: null
  },
  {
    id: "tickets-booking",
    title: "Tickets Booking Frontend System",
    category: "Utilities",
    status: "Completed",
    featured: false,
    subtitle: "Responsive Seat Availability & Reservation UI",
    tech: ["React.js", "JavaScript", "Tailwind CSS"],
    description: "User-focused ticket booking application featuring search, schedule display, passenger form, and seat layout.",
    bullets: [
      "Interactive seat matrix picker and fare management calculator.",
      "Clean user & admin role layout views."
    ],
    github: "https://github.com/Surya-Kiran22/Tickets-Booking",
    demo: null
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Full-Stack",
    status: "Completed",
    featured: false,
    subtitle: "React, Vite, Express & Render Blueprint Deployment",
    tech: ["React 18", "Tailwind CSS", "Express.js", "Vite", "Render Blueprint"],
    description: "Official portfolio website showcasing 14 projects, technical skills, certifications, and experience with zero-config Render blueprint deployment.",
    bullets: [
      "Express backend handling `/api/contact` form submissions.",
      "Render blueprint (`render.yaml`) infrastructure specification."
    ],
    github: "https://github.com/Surya-Kiran22/CERSO-Portfolio",
    demo: null
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    icon: "Cloud",
    description: "Validation of foundational cloud knowledge, AWS services, architecture, security, and cloud pricing models."
  },
  {
    title: "TechA MERN Stack Developer",
    issuer: "Infosys Springboard",
    date: "2024",
    icon: "Code",
    description: "Comprehensive certification covering React, Node.js, Express, MongoDB, and modern full-stack development."
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL (IIT Madras)",
    date: "Certified",
    icon: "Terminal",
    description: "Advanced Python programming, data manipulation, algorithm design, and problem solving."
  },
  {
    title: "LSRW: Advanced Certificate of Profession",
    issuer: "Professional Behavioral Skills Institute",
    date: "Certified",
    icon: "Award",
    description: "Personality development, listening, speaking, reading, writing, and leadership behavioral skills."
  }
];

export const achievements = [
  {
    title: "1st Place Winner - MERN Stack Hackathon",
    prize: "Rs. 3,000/- Cash Prize",
    context: "Collaborated in a competitive team hackathon to design and build an online service appointment booking system in under 24 hours.",
    icon: "Trophy"
  },
  {
    title: "2nd Place Winner - LBRCE MERN Hackathon",
    prize: "Rs. 8,000/- Cash Prize",
    context: "Secured 2nd position in the MERN Stack Hackathon organized by LBRCE, developing the 'Foodie App' full-stack platform.",
    icon: "Medal"
  },
  {
    title: "Central Coordinator - Lakshya 2K24",
    prize: "18th National Level Fest",
    context: "Served as Central Coordinator leading organizing teams for Lakshya 2K24 18th National Level Technical & Cultural Fest.",
    icon: "Users"
  }
];
