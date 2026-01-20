import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";

const NavBar = ({ isDark, setIsDark }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname === '/') {
            const element = document.querySelector(link);
            if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        } else {
            navigate('/', { state: { target: link } });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Projects", link: "#projects" },
        { name: "Journey", link: "#journey" },
        { name: "Skills", link: "#skills" },
        { name: "Contact", link: "#contact" },
    ];

    return (
        <header
            className={`fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-50 transition-all duration-500 
            ${scrolled
                    ? `top-0 ${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-lg shadow-lg border-b ${isDark ? 'border-white/10' : 'border-black/10'}`
                    : 'md:top-10 top-0 bg-transparent'
                }`}
        >
            <div className="mx-auto flex items-center justify-between max-w-7xl">
                <a
                    href="#hero"
                    className={`flex items-center gap-3 text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 
                    ${isDark ? 'text-white' : 'text-black'}`}
                >
                    <img
                        src="/images/profile1.png"
                        alt="Mayank Bisht"
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-purple-500 shadow-lg object-cover"
                    />
                    Mayank Bisht
                </a>

                <nav className="hidden lg:flex items-center gap-12">
                    {navLinks.map(({ link, name }) => (
                        <button
                            key={name}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`relative group transition-colors duration-300 text-sm font-medium
                            ${isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'}`}
                        >
                            {name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full 
                            ${isDark ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'}`} />
                        </button>
                    ))}
                </nav>

                <button
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className={`hidden lg:block px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl
                    ${isDark
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500'
                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500'
                        }`}
                >
                    Get in Touch
                </button>

                {/* Theme Toggle */}
                <div className="hidden lg:block ml-4">
                    <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} ${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-lg`}>
                <nav className="flex flex-col p-6 gap-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>Menu</span>
                        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
                    </div>
                    {navLinks.map(({ link, name }) => (
                        <button
                            key={name}
                            onClick={(e) => handleNavClick(e, link)}
                            className={`w-full py-3 border-b text-left ${isDark ? 'border-white/10 text-white' : 'border-black/10 text-black'}`}
                        >
                            {name}
                        </button>
                    ))}
                    <button
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className={`mt-2 w-full px-6 py-3 rounded-full text-center font-medium
                        ${isDark
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                            }`}
                    >
                        Get in Touch
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;