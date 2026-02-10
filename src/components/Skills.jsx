import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useRef } from 'react';

const Skills = () => {
    const [ref, , hasBeenInView] = useInView({ threshold: 0.1 });

    const skillCategories = [
        {
            title: "Languages",
            skills: ["JavaScript", "Python", "TypeScript", "SQL", "Java", "C++"],
            size: 'md'
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
            size: 'md'
        },
        {
            title: "Frontend",
            skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
            size: 'sm'
        },
        {
            title: "AI / ML",
            skills: ["LangChain", "OpenAI", "RAG", "Vector DBs", "Prompt Engineering"],
            size: 'lg'
        },
        {
            title: "Infrastructure",
            skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
            size: 'sm'
        }
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    };

    const stagger = {
        visible: { transition: { staggerChildren: 0.08 } },
    };

    const skillPop = {
        hidden: { opacity: 0, scale: 0.8, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }
        },
    };

    const SkillCard = ({ category, index }) => {
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

        const sizeClasses = {
            sm: 'bento-item-sm',
            md: 'bento-item-md',
            lg: 'bento-item-lg',
        };

        return (
            <motion.div
                variants={fadeUp}
                custom={index}
                className={sizeClasses[category.size]}
            >
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    className="glass-card spotlight-card h-full"
                >
                    <h3 className="text-overline text-accent tracking-widest uppercase mb-4">
                        {category.title}
                    </h3>
                    <motion.div
                        className="flex flex-wrap gap-2"
                        variants={stagger}
                    >
                        {category.skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                variants={skillPop}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 20px -5px rgba(99, 102, 241, 0.4)'
                                }}
                                className="tag cursor-default"
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
            {/* Background Accent */}
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 glow-orb bg-violet-500/10 blur-[120px]" />

            <div className="container-wide relative z-10">
                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={fadeUp}
                    className="mb-16"
                >
                    <span className="text-overline text-accent tracking-widest uppercase mb-3 block">Expertise</span>
                    <h2 className="text-headline md:text-display text-foreground mb-4">Skills & Technologies</h2>
                    <p className="text-body text-muted max-w-xl">
                        Technologies across the stack. Modern web, AI integration, and cloud infrastructure.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate={hasBeenInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="bento-grid"
                >
                    {skillCategories.map((category, i) => (
                        <SkillCard key={category.title} category={category} index={i} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
