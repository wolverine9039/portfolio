import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Node from './NodeWeb/Node';
import ConnectionLine from './NodeWeb/ConnectionLine';
import DataFlowParticles from './NodeWeb/DataFlowParticle';
import NodeHoverPreview from './NodeWeb/NodeHoverPreview';
import { nodeWebData } from '../constants/node_web_data';
import { calculateTreeLayout, calculateTreeViewBox } from '../utils/treeLayoutUtils';

/**
 * Main Node Web Visualization Component
 * Manages the interactive web of expandable nodes
 */
const NodeWebVisualization = () => {
    // Start with only the center node visible (not expanded)
    const [expandedNodes, setExpandedNodes] = useState(new Set());
    const [hoveredNode, setHoveredNode] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [nodePositions, setNodePositions] = useState(new Map());
    const [connections, setConnections] = useState([]);
    const [viewBox, setViewBox] = useState('-600 -500 1200 1000');
    const [zoomLevel, setZoomLevel] = useState(1);
    const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [panStart, setPanStart] = useState({ x: 0, y: 0 });
    const [isMobilePreview, setIsMobilePreview] = useState(false);

    // Calculate positions when nodes expand using local util (debugging mode)
    useEffect(() => {
        const { positions, connections: newConnections } = calculateTreeLayout(
            nodeWebData,
            expandedNodes
        );

        setNodePositions(positions);
        setConnections(newConnections);

        // Adjust viewBox based on expanded nodes
        const { viewBox: newViewBox } = calculateTreeViewBox(positions);
        setViewBox(newViewBox);
    }, [expandedNodes]);

    const handleNodeClick = (node) => {
        // Expand node on click
        const newExpanded = new Set(expandedNodes);
        if (!newExpanded.has(node.id)) {
            newExpanded.add(node.id);
            setExpandedNodes(newExpanded);
        } else {
            // Allow collapsing by removing from expanded set
            newExpanded.delete(node.id);
            // Also collapse all children
            const collapseChildren = (nodeId) => {
                const nodePos = nodePositions.get(nodeId);
                if (nodePos && nodePos.node.children) {
                    nodePos.node.children.forEach(child => {
                        newExpanded.delete(child.id);
                        collapseChildren(child.id);
                    });
                }
            };
            collapseChildren(node.id);
            setExpandedNodes(newExpanded);
        }
    };

    const handleNodeLongPress = (node, event) => {
        if (event) {
            setHoverPosition({
                x: event.clientX,
                y: event.clientY
            });
            setHoveredNode(node);
            // Always enable modal preview for long press
            setIsMobilePreview(true);
        }
    };

    const handleClosePreview = () => {
        setHoveredNode(null);
        setIsMobilePreview(false);
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.2, 3));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.2, 0.3));
    };

    const handleResetView = () => {
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
    };

    // Pan handlers
    const handleMouseDown = (e) => {
        if (e.target.tagName === 'svg') {
            setIsPanning(true);
            setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
        }
    };

    const handleMouseMove = (e) => {
        if (isPanning) {
            setPanOffset({
                x: e.clientX - panStart.x,
                y: e.clientY - panStart.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    // Calculate transform for zoom and pan
    const getTransform = () => {
        return `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`;
    };

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
        >
            {/* Instructions Overlay */}
            {expandedNodes.size === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
                >
                    <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <p className="text-white text-sm font-medium">
                            👆 Click "Start" to begin • Long press to preview details
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <button
                    onClick={handleZoomIn}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white font-bold transition-all"
                    title="Zoom In"
                >
                    +
                </button>
                <button
                    onClick={handleZoomOut}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white font-bold transition-all"
                    title="Zoom Out"
                >
                    −
                </button>
                <button
                    onClick={handleResetView}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-lg flex items-center justify-center text-white text-xs transition-all"
                    title="Reset View"
                >
                    ⟲
                </button>
            </div>

            {/* SVG Canvas */}
            <svg
                className="w-full h-full"
                viewBox={viewBox}
                preserveAspectRatio="xMidYMid meet"
                style={{
                    transition: 'viewBox 0.8s ease-in-out',
                    transform: getTransform(),
                    transformOrigin: 'center'
                }}
            >
                {/* Definitions for filters */}
                <defs>
                    {/* Glow filter for nodes */}
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Glow filter for lines */}
                    <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    {/* Glow filter for particles */}
                    <filter id="particleGlow" x="-200%" y="-200%" width="400%" height="400%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Render connections */}
                {connections.map((connection) => (
                    <g key={connection.id}>
                        <ConnectionLine
                            start={connection.start}
                            end={connection.end}
                            color={connection.color}
                            animationDelay={connection.delay}
                        />
                        {/* Data flow particles */}
                        <DataFlowParticles
                            start={connection.start}
                            end={connection.end}
                            color={connection.color}
                            particleCount={2}
                            animationDelay={connection.delay + 0.5}
                        />
                    </g>
                ))}

                {/* Render nodes with collapse animation */}
                <AnimatePresence>
                    {Array.from(nodePositions.values()).map((pos, index) => (
                        <Node
                            key={pos.id}
                            node={pos.node}
                            position={{ x: pos.x, y: pos.y }}
                            isExpanded={expandedNodes.has(pos.id)}
                            onClick={handleNodeClick}
                            onHover={handleNodeLongPress} // Reusing onHover prop name for long press callback
                            isRoot={pos.id === 'start'}
                            animationDelay={index * 0.1}
                        />
                    ))}
                </AnimatePresence>
            </svg>

            {/* Preview Modal */}
            <NodeHoverPreview
                node={hoveredNode}
                position={hoverPosition}
                isVisible={hoveredNode !== null}
                onClose={handleClosePreview}
            />
        </div>
    );
};

export default NodeWebVisualization;
