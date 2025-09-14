import TitleComponent from "./TitleComponent.jsx";
import ProjectComponent from "./ProjectComponent.jsx";
import { motion, useAnimation, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function ProjectsComponent() {
    const projectsData = [
        {
            img: "images/PJ1.png",
            title: "NeoExams Test App",
            description: "Dynamic tests for NeoXam job candidates. Users can register, take tests, and view results.",
            badges: ["Spring Boot", "Vue", "MySQL", "Bootstrap 5"],
            color: "bg-slate-550",
            state:"Private",
            duration: 0.5,
        },
        {
            img: "images/PJ2.png",
            title: "Profjector",
            description:
                "An internal app lets professors borrow projectors via phone, with an ESP32 ensuring borrowing only happens on-site.",
            badges: ["React Native", "ESP3", "C++", "MySQL", "Angular", "Spring Boot"],
            color: "bg-[#4054b4]",
            state:"Public",
            link:"https://github.com/Projet-Micro",
            duration: 0.9,
        },
        {
            img: "images/PJ3.png",
            title: "Map Minds",
            description:
                "An AI-powered app that recommends your next travel destination tailored to your unique preferences.",
            badges: ["Django", "React", "FramerMotion", "Tailwind CSS"],
            color: "bg-sky-400",
            state:"Public",
            link:"https://mapminds.netlify.app/",
            duration: 1.3,
        },
        {
            img: "images/PJ4.png",
            title: "KidsGuard",
            description:
                "Mobile app that restricts access to some apps on another device, with a web dashboard for parents to monitor usage.",
            badges: ["Flutter", "Provider", "Firebase", "Node.js"],
            color: "bg-red-400",
            state:"Public",
            link:"https://github.com/Elyes3/appctrl",
            duration: 1.3,
        },
        {
            img: "images/PJ5.png",
            title: "ATS Event Manager",
            description:
                "Mobile app that manages internal ATS Events.",
            badges: ["Flutter", "Riverpod", "MongoDB", "Symfony","Docker","NGINX"],
            color: "bg-green-500",
            state:"Private",
            duration: 1.3,
        },
        {
            img: "images/PJ6.png",
            title: "QuizApp",
            description:
                "A learning app that proposes a static quiz made to learn Android development.",
            badges: ["Java", "Firebase"],
            color: "bg-blue-500",
            state:"Public",
            link:"https://github.com/Elyes5/MobileQuizApp",
            duration: 1.3,
        },
        {
            img: "images/PJ7.png",
            title: "TechTemple",
            description:
                "An e-commerce web platform for selling tech products, featuring user authentication, product browsing, and a shopping cart.",
            badges: ["Angular", "Spring Boot", "NgRx","Docker","Angular Material"],
            color: "bg-green-500",
            state:"Public",
            link:"https://github.com/Elyes3/tech-temple",
            duration: 1.3,
        },

    ];

    const [collectedPuzzles, setCollectedPuzzles] = useState([]);
    const [stickmanPosition, setStickmanPosition] = useState(100);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [particleEffects, setParticleEffects] = useState([]);
    const [animationKey, setAnimationKey] = useState(0); // Key to restart animation
    const puzzlePositions = useRef([10, 25, 40, 55, 70, 85]);
    const animationRef = useRef();
    const isInViewRef = useInView(animationRef, { threshold: 0.3 });

    // Reset animation when component comes into view
    useEffect(() => {
        if (isInViewRef) {
            setCollectedPuzzles([]);
            setStickmanPosition(100);
            setParticleEffects([]);
            setAnimationKey(prev => prev + 1); // Force re-render with new key
        }
    }, [isInViewRef]);

    // Enhanced stickman animation with more realistic walking
    const StickmanSVG = ({ isWalking, isBending, animationKey }) => {
        const walkCycle = {
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
        };

        return (
            <motion.svg
                key={animationKey}
                width="70"
                height="90"
                viewBox="0 0 70 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: "drop-shadow(0 4px 8px rgba(59, 130, 246, 0.3))" }}
            >
                {/* Head with enhanced glow */}
                <motion.circle
                    cx="35"
                    cy="18"
                    r="10"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    fill="rgba(59, 130, 246, 0.1)"
                    animate={isWalking ? {
                        y: [0, -2, 0, -2, 0],
                        stroke: ["#3b82f6", "#8b5cf6", "#3b82f6"]
                    } : {}}
                    transition={{
                        ...walkCycle,
                        stroke: { duration: 2, repeat: Infinity }
                    }}
                />

                {/* Enhanced body */}
                <motion.line
                    x1="35"
                    y1="28"
                    x2="35"
                    y2="55"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    animate={isWalking ? {
                        rotate: [0, 1, 0, -1, 0],
                        originX: "35px",
                        originY: "28px"
                    } : isBending ? {
                        rotate: 12,
                        originX: "35px",
                        originY: "28px"
                    } : {}}
                    transition={walkCycle}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.5))" }}
                />

                {/* Enhanced arms with gradient effect */}
                <motion.line
                    x1="35"
                    y1="35"
                    x2="18"
                    y2="48"
                    stroke="url(#armGradient)"
                    strokeWidth="3"
                    animate={isWalking ? {
                        rotate: [0, 30, 0, -35, 0],
                        originX: "35px",
                        originY: "35px"
                    } : isBending ? {
                        rotate: 50,
                        originX: "35px",
                        originY: "35px"
                    } : {}}
                    transition={walkCycle}
                />

                <motion.line
                    x1="35"
                    y1="35"
                    x2="52"
                    y2="48"
                    stroke="url(#armGradient)"
                    strokeWidth="3"
                    animate={isWalking ? {
                        rotate: [0, -35, 0, 30, 0],
                        originX: "35px",
                        originY: "35px"
                    } : isBending ? {
                        rotate: -50,
                        originX: "35px",
                        originY: "35px"
                    } : {}}
                    transition={walkCycle}
                />

                {/* Enhanced legs */}
                <motion.line
                    x1="35"
                    y1="55"
                    x2="25"
                    y2="75"
                    stroke="url(#legGradient)"
                    strokeWidth="4"
                    animate={isWalking ? {
                        rotate: [0, 35, 0, -30, 0],
                        x2: [25, 18, 25, 32, 25],
                        y2: [75, 80, 75, 70, 75],
                        originX: "35px",
                        originY: "55px"
                    } : {}}
                    transition={walkCycle}
                />

                <motion.line
                    x1="35"
                    y1="55"
                    x2="45"
                    y2="75"
                    stroke="url(#legGradient)"
                    strokeWidth="4"
                    animate={isWalking ? {
                        rotate: [0, -30, 0, 35, 0],
                        x2: [45, 38, 45, 52, 45],
                        y2: [75, 70, 75, 80, 75],
                        originX: "35px",
                        originY: "55px"
                    } : {}}
                    transition={walkCycle}
                />

                {/* Enhanced feet with glow */}
                <motion.ellipse
                    cx="25"
                    cy="77"
                    rx="4"
                    ry="2"
                    fill="#3b82f6"
                    animate={isWalking ? {
                        cx: [25, 18, 25, 32, 25],
                        cy: [77, 82, 77, 72, 77],
                        scaleX: [1, 0.6, 1, 1.4, 1]
                    } : {}}
                    transition={walkCycle}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.6))" }}
                />

                <motion.ellipse
                    cx="45"
                    cy="77"
                    rx="4"
                    ry="2"
                    fill="#3b82f6"
                    animate={isWalking ? {
                        cx: [45, 38, 45, 52, 45],
                        cy: [77, 72, 77, 82, 77],
                        scaleX: [1, 1.4, 1, 0.6, 1]
                    } : {}}
                    transition={walkCycle}
                    style={{ filter: "drop-shadow(0 2px 4px rgba(59, 130, 246, 0.6))" }}
                />

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="armGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="legGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1d4ed8" />
                    </linearGradient>
                </defs>
            </motion.svg>
        );
    };

    // Puzzle piece SVG component
    const PuzzlePieceSVG = ({ color = "#3b82f6", size = 45 }) => (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.1, rotate: 5 }}
        >
            <path
                d="M10 10 L30 10 Q30 5, 35 5 T40 10 L40 30 Q45 30, 45 35 T40 40 L40 40 L20 40 Q20 45, 15 45 T10 40 L10 20 Q5 20, 5 15 T10 10 Z"
                fill={color}
                stroke="white"
                strokeWidth="2"
            />
            <circle cx="25" cy="25" r="3" fill="white" opacity="0.7" />
        </motion.svg>
    );

    // Animation loop that runs only when in view
    useEffect(() => {
        if (!isInViewRef) return;

        const interval = setInterval(() => {
            setStickmanPosition(prev => {
                const newPos = prev - 0.3; // Slightly slower for better visibility

                // Check for puzzle collection
                puzzlePositions.current.forEach((puzzlePos, index) => {
                    if (Math.abs(newPos - puzzlePos) < 2 && !collectedPuzzles.includes(index)) {
                        setCollectedPuzzles(prev => [...prev, index]);

                        // Create particle effect
                        const particleId = Date.now();
                        setParticleEffects(prev => [...prev, { id: particleId, x: puzzlePos }]);
                        setTimeout(() => {
                            setParticleEffects(prev => prev.filter(p => p.id !== particleId));
                        }, 2000);
                    }
                });

                return newPos < -10 ? 110 : newPos;
            });
        }, 50); // Slightly slower update rate

        return () => clearInterval(interval);
    }, [collectedPuzzles, isInViewRef, animationKey]);

    // Heavy fade and slide animations
    const heavyFadeUp = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8,
            filter: "blur(10px)"
        },
        visible: (delay = 0) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            },
        }),
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const glitchText = {
        hover: {
            x: [0, -2, 2, -1, 1, 0],
            textShadow: [
                "0 0 0 transparent",
                "-2px 0 #ff00ff, 2px 0 #00ffff",
                "2px 0 #ff00ff, -2px 0 #00ffff",
                "-1px 0 #ff00ff, 1px 0 #00ffff",
                "0 0 0 transparent"
            ],
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const magneticButton = {
        rest: {
            scale: 1,
            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
        },
        hover: {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)",
            y: -5,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 10
            }
        },
        tap: { scale: 0.98, y: -2 }
    };

    return (
        <div id="Projects" className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]"
                    animate={{
                        background: [
                            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 80% 20%, rgba(139,92,246,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 40% 40%, rgba(236,72,153,0.1) 0%, transparent 50%)",
                            "radial-gradient(circle at 20% 80%, rgba(59,130,246,0.1) 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>


            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <TitleComponent title="Projects" />
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 relative z-10">
                <div className="flex">
                    <div className="relative sm:col-span-1 col-span-1">
                        <motion.img
                            src="images/Wave4.png"
                            alt="wave4"
                            className="min-w-full min-h-full"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1,
                                type: "spring",
                                stiffness: 50
                            }}
                        />
                        <motion.div
                            className="absolute left-0 top-0 min-h-full min-w-full flex justify-center items-center"
                            initial={{ scale: 0, rotate: -360 }}
                            animate={{
                                scale: 1,
                                rotate: 0,
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, 5, -5, 5, 0],
                                transition: {
                                    rotate: {
                                        repeat: Infinity,
                                        duration: 2
                                    }
                                }
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.3
                            }}
                        >
                            <motion.img
                                src="images/Projects.png"
                                alt="projects"
                                className="min-w-full sm:h-min-full h-44-resp cursor-pointer"
                                style={{
                                    filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
                                }}
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="DMMono col-span-2 p-1 sm:col-span-3 md:text-2xl sm:text-md text-sm flex justify-center items-center flex-col relative">
                    <motion.h1
                        className="text-white leading-relaxed font-bold relative z-20"
                        variants={heavyFadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.5}
                        viewport={{ once: true }}
                        whileHover="hover"
                    >
                        <motion.span
                            variants={glitchText}
                            className="inline-block"
                            style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                        >
                            I have done several projects.
                        </motion.span>
                        <br />
                        <motion.span
                            variants={glitchText}
                            className="inline-block"
                            style={{ textShadow: "0 0 10px rgba(139, 92, 246, 0.5)" }}
                        >
                            Everything is available on my GitHub !
                        </motion.span>
                    </motion.h1>

                    {/* Stickman Animation Area */}
                    <div ref={animationRef} className="relative w-full h-32 mt-8 mb-4">
                        {/* Ground line */}
                        <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-white/30" />

                        {/* Puzzle pieces on ground */}
                        <AnimatePresence>
                            {puzzlePositions.current.map((pos, index) => (
                                !collectedPuzzles.includes(index) && (
                                    <motion.div
                                        key={`puzzle-${index}`}
                                        className="absolute bottom-12"
                                        style={{ left: `${pos}%` }}
                                        initial={{ scale: 0, rotate: 0, opacity: 0 }}
                                        animate={{
                                            scale: 1,
                                            rotate: [0, 360],
                                            y: [0, -8, 0],
                                            opacity: 1
                                        }}
                                        exit={{
                                            scale: [1, 1.5, 0],
                                            y: -80,
                                            opacity: 0,
                                            rotate: 720
                                        }}
                                        transition={{
                                            y: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.2
                                            },
                                            rotate: {
                                                duration: 0.6,
                                                ease: "easeOut"
                                            },
                                            exit: {
                                                duration: 0.8,
                                                ease: "easeInOut"
                                            }
                                        }}
                                    >
                                        <PuzzlePieceSVG color={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#ef4444"][index]} />
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>

                        {/* Particle effects */}
                        <AnimatePresence>
                            {particleEffects.map(particle => (
                                <motion.div
                                    key={particle.id}
                                    className="absolute bottom-8"
                                    style={{ left: `${particle.x}%` }}
                                    initial={{ scale: 1, opacity: 1 }}
                                    animate={{
                                        y: -100,
                                        opacity: 0,
                                        scale: 2
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                >
                                    <div className="relative">
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                                                animate={{
                                                    x: Math.cos(i * Math.PI / 4) * 50,
                                                    y: Math.sin(i * Math.PI / 4) * 50,
                                                    opacity: [1, 0]
                                                }}
                                                transition={{ duration: 1 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {/* Stickman */}
                        <motion.div
                            className="absolute bottom-10"
                            style={{
                                left: `${stickmanPosition}%`,
                                transform: 'translateX(-50%)'
                            }}
                        >
                            <StickmanSVG
                                isWalking={true}
                                isBending={puzzlePositions.current.some(pos => Math.abs(stickmanPosition - pos) < 5)}
                                animationKey={animationKey}
                            />
                        </motion.div>

                        {/* Score display */}
                        <motion.div
                            className="absolute top-0 right-0 text-white font-bold text-xl"
                            animate={{
                                scale: collectedPuzzles.length > 0 ? [1, 1.2, 1] : 1
                            }}
                        >
                            <span className="text-yellow-400">🧩</span> {collectedPuzzles.length}/6
                        </motion.div>

                        {/* Restart indicator when scrolled back into view */}
                        {isInViewRef && animationKey > 0 && (
                            <motion.div
                                className="absolute top-0 left-0 text-green-400 font-bold text-sm"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                            </motion.div>
                        )}
                    </div>

                    {/* GitHub Button */}
                    <motion.div
                        className="mt-10 lg:mb-2 md:mb-5 mb-3 flex justify-center relative z-20"
                        variants={heavyFadeUp}
                        initial="hidden"
                        whileInView="visible"
                        custom={0.7}
                        viewport={{ once: true }}
                    >
                        <motion.a
                            href="https://github.com/Elyes3"
                            className="inline-block md:p-5 p-3 text-white font-bold underline-none rounded-lg relative overflow-hidden"
                            variants={magneticButton}
                            initial="rest"
                            whileHover="hover"
                            whileTap="tap"
                            onHoverStart={() => setIsButtonHovered(true)}
                            onHoverEnd={() => setIsButtonHovered(false)}
                            style={{
                                background: isButtonHovered
                                    ? "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)"
                                    : "linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)",
                                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                                border: "2px solid transparent",
                                backgroundClip: "padding-box",
                            }}
                        >
                            {/* Animated border */}
                            <motion.div
                                className="absolute inset-0 rounded-lg"
                                style={{
                                    background: "linear-gradient(135deg, #93c5fd, #60a5fa, #3b82f6, #1e40af)",
                                    backgroundSize: "300% 300%",
                                    opacity: isButtonHovered ? 1 : 0.5,
                                    zIndex: -1,
                                    margin: "-2px"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 0%", "100% 100%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />

                            {/* Electric effect */}
                            {isButtonHovered && (
                                <motion.div
                                    className="absolute inset-0 pointer-events-none"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-full h-0.5 bg-white"
                                            style={{
                                                top: `${30 + i * 20}%`,
                                                filter: "blur(1px)"
                                            }}
                                            animate={{
                                                x: ["-100%", "200%"],
                                                opacity: [0, 1, 0]
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.1,
                                                repeat: Infinity,
                                                repeatDelay: 1
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            )}

                            <motion.span
                                className="relative z-10 flex items-center gap-2"
                                animate={isButtonHovered ? {
                                    scale: [1, 1.05, 1],
                                    transition: {
                                        duration: 0.3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }
                                } : {}}
                            >
                                <motion.i
                                    className="devicon-github-original md:text-2xl text-md"
                                    animate={isButtonHovered ? {
                                        rotate: 360,
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }
                                    } : {}}
                                />
                                Check my GitHub
                            </motion.span>
                        </motion.a>
                    </motion.div>

                    {/* Animated SVG decoration */}
                    <motion.img
                        src="images/Projects.svg"
                        alt="projectssvg"
                        className="sm:absolute sm:bottom-0 sm:left-0 w-9 sm:w-16"
                        animate={{
                            rotate: [12, 30, 12],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            filter: "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
                        }}
                    />
                </div>
            </div>

            <TitleComponent title="Sample Of Projects" />

            <div className="grid md:grid-cols-3 grid-cols-1 gap-x-20 gap-y-16 p-5">
                {projectsData.map((projectData, index) => (
                    <motion.div
                        key={projectData.img}
                        initial={{
                            opacity: 0,
                            y: 100,
                            rotateX: -90,
                            scale: 0.5
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            scale: 1,
                            transition: {
                                delay: index * 0.2,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }
                        }}
                        whileHover={{
                            y: -20,
                            scale: 1.05,
                            rotateY: 5,

                            transition: {
                                type: "spring",
                                stiffness: 300
                            }
                        }}
                        viewport={{ once: true }}
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: "1000px"
                        }}
                    >
                        <ProjectComponent
                            img={projectData.img}
                            title={projectData.title}
                            description={projectData.description}
                            color={projectData.color}
                            badges={projectData.badges}
                            duration={projectData.duration * 1000}
                            state={projectData.state}
                            link={projectData.link}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsComponent;