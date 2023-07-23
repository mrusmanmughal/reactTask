import EnglishBtn from "../Components/EnglishBtn";
import FormBtn from "../Components/FormBtn";
import SideSection from "../UI/SideSection";
const SignIn = () => {
  return (
    <>
      <div className="w-full ">
        <div className="px-10">
          <EnglishBtn />
          <div className="flex gap-10 ">
            <SideSection />
            <div className="w-full flex flex-col justify-center gap-5">
              <div className="text-end text-2xl text-slate-500  font-medium">
                Enter your phone number
              </div>
              <form className="flex gap-5 ">
                {" "}
                <input
                  type="text"
                  placeholder=" +92 "
                  className="placeholder-slate-400 placeholder:font-bold  border  w-28 p-5  text-2xl"
                />
                <input
                  type="text"
                  placeholder="3xx xxxxxxx"
                  className="   w-full  px-5 text-2xl font-light border"
                />
              </form>
              <div>
                <FormBtn to="/otp">Sign Up</FormBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
