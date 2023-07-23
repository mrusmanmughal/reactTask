import { Outlet } from "react-router-dom";
import UserHeader from "../Components/UserHeader";
import SideBar from "../Components/SideBar";

const LayoutApp = () => {
  return (
    <div className="p-5 bg-bgBlue ">
      <div className="flex gap-5 ">
        <div className="w-full">
          <UserHeader />
          <Outlet />
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default LayoutApp;
