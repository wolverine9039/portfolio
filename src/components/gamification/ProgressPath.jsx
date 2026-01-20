import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedParticle = ({ curve, color, speed, delay, size }) => {
    const particleRef = useRef();
    const glowRef = useRef();

    useFrame((state) => {
        if (particleRef.current) {
            // Calculate position along curve (0 to 1)
            const time = state.clock.elapsedTime * speed + delay;
            const t = (time % 3) / 3; // Loop every 3 seconds

            // Get position on curve
            const position = curve.getPoint(t);
            particleRef.current.position.copy(position);

            // Update glow
            if (glowRef.current) {
                glowRef.current.position.copy(position);
                // Pulse effect
                const pulse = 1 + Math.sin(time * 3) * 0.3;
                glowRef.current.scale.setScalar(pulse);
            }
        }
    });

    return (
        <group>
            {/* Main particle */}
            <mesh ref={particleRef}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={0.8}
                    metalness={0.3}
                    roughness={0.2}
                />
            </mesh>

            {/* Glow effect */}
            <mesh ref={glowRef}>
                <sphereGeometry args={[size * 1.5, 16, 16]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.3}
                />
            </mesh>
        </group>
    );
};

const ProgressPath = ({ startPos, endPos, color, isDark }) => {
    const lineRef = useRef();

    // Create curved path
    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(startPos.x, startPos.y, startPos.z),
            new THREE.Vector3(
                (startPos.x + endPos.x) / 2,
                (startPos.y + endPos.y) / 2 + 0.5, // Arc upward
                (startPos.z + endPos.z) / 2
            ),
            new THREE.Vector3(endPos.x, endPos.y, endPos.z)
        ]);
    }, [startPos, endPos]);

    const points = curve.getPoints(50);

    // Create multiple particles with different speeds
    const particles = useMemo(() => [
        { id: 1, speed: 0.3, delay: 0, size: 0.08 },
        { id: 2, speed: 0.25, delay: 1, size: 0.06 },
        { id: 3, speed: 0.35, delay: 2, size: 0.07 },
    ], []);

    // Animate line pulsing
    useFrame((state) => {
        if (lineRef.current) {
            const opacity = 0.4 + Math.sin(state.clock.elapsedTime) * 0.1;
            lineRef.current.material.opacity = opacity;
        }
    });

    return (
        <group>
            {/* Main path line */}
            <Line
                ref={lineRef}
                points={points}
                color={color}
                lineWidth={2}
                transparent
                opacity={0.4}
            />

            {/* Thicker glow line */}
            <Line
                points={points}
                color={color}
                lineWidth={4}
                transparent
                opacity={0.1}
            />

            {/* Animated particles representing data flow */}
            {particles.map((particle) => (
                <AnimatedParticle
                    key={particle.id}
                    curve={curve}
                    color={color}
                    speed={particle.speed}
                    delay={particle.delay}
                    size={particle.size}
                />
            ))}
        </group>
    );
};

export default ProgressPath;
