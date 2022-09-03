import TitleComponent from "./TitleComponent";
import DevComponent from "./DevComponent";
function SkillsComponent(){
const devLogos = [
    {
        name : 'HTML5',
        icon : 'devicon-html5-plain',
        duration:'400'
    },
    {
        name : 'CSS3',
        icon : 'devicon-css3-plain',
        duration:'450'
    },
    {
        name : 'Vue',
        icon : 'devicon-vuejs-plain',
        duration:'500'
    },
    {
        name : 'React',
        icon : 'devicon-react-original',
        duration:'550'
    },
    {
        name : 'Spring',
        icon : 'devicon-spring-plain',
        duration:'600',
    },
    {
        name:'Tailwind',
        icon : 'devicon-tailwindcss-plain',
        duration:'650'
    },
    {
        name : 'Git',
        icon : 'devicon-git-plain',
        duration:'700'
    },
    {
        name : 'Nodejs',
        icon : 'devicon-nodejs-plain',
        duration:'750'
    },

    {
        name : 'MySQL',
        icon : 'devicon-mysql-plain',
        duration : '800'
    },
    {
        name : 'JS',
        icon : 'devicon-javascript-plain',
        duration : '850'
    },
    {
        name:'Bootstrap',
        icon : 'devicon-bootstrap-plain',
        duration:'900'
    },

    {
        name : 'PHP',
        icon : 'devicon-php-plain',
        duration:'950'
    },
]
return (
<div>
    <TitleComponent title="Skills" ></TitleComponent>
    <div className="grid grid-cols-9 sm:grid-cols-4">
        <div className="col-span-6 sm:col-span-3">
            <div className="sm:flex">
                <div className="flex-col">
                    <h1 className="DMMono text-white ml-3 sm:indent-16 md:text-left text-center  md:text-2xl text-sm leading-relaxed">I have the experience !</h1>
                    <h1 className="DMMono text-white ml-3 sm:indent-16 md:text-left text-center md:text-xl text-sm leading-relaxed">Here is my toolbelt for success.</h1>
                </div>
                <div className="flex-row-reverse sm:block flex">
                <img className="sm:w-24 sm:h-24 h-12 w-12 " src="images/Brain.png" alt="brain"></img>
                </div>
            </div>
            <div className="md:indent-16">
            <div className="w-full grid sm:grid-cols-6 grid-cols-3 ">
                { devLogos.map(devLogo =>  <DevComponent key={devLogo.icon} icon={devLogo.icon} name={devLogo.name} duration={devLogo.duration}></DevComponent>)
               
                }
            </div>
            </div>
            
        </div>
        <div className="col-span-3 sm:col-span-1 relative sm:min-h-full">
            <img src="images/Wave2.png" className="rotate-180 min-w-full min-h-full" alt="wave2"/>
            <div className="absolute top-0 right-0 flex justify-center items-center min-w-full min-h-full">
                <img src="images/Skills.png" className="sm:min-h-full min-w-full h-44-resp" data-aos-duration="500" alt="skills" data-aos="fade-up"/>
            </div>
        </div>
    </div>
</div>)
}
export default SkillsComponent