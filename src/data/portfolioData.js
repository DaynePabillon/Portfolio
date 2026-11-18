export const portfolioData = {
  personal: {
    name: "Dayne B. Pabillon",
    shortName: "Dayne",
    hookHeadline: "Entry-Level Backend Developer specializing in Node.js, PostgreSQL, and AI integration.",
    hookSubheadline: "Information Technology graduate focused on building reliable backend systems, RESTful APIs, and private local LLM pipelines with Ollama. Experienced in relational database design, third-party API synchronization, and building clean Next.js frontends when needed.",
    role: "Entry-Level Backend Developer",
    subRole: "Node.js • Express.js • PostgreSQL • REST APIs • AI Integration",
    location: "Cebu, Philippines",
    email: "daynepabillon331@gmail.com",
    statusText: "Fresh Graduate • Available for Entry-Level Roles",
    
    humanBio: {
      philosophy: "I focus primarily on backend development and intelligent systems. While many developers stick strictly to frontend UI, I enjoy working on the engine behind the application: designing normalized PostgreSQL schemas, architecting clean REST APIs in Node and Express, and setting up private local LLMs with Ollama so patient and user data stays on-device.",
      story: "My background includes a 500-hour remote web development internship for The SSGC Group in Singapore, where I modernized production web code, improved site performance, and handled technical on-page SEO. I bring strong programming fundamentals across JavaScript, Python, and SQL, with the frontend capability to build responsive React and Next.js interfaces whenever a project calls for it.",
      quirks: [
        "Specialized in Node.js, Express, and PostgreSQL relational database design.",
        "Experienced in deploying private, on-device local LLMs with Ollama for zero API cost.",
        "Strong full-stack versatility: can build clean React and Next.js UIs without needing a dedicated frontend person."
      ]
    }
  },

  socials: {
    email: "mailto:daynepabillon331@gmail.com",
    github: "https://github.com/DaynePabillon",
    linkedin: "https://linkedin.com"
  },

  proofMetrics: [
    { label: "Backend Core", value: "Node + SQL", detail: "Express, PostgreSQL, REST APIs" },
    { label: "AI Integration", value: "Local LLM", detail: "Self-hosted Ollama pipeline" },
    { label: "Production Hours", value: "500+", detail: "Singapore remote internship" },
    { label: "Cloud & Verified", value: "3x Certs", detail: "AWS and IBM SkillsBuild" }
  ],

  caseStudies: [
    {
      id: "skyflow",
      number: "01",
      title: "SkyFlow / ScholarFlow v2",
      tagline: "Full-stack project management platform with Express/PostgreSQL backend, Google Workspace sync, and AI insights",
      badge: "Backend & System Integration",
      heroImage: "/projects/skyflow/dashboard-dark.png",
      images: [
        { url: "/projects/skyflow/dashboard-dark.png", caption: "Admin & Team Dashboard: Real-time progress and health metric monitoring" },
        { url: "/projects/skyflow/ai-insights.png", caption: "AI Insights Command Center: Gemini-powered summaries highlighting team progress" },
        { url: "/projects/skyflow/tasks-sheets-sync.png", caption: "Google Sheets Sync: Bi-directional operational workflow and task board" },
        { url: "/projects/skyflow/projects-grid.png", caption: "Workspace Grid: Milestone checkpoints and deadline tracking" },
        { url: "/projects/skyflow/dashboard-light.png", caption: "Adviser Workbench: Student group overview and consultation logs" }
      ],
      par: {
        problem: "Academic project teams and faculty advisers had to manage tasks across disconnected channels: discussions were buried in chat apps, deliverables were scattered in spreadsheets, and advisers had limited visibility into falling-behind student teams until milestone deadlines had already arrived.",
        action: "Architected the backend services using Node.js and Express with a PostgreSQL database schema for multi-tenant team tracking. Integrated Google Workspace APIs for Google Sheets data synchronization and calendar events, and implemented an AI insights feature to summarize team health and highlight project bottlenecks.",
        result: "Provided students and advisers with a centralized hub for project milestones, removed manual spreadsheet updating through Google integration, and enabled faster feedback on project progress."
      },
      statusNote: "Project handover note: Successfully completed core architecture, then passed down to a continuing student group for ongoing development.",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "Google Workspace API", "Gemini AI", "Next.js", "Tailwind CSS"],
      githubUrl: "https://github.com"
    },
    {
      id: "medcare",
      number: "02",
      title: "MedCare Bot (Clinic Assistant)",
      tagline: "Local LLM triage and appointment scheduling pipeline built with Python and Ollama",
      badge: "AI Systems Engineering",
      heroImage: "/projects/medcare/chat-interface.jpg",
      images: [
        { url: "/projects/medcare/chat-interface.jpg", caption: "Chat Assistant: Conversational patient triage and clinic inquiries" },
        { url: "/projects/medcare/booking-form.png", caption: "Quick Booking Form: Doctor recommendation and schedule selection" },
        { url: "/projects/medcare/sidebar-actions.png", caption: "Clinic Hub: Operating hours and conversation history sidebar" }
      ],
      par: {
        problem: "Outpatient clinics frequently handle repetitive inquiries regarding doctor schedules, clinic hours, and standard appointment booking. While commercial cloud APIs exist, self-hosting a local model ensures data stays private on the local machine and avoids external API subscription fees.",
        action: "Built an intelligent clinic assistant utilizing local LLM inference through Ollama. Designed conversational booking workflows to collect patient information, check preferred doctor availability, and provide immediate answers for clinic operating hours.",
        result: "Demonstrated private, on-device conversational handling with zero external API expenses, keeping all dialogue local while streamlining appointment scheduling."
      },
      statusNote: "Local AI showcase: Configured for on-premises Ollama inference to maintain data privacy.",
      technologies: ["Ollama (Local LLM)", "Python", "Streamlit", "Conversational AI", "Healthcare Tech", "State Logic"],
      githubUrl: "https://github.com"
    },
    {
      id: "citu-forums",
      number: "03",
      title: "CIT Forums (University Community Hub)",
      tagline: "Academic discussion platform with relational SQL backend, authentication, and moderation",
      badge: "Relational Database & APIs",
      heroImage: "/projects/citu-forums/forums-home.jpg",
      images: [
        { url: "/projects/citu-forums/forums-home.jpg", caption: "CIT Forums Home: Announcements, Events, and Academic category hubs" },
        { url: "/projects/citu-forums/admin-dashboard.jpg", caption: "CIT-U Administration Dashboard: Forum management, thread moderation, and active statistics" },
        { url: "/projects/citu-forums/academic-threads.jpg", caption: "Academic Discussions & Study Hub: Capstone defense tips, DSA in Java notes, DBMS cheat sheets" },
        { url: "/projects/citu-forums/capstone-thread.jpg", caption: "Capstone Defense Thread: Technical tips, decoupled architecture advice, student comments" },
        { url: "/projects/citu-forums/announcements.jpg", caption: "University Announcements: Official exams, innovation expo, and library upgrade bulletins" },
        { url: "/projects/citu-forums/campus-discussion.jpg", caption: "Campus Community Thread: Peer discussions, student life, and canteen culture" }
      ],
      par: {
        problem: "Students and faculty needed a dedicated place to discuss academic subjects, post campus announcements, and share study materials without posts getting lost in general social media feeds.",
        action: "Built a forum web application tailored for Cebu Institute of Technology - University. Designed relational SQL tables for threaded discussions, implemented student authentication, and created role-based admin moderation tools.",
        result: "Provided Technologians with an organized platform to share programming tips, capstone presentation rubrics, and study notes in a searchable archive."
      },
      statusNote: "Developed as an academic collaborative project for Cebu Institute of Technology - University.",
      technologies: ["Node.js", "SQL", "RESTful APIs", "React.js", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com"
    },
    {
      id: "ssgc-internship",
      number: "04",
      title: "The SSGC Group (Singapore Remote)",
      tagline: "500-hour remote internship modernizing production code and optimizing on-page SEO",
      badge: "Professional Experience",
      heroImage: null,
      images: [],
      testimonial: {
        quote: "Commended by the Team Leader as 'one of the most trusted interns' over the 4-month tenure for efficiency, consistent reliability, adaptability, and high-quality deliverables.",
        author: "Team Leader",
        company: "The SSGC Group (Umonics & Knowles Training Institute, Singapore)"
      },
      par: {
        problem: "Two subsidiary training institutes operating in Singapore required code modernization on their WordPress websites, where outdated HTML structures affected mobile usability and on-page SEO visibility.",
        action: "Completed a 500-hour remote internship refactoring legacy HTML into responsive components, improving visual aesthetics and layout hierarchy, and carrying out on-page SEO enhancements across key course pages.",
        result: "Enhanced mobile responsiveness across updated pages, improved search engine performance, and received commendation from the Team Leader for reliability and quality of deliverables."
      },
      technologies: ["HTML5 / CSS3", "JavaScript", "WordPress", "On-Page SEO", "Remote Collaboration"],
      githubUrl: "https://github.com"
    }
  ],

  certifications: [
    {
      title: "AWS Academy Graduate: Cloud Architecting",
      badgeTitle: "Cloud Architecting - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      level: "Cloud Infrastructure and Resilient Systems",
      hours: "60 hours completed",
      issuedOn: "11/29/2025",
      year: "2025",
      badge: "AWS Certified",
      iconType: "cloud",
      credlyUrl: "https://www.credly.com/go/6mXtw605",
      image: "/certificates/aws-cloud-architecting.jpg",
      proof: "Validates 60 completed course hours in designing resilient, high-performing, and cost-effective architectures on AWS."
    },
    {
      title: "AWS Academy Graduate: Cloud Foundations",
      badgeTitle: "Cloud Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      level: "Core Cloud Architecture and Services",
      hours: "20 hours completed",
      issuedOn: "10/06/2025",
      year: "2025",
      badge: "AWS Certified",
      iconType: "server",
      credlyUrl: "https://www.credly.com/go/DukAimH7",
      image: "/certificates/aws-cloud-foundations.jpg",
      proof: "Validates 20 completed course hours covering fundamental AWS cloud concepts, security, architecture, pricing, and infrastructure models."
    },
    {
      title: "Lifelong Professional Skills",
      badgeTitle: "IBM SkillsBuild Professional Skills",
      issuer: "IBM SkillsBuild",
      level: "Professional Workplace Competencies",
      hours: "Professional Certificate",
      issuedOn: "07/25/2026",
      year: "2026",
      badge: "IBM Certified",
      iconType: "award",
      credlyUrl: "https://www.credly.com/go/E5b734b5",
      image: "/certificates/ibm-professional-skills.png",
      proof: "Verified IBM SkillsBuild credential recognizing professional problem solving, communication, teamwork, and continuous growth."
    }
  ],

  // Sharpened skill hierarchy: Backend & DBs first, AI second, Languages third, Cloud fourth, Supporting Frontend fifth
  skills: {
    backendAndDatabases: [
      { name: "Node.js", category: "Runtime" },
      { name: "Express.js", category: "Framework" },
      { name: "PostgreSQL", category: "Relational DB" },
      { name: "SQL", category: "Database Queries" },
      { name: "RESTful APIs", category: "API Design" },
      { name: "Authentication & Auth", category: "Security" },
      { name: "Database Schema Design", category: "Architecture" }
    ],
    aiAndIntegration: [
      { name: "Ollama (Local LLMs)", detail: "Privacy-first on-device AI inference" },
      { name: "Python", detail: "Scripting and AI workflows" },
      { name: "OpenAI API", detail: "GPT integration and function calling" },
      { name: "Gemini API", detail: "Multimodal and structured API calls" },
      { name: "AI Pipeline Architecture", detail: "Practical prompt workflows and integration" }
    ],
    languages: [
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "C++", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "HTML5 / CSS3", level: "Expert" }
    ],
    cloudAndTools: [
      { name: "AWS Cloud (Architecting & Foundations)" },
      { name: "Git & GitHub Version Control" },
      { name: "VS Code" },
      { name: "Linux Basics" },
      { name: "Postman API Testing" },
      { name: "Agile / Scrum Methodologies" }
    ],
    supportingFrontend: [
      { name: "React.js", category: "Frontend" },
      { name: "Next.js", category: "Full-Stack" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Responsive Web Design", category: "UI/UX" }
    ]
  },

  education: {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Cebu Institute of Technology - University (CIT-U)",
    period: "2021 - 2026",
    location: "Cebu, Philippines",
    takeaway: "Completed 5-year coursework in software development, database systems, web development, cloud computing, and UI/UX design."
  }
};
