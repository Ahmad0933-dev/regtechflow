import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Testing() {
  const language = useSelector((state) => state.language.language);
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div>Home Content Language: {t("navbar.solutions")}</div>
    </>
  );
}
