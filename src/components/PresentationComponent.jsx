import React, { useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

// Floating particles component with Framer Motion
const FloatingParticles = () => {
    const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-30"
                    style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );
};

// Tech icon with scroll animations
const AnimatedTechIcon = ({ src, alt, className = '', index = 0, rotation = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false, // This makes it trigger every time it comes into view
        threshold: 0.3
    });
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isInView) {
            controls.start({
                scale: 1,
                opacity: 1,
                rotate: rotation,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                }
            });
        } else {
            controls.start({
                scale: 0.5,
                opacity: 0,
                y: 50,
                rotate: rotation - 180,
            });
        }
    }, [isInView, controls, index, rotation]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ scale: 0.5, opacity: 0, y: 50, rotate: rotation - 180 }}
            whileHover={{
                scale: 1.3,
                rotate: rotation + 15,
                transition: { duration: 0.2 }
            }}
            className={`relative cursor-pointer ${className}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <img src={src} alt={alt} className="w-16 h-16" />

            {/* Hover effect ring */}
            {isHovered && (
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-blue-400"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 1.4],
                        opacity: [0.8, 0],
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                    }}
                />
            )}

            {/* Floating animation when in view */}
            <motion.div
                className="absolute inset-0"
                animate={isInView ? {
                    y: [-5, 5, -5],
                } : {}}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                }}
            />
        </motion.div>
    );
};

// Typewriter text with scroll trigger
const TypewriterText = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.5 });

    return (
        <motion.span
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? {
                opacity: 1,
                transition: {
                    duration: 0.05,
                    delay: delay,
                }
            } : { opacity: 0 }}
        >
            {children}
        </motion.span>
    );
};

// Character animation for text
const AnimatedText = ({ text, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.3 });

    const letters = text.split("");

    return (
        <motion.span ref={ref} className="inline-block">
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.5,
                            delay: delay + index * 0.05,
                            type: "spring",
                            stiffness: 100,
                        }
                    } : {
                        opacity: 0,
                        y: 20,
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.span>
    );
};

// Developer image with scroll animations
const AnimatedDeveloperImage = ({ src, className, isMobile = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={isInView ? {
                scale: 1,
                opacity: 1,
                rotate: 0,
                transition: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 80,
                }
            } : {
                scale: 0.8,
                opacity: 0,
                rotate: -10,
            }}
            whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
            }}
            className={className}
        >
            <img
                src={src}
                width={isMobile ? "300" : "500"}
                height={isMobile ? "300" : "500"}
                alt={isMobile ? "dev2" : "dev1"}
            />

            {/* Floating effect when in view */}
            <motion.div
                className="absolute inset-0"
                animate={isInView ? {
                    y: [-8, 8, -8],
                } : {}}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </motion.div>
    );
};

function PresentationComponent() {
    const containerRef = useRef(null);
    const isContainerInView = useInView(containerRef, { once: false, threshold: 0.1 });

    return (
        <motion.div
            ref={containerRef}
            className="overflow-hidden animate-scale overflow-x-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            id="Home"
            initial={{ opacity: 0 }}
            animate={isContainerInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <FloatingParticles />

            {/* Animated background elements */}
            <motion.div
                className="absolute inset-0 overflow-hidden"
                animate={isContainerInView ? {
                    background: [
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                    ]
                } : {}}
                transition={{ duration: 6, repeat: Infinity }}
            >
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500 opacity-10"
                    animate={isContainerInView ? {
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    } : {}}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-500 opacity-10"
                    animate={isContainerInView ? {
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    } : {}}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />
            </motion.div>

            <div className="grid md:grid-cols-2 min-h-screen relative z-10">
                {/* Left Column */}
                <div className="flex flex-col items-center justify-center p-8">
                    {/* Top Tech Icons */}
                    <motion.div
                        className="mt-5 flex justify-between w-full max-w-md"
                        initial={{ y: -50, opacity: 0 }}
                        animate={isContainerInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <AnimatedTechIcon
                            src="images/JS.svg"
                            alt="JS"
                            index={0}
                            rotation={0}
                        />
                        <AnimatedTechIcon
                            src="images/Bootstrap.svg"
                            alt="bootstrap"
                            className="ml-24"
                            index={1}
                            rotation={45}
                        />
                    </motion.div>

                    {/* Main Text */}
                    <div className="p-5">
                        <div className="mb-5">
                            <motion.h1
                                className="DMMono md:text-4xl text-4xl text-white text-center md:leading-relaxed"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={isContainerInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <AnimatedText text="Hello, I am Elyes Saddem." delay={0.6} />
                                <br />
                                <AnimatedText text="I am a " delay={1.2} />
                                <motion.span
                                    className="text-blue-400"
                                    initial={{ color: "#60a5fa" }}
                                    animate={isContainerInView ? {
                                        color: ["#60a5fa", "#3b82f6", "#2563eb", "#60a5fa"],
                                    } : {}}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <AnimatedText text="Software" delay={1.6} />
                                    <br />
                                    <AnimatedText text="engineering student" delay={2.0} />
                                </motion.span>
                            </motion.h1>
                        </div>

                        {/* Bottom Tech Icons */}
                        <motion.div
                            className="flex justify-evenly"
                            initial={{ y: 50, opacity: 0 }}
                            animate={isContainerInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <AnimatedTechIcon
                                src="images/HTML.svg"
                                alt="HTML"
                                index={2}
                                rotation={12}
                            />
                            <AnimatedTechIcon
                                src="images/CSS.svg"
                                alt="CSS"
                                index={3}
                                rotation={45}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Right Column - Desktop with Enhanced Wave */}
                <div className="text-white md:relative md:block hidden">
                    <img
                        src="../../public/images/wave.png"
                        className="min-h-full md:block hidden"
                    />
                    <div className="md:absolute top-0 left-0 md:min-w-full md:min-h-full md:flex md:justify-center md:items-center hidden">
                        <AnimatedDeveloperImage
                            src="images/DeveloperBlackBg.png"
                            className="md:block hidden absolute bottom-0"
                        />
                    </div>
                </div>

                {/* Mobile Developer Image */}
                <div className="md:hidden flex justify-center mb-10">
                    <AnimatedDeveloperImage
                        src="images/DeveloperBlueBg.png"
                        className=""
                        isMobile={true}
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default PresentationComponent;