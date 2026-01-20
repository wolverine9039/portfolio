/**
 * Tree Layout Utilities - Radial Expansion from Center
 * Level 1: Circular polygon distribution (perfect)
 * Level 2+: Expand radially OUTWARD from CENTER (not from parent)
 */

/**
 * Calculate tree layout positions
 * @param {Object} rootNode - Root node of the tree
 * @param {Set} expandedNodes - Set of expanded node IDs
 * @returns {Map} Map of node ID to position data with connections
 */
export const calculateTreeLayout = (rootNode, expandedNodes) => {
    const positions = new Map();
    const connections = [];

    // Root at center
    positions.set(rootNode.id, {
        id: rootNode.id,
        x: 0,
        y: 0,
        node: rootNode,
        level: 0
    });

    /**
     * Process a node and its children recursively
     * @param {Object} node - Current node
     * @param {Object} parentPos - Parent position {x, y}
     * @param {number} level - Current depth level
     */
    const processNode = (node, parentPos, level) => {
        if (!expandedNodes.has(node.id) || !node.children) return;

        const currentPos = positions.get(node.id) || parentPos;
        const children = node.children;
        const childCount = children.length;

        children.forEach((child, index) => {
            let childX, childY;

            if (level === 1) {
                // First level: Perfect circular polygon distribution
                const radius = 280;
                const angleStep = (2 * Math.PI) / childCount;
                const startAngle = -Math.PI / 2; // Start from top
                const angle = startAngle + (index * angleStep);

                childX = currentPos.x + radius * Math.cos(angle);
                childY = currentPos.y + radius * Math.sin(angle);
            } else {
                // Deeper levels: Expand radially OUTWARD from CENTER
                const radius = 280; // Increased to 280 to prevent all collisions

                // Calculate direction from CENTER (0,0) to current node
                const directionFromCenter = Math.atan2(currentPos.y, currentPos.x);

                // Spread children in an arc around the direction away from center
                const arcSpread = Math.PI / 3; // 60 degrees total spread

                let childAngle;
                if (childCount === 1) {
                    // Single child continues outward from center
                    childAngle = directionFromCenter;
                } else {
                    // Multiple children: spread in arc around outward direction
                    const angleStep = arcSpread / (childCount - 1);
                    childAngle = directionFromCenter - (arcSpread / 2) + (index * angleStep);
                }

                childX = currentPos.x + radius * Math.cos(childAngle);
                childY = currentPos.y + radius * Math.sin(childAngle);
            }

            // Store child position
            positions.set(child.id, {
                id: child.id,
                x: childX,
                y: childY,
                node: child,
                level: level
            });

            // Create connection
            connections.push({
                id: `${node.id}-${child.id}`,
                start: { x: currentPos.x, y: currentPos.y },
                end: { x: childX, y: childY },
                color: child.color,
                delay: index * 0.1
            });

            // Recursively process this child's children
            processNode(
                child,
                { x: childX, y: childY },
                level + 1
            );
        });
    };

    // Start processing from root
    processNode(rootNode, { x: 0, y: 0 }, 1);

    return { positions, connections };
};

/**
 * Calculate bounding box for all positions
 * @param {Map} positions - Map of node positions
 * @param {number} padding - Padding around content
 * @returns {Object} ViewBox parameters
 */
export const calculateTreeViewBox = (positions, padding = 300) => {
    if (!positions || positions.size <= 1) {
        return { viewBox: '-800 -700 1600 1400' };
    }

    const allPositions = Array.from(positions.values());
    const xs = allPositions.map(p => p.x);
    const ys = allPositions.map(p => p.y);

    const minX = Math.min(...xs) - padding;
    const maxX = Math.max(...xs) + padding;
    const minY = Math.min(...ys) - padding;
    const maxY = Math.max(...ys) + padding;
    const width = maxX - minX;
    const height = maxY - minY;

    return {
        viewBox: `${minX} ${minY} ${width} ${height}`
    };
};
