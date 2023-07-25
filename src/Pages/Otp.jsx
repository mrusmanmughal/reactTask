import { useState } from "react";
import EnglishBtn from "../Components/EnglishBtn";
import FormBtn from "../Components/FormBtn";
import SideSection from "../UI/SideSection";
import OtpInput from "react-otp-input";
import { GetLanguage } from "../Context/UseLanguagContext";
const Otp = () => {
  const { language } = GetLanguage();
  const [otp, setOtp] = useState("");
  return (
    <div className="w-full">
      <div className="px-10">
        <EnglishBtn />
        <div className="flex gap-10">
          <SideSection />
          <div className="w-full flex flex-col justify-center gap-4">
            <div className="text-end">
              <p className="text-2xl font-medium text-slate-600">
                {language
                  ? "نحن فقط أرسلنا لك رسالة نصية!"
                  : "We Just Texted You! "}
              </p>
              <p className="text-sm text-slate-500">
                {language
                  ? "الرجاء إدخال الرمز الذي أرسلناه لكم جميعًا"
                  : "Please enter the code we just sent you all"}
              </p>
              <p className="text-GreenT font-medium">+92304765347</p>
            </div>
            <div className="text-end my-2 ">
              <span className="bg-BlueT p-2 rounded-md">00</span> :
              <span className="bg-BlueT p-2 rounded-md ms-1">30</span>
            </div>

            <form className="flex gap-5 justify-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                containerStyle="otp-container "
                placeholder="6"
                shouldAutoFocus={true}
              />
            </form>
            <div>
              <FormBtn to={"/dashboard"}>
                {language ? "يؤكد" : "Verify"}
              </FormBtn>
            </div>
            <div className="font-thin text-end">
              {language ? "لم تستلم OTP ?" : " Did not receive OTP?"}{" "}
              <span className="text-GreenT font-medium">
                {language ? "مستاء" : "Resent"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
