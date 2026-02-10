import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Footer() {
    const year = new Date().getFullYear();

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    const socialLinks = [
        { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
        { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
        { icon: Mail, url: `mailto:${personalInfo.email}`, label: 'Email' },
    ];

    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer className="relative border-t border-white/5 pt-20 pb-10">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface-1 to-transparent pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-xl font-bold text-gradient mb-3">{personalInfo.name}</h3>
                        <p className="text-caption text-muted max-w-sm mb-6 leading-relaxed">
                            Building rigorous software systems with a focus on polished experiences and maintainable architecture.
                        </p>
                        <div className="flex gap-2">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target={s.label !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="icon-btn"
                                    aria-label={s.label}
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-overline text-accent tracking-widest uppercase mb-5">Navigation</h4>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.id}>
                                    <button
                                        onClick={() => scrollTo(l.id)}
                                        className="text-caption text-muted hover:text-accent-light transition-colors duration-300"
                                    >
                                        {l.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Status */}
                    <div>
                        <h4 className="text-overline text-accent tracking-widest uppercase mb-5">Status</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="relative flex h-2.5 w-2.5 mt-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <div>
                                    <p className="text-caption font-medium text-foreground">Open to Opportunities</p>
                                    <p className="text-small text-muted">SDE / Full-stack roles</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="h-2.5 w-2.5 mt-1 rounded-full bg-accent" />
                                <div>
                                    <p className="text-caption font-medium text-foreground">Building</p>
                                    <p className="text-small text-muted">AI Orchestrator Platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-small text-muted">
                        © {year} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-small text-muted flex items-center gap-2">
                        Built with
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        React, Tailwind & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
