import { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import StageNode from './gamification/StageNode';
import GrowingBranch from './gamification/GrowingBranch';
import TreeTrunk from './gamification/TreeTrunk';
import ConnectionNode from './gamification/ConnectionNode';
import SidePanel from './gamification/SidePanel';
import GameControls from './gamification/GameControls';
import { calculateTreeLayout } from '../utils/TreeLayout';

const ProjectStructureGame = ({ project, onClose }) => {
    const [selectedStage, setSelectedStage] = useState(null);
    const [hoveredStage, setHoveredStage] = useState(null);
    const [unlockedStages, setUnlockedStages] = useState([]);
    const [visibleBranches, setVisibleBranches] = useState([]);
    const [cameraPosition, setCameraPosition] = useState([0, 0, 16]);
    const cameraRef = useRef();

    // Calculate tree layout
    const treeLayout = calculateTreeLayout(project.stages || []);

    // Initialize with first stage unlocked
    useEffect(() => {
        if (project.stages && project.stages.length > 0) {
            setUnlockedStages([project.stages[0].id]);
            setVisibleBranches([treeLayout.branches[0]?.id].filter(Boolean));
        }
    }, [project.stages]);

    // Calculate progress percentage
    const totalStages = project.stages?.length || 0;
    const progressPercent = Math.round((unlockedStages.length / totalStages) * 100);

    // Check if a stage is unlocked
    const isStageUnlocked = (stageId) => {
        return unlockedStages.includes(stageId);
    };

    // Handle stage selection and unlocking
    const handleStageClick = (stage, stageIndex) => {
        // If locked, show lock message
        if (!isStageUnlocked(stage.id)) {
            return;
        }

        // Open side panel
        setSelectedStage(stage);

        // Unlock next stage if not already unlocked
        const nextIndex = stageIndex + 1;
        if (nextIndex < project.stages.length) {
            const nextStage = project.stages[nextIndex];
            if (!isStageUnlocked(nextStage.id)) {
                // Grow branch to next stage
                setTimeout(() => {
                    setUnlockedStages(prev => [...prev, nextStage.id]);
                    const nextBranch = treeLayout.branches[nextIndex];
                    if (nextBranch) {
                        setVisibleBranches(prev => [...prev, nextBranch.id]);
                    }
                }, 500);
            }
        }
    };

    const handleClosePanel = () => {
        setSelectedStage(null);
    };

    const handleNextStage = () => {
        if (!selectedStage || !project.stages) return;
        const currentIndex = project.stages.findIndex(s => s.id === selectedStage.id);
        if (currentIndex < project.stages.length - 1) {
            const nextStage = project.stages[currentIndex + 1];
            if (isStageUnlocked(nextStage.id)) {
                setSelectedStage(nextStage);
            }
        }
    };

    const handlePreviousStage = () => {
        if (!selectedStage || !project.stages) return;
        const currentIndex = project.stages.findIndex(s => s.id === selectedStage.id);
        if (currentIndex > 0) {
            setSelectedStage(project.stages[currentIndex - 1]);
        }
    };

    if (!project.stages) {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-white">
                <p>No structure data available for this project</p>
            </div>
        );
    }

    const currentStageIndex = selectedStage
        ? project.stages.findIndex(s => s.id === selectedStage.id)
        : -1;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            style={{
                background: 'radial-gradient(ellipse at center, #1a2a4a 0%, #0a1628 100%)'
            }}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 px-4 py-2 rounded-lg font-medium transition-all bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
                ✕ Close
            </button>

            {/* Project Title */}
            <div className="absolute top-6 left-6 z-40">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.title}
                </h2>
                <p className="text-sm md:text-base mt-1 text-gray-400">
                    Click on nodes to grow the tree
                </p>
            </div>

            {/* 3D Canvas */}
            <div className="w-full h-full">
                <Canvas shadows>
                    <Suspense fallback={null}>
                        {/* Lighting for tree atmosphere */}
                        <ambientLight intensity={0.4} />
                        <pointLight position={[10, 15, 10]} intensity={0.6} castShadow />
                        <pointLight position={[-10, 10, -10]} intensity={0.3} />
                        <spotLight
                            position={[0, 20, 0]}
                            angle={0.4}
                            intensity={0.4}
                            penumbra={1}
                            castShadow
                        />

                        {/* Camera */}
                        <PerspectiveCamera
                            ref={cameraRef}
                            makeDefault
                            position={cameraPosition}
                            fov={55}
                        />

                        {/* Tree Trunk */}
                        <TreeTrunk />

                        {/* Growing Branches */}
                        {treeLayout.branches.map((branch, index) => {
                            const isVisible = visibleBranches.includes(branch.id);
                            return (
                                <GrowingBranch
                                    key={branch.id}
                                    start={branch.start}
                                    end={branch.end}
                                    color={branch.color}
                                    thickness={index === 0 ? 0.12 : 0.08}
                                    animated={true}
                                    isVisible={isVisible}
                                    growDuration={1.2}
                                />
                            );
                        })}

                        {/* Connection Nodes (diamond junctions) */}
                        {treeLayout.connections.map((connection, index) => {
                            const relatedBranch = treeLayout.branches[index + 1];
                            const isVisible = relatedBranch && visibleBranches.includes(relatedBranch.id);
                            return (
                                <ConnectionNode
                                    key={connection.id}
                                    position={connection.position}
                                    color={connection.color}
                                    isVisible={isVisible}
                                />
                            );
                        })}

                        {/* Stage Nodes */}
                        {treeLayout.stages.map((stage, index) => {
                            const isUnlocked = isStageUnlocked(stage.id);
                            const isVisible = isUnlocked || index === 0;

                            if (!isVisible) return null;

                            return (
                                <StageNode
                                    key={stage.id}
                                    stage={stage}
                                    isSelected={selectedStage?.id === stage.id}
                                    isHovered={hoveredStage?.id === stage.id}
                                    isLocked={!isUnlocked}
                                    onClick={() => handleStageClick(stage, index)}
                                    onHover={setHoveredStage}
                                />
                            );
                        })}

                        {/* Controls */}
                        <OrbitControls
                            enablePan={true}
                            maxDistance={28}
                            minDistance={10}
                            enableDamping
                            dampingFactor={0.05}
                            target={[0, 0, 0]}
                        />
                    </Suspense>
                </Canvas>
            </div>

            {/* Game Controls - Progress Display */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                <div className="px-6 py-3 rounded-full backdrop-blur-md border bg-white/10 border-white/20 text-white">
                    <p className="text-sm font-medium">
                        🌳 Tree Growth: {unlockedStages.length} / {totalStages} stages unlocked ({progressPercent}%)
                    </p>
                </div>
            </div>

            {/* Instructions overlay */}
            {!selectedStage && unlockedStages.length < 2 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30"
                >
                    <div className="px-6 py-3 rounded-full backdrop-blur-md border bg-white/10 border-white/20 text-white">
                        <p className="text-sm font-medium">
                            🖱️ Click on the glowing sphere to grow the tree
                        </p>
                    </div>
                </motion.div>
            )}

            {/* Side Panel for stage details */}
            <SidePanel
                stage={selectedStage}
                onClose={handleClosePanel}
                onNext={handleNextStage}
                onPrevious={handlePreviousStage}
                hasNext={currentStageIndex >= 0 && currentStageIndex < project.stages.length - 1}
                hasPrevious={currentStageIndex > 0}
            />
        </motion.div>
    );
};

export default ProjectStructureGame;
