import { useEffect, useState } from "react";
import { AiOutlineSend, AiOutlineSmile, AiOutlineUpload } from "react-icons/ai";

import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  Timestamp,
  collectionGroup,
} from "firebase/firestore";
import { Auth, db } from "../Services/Firebase.config";

const Messages = () => {
  const [newChat, setchat] = useState("");
  const [Messages, setMessages] = useState([]);
  const MessageRef = collection(db, "chats");

  useEffect(() => {
    const QueryMEssage = query(
      MessageRef,
      where("room", "==", "chatting"),
      orderBy("createAt")
    );
    const unSub = onSnapshot(QueryMEssage, (snap) => {
      let chats = [];
      snap.forEach((doc) => {
        chats.push({ ...doc.data(), id: doc.id });
      });
      setMessages(chats);
      console.log(Messages);
    });

    return () => unSub();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (newChat === "") return;
    const user = Auth.currentUser;
    console.log(user);
    const phoneNumber = user.phoneNumber;
    await addDoc(MessageRef, {
      text: newChat,
      createAt: serverTimestamp(),
      user: phoneNumber,
      room: "chatting",
      date: Timestamp.now(),
    });

    setchat("");
  };

  return (
    <div className="flex gap-2 text-textColor">
      <div className="bg-white rounded-lg divide-y w-full text-textColor">
        <div className="text-end p-4 divide-y-2">Messages</div>
        <div className="p-6  max-h-96 min-h-96 overflow-auto">
          {Messages.map((val, i) => {
            console.log(val);
            return (
              <>
                {Messages[i].user == Auth.currentUser.phoneNumber ? (
                  <div className=" flex gap-1 my-2 justify-end">
                    <div className="px-4 py-2  bg-BlueT text-white inline-block rounded-lg">
                      <p className="text-sm">{val.text}</p>
                      <p className="text-[10px] ">40:33 PM</p>
                    </div>
                    <div>
                      <img
                        src="https://hub.dummyapis.com/Image?"
                        alt=""
                        className="rounded-full inline-block"
                        width={30}
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" flex gap-1 ">
                    <div>
                      <img
                        src="https://hub.dummyapis.com/Image?"
                        alt=""
                        className="rounded-full inline-block"
                        width={30}
                      />
                    </div>
                    <div className="px-4 py-2  bg-chatl inline-block rounded-lg">
                      <p className="text-sm">{val.text}</p>
                      {/* <p className="text-[10px] text-end">{val}</p> */}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <form onSubmit={submit} className="p-4 flex justify-between">
          <button className="bg-BlueT p-3 rounded-full text-white  ">
            <AiOutlineSend />
          </button>
          <div className="flex items-center  justify-end gap-3 w-full">
            <input
              onChange={(e) => setchat(e.target.value)}
              type="text"
              placeholder="Type Your Message Here  . . . ."
              className="w-4/5 py-2 px-4 text-end"
              value={newChat}
            />
            <AiOutlineUpload />

            <AiOutlineSmile />
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg  divide-y px-5 py-2 w-1/4">
        <div className=" flex items-center gap-2 justify-end">
          <div>
            <p className="font-semibold">Usman</p>
            <p>JSJS22</p>
          </div>
          <div>
            <img
              src="https://hub.dummyapis.com/Image?"
              className="rounded-full w-10"
            />
          </div>
        </div>
        <div className="py-5">
          <p className="font-semibold text-end px-2">Direct Messages</p>
          <div className="flex items-center gap-2 my-2 justify-end">
            <p>Ward Willian </p>
            <img
              src="https://hub.dummyapis.com/Image?"
              className="rounded-full w-10"
              alt=""
            />
          </div>
          <div className="flex items-center gap-2 my-2 justify-end">
            <p>Jack Andrew </p>
            <img
              src="https://hub.dummyapis.com/Image?"
              className="rounded-full w-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
