import React from "react";
import { IoMdDocument } from "react-icons/io";
import { MdCalendarToday, MdEmail, MdFileOpen } from "react-icons/md";

const Content = () => {
  return (
    <div>
      <h1 className="flex flex-wrap text-5xl space-x-0 lg:space-x-0">
        Excepteur sint occaecat dolore
        <span className="flex items-center text-blue-300">
          <MdEmail /> Email
        </span>
        <span className="flex items-center text-pink-500">
          <MdCalendarToday /> Events
        </span>
        <span className="flex items-center text-green-600">
          <MdFileOpen /> Files
        </span>
        <span className="flex items-center text-blue-700">
          <IoMdDocument /> Documents
        </span>
      </h1>
    </div>
  );
};

export default Content;
