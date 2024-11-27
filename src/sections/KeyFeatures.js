import React from "react";
import HeadingStyleTwo from "../components/HeadingStyleTwo";
import ContentStyleTwo from "../components/ContentStyleTwo";
import { useTranslation } from "react-i18next";
import CustomButton from "../components/CustomButton";
import { Col, Row } from "react-bootstrap";
import ContentStyleOne from "../components/ContentStyleOne";

export default function KeyFeatures() {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="pt-2 pb-4 flex flex-col justify-center items-center gap-3">
        <div>
          <HeadingStyleTwo
            title={t("why_regtechflow_key_features_section.heading_small")}
            className={"font-bold text-sm text-[#6200EE]"}
          />
        </div>
        <div>
          <HeadingStyleTwo
            title={t("why_regtechflow_key_features_section.heading_big")}
            className={"font-bold text-4xl text-[#6200EE]"}
          />
        </div>
        <div className="flex flex-row justify-center items-center">
          <ContentStyleTwo
            titleStart={t(
              "why_regtechflow_key_features_section.paragraph_start"
            )}
            className={"text-gray-500 text-sm w-full md:w-full lg:w-4/6"}
            classNameSpan={"text-gray-500 font-bold"}
          />
        </div>
        <div>
          <CustomButton
            className={
              "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-6 py-2"
            }
            onClick={() => {
              console.log("login working");
            }}
            label={t("Request_demo_text")}
            disabled={false}
            style={{ borderWidth: "2px", borderColor: "#6200EE" }} // Pass custom styles
          />
        </div>

        <div className="w-full">
          <Row className="flex flex-row justify-center items-center">
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={4}
              xxl={4} // Adjust sizes as needed
            >
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-6">
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2">
                  <div>
                    <HeadingStyleTwo
                      title={t(
                        "why_regtechflow_key_features_section.title_one"
                      )}
                      className={"font-bold text-xl text-[#1E1E1E]"}
                    />
                  </div>
                  <div>
                    <ContentStyleOne
                      titleStart={""} // Adjust as needed
                      titleEnd={t(
                        "why_regtechflow_key_features_section.paragraph_one"
                      )}
                      textDirection={"text-left"}
                      className={"text-gray-500 text-sm w-full"}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2">
                  <div>
                    <HeadingStyleTwo
                      title={t(
                        "why_regtechflow_key_features_section.title_three"
                      )}
                      className={"font-bold text-xl text-[#1E1E1E]"}
                    />
                  </div>
                  <div>
                    <ContentStyleOne
                      titleStart={""} // Adjust as needed
                      titleEnd={t(
                        "why_regtechflow_key_features_section.paragraph_three"
                      )}
                      textDirection={"text-left"}
                      className={"text-gray-500 text-sm w-full"}
                    />
                  </div>
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
                  src="./assets/keyfeatures/keyfeatures.svg"
                  alt="Key Features"
                />
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
              <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-6">
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2">
                  <div>
                    <HeadingStyleTwo
                      title={t(
                        "why_regtechflow_key_features_section.title_two"
                      )}
                      className={"font-bold text-xl text-[#1E1E1E]"}
                    />
                  </div>
                  <div>
                    <ContentStyleOne
                      titleStart={""} // Adjust as needed
                      titleEnd={t(
                        "why_regtechflow_key_features_section.paragraph_two"
                      )}
                      textDirection={"text-left"}
                      className={"text-gray-500 text-sm w-full"}
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-center lg:items-start gap-2">
                  <div>
                    <HeadingStyleTwo
                      title={t(
                        "why_regtechflow_key_features_section.title_four"
                      )}
                      className={"font-bold text-xl text-[#1E1E1E]"}
                    />
                  </div>
                  <div>
                    <ContentStyleOne
                      titleStart={""} // Adjust as needed
                      titleEnd={t(
                        "why_regtechflow_key_features_section.paragraph_four"
                      )}
                      textDirection={"text-left"}
                      className={"text-gray-500 text-sm w-full"}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
