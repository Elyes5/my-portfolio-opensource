import HeaderComponent from "./HeaderComponent.jsx";
import PresentationComponent from "./PresentationComponent.jsx";
import AboutComponent from "./AboutComponent.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import SkillsComponent from "./SkillsComponent.jsx";
import ProjectsComponent from "./ProjectsComponent.jsx";
import ContactComponent from "./ContactComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import { BrowserRouter } from "react-router-dom";
function MainComponent() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <PresentationComponent />
        <DividerComponent />
        <AboutComponent />
        <DividerComponent />
        <ExperienceComponent />
        <DividerComponent />
        <SkillsComponent />
        <DividerComponent />
        <ProjectsComponent />
        <DividerComponent />
        <ContactComponent />
        <DividerComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}
function DividerComponent() {
  return (
    <div className="mt-7 mb-7 flex justify-center">
      <hr className="bg-blue-400 w-64 h-1 border-0"></hr>
    </div>
  );
}
export default MainComponent;
