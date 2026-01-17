import { useState } from 'react';

const Projects = ({ isDark }) => {
    const [, setHoveredProject] = useState(null);

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
            title: "Employee Payroll Management",
            period: "Sep 2025 - Dec 2025",
            description: "A Java-based application developed to automate employee salary processing and payroll operations. Uses MySQL for secure and efficient database management with CRUD operations and role-based access.",
            features: [
                "Implemented CRUD operations for employee and payroll data",
                "Automated salary calculation including allowances and deductions",
                "Used JDBC for database connectivity and data persistence",
                "Designed and optimized SQL queries for payroll processing",
                "Generated pay slips and payroll reports"
            ],
            image: "/images/project2.png",
            tags: ["Java", "MySQL", "JDBC", "SQL Queries"],
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
        }
    ];

    return (
        <section id="projects" className={`py-20 px-5 md:px-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Featured <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>Projects</span>
                    </h2>
                    <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Building scalable and impactful applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${project.bgColor}`}
                            style={{
                                transitionDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                            <div className={`relative border-2 ${isDark ? 'border-white/10' : 'border-black/10'} group-hover:border-transparent rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col`}>
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/50 to-transparent' : 'from-white via-white/50 to-transparent'} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                                    {/* Period Badge */}
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                                        {project.period}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                                        {project.title}
                                    </h3>
                                    <p className={`mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {project.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className={`mb-4 text-xs space-y-1 flex-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className={`mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></span>
                                                <span className="line-clamp-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 
                                                ${isDark
                                                        ? 'bg-white/10 text-white/80 group-hover:bg-white/20'
                                                        : 'bg-black/10 text-black/80 group-hover:bg-black/20'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View Project Button */}
                                    <button
                                        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 
                                        bg-gradient-to-r ${project.gradient} text-white
                                        transform group-hover:shadow-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0`}
                                    >
                                        View Project →
                                    </button>
                                </div>

                                {/* Animated Corner Accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-2xl`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="mt-16 text-center">
                    <button className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border-2
                    ${isDark
                            ? 'border-white/20 text-white hover:bg-white hover:text-black'
                            : 'border-black/20 text-black hover:bg-black hover:text-white'
                        }`}>
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;