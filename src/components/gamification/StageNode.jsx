import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Sphere, Ring, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const StageNode = ({ stage, isSelected, isHovered, onClick, onHover, isLocked = false }) => {
    const meshRef = useRef();
    const ringRef = useRef();
    const borderRingRef = useRef();
    const [hovered, setHovered] = useState(false);

    // Animation
    useFrame((state) => {
        if (meshRef.current) {
            // Gentle rotation animation
            meshRef.current.rotation.y += 0.003;

            // Target scale based on selection
            let targetScale = 1;
            if (isSelected) {
                targetScale = 1.5; // Enlarge when selected
            } else if (hovered && !isLocked) {
                targetScale = 1.15; // Slight enlarge on hover
            }

            // Smooth scale transition
            meshRef.current.scale.lerp(
                new THREE.Vector3(targetScale, targetScale, targetScale),
                0.1
            );

            // Subtle pulsing for unlocked stages
            if (stage.unlocked && !isSelected && !isLocked) {
                const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
                meshRef.current.scale.multiplyScalar(pulse);
            }
        }

        // Rotate outer ring
        if (ringRef.current) {
            ringRef.current.rotation.z += 0.008;
        }

        // Counter-rotate border ring for visual interest
        if (borderRingRef.current) {
            borderRingRef.current.rotation.z -= 0.005;
        }
    });

    const handlePointerEnter = () => {
        if (!isLocked) {
            setHovered(true);
            onHover(stage);
            document.body.style.cursor = 'pointer';
        }
    };

    const handlePointerLeave = () => {
        setHovered(false);
        onHover(null);
        document.body.style.cursor = 'default';
    };

    const handleClick = () => {
        if (!isLocked) {
            onClick();
        }
    };

    const color = new THREE.Color(stage.color);
    const emissiveColor = isSelected || hovered ? color : new THREE.Color(stage.color).multiplyScalar(0.3);

    return (
        <group position={[stage.position.x, stage.position.y, stage.position.z]}>
            {/* White/colored border ring - always visible */}
            <Ring
                ref={borderRingRef}
                args={[0.52, 0.6, 32]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <meshStandardMaterial
                    color={isLocked ? '#666666' : '#ffffff'}
                    emissive={isLocked ? '#333333' : color}
                    emissiveIntensity={isLocked ? 0 : 0.2}
                    transparent
                    opacity={isLocked ? 0.3 : 0.9}
                    side={THREE.DoubleSide}
                />
            </Ring>

            {/* Main sphere */}
            <Sphere
                ref={meshRef}
                args={[0.5, 32, 32]}
                onClick={handleClick}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
            >
                <meshStandardMaterial
                    color={isLocked ? '#555555' : color}
                    emissive={isLocked ? '#222222' : emissiveColor}
                    emissiveIntensity={isLocked ? 0.1 : (isSelected ? 0.6 : (hovered ? 0.4 : 0.2))}
                    metalness={0.5}
                    roughness={isLocked ? 0.8 : 0.4}
                    transparent
                    opacity={isLocked ? 0.4 : (isSelected ? 1 : 0.85)}
                />
            </Sphere>

            {/* Outer glow ring on hover/select */}
            {(isSelected || hovered) && !isLocked && (
                <Ring
                    ref={ringRef}
                    args={[0.65, 0.75, 32]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <meshBasicMaterial
                        color={color}
                        transparent
                        opacity={0.5}
                        side={THREE.DoubleSide}
                        blending={THREE.AdditiveBlending}
                    />
                </Ring>
            )}

            {/* Small icon always visible inside sphere */}
            <Html
                center
                distanceFactor={25}
                occlude
                style={{
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            >
                <div
                    className="text-sm drop-shadow-lg"
                    style={{
                        filter: stage.unlocked ? 'none' : 'grayscale(100%)',
                        opacity: stage.unlocked ? 0.8 : 0.4
                    }}
                >
                    {stage.icon}
                </div>
            </Html>

            {/* Larger icon label with title - Show on hover */}
            {(hovered || isSelected) && (
                <Html
                    center
                    distanceFactor={15}
                    occlude
                    style={{
                        pointerEvents: 'none',
                        userSelect: 'none'
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="text-3xl drop-shadow-lg animate-fade-in"
                            style={{
                                filter: stage.unlocked ? 'none' : 'grayscale(100%)',
                                opacity: stage.unlocked ? 1 : 0.5
                            }}
                        >
                            {stage.icon}
                        </div>
                        <div
                            className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-black/80 text-white"
                            style={{
                                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
                            }}
                        >
                            {stage.title}
                        </div>
                    </div>
                </Html>
            )}

            {/* Lock icon for locked stages */}
            {!stage.unlocked && (
                <Html
                    center
                    distanceFactor={20}
                    position={[0, 0.7, 0]}
                    occlude
                    style={{
                        pointerEvents: 'none'
                    }}
                >
                    <div className="text-base opacity-70">🔒</div>
                </Html>
            )}

            {/* Glow effect for unlocked stages */}
            {!isLocked && stage.unlocked && (
                <pointLight
                    position={[0, 0, 0]}
                    intensity={isSelected ? 1.2 : (hovered ? 0.8 : 0.4)}
                    color={color}
                    distance={3}
                />
            )}

            {/* Progress indicator - Removed to prevent visual overlap */}
            {/* Completion status is already visible in the preview cards */}
        </group>
    );
};

export default StageNode;
