const ThemeToggle = ({ isDark, setIsDark, className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsDark(!isDark)}
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg transition-all duration-500 hover:scale-110 group"
                aria-label="Toggle theme"
            >
                {/* Animated Background */}
                <div className={`absolute inset-0 transition-all duration-700 ${isDark ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900' : 'bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-400'}`}>
                    {/* Animated glow effect */}
                    <div className={`absolute inset-0 ${isDark ? 'opacity-50' : 'opacity-70'}`}>
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                </div>

                {/* Sun Icon */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 
                    ${isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                >
                    <div className="relative">
                        {/* Sun center */}
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-white rounded-full shadow-lg animate-spin-slow" />
                        {/* Sun rays */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-0.5 h-1.5 md:h-2 bg-white rounded-full animate-pulse"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-10px)`,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Moon Icon */}
                <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 
                    ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'}`}
                >
                    <div className="relative">
                        {/* Moon */}
                        <div className="w-4 h-4 md:w-5 md:h-5 bg-gray-100 rounded-full shadow-lg" />
                        <div className="absolute top-0.5 right-0 w-3 h-3 md:w-4 md:h-4 bg-indigo-900 rounded-full" />

                        {/* Stars */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-white rounded-full animate-twinkle"
                                style={{
                                    top: `${[3, -2, 1][i]}px`,
                                    left: `${[-8, 6, -5][i]}px`,
                                    animationDelay: `${i * 0.3}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-full group-active:animate-ping bg-white/30" />
            </button>
        </div>
    );
};

export default ThemeToggle;