import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const cipherRef = useRef(null);
    const payrollRef = useRef(null);
    const recipeRef = useRef(null);
    const navigate = useNavigate();

    const handleProjectClick = (id) => {
        navigate(`/project/${id}`);
    };

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [cipherRef.current, payrollRef.current, recipeRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={cipherRef} className="first-project-wrapper cursor-pointer" onClick={() => handleProjectClick(1)}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Cipher Shield App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Secure File Encryption & Decryption with Cipher Shield
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                An Android app built with Java featuring AES-RSA hybrid encryption
                                and Huffman compression for secure file protection.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project cursor-pointer" ref={payrollRef} onClick={() => handleProjectClick(2)}>
                            <div className="image-wrapper bg-[#E8F4FD]">
                                <img
                                    src="/images/project2.png"
                                    alt="Calorix - AI Fitness Tracker"
                                />
                            </div>
                            <h2>Calorix - AI Fitness & Nutrition Tracker</h2>
                        </div>

                        <div className="project cursor-pointer" ref={recipeRef} onClick={() => handleProjectClick(3)}>
                            <div className="image-wrapper bg-[#E8F5E9]">
                                <img src="/images/project3.png" alt="AI Recipe Generator" />
                            </div>
                            <h2>AI Recipe Generator - LLM Powered</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;