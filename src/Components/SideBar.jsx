import { NavLink, Navigate, useNavigate } from "react-router-dom";
import EnglishBtn from "./EnglishBtn";
import {
  AiOutlineUserAdd,
  AiOutlineMessage,
  AiFillDashboard,
} from "react-icons/ai";
import { useState } from "react";
import { GetLanguage } from "../Context/UseLanguagContext";
import { signOut } from "firebase/auth";
import { UseAuth } from "../Context/AuthContext";
import { Auth } from "../Services/Firebase.config";
const SideBar = () => {
  const [active, setactive] = useState("");
  const { language } = GetLanguage();
  const navigate = useNavigate();
  const Links = [
    {
      name: "Dashboard",
      to: "/db",
      icon: <AiFillDashboard />,
      arabic: "لوحة القيادة",
    },
    {
      name: "Profile",
      to: "p",
      icon: "",
      arabic: "حساب تعريفي",
    },
    {
      name: "Inventory",
      to: "i",
      icon: "",
      arabic: "جرد",
    },
    {
      name: "Purchase Request",
      to: "dashboard",
      icon: "",
      arabic: "طلب الشراء",
    },
    {
      name: "Items Request ",
      to: "dashboard",
      icon: "",
      arabic: "طلب الأصناف",
    },
    {
      name: "Mettings",
      to: "metting",
      icon: "",
      arabic: "ميتينغس",
    },
    {
      name: "Messages",
      to: "chat",
      icon: <AiOutlineMessage />,
      arabic: "رسائل",
    },
    {
      name: "Users",
      to: "users",
      icon: <AiOutlineUserAdd />,
      arabic: "المستخدمون",
    },
    {
      name: "Settings",
      to: "s",
      icon: "",
      arabic: "إعدادات",
    },
  ];
  const { dispatch } = UseAuth();

  const handleLogOut = async () => {
    await signOut(Auth);
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
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
              className=" mx-4 m-2 px-3 py-2 flex items-center gap-1 text-slate-700 hover:bg-GreenT hover:text-white rounded-md "
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
              {language ? link.arabic : link.name}
            </NavLink>
          );
        })}
      </div>
      <div className="text-center font-semibold">
        <button
          className="bg-RedT px-3 py-1 rounded-md  mb-4"
          onClick={handleLogOut}
        >
          {language ? "تسجيل خروج" : "Logout"}
        </button>
      </div>
    </div>
  );
};

export default SideBar;
