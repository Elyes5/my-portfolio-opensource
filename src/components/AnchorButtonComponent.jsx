function AnchorButtonComponent({ icon, text, contact, scrollToSection }) {
  return (
    <>
      <div
        onClick={() => scrollToSection(contact)}
        className="cursor-pointer inline-block md:p-5 p-3 border-2 border-blue-500 text-blue-500 underline-none rounded-lg hover:bg-blue-500 hover:text-neutral-800 "
      >
        {icon && <i className={icon + " md:text-2xl  text-md"}></i>} {text}
      </div>
    </>
  );
}
export default AnchorButtonComponent;
