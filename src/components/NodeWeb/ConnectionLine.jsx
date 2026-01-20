import React from 'react';
import { motion } from 'framer-motion';
import { calculateBezierPath } from '../../utils/layoutUtils';

/**
 * Connection Line Component
 * Animated SVG path connecting parent node to child node
 */
const ConnectionLine = ({
    start,
    end,
    color = "#8B5CF6",
    animationDelay = 0,
    strokeWidth = 2
}) => {
    // Reduced curvature from 0.2 to 0.05 for straighter, cleaner lines
    const pathString = calculateBezierPath(start, end, 0.05);

    // Calculate path length for animation
    const pathLength = Math.sqrt(
        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
    );

    return (
        <g>
            {/* Glow effect */}
            <motion.path
                d={pathString}
                stroke={color}
                strokeWidth={strokeWidth + 2}
                fill="none"
                opacity={0.3}
                filter="url(#lineGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 0.6,
                    delay: animationDelay,
                    ease: "easeOut"
                }}
            />

            {/* Main line */}
            <motion.path
                d={pathString}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 0.6,
                    delay: animationDelay,
                    ease: "easeOut"
                }}
            />

            {/* Gradient overlay for depth effect */}
            <defs>
                <linearGradient id={`gradient-${start.x}-${start.y}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.6" />
                </linearGradient>
            </defs>
        </g>
    );
};

export default ConnectionLine;
