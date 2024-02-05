import { useEffect, useState } from "react";
import i18n from "../language/i18n";

const useLanguage = () => {
  const [language, setLanguage] = useState(
    window.localStorage.getItem("preferredLanguage") || "en"
  );

  const changeLanguage = (language) => {
    window.localStorage.setItem("preferredLanguage", language);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: language })
    );
  };

  useEffect(() => {
    const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.detail);
      setLanguage(event.detail);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return { changeLanguage, language };
};
export default useLanguage;
