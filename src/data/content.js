// Portfolio content data - refined & recruiter-optimized

export const personalInfo = {
    name: "Harsh Sharma",
    role: "AI Engineer | Building Production-Grade Agentic Infrastructure & Multi-Agent Systems",
    headline: "AI Engineer | Building Production-Grade Agentic Infrastructure & Multi-Agent Systems",
    bio: "I engineer decoupled, multi-container AI systems and autonomous agents using LangGraph, FastAPI, and Docker. Moving beyond basic API wrappers to deliver production-grade stability, sandboxed execution loops, and deterministic orchestration for enterprise AI.",
    email: "harsharma2029@gmail.com",
    location: "Gwalior, Madhya Pradesh, India",
    social: {
        github: "https://github.com/Harsh-Sharma29",
        linkedin: "https://www.linkedin.com/in/harsh-sharma029/",
        twitter: "https://twitter.com/harshsharma",
    }
};

export const projectSections = [
    {
        id: "agentic-infrastructure",
        label: "Section A",
        title: "Agentic AI Infrastructure & Microservices",
        subtitle: "Production-grade orchestration meshes, autonomous agents, and sub-second real-time AI pipelines.",
        accent: "accent",
    },
    {
        id: "applied-ai",
        label: "Section B",
        title: "Applied AI, NLP & Enterprise Solutions",
        subtitle: "Enterprise screening engines, semantic NLP systems, and full-stack applied AI products.",
        accent: "muted",
    },
];

