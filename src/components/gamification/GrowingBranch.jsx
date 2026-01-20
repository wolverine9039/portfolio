import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GrowingBranch = ({
    start,
    end,
    color = '#c9b18a',
    thickness = 0.1,
    animated = true,
    isVisible = true,
    growDuration = 1.5,
    onGrowComplete,
}) => {
    const branchRef = useRef();
    const [growProgress, setGrowProgress] = useState(animated ? 0 : 1);
    const [isGrowing, setIsGrowing] = useState(animated);

    // Calculate curve points using quadratic bezier
    const curvePoints = useMemo(() => {
        const points = [];
        const segments = 30;

        // Control point for curve (creates organic bend)
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const dz = end.z - start.z;

        // Control point positioned to create natural curve
        const controlPoint = {
            x: start.x + dx * 0.5 + (Math.random() - 0.5) * 0.5,
            y: start.y + dy * 0.5 + Math.abs(dy) * 0.2,
            z: start.z + dz * 0.5,
        };

        for (let i = 0; i <= segments; i++) {
            const t = i / segments;

            // Quadratic bezier formula
            const x = Math.pow(1 - t, 2) * start.x +
                2 * (1 - t) * t * controlPoint.x +
                Math.pow(t, 2) * end.x;

            const y = Math.pow(1 - t, 2) * start.y +
                2 * (1 - t) * t * controlPoint.y +
                Math.pow(t, 2) * end.y;

            const z = Math.pow(1 - t, 2) * start.z +
                2 * (1 - t) * t * controlPoint.z +
                Math.pow(t, 2) * end.z;

            points.push(new THREE.Vector3(x, y, z));
        }

        return points;
    }, [start, end]);

    // Create tube geometry from curve
    const geometry = useMemo(() => {
        const curve = new THREE.CatmullRomCurve3(curvePoints);
        return new THREE.TubeGeometry(curve, 30, thickness, 8, false);
    }, [curvePoints, thickness]);

    // Animate growth
    useEffect(() => {
        if (animated && isVisible && isGrowing) {
            let startTime = null;
            let animationId;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / (growDuration * 1000), 1);

                setGrowProgress(progress);

                if (progress < 1) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    setIsGrowing(false);
                    if (onGrowComplete) onGrowComplete();
                }
            };

            animationId = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationId);
        }
    }, [animated, isVisible, isGrowing, growDuration, onGrowComplete]);

    // Update geometry scale for growth effect
    useFrame(() => {
        if (branchRef.current && animated) {
            branchRef.current.scale.x = growProgress;
            branchRef.current.scale.y = growProgress;
            branchRef.current.scale.z = growProgress;
        }
    });

    if (!isVisible) return null;

    return (
        <group>
            <mesh
                ref={branchRef}
                geometry={geometry}
            >
                <meshStandardMaterial
                    color={color}
                    roughness={0.6}
                    metalness={0.2}
                    emissive={color}
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Glow effect along branch */}
            <mesh
                geometry={geometry}
            >
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.15 * growProgress}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* End point light for growing tip effect */}
            {isGrowing && growProgress < 1 && (
                <pointLight
                    position={[
                        start.x + (end.x - start.x) * growProgress,
                        start.y + (end.y - start.y) * growProgress,
                        start.z + (end.z - start.z) * growProgress,
                    ]}
                    intensity={0.5}
                    color={color}
                    distance={2}
                />
            )}
        </group>
    );
};

export default GrowingBranch;
