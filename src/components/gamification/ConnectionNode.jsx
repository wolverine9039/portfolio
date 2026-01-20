import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ConnectionNode = ({ position, color = '#c9b18a', isVisible = true }) => {
    const nodeRef = useRef();

    // Subtle floating animation
    useFrame((state) => {
        if (nodeRef.current) {
            nodeRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2) * 0.05;
            nodeRef.current.rotation.y = state.clock.elapsedTime * 0.5;
        }
    });

    if (!isVisible) return null;

    return (
        <group
            ref={nodeRef}
            position={[position.x, position.y, position.z]}
        >
            {/* Diamond/Rhombus shape - rotated octahedron */}
            <mesh rotation={[0, Math.PI / 4, 0]}>
                <octahedronGeometry args={[0.15, 0]} />
                <meshStandardMaterial
                    color={color}
                    roughness={0.3}
                    metalness={0.6}
                    emissive={color}
                    emissiveIntensity={0.3}
                />
            </mesh>

            {/* Outer glow ring */}
            <mesh rotation={[0, Math.PI / 4, 0]}>
                <octahedronGeometry args={[0.2, 0]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.2}
                    blending={THREE.AdditiveBlending}
                />
            </mesh>

            {/* Point light for glow effect */}
            <pointLight
                position={[0, 0, 0]}
                intensity={0.3}
                color={color}
                distance={1.5}
            />
        </group>
    );
};

export default ConnectionNode;
