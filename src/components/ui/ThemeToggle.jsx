const ThemeToggle = ({ isDark, setIsDark }) => {
    return (
        <div className="fixed right-8 top-32 z-50">
            <button
                onClick={() => setIsDark(!isDark)}
                className="relative w-16 h-16 rounded-full overflow-hidden shadow-2xl transition-all duration-500 hover:scale-110 group"
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
                        <div className="w-6 h-6 bg-white rounded-full shadow-lg animate-spin-slow" />
                        {/* Sun rays */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-0.5 h-2.5 bg-white rounded-full animate-pulse"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-14px)`,
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
                        <div className="w-6 h-6 bg-gray-100 rounded-full shadow-lg" />
                        <div className="absolute top-0.5 right-0 w-5 h-5 bg-indigo-900 rounded-full" />

                        {/* Stars */}
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                                style={{
                                    top: `${[5, -3, 2][i]}px`,
                                    left: `${[-12, 10, -8][i]}px`,
                                    animationDelay: `${i * 0.3}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-full group-active:animate-ping bg-white/30" />
            </button>

            {/* Tooltip */}
            <div className={`absolute -left-24 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                {isDark ? 'Light Mode' : 'Dark Mode'}
            </div>
        </div>
    );
};

export default ThemeToggle;