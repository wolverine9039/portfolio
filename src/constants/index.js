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
    { value: 2, suffix: "+", label: "Years of Experience" },
    { value: 1, suffix: "", label: "Certifications" },
    { value: 3, suffix: "+", label: "Completed Projects" },
    { value: 100, suffix: "%", label: "Dedication" },
];

const projects = [
    {
        id: 1,
        title: "Cipher Shield: File Encryption App",
        description: "An Android file encryption and decryption app using AES, RSA (hybrid encryption) and Huffman compression for secure file protection.",
        image: "/images/project1.png",
        tags: ["Java", "Android SDK", "AES/RSA", "Huffman Compression"],
        liveUrl: "#",
        githubUrl: "https://github.com/mayankbisht939/cipher-shield"
    },
    {
        id: 2,
        title: "Employee Payroll Management",
        description: "A Java-based application for employee salary processing and payroll operations using MySQL for database management.",
        image: "/images/project2.png",
        tags: ["Java", "MySQL", "JDBC", "SQL"],
        liveUrl: "#",
        githubUrl: "https://github.com/mayankbisht939/payroll-management"
    },
    {
        id: 3,
        title: "AI Recipe Generator",
        description: "An AI Recipe Generator using Python, Flask, and Streamlit, integrating LLM APIs to generate structured recipes.",
        image: "/images/project3.png",
        tags: ["Python", "Flask", "Streamlit", "LLM API"],
        liveUrl: "#",
        githubUrl: "https://github.com/mayankbisht939/ai-recipe-generator"
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
            { name: "Streamlit", level: 85 }
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