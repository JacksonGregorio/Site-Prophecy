import "../../lenguages/i18n";
import logo from "../../assets/img/logo/logo.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function HeaderComponent() {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };

    const [setCurrentLanguage] = useState("pt");

    const { t, i18n } = useTranslation("translation", {
        keyPrefix: "HeaderCompenent",
    });

    const changeLenguage = (value) => {
        i18n.changeLanguage(value)
            .then(() => {
                setCurrentLanguage(value);
            })

            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <header id="header">
            <div id="header-fixed-height"></div>
            <Navbar bg="none" variant="dark" expand="lg" expanded={expanded}>
                <Navbar.Brand href="#home">
                    <div class="logo">
                        <a href="index.html">
                            <img src={logo} alt=""></img>
                        </a>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={toggleNavbar}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link
                            className="text-light pl-3 pr-3"
                            href="#banner"
                        >
                            {t("home")}
                        </Nav.Link>
                        <Nav.Link
                            className="text-light pl-3 pr-3"
                            href="#graph"
                        >
                            {t("graphics")}
                        </Nav.Link>
                        <Nav.Link className="text-light pl-3 pr-3" href="#team">
                            {t("team")}
                        </Nav.Link>
                        <Nav.Link className="text-light pl-3 pr-3" href="#faq">
                            {t("faq")}
                        </Nav.Link>
                        <Nav.Link
                            className="text-light pl-3 pr-3"
                            href="#contact"
                        >
                            {t("contactus")}
                        </Nav.Link>

                        <NavDropdown
                            title={t("PT-BR")}
                            id="basic-nav-dropdown"
                            className="custom-dropdown pl-3 pr-3"
                        >
                            <NavDropdown.Item
                                onClick={() => changeLenguage("pt")}
                            >
                                PT-BR
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => changeLenguage("en")}
                            >
                                EN-US
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                onClick={() => changeLenguage("es")}
                            >
                                ES-ES
                            </NavDropdown.Item>
                        </NavDropdown>

                        <button class="custom-button">{t("contact")}</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div class="area-bg"></div>
        </header>
    );
}

export default HeaderComponent;
