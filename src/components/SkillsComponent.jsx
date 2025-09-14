import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleComponent from "./TitleComponent.jsx";

function SkillsComponent() {
    const [skills, setSkills] = useState([
        { id: 1, name: "HTML5", icon: "devicon-html5-plain", duration: 0.4, category: "frontend", color: "bg-orange-500" },
        { id: 2, name: "CSS3", icon: "devicon-css3-plain", duration: 0.45, category: "frontend", color: "bg-blue-500" },
        { id: 3, name: "Vue", icon: "devicon-vuejs-plain", duration: 0.5, category: "frontend", color: "bg-green-500" },
        { id: 4, name: "React", icon: "devicon-react-original", duration: 0.55, category: "frontend", color: "bg-cyan-500" },
        { id: 5, name: "Spring", icon: "devicon-spring-plain", duration: 0.6, category: "backend", color: "bg-emerald-500" },
        { id: 6, name: "Tailwind", icon: "devicon-tailwindcss-plain", duration: 0.65, category: "frontend", color: "bg-teal-500" },
        { id: 7, name: "Git", icon: "devicon-git-plain", duration: 0.7, category: "tools", color: "bg-red-500" },
        { id: 8, name: "Nodejs", icon: "devicon-nodejs-plain", duration: 0.75, category: "backend", color: "bg-lime-500" },
        { id: 9, name: "MySQL", icon: "devicon-mysql-plain", duration: 0.8, category: "database", color: "bg-blue-600" },
        { id: 10, name: "JS", icon: "devicon-javascript-plain", duration: 0.85, category: "frontend", color: "bg-yellow-500" },
        { id: 11, name: "Bootstrap", icon: "devicon-bootstrap-plain", duration: 0.9, category: "frontend", color: "bg-purple-600" },
        { id: 12, name: "PHP", icon: "devicon-php-plain", duration: 0.95, category: "backend", color: "bg-indigo-500" },
    ]);

    const [removedSkills, setRemovedSkills] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");

    // Enhanced text animations with typewriter effect
    const typewriterVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut",
                opacity: { duration: 0.1 }
            }
        }
    };

    // Text sliding variants
    const textSlideVariants = {
        hidden: {
            x: -100,
            opacity: 0,
            filter: "blur(4px)"
        },
        visible: (delay = 0) => ({
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        })
    };

    // Brain animation with floating effect
    const brainVariants = {
        hidden: {
            scale: 0,
            rotate: -180,
            opacity: 0
        },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.3,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    // Skills grid container with wave effect
    const skillsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.5
            }
        }
    };

    // Individual skill animations with different effects based on category
    const skillVariants = {
        hidden: (category) => ({
            opacity: 0,
            scale: 0,
            rotate: category === "frontend" ? -90 : category === "backend" ? 90 : 0,
            y: category === "tools" ? -50 : category === "database" ? 50 : 0,
            x: category === "frontend" ? -30 : category === "backend" ? 30 : 0
        }),
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: 0,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 12,
                duration: 0.8
            }
        },
        exit: {
            opacity: 0,
            y: 300,
            rotate: 45,
            scale: 0.5,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        }
    };

    // Character illustration animations
    const characterVariants = {
        hidden: {
            scale: 0.5,
            opacity: 0,
            rotate: -10,
            y: 100
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotate: 0,
            y: 0,
            transition: {
                duration: 1.2,
                delay: 0.8,
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    // Wave background animation
    const waveVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
            rotateX: 45
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 1.5,
                delay: 0.5,
                ease: "easeOut"
            }
        }
    };

    // Handle skill removal
    const removeSkill = (skill) => {
        setSkills(prev => prev.filter(s => s.id !== skill.id));
        setRemovedSkills(prev => [...prev, skill]);

        // Show message
        setCurrentMessage(`Oh well, I guess I don't have ${skill.name} anymore.`);
        setShowMessage(true);

        // Hide message after 3 seconds
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    // Reset all skills
    const resetSkills = () => {
        setSkills([
            { id: 1, name: "HTML5", icon: "devicon-html5-plain", duration: 0.4, category: "frontend", color: "bg-orange-500" },
            { id: 2, name: "CSS3", icon: "devicon-css3-plain", duration: 0.45, category: "frontend", color: "bg-blue-500" },
            { id: 3, name: "Vue", icon: "devicon-vuejs-plain", duration: 0.5, category: "frontend", color: "bg-green-500" },
            { id: 4, name: "React", icon: "devicon-react-original", duration: 0.55, category: "frontend", color: "bg-cyan-500" },
            { id: 5, name: "Spring", icon: "devicon-spring-plain", duration: 0.6, category: "backend", color: "bg-emerald-500" },
            { id: 6, name: "Tailwind", icon: "devicon-tailwindcss-plain", duration: 0.65, category: "frontend", color: "bg-teal-500" },
            { id: 7, name: "Git", icon: "devicon-git-plain", duration: 0.7, category: "tools", color: "bg-red-500" },
            { id: 8, name: "Nodejs", icon: "devicon-nodejs-plain", duration: 0.75, category: "backend", color: "bg-lime-500" },
            { id: 9, name: "MySQL", icon: "devicon-mysql-plain", duration: 0.8, category: "database", color: "bg-blue-600" },
            { id: 10, name: "JS", icon: "devicon-javascript-plain", duration: 0.85, category: "frontend", color: "bg-yellow-500" },
            { id: 11, name: "Bootstrap", icon: "devicon-bootstrap-plain", duration: 0.9, category: "frontend", color: "bg-purple-600" },
            { id: 12, name: "PHP", icon: "devicon-php-plain", duration: 0.95, category: "backend", color: "bg-indigo-500" },
        ]);
        setRemovedSkills([]);
    };

    return (
        <div id="Skills" className="relative min-h-screen py-12 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden">
            {/* Floating bubbles background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-10"
                        style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            background: `hsl(${Math.random() * 360}, 70%, 70%)`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="text-center mb-12">
                <TitleComponent title="Skills" />
            </div>

            {/* Message notification */}
            <AnimatePresence>
                {showMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-800 p-4 rounded-lg shadow-xl border border-blue-500 max-w-md"
                    >
                        <div className="flex items-center">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 0.5, repeat: 3 }}
                                className="text-2xl mr-2"
                            >
                                😢
                            </motion.div>
                            <p className="text-white font-medium">{currentMessage}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 lg:grid-cols-9 overflow-hidden relative z-10 px-4">
                <div className="lg:col-span-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-8">
                        <div className="flex-col text-center lg:text-left">
                            <motion.div
                                className="overflow-hidden"
                                variants={typewriterVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                <motion.h1
                                    className="text-white ml-3 lg:indent-16 text-center lg:text-left text-2xl lg:text-3xl leading-relaxed whitespace-nowrap font-medium"
                                    variants={textSlideVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    custom={0}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    I have the experience !
                                </motion.h1>
                            </motion.div>

                            <motion.h1
                                className="text-gray-300 ml-3 lg:indent-16 text-center lg:text-left text-xl lg:text-2xl leading-relaxed mt-2 font-medium"
                                variants={textSlideVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={0.2}
                                viewport={{ once: false, amount: 0.3 }}
                            >
                                Here is my toolbelt for success.
                            </motion.h1>
                        </div>

                        <motion.div
                            className="flex-row-reverse lg:block flex mt-4 lg:mt-0"
                            variants={brainVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                            }}
                        >
                            <img
                                className="lg:w-24 lg:h-24 h-16 w-16 filter drop-shadow-lg"
                                src="https://cdn-icons-png.flaticon.com/512/2785/2785815.png"
                                alt="brain"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:indent-16">
                        <AnimatePresence>
                            <motion.div
                                className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                                variants={skillsContainerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <AnimatePresence>
                                    {skills.map((skill) => (
                                        <motion.div
                                            key={skill.id}
                                            layout
                                            variants={skillVariants}
                                            custom={skill.category}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            whileHover={{
                                                scale: 1.15,
                                                rotate: [0, -5, 5, 0],
                                                transition: {
                                                    duration: 0.4,
                                                    rotate: { duration: 0.6 }
                                                }
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => removeSkill(skill)}
                                            className={`cursor-pointer transform transition-all ${skill.color} rounded-2xl p-3 flex flex-col items-center justify-center shadow-lg hover:shadow-xl border-2 border-gray-700`}
                                        >
                                            <i className={`${skill.icon} text-4xl text-white`}></i>
                                            <span className="text-white text-xs mt-2 font-medium">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </AnimatePresence>

                        {/* Reset button */}
                        {removedSkills.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 text-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={resetSkills}
                                    className="bg-gradient-to-r from-blue-300 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center mx-auto"
                                >
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        className="mr-2"
                                    >
                                        🔄
                                    </motion.span>
                                    Reset All Skills
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </div>

                <div className="lg:col-span-3 relative lg:min-h-full mt-12 lg:mt-0">
                    <motion.img
                        style={{ rotate: 180 }}
                        src="images/Wave2.png"
                        className="min-w-full min-h-full opacity-70"
                        alt="wave2"
                        variants={waveVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    />
                    <motion.div
                        className="absolute top-0 right-0 flex justify-center items-center min-w-full min-h-full"
                        variants={characterVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        animate={{
                            y: [0, -15, 0],
                            x: [0, 5, -5, 0]
                        }}
                        transition={{
                            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <img
                            src="images/Skills.png"
                            className="lg:min-h-full filter drop-shadow-2xl max-w-xs lg:max-w-none"
                            width="300"
                            alt="skills"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default SkillsComponent;