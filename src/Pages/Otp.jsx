import EnglishBtn from "../Components/EnglishBtn";
import FormBtn from "../Components/FormBtn";
import SideSection from "../UI/SideSection";
const Otp = () => {
  return (
    <div className="w-full">
      <div className="px-10">
        <EnglishBtn />
        <div className="flex gap-10">
          <SideSection />
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="text-end">
              <p className="text-2xl font-medium text-slate-600">
                We Just Texted You!
              </p>
              <p className="text-sm text-slate-500">
                Please enter the code we just sent you all
              </p>
              <p className="text-GreenT font-medium">+92304765347</p>
            </div>
            <div className="text-end my-2 ">
              <span className="bg-BlueT p-2 rounded-md">00</span> :
              <span className="bg-BlueT p-2 rounded-md ms-1">30</span>
            </div>

            <form className="flex gap-5 justify-center">
              <input
                type="number"
                className="inputs"
                maxLength={1}
                placeholder="5"
              />
              <input type="number" className="  inputs" placeholder="5" />
              <input type="number" className="  inputs" placeholder="5" />
              <input type="number" className=" inputs" placeholder="5" />
            </form>
            <div>
              <FormBtn to={"/dashboard"}>Verify</FormBtn>
            </div>
            <div className="font-thin text-end">
              Did not receive OTP?{" "}
              <span className="text-GreenT font-medium">Resent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
