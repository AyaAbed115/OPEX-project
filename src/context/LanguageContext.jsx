import { useState } from "react";
import { LanguageContext } from "./LanguageContextValue";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

