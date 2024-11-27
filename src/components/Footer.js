import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Footer() {
  const [t] = useTranslation("global");
  return (
    <>
      <div className="hidden md:block py-5">
        <Container>
          <Row>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <Link to={"/"}>
                <img src="./assets/navbar/primarylogo.svg" alt="RegTechFlow" />
              </Link>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="font-semibold text-base">
                  {t("footer.solutions")}
                </div>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.solutions_menu.corporate_management")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.solutions_menu.license_management")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.solutions_menu.compliance_monitoring")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.solutions_menu.consultants_advisors_solutions")}
                </Link>
              </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="font-semibold text-base">
                  {t("footer.security")}
                </div>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.data_security_encryption")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.real_time_notifications")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.security_audits")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.access_controls")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.authentication")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.backup_replication")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.cloud_hosting_solutions")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.security_menu.certifications")}
                </Link>
              </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="font-semibold text-base">
                  {t("footer.about_us")}
                </div>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.about_us_menu.our_story")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.about_us_menu.our_core_values")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.about_us_menu.meet_team")}
                </Link>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.about_us_menu.careers")}
                </Link>
              </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="font-semibold text-base">
                  {t("footer.contact")}
                </div>
                <Link
                  to={"/"}
                  className="no-underline font-medium text-base text-gray-400"
                >
                  {t("footer.contact_menu.send_message")}
                </Link>
              </div>
            </Col>
            <Col sm={12} md={2} lg={2} xl={2} xxl={2}>
              <div className="flex flex-col justify-start items-start gap-3">
                <Link
                  to={"/"}
                  className="no-underline font-semibold text-base text-black"
                >
                  {t("footer.blog")}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
