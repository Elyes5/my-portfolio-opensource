import TitleComponent from "./TitleComponent.jsx";
import { HashLink as Link } from "react-router-hash-link";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

function About({ contact, scrollToSection }) {
    const [isHovered, setIsHovered] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const controls = useAnimation();

    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    };

    const fade = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.25 } },
    };

    // Enhanced superhero flying in animation with bounce and playfulness
    const superheroFlyIn = {
        hidden: {
            x: -200,
            y: -100,
            scale: 0.5,
            rotate: -45,
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 1.8,
                type: "spring",
                bounce: 0.6,
                delay: 0.3
            }
        },
    };

    // Playful floating animation with more character
    const playfulFloat = {
        animate: {
            y: [0, -12, 0],
            rotate: [0, 3, -3, 0],
            scale: [1, 1.02, 1],
            transition: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Enhanced cape fluttering with more drama
    const dramaticCapeFlutter = {
        animate: {
            scaleX: [1, 1.08, 0.92, 1],
            skewY: [0, 2, -2, 0],
            rotateZ: [0, 1, -1, 0],
            transition: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Bouncy wave background
    const bouncyWaveAnimation = {
        animate: {
            y: [0, -15, 0],
            rotate: [0, 3, 0, -3, 0],
            scale: [1, 1.02, 1],
            transition: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Enhanced floating particles with more variety
    const magicalParticles = {
        animate: {
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.6, 1.5, 0.6],
            rotate: [0, 360, 720],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Excited arrow pointing animation
    const excitedArrowPoint = {
        animate: {
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Super magical button with rainbow effects
    const superMagicalButton = {
        hidden: { opacity: 0, scale: 0, rotate: 180 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 1,
                delay: 2,
                type: "spring",
                bounce: 0.8
            }
        },
        hover: {
            scale: 1.15,
            y: [0, -8, 0],
            rotate: [0, 2, -2, 0],
            transition: {
                scale: { duration: 0.3 },
                y: { duration: 0.8, repeat: Infinity },
                rotate: { duration: 0.8, repeat: Infinity }
            }
        },
        tap: {
            scale: 0.9,
            rotate: [0, -10, 10, 0],
            y: [0, 5, 0],
            transition: { duration: 0.2 }
        }
    };

    // Typewriter effect for text
    const typewriterText = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 1.2,
                type: "spring"
            }
        },
    };

    // Heart animation for cute effect
    const heartPop = {
        animate: {
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    // Confetti burst animation
    const confettiBurst = {
        hidden: { scale: 0, rotate: 0 },
        visible: {
            scale: [0, 1.5, 1],
            rotate: [0, 180, 360],
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Rainbow text effect
    const rainbowText = {
        animate: {
            background: [
                "linear-gradient(45deg, #ff6b6b, #4ecdc4)",
                "linear-gradient(45deg, #4ecdc4, #45b7d1)",
                "linear-gradient(45deg, #45b7d1, #96ceb4)",
                "linear-gradient(45deg, #96ceb4, #feca57)",
                "linear-gradient(45deg, #feca57, #ff9ff3)",
                "linear-gradient(45deg, #ff9ff3, #ff6b6b)"
            ],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    // Pulse animation for interactive elements
    const pulseAnimation = {
        animate: {
            boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 10px rgba(59, 130, 246, 0)",
                "0 0 0 20px rgba(59, 130, 246, 0)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
            }
        }
    };

    // Interactive click handler for superhero
    const handleSuperheroClick = () => {
        setClickCount(prev => prev + 1);
        controls.start({
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            y: [0, -30, 0],
            transition: { duration: 0.8, ease: "easeInOut" }
        });
    };

    return (
        <div id="About" className="relative overflow-hidden">
            <TitleComponent title="About Me" />

            {/* Enhanced magical floating particles background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            left: `${5 + i * 6}%`,
                            top: `${15 + (i % 5) * 15}%`,
                            background: `hsl(${i * 30}, 70%, 60%)`
                        }}
                        variants={magicalParticles}
                        animate="animate"
                        transition={{
                            ...magicalParticles.animate.transition,
                            delay: i * 0.2
                        }}
                    />
                ))}

                {/* Enhanced sparkle effects */}
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute w-3 h-3 text-yellow-300"
                        style={{
                            left: `${10 + i * 9}%`,
                            top: `${20 + (i % 4) * 18}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeOut"
                        }}
                    >
                        ✨
                    </motion.div>
                ))}


                {/* Confetti elements */}
                {clickCount > 0 && [...Array(8)].map((_, i) => (
                    <motion.div
                        key={`confetti-${clickCount}-${i}`}
                        className="absolute w-2 h-2"
                        style={{
                            left: "50%",
                            top: "40%",
                            background: `hsl(${i * 45}, 80%, 60%)`
                        }}
                        variants={confettiBurst}
                        initial="hidden"
                        animate="visible"
                        onAnimationComplete={() => {
                            // Clean up confetti after animation
                        }}
                        transition={{
                            ...confettiBurst.visible.transition,
                            delay: i * 0.1
                        }}
                    />
                ))}
            </div>

            <div className="grid grid-cols-8 sm:grid-cols-4 text-center relative z-10">
                <div className="relative sm:col-span-1 col-span-2">
                    <motion.img
                        src="images/Wave2.png"
                        className="min-w-full min-h-full"
                        alt="Vector2"
                        variants={bouncyWaveAnimation}
                        animate="animate"
                    />
                    <div className="absolute top-0 min-h-full min-w-full flex justify-center items-center">
                        <motion.div
                            className="relative cursor-pointer"
                            variants={superheroFlyIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            onClick={handleSuperheroClick}
                            animate={controls}
                        >
                            {/* Enhanced superhero glow effect with rainbow colors */}
                            <motion.div
                                className="absolute inset-0 rounded-full blur-xl opacity-40"
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.4, 0.8, 0.4],
                                    background: [
                                        "radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)",

                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1.8
                                }}
                            />

                            {/* Main superhero image with enhanced interactions */}
                            <motion.img
                                src="images/AboutMe.png"
                                alt="AboutMe"
                                className="min-w-full sm:h-min-full relative z-10 cursor-pointer select-none"
                                variants={playfulFloat}
                                animate="animate"
                                whileHover={{
                                    scale: 1.1,
                                    y: [-5, -20, -5],
                                    rotate: [0, 5, -5, 0],
                                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                                    transition: {
                                        duration: 0.8,
                                        y: { duration: 1.2, repeat: Infinity },
                                        rotate: { duration: 1.2, repeat: Infinity }
                                    }
                                }}
                                whileTap={{
                                    scale: 0.95,
                                    rotate: 10,
                                }}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                            />

                            {/* Enhanced cape fluttering effect */}
                            <motion.div
                                className="absolute inset-0"
                                variants={dramaticCapeFlutter}
                                animate="animate"
                            />

                            {/* Interactive tooltip */}
                            {isHovered && (
                                <motion.div
                                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.8 }}
                                >
                                    Click me!
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>

                <div className="DMMono col-span-6 p-1 sm:col-span-3 md:text-2xl sm:text-md text-sm sm:flex items-center flex-col">
                    <motion.h1
                        variants={typewriterText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-white leading-relaxed"
                    >
                        <motion.span
                            className="inline-block"
                            animate={{
                                y: [0, -3, 0],
                                color: ["#ffffff", "#60a5fa", "#ffffff"]
                            }}
                            transition={{
                                y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                            }}
                        >
                            I am a software engineering student. I am passionate about web
                            development and cloud technologies.
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: [0, -2, 0]
                            }}
                            transition={{
                                opacity: { delay: 2.5, duration: 0.8 },
                                x: { delay: 2.5, duration: 0.8 },
                                y: { delay: 3, duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            Feel free to contact me. It is just through a simple button click!
                            We could make a great collaboration together!
                        </motion.span>
                    </motion.h1>

                    <div className="lg:mt-24 md:mt-12 sm:mt-10 mt-5 lg:mb-2 md:mb-5 mb-3 flex justify-center items-center">
                        {/* Enhanced left arrow with excited animation */}
                        <motion.img
                            src="images/ArrowsLeft.svg"
                            alt="left-arrow"
                            className="sm:w-min-full w-1/5"
                            variants={fade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{
                                x: [-12, 0, -12],
                                rotate: [0, -8, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2.8
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: -15,
                                x: -20
                            }}
                        />

                        {/* Super magical contact button */}
                        <motion.div
                            className="inline-block mx-4 relative"
                            variants={superMagicalButton}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            whileTap="tap"
                            viewport={{ once: true }}
                        >
                            {/* Enhanced button glow with rainbow effect */}
                            <motion.div
                                className="absolute inset-0 rounded-lg blur-md opacity-60"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.6, 1, 0.6],
                                    background: [
                                        "linear-gradient(45deg, blue, rgb(96,165,250))"
                                    ]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2.5
                                }}
                            />

                            {/* Pulse rings */}
                            <motion.div
                                className="absolute inset-0 rounded-lg border-2 border-blue-400"
                                variants={pulseAnimation}
                                animate="animate"
                            />

                            <div className="cursor-pointer inline-block md:p-5 p-3 border-2 border-blue-500 text-blue-500 underline-none rounded-lg hover:bg-blue-500 hover:text-neutral-800 relative bg-gray-800 bg-opacity-80 overflow-hidden">
                                {/* Shimmer effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                                    animate={{
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatDelay: 1
                                    }}
                                />

                                <Link to="#Contact" smooth key="Contact">
                                    <motion.span
                                        className="relative z-10 font-bold"
                                        whileHover={{
                                            y: [0, -3, 0],
                                            scale: [1, 1.05, 1],
                                            transition: { duration: 0.4, repeat: Infinity }
                                        }}
                                    >
                                        Contact Me
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Enhanced right arrow with excited animation */}
                        <motion.img
                            src="images/ArrowsRight.svg"
                            alt="right-arrow"
                            className="sm:w-min-full w-1/5"
                            variants={fade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            animate={{
                                x: [12, 0, 12],
                                rotate: [0, 8, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2.8
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 15,
                                x: 20
                            }}
                        />
                    </div>

                    {/* Fun interaction counter */}
                    {clickCount > 0 && (
                        <motion.div
                            className="mt-4 text-center"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <motion.span
                                className="text-yellow-400 font-bold text-lg"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: 3
                                }}
                            >
                                Wow! You clicked {clickCount} time{clickCount > 1 ? 's' : ''}!
                            </motion.span>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default About;