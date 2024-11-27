import React from "react";
import { Col, Row } from "react-bootstrap";
import HeadingStyleOne from "../components/HeadingStyleOne";
import CustomButton from "../components/CustomButton";
import { useTranslation } from "react-i18next";
import ContentStyleOne from "../components/ContentStyleOne";
import { Icon } from "@iconify/react";

export default function Hero() {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="py-5">
        <Row className="flex flex-row justify-between items-center">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <div className="flex flex-col justify-center items-center md:items-center lg:items-start py-2 md:py-2 lg:py-14 gap-8">
              <HeadingStyleOne
                titleStart={t("hero_section.heading_start")}
                titleCenter={t("hero_section.heading_center")}
                titleEnd={t("hero_section.heading_end")}
                className={
                  "font-extrabold text-5xl leading-snug w-full md:w-full lg:w-4/5"
                }
                classNameSpan={"text-[#6200EE]"} // Alag class span ke liye
              />

              <ContentStyleOne
                titleStart={t("hero_section.paragraph_start")}
                titleEnd={t("hero_section.paragraph_end")}
                textDirection={"text-left"}
                className={"text-gray-500 text-lg w-full md:w-full lg:w-4/5"}
                classNameSpan={"text-gray-500 font-bold"} // Alag class span ke liye
              />

              <CustomButton
                className={
                  "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-6 py-2"
                }
                onClick={() => {
                  console.log("login working");
                }}
                label={
                  <>
                    <div className="flex flex-row justify-start items-center gap-1">
                      {t("hero_section.hero_btn")}
                      <Icon icon="mynaui:arrow-right" className="text-2xl" />
                    </div>
                  </>
                }
                disabled={false}
                style={{ borderWidth: "2px", borderColor: "#6200EE" }} // Pass custom styles
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6}>
            <img src="./assets/hero/hero_right.svg" alt="right-image" />
          </Col>
        </Row>
      </div>
    </>
  );
}
