import React from 'react';
import NodeWebVisualization from '../components/NodeWebVisualization';

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-12 md:py-20 px-4 md:px-20 bg-black"
            style={{ minHeight: '100vh' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 text-white">
                        Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400 mb-2">
                        Explore my technical expertise through an interactive visualization
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                        Click nodes to expand • Hover to see project usage
                    </p>
                </div>

                {/* Interactive Node Web Visualization */}
                <div
                    className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
                    style={{
                        height: '70vh',
                        minHeight: '600px',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 100px rgba(59, 130, 246, 0.05)'
                    }}
                >
                    <NodeWebVisualization />
                </div>

                {/* Additional Skills Note */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        💡 Tip: Zoom in/out with +/- buttons • Drag to pan • Click to explore categories
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Skills;