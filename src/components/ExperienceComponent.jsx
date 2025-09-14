import TitleComponent from "./TitleComponent.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const education = [
    {
        image: "images/ISI.svg",
        title: "Student at the Higher Institute of Computer Science",
        descriptions: [
            " Bachelor In Computer Science : Software Engineering & Information Systems (2019 > 2022)",
            " Software Engineering Diploma (2022 > 2026)",
        ],
    },
    {
        image: "images/USPN.svg",
        title: "Student at Sorbonne Paris Nord University",
        descriptions: [
            " Double Degree Excellence Program (2024 > 2026)",
            " Software Engineering Degree",
        ],
    },
];

const experiences = [
    {
        image: "images/neoXam.svg",
        title: "Web Development Intern at NeoXam (Feb 2022 > July 2022)",
        descriptions: [
            " Development of a platform that evaluates the skills and the levels of the NeoXam job candidates through dynamic timed tests",
            " Creation of RESTful APIs with Spring Boot that would be consumed by the Vue.js client",
            " JWT Authentication",
            " Front-end and back-end validation",
            " Usage of the Spring Boot Websockets API to make the real time process for the tests",
            " Creation of a responsive design with Vuejs and Bootstrap 5",
        ],
    },
    {
        image: "images/access.svg",
        title: "Full Stack Development Intern at Access International (July 2023 > Oct 2023)",
        descriptions: [
            " Development of chatbot using React and Redux",
            " Injection of the chatbot into an angular container making the app hybrid",
            " Management of user intents using DialogFlow manager and storage of the data in Firebase Firestore",
            " Allow the chatbot UI customization for the clients through firebase configuration"
        ],
    },
    {
        image: "images/ATS.png",
        title: "Full Stack Development Intern at ATS Digital Development (June 2024 > August 2024)",
        descriptions: [
            " Development of an internal event management platform using Flutter, Symfony and Riverpod",
            " Creation of a messaging websocket microservice for the chat feature",
            " Release of some features into the production environment"
        ],
    },
    {
        image: "images/NATIXIS.svg",
        title: "Java/Spring Development Intern at Natixis CIB(June 2025 > Sep 2025)",
        descriptions: [
            " Analysis of a specific that allows the storage of financial market executions into the database.",
            " Correction of exceptions and anomalies present within the app.",
            " Update of the FIX protocol message dictionaries related to each market in order to synchronize with the module FIX configuration.",
            " Documentation of the app architecture and flow for the developers.",
            " Participation in the release of many features into the production environment.",
            " Development of functionalities such as the generation of reports for the audit process."
        ],
    },
];

function getExperienceByImage(image, data) {
    return data.find((exp) => exp.image === image);
}

