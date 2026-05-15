// Portfolio content data - refined & recruiter-optimized

export const personalInfo = {
    name: "Harsh Sharma",
    role: "Software Engineer | AI & Backend",
    bio: "Software Engineer focused on building scalable backend systems and practical AI applications. Experienced with microservices, retrieval-augmented generation (RAG), and modern web stacks.",
    email: "harsharma2029@gmail.com",
    location: "Gwalior, Madhya Pradesh, India",
    social: {
        github: "https://github.com/Harsh-Sharma29",
        linkedin: "https://www.linkedin.com/in/harsh-sharma029/",
        twitter: "https://twitter.com/harshsharma",
    }
    
};

export const projects = [
    {
        id: 1,
        title: "Resume ATS Analyzer",
        description: "An AI-powered tool to analyze resumes against job descriptions.",
        longDescription: "Developed an application that uses NLP to extract skills from resumes and compares them with job descriptions to provide an ATS compatibility score.",
        caseStudy: "The main challenge was parsing various resume formats (PDF, DOCX) and accurately extracting semantic meaning using NLP techniques.",
        challenges: [
            "Parsing heterogeneous resume formats",
            "Extracting contextual skills using NLP",
            "Designing an intuitive user interface"
        ],
        detailedStack: ["Python", "Streamlit", "NLP", "OpenAI API", "PyPDF2"],
        image: "/projects/ats-analyzer.jpg",
        tags: ["Python", "NLP", "Streamlit"],
        stack: ["Python", "Streamlit", "NLP"],
        demoUrl: "https://ai-resume-ats-analyzer.onrender.com/",
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 2,
        title: "Travacasa",
        description: "A comprehensive travel booking and management platform.",
        longDescription: "Built a full-stack web application for travelers to discover destinations, book accommodations, and manage their itineraries seamlessly.",
        caseStudy: "Focused on creating a responsive and visually appealing UI while ensuring secure backend transactions and efficient database queries.",
        challenges: [
            "Implementing secure payment gateways",
            "Handling complex database relations for bookings",
            "Ensuring real-time availability updates"
        ],
        detailedStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/projects/travacasa.jpg",
        tags: ["React", "Node.js", "MongoDB"],
        stack: ["React", "Node.js", "Express", "MongoDB"],
        demoUrl: "https://travacasa.onrender.com/listings",
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 3,
        title: "Nexus AI Orchestrator",
        description: "Advanced multi-agent AI orchestration platform.",
        longDescription: "Developed an advanced orchestrator that coordinates multiple AI agents to solve complex, multi-step tasks by intelligently routing sub-tasks to specialized models.",
        caseStudy: "Designed a graph-based execution flow that dynamically adjusts routing based on agent performance and context.",
        challenges: [
            "Managing state across multiple agent interactions",
            "Optimizing the latency of multi-agent workflows",
            "Implementing robust error handling and fallbacks"
        ],
        detailedStack: ["Python", "LangChain", "LangGraph", "FastAPI"],
        image: "/projects/nexus-ai.jpg",
        tags: ["Python", "LangGraph", "Multi-Agent"],
        stack: ["Python", "LangChain", "LangGraph"],
        demoUrl: "https://nexus-ai-orchestrator.streamlit.app/",
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 4,
        title: "Disaster Shield",
        description: "A real-time disaster alert and management system.",
        longDescription: "Created a platform that monitors environmental data and provides real-time alerts for natural disasters, helping communities prepare and respond effectively.",
        caseStudy: "Integrated third-party weather APIs and implemented WebSocket connections for instant alert delivery to users.",
        challenges: [
            "Handling high-throughput real-time data streams",
            "Ensuring high availability during emergencies",
            "Designing a low-latency alert distribution system"
        ],
        detailedStack: ["Node.js", "React", "WebSocket", "PostgreSQL", "Redis"],
        image: "/projects/disaster-shield.jpg",
        tags: ["Node.js", "React", "WebSocket"],
        stack: ["Node.js", "React", "WebSocket"],
        demoUrl: null,
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
];

export const skills = {
    languages: ["JavaScript (ES6+)", "Python", "TypeScript", "SQL", "Java", "C++"],
    backend: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    frontend: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    ai: ["LangChain", "LangGraph", "OpenAI API", "Hugging Face", "RAG Systems", "Vector Databases"],
    tools: ["Git", "AWS (EC2, S3)", "Linux", "CI/CD", "Postman", "Vercel"],
};

export const experience = [
    {
        id: 1,
        company: "Ethara AI",
        position: "AI Engineering Intern",
        duration: "2025 – Jan 2026",
        description:
            "Worked on backend services and AI-powered features for internal products.",
        longDescription:
            "Contributed to the development of AI-enabled backend services, focusing on API design, data processing pipelines, and integration of LLM-based features into production systems.",
        responsibilities: [
            "Developed backend APIs using FastAPI and Node.js",
            "Integrated LLM-based features into applications",
            "Improved deployment workflows using CI/CD",
        ],
        challenges: [
            "Balancing response latency with AI inference cost",
            "Ensuring reliability of external API integrations",
            "Handling versioning of AI prompts and models",
        ],
        technologies: ["Python", "FastAPI", "Node.js", "AWS"],
    },
];
