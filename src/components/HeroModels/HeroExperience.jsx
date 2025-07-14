import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {Room} from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";

const HeroExperience = () => {
    const isTablet=useMediaQuery({query:'(max-width: 1024px)'});
    const isMobile=useMediaQuery({query:'(max-width: 768px)'});

    return (
        <Canvas camera={{position:[50,10,15], fov:30}}>


            <OrbitControls
                enablePan={false} // Prevents panning of the scene
                enableZoom={!isTablet} // Disables zoom on tablets

                maxDistance={20} // Maximum distance for zooming out
                minDistance={5} // Minimum distance for zooming in
                minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
                maxPolarAngle={Math.PI / 2} />
                <HeroLights/>
            <Particles count={500}/>
                <group
                scale={isMobile ? 0.7 : 1}
                position={[0,-3.5,0]}
                rotation={[0,Math.PI/4,0]}
                >
                    <Room/>
                </group>

        </Canvas>
    )
}
export default HeroExperience
