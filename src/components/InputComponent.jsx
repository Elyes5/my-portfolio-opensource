function InputComponent({ name, placeholder, changeValue, formData }) {
  return (
    <div>
      <label htmlFor={name} className="DMMono text-white">
        {name}
      </label>
      <br></br>
      <input
        name={name}
        onChange={changeValue}
        placeholder={placeholder}
        required
        className="p-1 rounded-md placeholder-gray bg-neutral-700 border-2 border-blue-400 text-white"
        value={formData}
      />
    </div>
  );
}
export default InputComponent;
