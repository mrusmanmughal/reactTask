import { GetLanguage } from "../Context/UseLanguagContext";
const EnglishBtn = () => {
  const { language, setlanguage } = GetLanguage();
  console.log(language);
  return (
    <button
      className="px-5 py-3 bg-BlueT rounded-md font-bold my-3"
      onClick={() => setlanguage(!language)}
    >
      {language ? "ENGLISH" : "العربية"}
    </button>
  );
};

export default EnglishBtn;
