import React from "react";
import CardButton from "../Common/CardButton";

const JobCard = ({ name }) => {
  return (
    <div className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md group hover:bg-black duration-300 h-96">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4 group-hover:text-white">WSJ</h2>
        <p className="text-gray-600 group-hover:text-white">
          At pulvinar pulvinar mi dui efficitur? Mollis varius ullamcorper
          rutrum enim, netus nisi. Nibh magna curabitur vestibulum himenaeos
          eget sollicitudin consectetur velit.
        </p>
      </div>
      <div>
        <hr />
        <CardButton name={name} />
      </div>
    </div>
  );
};

export default JobCard;
