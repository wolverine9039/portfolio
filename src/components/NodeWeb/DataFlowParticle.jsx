import React from 'react';
import { motion } from 'framer-motion';
import './DataFlowParticle.css';

/**
 * Data Flow Particle Component
 * Animated particle that travels along a connection path
 */
const DataFlowParticle = ({
    pathString,
    color = "#8B5CF6",
    particleDelay = 0,
    duration = 3
}) => {
    return (
        <motion.circle
            r={3}
            fill={color}
            filter="url(#particleGlow)"
        >
            <animateMotion
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${particleDelay}s`}
                path={pathString}
            />
            <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.1;0.9;1"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={`${particleDelay}s`}
            />
        </motion.circle>
    );
};

/**
 * Multiple Particles Component
 * Creates multiple particles traveling along the same path
 */
const DataFlowParticles = ({
    start,
    end,
    color = "#8B5CF6",
    particleCount = 3,
    animationDelay = 0.5
}) => {
    // Simple linear path for particles (we can enhance this to follow bezier curve)
    const pathString = `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

    return (
        <g>
            {Array.from({ length: particleCount }).map((_, index) => (
                <DataFlowParticle
                    key={index}
                    pathString={pathString}
                    color={color}
                    particleDelay={animationDelay + (index * 1)}
                    duration={3}
                />
            ))}
        </g>
    );
};

export default DataFlowParticles;
