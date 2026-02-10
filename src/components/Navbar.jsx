import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Projects' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            const pos = window.scrollY + 100;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const el = document.getElementById(navItems[i].id);
                if (el && el.offsetTop <= pos) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : ''
                }`}
        >
            <div className="container-wide h-20 flex items-center justify-between">
                <button
                    onClick={() => scrollTo('home')}
                    className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
                >
                    <span className="text-gradient">HS</span>
                </button>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={`relative px-4 py-2.5 text-caption font-medium rounded-xl transition-all duration-300 ${activeSection === item.id
                                    ? 'text-foreground'
                                    : 'text-muted hover:text-foreground'
                                }`}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white/5 border border-white/10 -z-10 rounded-xl"
                                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <button
                    onClick={() => scrollTo('contact')}
                    className="hidden md:flex btn btn-primary px-5 py-2.5 text-small"
                >
                    Get in Touch
                </button>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2.5 text-foreground/80 hover:bg-white/5 rounded-xl transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden nav-glass overflow-hidden"
                    >
                        <div className="container-wide py-6 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`px-4 py-3.5 text-left text-body font-medium rounded-xl transition-all duration-200 ${activeSection === item.id
                                            ? 'bg-white/5 text-foreground'
                                            : 'text-muted hover:text-foreground hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
