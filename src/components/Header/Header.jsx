
import '../../utils/i18n'
import logo from "../../assets/img/logo/logo.png";
import {useTranslation} from 'react-i18next'
import { useState } from "react";
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';




function HeaderComponent() {

  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const [currentLanguage, setCurrentLeanguage] = useState('pt')
 

  const{t, i18n}= useTranslation('translation', {keyPrefix:'HeaderCompenent'});

  const changeLenguage = value => {
    i18n.changeLanguage(value)
    .then(() => {
      setCurrentLeanguage(value)
    })

    .catch((err) => {
      console.log(err);
    })

  } 

  return (
    <header id="header">
    <div id="header-fixed-height"></div>
    <Navbar bg="none" variant="dark" expand="lg" expanded={expanded}>
      <Navbar.Brand href="#home"><div class="logo">
      <a href="index.html"><img src={logo} alt=""></img></a>
      </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          
          <Nav.Link className="text-light" href="#banner">{t("Inicio")}</Nav.Link>
          <Nav.Link className="text-light" href="#graph">{t("Gráfico")}</Nav.Link>
          <Nav.Link className="text-light" href="#team">{t("Time")}</Nav.Link>
          <Nav.Link className="text-light" href="#faq">{t("Perguntas")}</Nav.Link>
          <Nav.Link className="text-light" href="#contact">{t("Contatos")}</Nav.Link>
          
          
          <NavDropdown title={t('PT-BR')} id="basic-nav-dropdown" className="custom-dropdown">
            <NavDropdown.Item onClick={() => changeLenguage('pt')}>PT-BR</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLenguage('en')}>EN-US</NavDropdown.Item>
            <NavDropdown.Item onClick={() => changeLenguage('es')}>ES-ES</NavDropdown.Item>
          </NavDropdown>
          
          <li className="header-btn"><a href="#" class="btn">{t("Comprar")}</a></li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div class="area-bg"></div>
</header>

  );
}

export default HeaderComponent;
