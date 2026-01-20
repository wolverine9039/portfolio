import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TreeTrunk = () => {
    const trunkRef = useRef();
    const rootsRef = useRef();

    // Subtle animation - gentle sway
    useFrame((state) => {
        if (trunkRef.current) {
            trunkRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
        }
    });

    // Trunk color - dark blue-gray to match reference
    const trunkColor = '#2a3f5f';
    const rootColor = '#1a2f4f';

    return (
        <group position={[0, -5, 0]}>
            {/* Main Trunk */}
            <mesh ref={trunkRef} position={[0, 0, 0]} castShadow>
                <cylinderGeometry args={[0.4, 0.6, 6, 12]} />
                <meshStandardMaterial
                    color={trunkColor}
                    roughness={0.8}
                    metalness={0.2}
                />
            </mesh>

            {/* Trunk detail rings for texture */}
            {[0, 1.5, 3, 4.5].map((yPos, i) => (
                <mesh key={i} position={[0, yPos - 3, 0]}>
                    <torusGeometry args={[0.42, 0.03, 8, 20]} />
                    <meshStandardMaterial
                        color={trunkColor}
                        roughness={0.9}
                    />
                </mesh>
            ))}

            {/* Roots spreading at base */}
            <group ref={rootsRef} position={[0, -3.2, 0]}>
                {/* Center root */}
                <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
                    <cylinderGeometry args={[0.3, 0.15, 1, 8]} />
                    <meshStandardMaterial color={rootColor} roughness={0.9} />
                </mesh>

                {/* Spreading roots (4 directions) */}
                {[0, 90, 180, 270].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 0.8;
                    const z = Math.sin(rad) * 0.8;

                    return (
                        <group key={i} position={[x, -0.2, z]} rotation={[0.3, rad, 0]}>
                            {/* Main root branch */}
                            <mesh position={[0, -0.25, 0]}>
                                <cylinderGeometry args={[0.15, 0.08, 0.8, 6]} />
                                <meshStandardMaterial color={rootColor} roughness={0.95} />
                            </mesh>

                            {/* Root tendrils */}
                            <mesh position={[0.15, -0.4, 0]} rotation={[0, 0, 0.6]}>
                                <cylinderGeometry args={[0.06, 0.02, 0.5, 4]} />
                                <meshStandardMaterial color={rootColor} roughness={1} />
                            </mesh>
                            <mesh position={[-0.15, -0.4, 0]} rotation={[0, 0, -0.6]}>
                                <cylinderGeometry args={[0.06, 0.02, 0.5, 4]} />
                                <meshStandardMaterial color={rootColor} roughness={1} />
                            </mesh>
                        </group>
                    );
                })}

                {/* Ground plane suggestion - subtle circular platform */}
                <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <circleGeometry args={[2.5, 32]} />
                    <meshStandardMaterial
                        color={rootColor}
                        roughness={0.95}
                        opacity={0.3}
                        transparent
                    />
                </mesh>
            </group>

            {/* Subtle glow at base */}
            <pointLight
                position={[0, -2, 0]}
                intensity={0.3}
                color={'#6a8fb5'}
                distance={5}
            />
        </group>
    );
};

export default TreeTrunk;
