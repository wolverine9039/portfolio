import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const TechnologyNode = ({ node, onClick, isHovered, parentPosition }) => {
    const meshRef = useRef();
    const glowRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Calculate absolute position relative to parent stage
    const absolutePosition = new THREE.Vector3(
        parentPosition.x + node.position.x,
        parentPosition.y + node.position.y,
        parentPosition.z + node.position.z
    );

    useFrame((state) => {
        if (meshRef.current) {
            // Gentle floating animation
            meshRef.current.rotation.y += 0.01;
            meshRef.current.position.y = absolutePosition.y + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }

        // Glow pulse
        if (glowRef.current) {
            const pulse = hovered || isHovered ? 1.3 : 1.0;
            glowRef.current.scale.setScalar(pulse);
        }
    });

    return (
        <group position={[absolutePosition.x, absolutePosition.y, absolutePosition.z]}>
            {/* Glow sphere */}
            <mesh
                ref={glowRef}
                scale={1}
            >
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshBasicMaterial
                    color={node.color}
                    transparent
                    opacity={0.2}
                />
            </mesh>

            {/* Main sphere */}
            <mesh
                ref={meshRef}
                onClick={onClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.25, 32, 32]} />
                <meshStandardMaterial
                    color={node.color}
                    emissive={node.color}
                    emissiveIntensity={hovered || isHovered ? 0.6 : 0.3}
                    metalness={0.8}
                    roughness={0.2}
                />
            </mesh>

            {/* Icon */}
            <Text
                position={[0, 0, 0.26]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {node.icon}
            </Text>

            {/* Label */}
            {(hovered || isHovered) && (
                <Text
                    position={[0, -0.5, 0]}
                    fontSize={0.12}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    outlineWidth={0.02}
                    outlineColor="#000000"
                >
                    {node.name}
                </Text>
            )}
        </group>
    );
};

export default TechnologyNode;
