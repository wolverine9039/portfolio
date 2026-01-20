import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle, Circle } from 'lucide-react';

const SidePanel = ({
    stage,
    onClose,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious
}) => {
    if (!stage) return null;

    const panelBg = 'bg-gradient-to-br from-gray-900/95 to-black/95';
    const textPrimary = 'text-white';
    const textSecondary = 'text-gray-300';
    const borderColor = 'border-white/10';

    return (
        <AnimatePresence>
            {stage && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        onClick={onClose}
                    />

                    {/* Side Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className={`fixed top-0 right-0 h-full w-full md:w-[400px] lg:w-[450px] z-50 ${panelBg} backdrop-blur-xl border-l ${borderColor} shadow-2xl overflow-y-auto`}
                    >
                        {/* Header */}
                        <div className={`sticky top-0 ${panelBg} backdrop-blur-xl border-b ${borderColor} p-6 z-10`}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="text-4xl">{stage.icon}</div>
                                    <div>
                                        <h2 className={`text-xl font-bold ${textPrimary}`}>
                                            {stage.title}
                                        </h2>
                                        <p className={`text-sm ${textSecondary} mt-1`}>
                                            Stage {stage.id}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-lg transition-colors hover:bg-white/10 text-gray-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-xs font-medium ${textSecondary}`}>
                                        Progress
                                    </span>
                                    <span className={`text-xs font-bold ${textPrimary}`}>
                                        {stage.progress}%
                                    </span>
                                </div>
                                <div className="w-full h-2 rounded-full overflow-hidden bg-white/10">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${stage.progress}%` }}
                                        transition={{ duration: 1, ease: 'easeOut' }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: stage.color }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Description */}
                            <div>
                                <h3 className={`text-sm font-semibold uppercase tracking-wide ${textSecondary} mb-2`}>
                                    Description
                                </h3>
                                <p className={`${textPrimary} leading-relaxed`}>
                                    {stage.description}
                                </p>
                            </div>

                            {/* Achievements */}
                            {stage.achievements && stage.achievements.length > 0 && (
                                <div>
                                    <h3 className={`text-sm font-semibold uppercase tracking-wide ${textSecondary} mb-3`}>
                                        Achievements
                                    </h3>
                                    <ul className="space-y-2">
                                        {stage.achievements.map((achievement, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle
                                                    size={18}
                                                    className="mt-0.5 flex-shrink-0"
                                                    style={{ color: stage.color }}
                                                />
                                                <span className={`${textPrimary} text-sm`}>
                                                    {achievement}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technologies */}
                            {stage.technologies && stage.technologies.length > 0 && (
                                <div>
                                    <h3 className={`text-sm font-semibold uppercase tracking-wide ${textSecondary} mb-3`}>
                                        Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {stage.technologies.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.05 }}
                                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white"
                                                style={{
                                                    borderLeft: `3px solid ${stage.color}`
                                                }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Tech Architecture Info */}
                            {stage.techArchitecture && (
                                <div className={`p-4 rounded-xl border ${borderColor} bg-white/5`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Circle size={12} style={{ fill: stage.color, color: stage.color }} />
                                        <h3 className={`text-sm font-semibold ${textPrimary}`}>
                                            Technology Architecture
                                        </h3>
                                    </div>
                                    <p className={`text-xs ${textSecondary}`}>
                                        This stage includes {stage.techArchitecture.nodes?.length || 0} components
                                        with {stage.techArchitecture.dataFlow?.length || 0} data flows.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Navigation Footer */}
                        <div className={`sticky bottom-0 ${panelBg} backdrop-blur-xl border-t ${borderColor} p-4`}>
                            <div className="flex items-center justify-between gap-3">
                                <button
                                    onClick={onPrevious}
                                    disabled={!hasPrevious}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${hasPrevious
                                        ? 'bg-white/10 hover:bg-white/20 text-white'
                                        : 'opacity-40 cursor-not-allowed bg-transparent text-gray-500'
                                        }`}
                                >
                                    <ChevronLeft size={18} />
                                    Previous
                                </button>

                                <button
                                    onClick={onNext}
                                    disabled={!hasNext}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${hasNext
                                        ? 'bg-white/10 hover:bg-white/20 text-white'
                                        : 'opacity-40 cursor-not-allowed bg-transparent text-gray-500'
                                        }`}
                                >
                                    Next
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SidePanel;
