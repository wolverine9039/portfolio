import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Node Hover Preview Component
 * Displays node details in a tooltip on hover
 */
const NodeHoverPreview = ({ node, position, isVisible }) => {
    if (!node || !isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ duration: 0.2 }}
                className="fixed z-50 pointer-events-none"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -120%)', // Position above the cursor
                    maxWidth: '320px'
                }}
            >
                <div
                    className="rounded-lg shadow-2xl border"
                    style={{
                        background: 'rgba(15, 23, 42, 0.98)',
                        backdropFilter: 'blur(20px)',
                        borderColor: `${node.color}40`,
                        boxShadow: `0 0 30px ${node.color}30, 0 20px 40px rgba(0,0,0,0.5)`
                    }}
                >
                    <div className="p-4">
                        {/* Node Icon & Title */}
                        <div className="flex items-center gap-3 mb-3">
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                                style={{
                                    backgroundColor: node.color,
                                    boxShadow: `0 0 15px ${node.color}50`
                                }}
                            >
                                {node.icon}
                            </div>
                            <div className="min-w-0">
                                <h3 className="text-lg font-bold text-white truncate">
                                    {node.name}
                                </h3>
                                {node.children && node.children.length > 0 && (
                                    <p className="text-xs text-gray-400">
                                        {node.children.length} technologies
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        {node.description && (
                            <p className="text-sm text-gray-300 leading-relaxed mb-3">
                                {node.description}
                            </p>
                        )}

                        {/* Tech Stack Pills */}
                        {node.techStack && node.techStack.length > 0 && (
                            <div className="mb-3">
                                <p className="text-xs font-semibold text-gray-400 mb-2">
                                    Technologies
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {node.techStack.slice(0, 4).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 rounded-md text-xs font-medium"
                                            style={{
                                                backgroundColor: `${node.color}20`,
                                                color: node.color,
                                                border: `1px solid ${node.color}30`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {node.techStack.length > 4 && (
                                        <span className="px-2 py-1 text-xs text-gray-400">
                                            +{node.techStack.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Features Preview */}
                        {node.features && node.features.length > 0 && (
                            <div>
                                <p className="text-xs font-semibold text-gray-400 mb-1.5">
                                    Key Features
                                </p>
                                <ul className="space-y-1">
                                    {node.features.slice(0, 3).map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-1.5 text-xs text-gray-300"
                                        >
                                            <span
                                                className="mt-1 w-1 h-1 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: node.color }}
                                            />
                                            <span className="leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                    {node.features.length > 3 && (
                                        <li className="text-xs text-gray-500 ml-2.5">
                                            +{node.features.length - 3} more features
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}

                        {/* Project Usage Data - For end nodes only */}
                        {node.projects && node.projects.length > 0 && (
                            <div className="mt-3 pt-3 border-t border-gray-700/50">
                                <p className="text-xs font-semibold text-gray-400 mb-2">
                                    📂 Used in {node.projects.length} {node.projects.length === 1 ? 'Project' : 'Projects'}
                                </p>
                                <div className="space-y-1.5">
                                    {node.projects.slice(0, 3).map((project, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-xs"
                                        >
                                            <div
                                                className="w-6 h-6 rounded flex items-center justify-center text-[10px] flex-shrink-0"
                                                style={{
                                                    backgroundColor: `${node.color}15`,
                                                    border: `1px solid ${node.color}30`
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <span className="text-gray-300 leading-tight truncate">
                                                {project.title}
                                            </span>
                                        </div>
                                    ))}
                                    {node.projects.length > 3 && (
                                        <p className="text-xs text-gray-500 ml-8">
                                            +{node.projects.length - 3} more
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Proficiency Level - For technologies with proficiency data */}
                        {node.proficiency && (
                            <div className="mt-3 pt-3 border-t border-gray-700/50">
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
                    </div>

                    {/* Arrow pointer */}
                    <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
                        style={{
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid transparent',
                            borderRight: '8px solid transparent',
                            borderTop: `8px solid ${node.color}40`
                        }}
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NodeHoverPreview;
