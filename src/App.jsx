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
import ThemeToggle from "./components/ui/ThemeToggle.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";

const Home = ({ isDark }) => {
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
            <Hero isDark={isDark} />
            <Projects isDark={isDark} />
            <Journey isDark={isDark} />
            <Skills isDark={isDark} />
            <Contact isDark={isDark} />
        </>
    );
};

const App = () => {
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();

    return (
        <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
            <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
                <NavBar isDark={isDark} setIsDark={setIsDark} />
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home isDark={isDark} />} />
                        <Route path="/project/:id" element={<ProjectDetails isDark={isDark} />} />
                    </Routes>
                </AnimatePresence>
                <Footer isDark={isDark} />
            </div>
        </div>
    );
}

export default App;