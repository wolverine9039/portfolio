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
        githubUrl: "https://github.com/mayankbisht939/cipher-shield"
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
        image: "/images/project2.png",
        tags: ["React Native", "MongoDB", "AI/ML", "Firebase"],
        liveUrl: "#",
        githubUrl: "https://github.com/mayankbisht939/calorix"
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