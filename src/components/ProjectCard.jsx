import { Github, ArrowUpRight, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { boldMetrics } from '../utils/boldMetrics';

export default function ProjectCard({ project, onClick, layoutId, isPrimary = false }) {
    const {
        title,
        subtitle,
        tagline,
        description,
        stack = [],
        links = [],
        status,
        engineeringImpact = [],
    } = project;

    const cardRef = useRef(null);
    const previewText = tagline || description;
    const primaryLink = links.find((l) => l.variant === 'primary');
    const githubLink = links.find(
        (l) => l.label.toLowerCase().includes('github') || l.label.toLowerCase().includes('codebase')
    );
    const metricPreview = engineeringImpact[0];

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
        completed: 'bg-emerald-500',
        'in-progress': 'bg-amber-500',
        upcoming: 'bg-blue-500',
    };

    const statusLabels = {
        completed: 'Production',
        'in-progress': 'In Progress',
        upcoming: 'Upcoming',
    };

    return (
        <motion.div
            layoutId={layoutId}
            onClick={onClick}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="cursor-pointer h-full"
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className={`glass-card spotlight-card h-full flex flex-col group ${
                    isPrimary ? 'ring-1 ring-accent/10' : ''
                }`}
            >
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                        {isPrimary && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-small font-mono rounded-lg bg-accent/10 text-accent-light border border-accent/20">
                                <Cpu size={12} />
                                Infrastructure
                            </span>
                        )}
                        {status && (
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-2 h-2 rounded-full ${statusColors[status] || 'bg-muted'} ${
                                        status === 'in-progress' ? 'animate-pulse' : ''
                                    }`}
                                />
                                <span className="text-small text-muted font-mono">
                                    {statusLabels[status] || status}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        {githubLink?.url && (
                            <a
                                href={githubLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-muted hover:text-accent-light rounded-lg hover:bg-accent/10 transition-all duration-200"
                                onClick={(e) => e.stopPropagation()}
                                aria-label="View on GitHub"
                            >
                                <Github size={16} />
                            </a>
                        )}
                        {primaryLink?.url && (
                            <a
                                href={primaryLink.url}
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

                <div className="mb-3">
                    <h3 className="text-title text-foreground group-hover:text-accent-light transition-colors duration-300">
                        {title}
                    </h3>
                    {subtitle && (
                        <p className="text-small font-mono text-accent-light/80 mt-1">{subtitle}</p>
                    )}
                </div>

                <p className="text-caption text-muted leading-relaxed mb-4">{previewText}</p>

                {metricPreview && (
                    <p className="text-small text-muted/80 leading-relaxed mb-4 pl-3 border-l-2 border-accent/30">
                        {boldMetrics(metricPreview)}
                    </p>
                )}

                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                    {stack.map((tech, i) => (
                        <span
                            key={i}
                            className="tag transition-all duration-200 hover:scale-105 hover:shadow-[0_0_12px_-4px_rgba(99,102,241,0.4)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="mt-4 flex items-center gap-2 text-small text-muted/50 group-hover:text-accent-light/60 transition-colors duration-300">
                    <span>Explore architecture</span>
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-accent/30 via-transparent to-violet-500/20 p-[1px]">
                        <div className="w-full h-full rounded-2xl bg-surface-1" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
