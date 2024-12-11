const CardButton = ({ name }) => {
  return (
    <button className="border border-gray-400 border-b-4 px-4 rounded mt-4 group-hover:text-white">
      {name}
    </button>
  );
};

export default CardButton;
