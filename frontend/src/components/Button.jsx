function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
