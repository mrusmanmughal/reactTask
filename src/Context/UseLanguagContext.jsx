import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const Language = ({ children }) => {
  const [language, setlanguage] = useState(false);
  return (
    <LanguageContext.Provider value={{ language, setlanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const GetLanguage = () => {
  const lang = useContext(LanguageContext);
  return lang;
};
export { Language, GetLanguage };
