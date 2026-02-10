import { useEffect, useState } from 'react';

// Track scroll position for navbar highlighting
export function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);

            // Determine active section based on scroll position
            const sections = ['home', 'projects', 'skills', 'experience', 'contact'];

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Section is in view if its top is in the upper half of viewport
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return { scrollPosition, activeSection };
}
