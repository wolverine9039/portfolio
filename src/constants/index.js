const navLinks = [
    { name: "Projects", link: "#projects" },
    { name: "Journey", link: "#journey" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: null, suffix: "", label: "Open for Work" },
    { value: 1, suffix: "", label: "Certifications" },
    { value: 5, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Dedication" },
];

const projects = [
    {
        id: 4,
        title: "Automated CI/CD Pipeline with Jenkins & Docker",
        description: "A fully automated CI/CD pipeline using Jenkins, Ansible, and Docker on AWS EC2 for zero-touch deployment from code push to production.",
        longDescription: "This DevOps automation project demonstrates enterprise-level CI/CD practices by creating a fully automated deployment pipeline. The architecture uses two AWS EC2 instances: one hosting Jenkins and Ansible for orchestration, and another running Docker for containerized application deployment. When developers push code to GitHub, webhooks trigger Jenkins to automatically build, test, containerize, and deploy the application without any manual intervention. Ansible playbooks handle the deployment orchestration, ensuring consistent and reliable deployments across environments.",
        challenges: [
            "Configuring secure communication between Jenkins server and Docker deployment server.",
            "Implementing automated rollback mechanism for failed deployments.",
            "Managing Docker container lifecycle and ensuring zero-downtime deployments."
        ],
        solutions: [
            "Set up SSH key-based authentication and Ansible vault for secure credential management.",
            "Developed custom Jenkins pipeline scripts with health checks and automatic rollback triggers.",
            "Implemented blue-green deployment strategy using Docker containers with health monitoring."
        ],
        features: [
            "Two-tier EC2 Architecture (Jenkins/Ansible + Docker Server)",
            "GitHub Webhook Integration for Auto-triggering",
            "Automated Build, Test, and Deployment Pipeline",
            "Ansible Playbook Orchestration",
            "Docker Containerization and Deployment",
            "Automated Rollback on Failure",
            "Custom Domain Integration (buildwithmayank.tech)",
            "HTTPS with SSL Certificate & Cloudflare",
            "Nginx Reverse Proxy Configuration"
        ],
        image: "/images/project4.png",
        tags: ["Jenkins", "Ansible", "Docker", "AWS EC2", "CI/CD", "DevOps"],
        liveUrl": "https://buildwithmayank.tech",
        githubUrl: "https://github.com/wolverine9039/portfolio",
        stages: [
            {
                id: "planning",
                title: "Planning & Research",
                description: "Researched CI/CD best practices, AWS architecture patterns, and planned the two-tier infrastructure approach",
                icon: "🎯",
                position: { x: -8, y: 0, z: 0 },
                achievements: [
                    "Defined automated deployment requirements",
                    "Chose Jenkins + Ansible + Docker technology stack",
                    "Planned two-tier EC2 architecture design",
                    "Researched security best practices"
                ],
                progress: 100,
                unlocked: true,
                color: "#3B82F6",
                techArchitecture: {
                    nodes: [
                        {
                            id: "aws-docs",
                            name: "AWS Docs",
                            icon: "📚",
                            type: "research",
                            position: { x: -1.5, y: 0.8, z: 0 },
                            color: "#3B82F6"
                        },
                        {
                            id: "devops-guides",
                            name: "DevOps Guides",
                            icon: "📖",
                            type: "research",
                            position: { x: 1.5, y: 0.8, z: 0 },
                            color: "#6366F1"
                        },
                        {
                            id: "architecture",
                            name: "Architecture Planner",
                            icon: "🗂️",
                            type: "planning",
                            position: { x: 0, y: -0.8, z: 1 },
                            color: "#8B5CF6"
                        },
                        {
                            id: "requirements",
                            name: "Requirements Doc",
                            icon: "📝",
                            type: "documentation",
                            position: { x: 0, y: -0.8, z: -1 },
                            color: "#A855F7"
                        }
                    ],
                    dataFlow: [
                        { from: "aws-docs", to: "architecture", label: "Research Input" },
                        { from: "devops-guides", to: "architecture", label: "Best Practices" },
                        { from: "architecture", to: "requirements", label: "Document Plan" }
                    ]
                }
            },
            {
                id: "design",
                title: "Architecture Design",
                description: "Designed the infrastructure blueprint, pipeline workflow, and deployment strategy",
                icon: "📐",
                position: { x: -4, y: 2.5, z: -2 },
                achievements: [
                    "Created AWS architecture diagram",
                    "Designed multi-stage Jenkins pipeline",
                    "Planned Ansible playbook structure",
                    "Defined rollback mechanism strategy"
                ],
                technologies: ["AWS EC2", "Jenkins", "Ansible", "Docker"],
                progress: 100,
                unlocked: true,
                color: "#8B5CF6",
                techArchitecture: {
                    nodes: [
                        {
                            id: "lucidchart",
                            name: "Lucidchart",
                            icon: "🎨",
                            type: "design",
                            position: { x: -1.5, y: 0, z: 1 },
                            color: "#8B5CF6"
                        },
                        {
                            id: "pipeline-design",
                            name: "Pipeline Designer",
                            icon: "🔧",
                            type: "design",
                            position: { x: 1.5, y: 0, z: 1 },
                            color: "#A855F7"
                        },
                        {
                            id: "playbook-structure",
                            name: "Playbook Structure",
                            icon: "📋",
                            type: "planning",
                            position: { x: -1, y: 0, z: -1 },
                            color: "#C084FC"
                        },
                        {
                            id: "security-config",
                            name: "Security Config",
                            icon: "🔐",
                            type: "security",
                            position: { x: 1, y: 0, z: -1 },
                            color: "#7C3AED"
                        }
                    ],
                    dataFlow: [
                        { from: "lucidchart", to: "pipeline-design", label: "System Design" },
                        { from: "pipeline-design", to: "playbook-structure", label: "Implementation Plan" },
                        { from: "lucidchart", to: "security-config", label: "Security Design" }
                    ]
                }
            },
            {
                id: "development",
                title: "Implementation",
                description: "Built the automated CI/CD pipeline with Jenkins, Ansible playbooks, and Docker containerization",
                icon: "⚙️",
                position: { x: 0, y: 0, z: 0 },
                achievements: [
                    "Configured Jenkins server on EC2 instance",
                    "Wrote Ansible deployment playbooks",
                    "Set up Docker containerization",
                    "Integrated GitHub webhook triggers",
                    "Implemented SSH key authentication"
                ],
                progress: 100,
                unlocked: true,
                color: "#10B981",
                // Technology Architecture - Internal components
                techArchitecture: {
                    nodes: [
                        {
                            id: "github",
                            name: "GitHub",
                            icon: "🔧",
                            type: "source",
                            position: { x: -2, y: 0, z: 1 },
                            color: "#6366F1"
                        },
                        {
                            id: "jenkins",
                            name: "Jenkins Server",
                            icon: "🏗️",
                            type: "ci",
                            position: { x: 0, y: 1, z: 0 },
                            color: "#10B981"
                        },
                        {
                            id: "ansible",
                            name: "Ansible",
                            icon: "📦",
                            type: "orchestration",
                            position: { x: 1, y: 0, z: -1 },
                            color: "#F59E0B"
                        },
                        {
                            id: "docker",
                            name: "Docker Server",
                            icon: "🐳",
                            type: "deployment",
                            position: { x: 2, y: 0, z: 1 },
                            color: "#3B82F6"
                        }
                    ],
                    dataFlow: [
                        { from: "github", to: "jenkins", label: "Webhook Push" },
                        { from: "jenkins", to: "ansible", label: "Build Trigger" },
                        { from: "ansible", to: "docker", label: "Deploy Container" }
                    ]
                }
            },
            {
                id: "testing",
                title: "Testing & Debugging",
                description: "Tested automated deployments, fixed issues, and optimized pipeline performance",
                icon: "🧪",
                position: { x: 4, y: 2.5, z: -2 },
                achievements: [
                    "Tested end-to-end deployment flow",
                    "Implemented automated rollback mechanism",
                    "Debugged security and network configurations",
                    "Validated webhook automation",
                    "Performance tested pipeline stages"
                ],
                progress: 100,
                unlocked: true,
                color: "#F59E0B",
                techArchitecture: {
                    nodes: [
                        {
                            id: "test-runner",
                            name: "Test Runner",
                            icon: "🏃",
                            type: "testing",
                            position: { x: -1.5, y: 0.5, z: 0 },
                            color: "#F59E0B"
                        },
                        {
                            id: "jenkins-logs",
                            name: "Jenkins Logs",
                            icon: "📊",
                            type: "monitoring",
                            position: { x: 1.5, y: 0.5, z: 0 },
                            color: "#FB923C"
                        },
                        {
                            id: "monitoring",
                            name: "Monitoring Dashboard",
                            icon: "📈",
                            type: "monitoring",
                            position: { x: 0, y: -0.5, z: 1 },
                            color: "#FDBA74"
                        },
                        {
                            id: "rollback",
                            name: "Rollback System",
                            icon: "↩️",
                            type: "recovery",
                            position: { x: 0, y: -0.5, z: -1 },
                            color: "#DC2626"
                        }
                    ],
                    dataFlow: [
                        { from: "test-runner", to: "jenkins-logs", label: "Test Results" },
                        { from: "jenkins-logs", to: "monitoring", label: "Log Analysis" },
                        { from: "monitoring", to: "rollback", label: "Failure Trigger" }
                    ]
                }
            },
            {
                id: "deployment",
                title: "Production Launch",
                description: "Deployed the CI/CD pipeline to production and achieved zero-touch deployments",
                icon: "🚀",
                position: { x: 8, y: 0, z: 0 },
                achievements: [
                    "Successfully automated code-to-production flow",
                    "Achieved zero-downtime deployments",
                    "Configured custom domain with HTTPS (buildwithmayank.tech)",
                    "Integrated Cloudflare for SSL/TLS and CDN",
                    "Implemented nginx with SSL certificate generation",
                    "Monitored pipeline performance metrics",
                    "Documented deployment procedures"
                ],
                progress: 100,
                unlocked: true,
                color: "#EF4444",
                techArchitecture: {
                    nodes: [
                        {
                            id: "ec2-prod",
                            name: "AWS EC2 Production",
                            icon: "☁️",
                            type: "infrastructure",
                            position: { x: -1.5, y: 0, z: 0.5 },
                            color: "#EF4444"
                        },
                        {
                            id: "docker-containers",
                            name: "Docker Containers",
                            icon: "🐳",
                            type: "runtime",
                            position: { x: 1.5, y: 0, z: 0.5 },
                            color: "#F87171"
                        },
                        {
                            id: "load-balancer",
                            name: "Load Balancer",
                            icon: "⚖️",
                            type: "networking",
                            position: { x: 0, y: 0.8, z: -0.5 },
                            color: "#FCA5A5"
                        },
                        {
                            id: "cloudwatch",
                            name: "CloudWatch",
                            icon: "👁️",
                            type: "monitoring",
                            position: { x: 0, y: -0.8, z: -0.5 },
                            color: "#DC2626"
                        }
                    ],
                    dataFlow: [
                        { from: "ec2-prod", to: "docker-containers", label: "Deploy" },
                        { from: "docker-containers", to: "load-balancer", label: "Traffic" },
                        { from: "load-balancer", to: "cloudwatch", label: "Metrics" }
                    ]
                }
            }
        ]
    },
    {
        id: 2,
        title: "Calorix: AI Fitness & Nutrition Tracker",
        description: "An AI-powered fitness and nutrition tracking application with personalized workout plans, calorie tracking, and AI-driven recipe recommendations.",
        longDescription: "Calorix transforms personal fitness by leveraging artificial intelligence to provide truly personalized health guidance. Unlike standard trackers, Calorix analyzes user habits, dietary preferences, and fitness goals to generate dynamic workout plans and meal suggestions. It features real-time calorie tracking through a comprehensive food database and uses machine learning to adapt recommendations as the user progresses.",
        challenges: [
            "Developing an accurate AI model for personalized recipe recommendations.",
            "Syncing large datasets of food items and workout logs in real-time.",
            "Creating a cross-platform experience that feels native on both iOS and Android."
        ],
        solutions: [
            "Integrated OpenRouter APIs with custom prompt engineering for precise AI outputs.",
            "Utilized MongoDB with efficient indexing and caching strategies for fast data retrieval.",
            "Built with React Native to ensure a high-performance, consistent user experience across platforms."
        ],
        features: [
            "AI-Powered Recipe Generation",
            "Personalized Workout Plans",
            "Real-time Calorie & Macro Tracking",
            "Progress Analytics Dashboard",
            "Cross-Platform Mobile App"
        ],
        image: "/images/calorix_background.png",
        tags: ["React Native", "MongoDB", "AI/ML", "Firebase"],
        liveUrl: "#",
        githubUrl: "https://github.com/wolverine9039/Calorix.git",
        stages: [
            {
                id: "planning",
                title: "Planning & Research",
                description: "Researched fitness tracking apps, AI integration possibilities, and planned the feature set",
                icon: "🎯",
                position: { x: -8, y: 0, z: 0 },
                achievements: [
                    "Analyzed competitor fitness apps",
                    "Defined core features (AI workouts, calorie tracking)",
                    "Planned MongoDB database schema",
                    "Researched OpenRouter AI APIs"
                ],
                progress: 100,
                unlocked: true,
                color: "#3B82F6",
                techArchitecture: {
                    nodes: [
                        {
                            id: "market-research",
                            name: "Market Research",
                            icon: "📊",
                            type: "research",
                            position: { x: -1.5, y: 0.5, z: 0 },
                            color: "#3B82F6"
                        },
                        {
                            id: "ai-research",
                            name: "AI APIs Research",
                            icon: "🤖",
                            type: "research",
                            position: { x: 1.5, y: 0.5, z: 0 },
                            color: "#6366F1"
                        },
                        {
                            id: "tech-stack",
                            name: "Tech Stack Planning",
                            icon: "🛠️",
                            type: "planning",
                            position: { x: 0, y: -0.5, z: 1 },
                            color: "#8B5CF6"
                        },
                        {
                            id: "feature-spec",
                            name: "Feature Specs",
                            icon: "📝",
                            type: "documentation",
                            position: { x: 0, y: -0.5, z: -1 },
                            color: "#A855F7"
                        }
                    ],
                    dataFlow: [
                        { from: "market-research", to: "tech-stack", label: "Requirements" },
                        { from: "ai-research", to: "tech-stack", label: "AI Capabilities" },
                        { from: "tech-stack", to: "feature-spec", label: "Specifications" }
                    ]
                }
            },
            {
                id: "design",
                title: "UI/UX Design",
                description: "Designed intuitive mobile interface with focus on user experience and data visualization",
                icon: "📐",
                position: { x: -4, y: 2.5, z: -2 },
                achievements: [
                    "Created wireframes for all screens",
                    "Designed dashboard with progress charts",
                    "Planned AI recipe recommendation flow",
                    "Defined navigation structure"
                ],
                technologies: ["React Native", "Figma", "Material Design"],
                progress: 100,
                unlocked: true,
                color: "#8B5CF6",
                techArchitecture: {
                    nodes: [
                        {
                            id: "figma",
                            name: "Figma Design",
                            icon: "🎨",
                            type: "design",
                            position: { x: -1.5, y: 0, z: 0.5 },
                            color: "#8B5CF6"
                        },
                        {
                            id: "wireframes",
                            name: "Wireframes",
                            icon: "📱",
                            type: "design",
                            position: { x: 1.5, y: 0, z: 0.5 },
                            color: "#A855F7"
                        },
                        {
                            id: "charts",
                            name: "Chart Components",
                            icon: "📈",
                            type: "components",
                            position: { x: 0, y: 0.8, z: -0.5 },
                            color: "#C084FC"
                        },
                        {
                            id: "navigation",
                            name: "Navigation Flow",
                            icon: "🧭",
                            type: "structure",
                            position: { x: 0, y: -0.8, z: -0.5 },
                            color: "#7C3AED"
                        }
                    ],
                    dataFlow: [
                        { from: "figma", to: "wireframes", label: "Mockups" },
                        { from: "wireframes", to: "charts", label: "Dashboard Design" },
                        { from: "wireframes", to: "navigation", label: "User Flow" }
                    ]
                }
            },
            {
                id: "development",
                title: "Implementation",
                description: "Built cross-platform mobile app with AI integration, database, and authentication",
                icon: "⚙️",
                position: { x: 0, y: 0, z: 0 },
                achievements: [
                    "Developed React Native mobile app",
                    "Integrated OpenRouter AI for personalized recommendations",
                    "Implemented MongoDB backend with Express",
                    "Added Firebase authentication",
                    "Built calorie tracking system",
                    "Created workout plan generator"
                ],
                progress: 100,
                unlocked: true,
                color: "#10B981",
                techArchitecture: {
                    nodes: [
                        {
                            id: "react-native",
                            name: "React Native",
                            icon: "⚛️",
                            type: "frontend",
                            position: { x: -2, y: 0, z: 1 },
                            color: "#10B981"
                        },
                        {
                            id: "openrouter",
                            name: "OpenRouter AI",
                            icon: "🤖",
                            type: "ai",
                            position: { x: 0, y: 1, z: 0 },
                            color: "#14B8A6"
                        },
                        {
                            id: "mongodb",
                            name: "MongoDB + Express",
                            icon: "🍃",
                            type: "backend",
                            position: { x: 2, y: 0, z: 1 },
                            color: "#059669"
                        },
                        {
                            id: "firebase",
                            name: "Firebase Auth",
                            icon: "🔥",
                            type: "auth",
                            position: { x: 0, y: -1, z: 0 },
                            color: "#F59E0B"
                        }
                    ],
                    dataFlow: [
                        { from: "react-native", to: "openrouter", label: "AI Requests" },
                        { from: "react-native", to: "mongodb", label: "Data Sync" },
                        { from: "react-native", to: "firebase", label: "Authentication" }
                    ]
                }
            },
            {
                id: "testing",
                title: "Testing & Refinement",
                description: "Tested AI accuracy, app performance, and user workflows across iOS and Android",
                icon: "🧪",
                position: { x: 4, y: 2.5, z: -2 },
                achievements: [
                    "Tested AI recipe generation accuracy",
                    "Optimized database queries for performance",
                    "Fixed cross-platform compatibility issues",
                    "Validated calorie calculation accuracy",
                    "Improved UI responsiveness"
                ],
                progress: 100,
                unlocked: true,
                color: "#F59E0B",
                techArchitecture: {
                    nodes: [
                        {
                            id: "jest",
                            name: "Jest Testing",
                            icon: "🃏",
                            type: "testing",
                            position: { x: -1.5, y: 0.5, z: 0 },
                            color: "#F59E0B"
                        },
                        {
                            id: "expo-go",
                            name: "Expo Go Testing",
                            icon: "📱",
                            type: "testing",
                            position: { x: 1.5, y: 0.5, z: 0 },
                            color: "#FB923C"
                        },
                        {
                            id: "mongodb-perf",
                            name: "DB Performance",
                            icon: "⚡",
                            type: "optimization",
                            position: { x: 0, y: -0.5, z: 1 },
                            color: "#FDBA74"
                        },
                        {
                            id: "ai-validation",
                            name: "AI Accuracy Check",
                            icon: "✅",
                            type: "validation",
                            position: { x: 0, y: -0.5, z: -1 },
                            color: "#EA580C"
                        }
                    ],
                    dataFlow: [
                        { from: "jest", to: "mongodb-perf", label: "Performance Tests" },
                        { from: "expo-go", to: "ai-validation", label: "UI Tests" },
                        { from: "ai-validation", to: "mongodb-perf", label: "Integration" }
                    ]
                }
            },
            {
                id: "deployment",
                title: "Launch & Monitoring",
                description: "Deployed backend services and prepared app for distribution",
                icon: "🚀",
                position: { x: 8, y: 0, z: 0 },
                achievements: [
                    "Deployed backend to cloud platform",
                    "Set up Firebase hosting",
                    "Implemented analytics tracking",
                    "Created user documentation"
                ],
                progress: 100,
                unlocked: true,
                color: "#EF4444",
                techArchitecture: {
                    nodes: [
                        {
                            id: "heroku",
                            name: "Heroku Backend",
                            icon: "☁️",
                            type: "hosting",
                            position: { x: -1.5, y: 0, z: 0.5 },
                            color: "#EF4444"
                        },
                        {
                            id: "expo-eas",
                            name: "Expo EAS Build",
                            icon: "📦",
                            type: "build",
                            position: { x: 1.5, y: 0, z: 0.5 },
                            color: "#F87171"
                        },
                        {
                            id: "firebase-analytics",
                            name: "Firebase Analytics",
                            icon: "📊",
                            type: "monitoring",
                            position: { x: 0, y: 0.8, z: -0.5 },
                            color: "#FCA5A5"
                        },
                        {
                            id: "mongodb-atlas",
                            name: "MongoDB Atlas",
                            icon: "🗄️",
                            type: "database",
                            position: { x: 0, y: -0.8, z: -0.5 },
                            color: "#DC2626"
                        }
                    ],
                    dataFlow: [
                        { from: "heroku", to: "mongodb-atlas", label: "Data Connection" },
                        { from: "expo-eas", to: "firebase-analytics", label: "App Events" },
                        { from: "heroku", to: "firebase-analytics", label: "Backend Metrics" }
                    ]
                }
            }
        ]
    },
    {
        id: 3,
        title: "AI Recipe Generator",
        description: "An AI Recipe Generator using Python, Flask, and Streamlit, integrating LLM APIs to generate structured recipes.",
        longDescription: "The AI Recipe Generator is an intelligent culinary assistant that helps users discover new meals based on available ingredients. By utilizing advanced Large Language Models (LLMs), it can generate unique, structured recipes complete with step-by-step instructions, cooking times, and nutritional estimates. The application bridges the gap between what's in your fridge and a delicious meal on your table.",
        challenges: [
            "Ensuring the generated recipes are plausible and safe to cook.",
            "Minimizing latency when querying external LLM APIs.",
            "Creating an interactive and responsive UI for recipe customization."
        ],
        solutions: [
            "Implemented strict validation layers and specific prompting techniques to guide the LLM.",
            "Used asynchronous request handling and response streaming to improve perceived performance.",
            "Leveraged Streamlit for rapid prototyping and deployment of a highly interactive frontend."
        ],
        features: [
            "Ingredient-based Recipe Generation",
            "Dietary Restriction Filters",
            "Step-by-step Cooking Instructions",
            "Nutritional Analysis Estimates",
            "Save & Share Favorite Recipes"
        ],
        image: "/images/project3.png",
        tags: ["Python", "Flask", "Streamlit", "LLM API"],
        liveUrl: "#",
        githubUrl: "https://github.com/wolverine9039/personalized_recipe_ai.git",
        stages: [
            {
                id: "planning",
                title: "Planning & Research",
                description: "Researched LLM APIs and planned the recipe generation system architecture",
                icon: "🎯",
                position: { x: -8, y: 0, z: 0 },
                achievements: [
                    "Researched available LLM APIs (OpenRouter)",
                    "Defined AI prompt engineering strategies",
                    "Planned Flask backend architecture",
                    "Designed recipe data structure"
                ],
                progress: 100,
                unlocked: true,
                color: "#3B82F6"
            },
            {
                id: "design",
                title: "System Design",
                description: "Designed UI prototypes and API integration flow for recipe generation",
                icon: "📐",
                position: { x: -4, y: 2.5, z: -2 },
                achievements: [
                    "Created Streamlit interface mockups",
                    "Designed API request/response flow",
                    "Planned user authentication system",
                    "Defined dietary restriction filters"
                ],
                technologies: ["Python", "Streamlit", "Flask"],
                progress: 100,
                unlocked: true,
                color: "#8B5CF6"
            },
            {
                id: "development",
                title: "Implementation",
                description: "Built Flask backend, integrated LLM API, and created Streamlit interface",
                icon: "⚙️",
                position: { x: 0, y: 0, z: 0 },
                achievements: [
                    "Developed Flask API endpoints",
                    "Integrated OpenRouter LLM for recipe generation",
                    "Built Streamlit interactive frontend",
                    "Implemented CSV-based user storage",
                    "Added prompt engineering for accurate outputs"
                ],
                progress: 100,
                unlocked: true,
                color: "#10B981"
            },
            {
                id: "testing",
                title: "Testing & Optimization",
                description: "Tested AI outputs, optimized prompts, and improved user experience",
                icon: "🧪",
                position: { x: 4, y: 2.5, z: -2 },
                achievements: [
                    "Validated AI recipe accuracy",
                    "Optimized prompt engineering",
                    "Tested dietary restriction filters",
                    "Improved response streaming performance",
                    "Fixed edge cases in recipe generation"
                ],
                progress: 100,
                unlocked: true,
                color: "#F59E0B"
            },
            {
                id: "deployment",
                title: "Deployment",
                description: "Deployed application and prepared for public access",
                icon: "🚀",
                position: { x: 8, y: 0, z: 0 },
                achievements: [
                    "Deployed Flask backend",
                    "Set up Streamlit hosting",
                    "Created user documentation",
                    "Implemented usage analytics"
                ],
                progress: 100,
                unlocked: true,
                color: "#EF4444"
            }
        ]
    },
    {
        id: 1,
        title: "Cipher Shield: File Encryption App",
        description: "An Android file encryption and decryption app using AES, RSA (hybrid encryption) and Huffman compression for secure file protection.",
        longDescription: "Cipher Shield is a robust Android application designed to provide military-grade security for your files on mobile devices. Leveraging a hybrid encryption approach, it combines the speed of AES for data encryption with the security of RSA for key exchange. Additionally, it integrates Huffman compression to optimize storage space for encrypted files without compromising data integrity.",
        challenges: [
            "Implementing hybrid encryption (AES + RSA) efficiently on mobile hardware.",
            "Managing large file streams during encryption to prevent memory overflows.",
            "Designing a secure key management system that is user-friendly."
        ],
        solutions: [
            "Used efficient streaming algorithms to handle large files chunk by chunk.",
            "Implemented a custom key store mechanism to securely manage RSA key pairs.",
            "Optimized Huffman compression algorithms for better performance on ARM architectures."
        ],
        features: [
            "Hybrid Encryption (AES-256 + RSA-2048)",
            "Huffman Compression for space efficiency",
            "Secure Key Management",
            "Intuitive Material Design UI",
            "File Integrity Verification"
        ],
        image: "/images/project1.png",
        tags: ["Java", "Android SDK", "AES/RSA", "Huffman Compression"],
        liveUrl: "#",
        githubUrl: "https://github.com/wolverine9039/Cipher-Shield.git",
        stages: [
            {
                id: "planning",
                title: "Planning & Research",
                description: "Researched encryption algorithms and planned hybrid security approach",
                icon: "🎯",
                position: { x: -8, y: 0, z: 0 },
                achievements: [
                    "Researched AES and RSA encryption methods",
                    "Planned hybrid encryption strategy",
                    "Studied Huffman compression algorithms",
                    "Defined Android app architecture"
                ],
                progress: 100,
                unlocked: true,
                color: "#3B82F6"
            },
            {
                id: "design",
                title: "Architecture Design",
                description: "Designed encryption flow, key management system, and Android UI",
                icon: "📐",
                position: { x: -4, y: 2.5, z: -2 },
                achievements: [
                    "Designed hybrid encryption workflow (AES + RSA)",
                    "Planned secure key management system",
                    "Created Material Design UI mockups",
                    "Defined file handling architecture"
                ],
                technologies: ["Java", "Android SDK", "Cryptography"],
                progress: 100,
                unlocked: true,
                color: "#8B5CF6"
            },
            {
                id: "development",
                title: "Implementation",
                description: "Built Android app with hybrid encryption and Huffman compression",
                icon: "⚙️",
                position: { x: 0, y: 0, z: 0 },
                achievements: [
                    "Implemented AES-256 encryption",
                    "Integrated RSA-2048 for key exchange",
                    "Added Huffman compression algorithm",
                    "Built Material Design Android UI",
                    "Created secure key store mechanism",
                    "Implemented file chunking for large files"
                ],
                progress: 100,
                unlocked: true,
                color: "#10B981"
            },
            {
                id: "testing",
                title: "Security Testing",
                description: "Tested encryption strength, performance, and security vulnerabilities",
                icon: "🧪",
                position: { x: 4, y: 2.5, z: -2 },
                achievements: [
                    "Validated encryption/decryption accuracy",
                    "Tested large file handling",
                    "Performed security audit",
                    "Optimized memory usage for ARM devices",
                    "Added file integrity verification"
                ],
                progress: 100,
                unlocked: true,
                color: "#F59E0B"
            },
            {
                id: "deployment",
                title: "Release",
                description: "Published app and created user documentation",
                icon: "🚀",
                position: { x: 8, y: 0, z: 0 },
                achievements: [
                    "Prepared APK for distribution",
                    "Created comprehensive user guide",
                    "Added security best practices documentation",
                    "Published source code on GitHub"
                ],
                progress: 100,
                unlocked: true,
                color: "#EF4444"
            }
        ]
    },
    {
        id: 5,
        title: "Employee Payroll Management System",
        description: "A comprehensive payroll management system built with Java and MySQL for automated salary calculations and employee data management.",
        longDescription: "The Employee Payroll Management System is a desktop application designed to streamline payroll operations for organizations. Built with Java Swing for an intuitive user interface and MySQL for robust data management, it automates complex salary calculations including tax deductions, allowances, bonuses, and overtime. The system uses JDBC for seamless database connectivity, enabling real-time operations and efficient data retrieval. It simplifies payroll processing by generating detailed reports, payment slips, and maintains comprehensive employee records.",
        challenges: [
            "Handling complex salary calculations with multiple deduction and allowance categories.",
            "Designing an efficient database schema for employee and payroll data relationships.",
            "Creating a user-friendly interface for non-technical HR staff."
        ],
        solutions: [
            "Developed modular calculation engine with configurable tax rates and allowance rules.",
            "Implemented normalized database design with proper indexing for optimal query performance.",
            "Created intuitive Java Swing UI with workflow-based navigation and input validation."
        ],
        features: [
            "Automated Salary Calculations with Tax & Allowances",
            "Employee Records Management",
            "Attendance & Leave Tracking",
            "Payroll Report Generation",
            "Payment Slip Creation",
            "JDBC Database Connectivity"
        ],
        image: "/images/project5.png",
        tags: ["Java", "MySQL", "JDBC", "Swing UI"],
        liveUrl: "#",
        githubUrl: "#",
        stages: [
            {
                id: "planning",
                title: "Planning & Requirements",
                description: "Gathered payroll requirements and planned database structure",
                icon: "🎯",
                position: { x: -8, y: 0, z: 0 },
                achievements: [
                    "Defined payroll calculation requirements",
                    "Planned employee data management features",
                    "Researched tax and deduction rules",
                    "Outlined reporting requirements"
                ],
                progress: 100,
                unlocked: true,
                color: "#3B82F6"
            },
            {
                id: "design",
                title: "Database & UI Design",
                description: "Designed MySQL schema and created Java Swing interface mockups",
                icon: "📐",
                position: { x: -4, y: 2.5, z: -2 },
                achievements: [
                    "Designed normalized database schema",
                    "Created entity-relationship diagrams",
                    "Designed Java Swing UI layouts",
                    "Planned workflow-based navigation"
                ],
                technologies: ["Java Swing", "MySQL", "JDBC"],
                progress: 100,
                unlocked: true,
                color: "#8B5CF6"
            },
            {
                id: "development",
                title: "Implementation",
                description: "Built desktop application with database connectivity and payroll logic",
                icon: "⚙️",
                position: { x: 0, y: 0, z: 0 },
                achievements: [
                    "Developed Java Swing desktop application",
                    "Implemented MySQL database with JDBC",
                    "Built automated salary calculation engine",
                    "Added attendance and leave tracking",
                    "Created payroll report generation",
                    "Implemented payment slip creation"
                ],
                progress: 100,
                unlocked: true,
                color: "#10B981"
            },
            {
                id: "testing",
                title: "Testing & Validation",
                description: "Tested calculations, database operations, and user workflows",
                icon: "🧪",
                position: { x: 4, y: 2.5, z: -2 },
                achievements: [
                    "Validated salary calculations accuracy",
                    "Tested database indexing performance",
                    "Verified report generation",
                    "Conducted user acceptance testing",
                    "Fixed data validation issues"
                ],
                progress: 100,
                unlocked: true,
                color: "#F59E0B"
            },
            {
                id: "deployment",
                title: "Deployment",
                description: "Deployed system and trained users",
                icon: "🚀",
                position: { x: 8, y: 0, z: 0 },
                achievements: [
                    "Deployed application to client systems",
                    "Set up MySQL database server",
                    "Created user training materials",
                    "Provided technical documentation"
                ],
                progress: 100,
                unlocked: true,
                color: "#EF4444"
            }
        ]
    }
];

const journeyData = [
    {
        year: "2019",
        type: "education",
        title: "Secondary (X), CBSE",
        institution: "Kendriya Vidyalaya No 3 Gwalior",
        description: "Completed secondary education with 84.00% marks.",
        icon: "🎓"
    },
    {
        year: "2021",
        type: "education",
        title: "Senior Secondary (XII), CBSE",
        institution: "Kendriya Vidyalaya No3 Gwalior",
        description: "Completed senior secondary education with 91.00% marks.",
        icon: "🎓"
    },
    {
        year: "2021-2024",
        type: "education",
        title: "Bachelor of Computer Applications (BCA)",
        institution: "Graphic Era Hill University",
        description: "Completed undergraduate degree in Computer Applications.",
        icon: "🎓"
    },
    {
        year: "2024-2026",
        type: "education",
        title: "Master of Computer Applications (MCA)",
        institution: "Graphic Era Deemed University",
        description: "Pursuing Master's degree with CGPA: 7.80/10.",
        icon: "🎓"
    },
    {
        year: "Oct 2025",
        type: "certification",
        title: "AWS Cloud Quest: Cloud Practitioner",
        institution: "Amazon Web Services",
        description: "Completed AWS Cloud Quest gaining foundational knowledge of cloud computing.",
        icon: "☁️"
    }
];

const skillCategories = {
    development: {
        title: "Development & Frameworks",
        skills: [
            { name: "Android Development", level: 85 },
            { name: "React Native", level: 80 },
            { name: "Flask", level: 82 },
            { name: "Streamlit", level: 85 },
            { name: "AI Integration", level: 82 }
        ]
    },
    languages: {
        title: "Programming Languages",
        skills: [
            { name: "Java", level: 90 },
            { name: "Python", level: 88 }
        ]
    },
    database: {
        title: "Database Management",
        skills: [
            { name: "MongoDB", level: 80 },
            { name: "SQL", level: 85 },
            { name: "Firebase", level: 78 }
        ]
    },
    devops: {
        title: "DevOps & Tools",
        skills: [
            { name: "AWS Cloud", level: 75 },
            { name: "Docker", level: 70 },
            { name: "Jenkins", level: 72 },
            { name: "Ansible", level: 72 },
            { name: "Git & GitHub", level: 88 },
            { name: "Linux", level: 80 }
        ]
    }
};

const socialLinks = [
    { name: "GitHub", url: "https://github.com/wolverine9039", icon: "💻" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mayank-bisht-51069524b", icon: "💼" },
    { name: "Email", url: "mailto:mayankbisht939@gmail.com", icon: "📧" },
    { name: "Phone", url: "tel:+916397902354", icon: "📱" }
];

export {
    words,
    counterItems,
    projects,
    journeyData,
    skillCategories,
    socialLinks,
    navLinks,
};
