import TitleComponent from "./TitleComponent.jsx";
import { HashLink as Link } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function About({ contact, scrollToSection }) {
  useEffect(() => {
    Aos.init();
    window.addEventListener("load", Aos.refresh);
  });
  return (
    <div id="About">
      <TitleComponent title="About Me"></TitleComponent>
      <div className="grid grid-cols-8 sm:grid-cols-4 text-center">
        <div className="relative sm:col-span-1 col-span-2">
          <img
            src="images/Wave2.png"
            className="min-w-full min-h-full"
            alt="Vector2"
          />
          <div className="absolute top-0 min-h-full min-w-full flex justify-center items-center">
            <img
              data-aos-duration="500"
              data-aos="fade-up"
              src="images/AboutMe.png"
              alt="AboutMe"
              className="min-w-full sm:h-min-full "
            />
          </div>
        </div>
        <div className="DMMono col-span-6 p-1 sm:col-span-3 md:text-2xl sm:text-md text-sm sm:flex items-center flex-col">
          <h1
            data-aos-duration="500"
            data-aos-delay="500"
            data-aos="fade-right"
            className="text-white leading-relaxed"
          >
            I am a software engineering student. I am passionate about web
            development and cloud technologies.
            <br></br>
            Feel free to contact me. It is just through a simple button click !
            We could make a great collaboration together !
          </h1>
          <div className="lg:mt-24 md:mt-12 sm:mt-10 mt-5 lg:mb-2 md:mb-5 mb-3 flex justify-center items-center">
            <img
              src="images/ArrowsLeft.svg"
              alt="left-arrow"
              className="sm:w-min-full w-1/5"
              data-aos="fade"
              data-aos-delay="250"
              data-aos-duration="250"
            />
            <div
              className="inline-block"
              data-aos="fade-up"
              data-aos-duration="250"
            >
              <div className="cursor-pointer inline-block md:p-5 p-3 border-2 border-blue-500 text-blue-500 underline-none rounded-lg hover:bg-blue-500 hover:text-neutral-800 ">
                <Link
                  to="#Contact"
                  smooth
                  key="Contact"
                  aria-current={"Contact" ? "page" : undefined}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <img
              src="images/ArrowsRight.svg"
              alt="right-arrow"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-duration="250"
              className="sm:w-min-full w-1/5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
