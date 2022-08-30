function TitleComponent(props){
    return (           
    <h1 className="DMMono md:text-4xl text-4xl text-blue-400 text-center md:text-left md:indent-16 mb-7 mt-7">
        {props.title}
   </h1>)
}
export default TitleComponent;