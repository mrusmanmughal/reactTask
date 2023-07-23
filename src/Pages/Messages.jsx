import { AiOutlineSend, AiOutlineSmile, AiOutlineUpload } from "react-icons/ai";
const Messages = () => {
  return (
    <div className="flex gap-2 text-textColor">
      <div className="bg-white rounded-lg divide-y w-full text-textColor">
        <div className="text-end p-4 divide-y-2">Messages</div>
        <div className="p-6 ">
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
              <p className="text-sm">hi, Abdullah How Are You ?</p>
              <p className="text-[10px] text-end">40:33 PM</p>
            </div>
          </div>
          <div className=" flex gap-1 my-2 justify-end">
            <div className="px-4 py-2  bg-BlueT text-white inline-block rounded-lg">
              <p className="text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ab voluptas neque reiciendis obcaecati
              </p>
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

          {/* 3nd and 4th */}
          <div className=" flex gap-1 my-2 ">
            <div>
              <img
                src="https://hub.dummyapis.com/Image?"
                alt=""
                className="rounded-full inline-block"
                width={30}
              />
            </div>
            <div className="px-4 py-2  bg-chatl inline-block rounded-lg">
              <p className="text-sm">hi, Abdullah How Are You ?</p>
              <p className="text-[10px] text-end">40:33 PM</p>
            </div>
          </div>
          <div className=" flex gap-1 my-2   justify-end ">
            <div className="px-4 py-2 w-3/4  bg-BlueT text-white inline-block rounded-lg">
              <p className="text-sm">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                ab voluptas neque reiciendis obcaecati consectetur adipisicing
                elit. Fugit ab voluptas neque reiciendis obcaecati
              </p>
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
              <p className="text-sm">hi, Abdullah How Are You ?</p>
              <p className="text-[10px] text-end">40:33 PM</p>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-between">
          <div className="bg-BlueT p-3 rounded-full text-white  ">
            <AiOutlineSend />
          </div>
          <div className="flex items-center  justify-end gap-3 w-full">
            <input
              type="text"
              placeholder="Type Your Message Here  . . . ."
              className="w-4/5 p-2 text-end"
            />
            <AiOutlineUpload />

            <AiOutlineSmile />
          </div>
        </div>
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
