import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Journey from "./sections/Journey.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";


const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.target) {
            const element = document.querySelector(location.state.target);
            if (element) {
                setTimeout(() => {
                    const yOffset = -80;
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <Journey />
            <Contact />
        </>
    );
};

const App = () => {
    const location = useLocation();

    return (
        <div className="dark transition-colors duration-500">
            <div className="bg-black text-white min-h-screen">
                <NavBar />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/project/:id" element={<ProjectDetails />} />
                    </Routes>
                </AnimatePresence>
                <Footer />
            </div>
        </div>
    );
}

export default App;