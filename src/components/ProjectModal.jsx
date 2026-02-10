import { motion } from 'framer-motion';
import { X, ExternalLink, Github, AlertTriangle, Lightbulb, Layers } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectModal({ project, layoutId, onClose }) {
    // Close on Escape key & lock body scroll
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

    if (!project) return null;

    const {
        title,
        longDescription,
        caseStudy,
        challenges = [],
        detailedStack = [],
        stack = [],
        github,
        githubUrl,
        demo,
        demoUrl,
        status,
    } = project;

    const finalGithub = github || githubUrl;
    const finalDemo = demo || demoUrl;
    const finalStack = detailedStack.length > 0 ? detailedStack : stack;

    const statusColors = {
        'completed': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        'in-progress': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
        'upcoming': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    };

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

            {/* Modal - scrollable container */}
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                <motion.div
                    layoutId={layoutId}
                    className="glass-card max-w-3xl w-full max-h-[85vh] overflow-y-auto pointer-events-auto"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(99,102,241,0.3) transparent' }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
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
                            {status && (
                                <span className={`inline-flex items-center px-3 py-1 text-small font-medium rounded-full border mb-4 ${statusColors[status] || ''}`}>
                                    {status.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                                </span>
                            )}
                            <h2 className="text-headline md:text-display text-gradient mb-2">
                                {title}
                            </h2>
                        </div>

                        {/* Full Description */}
                        <p className="text-body text-muted leading-relaxed">
                            {longDescription || project.description}
                        </p>

                        {/* Case Study */}
                        {caseStudy && (
                            <div className="rounded-xl p-5 bg-accent/5 border border-accent/10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb size={18} className="text-accent-light" />
                                    <h3 className="text-title text-foreground">The Approach</h3>
                                </div>
                                <p className="text-caption text-muted leading-relaxed">
                                    {caseStudy}
                                </p>
                            </div>
                        )}

                        {/* Challenges */}
                        {challenges.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <AlertTriangle size={18} className="text-amber-400" />
                                    <h3 className="text-title text-foreground">Challenges & Solutions</h3>
                                </div>
                                <ul className="space-y-3">
                                    {challenges.map((challenge, i) => (
                                        <li key={i} className="flex items-start gap-3 text-caption text-muted">
                                            <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-small text-accent-light font-mono flex-shrink-0 mt-0.5">
                                                {i + 1}
                                            </span>
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Detailed Tech Stack */}
                        {finalStack.length > 0 && (
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Layers size={18} className="text-cyan-400" />
                                    <h3 className="text-title text-foreground">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {finalStack.map((tech, i) => (
                                        <span key={i} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        {(finalGithub || finalDemo) && (
                            <div className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                                {finalDemo && (
                                    <a
                                        href={finalDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg btn-primary"
                                    >
                                        <ExternalLink size={18} />
                                        Live Demo
                                    </a>
                                )}
                                {finalGithub && (
                                    <a
                                        href={finalGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-lg btn-secondary"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
}
