import { useEffect } from "react";
import { GetUserList } from "../Services/UserLishHooks";
import { useState } from "react";
import {
  AiFillEye,
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
const Users = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    GetUserList().then((val) => setdata(val));
  }, []);
  console.log(data?.data);

  return (
    <div className="bg-white   p-5 rounded-lg divide-y text-textColor ">
      <div className="divide-y-8">
        <div className="flex justify-between  ">
          <button className="bg-GreenT py-1 px-3 rounded-lg text-white flex gap-1 items-center">
            Add Users <span className="text-YellowT text-2xl">+</span>
          </button>
          <div className="flex items-center gap-2 font-semibold">
            Users
            <p className=" bg-lightGreen text-GreenT p-1 rounded-lg">
              <AiOutlineUser />
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="text-end my-2">Search</p>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search by Purchase Request ID"
            className="text-end w-full py-2 border px-2 rounded-lg"
          />
          <div>
            <input
              type="text"
              placeholder="Cost Center"
              className="text-end px-2 border py-2 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className=" flex  justify-around bottom-7">
          <p className="w-full">Actions</p>

          <p className="w-full">Image</p>

          <p className="w-full">Phone</p>
          <p className="w-full">Email</p>
          <p className="w-full text-end">Users</p>
        </div>
        <div className="divide-y  text-sm ">
          {data?.data?.map((val, i) => {
            return (
              <div key={i} className="flex   items-start p-4 ">
                <div className="flex gap-3 w-full">
                  <AiFillEye />
                  <AiFillEdit />
                  <AiOutlineDelete />
                </div>
                <div className="w-full">
                  <img
                    src={val.imageUrl}
                    width={40}
                    className="rounded-full"
                    alt=""
                  />
                </div>

                <div className="w-full">{val.contactNumber}</div>

                <div className="w-full">{val.email}</div>

                <div className="w-full text-end">{val.firstName}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
