import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useInView } from '../hooks/useInView';
import { projects } from '../data/content';

const Projects = () => {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.05 });
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedLayoutId, setSelectedLayoutId] = useState(null);

    const completedProjects = projects.filter(p => p.status === 'completed');
    const inProgressProjects = projects.filter(p => p.status === 'in-progress');
    const upcomingProjects = projects.filter(p => p.status === 'upcoming');

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

    return (
        <section id="projects" className="section relative" ref={ref}>
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 glow-orb bg-accent/10 blur-[120px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">Portfolio</span>
                    <h2 className="text-headline md:text-display text-foreground mb-4">Featured Projects</h2>
                    <p className="text-body text-muted max-w-xl">
                        Technical work solving real problems. Click any card to explore the full story.
                    </p>
                </motion.div>

                {/* Main Projects — Uniform Grid */}
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {completedProjects.map((project) => (
                        <motion.div key={project.id} variants={fadeUp}>
                            <ProjectCard
                                project={project}
                                layoutId={`project-${project.id}`}
                                onClick={() => handleSelect(project, `project-${project.id}`)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* In Progress Section */}
                {inProgressProjects.length > 0 && (
                    <motion.div
                        initial="hidden"
                        animate={hasBeenInView ? "visible" : "hidden"}
                        variants={fadeUp}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-small font-medium text-muted uppercase tracking-wider">In Progress</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {inProgressProjects.map((project) => (
                                <motion.div key={project.id} variants={fadeUp}>
                                    <ProjectCard
                                        project={project}
                                        layoutId={`project-${project.id}`}
                                        onClick={() => handleSelect(project, `project-${project.id}`)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Upcoming Section */}
                {upcomingProjects.length > 0 && (
                    <motion.div
                        initial="hidden"
                        animate={hasBeenInView ? "visible" : "hidden"}
                        variants={fadeUp}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                            <span className="text-small font-medium text-muted uppercase tracking-wider">Upcoming</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {upcomingProjects.map((project) => (
                                <motion.div key={project.id} variants={fadeUp}>
                                    <ProjectCard
                                        project={project}
                                        layoutId={`project-${project.id}`}
                                        onClick={() => handleSelect(project, `project-${project.id}`)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Expandable Modal Overlay */}
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
