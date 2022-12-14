import HeaderComponent from './HeaderComponent'
import PresentationComponent from './PresentationComponent'
import AboutComponent from './AboutComponent'
import ExperienceComponent from './ExperienceComponent'
import SkillsComponent from './SkillsComponent'
import ProjectsComponent from './ProjectsComponent'
import ContactComponent from './ContactComponent'
import FooterComponent from './FooterComponent'
import { BrowserRouter } from 'react-router-dom'
function Main(){
    return (
        <>
          <BrowserRouter>
            <HeaderComponent/>
            <PresentationComponent/>
            <DividerComponent/>
            <AboutComponent/>
            <DividerComponent/>
            <ExperienceComponent />
            <DividerComponent/>
            <SkillsComponent/>
            <DividerComponent/>
            <ProjectsComponent/>
            <DividerComponent/>
            <ContactComponent/>
            <DividerComponent/>
            <FooterComponent/>
          </BrowserRouter>

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