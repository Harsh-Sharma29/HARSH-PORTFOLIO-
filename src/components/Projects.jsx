import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useInView } from '../hooks/useInView';
import { projects, projectSections } from '../data/content';

const Projects = () => {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.05 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState(null);

    const handleSelect = (project, layoutId) => {
        setSelectedProject(project);
        setSelectedLayoutId(layoutId);
    };

    const handleClose = () => {
        setSelectedProject(null);
        setSelectedLayoutId(null);
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.1 } },
    };

    const getProjectsBySection = (sectionId) =>
        projects.filter((p) => p.section === sectionId);

    return (
        <section id="projects" className="section relative" ref={ref}>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 glow-orb bg-accent/10 blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 glow-orb bg-violet-500/5 blur-[100px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    className="mb-20"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">
                        Portfolio
                    </span>
                    <h2 className="text-headline md:text-display text-foreground mb-4">
                        Agentic AI Infrastructure & Orchestration
                    </h2>
                    <p className="text-body text-muted max-w-2xl">
                        High-performance agent meshes, autonomous engineering pipelines, and
                        enterprise-grade applied AI systems. Click any card to explore architecture
                        depth and engineering impact.
                    </p>
                </motion.div>

                {projectSections.map((section, sectionIndex) => {
                    const sectionProjects = getProjectsBySection(section.id);
                    if (sectionProjects.length === 0) return null;

                    const isPrimary = section.id === 'agentic-infrastructure';

                    return (
                        <motion.div
                            key={section.id}
                            initial="hidden"
                            animate={hasBeenInView ? 'visible' : 'hidden'}
                            variants={fadeUp}
                            className={sectionIndex > 0 ? 'mt-24' : ''}
                        >
                            <div className="mb-10">
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
                                    <div className="flex items-start gap-4">
                                        <span
                                            className={`flex-shrink-0 mt-1 px-2.5 py-1 text-small font-mono rounded-lg border ${
                                                isPrimary
                                                    ? 'text-accent-light bg-accent/10 border-accent/20'
                                                    : 'text-muted bg-white/5 border-white/10'
                                            }`}
                                        >
                                            {section.label}
                                        </span>
                                        <div>
                                            <h3 className="text-title md:text-headline text-foreground mb-2">
                                                {section.title}
                                            </h3>
                                            <p className="text-caption text-muted max-w-2xl">
                                                {section.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className={`hidden sm:block h-px flex-grow mx-6 mb-3 ${
                                            isPrimary
                                                ? 'bg-gradient-to-r from-accent/40 to-transparent'
                                                : 'bg-gradient-to-r from-white/10 to-transparent'
                                        }`}
                                    />
                                    <span className="text-small font-mono text-muted/60 flex-shrink-0">
                                        {sectionProjects.length} project
                                        {sectionProjects.length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>

                            <motion.div
                                variants={stagger}
                                className={`grid gap-6 ${
                                    isPrimary
                                        ? 'grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'
                                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                                }`}
                            >
                                {sectionProjects.map((project) => (
                                    <motion.div key={project.id} variants={fadeUp}>
                                        <ProjectCard
                                            project={project}
                                            layoutId={`project-${project.id}`}
                                            onClick={() =>
                                                handleSelect(project, `project-${project.id}`)
                                            }
                                            isPrimary={isPrimary}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        layoutId={selectedLayoutId}
                        onClose={handleClose}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
