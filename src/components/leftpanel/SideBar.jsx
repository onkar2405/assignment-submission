import {
  FaCheckSquare,
  FaEdit,
  FaInbox,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import Label from "./Label";
import Profile from "./Profile";
import { useState } from "react";

const SideBar = () => {
  const [activeLabel, setActiveLabel] = useState("Inbox");

  const handleLabelClick = (label) => {
    setActiveLabel(label);
  };

  return (
    <div className="bg-white flex flex-col w-50">
      <Profile />
      <hr className="mx-4"></hr>
      <div className="mt-8 flex-1">
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
  );
};

export default SideBar;
