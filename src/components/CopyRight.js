import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import useMedia from "use-media";

export default function CopyRight() {
  const isLg = useMedia({ minWidth: 1024 });
  const [t] = useTranslation("global");
  return (
    <>
      <div className="py-5">
        <Container>
          <Row>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className="mt-3">
              <div
                className={`font-medium text-base text-gray-400 ${
                  isLg ? "text-left" : "text-center"
                }`}
              >
                {t("footer.copyright_text")}
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className="mt-3">
              <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-start gap-2 md:gap-2 lg:gap-6">
                <div className="font-medium text-base text-gray-400">
                  {t("footer.terms_text")}
                </div>
                <div className="font-medium text-base text-gray-400">
                  {t("footer.privacy_policy")}
                </div>
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} xxl={4} className="mt-3">
              <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center md:items-center lg:items-start gap-4 md:gap-4 lg:gap-6">
                <div className="font-medium text-base text-gray-400">
                  <LanguageSwitcher />
                </div>
                <div className="flex flex-row justify-end items-center gap-3">
                  <div>
                    <Icon
                      icon="mdi:linkedin"
                      className="text-2xl text-[#290064]"
                    />
                  </div>
                  <div>
                    <Icon
                      icon="ic:baseline-facebook"
                      className="text-2xl text-[#290064]"
                    />
                  </div>
                  <div>
                    <Icon
                      icon="mdi:instagram"
                      className="text-2xl text-[#290064]"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
