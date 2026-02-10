import { motion } from 'framer-motion';

export default function FloatingShapes() {
    const shapes = [
        { size: 300, top: '10%', left: '5%', duration: 8, color: 'from-primary-500/20 to-accent-pink/20' },
        { size: 250, top: '60%', right: '10%', duration: 10, color: 'from-accent-purple/20 to-primary-600/20' },
        { size: 200, bottom: '20%', left: '15%', duration: 12, color: 'from-accent-pink/20 to-accent-purple/20' },
        { size: 280, top: '40%', right: '20%', duration: 9, color: 'from-primary-400/20 to-accent-blue/20' },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-3xl opacity-30`}
                    style={{
                        width: shape.size,
                        height: shape.size,
                        top: shape.top,
                        left: shape.left,
                        right: shape.right,
                        bottom: shape.bottom,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}
