import HeaderComponent from './HeaderComponent'
import PresentationComponent from './PresentationComponent'
import AboutComponent from './AboutComponent'
import ExperienceComponent from './ExperienceComponent'
import SkillsComponent from './SkillsComponent'
import ProjectsComponent from './ProjectsComponent'
import ContactComponent from './ContactComponent'
import FooterComponent from './FooterComponent'
import {useRef} from 'react';
function Main(){
    const presentation = useRef(null);
    const about = useRef(null);
    const experiences = useRef(null);
    const skills = useRef(null);
    const projects = useRef(null);
    const contact = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top : elementRef.current.offsetTop,
            behavior : "smooth",
        })
    }
    return (
        <>
            <HeaderComponent Home={presentation} About={about} Experiences={experiences} Skills={skills} Projects={projects} Contact={contact} scrollToSection={el => scrollToSection(el)}/>
            <div id="route-presentation" ref={presentation}>
            <PresentationComponent/>
            </div>
            <DividerComponent/>
            <div id="route-presentation" ref={about}>
                <AboutComponent contact={contact} scrollToSection={el => scrollToSection(el)}/>
            </div>
            <DividerComponent/>
            <div id="route-experience" ref={experiences}>
                <ExperienceComponent />
            </div>
            <DividerComponent/>
            <div id="route-skills" ref={skills}>
                <SkillsComponent/>
            </div>
            <DividerComponent/>
            <div id="route-projects" ref={projects}>
                <ProjectsComponent/>
            </div>
            <DividerComponent/>
            <div id="route-contact" ref={contact}>
                <ContactComponent/>
            </div>
            <DividerComponent/>
            <FooterComponent/>

        </>

    )
}
function DividerComponent(){
    return (
        <div className="mt-7 mb-7 flex justify-center">
            <hr className="bg-blue-400 w-64 h-1 border-0"></hr>
        </div>
    )
}
export default Main