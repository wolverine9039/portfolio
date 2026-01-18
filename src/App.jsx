import { useState } from 'react';
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Journey from "./sections/Journey.jsx";
import Skills from "./sections/Skills.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import ThemeToggle from "./components/ui/ThemeToggle.jsx";

const App = () => {
    const [isDark, setIsDark] = useState(true);

    return (
        <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
            <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
                <NavBar isDark={isDark} />
                <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                <Hero isDark={isDark} />
                <Projects isDark={isDark} />
                <Journey isDark={isDark} />
                <Skills isDark={isDark} />
                <Contact isDark={isDark} />
                <Footer isDark={isDark} />
            </div>
        </div>
    );
}

export default App;