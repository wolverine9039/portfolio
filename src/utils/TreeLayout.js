/**
 * TreeLayout - Calculates positions for a symmetric skill tree structure
 * Creates an organic tree layout with trunk, branches spreading from center
 */

/**
 * Calculate tree positions for stages
 * @param {Array} stages - Array of stage objects
 * @returns {Object} Layout data with positions, branch paths, and connection nodes
 */
export const calculateTreeLayout = (stages) => {
    if (!stages || stages.length === 0) return { stages: [], branches: [], connections: [] };

    const layout = {
        stages: [],
        branches: [],
        connections: [],
        trunk: {
            start: { x: 0, y: -8, z: 0 },
            end: { x: 0, y: -2, z: 0 },
        }
    };

    const stageCount = stages.length;

    // Define tree levels - how stages are distributed vertically
    const levels = [
        { y: -2, spread: 0, count: 1 },      // Level 0: Root (Planning)
        { y: 0, spread: 8, count: 2 },       // Level 1: Left (Design) and Right branches
        { y: 2.5, spread: 4, count: 2 },     // Level 2: Upper branches
        { y: 4, spread: 0, count: 1 },       // Level 3: Top (if 5+ stages)
    ];

    // Assign stages to positions based on count
    let stagePositions = [];

    if (stageCount === 3) {
        // Triangle: center bottom, left-right top
        stagePositions = [
            { x: 0, y: -2, z: 0 },      // Planning (center)
            { x: -6, y: 1, z: -1 },     // Design (left)
            { x: 6, y: 1, z: -1 },      // Development (right)
        ];
    } else if (stageCount === 4) {
        // Diamond: center, left, right, top
        stagePositions = [
            { x: 0, y: -2, z: 0 },      // Planning
            { x: -6, y: 0.5, z: -1 },   // Design
            { x: 6, y: 0.5, z: -1 },    // Development
            { x: 0, y: 3, z: 0 },       // Testing
        ];
    } else if (stageCount === 5) {
        // Pentagon-like: center, 2 left levels, 2 right levels
        stagePositions = [
            { x: 0, y: -2, z: 0 },      // Planning (root)
            { x: -5, y: 0, z: -1 },     // Design (left lower)
            { x: 0, y: 1, z: 0 },       // Development (center)
            { x: 5, y: 0, z: -1 },      // Testing (right lower)
            { x: 0, y: 3.5, z: 0 },     // Deployment (top)
        ];
    } else if (stageCount >= 6) {
        // Organic spread - more complex tree
        const angleStep = (Math.PI * 1.2) / (stageCount - 1); // 216 degrees spread
        const startAngle = -Math.PI * 0.6; // Start from -108 degrees

        stagePositions = stages.map((_, index) => {
            if (index === 0) {
                return { x: 0, y: -2, z: 0 }; // Root always at center bottom
            }

            const angle = startAngle + (angleStep * (index - 1));
            const radius = 5 + (index % 2) * 1.5; // Vary radius for depth
            const height = -1 + (index * 1.2); // Gradually increase height

            return {
                x: Math.cos(angle) * radius,
                y: Math.min(height, 4), // Cap max height
                z: Math.sin(angle) * 2 - 1, // Add depth variation
            };
        });
    } else {
        // Fallback for 1-2 stages
        stagePositions = stages.map((_, index) => ({
            x: 0,
            y: -2 + (index * 3),
            z: 0,
        }));
    }

    // Assign calculated positions to stages
    layout.stages = stages.map((stage, index) => ({
        ...stage,
        position: stagePositions[index] || { x: 0, y: index * 2, z: 0 },
    }));

    // Calculate branch paths from trunk to each stage
    layout.branches = layout.stages.map((stage, index) => {
        if (index === 0) {
            // First stage connects directly to trunk
            return {
                id: `trunk-to-${stage.id}`,
                start: layout.trunk.end,
                end: stage.position,
                color: stage.color || '#8B7355',
                animated: true,
            };
        }

        // Subsequent stages branch from previous or from a midpoint
        const prevStage = layout.stages[index - 1];

        // Create a connection point (junction node)
        const midX = (prevStage.position.x + stage.position.x) / 2;
        const midY = (prevStage.position.y + stage.position.y) / 2;
        const midZ = (prevStage.position.z + stage.position.z) / 2;

        const connectionPoint = { x: midX, y: midY, z: midZ };

        // Add connection node (diamond at junction)
        layout.connections.push({
            id: `connection-${index}`,
            position: connectionPoint,
            color: stage.color || '#8B7355',
        });

        return {
            id: `branch-to-${stage.id}`,
            start: prevStage.position,
            end: stage.position,
            color: stage.color || '#8B7355',
            animated: true,
            controlPoint: connectionPoint, // For curved branches
        };
    });

    return layout;
};

/**
 * Calculate a smooth curved path between two points
 * @param {Object} start - Start position {x, y, z}
 * @param {Object} end - End position {x, y, z}
 * @param {Object} control - Optional control point for bezier curve
 * @returns {Array} Array of points forming the curve
 */
export const calculateBranchCurve = (start, end, control = null) => {
    const points = [];
    const segments = 20;

    for (let i = 0; i <= segments; i++) {
        const t = i / segments;

        if (control) {
            // Quadratic bezier curve
            const x = (1 - t) ** 2 * start.x + 2 * (1 - t) * t * control.x + t ** 2 * end.x;
            const y = (1 - t) ** 2 * start.y + 2 * (1 - t) * t * control.y + t ** 2 * end.y;
            const z = (1 - t) ** 2 * start.z + 2 * (1 - t) * t * control.z + t ** 2 * end.z;
            points.push([x, y, z]);
        } else {
            // Linear interpolation
            const x = start.x + (end.x - start.x) * t;
            const y = start.y + (end.y - start.y) * t;
            const z = start.z + (end.z - start.z) * t;
            points.push([x, y, z]);
        }
    }

    return points;
};

/**
 * Get branch thickness based on position in tree (thicker near trunk)
 * @param {number} index - Stage index
 * @param {number} total - Total stages
 * @returns {number} Thickness value
 */
export const getBranchThickness = (index, total) => {
    if (index === 0) return 0.15; // Thickest for trunk connection
    const ratio = 1 - (index / total);
    return 0.08 + (ratio * 0.07); // Range: 0.08 to 0.15
};
