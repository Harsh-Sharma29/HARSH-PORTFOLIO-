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
        title: "AI Research Agent",
        description: "Autonomous research agent that aggregates and synthesizes information from multiple sources.",
        longDescription:
            "Developed an autonomous research agent capable of collecting information from web and document sources, synthesizing results, and refining responses through iterative reasoning. The system improves answer quality by validating outputs against retrieved sources.",
        caseStudy:
            "The primary challenge was managing hallucinations across chained LLM calls. I implemented a verify-and-refine loop where each iteration cross-checks generated claims with retrieved documents and scores confidence before final output.",
        challenges: [
            "Reducing hallucinations during multi-step reasoning",
            "Optimizing latency in multi-hop retrieval pipelines",
            "Maintaining traceable citations across responses",
        ],
        detailedStack: ["Python", "LangChain", "FastAPI", "OpenAI API", "FAISS"],
        image: "/projects/research-agent.jpg",
        tags: ["Python", "LangChain", "FastAPI", "LLMs"],
        stack: ["Python", "LangChain", "FastAPI"],
        demoUrl: null,
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 2,
        title: "Scalable E-commerce API",
        description: "High-performance backend API using microservices and caching.",
        longDescription:
            "Designed a scalable e-commerce backend using a microservices architecture. Implemented Redis caching, optimized database queries, and JWT-based authentication to handle high traffic efficiently.",
        caseStudy:
            "Migrated core services from a tightly coupled design to independent services communicating via message queues. Applied the saga pattern for order and payment consistency without centralized locking.",
        challenges: [
            "Ensuring data consistency across services",
            "Handling traffic spikes during peak usage",
            "Implementing secure authentication and authorization",
        ],
        detailedStack: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "Docker"],
        image: "/projects/ecommerce.jpg",
        tags: ["Node.js", "MongoDB", "Redis", "Microservices"],
        stack: ["Node.js", "Express", "MongoDB", "Redis"],
        demoUrl: null,
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 3,
        title: "Intelligent Document Chat",
        description: "RAG-based system for querying large PDF documents.",
        longDescription:
            "Built a Retrieval-Augmented Generation (RAG) application that allows users to query large PDF documents using natural language. Optimized chunking and retrieval strategies for fast and relevant responses.",
        caseStudy:
            "Implemented a pipeline consisting of document ingestion, chunking, embedding, vector storage, hybrid retrieval, and response synthesis. A re-ranking step improves answer relevance before generation.",
        challenges: [
            "Designing effective chunking for long documents",
            "Balancing semantic and keyword-based retrieval",
            "Maintaining source attribution in generated answers",
        ],
        detailedStack: ["React", "FastAPI", "Pinecone", "LangChain", "OpenAI API"],
        image: "/projects/doc-chat.jpg",
        tags: ["RAG", "FastAPI", "LangChain", "React"],
        stack: ["React", "FastAPI", "LangChain"],
        demoUrl: "https://example.com",
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: true,
        status: "completed",
    },
    {
        id: 4,
        title: "AI Orchestrator",
        description: "Multi-agent orchestration framework for intelligent task routing.",
        longDescription:
            "Developed a multi-agent orchestration layer using LangGraph. Routes user queries to specialized agents such as RAG, research, or conversational agents based on intent and context.",
        caseStudy:
            "Modeled agent routing as a directed graph where each node represents a capability. The orchestrator dynamically selects execution paths instead of relying on static conditional logic.",
        challenges: [
            "Preventing unnecessary agent execution",
            "Graceful fallback when tools return no results",
            "Managing session state in multi-user environments",
        ],
        detailedStack: ["Python", "LangGraph", "Streamlit", "LangChain", "FAISS"],
        tags: ["Python", "LangGraph", "Multi-Agent"],
        stack: ["Python", "LangGraph", "Streamlit"],
        githubUrl: "https://github.com/Harsh-Sharma29",
        featured: false,
        status: "in-progress",
    },
    {
        id: 5,
        title: "Real-Time Collaboration Platform",
        description: "Collaborative document editor with CRDT-based conflict resolution.",
        longDescription:
            "Designing a real-time collaborative document editing platform inspired by Google Docs. Uses CRDTs to resolve concurrent edits without conflicts and WebSockets for real-time synchronization.",
        caseStudy:
            "Currently focused on system design and CRDT trade-offs for rich-text editing, including offline-first behavior and efficient state synchronization.",
        challenges: [
            "CRDT memory growth and garbage collection",
            "Cursor and presence synchronization",
            "Reliable offline-to-online merging",
        ],
        detailedStack: ["Next.js", "WebSocket", "Y.js", "PostgreSQL", "Redis"],
        tags: ["Next.js", "CRDT", "WebSocket"],
        stack: ["Next.js", "WebSocket", "Y.js"],
        featured: false,
        status: "upcoming",
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
