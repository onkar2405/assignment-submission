import React from "react";
import CircularProfileIcon from "./CircularProfileIcon";
import { BsThreeDots } from "react-icons/bs";

const CardComponent = ({
  name,
  initials,
  text,
  dateCount,
  backgroundColor,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center space-x-4">
        <div>
          <div className="flex items-center space-x-4 mb-2">
            <CircularProfileIcon
              initials={initials}
              backgroundColor={backgroundColor}
            />
            <h3 className="text-lg font-medium">{name}</h3>
          </div>
          <p className="text-black">{text}</p>
          <hr className="my-4"></hr>
          <p className="flex items-center gap-2 text-sm text-gray-500">
            <BsThreeDots />
            {dateCount} Dates
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
