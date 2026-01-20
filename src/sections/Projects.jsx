import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = ({ isDark }) => {
    const [, setHoveredProject] = useState(null);
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    const projects = [
        {
            id: 1,
            title: "Cipher Shield: File Encryption App",
            period: "Jan 2025 - Jun 2025",
            description: "An Android file encryption and decryption app using AES, RSA (hybrid encryption) and Huffman compression to provide secure file encryption, key management, and safe decryption.",
            features: [
                "Implemented hybrid encryption (AES + RSA) for secure and efficient file protection",
                "Designed key management and password-based encryption mechanisms",
                "Integrated Huffman compression for optimized encrypted file storage",
                "Enabled secure decryption with automatic original file restoration"
            ],
            image: "/images/project1.png",
            tags: ["Java", "Android SDK", "AES/RSA Encryption", "Huffman Compression"],
            gradient: "from-purple-600 to-pink-600",
            bgColor: isDark ? "bg-purple-900/20" : "bg-purple-50"
        },
        {
            id: 2,
            title: "Calorix: AI Fitness & Nutrition Tracker",
            period: "Nov 2025 - Jan 2026",
            description: "An AI-powered mobile fitness and nutrition tracking application featuring personalized workout plans, calorie tracking, AI-driven recipe recommendations, and comprehensive health analytics.",
            features: [
                "Developed cross-platform mobile app using React Native",
                "Integrated AI for personalized workout and meal recommendations",
                "Implemented real-time calorie tracking and nutrition analytics",
                "Built backend with MongoDB for user data and workout history",
                "Added Firebase authentication and cloud storage",
                "Created interactive dashboards with progress visualization"
            ],
            image: "/images/project2.png",
            tags: ["React Native", "MongoDB", "AI/ML", "Firebase", "Node.js"],
            gradient: "from-blue-600 to-cyan-600",
            bgColor: isDark ? "bg-blue-900/20" : "bg-blue-50"
        },
        {
            id: 3,
            title: "AI Recipe Generator",
            period: "Jan 2026 - Present",
            description: "An AI Recipe Generator using Python, Flask, and Streamlit, integrating LLM APIs to generate structured recipes with ingredients, cooking time, and instructions.",
            features: [
                "Integrated LLM API (OpenRouter) for AI-driven recipe generation",
                "Generated structured recipe outputs including name, ingredients, cooking time",
                "Implemented backend logic and API handling using Flask",
                "Built an interactive frontend UI using Streamlit",
                "Added user login and registration with CSV-based data storage",
                "Applied prompt engineering for consistent and accurate AI responses"
            ],
            image: "/images/project3.png",
            tags: ["Python", "Flask", "Streamlit", "LLM API", "OpenRouter"],
            gradient: "from-green-600 to-emerald-600",
            bgColor: isDark ? "bg-green-900/20" : "bg-green-50"
        },
        {
            id: 4,
            title: "Automated CI/CD Pipeline with Jenkins & Docker",
            period: "Nov 2024 - Dec 2024",
            description: "A fully automated CI/CD pipeline using Jenkins, Ansible, and Docker on AWS EC2. Developers push code to GitHub, and the system automatically builds, tests, and deploys to production without manual intervention.",
            features: [
                "Set up 2 AWS EC2 instances: Jenkins/Ansible server and Docker deployment server",
                "Configured GitHub webhook integration for automatic code push detection",
                "Built Jenkins pipeline for automated build, test, and Docker image creation",
                "Implemented Ansible playbooks for orchestrating Docker container deployment",
                "Achieved zero-touch deployment from code commit to production",
                "Added automated rollback mechanism for failed deployments"
            ],
            image: "/images/project4.png",
            tags: ["Jenkins", "Ansible", "Docker", "AWS EC2", "CI/CD", "DevOps"],
            gradient: "from-orange-600 to-red-600",
            bgColor: isDark ? "bg-orange-900/20" : "bg-orange-50"
        }
    ];

    return (
        <section id="projects" className={`py-12 md:py-20 px-4 md:px-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className={`text-3xl md:text-6xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Featured <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>Projects</span>
                    </h2>
                    <p className={`text-sm md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Building scalable and impactful applications
                    </p>
                </div>

                {/* Projects Grid - Single column on mobile, 3 cols on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => handleProjectClick(project.id)}
                            className={`group relative rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 ${project.bgColor} cursor-pointer`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            <div className={`relative border ${isDark ? 'border-white/10' : 'border-black/10'} group-hover:border-transparent rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col`}>
                                {/* Image Container */}
                                <div className="relative h-40 md:h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/50 to-transparent' : 'from-white via-white/50 to-transparent'} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                                    {/* Period Badge */}
                                    <div className={`absolute top-3 right-3 md:top-4 md:right-4 px-2.5 py-1 md:px-3 rounded-full text-[10px] md:text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                                        {project.period}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:p-6 flex-1 flex flex-col">
                                    <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${isDark ? 'text-white' : 'text-black'} line-clamp-2`}>
                                        {project.title}
                                    </h3>
                                    <p className={`mb-3 md:mb-4 text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                                        {project.description}
                                    </p>

                                    {/* Features List - Hidden on mobile to save space */}
                                    <ul className={`hidden md:block mb-4 text-xs space-y-1 flex-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></span>
                                                <span className="line-clamp-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags - Fewer on mobile */}
                                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full transition-all duration-300 
                                                ${isDark
                                                        ? 'bg-white/10 text-white/80 group-hover:bg-white/20'
                                                        : 'bg-black/10 text-black/80 group-hover:bg-black/20'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {project.tags.length > 3 && (
                                            <span className={`px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                                                +{project.tags.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* View Project Button - Always visible on mobile */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProjectClick(project.id);
                                        }}
                                        className={`w-full py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base
                                        bg-gradient-to-r ${project.gradient} text-white
                                        md:transform md:group-hover:shadow-xl md:opacity-0 md:group-hover:opacity-100 md:translate-y-4 md:group-hover:translate-y-0`}
                                    >
                                        View Project →
                                    </button>
                                </div>

                                {/* Animated Corner Accent */}
                                <div className={`absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="mt-10 md:mt-16 text-center">
                    <button className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2 text-sm md:text-base
                    ${isDark
                            ? 'border-white/20 text-white hover:bg-white hover:text-black'
                            : 'border-black/20 text-black hover:bg-black hover:text-white'
                        }`}>
                        View All Projects
                    </button>
                </div>
            </div>
        </section >
    );
};

export default Projects;