import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { experience } from '../data/content';
import { X, Briefcase, AlertTriangle, Layers } from 'lucide-react';

/* ── Experience Modal ─────────────────────────────────────────────── */
function ExperienceModal({ item, layoutId, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const techStack = item.detailedTech || item.technologies || [];

    return (
        <>
            {/* Backdrop */}
            <motion.div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                    layoutId={layoutId}
                    className="glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.3) transparent' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="sticky top-0 float-right z-10 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        aria-label="Close modal"
                    >
                        <X size={22} />
                    </button>

                    <div className="p-2 md:p-4 space-y-6">
                        {/* Header */}
                        <div>
                            <span className="text-small text-accent-light font-medium">{item.company}</span>
                            <h2 className="text-headline md:text-display text-gradient mb-1">{item.position}</h2>
                            <span className="text-caption text-muted font-mono">{item.duration}</span>
                        </div>

                        {/* Full Description */}
                        <p className="text-body text-muted leading-relaxed">
                            {item.longDescription || item.description}
                        </p>

                        {/* Responsibilities */}
                        {item.responsibilities && item.responsibilities.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Briefcase size={18} className="text-accent-light" />
                                    <h3 className="text-title text-foreground">Key Contributions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {item.responsibilities.map((resp, j) => (
                                        <li key={j} className="flex items-start gap-3 text-caption text-muted">
                                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full mt-2 flex-shrink-0" />
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Challenges */}
                        {item.challenges && item.challenges.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle size={18} className="text-amber-400" />
                                    <h3 className="text-title text-foreground">Challenges Tackled</h3>
                                </div>
                                <ul className="space-y-3">
                                    {item.challenges.map((challenge, j) => (
                                        <li key={j} className="flex items-start gap-3 text-caption text-muted">
                                            <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-small text-accent-light font-mono flex-shrink-0 mt-0.5">
                                                {j + 1}
                                            </span>
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {techStack.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Layers size={18} className="text-cyan-400" />
                                    <h3 className="text-title text-foreground">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, k) => (
                                        <span key={k} className="tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
}

/* ── Experience Card ──────────────────────────────────────────────── */
function ExperienceCard({ item, index, onClick, layoutId, totalCount }) {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
    };

    return (
        <div className="relative">
            {/* Timeline Line */}
            {index < totalCount - 1 && (
                <div className="absolute left-[11px] top-12 w-px h-[calc(100%+2rem)] bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />
            )}

            <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 mt-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                </div>

                {/* Card */}
                <motion.div
                    layoutId={layoutId}
                    onClick={onClick}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex-1 cursor-pointer"
                >
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        className="glass-card spotlight-card group"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-title text-foreground group-hover:text-accent-light transition-colors duration-300">{item.position}</h3>
                                <p className="text-caption text-accent-light font-medium">{item.company}</p>
                            </div>
                            <span className="text-small text-muted font-mono">{item.duration}</span>
                        </div>

                        <p className="text-caption text-muted leading-relaxed mb-5">
                            {item.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                            {item.technologies.map((tech, k) => (
                                <span key={k} className="tag">{tech}</span>
                            ))}
                        </div>

                        {/* Click Hint */}
                        <div className="mt-4 flex items-center gap-2 text-small text-muted/50 group-hover:text-accent-light/60 transition-colors duration-300">
                            <span>Click to expand</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

/* ── Experience Section ───────────────────────────────────────────── */
export default function Experience() {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.1 });
    const [selectedExp, setSelectedExp] = useState(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState(null);

    const handleSelect = (item, layoutId) => {
        setSelectedExp(item);
        setSelectedLayoutId(layoutId);
    };

    const handleClose = () => {
        setSelectedExp(null);
        setSelectedLayoutId(null);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.15 } },
    };

    return (
        <section id="experience" className="section relative" ref={ref}>
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 w-1/3 h-1/2 glow-orb bg-cyan-500/10 blur-[120px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">Journey</span>
                    <h2 className="text-headline md:text-display text-foreground mb-4">Experience</h2>
                    <p className="text-body text-muted max-w-xl">
                        Professional journey and contributions across different organizations. Click to explore.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="max-w-3xl space-y-8"
                >
                    {experience.map((item, i) => (
                        <motion.div key={item.id} variants={fadeUp}>
                            <ExperienceCard
                                item={item}
                                index={i}
                                totalCount={experience.length}
                                layoutId={`experience-${item.id}`}
                                onClick={() => handleSelect(item, `experience-${item.id}`)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Expandable Modal */}
            <AnimatePresence>
                {selectedExp && (
                    <ExperienceModal
                        item={selectedExp}
                        layoutId={selectedLayoutId}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
