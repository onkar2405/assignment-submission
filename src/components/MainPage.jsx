import MainContent from "./mainpanel/MainContent";
import MainPanel from "./mainpanel/MainPanel";
import NavBar from "./navbar/NavBar";

const MainPage = () => {
  return (
    <div className="relative bg-white w-90 m-auto rounded-xl border border-gray-200">
      <div className="absolute w-webkit-fill-available -top-6 move-left-20 z-10">
        <NavBar />
      </div>
      <div className="mt-28">
        <MainContent />
        <div className="w-90 m-auto shadow-xl mt-20">
          <MainPanel />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
