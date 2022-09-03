function BadgeComponent({name}){
    return(
        <div>
            <span className="bg-blue-200 text-neutral-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-neutral-700">{name}</span>
        </div>
    )
}
export default BadgeComponent