import { useState } from "react";
import EnglishBtn from "../Components/EnglishBtn";
import FormBtn from "../Components/FormBtn";
import SideSection from "../UI/SideSection";
import { Auth } from "../Services/Firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { GetLanguage } from "../Context/UseLanguagContext";
import { toast } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { AuthProvider, UseAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [Number, setNumber] = useState({
    code: "",
    number: "",
  });
  const navigate = useNavigate();
  const { dispatch } = UseAuth();

  const { language } = GetLanguage();
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setuser] = useState(false);
  const { code, number } = Number;

  const handleChange = (e) => {
    setNumber((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        Auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }

  function onSignup(e) {
    e.preventDefault();
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + code + number;

    signInWithPhoneNumber(Auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        toast.success("OTP sended successfully!");
        setuser(true);
      })
      .catch((error) => {
        console.log(error);
        toast.error(" Sorry ! To many Request  Try Age Later");
        setLoading(false);
      });
  }

  function onOTPVerify(e) {
    e.preventDefault();
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        dispatch({ type: "LOGIN", payload: res });
        console.log(res.user);
        setLoading(false);
        toast.success("OTP Verified !");
        localStorage.setItem("token", JSON.stringify(res.token));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <>
      <div className="w-full ">
        <div className="px-10">
          <EnglishBtn />
          <div className="flex gap-10 ">
            <SideSection />

            {user ? (
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

                <form
                  className="flex flex-col gap-5 justify-center"
                  onSubmit={onOTPVerify}
                >
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => <input {...props} />}
                    containerStyle="otp-container"
                    placeholder="6"
                    shouldAutoFocus={true}
                  />
                  <div>
                    <FormBtn type="submit" loading={loading}>
                      {language ? "يؤكد" : "Verify"}
                    </FormBtn>
                  </div>
                </form>

                <div className="font-thin text-end">
                  {language ? "لم تستلم OTP ?" : " Did not receive OTP?"}{" "}
                  <span className="text-GreenT font-medium">
                    {language ? "مستاء" : "Resent"}
                  </span>
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col justify-center gap-5">
                <form className="flex flex-col gap-4" onSubmit={onSignup}>
                  <div id="recaptcha-container"></div>
                  <div className="text-end  font-semibold text-textColor text-xl">
                    {language ? "أدخل رقم هاتفك" : " Enter your phone number"}
                  </div>
                  <div className="flex  gap-5  my-3">
                    <input
                      value={code}
                      type="number"
                      name="code"
                      placeholder="+92 "
                      className="outline-none     w-20 border  font-light p-4 text-2xl"
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      type="number"
                      name="number"
                      placeholder="3xx xxxxxxx"
                      className="   w-full   outline-none  p-2 text-2xl font-light border"
                      onChange={(e) => handleChange(e)}
                      value={number}
                    />
                  </div>
                  <div>
                    <FormBtn type="submit" loading={loading}>
                      {language ? "تسجيل الدخول" : "Sign In"}
                    </FormBtn>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
