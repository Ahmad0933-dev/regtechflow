import React from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Faq() {
  const [t] = useTranslation("global");

  // Array of questions and answers
  const faqData = Array.from({ length: 12 }, (_, index) => ({
    question: t(`faq_section.question_${index + 1}`),
    answer: t(`faq_section.answer_${index + 1}`),
  }));

  return (
    <div className="p-5">
      <Row className="flex flex-row justify-center items-center">
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          xxl={6} // Adjust sizes as needed
        >
          <div className="flex flex-row justify-center items-center">
            <img src="./assets/faq/faq.svg" alt="FAQ's" />
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
          <div className="w-full">
            <Accordion defaultActiveKey="0">
              {faqData.map((faq, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>
    </div>
  );
}
