import { useEffect, useState, useRef } from 'react';

// Custom hook for scroll-based animations using Intersection Observer
export function useInView(options = {}) {
    const [isInView, setIsInView] = useState(false);
    const [hasBeenInView, setHasBeenInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);

                // Once it's been in view, keep it that way
                if (entry.isIntersecting && !hasBeenInView) {
                    setHasBeenInView(true);
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px',
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options.threshold, options.rootMargin, hasBeenInView]);

    return [ref, isInView, hasBeenInView];
}
