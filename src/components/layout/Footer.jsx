const Footer = ({ isDark }) => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Quick: [
            { name: "Home", href: "#hero" },
            { name: "Projects", href: "#projects" },
            { name: "Journey", href: "#journey" },
            { name: "Skills", href: "#skills" }
        ],
        Social: [
            { name: "GitHub", href: "https://github.com/wolverine9039" },
            { name: "LinkedIn", href: "https://www.linkedin.com/in/mayank-bisht-51069524b" },
            { name: "Email", href: "mailto:mayankbisht939@gmail.com" }
        ],
        Legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookie Policy", href: "#" }
        ]
    };

    return (
        <footer className={`py-8 md:py-12 px-4 md:px-20 border-t ${isDark ? 'bg-black border-white/10' : 'bg-white border-black/10'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                            Mayank Bisht
                        </h3>
                        <p className={`text-xs md:text-sm mb-3 md:mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Software Developer & MCA Student specializing in Android, Java, and Python development. Building secure and user-centric applications.
                        </p>
                        <div className={`inline-block px-2.5 py-1 rounded-full text-[10px] md:text-xs font-medium ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                            ✓ Available for Work
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className={`font-semibold mb-2 md:mb-4 text-sm md:text-base ${isDark ? 'text-white' : 'text-black'}`}>
                                {category} Links
                            </h4>
                            <ul className="space-y-1.5 md:space-y-2">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className={`text-xs md:text-sm transition-colors duration-300 hover:underline
                                            ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className={`pt-6 md:pt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
                        <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            © {currentYear} Mayank Bisht. All rights reserved.
                        </p>
                        <p className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Made with <span className="text-red-500">❤️</span> in India
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;