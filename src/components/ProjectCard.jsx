import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function ProjectCard({ project, onClick, layoutId }) {
    const { title, description, stack = [], github, demo, status } = project;
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

    const statusColors = {
        'completed': 'bg-emerald-500',
        'in-progress': 'bg-amber-500',
        'upcoming': 'bg-blue-500',
    };

    const statusLabels = {
        'completed': 'Completed',
        'in-progress': 'In Progress',
        'upcoming': 'Upcoming',
    };

    return (
        <motion.div
            layoutId={layoutId}
            onClick={onClick}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="cursor-pointer"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="glass-card spotlight-card h-full flex flex-col group"
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        {status && (
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${statusColors[status] || 'bg-muted'} ${status === 'in-progress' ? 'animate-pulse' : ''}`} />
                                <span className="text-small text-muted font-mono">{statusLabels[status]}</span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted hover:text-accent-light rounded-lg hover:bg-accent/10 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="View on GitHub"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted hover:text-accent-light rounded-lg hover:bg-accent/10 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="View live demo"
                            >
                                <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-title text-foreground group-hover:text-accent-light transition-colors duration-300 mb-3">
                    {title}
                </h3>

                {/* Description — flex-grow pushes footer down */}
                <p className="text-caption text-muted leading-relaxed flex-grow mb-6">
                    {description}
                </p>

                {/* Tech Stack Footer */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {stack.map((tech, i) => (
                        <span key={i} className="tag">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Click Hint */}
                <div className="mt-4 flex items-center gap-2 text-small text-muted/50 group-hover:text-accent-light/60 transition-colors duration-300">
                    <span>Click to deep dive</span>
                    <ArrowUpRight size={12} />
                </div>

                {/* Hover Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-violet-500/20 p-[1px]">
                        <div className="w-full h-full rounded-2xl bg-surface-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
