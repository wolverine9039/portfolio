import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Debug: Check if env vars are present (remove after debugging)
            console.log('EmailJS Debug:', {
                serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? 'present' : 'MISSING',
                templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? 'present' : 'MISSING',
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? 'present' : 'MISSING',
            });

            // Send email using EmailJS
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Mayank Bisht', // Your name
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log('Email sent successfully:', result.text);
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Email sending failed:', error);
            setIsSubmitting(false);
            setSubmitStatus('error');

            // Clear error message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    const socialLinks = [
        {
            name: "GitHub",
            icon: "💻",
            url: "https://github.com/wolverine9039",
            color: "hover:bg-purple-500/20"
        },
        {
            name: "LinkedIn",
            icon: "💼",
            url: "https://www.linkedin.com/in/mayank-bisht-51069524b",
            color: "hover:bg-blue-500/20"
        },
        {
            name: "Email",
            icon: "📧",
            url: "mailto:mayankbisht@buildwithmayank.tech",
            color: "hover:bg-pink-500/20"
        },
        {
            name: "Phone",
            icon: "📱",
            url: "tel:+916397590254",
            color: "hover:bg-green-500/20"
        }
    ];

    return (
        <section id="contact" className="py-12 md:py-20 px-4 md:px-20 bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-10 md:mb-16 text-center">
                    <h2 className="text-3xl md:text-6xl font-bold mb-3 md:mb-4 text-white">
                        Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-sm md:text-xl text-gray-400">
                        Have a project in mind? Let's make it happen!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                    {/* Left: Contact Form */}
                    <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-gray-900/50 border border-white/10 backdrop-blur-sm">
                        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {/* Name Input */}
                            <div>
                                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm md:text-base bg-gray-800 text-white border border-white/10 focus:bg-gray-700"
                                    placeholder="John Doe"
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none text-sm md:text-base bg-gray-800 text-white border border-white/10 focus:bg-gray-700"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label className="block text-xs md:text-sm font-medium mb-1.5 md:mb-2 text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 outline-none resize-none text-sm md:text-base bg-gray-800 text-white border border-white/10 focus:bg-gray-700"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3 md:py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] md:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-xl"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Message 🚀'
                                )}
                            </button>

                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <div className="p-3 md:p-4 rounded-lg bg-green-500/20 text-green-400 text-center animate-fade-in text-sm md:text-base">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <div className="p-3 md:p-4 rounded-lg bg-red-500/20 text-red-400 text-center animate-fade-in text-sm md:text-base">
                                    ✗ Failed to send message. Please try again or contact me directly via email.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Right: Contact Info & Social Links */}
                    <div className="space-y-4 md:space-y-8">
                        {/* Contact Info Card */}
                        <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
                                Get in Touch
                            </h3>

                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="p-2 md:p-3 rounded-lg bg-purple-500/20">
                                        <span className="text-xl md:text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm md:text-base text-white">Location</p>
                                        <p className="text-xs md:text-sm text-gray-400">Lane-3, Turner Road, Dehradun, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="p-2 md:p-3 rounded-lg bg-blue-500/20">
                                        <span className="text-xl md:text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm md:text-base text-white">Email</p>
                                        <p className="text-xs md:text-sm text-gray-400 break-all">mayankbisht@buildwithmayank.tech</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className="p-2 md:p-3 rounded-lg bg-green-500/20">
                                        <span className="text-xl md:text-2xl">📱</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm md:text-base text-white">Phone</p>
                                        <p className="text-xs md:text-sm text-gray-400">+91 6397590254</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-gray-900/50 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
                                Connect on Social
                            </h3>

                            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 transform hover:scale-105 text-center
                                        bg-gray-800 border border-white/10
                                        ${social.color}`}
                                    >
                                        <div className="text-2xl md:text-3xl mb-0.5 md:mb-2">{social.icon}</div>
                                        <p className="text-[10px] md:text-sm font-medium text-white">
                                            {social.name}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Badge */}
                        <div className="p-4 md:p-6 rounded-xl md:rounded-2xl text-center bg-green-500/20 border border-green-500/30">
                            <div className="flex items-center justify-center gap-2 mb-1 md:mb-2">
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                                <span className="font-bold text-sm md:text-base text-green-400">
                                    Available for Freelance
                                </span>
                            </div>
                            <p className="text-xs md:text-sm text-gray-400">
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