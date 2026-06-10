import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Download } from 'lucide-react';
import { personalInfo } from '../data/content';
import { useRef } from 'react';

function ProfileImage() {
    return (
        <div className="relative w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
            <motion.div
                className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full opacity-50 blur-2xl"
                style={{
                    background:
                        'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                }}
                animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360] }}
                transition={{
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                    rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                }}
            />

            <motion.div
                className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full opacity-40 blur-xl"
                style={{
                    background:
                        'conic-gradient(from 180deg, #06b6d4, #8b5cf6, #6366f1, #06b6d4)',
                }}
                animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                transition={{
                    scale: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 },
                    rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                }}
            />

            <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-2 ring-white/10 z-10">
                <img
                    src="/HARSH_PHOTO.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-3 right-3 z-10 status-dot ring-4 ring-background" />
        </div>
    );
}

export default function Hero() {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
        }
    };

    const rotateX = useTransform(y, [-300, 300], [5, -5]);
    const rotateY = useTransform(x, [-300, 300], [-5, 5]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    const socialLinks = [
        { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
        { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-20 relative overflow-hidden mesh-bg"
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            <div className="glow-orb w-[600px] h-[600px] bg-accent/20 top-[-200px] left-[-200px] animate-pulse-glow" />
            <div
                className="glow-orb w-[500px] h-[500px] bg-violet-500/15 bottom-[-100px] right-[-100px] animate-pulse-glow"
                style={{ animationDelay: '1s' }}
            />
            <div
                className="glow-orb w-[300px] h-[300px] bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
                style={{ animationDelay: '2s' }}
            />

            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container-wide relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
                        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                        className="flex-shrink-0 perspective-1000"
                    >
                        <ProfileImage />
                    </motion.div>

                    <div className="flex-1 text-center lg:text-left max-w-3xl">
                        <motion.div
                            custom={0}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6"
                        >
                            <span className="text-small font-mono text-muted tracking-wide">
                                {personalInfo.name}
                            </span>
                            <span className="hidden sm:inline text-muted/40">·</span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                                <Sparkles size={12} className="text-accent-light" />
                                <span className="text-small font-medium text-accent-light">
                                    Open to opportunities
                                </span>
                            </span>
                        </motion.div>

                        <motion.h1
                            custom={1}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-headline sm:text-display md:text-display-lg text-gradient mb-6 text-balance tracking-tight"
                        >
                            {personalInfo.headline}
                        </motion.h1>

                        <motion.p
                            custom={2}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="text-body lg:text-body-lg text-muted leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 tracking-normal"
                        >
                            {personalInfo.bio}
                        </motion.p>

                        <motion.div
                            custom={3}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
                        >
                            <button
                                onClick={scrollToProjects}
                                className="btn btn-lg btn-primary btn-shimmer"
                            >
                                View Projects
                                <ArrowDown size={18} />
                            </button>
                            <a
                                href="/HARSH%20SHARMA%20-Resume.pdf"
                                download="Harsh_Sharma_Resume.pdf"
                                className="btn btn-lg btn-secondary group hover:-translate-y-0.5 transition-transform duration-300"
                            >
                                <Download size={18} className="group-hover:animate-bounce" />
                                Resume
                            </a>
                        </motion.div>

                        <motion.div
                            custom={4}
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            className="flex items-center gap-3 justify-center lg:justify-start"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.url}
                                    target={social.label !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="icon-btn"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
                >
                    <motion.div className="w-1 h-2 bg-accent rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
