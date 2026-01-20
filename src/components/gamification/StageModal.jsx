import { motion } from 'framer-motion';

const StageModal = ({ stage, onClose, onNext, onPrevious, hasNext, hasPrevious, isDark }) => {
    return (
        <motion.div
            key={stage.id}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
                opacity: { duration: 0.3 }
            }}
            className="fixed bottom-0 left-0 right-0 z-50"
        >
            <div
                className={`mx-auto max-w-4xl rounded-t-3xl shadow-2xl backdrop-blur-xl border-t ${isDark
                    ? 'bg-black/95 border-white/20 text-white'
                    : 'bg-white/95 border-black/20 text-black'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <span className="text-5xl">{stage.icon}</span>
                        <div>
                            <h3 className="text-2xl font-bold">{stage.title}</h3>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Stage Progress: {stage.progress}%
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className={`px-4 py-2 rounded-lg font-medium transition-all ${isDark
                            ? 'bg-white/10 hover:bg-white/20 border border-white/20'
                            : 'bg-black/10 hover:bg-black/20 border border-black/20'
                            }`}
                    >
                        Close
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 max-h-[50vh] sm:max-h-96 overflow-y-auto">
                    {/* Description */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-semibold mb-2">Description</h4>
                        <p className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            {stage.description}
                        </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                        <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Achievements</h4>
                        <div className="grid gap-2 sm:gap-3">
                            {stage.achievements?.map((achievement, index) => (
                                <motion.div
                                    key={`${stage.id}-achievement-${index}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.4,
                                        ease: 'easeOut'
                                    }}
                                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'
                                        }`}
                                >
                                    <span className="text-lg sm:text-xl">✓</span>
                                    <span className={`text-sm sm:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {achievement}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    {stage.technologies && stage.technologies.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {stage.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`px-4 py-2 rounded-full text-sm font-medium ${isDark
                                            ? 'bg-white/10 text-white'
                                            : 'bg-black/10 text-black'
                                            }`}
                                        style={{
                                            borderColor: stage.color,
                                            borderWidth: '2px',
                                            borderStyle: 'solid'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Footer */}
                <div className={`flex items-center justify-between p-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'
                    }`}>
                    <button
                        onClick={onPrevious}
                        disabled={!hasPrevious}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${hasPrevious
                            ? isDark
                                ? 'bg-white/10 hover:bg-white/20 text-white'
                                : 'bg-black/10 hover:bg-black/20 text-black'
                            : 'opacity-30 cursor-not-allowed'
                            }`}
                    >
                        ← Previous Stage
                    </button>

                    <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold"
                        style={{
                            backgroundColor: stage.color,
                            color: 'white'
                        }}
                    >
                        {stage.progress}%
                    </div>

                    <button
                        onClick={onNext}
                        disabled={!hasNext}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${hasNext
                            ? isDark
                                ? 'bg-white/10 hover:bg-white/20 text-white'
                                : 'bg-black/10 hover:bg-black/20 text-black'
                            : 'opacity-30 cursor-not-allowed'
                            }`}
                    >
                        Next Stage →
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default StageModal;
