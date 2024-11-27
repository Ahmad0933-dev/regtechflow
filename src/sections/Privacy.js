import React from "react";
import HeadingStyleTwo from "../components/HeadingStyleTwo";
import ContentStyleTwo from "../components/ContentStyleTwo";
import { useTranslation } from "react-i18next";
import CustomButton from "../components/CustomButton";
import { Col, Row } from "react-bootstrap";
import ContentStyleOne from "../components/ContentStyleOne";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Privacy() {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="p-5 flex flex-col justify-center items-center gap-3">
        <div>
          <HeadingStyleTwo
            title={t("privacy_section.heading_small")}
            className={"font-bold text-sm text-[#6200EE]"}
          />
        </div>
        <div>
          <HeadingStyleTwo
            title={t("privacy_section.heading_big")}
            className={"font-bold text-4xl text-[#6200EE]"}
          />
        </div>
        <div className="mt-3 flex flex-row justify-center items-center">
          <ContentStyleTwo
            titleStart={t("privacy_section.paragraph_start")}
            titleCenter={t("privacy_section.paragraph_center")}
            titleEnd={t("privacy_section.paragraph_end")}
            className={"text-gray-500 text-sm w-full md:w-full lg:w-4/6"}
            classNameSpan={"text-gray-500 font-bold"}
          />
        </div>
        <div className="py-5">
          <Row>
            <Col>
              <div>
                <img src="./assets/privacy/privacy_one.svg" alt="Privacy" />
              </div>
            </Col>
            <Col>
              <div>
                <img src="./assets/privacy/privacy_two.svg" alt="Privacy" />
              </div>
            </Col>
          </Row>
        </div>
        <div>
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
                  {t("read_more_text")}
                  <Icon icon="quill:link-out" className="text-xl" />
                </div>
              </>
            }
            disabled={false}
            style={{ borderWidth: "2px", borderColor: "#6200EE" }} // Pass custom styles
          />
        </div>
      </div>
    </>
  );
}