export const projects = [
    {
        id: 1,
        section: "agentic-infrastructure",
        title: "Nexus AI Orchestrator",
        subtitle: "Production-Ready AI Service Mesh",
        tagline: "A decentralized multi-container AI orchestration layer separating presentation from graph-intelligence.",
        description: "A decentralized multi-container AI orchestration layer separating presentation from graph-intelligence.",
        architectureDetail:
            "Decoupled a thin Streamlit frontend from a heavy, asynchronous FastAPI/LangGraph backend worker process. This architectural barrier prevents blocking the UI event loop during long-running multi-agent node executions.",
        engineeringImpact: [
            "Built a stateful multi-agent mesh orchestrating autonomous Chat, RAG, SQL, Code, and Research agents with deterministic routing and contextual memory, boosting response relevance by 35%.",
            "Implemented a FAISS-driven RAG pipeline hitting 95%+ retrieval accuracy with per-tenant workspace document isolation.",
            "Containerized the entire stack using Docker-Compose and deployed it on an AWS EC2 instance reverse-proxied under a secure custom subdomain with stable TLS termination.",
        ],
        stack: ["Python", "LangGraph", "FastAPI", "Docker-Compose", "FAISS", "Gemini API", "SQLite", "AWS EC2", "Streamlit"],
        links: [
            { label: "Live App", url: "https://nexus-ai-orchestrator.scholarme.in/", variant: "primary" },
            { label: "GitHub Codebase", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: true,
    },
    {
        id: 2,
        section: "agentic-infrastructure",
        title: "Devin's Brother",
        subtitle: "Autonomous Software Engineering Agent",
        tagline: "A self-correcting, tool-enabled autonomous agent built to execute complex, multi-step code generation and terminal debugging tasks.",
        description: "A self-correcting, tool-enabled autonomous agent built to execute complex, multi-step code generation and terminal debugging tasks.",
        architectureDetail:
            "Leveraged LangChain's ReAct framework to implement an explicit execution-verification-correction loop. The agent evaluates terminal error outputs and rewrites script logic autonomously.",
        engineeringImpact: [
            "Engineered a sandboxed runtime environment utilizing isolated Docker containers to execute agent-generated code safely without host system vulnerability.",
            "Created structured tools for deep file-system manipulation, web-scraping pipelines, and shell execution, reducing automated script prototyping time by 50%.",
        ],
        stack: ["Python", "LangChain", "ReAct Framework", "Docker Sandbox", "OpenAI/Gemini API", "Shell Tools", "Pydantic v2"],
        links: [
            { label: "GitHub Repository", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: true,
    },
    {
        id: 3,
        section: "agentic-infrastructure",
        title: "Full-Duplex Real-Time Voice Agent",
        subtitle: "Sub-200ms Conversational Pipeline",
        tagline: "A sub-200ms low-latency conversational voice assistant running on asynchronous event-driven pipelines.",
        description: "A sub-200ms low-latency conversational voice assistant running on asynchronous event-driven pipelines.",
        architectureDetail:
            "Constructed an asynchronous, bi-directional audio streaming layer using WebSockets and asyncio workers to handle simultaneous human speech parsing and agent response streaming.",
        engineeringImpact: [
            "Integrated LiveKit / WebRTC transport protocols to maintain stable audio frames over volatile network conditions.",
            "Optimized real-time interruption handling—allowing users to speak over the agent naturally, updating the graph state machine instantly without connection resets.",
        ],
        stack: ["Python", "FastAPI", "WebSockets", "LiveKit", "WebRTC", "Gemini Live API", "Asyncio"],
        links: [
            { label: "GitHub Repository", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: true,
    },
    {
        id: 4,
        section: "applied-ai",
        title: "AI Resume ATS Analyzer",
        subtitle: "Enterprise Screening Engine",
        tagline: "An intelligent parsing and semantic scoring system matching candidate profiles against multi-variable job descriptions.",
        description: "An intelligent parsing and semantic scoring system matching candidate profiles against multi-variable job descriptions.",
        engineeringImpact: [
            "Developed an advanced document parsing engine extracting entities (skills, experience, education) from complex PDF/DOCX layouts with 90%+ textual accuracy.",
            "Implemented localized NLP-based keyword weighting and section-affinity metrics, generating a 0-100 compatibility matrix to scale recruitment matching efficiency by 60%.",
        ],
        stack: ["Python", "NLP (spaCy/NLTK)", "Streamlit UI", "Advanced PDF/Docx Parsers", "Semantic Matchers"],
        links: [
            { label: "Live Demo", url: "https://ai-resume-ats-analyzer.onrender.com/", variant: "primary" },
            { label: "GitHub Repository", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: true,
    },
    {
        id: 5,
        section: "applied-ai",
        title: "Travacasa",
        subtitle: "Travel Booking Platform",
        tagline: "A comprehensive travel booking and management platform for discovering destinations and managing itineraries.",
        description: "A comprehensive travel booking and management platform for discovering destinations and managing itineraries.",
        engineeringImpact: [
            "Built a responsive full-stack application with secure booking flows and efficient database queries across complex accommodation relations.",
            "Implemented real-time availability updates and payment gateway integration for seamless end-to-end traveler experiences.",
        ],
        stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        links: [
            { label: "Live Demo", url: "https://travacasa.onrender.com/listings", variant: "primary" },
            { label: "GitHub Repository", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: false,
    },
    {
        id: 6,
        section: "applied-ai",
        title: "Disaster Shield",
        subtitle: "Real-Time Alert System",
        tagline: "A real-time disaster alert and management system monitoring environmental data for community preparedness.",
        description: "A real-time disaster alert and management system monitoring environmental data for community preparedness.",
        engineeringImpact: [
            "Integrated third-party weather APIs with WebSocket connections for instant alert delivery to users.",
            "Designed a low-latency alert distribution system built for high availability during emergency scenarios.",
        ],
        stack: ["Node.js", "React", "WebSocket", "PostgreSQL", "Redis"],
        links: [
            { label: "GitHub Repository", url: "https://github.com/Harsh-Sharma29", variant: "secondary" },
        ],
        status: "completed",
        featured: false,
    },
];

export const skillPillars = [
    {
        id: "agentic",
        title: "Agentic Frameworks & Core AI",
        highlight: true,
        variant: "agentic",
        skills: [
            "LangGraph",
            "LangChain",
            "ReAct Framework",
            "Multi-Agent Mesh Design",
            "Tool Invocation",
            "Autonomous Loop Control",
            "Structured Outlines (Pydantic v2)",
        ],
    },
    {
        id: "infrastructure",
        title: "Backend & MLOps Infrastructure",
        highlight: true,
        variant: "infrastructure",
        skills: [
            "Asynchronous Python (asyncio)",
            "FastAPI",
            "Docker",
            "Docker-Compose",
            "WebSockets",
            "AWS EC2",
            "Linux Shell Scripting",
            "Reverse Proxy (Nginx/TLS termination)",
        ],
    },
    {
        id: "data",
        title: "Data Planes & Vector Semantics",
        highlight: false,
        variant: "data",
        skills: [
            "FAISS Vector DB",
            "ChromaDB",
            "Document Parsing Pipelines",
            "Semantic Search Optimization",
            "SQLite",
            "PostgreSQL",
        ],
    },
    {
        id: "frontend",
        title: "Frontend & Frontend-AI Delivery",
        highlight: false,
        variant: "frontend",
        skills: [
            "Streamlit (Enterprise AI UX)",
            "React.js",
            "TailwindCSS",
            "WebRTC / LiveKit (Audio Transport)",
        ],
    },
];

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
