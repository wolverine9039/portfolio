import React from 'react';
import { motion } from 'framer-motion';
import NodeWebVisualization from '../components/NodeWebVisualization';

/**
 * Tech Web Page
 * Full-page component for the interactive node web visualization
 */
const TechWebPage = () => {
    return (
        <div className="min-h-screen w-full relative overflow-hidden">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0f 100%)',
                }}
            />

            {/* Animated background pattern */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)
                    `
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 z-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Page Header - with top padding to avoid navbar overlap */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 pt-24 md:pt-32 pb-6 px-4 text-center"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Technology Stack
                </h1>
                <p className="text-gray-400 text-lg">
                    Click to expand • Hover to preview
                </p>
            </motion.div>

            {/* Main Visualization Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative z-10 h-[calc(100vh-220px)] w-full px-4"
            >
                <NodeWebVisualization />
            </motion.div>

            {/* Footer Instructions */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 pb-6 px-4 text-center"
            >
                <p className="text-gray-500 text-sm">
                    Interactive technology visualization • Hover for details
                </p>
            </motion.div>
        </div>
    );
};

export default TechWebPage;
