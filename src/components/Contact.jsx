import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/content';
import { useInView } from '../hooks/useInView';

export default function Contact() {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.1 });
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleMouseMove = (e) => {
        const card = formRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        if (status.message) setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name.trim()) return setStatus({ type: 'error', message: 'Name is required' });
        if (!validateEmail(formData.email)) return setStatus({ type: 'error', message: 'Valid email required' });
        if (!formData.message.trim()) return setStatus({ type: 'error', message: 'Message is required' });

        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent! I\'ll respond soon.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const socialLinks = [
        { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
        { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: Twitter, url: personalInfo.social.twitter, label: 'Twitter' },
    ];

    return (
        <section id="contact" className="section relative" ref={ref}>
            {/* Background Accents */}
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 glow-orb bg-accent/10 blur-[120px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">Contact</span>
                    <h2 className="text-headline md:text-display text-foreground mb-4">Let's Connect</h2>
                    <p className="text-body text-muted max-w-lg mx-auto">
                        Open to opportunities and interesting conversations. Feel free to reach out.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
                >
                    {/* Info Cards */}
                    <div className="lg:col-span-2 space-y-4">
                        <motion.div variants={fadeUp} className="glass-card">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                                    <Mail size={20} className="text-accent-light" />
                                </div>
                                <div>
                                    <p className="text-small text-muted mb-0.5">Email</p>
                                    <a href={`mailto:${personalInfo.email}`} className="text-caption text-foreground hover:text-accent-light transition-colors font-medium">
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="glass-card">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-accent/10 border border-accent/20">
                                    <MapPin size={20} className="text-accent-light" />
                                </div>
                                <div>
                                    <p className="text-small text-muted mb-0.5">Location</p>
                                    <p className="text-caption text-foreground font-medium">{personalInfo.location}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} className="glass-card">
                            <p className="text-small text-muted mb-4">Connect with me</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon-btn"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Form */}
                    <motion.form
                        variants={fadeUp}
                        onSubmit={handleSubmit}
                        ref={formRef}
                        onMouseMove={handleMouseMove}
                        className="lg:col-span-3 glass-card spotlight-card space-y-5"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="text-small font-medium text-foreground block mb-2">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="text-small font-medium text-foreground block mb-2">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="text-small font-medium text-foreground block mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="input resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        {status.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-center gap-3 p-4 rounded-xl text-caption font-medium ${status.type === 'success'
                                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                                    : 'text-red-400 bg-red-500/10 border border-red-500/20'
                                    }`}
                            >
                                {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                {status.message}
                            </motion.div>
                        )}

                        <button type="submit" disabled={isSubmitting} className="btn btn-lg btn-primary btn-shimmer w-full">
                            {isSubmitting ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}
