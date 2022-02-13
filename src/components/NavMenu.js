import React from 'react';
import { t } from 'i18next';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

 function NavMenu() {
  return (
    <Container>
      <div className="d-flex justify-content-between">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className=''>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features">{t('home-link')}</Nav.Link>
            <Nav.Link href="#pricing">{t('about-link')}</Nav.Link>
            <NavDropdown title={t('departments-link')} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">{t('develop-link')}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">{t('elearn-link')}</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">{t('tech-link')}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">{t('female-link')}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
  
    </Navbar>
    <Navbar.Brand href="#home">
        <img src={t('img-path')} className='img-fluid' />{' '}
      </Navbar.Brand>
  </div>
  </Container>
  )
}


export default NavMenu