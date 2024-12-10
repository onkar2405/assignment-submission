import React from "react";

const CircularProfileIcon = ({ initials, backgroundColor }) => {
  return (
    <div
      className={`bg-${backgroundColor}-500 text-white rounded-full flex items-center justify-center w-16 h-16`}
    >
      <span className="text-xl font-bold">{initials}</span>
    </div>
  );
};

export default CircularProfileIcon;
