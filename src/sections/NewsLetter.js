import React, { useState } from "react";
import HeadingStyleOne from "../components/HeadingStyleOne";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import CustomButton from "../components/CustomButton";

export default function NewsLetter() {
  const [t] = useTranslation("global");

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    company: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formValues.fullName.trim())
      newErrors.fullName = t("news_letter_section.full_name_error");
    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = t("news_letter_section.email_error");
    if (!formValues.company.trim())
      newErrors.company = t("news_letter_section.company_error");
    if (!formValues.agreed)
      newErrors.agreed = t("news_letter_section.checkbox_error");

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Submitted:", formValues);
      setFormValues({ fullName: "", email: "", company: "", agreed: false });
    }
  };

  return (
    <div className="p-5 flex flex-col justify-center items-center gap-3">
      <HeadingStyleOne
        titleStart={t("news_letter_section.heading_small")}
        titleCenter={t("news_letter_section.heading_big")}
        titleEnd={""}
        className={
          "font-extrabold text-xl md:text-2xl lg:text-5xl leading-snug w-full md:w-full lg:w-3/5"
        }
        classNameSpan={"text-[#6200EE]"}
      />
      <div className="w-full md:w-full lg:w-3/4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>{t("news_letter_section.full_name")}</Form.Label>
            <Form.Control
              name="fullName"
              placeholder={t("news_letter_section.full_name_placeholder")}
              value={formValues.fullName}
              onChange={handleChange}
              isInvalid={!!errors.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>{t("news_letter_section.email")}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder={t("news_letter_section.email_placeholder")}
              value={formValues.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCompany">
            <Form.Label>{t("news_letter_section.company")}</Form.Label>
            <Form.Control
              name="company"
              placeholder={t("news_letter_section.company_placeholder")}
              value={formValues.company}
              onChange={handleChange}
              isInvalid={!!errors.company}
            />
            <Form.Control.Feedback type="invalid">
              {errors.company}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              name="agreed"
              type="checkbox"
              label={
                <>
                  {t("news_letter_section.checkbox_text_start")}{" "}
                  <span style={{ color: "#6200EE" }}>
                    {t("news_letter_section.checkbox_text_center")}
                  </span>{" "}
                  {t("news_letter_section.checkbox_text_end")}
                </>
              }
              checked={formValues.agreed}
              onChange={handleChange}
              isInvalid={!!errors.agreed}
            />
            <Form.Control.Feedback type="invalid">
              {errors.agreed}
            </Form.Control.Feedback>
          </Form.Group>

          <CustomButton
            className={
              "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-6 py-2"
            }
            onClick={handleSubmit}
            label={t("subscribe_text")}
            disabled={false}
            style={{ borderWidth: "2px", borderColor: "#6200EE" }}
          />
        </Form>
      </div>
    </div>
  );
}
