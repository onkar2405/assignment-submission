/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { DropButton } from "./DropButton";
import { RiApps2Line } from "react-icons/ri";
import { PiTreeStructure } from "react-icons/pi";
import { GoDatabase } from "react-icons/go";
import { LuNotepadText } from "react-icons/lu";
import { FaBlogger } from "react-icons/fa";

const resourceList = [
  { name: "Templates", icon: <RiApps2Line /> },
  { name: "Blogs", icon: <LuNotepadText /> },
];

const blogList = [
  {
    name: "Blog1",
    icon: <FaBlogger />,
  },
  {
    name: "Blog2",
    icon: <FaBlogger />,
  },
];

const productList = [
  {
    name: "App Builder",
    icon: <RiApps2Line />,
  },
  {
    name: "Workflows",
    icon: <PiTreeStructure />,
  },
  {
    name: "Database",
    icon: <GoDatabase />,
  },
];

const NavBar = () => {
  return (
    <nav className="bg-gray-800 w-60 text-white rounded-xl">
      <div className="container px-1 py-1 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="bg-blue-500 w-10 h-10 rounded-xl mr-4"></div>
          <DropButton name="Products" resourceList={productList} />
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Pricing
          </a>
          <DropButton name={"Blog"} resourceList={blogList} />
          <DropButton name="Resources" resourceList={resourceList} />
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Download
          </a>
          <a href="#" className="text-sm font-medium hover:text-gray-300">
            Sign In
          </a>
        </div>
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl">
          Start for free
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
