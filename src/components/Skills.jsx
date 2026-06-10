import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';
import { Brain, Server, Database, Monitor } from 'lucide-react';
import { skillPillars } from '../data/content';

const pillarIcons = {
    agentic: Brain,
    infrastructure: Server,
    data: Database,
    frontend: Monitor,
};

const pillarCardClass = {
    agentic: 'skill-pillar-card skill-pillar-agentic',
    infrastructure: 'skill-pillar-card skill-pillar-infra',
    data: 'skill-pillar-card',
    frontend: 'skill-pillar-card',
};

const pillClass = {
    agentic: 'tag-pill tag-pill-agentic',
    infrastructure: 'tag-pill tag-pill-infra',
    data: 'tag-pill tag-pill-data',
    frontend: 'tag-pill tag-pill-frontend',
};

const Skills = () => {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.1 });

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.08 } },
    };

    const skillPop = {
        hidden: { opacity: 0, scale: 0.85, y: 8 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.35, ease: [0.25, 0.4, 0.25, 1] },
        },
    };

    const SkillPillar = ({ pillar, index }) => {
        const cardRef = useRef(null);
        const Icon = pillarIcons[pillar.variant];

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
            <motion.div variants={fadeUp} custom={index}>
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    className={`glass-card spotlight-card h-full ${pillarCardClass[pillar.variant]}`}
                >
                    <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-start gap-3">
                            <span className="text-small font-mono text-muted/50 tabular-nums">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    {Icon && (
                                        <Icon
                                            size={16}
                                            className={
                                                pillar.highlight
                                                    ? pillar.variant === 'agentic'
                                                        ? 'text-violet-400'
                                                        : 'text-cyan-400'
                                                    : 'text-muted'
                                            }
                                        />
                                    )}
                                    <h3 className="text-caption sm:text-title text-foreground font-semibold tracking-tight">
                                        {pillar.title}
                                    </h3>
                                </div>
                                {pillar.highlight && (
                                    <span
                                        className={`inline-flex mt-1 px-2 py-0.5 text-small font-mono rounded-md ${
                                            pillar.variant === 'agentic'
                                                ? 'text-violet-300 bg-violet-500/10 border border-violet-500/25 skill-highlight-pulse'
                                                : 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/25 skill-highlight-pulse'
                                        }`}
                                    >
                                        {pillar.variant === 'agentic' ? 'Agentic AI' : 'Infrastructure'}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    <motion.div className="flex flex-wrap gap-2" variants={stagger}>
                        {pillar.skills.map((skill) => (
                            <motion.span
                                key={skill}
                                variants={skillPop}
                                whileHover={{ scale: 1.04, y: -1 }}
                                className={`${pillClass[pillar.variant]} cursor-default`}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" className="section relative" ref={ref}>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 glow-orb bg-violet-500/10 blur-[120px]" />
            <div className="absolute top-1/4 right-0 w-1/3 h-1/3 glow-orb bg-cyan-500/5 blur-[100px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">
                        Technical Stack
                    </span>
                    <h2 className="text-headline md:text-display text-foreground mb-4 tracking-tight">
                        Architectural Skill Layers
                    </h2>
                    <p className="text-body text-muted max-w-2xl leading-relaxed">
                        Skills organized by production architecture layer — from agentic orchestration
                        and MLOps infrastructure to vector data planes and frontend-AI delivery.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? 'visible' : 'hidden'}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6"
                >
                    {skillPillars.map((pillar, i) => (
                        <SkillPillar key={pillar.id} pillar={pillar} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
