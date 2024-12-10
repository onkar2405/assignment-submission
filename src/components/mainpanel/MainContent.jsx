import React from "react";

const MainContent = () => {
  return (
    <div className="bg-white text-center w-80 m-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl font-normal mb-4">
        Lorem ipsum <span className="text-blue-500">dolor sit amet</span>,{" "}
        <br />
        <span className="text-blue-500">mollit anim </span> laborum.
      </h1>
      <p className="w-50 text-gray-500 text-base mt-2 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className="relative overflow-hidden bg-black text-white font-bold py-2 px-4 rounded-xl group">
        Start for free →
        <span className="absolute inset-0 bg-blue-700 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
      </button>
      <p className="text-gray-500 text-sm mt-4">Free plan • No card required</p>
    </div>
  );
};

export default MainContent;
