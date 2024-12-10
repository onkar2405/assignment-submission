import React from "react";

const JobCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md group hover:bg-black duration-300">
      <h2 className="text-2xl font-bold mb-4 group-hover:text-white">WSJ</h2>
      <p className="text-gray-600 group-hover:text-white">
        At pulvinar pulvinar mi dui efficitur? Mollis varius ullamcorper rutrum
        enim, netus nisi. Nibh magna curabitur vestibulum himenaeos eget
        sollicitudin consectetur velit.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        LOREM IPSUM
      </button>
    </div>
  );
};

export default JobCard;
