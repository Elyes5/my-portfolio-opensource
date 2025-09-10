function DevComponent(props) {
  return (
    <>
      <div
        className="flex justify-center items-center flex-col md:mt-24 mt-5"
        data-aos="zoom-in"
        data-aos-duration={props.duration}
      >
        <i
          className={
            props.icon + " md:text-7xl sm:text-4xl text-xl text-blue-400"
          }
        ></i>
        <p className="text-blue-400 DMMono md:text-md text-sm">{props.name}</p>
      </div>
    </>
  );
}
export default DevComponent;
