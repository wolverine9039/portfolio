import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Node Detail Panel Component
 * Displays detailed information about a selected node in a side panel
 */
const NodeDetailPanel = ({ node, isOpen, onClose }) => {
    if (!node) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop - semi-transparent, no blur on main content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40"
                        onClick={onClose}
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            pointerEvents: 'auto'
                        }}
                    />

                    {/* Side Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        className="fixed right-0 top-0 h-full w-full md:w-96 lg:w-[450px] z-50 overflow-y-auto"
                        style={{
                            background: 'rgba(15, 23, 42, 0.95)',
                            backdropFilter: 'blur(20px)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.5)'
                        }}
                    >
                        <div className="p-6 md:p-8">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                                aria-label="Close panel"
                            >
                                <X size={24} color="#fff" />
                            </button>

                            {/* Node Icon & Title */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                                    style={{
                                        backgroundColor: node.color,
                                        boxShadow: `0 0 20px ${node.color}50`
                                    }}
                                >
                                    {node.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        {node.name}
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Technology Stack
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            {node.description && (
                                <div className="mb-6">
                                    <p className="text-gray-300 leading-relaxed">
                                        {node.description}
                                    </p>
                                </div>
                            )}

                            {/* Tech Stack */}
                            {node.techStack && node.techStack.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span className="text-xl">🛠️</span>
                                        Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {node.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: `${node.color}20`,
                                                    color: node.color,
                                                    border: `1px solid ${node.color}40`
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            {node.features && node.features.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                        <span className="text-xl">✨</span>
                                        Key Features
                                    </h3>
                                    <ul className="space-y-2">
                                        {node.features.map((feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-2 text-gray-300"
                                            >
                                                <span
                                                    className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: node.color }}
                                                />
                                                <span className="text-sm leading-relaxed">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Children Count */}
                            {node.children && node.children.length > 0 && (
                                <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <p className="text-sm text-gray-400">
                                        <span className="font-semibold text-white">
                                            {node.children.length}
                                        </span>
                                        {' '}sub-technologies available
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Click on the node to expand and explore
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NodeDetailPanel;