const ExperienceComponent = () => {
    const [selected, setSelected] = useState(null);
    const [showEducation, setShowEducation] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const element = containerRef.current;
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    const handleClick = (image) => {
        const data = showEducation ? education : experiences;
        const exp = getExperienceByImage(image, data);
        setSelected(exp);
    };

    const toggleView = () => {
        setShowEducation(!showEducation);
        setSelected(null);
    };

    const currentData = showEducation ? education : experiences;

    return (
        <div id="Experiences" className="relative py-16 overflow-hidden min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800" ref={containerRef}>
            {/* Animated background elements */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-400 opacity-10"
                animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />


            {/* Floating code elements */}
            <motion.div
                className="absolute top-1/4 left-1/4 text-6xl opacity-5"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {"</>"}
            </motion.div>

            <motion.div
                className="absolute bottom-1/3 right-1/4 text-4xl opacity-5"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                {"{}"}
            </motion.div>

            <TitleComponent title="Experiences" />

            <div className="flex flex-col justify-center items-center mb-12 sm:text-4xl text-xl text-white">
                <motion.h1
                    className="DMMono font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    Choose an experience!
                </motion.h1>
                <motion.p
                    className="DMMono mt-3 sm:text-xl text-sm text-blue-400"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Click on the logos!
                </motion.p>
            </div>

            {/* Toggle Button */}
            <motion.div
                className="flex justify-center mb-10"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.button
                    onClick={toggleView}
                    className="relative px-6 py-3 bg-gradient-to-r from-blue-300 to-blue-500 text-white rounded-full font-bold overflow-hidden DMMono z-10 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={showEducation ? "education" : "experience"}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center"
                        >
                            {showEducation ? (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                    Academic Background
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Professional Experience
                                </>
                            )}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
            </motion.div>

            <motion.div
                className="overflow-visible min-w-full relative z-10"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <motion.img
                    src="images/Code.svg"
                    alt="code"
                    className="absolute sm:top-24 top-0 sm:left-24 left-4"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Improved grid layout with better spacing */}
                <div className={`grid ${showEducation ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-8 justify-items-center px-8`}>
                    {currentData.map((item, index) => (
                        <ExperienceLogo
                            key={index}
                            image={item.image}
                            alt={item.title}
                            onClick={handleClick}
                            direction={index % 2 === 0 ? "left" : "right"}
                            isVisible={isVisible}
                            delay={0.8 + index * 0.2}
                            title={showEducation ? (index === 0 ? "ISI" : "USPN") :
                                (index === 0 ? "NeoXam" : index === 1 ? "Access" : index === 2 ? "ATS" : "Natixis")}
                        />
                    ))}
                </div>
            </motion.div>

            <motion.div
                className="flex justify-center mt-10 z-10"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.6 }}
            >
                <motion.div
                    className="sm:pb-5 sm:pl-5 sm:pr-5 sm:pt-5 pb-12 pt-5 pl-5 pr-5 bg-neutral-800/80 backdrop-blur-md md:w-8/12 w-10/12 rounded-2xl border-4 border-blue-400 shadow-2xl"
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
                        transition: { duration: 0.2 }
                    }}
                >
                    <div className="grid grid-cols-6 gap-4 items-start">
                        <div className="md:col-span-1 col-span-6 flex justify-center items-center">
                            <motion.div
                                className="w-20 h-20 rounded-full bg-gradient-to-br from-neutral-500 to-neutral-950 flex justify-center items-center shadow-lg"
                                key={selected?.image}
                                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.7, type: "spring" }}
                            >
                                {selected && (
                                    <motion.img
                                        src={selected.image}
                                        alt={selected.title}
                                        className="p-2"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                    />
                                )}
                            </motion.div>
                        </div>
                        <div className="md:col-span-5 col-span-6 flex flex-col gap-5">
                            <AnimatePresence mode="wait">
                                {selected ? (
                                    <motion.div
                                        key={selected.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <motion.div
                                            className="bg-neutral-700/50 DMMono text-blue-400 md:text-xl text-md md:text-left text-center rounded-xl p-3 mb-4 border border-blue-400/30"
                                            whileHover={{ scale: 1.01 }}
                                        >
                                            {selected.title}
                                        </motion.div>
                                        <motion.div
                                            className="bg-neutral-700/30 border-l-4 border-l-blue-400 p-4 rounded-xl"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2, duration: 0.5 }}
                                        >
                                            <ul className="mb-5">
                                                {selected.descriptions.map((desc, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="DMMono text-white text-sm mb-3 flex items-start"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <motion.span
                                                            className="inline-block mr-2 text-blue-400"
                                                            animate={{ scale: [1, 1.2, 1] }}
                                                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                                                        >
                                                            •
                                                        </motion.span>
                                                        {desc}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        className="text-center py-10 text-blue-300 DMMono"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.div
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-lg"
                                        >
                                            Select a logo to see details
                                        </motion.div>
                                        <motion.div
                                            className="mt-4 text-4xl"
                                            animate={{ y: [0, -10, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            👆
                                        </motion.div>
                                        <motion.p
                                            className="mt-4 text-blue-200 text-sm"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {showEducation ? "Click on a school logo to learn about my education" : "Click on a company logo to learn about my experience"}
                                        </motion.p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Additional decorative elements */}
            <motion.div
                className="absolute top-1/3 left-10 text-yellow-300 text-3xl opacity-30"
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
            >
                ⚡
            </motion.div>

            <motion.div
                className="absolute bottom-1/4 right-16 text-green-300 text-3xl opacity-30"
                animate={{ y: [0, 20, 0], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            >
                ✨
            </motion.div>
        </div>
    );
};

const ExperienceLogo = ({ image, alt, onClick, direction, isVisible, delay = 0, title }) => {
    const rollingVariants = {
        hidden: {
            x: direction === "left" ? -100 : 100,
            y: 50,
            rotate: direction === "left" ? -180 : 180,
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 1,
                delay: delay
            }
        }
    };

    return (
        <motion.div
            className="logo-roller-container cursor-pointer flex flex-col items-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={rollingVariants}
            whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onClick(image)}
        >
            <motion.div
                className="logo-roller w-20 h-20 text-center rounded-full bg-gradient-to-br from-neutral-600 to-neutral-950 DMMono text-xl border-4 border-blue-400 flex justify-center items-center shadow-lg mb-2"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <motion.img
                    src={image}
                    alt={alt}
                    className="p-2"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                />
            </motion.div>
            <motion.div
                className="text-blue-300 text-xs DMMono text-center max-w-[100px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.5 }}
            >
                {title}
            </motion.div>
        </motion.div>
    );
};

export default ExperienceComponent;