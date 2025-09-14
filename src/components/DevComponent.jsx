import { motion } from "framer-motion";

function DevComponent({ icon, name, duration }) {
    const zoomIn = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: duration / 1000 } },
    };

    return (
        <motion.div
            className="flex justify-center items-center flex-col md:mt-24 mt-5"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <i className={`${icon} md:text-7xl sm:text-4xl text-xl text-blue-400`}></i>
            <p className="text-blue-400 DMMono md:text-md text-sm">{name}</p>
        </motion.div>
    );
}

export default DevComponent;