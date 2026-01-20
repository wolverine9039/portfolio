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

    // Helper to process children
    const processNode = (nodeId, x, y, angleStart, angleEnd, level) => {
        if (!expandedNodes.has(nodeId)) return;

        const parentPos = positions.get(nodeId);
        if (!parentPos || !parentPos.node.children) return;

        const children = parentPos.node.children;
        const count = children.length;

        // Spread children in a fan or full circle depending on level
        const angleStep = (angleEnd - angleStart) / count;

        children.forEach((child, index) => {
            const angle = angleStart + angleStep * index + angleStep / 2;

            // Custom spacing for specific nodes
            let distance = 150 + level * 50; // Base distance

            // Increase distance specifically for DevOps children to give them more room
            if (nodeId === 'devops') {
                distance = 220 + level * 50; // Significantly larger radius for DevOps
            }

            const childX = x + Math.cos(angle) * distance;
            const childY = y + Math.sin(angle) * distance;

            positions.set(child.id, {
                id: child.id,
                x: childX,
                y: childY,
                node: child,
                level: level + 1
            });

            connections.push({
                id: `${nodeId}-${child.id}`,
                start: { x, y },
                end: { x: childX, y: childY },
                color: child.color,
                delay: index * 0.1
            });

            processNode(child.id, childX, childY, angle - Math.PI / 4, angle + Math.PI / 4, level + 1);
        });
    };

    // Initial call for root's children (full circle availability)
    processNode(rootNode.id, 0, 0, 0, Math.PI * 2, 0);

    return { positions, connections };
};

export const calculateTreeViewBox = (positions) => {
    if (positions.size === 0) return { viewBox: '-600 -500 1200 1000' };

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    positions.forEach(pos => {
        minX = Math.min(minX, pos.x);
        minY = Math.min(minY, pos.y);
        maxX = Math.max(maxX, pos.x);
        maxY = Math.max(maxY, pos.y);
    });

    const padding = 200;
    const width = maxX - minX + padding * 2;
    const height = maxY - minY + padding * 2;

    return { viewBox: `${minX - padding} ${minY - padding} ${width} ${height}` };
};
