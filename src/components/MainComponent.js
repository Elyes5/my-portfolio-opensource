import HeaderComponent from './HeaderComponent'
import PresentationComponent from './PresentationComponent'
import AboutComponent from './AboutComponent'
function Main(){
    return (
        <>
            <HeaderComponent/>
            <PresentationComponent/>
            <div className="min-w-full">
            <DividerComponent/>
            <AboutComponent/>
            </div>

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