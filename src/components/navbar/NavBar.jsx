import React, { useState, useEffect, useRef } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 w-80 lg:w-80 text-white rounded-xl">
      <div className="container px-1 py-1 flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <div className="bg-blue-500 w-10 h-10 rounded-xl mr-4"></div>

          <div className="hidden xl-custom:flex gap-6">
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

          <button
            className="xl-custom:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="xl-custom:hidden absolute top-0 left-0 w-30 bg-gray-800 text-white p-4 rounded-b-xl"
          >
            <div className="flex flex-col gap-4">
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
              <div>
                <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl mt-4">
                  Start for free
                </button>
              </div>
            </div>
          </div>
        )}

        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-xl lg:block hidden">
          Start for free
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
