import {
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlineSearch,
} from "react-icons/ai";
import pic from "../Assets/slice.png";
const UserHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center rounded-lg px-5 py-3 mb-3  text-textColor bg-white">
        <div className="flex gap-5  items-center text-2xl">
          <div className="relative">
            <p className="bg-GreenT  absolute rounded-full h-3 w-3 right-1"></p>
            <img
              src="https://hub.dummyapis.com/Image?"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>{" "}
          <div className="relative">
            <p className="bg-RedT absolute rounded-full h-2 w-2 right-1 "></p>
            <AiOutlineBell />
          </div>
          <div className="relative">
            <p className="bg-RedT absolute rounded-full h-2 w-2 right-1 "></p>

            <AiOutlineMessage />
          </div>
          <div>
            <AiOutlineSearch />
          </div>
        </div>
        <div className="font-semibold">HI ! Usman</div>
      </div>
    </>
  );
};

export default UserHeader;
