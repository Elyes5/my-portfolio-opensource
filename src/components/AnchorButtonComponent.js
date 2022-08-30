function AnchorButtonComponent(props){
    return(
        <>
        
        <a className="inline-block md:p-5 p-3 border-2 border-blue-500 text-blue-500 underline-none rounded-lg hover:bg-blue-500 hover:text-neutral-800 transition-all" href={props.link}>
            {props.text}
        </a>
        </>
    )
}
export default AnchorButtonComponent