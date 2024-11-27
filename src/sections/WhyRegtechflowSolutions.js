import React from "react";
import { useTranslation } from "react-i18next";
import HeadingStyleTwo from "../components/HeadingStyleTwo";
import ContentStyleOne from "../components/ContentStyleOne";
import ContentStyleTwo from "../components/ContentStyleTwo";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "../components/CustomButton";

export default function WhyRegtechflowSolutions() {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="pt-5 pb-2 flex flex-col justify-center items-center gap-3">
        <div>
          <HeadingStyleTwo
            title={t("why_regtechflow_solutions_section.heading_small")}
            className={"font-bold text-sm text-[#6200EE]"}
          />
        </div>
        <div>
          <HeadingStyleTwo
            title={t("why_regtechflow_solutions_section.heading_big")}
            className={"font-bold text-4xl text-[#6200EE]"}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <ContentStyleTwo
            titleStart={t("why_regtechflow_solutions_section.paragraph_start")}
            titleCenter={t(
              "why_regtechflow_solutions_section.paragraph_center"
            )}
            titleEnd={t("why_regtechflow_solutions_section.paragraph_end")}
            className={"text-gray-500 text-sm w-full md:w-full lg:w-4/6"}
            classNameSpan={"text-gray-500 font-bold"}
          />
        </div>
        <div className="w-full py-8">
          <Row className="gap-3">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6} // Adjust sizes as needed
            >
              <div className="flex flex-col justify-center items-center md:items-center lg:items-end gap-2 h-full">
                <div>
                  <HeadingStyleTwo
                    title={t("why_regtechflow_solutions_section.title_1")}
                    className={"font-bold text-xl text-[#1E1E1E]"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t(
                      "why_regtechflow_solutions_section.paragraph_1"
                    )}
                    textDirection={"text-right"}
                    className={"text-gray-500 text-sm w-full"}
                  />
                </div>
                <div>
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm py-2"
                    }
                    onClick={() => {
                      console.log("login working");
                    }}
                    label={
                      <>
                        <div className="flex flex-row justify-start items-center gap-1">
                          {t("learn_more_text")}
                          <Icon
                            icon="mynaui:arrow-right"
                            className="text-2xl"
                          />
                        </div>
                      </>
                    }
                    disabled={false}
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xxl={4} // Adjust sizes as needed
            >
              <div className="flex flex-row justify-center items-center">
                <img
                  src="./assets/solutions/cooporate_management.svg"
                  alt="Cooporate Management"
                />
              </div>
            </Col>
          </Row>

          <Row className="gap-3 flex flex-col-reverse md:flex-row">
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xxl={4} // Adjust sizes as needed
            >
              <div className="flex flex-row justify-center items-center">
                <img
                  src="./assets/solutions/license_management.svg"
                  alt="License Management"
                />
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
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2 h-full">
                <div>
                  <HeadingStyleTwo
                    title={t("why_regtechflow_solutions_section.title_1")}
                    className={"font-bold text-xl text-[#1E1E1E]"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t(
                      "why_regtechflow_solutions_section.paragraph_1"
                    )}
                    textDirection={"text-left"}
                    className={"text-gray-500 text-sm w-full"}
                  />
                </div>
                <div>
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm py-2"
                    }
                    onClick={() => {
                      console.log("login working");
                    }}
                    label={
                      <>
                        <div className="flex flex-row justify-start items-center gap-1">
                          {t("learn_more_text")}
                          <Icon
                            icon="mynaui:arrow-right"
                            className="text-2xl"
                          />
                        </div>
                      </>
                    }
                    disabled={false}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <Row className="gap-3">
            <Col
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6} // Adjust sizes as needed
            >
              <div className="flex flex-col justify-center items-center md:items-center lg:items-end gap-2 h-full">
                <div>
                  <HeadingStyleTwo
                    title={t("why_regtechflow_solutions_section.title_3")}
                    className={"font-bold text-xl text-[#1E1E1E]"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t(
                      "why_regtechflow_solutions_section.paragraph_3"
                    )}
                    textDirection={"text-right"}
                    className={"text-gray-500 text-sm w-full"}
                  />
                </div>
                <div>
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm py-2"
                    }
                    onClick={() => {
                      console.log("login working");
                    }}
                    label={
                      <>
                        <div className="flex flex-row justify-start items-center gap-1">
                          {t("learn_more_text")}
                          <Icon
                            icon="mynaui:arrow-right"
                            className="text-2xl"
                          />
                        </div>
                      </>
                    }
                    disabled={false}
                  />
                </div>
              </div>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xxl={4} // Adjust sizes as needed
            >
              <div className="flex flex-row justify-center items-center">
                <img
                  src="./assets/solutions/compliance_monitoring.svg"
                  alt="Compliance Monitoring"
                />
              </div>
            </Col>
          </Row>

          <Row className="gap-3 flex flex-col-reverse md:flex-row">
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xxl={4} // Adjust sizes as needed
            >
              <div className="flex flex-row justify-center items-center">
                <img
                  src="./assets/solutions/consultants_advisors_solutions.svg"
                  alt="Consultants And Advisors Solutions"
                />
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
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2 h-full">
                <div>
                  <HeadingStyleTwo
                    title={t("why_regtechflow_solutions_section.title_4")}
                    className={"font-bold text-xl text-[#1E1E1E]"}
                  />
                </div>
                <div>
                  <ContentStyleOne
                    titleStart={""} // Adjust as needed
                    titleEnd={t(
                      "why_regtechflow_solutions_section.paragraph_4"
                    )}
                    textDirection={"text-left"}
                    className={"text-gray-500 text-sm w-full"}
                  />
                  <ul className="pt-3 list-disc space-y-2 pl-5">
                    <li className="text-gray-500 text-sm w-full">
                      {t(
                        "why_regtechflow_solutions_section.paragraph_four_point_one"
                      )}
                    </li>
                    <li className="text-gray-500 text-sm w-full">
                      {t(
                        "why_regtechflow_solutions_section.paragraph_four_point_two"
                      )}
                    </li>
                    <li className="text-gray-500 text-sm w-full">
                      {t(
                        "why_regtechflow_solutions_section.paragraph_four_point_three"
                      )}
                    </li>
                    <li className="text-gray-500 text-sm w-full">
                      {t(
                        "why_regtechflow_solutions_section.paragraph_four_point_four"
                      )}
                    </li>
                  </ul>
                </div>
                <div>
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm py-2"
                    }
                    onClick={() => {
                      console.log("login working");
                    }}
                    label={
                      <>
                        <div className="flex flex-row justify-start items-center gap-1">
                          {t("learn_more_text")}
                          <Icon
                            icon="mynaui:arrow-right"
                            className="text-2xl"
                          />
                        </div>
                      </>
                    }
                    disabled={false}
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
