import { useEffect } from "react";
import GetUserList from "../Services/UserLishHooks";
import { useState } from "react";
import {
  AiFillEye,
  AiFillEdit,
  AiOutlineDelete,
  AiOutlineUser,
  AiOutlineMessage,
} from "react-icons/ai";
import { GetLanguage } from "../Context/UseLanguagContext";

const Users = () => {
  const [list, setlist] = useState();

  const { language } = GetLanguage();

  const { data, isError, isLoading } = GetUserList();

  useEffect(() => {
    setlist(data);
  }, [data]);

  console.log(data);

  return (
    <div className="bg-white   p-5 rounded-lg divide-y text-textColor ">
      <div className="divide-y-8">
        <div className="flex justify-between  ">
          <button className="bg-GreenT py-1 px-3 rounded-lg text-white flex gap-1 items-center">
            {language ? "إضافة مستخدم" : "Add Users"}{" "}
            <span className="text-YellowT text-2xl">+</span>
          </button>
          <div className="flex items-center gap-2 font-semibold">
            {language ? "مستخدم" : " Users"}
            <p className=" bg-lightGreen text-GreenT p-1 rounded-lg">
              <AiOutlineUser />
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <p className="text-end my-2">{language ? "يبحث" : "search"}</p>
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

      <div role="table ">
        <div className=" flex  justify-around bottom-7 p-5 border-b font-semibold">
          <p className="w-full">{language ? "أجراءات" : "Actions"}</p>

          <p className="w-full">{language ? "صورة" : "Website"}</p>

          <p className="w-full">{language ? "بريد إلكتروني" : "Phone"}</p>
          <p className="w-full">{language ? "بريد إلكتروني" : "Email"}</p>
          <p className="w-full text-end">{language ? "المستخدمين" : "Users"}</p>
        </div>
        <div className="divide-y  text-sm ">
          {list?.data?.map((val, i) => {
            return (
              <div key={i} className="flex   items-start p-4 ">
                <div className="flex gap-3 w-full">
                  <AiFillEye />
                  <AiFillEdit />
                  <AiOutlineDelete />
                </div>
                <div className="w-full">{val.website}</div>

                <div className="w-full">{val.phone}</div>

                <div className="w-full">{val.email}</div>

                <div className="w-full text-end">{val.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
