// Node Web Visualization Data Structure with Project Information
// Hierarchical tree of tech stack nodes for interactive web visualization

import { projects } from './index';

// Build project mapping for each technology
const buildProjectMapping = () => {
    const techMap = {};

    projects.forEach(project => {
        project.tags.forEach(tag => {
            if (!techMap[tag]) {
                techMap[tag] = [];
            }
            techMap[tag].push({
                id: project.id,
                title: project.title,
                image: project.image
            });
        });
    });

    return techMap;
};

const projectsByTech = buildProjectMapping();

export const nodeWebData = {
    id: "start",
    name: "Start",
    icon: "🚀",
    color: "#8B5CF6",
    description: "Explore my comprehensive technology stack",
    x: 0,
    y: 0,
    children: [
        {
            id: "frontend",
            name: "Frontend",
            icon: "💻",
            color: "#3B82F6",
            description: "Modern web interfaces with React and cutting-edge frameworks",
            techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
            features: [
                "Responsive UI/UX Design",
                "3D Web Experiences",
                "Component-based Architecture",
                "State Management",
                "Animation Libraries"
            ],
            children: [
                {
                    id: "react",
                    name: "React",
                    icon: "⚛️",
                    color: "#61DAFB",
                    description: "Component-based UI library for building interactive interfaces",
                    techStack: ["React 19", "React Router", "React Hooks"],
                    features: ["Virtual DOM", "Component Lifecycle", "Custom Hooks", "Context API"],
                    projects: projectsByTech["React"] || [],
                    proficiency: 85
                },
                {
                    id: "threejs",
                    name: "Three.js",
                    icon: "🎨",
                    color: "#049EF4",
                    description: "3D graphics library for creating immersive web experiences",
                    techStack: ["React Three Fiber", "React Three Drei"],
                    features: ["3D Models", "Lighting & Shadows", "Camera Controls", "Post-processing"],
                    projects: projectsByTech["Three.js"] || [],
                    proficiency: 75
                },
                {
                    id: "styling",
                    name: "Styling",
                    icon: "🎭",
                    color: "#06B6D4",
                    description: "Modern CSS frameworks and animation libraries",
                    techStack: ["Tailwind CSS", "Framer Motion", "GSAP"],
                    features: ["Utility-first CSS", "Motion Animations", "Timeline Animations", "Responsive Design"],
                    projects: projectsByTech["CSS"] || [],
                    proficiency: 80
                }
            ]
        },
        {
            id: "backend",
            name: "Backend",
            icon: "⚙️",
            color: "#10B981",
            description: "Scalable server-side solutions with Node.js and databases",
            techStack: ["Node.js", "Express", "MongoDB", "Python", "Flask"],
            features: [
                "RESTful APIs",
                "Database Management",
                "Authentication & Security",
                "Server Optimization",
                "Microservices Architecture"
            ],
            children: [
                {
                    id: "nodejs",
                    name: "Node.js",
                    icon: "🟢",
                    color: "#339933",
                    description: "JavaScript runtime for building scalable server applications",
                    techStack: ["Express.js", "MongoDB", "Mongoose"],
                    features: ["Async I/O", "NPM Ecosystem", "Event-driven", "Middleware Support"],
                    projects: projectsByTech["Node.js"] || [],
                    proficiency: 82
                },
                {
                    id: "python",
                    name: "Python",
                    icon: "🐍",
                    color: "#3776AB",
                    description: "Versatile language for backend and data processing",
                    techStack: ["Flask", "Streamlit", "Pandas"],
                    features: ["Web Frameworks", "Data Analysis", "Machine Learning", "API Development"],
                    projects: projectsByTech["Python"] || [],
                    proficiency: 88
                },
                {
                    id: "databases",
                    name: "Databases",
                    icon: "🗄️",
                    color: "#47A248",
                    description: "NoSQL and SQL database solutions",
                    techStack: ["MongoDB", "MongoDB Atlas", "Firebase"],
                    features: ["Data Modeling", "Indexing", "Aggregation", "Cloud Hosting"],
                    children: [
                        {
                            id: "mongodb",
                            name: "MongoDB",
                            icon: "🍃",
                            color: "#47A248",
                            description: "NoSQL document database",
                            projects: projectsByTech["MongoDB"] || [],
                            proficiency: 80
                        },
                        {
                            id: "firebase",
                            name: "Firebase",
                            icon: "🔥",
                            color: "#FFCA28",
                            description: "Backend as a service platform",
                            projects: projectsByTech["Firebase"] || [],
                            proficiency: 78
                        }
                    ]
                }
            ]
        },
        {
            id: "devops",
            name: "DevOps",
            icon: "🔧",
            color: "#F59E0B",
            description: "CI/CD pipelines and infrastructure automation",
            techStack: ["Jenkins", "Docker", "Ansible", "AWS EC2", "GitHub Actions"],
            features: [
                "Automated Deployments",
                "Container Orchestration",
                "Infrastructure as Code",
                "Continuous Integration",
                "Cloud Infrastructure"
            ],
            children: [
                {
                    id: "jenkins",
                    name: "Jenkins",
                    icon: "🏗️",
                    color: "#D97706",
                    description: "Automation server for CI/CD pipelines",
                    techStack: ["Pipeline Scripts", "Webhooks", "Plugins"],
                    features: ["Auto Builds", "Testing Automation", "Deployment Triggers", "Pipeline Scripts"],
                    projects: projectsByTech["Jenkins"] || [],
                    proficiency: 72
                },
                {
                    id: "docker",
                    name: "Docker",
                    icon: "🐳",
                    color: "#2496ED",
                    description: "Container platform for deployment",
                    techStack: ["Docker Compose", "Dockerfile"],
                    features: ["Container Images", "Multi-stage Builds", "Volume Management", "Networking"],
                    projects: projectsByTech["Docker"] || [],
                    proficiency: 70
                },
                {
                    id: "ansible",
                    name: "Ansible",
                    icon: "🤖",
                    color: "#EE0000",
                    description: "Infrastructure automation tool",
                    techStack: ["Playbooks", "Inventory", "Modules"],
                    features: ["Configuration Management", "Deployment Automation", "Orchestration", "Idempotent Operations"],
                    projects: projectsByTech["Ansible"] || [],
                    proficiency: 72
                },
                {
                    id: "aws",
                    name: "AWS Cloud",
                    icon: "☁️",
                    color: "#FF9900",
                    description: "Cloud infrastructure and services",
                    techStack: ["EC2", "S3", "Lambda"],
                    features: ["Virtual Servers", "Load Balancing", "Auto Scaling", "Cloud Storage"],
                    projects: projectsByTech["AWS EC2"] || projectsByTech["AWS Cloud"] || [],
                    proficiency: 75
                }
            ]
        },
        {
            id: "aiml",
            name: "AI/ML",
            icon: "🤖",
            color: "#EF4444",
            description: "Artificial Intelligence and Machine Learning integration",
            techStack: ["OpenRouter API", "LLM APIs", "Python ML Libraries"],
            features: [
                "AI Model Integration",
                "Prompt Engineering",
                "Natural Language Processing",
                "Personalized Recommendations",
                "Data-driven Insights"
            ],
            children: [
                {
                    id: "llm",
                    name: "LLM APIs",
                    icon: "🧠",
                    color: "#DC2626",
                    description: "Large Language Model integration for intelligent features",
                    techStack: ["OpenRouter", "GPT APIs", "Custom Prompts"],
                    features: ["Text Generation", "Context Understanding", "Response Streaming", "API Integration"],
                    projects: projectsByTech["LLM API"] || projectsByTech["AI/ML"] || [],
                    proficiency: 80
                },
                {
                    id: "streamlit",
                    name: "Streamlit",
                    icon: "🎈",
                    color: "#FF4B4B",
                    description: "Python framework for ML app interfaces",
                    techStack: ["Python", "Data Visualization", "Interactive Widgets"],
                    features: ["Rapid Prototyping", "Data Apps", "Real-time Updates", "Simple Deployment"],
                    projects: projectsByTech["Streamlit"] || [],
                    proficiency: 85
                },
                {
                    id: "flask",
                    name: "Flask",
                    icon: "🌶️",
                    color: "#000000",
                    description: "Lightweight Python web framework",
                    techStack: ["Python", "Jinja2", "REST APIs"],
                    features: ["API Development", "Template Rendering", "Extension Support", "Lightweight"],
                    projects: projectsByTech["Flask"] || [],
                    proficiency: 82
                }
            ]
        },
        {
            id: "mobile",
            name: "Mobile",
            icon: "📱",
            color: "#8B5CF6",
            description: "Cross-platform mobile app development",
            techStack: ["React Native", "Expo", "Firebase"],
            features: [
                "Cross-platform Development",
                "Native Performance",
                "Mobile UI Components",
                "Push Notifications",
                "Offline Support"
            ],
            children: [
                {
                    id: "react-native",
                    name: "React Native",
                    icon: "📲",
                    color: "#61DAFB",
                    description: "Build native mobile apps using React",
                    techStack: ["React Native", "Expo", "React Navigation"],
                    features: ["iOS & Android", "Hot Reload", "Native Components", "Cross-platform"],
                    projects: projectsByTech["React Native"] || [],
                    proficiency: 80
                },
                {
                    id: "java-android",
                    name: "Java/Android",
                    icon: "☕",
                    color: "#007396",
                    description: "Native Android development with Java",
                    techStack: ["Android SDK", "Material Design", "JDBC"],
                    features: ["Native Apps", "Performance", "Android APIs", "Security"],
                    projects: projectsByTech["Java"] || projectsByTech["Android SDK"] || [],
                    proficiency: 85
                }
            ]
        }
    ]
};

// Helper function to get all nodes as a flat array
export const getAllNodes = () => {
    const nodes = [];

    const traverse = (node) => {
        nodes.push(node);
        if (node.children) {
            node.children.forEach(child => traverse(child));
        }
    };

    traverse(nodeWebData);
    return nodes;
};

// Helper function to find a node by ID
export const findNodeById = (id) => {
    const allNodes = getAllNodes();
    return allNodes.find(node => node.id === id);
};
