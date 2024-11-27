import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

export default function Header() {
  const [t] = useTranslation("global");
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "#FAF9FA" }}
        >
          <Container>
            <Navbar.Brand>
              <Link to={"/"}>
                <img src="./assets/navbar/primarylogo.svg" alt="RegTechFlow" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to={"/"}>
                    <img
                      src="./assets/navbar/primarylogo.svg"
                      alt="RegTechFlow"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <NavDropdown
                    title={t("navbar.solutions")}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                      Another action
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>
                    <Link to={"/security"} className="no-underline text-black">
                      {t("navbar.security")}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/about-us"} className="no-underline text-black">
                      {t("navbar.about_us")}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/contact"} className="no-underline text-black">
                      {t("navbar.contact")}
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={"/blog"} className="no-underline text-black">
                      {t("navbar.blog")}
                    </Link>
                  </Nav.Link>
                </Nav>
                <div className="flex flex-row justify-start items-center gap-3">
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[#510AC9] bg-transparent hover:bg-[#AF8EE6] focus:ring-4 focus:ring-white font-medium rounded-full text-sm px-6 py-2"
                    }
                    onClick={() => {
                      console.log("login working");
                    }}
                    label={t("navbar_btn.login")}
                    disabled={false}
                    style={{ borderWidth: "2px", borderColor: "#6200EE" }} // Pass custom styles
                  />
                  <CustomButton
                    className={
                      "cursor-pointer focus:outline-none text-[white] bg-[#510AC9] hover:bg-[#510AC9] focus:ring-4 focus:ring-white border border-customPurple font-medium rounded-full text-sm px-6 py-2"
                    }
                    onClick={() => {
                      console.log("demo working");
                    }}
                    label={t("navbar_btn.demo")}
                    disabled={false}
                  />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Outlet />

      <Footer />
      <CopyRight />
    </>
  );
}
