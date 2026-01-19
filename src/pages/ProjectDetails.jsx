import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../constants';

const ProjectDetails = ({ isDark }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p>Project not found</p>
                <button onClick={() => navigate('/')} className="ml-4 underline">Go Back</button>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`min-h-screen w-full relative overflow-x-hidden pt-24 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
            {/* Hero Section */}
            <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black via-black/50' : 'from-white via-white/50'} to-transparent`} />
                <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? 'from-black/90 via-black/20' : 'from-white/90 via-white/20'} to-transparent h-32`} />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-20">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">{project.title}</h1>
                        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`px-4 py-1.5 rounded-full text-sm md:text-base font-medium backdrop-blur-md border ${isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'
                                        }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 md:px-8 py-3 rounded-xl font-medium transition-all transform hover:scale-105 shadow-lg ${isDark
                                    ? 'bg-white text-black hover:bg-gray-200'
                                    : 'bg-black text-white hover:bg-gray-800'
                                    }`}
                            >
                                View Source Code
                            </a>
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-6 md:px-8 py-3 rounded-xl font-medium border-2 transition-all transform hover:scale-105 shadow-lg ${isDark
                                    ? 'border-white text-white hover:bg-white/10'
                                    : 'border-black text-black hover:bg-black/5'
                                    }`}
                            >
                                Live Demo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center px-6 py-12 md:px-10 lg:py-20 w-full">
                <div className="w-full max-w-4xl space-y-20 mx-auto">

                    {/* Overview Wrapper */}
                    <section className="w-full text-center flex flex-col items-center">
                        <div className="w-full text-left">
                            <button
                                onClick={() => navigate('/')}
                                className={`mb-8 inline-flex items-center text-sm font-medium hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                            >
                                <span className="mr-2">←</span> Back to Projects
                            </button>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Overview</h2>
                        <div className="w-full">
                            <p className={`text-lg md:text-xl leading-relaxed text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {project.longDescription || project.description}
                            </p>
                        </div>
                    </section>

                    {/* Key Features Wrapper */}
                    <section className="w-full flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.features && project.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`p-6 rounded-xl flex items-start text-left ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
                                >
                                    <span className={`mr-4 mt-1.5 w-3 h-3 rounded-full flex-shrink-0 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`} />
                                    <span className={`text-base md:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Challenges Wrapper */}
                    <section className="w-full flex flex-col items-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Challenges & Solutions</h2>
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.challenges && project.challenges.map((challenge, index) => {
                                const isLastAndOdd = index === project.challenges.length - 1 && project.challenges.length % 2 !== 0;
                                return (
                                    <div
                                        key={index}
                                        className={`p-6 md:p-8 rounded-2xl ${isDark ? 'bg-gray-900 border border-white/10' : 'bg-gray-50 border border-black/10'} 
                                        ${isLastAndOdd ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}
                                    >
                                        <div className="mb-6 text-left">
                                            <h3 className="text-xl font-bold text-red-500 mb-3 flex items-center">
                                                <span className="mr-2">⚠️</span> Challenge
                                            </h3>
                                            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{challenge}</p>
                                        </div>
                                        <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/5'} text-left`}>
                                            <h3 className="text-xl font-bold text-green-500 mb-3 flex items-center">
                                                <span className="mr-2">💡</span> Solution
                                            </h3>
                                            <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.solutions[index]}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
