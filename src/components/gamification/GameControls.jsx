import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GameControls = ({ project, onStageSelect, selectedStage, progressPercent }) => {
    const [showStageList, setShowStageList] = useState(false);

    return (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
            <div className="flex flex-col items-center gap-4">
                {/* Progress Bar */}
                <div
                    className="px-6 py-4 rounded-2xl backdrop-blur-md border bg-white/10 border-white/20"
                >
                    <div className="flex items-center gap-4">
                        <div className="text-sm font-semibold text-white">
                            Project Progress
                        </div>
                        <div className="w-48 h-3 rounded-full overflow-hidden bg-white/10">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${progressPercent}%` }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                            />
                        </div>
                        <div className="text-sm font-bold text-white">
                            {progressPercent}%
                        </div>
                    </div>
                </div>

                {/* Stage List Toggle */}
                <button
                    onClick={() => setShowStageList(!showStageList)}
                    className="px-6 py-3 rounded-xl font-medium transition-all bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                    {showStageList ? '✕ Hide Stages' : '🗺️ Quick Navigation'}
                </button>

                {/* Stage List Dropdown */}
                <AnimatePresence>
                    {showStageList && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full mb-4 w-80 rounded-2xl backdrop-blur-md border overflow-hidden bg-black/95 border-white/20"
                        >
                            <div className="p-4 max-h-80 overflow-y-auto">
                                <h4 className="text-lg font-bold mb-4 text-white">
                                    All Stages
                                </h4>
                                <div className="space-y-2">
                                    {project.stages.map((stage, index) => (
                                        <button
                                            key={stage.id}
                                            onClick={() => {
                                                onStageSelect(stage);
                                                setShowStageList(false);
                                            }}
                                            className={`w-full p-4 rounded-xl text-left transition-all ${selectedStage?.id === stage.id
                                                ? 'bg-white/20 border-2'
                                                : 'bg-white/5 hover:bg-white/10 border-2 border-transparent'
                                                }`}
                                            style={{
                                                borderColor: selectedStage?.id === stage.id ? stage.color : 'transparent'
                                            }}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-3xl">{stage.icon}</span>
                                                <div className="flex-1">
                                                    <div className="font-semibold text-white">
                                                        {index + 1}. {stage.title}
                                                    </div>
                                                    <div className="text-xs mt-1 text-gray-400">
                                                        {stage.progress}% Complete
                                                    </div>
                                                </div>
                                                {stage.progress === 100 && (
                                                    <span className="text-green-500 text-xl">✓</span>
                                                )}
                                                {!stage.unlocked && (
                                                    <span className="text-gray-500 text-xl">🔒</span>
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default GameControls;
