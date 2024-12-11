import React from "react";

const Content = () => {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="bg-green-500 w-8 h-8 rounded-full flex justify-center items-center text-white">
              <i className="fas fa-folder-open"></i>
            </div>
            <p className="text-xl font-bold ml-2">Files</p>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="bg-blue-500 w-8 h-8 rounded-full flex justify-center items-center text-white">
              <i className="fas fa-file-alt"></i>
            </div>
            <p className="text-xl font-bold ml-2">Documents</p>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <div className="bg-pink-500 w-12 h-8 rounded-r-full flex justify-center items-center text-white">
              <i className="far fa-envelope"></i>
              <p className="ml-2">Email</p>
            </div>
            <div className="bg-gray-200 w-8 h-8 rounded-l-full flex justify-center items-center text-black">
              <p>01</p>
            </div>
            <p className="text-xl font-bold ml-2">Events</p>
          </div>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
