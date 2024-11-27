import React from "react";
import HeadingStyleTwo from "../components/HeadingStyleTwo";
import ContentStyleTwo from "../components/ContentStyleTwo";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-bootstrap";
import ContentStyleOne from "../components/ContentStyleOne";

export default function Security() {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="p-5 flex flex-col justify-center items-center gap-3 text-white">
        <div>
          <HeadingStyleTwo
            title={t("security_section.heading_small")}
            className={"font-bold text-sm text-white"}
          />
        </div>
        <div>
          <HeadingStyleTwo
            title={t("security_section.heading_big")}
            className={"font-bold text-4xl text-white"}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <ContentStyleTwo
            titleStart={t("security_section.paragraph_start")}
            className={" text-white text-sm w-full md:w-full lg:w-4/6"}
            classNameSpan={"text-white font-bold"}
          />
        </div>

        <div className="w-full">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6} // Adjust sizes as needed
            >
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-3">
                <div>
                  <img
                    src="./assets/security/security_one.svg"
                    alt="Security"
                  />
                </div>
                <div>
                  <HeadingStyleTwo
                    title={t("security_section.title_one")}
                    className={"font-bold text-4xl text-white"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t("security_section.paragraph_one")}
                    textDirection={"text-left"}
                    className={"text-white text-sm w-full md:w-full lg:w-4/6"}
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6} // Adjust sizes as needed
            >
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-3">
                <div>
                  <img
                    src="./assets/security/security_two.svg"
                    alt="Security"
                  />
                </div>
                <div>
                  <HeadingStyleTwo
                    title={t("security_section.title_two")}
                    className={"font-bold text-4xl text-white"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t("security_section.paragraph_two")}
                    textDirection={"text-left"}
                    className={"text-white text-sm w-full md:w-full lg:w-4/6"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
