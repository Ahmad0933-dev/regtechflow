import React from "react";
import { useTranslation } from "react-i18next";
import HeadingStyleTwo from "../components/HeadingStyleTwo";
import ContentStyleOne from "../components/ContentStyleOne";
import ContentStyleTwo from "../components/ContentStyleTwo";
import { Col, Row } from "react-bootstrap";

export default function WhatWeDo() {
  const [t] = useTranslation("global");

  // Create an array for the dynamic content
  const sections = [
    {
      title: t("what_we_do_section.title_1"),
      paragraph: t("what_we_do_section.paragraph_1"),
    },
    {
      title: t("what_we_do_section.title_2"),
      paragraph: t("what_we_do_section.paragraph_2"),
    },
    {
      title: t("what_we_do_section.title_3"),
      paragraph: t("what_we_do_section.paragraph_3"),
    },
    {
      title: t("what_we_do_section.title_4"),
      paragraph: t("what_we_do_section.paragraph_4"),
    },
  ];

  return (
    <>
      <div className="py-5 flex flex-col justify-center items-center gap-3">
        <div>
          <HeadingStyleTwo
            title={t("what_we_do_section.heading_small")}
            className={"font-bold text-sm text-[#6200EE]"}
          />
        </div>
        <div>
          <HeadingStyleTwo
            title={t("what_we_do_section.heading_big")}
            className={"font-bold text-4xl text-[#6200EE]"}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <ContentStyleTwo
            titleStart={t("what_we_do_section.paragraph_start")}
            titleCenter={t("what_we_do_section.paragraph_center")}
            titleEnd={t("what_we_do_section.paragraph_end")}
            className={"text-gray-500 text-sm w-full md:w-full lg:w-3/5"}
            classNameSpan={"text-gray-500 font-bold"}
          />
        </div>
        <div className="w-full">
          <Row className="gap-3">
            {sections.map((section, index) => (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                xxl={5} // Adjust sizes as needed
              >
                <div>
                  <HeadingStyleTwo
                    title={section.title}
                    className={"font-bold text-xl text-[#1E1E1E]"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={section.paragraph}
                    textDirection={"text-left"}
                    className={"text-gray-500 text-sm w-full md:w-full lg:w-4/6"}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
