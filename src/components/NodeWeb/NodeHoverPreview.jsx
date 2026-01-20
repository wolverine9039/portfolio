import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Node Hover Preview Component
 * Displays node details in a tooltip on hover
 */
const NodeHoverPreview = ({ node, isVisible, onClose }) => {
    if (!node || !isVisible) return null;

    // Unified Modal View for both Desktop and Mobile
    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Modal Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="w-full max-w-sm rounded-2xl border shadow-2xl overflow-hidden"
                    style={{
                        background: 'rgba(15, 23, 42, 0.98)',
                        borderColor: `${node.color}40`,
                        boxShadow: `0 0 40px ${node.color}20`
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 p-2 bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                        title="Close"
                    >
                        ✕
                    </button>

                    <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl flex-shrink-0"
                                style={{
                                    backgroundColor: node.color,
                                    boxShadow: `0 0 20px ${node.color}50`
                                }}
                            >
                                {node.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white leading-tight">
                                    {node.name}
                                </h3>
                                {node.children && node.children.length > 0 && (
                                    <p className="text-sm text-gray-400 mt-1">
                                        {node.children.length} related technologies
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        {node.description && (
                            <p className="text-base text-gray-300 leading-relaxed mb-4">
                                {node.description}
                            </p>
                        )}

                        {/* Tech Stack Pills */}
                        {node.techStack && node.techStack.length > 0 && (
                            <div className="mb-4">
                                <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                                    Technologies
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {node.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-1 rounded-md text-xs font-medium"
                                            style={{
                                                backgroundColor: `${node.color}20`,
                                                color: node.color,
                                                border: `1px solid ${node.color}30`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Features */}
                        {node.features && node.features.length > 0 && (
                            <div className="mb-4">
                                <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                                    Key Features
                                </p>
                                <ul className="space-y-2">
                                    {node.features.slice(0, 4).map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: node.color }} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Project Usage Data */}
                        {node.projects && node.projects.length > 0 && (
                            <div className="mb-4 pt-3 border-t border-white/10">
                                <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                                    Used in Projects
                                </p>
                                <div className="space-y-2">
                                    {node.projects.slice(0, 3).map((project, index) => (
                                        <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="text-lg">📂</span>
                                            <span>{project.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Proficiency Level */}
                        {node.proficiency && (
                            <div className="pt-3 border-t border-white/10">
                                <div className="flex justify-between items-center mb-1.5">
                                    <p className="text-xs font-semibold text-gray-400">
                                        Proficiency
                                    </p>
                                    <span className="text-xs font-bold" style={{ color: node.color }}>
                                        {node.proficiency}%
                                    </span>
                                </div>
                                <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{
                                            width: `${node.proficiency}%`,
                                            backgroundColor: node.color,
                                            boxShadow: `0 0 8px ${node.color}80`
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="mt-6 pt-4 border-t border-white/10 text-center">
                            <p className="text-xs text-gray-500">Tap outside to close</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NodeHoverPreview;
