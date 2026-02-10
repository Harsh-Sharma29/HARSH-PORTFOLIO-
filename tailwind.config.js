/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark theme palette
                background: '#09090b',
                surface: {
                    0: '#09090b',
                    1: '#18181b',
                    2: '#27272a',
                    3: '#3f3f46',
                },
                foreground: '#fafafa',
                muted: {
                    DEFAULT: '#a1a1aa',
                    light: '#71717a',
                },
                accent: {
                    DEFAULT: '#6366f1',
                    light: '#818cf8',
                    dark: '#4f46e5',
                    glow: 'rgba(99, 102, 241, 0.4)',
                },
                border: {
                    DEFAULT: 'rgba(255, 255, 255, 0.08)',
                    light: 'rgba(255, 255, 255, 0.04)',
                    accent: 'rgba(99, 102, 241, 0.3)',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            fontSize: {
                'display': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.04em', fontWeight: '700' }],
                'display-lg': ['5rem', { lineHeight: '1', letterSpacing: '-0.04em', fontWeight: '700' }],
                'headline': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '600' }],
                'title': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.02em', fontWeight: '600' }],
                'body': ['1rem', { lineHeight: '1.7' }],
                'body-lg': ['1.125rem', { lineHeight: '1.7' }],
                'caption': ['0.875rem', { lineHeight: '1.5' }],
                'small': ['0.8125rem', { lineHeight: '1.5' }],
                'overline': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
            },
            boxShadow: {
                'glow': '0 0 60px -15px rgba(99, 102, 241, 0.3)',
                'glow-lg': '0 0 80px -20px rgba(99, 102, 241, 0.4)',
                'card': '0 4px 24px -8px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)',
                'card-hover': '0 8px 40px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'mesh': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            },
            animation: {
                'shimmer': 'shimmer 2s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
                'spotlight': 'spotlight 2s ease-out forwards',
                'breathe': 'breathe 4s ease-in-out infinite',
                'breathe-reverse': 'breathe-reverse 4s ease-in-out infinite',
            },
            keyframes: {
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.05)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                spotlight: {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                breathe: {
                    '0%, 100%': { transform: 'scale(1)', opacity: '0.5' },
                    '50%': { transform: 'scale(1.15)', opacity: '0.8' },
                },
                'breathe-reverse': {
                    '0%, 100%': { transform: 'scale(1.1)', opacity: '0.4' },
                    '50%': { transform: 'scale(1)', opacity: '0.7' },
                },
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
    },
    plugins: [],
}
