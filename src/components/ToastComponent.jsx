function ToastComponent({ show, text, handleShow }) {
  return (
    <div className=" right-5 top-5 fixed z-50">
      {show && (
        <div
          className="max-w-xs bg-green-200 border rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 fade-enter"
          role="alert"
        >
          <div className="flex p-4 relative">
            <div className="absolute right-2 top-0 DMMono" onClick={handleShow}>
              x
            </div>
            <div className="flex-shrink-0">
              <svg
                className="h-4 w-4 text-green-500 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-700 dark:text-gray-400 DMMono">
                {text}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ToastComponent;
