import BadgeComponent from "./BadgeComponent.jsx";
function ProjectComponent({
  img,
  title,
  description,
  badges,
  color,
  duration,
}) {
  return (
    <div className="justify-center flex md:mb-0 mb-5">
      <div
        className="max-w-sm bg-neutral-700 rounded-xl cursor-pointer order shadow-md border-2 border-blue-400"
        data-aos="flip-right"
        data-aos-duration={duration}
      >
        <div className={color + " rounded-t-lg overflow-hidden"}>
          <img
            className="rounded-t-lg scale-105 transition-all hover:scale-125"
            src={img}
            alt={img}
          />
        </div>
        <div className="p-2">
          <h5 className="mb-2 lg:text-2xl md:text-md text-xl font-bold tracking-tight text-blue-400 dark:text-white DMMono">
            {title}
          </h5>
          <p className="mb-3 lg:text-md text-xs font-normal text-white DMMono">
            {description}
          </p>
          <div className="flex flex-wrap gap-y-1">
            {badges.map((badge, index) => (
              <BadgeComponent key={index} name={badge}></BadgeComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectComponent;
