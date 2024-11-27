import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/actions/languageActions";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";

const LanguageSwitcher = () => {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");

  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang));
    i18n
      .changeLanguage(language === "en" ? "es" : "en")
      .then(window.location.reload());
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center py-1 px-2 rounded-full border-2 border-[#290064]">
        {/* <select
          className="py-1 px-1 rounded-full"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          style={{ borderWidth: "2px", borderColor: "#6200EE" }} // Pass custom styles
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select> */}
        {/* Globe Icon */}
        <Icon icon="heroicons:globe-alt" className="text-xl text-[#290064]" />

        {/* Dropdown for Language Selection */}
        <select
          className="text-sm"
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
    </>
  );
};

export default LanguageSwitcher;
