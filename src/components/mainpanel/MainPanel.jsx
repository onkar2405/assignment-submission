import React from "react";
import SideBar from "../leftpanel/SideBar";
import UserProfilesWrapper from "../rightpanel/UserProfilesWrapper";

const MainPanel = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 rounded-xl">
      <SideBar />
      <div className="lg:flex-1 p-8 mt-4 lg:mt-0">
        <UserProfilesWrapper />
      </div>
    </div>
  );
};

export default MainPanel;
