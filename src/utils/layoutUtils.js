// Layout utilities for node web visualization
// Calculates positions for nodes in a radial/web-like pattern

/**
 * Calculate positions for child nodes in a radial layout around a parent
 * @param {Object} parentNode - Parent node with x, y coordinates
 * @param {Array} children - Array of child nodes
 * @param {number} radius - Distance from parent to children
 * @param {number} startAngle - Starting angle in radians (optional)
 * @param {number} level - Current depth level (for radius adjustment)
 * @returns {Array} Array of positioned nodes with x, y coordinates
 */
export const calculateRadialLayout = (
    parentNode,
    children,
    radius = 200,
    startAngle = 0,
    level = 1
) => {
    if (!children || children.length === 0) return [];

    // Adjust radius based on depth level
    const adjustedRadius = radius * (1 + level * 0.3);

    // Calculate angle increment between children
    const angleIncrement = (2 * Math.PI) / children.length;

    return children.map((child, index) => {
        const angle = startAngle + (angleIncrement * index);

        return {
            ...child,
            x: parentNode.x + adjustedRadius * Math.cos(angle),
            y: parentNode.y + adjustedRadius * Math.sin(angle),
            angle: angle,
            level: level
        };
    });
};

/**
 * Calculate positions for all nodes in a hierarchical tree structure
 * @param {Object} rootNode - Root node of the tree
 * @param {number} baseRadius - Base radius for first level
 * @returns {Map} Map of node ID to position data
 */
export const calculateTreeLayout = (rootNode, baseRadius = 180) => {
    const positions = new Map();

    // Set root position
    positions.set(rootNode.id, {
        id: rootNode.id,
        x: 0,
        y: 0,
        level: 0,
        node: rootNode
    });

    const processNode = (node, parentPos, level) => {
        if (!node.children || node.children.length === 0) return;

        const currentPos = positions.get(node.id) || parentPos;

        // Calculate radius for this level (increases with depth)
        const radius = baseRadius * (1 + level * 0.4);

        // Calculate child positions
        const childPositions = calculateRadialLayout(
            currentPos,
            node.children,
            radius,
            0,
            level
        );

        // Store positions and recursively process children
        childPositions.forEach((childPos, index) => {
            positions.set(childPos.id, {
                id: childPos.id,
                x: childPos.x,
                y: childPos.y,
                level: level,
                angle: childPos.angle,
                node: node.children[index]
            });

            // Recursively process this child's children
            processNode(node.children[index], childPos, level + 1);
        });
    };

    // Start processing from root
    processNode(rootNode, { x: 0, y: 0 }, 1);

    return positions;
};

/**
 * Check if two nodes overlap
 * @param {Object} node1 - First node with x, y, radius
 * @param {Object} node2 - Second node with x, y, radius
 * @returns {boolean} True if nodes overlap
 */
export const checkOverlap = (node1, node2) => {
    const minDistance = (node1.radius || 40) + (node2.radius || 40);
    const distance = Math.sqrt(
        Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2)
    );
    return distance < minDistance;
};

/**
 * Adjust positions to prevent overlaps using force-directed layout
 * @param {Array} nodes - Array of nodes with x, y positions
 * @param {number} iterations - Number of adjustment iterations
 * @returns {Array} Adjusted nodes
 */
export const adjustForOverlaps = (nodes, iterations = 50) => {
    const adjustedNodes = [...nodes];
    const repulsionStrength = 2;

    for (let iter = 0; iter < iterations; iter++) {
        for (let i = 0; i < adjustedNodes.length; i++) {
            for (let j = i + 1; j < adjustedNodes.length; j++) {
                const node1 = adjustedNodes[i];
                const node2 = adjustedNodes[j];

                const dx = node2.x - node1.x;
                const dy = node2.y - node1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = 80; // Minimum distance between nodes

                if (distance < minDistance && distance > 0) {
                    // Calculate repulsion force
                    const force = (minDistance - distance) / distance * repulsionStrength;
                    const fx = dx * force;
                    const fy = dy * force;

                    // Apply force (push apart)
                    node1.x -= fx / 2;
                    node1.y -= fy / 2;
                    node2.x += fx / 2;
                    node2.y += fy / 2;
                }
            }
        }
    }

    return adjustedNodes;
};

/**
 * Calculate bezier curve control points for connection lines
 * @param {Object} start - Start point {x, y}
 * @param {Object} end - End point {x, y}
 * @param {number} curvature - How curved the line should be (0-1)
 * @returns {string} SVG path string
 */
export const calculateBezierPath = (start, end, curvature = 0.3) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Calculate control points for smooth curve
    const controlOffset = distance * curvature;

    // Perpendicular offset for curve
    const perpX = -dy / distance;
    const perpY = dx / distance;

    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;

    const cx1 = midX + perpX * controlOffset;
    const cy1 = midY + perpY * controlOffset;

    return `M ${start.x} ${start.y} Q ${cx1} ${cy1} ${end.x} ${end.y}`;
};

/**
 * Get viewport bounds to center and fit all nodes
 * @param {Array} positions - Array of position objects with x, y
 * @param {number} padding - Padding around content
 * @returns {Object} Bounds { minX, maxX, minY, maxY, width, height, centerX, centerY }
 */
export const calculateViewportBounds = (positions, padding = 100) => {
    if (!positions || positions.length === 0) {
        return { minX: -400, maxX: 400, minY: -400, maxY: 400, width: 800, height: 800, centerX: 0, centerY: 0 };
    }

    const xs = positions.map(p => p.x);
    const ys = positions.map(p => p.y);

    const minX = Math.min(...xs) - padding;
    const maxX = Math.max(...xs) + padding;
    const minY = Math.min(...ys) - padding;
    const maxY = Math.max(...ys) + padding;

    return {
        minX,
        maxX,
        minY,
        maxY,
        width: maxX - minX,
        height: maxY - minY,
        centerX: (minX + maxX) / 2,
        centerY: (minY + maxY) / 2
    };
};
