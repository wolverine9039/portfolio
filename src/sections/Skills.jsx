import { useState } from 'react';


const Skills = ({ isDark }) => {
    const [activeCategory, setActiveCategory] = useState('development');

    const skillCategories = {
        development: {
            title: "Development & Frameworks",
            icon: "🚀",
            color: isDark ? "from-purple-500 to-pink-500" : "from-purple-600 to-pink-600",
            skills: [
                { name: "Android Development", level: 85, icon: "📱" },
                { name: "React Native", level: 80, icon: "⚛️" },
                { name: "Flask", level: 82, icon: "🌶️" },
                { name: "Streamlit", level: 85, icon: "🎈" },
                { name: "Selenium", level: 75, icon: "🤖" }
            ]
        },
        languages: {
            title: "Programming Languages",
            icon: "💻",
            color: isDark ? "from-blue-500 to-cyan-500" : "from-blue-600 to-cyan-600",
            skills: [
                { name: "Java", level: 90, icon: "☕" },
                { name: "Python", level: 88, icon: "🐍" }
            ]
        },
        database: {
            title: "Database Management",
            icon: "🗄️",
            color: isDark ? "from-green-500 to-emerald-500" : "from-green-600 to-emerald-600",
            skills: [
                { name: "MongoDB (NoSQL)", level: 80, icon: "🍃" },
                { name: "SQL", level: 85, icon: "📊" },
                { name: "Firebase", level: 78, icon: "🔥" }
            ]
        },
        devops: {
            title: "DevOps & Tools",
            icon: "⚙️",
            color: isDark ? "from-orange-500 to-red-500" : "from-orange-600 to-red-600",
            skills: [
                { name: "AWS Cloud", level: 75, icon: "☁️" },
                { name: "Docker", level: 70, icon: "🐳" },
                { name: "Git & GitHub", level: 88, icon: "📦" },
                { name: "Linux", level: 80, icon: "🐧" }
            ]
        }
    };

    return (
        <section id="skills" className={`py-12 md:py-20 px-4 md:px-20 ${isDark ? 'bg-black' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className={`text-3xl md:text-6xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Technical <span className={`bg-gradient-to-r ${isDark ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>Skills</span>
                    </h2>
                    <p className={`text-sm md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Building scalable and impactful software solutions
                    </p>
                </div>

                {/* Category Tabs - Scrollable on mobile */}
                <div className="mb-8 md:mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
                    <div className="flex md:flex-wrap md:justify-center gap-2 md:gap-4 min-w-max md:min-w-0">
                        {Object.keys(skillCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm md:text-base
                                ${activeCategory === category
                                        ? `bg-gradient-to-r ${skillCategories[category].color} text-white shadow-xl`
                                        : isDark
                                            ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="mr-1 md:mr-2">{skillCategories[category].icon}</span>
                                <span className="hidden sm:inline">{skillCategories[category].title}</span>
                                <span className="sm:hidden">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Display */}
                <div className="max-w-4xl mx-auto">
                    {/* Skills Display */}
                    <div className={`p-5 md:p-8 rounded-xl md:rounded-2xl ${isDark ? 'bg-gray-900/50 border border-white/10' : 'bg-gray-50 border border-black/10'}`}>
                        <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                            {skillCategories[activeCategory].title}
                        </h3>
                        <div className="space-y-4 md:space-y-6">
                            {skillCategories[activeCategory].skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Skill Name and Icon */}
                                    <div className="flex justify-between items-center mb-1.5 md:mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl md:text-2xl">{skill.icon}</span>
                                            <span className={`font-medium text-sm md:text-base ${isDark ? 'text-white' : 'text-black'}`}>
                                                {skill.name}
                                            </span>
                                        </div>
                                        <span className={`text-xs md:text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {skill.level}%
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className={`h-2 md:h-3 rounded-full overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div
                                            className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out rounded-full relative overflow-hidden`}
                                            style={{ width: `${skill.level}%` }}
                                        >
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                {/* Skill Tags Cloud */}
                <div className="mt-10 md:mt-16">
                    <h3 className={`text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center ${isDark ? 'text-white' : 'text-black'}`}>
                        Also Proficient In
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                        {["Android SDK", "JDBC", "REST APIs", "OpenRouter API", "LLM Integration", "Huffman Compression", "AES/RSA Encryption", "MySQL", "CSV Data Storage", "Prompt Engineering", "UI/UX Design", "Agile Development"].map((tag, index) => (
                            <span
                                key={index}
                                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-110 cursor-pointer
                                ${isDark
                                        ? 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-purple-600 hover:to-pink-600'
                                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-black hover:from-purple-500 hover:to-pink-500 hover:text-white'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;