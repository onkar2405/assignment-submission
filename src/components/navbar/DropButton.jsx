import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const DropButton = ({ name, resourceList }) => {
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center text-sm font-medium hover:text-gray-300"
        onClick={toggleResourcesDropdown}
      >
        {name}
        <IoIosArrowDown className="ml-1" />
      </button>
      {isResourcesDropdownOpen && (
        <ul className="absolute bg-gray-800 text-white mt-2 rounded-xl shadow-md ">
          {resourceList.map((resource, index) => (
            <li
              key={index}
              className="flex gap-2 width-160px items-center p-4 hover:bg-gray-700 rounded-xl"
            >
              {resource.icon} {resource.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
