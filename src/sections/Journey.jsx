import { useState } from 'react';

const Journey = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const timelineData = [
        {
            year: "2019",
            type: "education",
            title: "Secondary (X), CBSE",
            institution: "Kendriya Vidyalaya No 3 Gwalior",
            description: "Completed secondary education with 84.00% marks. Built a strong foundation in science and mathematics.",
            icon: "🎓",
            color: "from-blue-500 to-cyan-500"
        },
        {
            year: "2021",
            type: "education",
            title: "Senior Secondary (XII), CBSE",
            institution: "Kendriya Vidyalaya No3 Gwalior",
            description: "Completed senior secondary education with 91.00% marks. Focused on Science stream with Computer Science.",
            icon: "🎓",
            color: "from-purple-500 to-pink-500"
        },
        {
            year: "2021 - 2024",
            type: "education",
            title: "Bachelor of Computer Applications (BCA)",
            institution: "Graphic Era Hill University",
            description: "Completed undergraduate degree in Computer Applications. Developed strong programming fundamentals and built multiple projects.",
            icon: "🎓",
            color: "from-indigo-500 to-purple-500"
        },
        {
            year: "2024 - 2026",
            type: "education",
            title: "Master of Computer Applications (MCA), CSIT",
            institution: "Graphic Era Deemed University",
            description: "Pursuing Master's degree with CGPA: 7.80/10. Focused on advanced software development, Android development, Java, and Python.",
            icon: "🎓",
            color: "from-green-500 to-emerald-500"
        },
        {
            year: "Oct 2025",
            type: "certification",
            title: "AWS Cloud Quest: Cloud Practitioner Training Badge",
            institution: "Amazon Web Services (AWS), Virtual",
            description: "Completed AWS Cloud Quest gaining foundational knowledge of cloud computing, AWS core services, architecture principles, security and compliance, IAM, pricing and billing models, and basic deployment concepts.",
            icon: "☁️",
            color: "from-orange-500 to-yellow-500"
        }
    ];

    return (
        <section id="journey" className="py-12 md:py-20 px-4 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 md:mb-20 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-4 text-white">
                        My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="text-base md:text-xl text-gray-400">
                        Education & Certifications
                    </p>
                </div>

                {/* Timeline - Mobile: Single column, Desktop: Alternating */}
                <div className="relative">
                    {/* Central Line - Hidden on mobile, shown on md+ */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                    {/* Mobile Line - Left aligned */}
                    <div className="md:hidden absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

                    {/* Timeline Items */}
                    <div className="space-y-8 md:space-y-12">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className={`relative flex items-start md:items-center 
                                    /* Mobile: Always left aligned with icon on left */
                                    pl-12 md:pl-0
                                    /* Desktop: Alternating layout */
                                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {/* Mobile Icon - Absolute left positioned */}
                                <div className="md:hidden absolute left-0 top-0 z-10">
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-500 transform
                                        ${activeIndex === index ? 'scale-110' : 'scale-100'}
                                        bg-gradient-to-r ${item.color} shadow-lg`}
                                    >
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Content Card - Full width on mobile, half on desktop */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                                    <div
                                        className={`relative p-4 md:p-6 rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-[1.02] md:hover:scale-105
                                        bg-gray-800/50 border border-white/10
                                        ${activeIndex === index ? 'shadow-2xl' : 'shadow-lg'}
                                        backdrop-blur-sm`}
                                    >
                                        {/* Glow Effect */}
                                        {activeIndex === index && (
                                            <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 rounded-xl md:rounded-2xl blur-xl transition-opacity duration-500`} />
                                        )}

                                        <div className="relative z-10">
                                            {/* Year Badge */}
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3 bg-gradient-to-r ${item.color} text-white`}>
                                                {item.year}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">
                                                {item.title}
                                            </h3>

                                            {/* Institution */}
                                            <p className="text-xs md:text-base font-medium mb-2 md:mb-3 text-blue-400">
                                                {item.institution}
                                            </p>

                                            {/* Description - Hidden on very small screens, truncated on mobile */}
                                            <p className="text-xs md:text-sm text-gray-400 line-clamp-3 md:line-clamp-none">
                                                {item.description}
                                            </p>

                                            {/* Type Badge */}
                                            <div className={`mt-3 md:mt-4 inline-block px-2 md:px-3 py-1 rounded-full text-xs font-medium
                                            ${item.type === 'education'
                                                    ? 'bg-purple-500/20 text-purple-400'
                                                    : 'bg-green-500/20 text-green-400'
                                                }`}>
                                                {item.type === 'education' ? '🎓 Education' : '📜 Certification'}
                                            </div>
                                        </div>

                                        {/* Arrow pointing to timeline - Desktop only */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-gray-800
                                        ${index % 2 === 0 ? '-right-2' : '-left-2'}`} />
                                    </div>
                                </div>

                                {/* Desktop Center Icon */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10">
                                    <div
                                        className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-500 transform
                                        ${activeIndex === index ? 'scale-125' : 'scale-100'}
                                        bg-gradient-to-r ${item.color} shadow-2xl`}
                                    >
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Empty space on other side - Desktop only */}
                                <div className="hidden md:block w-5/12" />
                            </div>
                        ))}
                    </div>

                    {/* Start Point - Desktop only */}
                    <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12">
                        <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse" />
                    </div>

                    {/* End Point - Desktop only */}
                    <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12">
                        <div className="w-8 h-8 rounded-full bg-pink-500 animate-pulse" />
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-12 md:mt-20">
                    {[
                        { value: "7+", label: "Years Learning" },
                        { value: "2", label: "Degrees" },
                        { value: "1", label: "Certifications" },
                        { value: "3+", label: "Projects Built" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="p-4 md:p-6 rounded-xl md:rounded-2xl text-center transition-all duration-300 hover:scale-105
                            bg-gray-800/50 border border-white/10"
                        >
                            <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;