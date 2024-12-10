const Label = ({ icon, text, active, onClick }) => {
  return (
    <button
      className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md border-l-4 border-transparent ${
        active ? "border-l-blue-500" : "hover:bg-gray-100 hover:text-gray-800"
      }`}
      onClick={onClick}
    >
      <span className="text-gray-500">{icon}</span>
      <p>{text}</p>
    </button>
  );
};
export default Label;
