import TitleComponent from "./TitleComponent"
import AnchorButtonComponent from "./AnchorButtonComponent";
function About(){
    return (
        <>
            <TitleComponent title="About Me"></TitleComponent>
            <div className = "grid grid-cols-8 sm:grid-cols-4 text-center">
              <div className="relative sm:col-span-1 col-span-2">
                <img src="images/Wave2.png" className="min-w-full min-h-full" alt="Vector2"/>
                <div className="absolute top-0 min-h-full min-w-full flex justify-center items-center">
                <img src="images/AboutMe.png" alt="AboutMe"  className="min-w-full sm:h-min-full h-44-resp"/>
                </div>
              </div>
              <div className="DMMono col-span-6 p-1 sm:col-span-3 md:text-2xl sm:text-md text-sm sm:flex items-center flex-col">
                <div className="text-white leading-relaxed">
                I am a software engineering student. I am passionate about web development and cloud technologies.
                <br></br>
                Feel free to contact me. It is just through a simple button click ! We could make a great collaboration together ! 
                </div>
                <div className="lg:mt-24 md:mt-12 sm:mt-10 mt-5 lg:mb-2 md:mb-5 mb-3 flex justify-center items-center">
                <img src="images/ArrowsLeft.svg" alt="left-arrow" className="sm:w-min-full w-1/5"/>
                    <div className="inline-block">
                        <AnchorButtonComponent link="https://github.com/Elyes5" text="Contact Me"  />
                    </div>
                    <img src="images/ArrowsRight.svg" alt="right-arrow" className="sm:w-min-full w-1/5"/>
                </div>
              </div>
            </div>
        </>
    )
}
export default About;