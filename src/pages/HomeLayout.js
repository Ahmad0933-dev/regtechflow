import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../sections/Hero";
import WhatWeDo from "../sections/WhatWeDo";
import WhyRegtechflowSolutions from "../sections/WhyRegtechflowSolutions";
import KeyFeatures from "../sections/KeyFeatures";
import Security from "../sections/Security";
import Privacy from "../sections/Privacy";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Faq from "../sections/Faq";
import NewsLetter from "../sections/NewsLetter";

export default function HomeLayout() {
  return (
    <>
      <Container>
        <Hero />
      </Container>
      <div className="bg-[#F1EFF166]">
        <Container>
          <WhatWeDo />
        </Container>
      </div>
      <Container>
        <WhyRegtechflowSolutions />
      </Container>
      <Container>
        <KeyFeatures />
      </Container>
      <div className="bg-[#6200EE]">
        <Container>
          <Security />
        </Container>
      </div>
      <Container>
        <Privacy />
      </Container>
      <Container>
        <Faq />
      </Container>
      <div className="bg-[#F1EFF166]">
        <Container>
          <NewsLetter />
        </Container>
      </div>
    </>
  );
}
