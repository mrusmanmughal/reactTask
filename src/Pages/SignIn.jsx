import { useState } from "react";
import EnglishBtn from "../Components/EnglishBtn";
import FormBtn from "../Components/FormBtn";
import SideSection from "../UI/SideSection";
import { Auth } from "../Services/Firebase.co";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { GetLanguage } from "../Context/UseLanguagContext";
const SignIn = () => {
  const [Number, setNumber] = useState("");
  const [code, setcode] = useState("");
  const { language } = GetLanguage();
  const onSignInSubmit = (e) => {
    e.preventDefault();

    window.recaptchaVerifier = new RecaptchaVerifier(
      Auth,
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          getcaptcha();
        },
      }
    );
  };
  const getcaptcha = () => {
    const phone = +923049513443;

    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(Auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
        console.log("first");
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...

        console.log(error);
      });
  };

  return (
    <>
      <div className="w-full ">
        <div className="px-10">
          <EnglishBtn />
          <div className="flex gap-10 ">
            <SideSection />
            <div className="w-full flex flex-col justify-center gap-5">
              <form className="flex flex-col gap-4" onSubmit={onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <div className="text-end  font-semibold text-textColor text-xl">
                  {language ? "أدخل رقم هاتفك" : " Enter your phone number"}
                </div>
                <div className="flex  gap-5  my-3">
                  <input
                    type="number"
                    name="number"
                    placeholder="+92 "
                    className="outline-none     w-20 border  font-light p-4 text-2xl"
                    onChange={(e) => setcode(e.target.value)}
                  />
                  <input
                    type="number"
                    name="number"
                    placeholder="3xx xxxxxxx"
                    className="   w-full   outline-none  p-2 text-2xl font-light border"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div>
                  <FormBtn to="/otp">
                    {language ? "تسجيل الدخول" : "Sign In"}
                  </FormBtn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
