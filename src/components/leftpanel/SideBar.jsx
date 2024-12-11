import { useState } from "react";
import {
  FaCheckSquare,
  FaEdit,
  FaInbox,
  FaStar,
  FaTrash,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Label from "./Label";
import Profile from "./Profile";

const SideBar = () => {
  const [activeLabel, setActiveLabel] = useState("Inbox");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  return (
    <div className="w-20">
      <div className="lg:hidden flex justify-between items-center p-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-blue-500"
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block bg-white flex flex-col p-4 h-full fixed inset-0 lg:relative lg:w-100 transition-all duration-300 ease-in-out`}
        style={{
          width: isSidebarOpen && window.innerWidth < 1024 ? "70%" : "100%",
          maxWidth: isSidebarOpen && window.innerWidth < 1024 ? "70%" : "100%",
        }}
      >
        <Profile />
        <hr className="mx-4" />
        <div className="mt-8 flex-1 overflow-y-auto">
          <Label
            icon={<FaInbox />}
            text="Inbox"
            active={activeLabel === "Inbox"}
            onClick={() => handleLabelClick("Inbox")}
          />
          <Label
            icon={<FaCheckSquare />}
            text="Sent"
            active={activeLabel === "Sent"}
            onClick={() => handleLabelClick("Sent")}
          />
          <Label
            icon={<FaEdit />}
            text="Drafts"
            active={activeLabel === "Drafts"}
            onClick={() => handleLabelClick("Drafts")}
          />
          <Label
            icon={<FaTrash />}
            text="Deleted"
            active={activeLabel === "Deleted"}
            onClick={() => handleLabelClick("Deleted")}
          />
          <Label
            icon={<FaStar />}
            text="Favourites"
            active={activeLabel === "Favourites"}
            onClick={() => handleLabelClick("Favourites")}
          />
        </div>
        <div className="flex flex-col mt-8 space-y-2 px-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Upgrade Plan
          </button>
          <button className="text-blue-500 py-2 px-4">Contact Support</button>
        </div>
      </div>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      />
    </div>
  );
};

export default SideBar;
