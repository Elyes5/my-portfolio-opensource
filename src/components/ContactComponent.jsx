import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleComponent from "./TitleComponent";

const ToastComponent = ({ show, text, handleShow }) => (
    <motion.div
        className="fixed top-8 right-8 z-50 bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
    >
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            {text}
            <button onClick={handleShow} className="ml-2 text-xl">&times;</button>
        </div>
    </motion.div>
);

function ContactComponent() {
    const [data, setData] = useState({
        fullName: "",
        subject: "",
        content: "",
    });
    const [clicked, setClicked] = useState(false);
    const [process, setProcess] = useState(false);
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [focusedField, setFocusedField] = useState(null);

    const submitForm = () => {
        setClicked(true);
        setProcess(true);
        if (
            data.fullName.trim() &&
            data.subject.trim() &&
            data.content.trim()
        ) {
            // Simulate API call
            setTimeout(() => {
                setData({ fullName: "", subject: "", content: "" });
                setClicked(false);
                setProcess(false);
                setText("Message sent successfully!");
                setShow(true);
                setTimeout(() => setShow(false), 5000);
            }, 2000);
        } else {
            setProcess(false);
        }
    };

    // Enhanced animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const mapVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    const formVariants = {
        hidden: {
            opacity: 0,
            y: 80,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring",
                stiffness: 80,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const inputVariants = {
        hidden: {
            opacity: 0,
            x: -40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const buttonVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 30
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.7,
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        },
        hover: {
            scale: 1.02,
            y: -2,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            transition: {
                duration: 0.3,
                type: "spring",
                stiffness: 300
            }
        },
        tap: {
            scale: 0.98,
            y: 0,
            transition: { duration: 0.1 }
        }
    };

    const spinnerVariants = {
        animate: {
            rotate: 360,
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const floatingVariants = {
        animate: {
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        animate: {
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="Contact" className="relative min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating orbs - darker theme */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        variants={floatingVariants}
                        animate="animate"
                        className={`absolute rounded-full ${
                            i % 3 === 0 ? 'bg-gradient-to-r from-neutral-800/20 to-neutral-700/20' :
                                i % 3 === 1 ? 'bg-gradient-to-r from-neutral-900/20 to-neutral-800/20' :
                                    'bg-gradient-to-r from-zinc-800/20 to-zinc-700/20'
                        }`}
                        style={{
                            width: `${15 + Math.random() * 30}px`,
                            height: `${15 + Math.random() * 30}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 1.2}s`,
                            filter: 'blur(2px)'
                        }}
                    />
                ))}

                {/* Subtle glow effects */}
                <motion.div
                    variants={glowVariants}
                    animate="animate"
                    className="absolute top-1/3 left-1/3 w-80 h-80 bg-neutral-800/10 rounded-full filter blur-3xl"
                />
                <motion.div
                    variants={glowVariants}
                    animate="animate"
                    className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-zinc-800/10 rounded-full filter blur-3xl"
                    style={{ animationDelay: '1.5s' }}
                />
            </div>

            <AnimatePresence>
                {show && (
                    <ToastComponent show={show} text={text} handleShow={() => setShow(false)} />
                )}
            </AnimatePresence>

            <div className="pt-5">
                <TitleComponent title="Contact" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto px-6 space-y-16"
            >
                {/* Map Section - keeping original styling */}
                <motion.div
                    variants={mapVariants}
                    className="w-full"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-r from-neutral-700/20 via-neutral-600/30 to-neutral-700/20 rounded-3xl blur-sm group-hover:blur-md transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-3xl" />

                        {/* Animated corner elements - darker theme */}
                        <div className="absolute top-6 left-6 z-10">
                            <motion.div
                                animate={{
                                    y: [-8, 8, -8],
                                    rotate: [0, 15, 0, -15, 0],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-4 h-4 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full shadow-lg shadow-neutral-400/30"
                            />
                        </div>

                        <div className="absolute top-6 right-6 z-10">
                            <motion.div
                                animate={{
                                    y: [8, -8, 8],
                                    rotate: [0, -20, 0, 20, 0],
                                    scale: [1, 1.3, 1]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="w-3 h-3 bg-gradient-to-r from-neutral-500 to-neutral-700 rounded-full shadow-lg shadow-neutral-400/30"
                            />
                        </div>

                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                            <motion.div
                                animate={{
                                    scale: [1, 1.4, 1],
                                    opacity: [0.5, 0.8, 0.5],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-5 h-5 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full shadow-lg shadow-neutral-500/40"
                            />
                        </div>

                        <motion.div
                            className="absolute inset-0 border-2 border-neutral-600/30 rounded-3xl"
                            animate={{
                                borderColor: ["rgba(115, 115, 115, 0.3)", "rgba(82, 82, 82, 0.4)", "rgba(115, 115, 115, 0.3)"]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        <iframe
                            title="map-frame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999349857049!2d2.292292615674839!3d48.85837307928709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fddf1f6b1b1%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1662200578713!5m2!1sfr!2sfr"
                            width="100%"
                            height="500"
                            className="rounded-3xl filter brightness-75 contrast-110 saturate-90 transition-all duration-700 group-hover:brightness-85"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>

                {/* Form Section - Dark Modern Theme, Same Width as Map */}
                <motion.div
                    variants={formVariants}
                    className="w-full flex justify-center"
                >
                    <div className="w-full"> {/* Changed from max-w-2xl to w-full to match map width */}
                        <div className="relative">
                            {/* Dark background effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-zinc-900/80 to-black/90 rounded-3xl blur-2xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-800/5 via-zinc-800/5 to-neutral-800/5 rounded-3xl" />

                            {/* Main form container - Ultra Dark Theme */}
                            <div className="relative bg-gradient-to-br from-zinc-950/95 via-neutral-950/95 to-black/95 backdrop-blur-xl border border-neutral-800/40 p-12 rounded-3xl shadow-2xl shadow-black/80">
                                {/* Header */}
                                <motion.div
                                    variants={inputVariants}
                                    className="text-center mb-12"
                                >
                                    <motion.h3
                                        className="text-4xl font-bold bg-gradient-to-r from-neutral-200 via-zinc-100 to-neutral-300 bg-clip-text text-transparent mb-6"
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        Get In Touch
                                    </motion.h3>

                                    <motion.div
                                        className="h-1 bg-gradient-to-r from-neutral-600 via-neutral-400 to-neutral-600 rounded-full mx-auto mb-4"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "60%" }}
                                        transition={{ duration: 1.2, delay: 0.5 }}
                                    />

                                    <motion.p
                                        className="text-neutral-400 text-lg max-w-md mx-auto"
                                        animate={{
                                            opacity: [0.6, 0.9, 0.6],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Let's create something amazing together
                                    </motion.p>
                                </motion.div>

                                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                                    {/* Full Name Input - Dark Theme */}
                                    <motion.div variants={inputVariants}>
                                        <motion.div
                                            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                                                focusedField === 'fullName'
                                                    ? 'border-neutral-500 shadow-lg shadow-neutral-900/50'
                                                    : 'border-neutral-700/50 hover:border-neutral-600'
                                            }`}
                                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                                        >
                                            {focusedField === 'fullName' && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-neutral-800/10 via-neutral-700/10 to-neutral-800/10 rounded-2xl"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}

                                            <label className="absolute top-3 left-4 text-sm text-neutral-300 font-medium z-10">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={data.fullName}
                                                onFocus={() => setFocusedField('fullName')}
                                                onBlur={() => setFocusedField(null)}
                                                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                                className="w-full pt-10 pb-4 px-4 bg-neutral-900/40 text-white text-lg rounded-2xl placeholder-neutral-500 focus:outline-none backdrop-blur-sm transition-all duration-300"
                                            />

                                            <motion.div
                                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: focusedField === 'fullName' ? '100%' : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>

                                        <AnimatePresence>
                                            {data.fullName.trim() === "" && clicked && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-3 flex items-center gap-2"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                                                        transition={{ duration: 0.5 }}
                                                        className="w-4 h-4 border-2 border-red-400 rounded-full flex items-center justify-center text-xs"
                                                    >
                                                        !
                                                    </motion.div>
                                                    Full name is required
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Subject Input - Dark Theme */}
                                    <motion.div variants={inputVariants}>
                                        <motion.div
                                            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                                                focusedField === 'subject'
                                                    ? 'border-neutral-500 shadow-lg shadow-neutral-900/50'
                                                    : 'border-neutral-700/50 hover:border-neutral-600'
                                            }`}
                                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                                        >
                                            {focusedField === 'subject' && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-neutral-800/10 via-neutral-700/10 to-neutral-800/10 rounded-2xl"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}

                                            <label className="absolute top-3 left-4 text-sm text-neutral-300 font-medium z-10">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="What would you like to discuss?"
                                                value={data.subject}
                                                onFocus={() => setFocusedField('subject')}
                                                onBlur={() => setFocusedField(null)}
                                                onChange={(e) => setData({ ...data, subject: e.target.value })}
                                                className="w-full pt-10 pb-4 px-4 bg-neutral-900/40 text-white text-lg rounded-2xl placeholder-neutral-500 focus:outline-none backdrop-blur-sm transition-all duration-300"
                                            />

                                            <motion.div
                                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: focusedField === 'subject' ? '100%' : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>

                                        <AnimatePresence>
                                            {data.subject.trim() === "" && clicked && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-3 flex items-center gap-2"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                                                        transition={{ duration: 0.5 }}
                                                        className="w-4 h-4 border-2 border-red-400 rounded-full flex items-center justify-center text-xs"
                                                    >
                                                        !
                                                    </motion.div>
                                                    Subject is required
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Message Textarea - Dark Theme */}
                                    <motion.div variants={inputVariants}>
                                        <motion.div
                                            className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                                                focusedField === 'content'
                                                    ? 'border-neutral-500 shadow-lg shadow-neutral-900/50'
                                                    : 'border-neutral-700/50 hover:border-neutral-600'
                                            }`}
                                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                                        >
                                            {focusedField === 'content' && (
                                                <motion.div
                                                    className="absolute inset-0 bg-gradient-to-r from-neutral-800/10 via-neutral-700/10 to-neutral-800/10 rounded-2xl"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                            )}

                                            <label className="absolute top-3 left-4 text-sm text-neutral-300 font-medium z-10">
                                                Message
                                            </label>
                                            <textarea
                                                placeholder="Tell me about your project, ideas, or how we can work together..."
                                                value={data.content}
                                                onFocus={() => setFocusedField('content')}
                                                onBlur={() => setFocusedField(null)}
                                                onChange={(e) => setData({ ...data, content: e.target.value })}
                                                rows="8"
                                                className="w-full pt-10 pb-4 px-4 bg-neutral-900/40 text-white text-lg rounded-2xl placeholder-neutral-500 focus:outline-none backdrop-blur-sm resize-none transition-all duration-300"
                                            />

                                            <motion.div
                                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neutral-400 to-neutral-500"
                                                initial={{ width: 0 }}
                                                animate={{ width: focusedField === 'content' ? '100%' : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </motion.div>

                                        <AnimatePresence>
                                            {data.content.trim() === "" && clicked && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="text-red-400 text-sm mt-3 flex items-center gap-2"
                                                >
                                                    <motion.div
                                                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                                                        transition={{ duration: 0.5 }}
                                                        className="w-4 h-4 border-2 border-red-400 rounded-full flex items-center justify-center text-xs"
                                                    >
                                                        !
                                                    </motion.div>
                                                    Message is required
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>

                                    {/* Submit Button - Dark Modern Theme */}
                                    <motion.button
                                        type="submit"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                        onClick={() => submitForm()}
                                        disabled={
                                            !data.fullName.trim() ||
                                            !data.subject.trim() ||
                                            !data.content.trim() ||
                                            process
                                        }
                                        className={`relative w-full py-6 px-8 rounded-2xl font-bold text-xl overflow-hidden transition-all duration-500 ${
                                            data.fullName.trim() && data.subject.trim() && data.content.trim()
                                                ? "bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 text-white shadow-lg shadow-black/40 hover:shadow-black/60 border border-neutral-600/40"
                                                : "bg-neutral-900/50 text-neutral-600 cursor-not-allowed border border-neutral-800/40"
                                        }`}
                                    >
                                        {/* Button effects */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 1 }}
                                        />

                                        {/* Subtle pulsing background */}
                                        {data.fullName.trim() && data.subject.trim() && data.content.trim() && (
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-neutral-700/30 via-neutral-600/30 to-neutral-700/30 rounded-2xl"
                                                animate={{
                                                    opacity: [0.3, 0.5, 0.3],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        )}

                                        <div className="relative flex items-center justify-center gap-4">
                                            {process ? (
                                                <>
                                                    <motion.div
                                                        variants={spinnerVariants}
                                                        animate="animate"
                                                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                                                    />
                                                    <span>Sending your message...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <motion.div
                                                        animate={{
                                                            x: [0, 4, 0],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="w-5 h-5 border-t-2 border-r-2 border-white transform rotate-45"
                                                    />
                                                </>
                                            )}
                                        </div>
                                    </motion.button>
                                </form>

                                {/* Footer message */}
                                <motion.div
                                    variants={inputVariants}
                                    className="text-center mt-6"
                                >
                                    <motion.p
                                        className="text-neutral-500 text-sm"
                                        animate={{
                                            opacity: [0.5, 0.8, 0.5],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Ready to start something amazing together?
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default ContactComponent;