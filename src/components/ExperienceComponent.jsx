import TitleComponent from "./TitleComponent.jsx";
import "../animations/animations.scss";
import { CSSTransition } from "react-transition-group";
import {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const experiences = [
    {
        image: "images/ISI.svg",
        title: "Student at the Higher Institute of Computer Science",
        descriptions: [
            "-Bachelor In Computer Science : Software Engineering & Information Systems (2019 > 2022)",
            "-Software Engineering Diploma (2022 > 2026)",
        ],
    },
    {
        image: "images/neoXam.svg",
        title: "Web Development Intern at NeoXam",
        descriptions: [
            "-Development of a platform that evaluates the skills and the levels of the NeoXam job candidates through dynamic timed tests",
            "-Creation of RESTful APIs with Spring Boot that would be consumed by the Vue.js client",
            "-JWT Authentication",
            "-Front-end and back-end validation",
            "-Usage of the Spring Boot Websockets API to make the real time process for the tests",
            "-Creation of a responsive design with Vuejs and Bootstrap 5",
        ],
    },
];

function getExperienceByImage(image) {
    return experiences.find((exp) => exp.image === image);
}

const ExperienceComponent = () => {
    const [data, setData] = useState({
        image: "",
        title: "",
        descriptions: [],
        date: "",
    });
    const [animate, setAnimate] = useState(false);

    const handleExperienceClick = (image) => {
        if (!data.image) {
            setAnimate(true);
            setData(getExperienceByImage(image));
        } else if (data.image !== image) {
            setAnimate(false);
            setTimeout(() => {
                setAnimate(true);
                setData(getExperienceByImage(image));
            }, 500);
        }
    };

    return (
        <div id="Experiences">
            <TitleComponent title="Experiences" />
            <div className="flex-col flex justify-center items-center mb-12 sm:text-4xl text-xl text-white">
                <h1 className="DMMono">Choose an experience !</h1>
                <p className="DMMono mt-3 sm:text-xl text-sm text-blue-400">
                    Click on the logos !
                </p>
            </div>

            <div className="grid grid-cols-2 min-w-full overflow-x-hidden relative">
                <img
                    src="images/Code.svg"
                    alt="code"
                    className="absolute sm:top-24 top-0 sm:left-24 left-4 rotate-45"
                />
                <div>
                    <ExperienceLogo
                        image="images/ISI.svg"
                        alt="ISI"
                        direction="left"
                        onClick={handleExperienceClick}
                    />
                </div>
                <div>
                    <ExperienceLogo
                        image="images/neoXam.svg"
                        alt="neoxam"
                        direction="right"
                        onClick={handleExperienceClick}
                    />
                </div>
            </div>

            <div className="flex justify-center">
                <div
                    className={
                        "inline-block rounded bg-neutral-600" +
                        (!data.date ? "p-0" : "p-3  ")
                    }
                ></div>
            </div>

            <div className="flex justify-center items-center mb-5">
                <div className="sm:pb-5 sm:pl-5 sm:pr-5 sm:pt-5 pb-12 pt-5 pl-5 pr-5 bg-neutral-700 md:w-6/12 w-10/12 rounded border-5 border-blue-400 ">
                    <div className="grid grid-cols-6">
                        <div className="md:col-span-1 col-span-6 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-neutral-600 flex justify-center items-center">
                                <CSSTransition in={animate} classNames="side-fade" timeout={500}>
                                    <div>
                                        <img src={data.image} alt={data.image} />
                                    </div>
                                </CSSTransition>
                            </div>
                        </div>
                        <CSSTransition in={animate} classNames="vertical-fade" timeout={1000}>
                            <div className="flex-col col-span-6 md:col-span-5 md:mt-0 mt-3 gap-y-5 flex md:ml-4">
                                <div
                                    className={
                                        "min-w-full rounded" +
                                        (!data.title
                                            ? " bg-neutral-600 h-8"
                                            : "bg-neutral-700 DMMono text-blue-400 md:text-xl text-md md:text-left text-center ")
                                    }
                                >
                                    {data.title}
                                </div>
                                <div className="vertical-fade flex-col gap-y-5 flex relative">
                                    <div
                                        className={
                                            "min-w-full min-h-24 " +
                                            (!data.descriptions.length
                                                ? "bg-neutral-600"
                                                : "bg-neutral-700 border-l-2 pt-0 p-3 border-l-blue-400 circle")
                                        }
                                    >
                                        <ul className="mb-5">
                                            {data.descriptions.map((description, index) => (
                                                <li
                                                    key={index}
                                                    className="DMMono text-white text-sm mb-2"
                                                >
                                                    {description}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
        </div>
    );
};

function ExperienceLogo({ image, alt, onClick, direction }) {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    const animationClass = direction === "left"
        ? "logo-roll-left"
        : direction === "right"
            ? "logo-roll-right"
            : "";
    return (
        <div className="logo-roller-container">
            <div
                data-aos="rotate-translate"
                onClick={() => onClick(image)}
                className={`logo-roller cursor-pointer w-16 h-16 text-center rounded-full bg-neutral-600 DMMono text-xl border-3 text-blue-400 flex justify-center items-center border-blue-400 ${animationClass}`}
            >
                <img src={image} alt={alt} />
            </div>
        </div>
    );
}

export default ExperienceComponent;