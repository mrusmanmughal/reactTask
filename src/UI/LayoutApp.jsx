import { Outlet } from "react-router-dom";

const LayoutApp = () => {
  return (
    <div className="px-5">
      <Outlet />
    </div>
  );
};

export default LayoutApp;
