import TitleComponent from "./TitleComponent";
import AnchorButtonComponent from "./AnchorButtonComponent";
import ProjectComponent from "./ProjectComponent";
function ProjectsComponent(){
    const projectsData = [
        {
            img : 'images/PJ1.png',
            title : 'NeoExams Test App',
            description : 'Dynamic tests for NeoXam job candidates',
            badges : ['Spring Boot','Vue','MySQL','HTML','CSS','Bootstrap 5'],
            color : "bg-slate-550",
            duration : '500'
        },
        {
            img : 'images/PJ2.png',
            title : 'Quiz App',
            description : 'Beautiful App built with XML and Java and Firebase to evaluate your android knowledge',
            badges : ['Android','XML','Java','Firebase','Mobile'],
            color : "bg-[#4054b4]",
            duration : '900'

        },
        {
            img : 'images/PJ3.png',
            title : 'Info Plus',
            description : 'E-commerce platform that sells gaming computers, headphones...',
            badges : ['PHP','HTML','CSS','MySQL','JavaScript'],
            color : "bg-sky-400",
            duration : '1300'

        }
    ]
    return (
        <>
        <div>
                <TitleComponent title="Projects"></TitleComponent>

            <div className = "grid grid-cols-3 sm:grid-cols-4">
                <div className="flex">

                    <div className="relative sm:col-span-1 col-span-1" >
                    <img src="images/Wave4.png" className="min-w-full min-h-full"/>
                        <div className="absolute left-0 top-0 min-h-full min-w-full flex justify-center items-center">
                            <img data-aos-duration="500" data-aos="fade-up" src="images/Projects.png" alt="projects"  className="min-w-full sm:h-min-full h-44-resp"/>
                        </div>
                    </div>
                </div>
                <div  className="DMMono col-span-2 p-1 sm:col-span-3 md:text-2xl sm:text-md text-sm flex justify-center items-center flex-col relative">
                
                <h1 data-aos-duration="500" data-aos-delay="500" data-aos="fade-right" className="text-white leading-relaxed">
                I have done several projects.
                <br></br>
                Everything is available on my GitHub !
                </h1>
                <img src="images/Projects.svg" className="sm:absolute  sm:bottom-0 sm:left-0 w-9 sm:w-16  rotate-12"/>
                <div className=" mt-10 lg:mb-2 md:mb-5 mb-3 flex justify-center">
                    <div className="inline-block" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                        <AnchorButtonComponent link="https://github.com/Elyes5" text="Check My GitHub" icon="devicon-github-original" />
                    </div>
                </div>
              </div>
            </div>
                <TitleComponent title="Sample Of Projects"></TitleComponent>
                <div className="grid md:grid-cols-3 grid-cols-1 flex gap-x-20 p-5">
                    {projectsData.map(projectData => <ProjectComponent key={projectData.img} img={projectData.img} title={projectData.title} description={projectData.description} color={projectData.color} badges={projectData.badges} duration={projectData.duration}></ProjectComponent>)}
                    
                </div>

        </div>
        </>
    )
}
export default ProjectsComponent;