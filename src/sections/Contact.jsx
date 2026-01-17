import { useState } from 'react';

const Contact = ({ isDark }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => setSubmitStatus(null), 3000);
        }, 2000);
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: "💻",
            url: "https://github.com/wolverine9039",
            color: isDark ? "hover:bg-purple-500/20" : "hover:bg-purple-100"
        },
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://www.linkedin.com/in/mayank-bisht-51069524b",
            color: isDark ? "hover:bg-blue-500/20" : "hover:bg-blue-100"
        },
        {
            name: "Email",
            icon: "📧",
            url: "mailto:mayankbisht939@gmail.com",
            color: isDark ? "hover:bg-pink-500/20" : "hover:bg-pink-100"
        },
        {
            name: "Phone",
            icon: "📱",
            url: "tel:+916397902354",
            color: isDark ? "hover:bg-green-500/20" : "hover:bg-green-100"
        }
    ];

    return (
        <section id="contact" className={`py-20 px-5 md:px-20 ${isDark ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                        Let's <span className={`bg-gradient-to-r ${isDark ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>Connect</span>
                    </h2>
                    <p className={`text-lg md:text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        Have a project in mind? Let's make it happen!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Contact Form */}
                    <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900/50 border border-white/10' : 'bg-white border border-black/10'} backdrop-blur-sm`}>
                        <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none
                                    ${isDark
                                            ? 'bg-gray-800 text-white border border-white/10 focus:bg-gray-700'
                                            : 'bg-gray-50 text-black border border-black/10 focus:bg-white'
                                        }`}
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none
                                    ${isDark
                                            ? 'bg-gray-800 text-white border border-white/10 focus:bg-gray-700'
                                            : 'bg-gray-50 text-black border border-black/10 focus:bg-white'
                                        }`}
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none
                                    ${isDark
                                            ? 'bg-gray-800 text-white border border-white/10 focus:bg-gray-700'
                                            : 'bg-gray-50 text-black border border-black/10 focus:bg-white'
                                        }`}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                                ${isDark
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white'
                                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                                    } shadow-xl`}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message 🚀'
                                )}
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className={`p-4 rounded-lg ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'} text-center animate-fade-in`}>
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Right: Contact Info & Social Links */}
                    <div className="space-y-8">
                        {/* Contact Info Card */}
                        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10' : 'bg-gradient-to-br from-purple-50 to-pink-50 border border-black/10'} backdrop-blur-sm`}>
                            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                                Get in Touch
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${isDark ? 'bg-purple-500/20' : 'bg-purple-100'}`}>
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>Location</p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Lane-3, Turner Road, Dehradun, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-500/20' : 'bg-blue-100'}`}>
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>Email</p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>mayankbisht939@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-lg ${isDark ? 'bg-green-500/20' : 'bg-green-100'}`}>
                                        <span className="text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <p className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>Phone</p>
                                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>+91 6397902354</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-900/50 border border-white/10' : 'bg-white border border-black/10'} backdrop-blur-sm`}>
                            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
                                Connect on Social
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 text-center
                                        ${isDark ? 'bg-gray-800 border border-white/10' : 'bg-gray-50 border border-black/10'}
                                        ${social.color}`}
                                    >
                                        <div className="text-3xl mb-2">{social.icon}</div>
                                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                                            {social.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className={`p-6 rounded-2xl text-center ${isDark ? 'bg-green-500/20 border border-green-500/30' : 'bg-green-50 border border-green-200'}`}>
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                                    Available for Freelance
                                </span>
                            </div>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                Open to new opportunities and collaborations
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;