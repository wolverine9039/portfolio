import React from 'react';
import { motion } from 'framer-motion';

/**
 * Individual Node Component
 * Displays a circular node with icon, label, and interactive animations
 */
const Node = ({
    node,
    position,
    isExpanded,
    onClick,
    onHover,
    onLeave,
    isRoot = false,
    animationDelay = 0
}) => {
    // Balanced size for visibility and spacing
    const nodeSize = isRoot ? 100 : 70;
    const fontSize = isRoot ? '2.5rem' : '2rem';

    const [isLongPress, setIsLongPress] = React.useState(false);
    const longPressTimerRef = React.useRef(null);

    const startLongPress = (e) => {
        setIsLongPress(false);
        longPressTimerRef.current = setTimeout(() => {
            setIsLongPress(true);
            // Trigger long press callback if available
            if (onHover) {
                // Pass event to position the preview (support both touch and mouse)
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                onHover(node, { clientX, clientY, target: e.target });
            }
        }, 500); // 500ms for long press
    };

    const endLongPress = (e) => {
        // Clear timer
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
        }

        // If it was a long press, prevent default click behavior
        if (isLongPress) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            // Normal click
            if (e.type !== 'touchmove') {
                onClick(node);
            }
        }
    };

    const cancelLongPress = () => {
        if (longPressTimerRef.current) {
            clearTimeout(longPressTimerRef.current);
        }
    };

    // Unified Handlers
    const handleTouchStart = (e) => startLongPress(e);
    const handleTouchEnd = (e) => endLongPress(e);
    const handleTouchMove = () => cancelLongPress();

    const handleMouseDown = (e) => startLongPress(e);
    const handleMouseUp = (e) => endLongPress(e);
    const handleMouseLeave = () => cancelLongPress();

    return (
        <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: animationDelay
            }}
            style={{ cursor: 'pointer', touchAction: 'none' }} // Prevent browser zoom/scroll on the node during press

            // Mouse Events
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}

            // Touch Events
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}

            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Glow effect background */}
            <motion.circle
                cx={position.x}
                cy={position.y}
                r={nodeSize / 2 + 5}
                fill={node.color}
                opacity={0.2}
                animate={{
                    r: [nodeSize / 2 + 5, nodeSize / 2 + 10, nodeSize / 2 + 5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Main node circle */}
            <circle
                cx={position.x}
                cy={position.y}
                r={nodeSize / 2}
                fill={node.color}
                stroke="#fff"
                strokeWidth={isRoot ? 4 : 2}
                filter="url(#glow)"
            />

            {/* Icon */}
            <text
                x={position.x}
                y={position.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={fontSize}
                style={{
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}
            >
                {node.icon}
            </text>

            {/* Label */}
            <text
                x={position.x}
                y={position.y + nodeSize / 2 + 20}
                textAnchor="middle"
                fill="#fff"
                fontSize="14px"
                fontWeight={isRoot ? "bold" : "normal"}
                style={{
                    userSelect: 'none',
                    pointerEvents: 'none'
                }}
            >
                {node.name}
            </text>

            {/* Expand indicator for nodes with children */}
            {node.children && node.children.length > 0 && !isExpanded && (
                <motion.circle
                    cx={position.x + nodeSize / 2 - 8}
                    cy={position.y - nodeSize / 2 + 8}
                    r={8}
                    fill="#fff"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <title>Click to expand</title>
                </motion.circle>
            )}
            {node.children && node.children.length > 0 && !isExpanded && (
                <text
                    x={position.x + nodeSize / 2 - 8}
                    y={position.y - nodeSize / 2 + 8}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={node.color}
                    fontSize="10px"
                    fontWeight="bold"
                    style={{
                        userSelect: 'none',
                        pointerEvents: 'none'
                    }}
                >
                    +
                </text>
            )}
        </motion.g>
    );
};

export default Node;
