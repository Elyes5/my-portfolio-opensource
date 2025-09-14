import { motion } from "framer-motion";
import BadgeComponent from "./BadgeComponent.jsx";

function ProjectComponent({ img, title, description, badges, color, duration, index = 0 , state, link}) {
    // Handle card click to navigate to link
    const handleCardClick = (e) => {
        // Prevent navigation if clicking on interactive elements
        if (e.target.closest('button') || e.target.closest('a')) {
            return;
        }

        if (link) {
            // Check if link is external (starts with http/https) or internal
            if (link.startsWith('http://') || link.startsWith('https://')) {
                // Open external links in new tab
                window.open(link, '_blank', 'noopener,noreferrer');
            } else {
                // Navigate to internal links in same tab
                window.location.href = link;
            }
        }
    };

    // Enhanced card animation with more sophisticated entrance
    const cardVariants = {
        hidden: {
            rotateY: -15,
            opacity: 0,
            scale: 0.9,
            y: 50,
            filter: "blur(10px)"
        },
        visible: {
            rotateY: 0,
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: duration ? duration / 1000 : 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
                damping: 20,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Floating animation for subtle continuous movement
    const floatingVariants = {
        animate: {
            y: [-2, 2, -2],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
            }
        }
    };

    // Enhanced image container animation
    const imageContainerVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            rotateZ: -5
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateZ: 0,
            transition: {
                duration: 0.7,
                delay: (index * 0.15) + 0.3,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    // Shimmer effect for image loading
    const shimmerVariants = {
        hidden: { x: "-100%" },
        visible: {
            x: "100%",
            transition: {
                duration: 1.5,
                delay: (index * 0.15) + 0.8,
                ease: "easeInOut"
            }
        }
    };

    // Staggered content animation
    const contentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: (index * 0.15) + 0.5
            }
        }
    };

    const textItemVariants = {
        hidden: {
            y: 20,
            opacity: 0,
            filter: "blur(4px)"
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Enhanced badge animation with bounce effect
    const badgeContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: (index * 0.15) + 0.8
            }
        }
    };

    const badgeVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                bounce: 0.6
            }
        }
    };

    return (
        <div className="justify-center flex md:mb-0 mb-6">
            <motion.div
                variants={floatingVariants}
                animate="animate"
                className="max-w-sm w-full"
            >
                <motion.div
                    className={`bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-2xl border border-neutral-600/50 overflow-hidden backdrop-blur-sm relative group ${
                        link ? 'cursor-pointer' : 'cursor-default'
                    }`}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    whileHover={{
                        scale: link ? 1.03 : 1.01,
                        rotateY: 3,
                        rotateX: 2,
                        boxShadow: link
                            ? "0 25px 50px -12px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)"
                            : "0 15px 30px -12px rgba(0, 0, 0, 0.3)",
                        borderColor: link ? "rgba(59, 130, 246, 0.5)" : "rgba(115, 115, 115, 0.5)",
                        transition: {
                            duration: 0.4,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }
                    }}
                    whileTap={link ? {
                        scale: 0.98,
                        transition: { duration: 0.1 }
                    } : {}}
                    style={{
                        background: "linear-gradient(135deg, rgba(38, 38, 38, 0.9) 0%, rgba(23, 23, 23, 0.9) 100%)"
                    }}
                    onClick={handleCardClick}
                >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/5 to-purple-600/0 opacity-0 ${
                        link ? 'group-hover:opacity-100' : ''
                    } transition-opacity duration-500`} />

                    {/* Click indicator for linked cards */}
                    {link && (
                        <motion.div
                            className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                scale: [0.9, 1, 0.9],
                            }}
                            transition={{
                                scale: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <div className="bg-blue-500/90 text-white p-2 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </motion.div>
                    )}

                    {/* Image container with improved styling */}
                    <motion.div
                        className={`${color} rounded-t-2xl overflow-hidden relative`}
                        variants={imageContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        {/* Creative Status Badge */}
                        <motion.div
                            className="absolute top-4 right-4 z-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -3, 3, 0],
                                transition: {
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 300
                                }
                            }}
                        >
                            {state === "Public" ? (
                                // Public Badge - Globe with particles
                                <div className="relative">
                                    <motion.div
                                        className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white/20 backdrop-blur-sm"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(34, 197, 94, 0.4)",
                                                "0 0 30px rgba(34, 197, 94, 0.6)",
                                                "0 0 20px rgba(34, 197, 94, 0.4)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="flex items-center gap-1">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{
                                                    duration: 8,
                                                    repeat: Infinity,
                                                    ease: "linear"
                                                }}
                                            >
                                                🌍
                                            </motion.div>
                                            <span>PUBLIC</span>
                                        </div>
                                    </motion.div>

                                    {/* Floating particles for public */}
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-green-400 rounded-full"
                                            style={{
                                                top: Math.random() * 40 + "px",
                                                left: Math.random() * 60 + "px"
                                            }}
                                            animate={{
                                                y: [-10, -30, -10],
                                                opacity: [0.8, 0, 0.8],
                                                scale: [1, 0.5, 1]
                                            }}
                                            transition={{
                                                duration: 2 + i * 0.5,
                                                repeat: Infinity,
                                                delay: i * 0.3,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    ))}
                                </div>
                            ) : (
                                // Private Badge - Lock with security waves
                                <div className="relative">
                                    <motion.div
                                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg border-2 border-white/20 backdrop-blur-sm"
                                        animate={{
                                            boxShadow: [
                                                "0 0 20px rgba(245, 158, 11, 0.4)",
                                                "0 0 30px rgba(245, 158, 11, 0.6)",
                                                "0 0 20px rgba(245, 158, 11, 0.4)"
                                            ]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <div className="flex items-center gap-1">
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.1, 1]
                                                }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            >
                                                🔒
                                            </motion.div>
                                            <span>PRIVATE</span>
                                        </div>
                                    </motion.div>

                                    {/* Security waves for private */}
                                    {[...Array(2)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute inset-0 rounded-full border border-amber-400/30"
                                            animate={{
                                                scale: [1, 1.8],
                                                opacity: [0.6, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: i * 1,
                                                ease: "easeOut"
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* Shimmer effect overlay */}
                        <div className="absolute inset-0 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                variants={shimmerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                            />
                        </div>

                        <motion.img
                            className="rounded-t-2xl w-full object-cover h-48 filter group-hover:brightness-110"
                            src={img}
                            alt={title}
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            transition={{ duration: 0.4 }}
                        />

                        {/* Gradient overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Content section with improved spacing and styling */}
                    <motion.div
                        className="p-6 space-y-4"
                        variants={contentVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.h5
                            className="text-2xl font-bold tracking-tight text-blue-400 DMMono group-hover:text-blue-300 transition-colors duration-300"
                            variants={textItemVariants}
                        >
                            {title}
                        </motion.h5>

                        <motion.p
                            className="text-sm font-normal text-neutral-300 DMMono leading-relaxed group-hover:text-white transition-colors duration-300"
                            variants={textItemVariants}
                        >
                            {description}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2 pt-2"
                            variants={badgeContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            {badges.map((badge, badgeIndex) => (
                                <motion.div
                                    key={badgeIndex}
                                    variants={badgeVariants}
                                    whileHover={{
                                        scale: 1.15,
                                        y: -3,
                                        rotate: 2,
                                        transition: {
                                            duration: 0.2,
                                            type: "spring",
                                            stiffness: 300
                                        }
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                        transition: { duration: 0.1 }
                                    }}
                                >
                                    <BadgeComponent name={badge} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Subtle bottom accent line */}
                    <motion.div
                        className="h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{
                            duration: 0.8,
                            delay: (index * 0.15) + 1,
                            ease: "easeOut"
                        }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default ProjectComponent;