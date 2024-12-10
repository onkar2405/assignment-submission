import SideBar from "../leftpanel/SideBar";
import UserProfilesWrapper from "../rightpanel/UserProfilesWrapper";

const MainPanel = () => {
  return (
    <div className="flex gap-4 bg-gray-100">
      <SideBar />
      <div className="flex-1 p-8">
        <UserProfilesWrapper />
      </div>
    </div>
  );
};

export default MainPanel;
