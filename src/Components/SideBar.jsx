import { NavLink } from "react-router-dom";
import EnglishBtn from "./EnglishBtn";
import {
  AiOutlineUserAdd,
  AiOutlineMessage,
  AiFillDashboard,
} from "react-icons/ai";
import { useState } from "react";
const SideBar = () => {
  const [active, setactive] = useState("");
  const Links = [
    {
      name: "Dashboard",
      to: "/db",
      icon: <AiFillDashboard />,
    },
    {
      name: "Profile",
      to: "p",
      icon: "",
    },
    {
      name: "Inventory",
      to: "i",
      icon: "",
    },
    {
      name: "Purchase Request",
      to: "dashboard",
      icon: "",
    },
    {
      name: "Items Request ",
      to: "dashboard",
      icon: "",
    },
    {
      name: "Mettings",
      to: "metting",
      icon: "",
    },
    {
      name: "Messages",
      to: "messages",
      icon: <AiOutlineMessage />,
    },
    {
      name: "Users",
      to: "users",
      icon: <AiOutlineUserAdd />,
    },
    {
      name: "Settings",
      to: "s",
      icon: "",
    },
  ];
  return (
    <div className="bg-white    rounded-lg w-1/4 ">
      <div className="text-center  divide-y  divide-double">
        <EnglishBtn />
      </div>
      <div>
        {Links.map((link, i) => {
          return (
            <NavLink
              to={link.to}
              className=" mx-4 m-2 px-3 py-2 flex items-center gap-1 text-slate-700 hover:bg-GreenT rounded-md "
              key={i}
              onClick={() => setactive(link.name)}
            >
              <span
                className={`${
                  active === link.name ? "text-YellowT" : "text-GreenT"
                }`}
              >
                {link.icon}
              </span>
              {link.name}
            </NavLink>
          );
        })}
      </div>
      <div className="text-center font-semibold">
        <button className="bg-RedT px-3 py-1 rounded-md  mb-4">Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
