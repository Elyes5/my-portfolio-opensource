function PresentationComponent(){
return(
 <div className="overflow-hidden animate-scale">
    <div className="grid md:grid-cols-2 ">
    <div className="flex flex-col items-center justify-center">
        <div className="mt-5 flex justify-between">
            <img  src='images/JS.svg' alt="JS"/>
            <img src='images/bootstrap.svg' alt="bootstrap"  className="ml-24 rotate-45"/>
        </div>
        <div className="p-5">
        <div className="mb-5">
            <h1 className="DMMono md:text-4xl text-2xl text-white text-center md:leading-relaxed">
             Hello, I am Elyes.
            <br></br>
            I am a <span className="text-blue-400">Software <br></br>
            engineering student</span>
            </h1>
        </div>
        <div className="flex justify-evenly">
        <img  src='images/HTML.svg' alt="HTML" className="rotate-12"/>
        <img  src='images/CSS.svg' alt="CSS" className="rotate-45"/>
        </div>
        </div>
    </div>
    <div className="text-white md:relative">
    <img  src='images/wave.png' alt="wave" className="min-h-full min-w-full md:block hidden"/>
    <img src='images/DeveloperBlackBg.png' alt="dev1"className="md:block hidden absolute bottom-0" />
    <div className="md:hidden block min-w-full justify-center">
    <img src="images/DeveloperBlueBg.png" className="min-w-full"  alt="dev2"/>
    </div>
    </div>
    </div>
    </div>

)
}
export default PresentationComponent;