import { projects } from './index';

/**
 * Creates a mapping of technologies to projects that use them
 * Auto-generated from project tags
 */
function createTechProjectMapping() {
    const techMap = {};

    // Technology metadata
    const techInfo = {
        // DevOps & Cloud
        "Jenkins": { description: "CI/CD automation server", icon: "🏗️", category: "DevOps", proficiency: 72 },
        "Ansible": { description: "Infrastructure automation", icon: "🤖", category: "DevOps", proficiency: 72 },
        "Docker": { description: "Container platform", icon: "🐳", category: "DevOps", proficiency: 70 },
        "AWS EC2": { description: "Cloud compute service", icon: "☁️", category: "Cloud", proficiency: 75 },
        "CI/CD": { description: "Continuous integration/deployment", icon: "🔄", category: "DevOps", proficiency: 75 },
        "DevOps": { description: "Development operations practices", icon: "⚙️", category: "DevOps", proficiency: 75 },

        // Mobile Development
        "React Native": { description: "Cross-platform mobile framework", icon: "⚛️", category: "Mobile", proficiency: 80 },
        "Android SDK": { description: "Android development toolkit", icon: "📱", category: "Mobile", proficiency: 85 },
        "Java": { description: "Object-oriented programming", icon: "☕", category: "Languages", proficiency: 90 },

        // Backend & Databases
        "MongoDB": { description: "NoSQL document database", icon: "🍃", category: "Database", proficiency: 80 },
        "Firebase": { description: "Backend as a service", icon: "🔥", category: "Backend", proficiency: 78 },
        "Flask": { description: "Python web framework", icon: "🌶️", category: "Backend", proficiency: 82 },
        "Python": { description: "High-level programming language", icon: "🐍", category: "Languages", proficiency: 88 },

        // AI & ML
        "AI/ML": { description: "Artificial intelligence & machine learning", icon: "🤖", category: "AI", proficiency: 82 },
        "LLM API": { description: "Large language model APIs", icon: "🧠", category: "AI", proficiency: 80 },
        "Streamlit": { description: "Data app framework", icon: "🎈", category: "Frameworks", proficiency: 85 },

        // Security & Algorithms
        "AES/RSA": { description: "Encryption algorithms", icon: "🔐", category: "Security", proficiency: 75 },
        "Huffman Compression": { description: "Lossless compression algorithm", icon: "📦", category: "Algorithms", proficiency: 78 },

        // General
        "Git & GitHub": { description: "Version control", icon: "📦", category: "Tools", proficiency: 88 },
        "Linux": { description: "Operating system", icon: "🐧", category: "Tools", proficiency: 80 },
        "AWS Cloud": { description: "Cloud computing platform", icon: "☁️", category: "Cloud", proficiency: 75 },
        "SQL": { description: "Relational database query language", icon: "📊", category: "Database", proficiency: 85 },
    };

    // Build the mapping from projects
    projects.forEach(project => {
        project.tags.forEach(tag => {
            if (!techMap[tag]) {
                techMap[tag] = {
                    projects: [],
                    ...techInfo[tag] || {
                        description: `${tag} technology`,
                        icon: "🔧",
                        category: "Other",
                        proficiency: 70
                    }
                };
            }
            techMap[tag].projects.push({
                id: project.id,
                title: project.title,
                image: project.image
            });
        });
    });

    return techMap;
}

export const techProjectMapping = createTechProjectMapping();
export default techProjectMapping;
