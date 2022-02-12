import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from '../LocaleContext';
import React, { useContext,  } from "react";
import i18n from '../i18n';
import { Beverage } from './Beverage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


function Navigation () {
  const { locale } = useContext(LocaleContext);
  const { t } = useTranslation();

  function changeLocale (l) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }
  return (
    
    <Navbar bg="success" expand="lg">
      <Container>
        
          <Nav className="{locale === 'en' ? 'ms-auto' : 'me-auto'}">
          <NavDropdown title={t('language')} id="basic-nav-dropdown" className="lang-dropdown">
            <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => changeLocale('ar')}>العربية</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        
        <Beverage />
      </Container>
    </Navbar>
  );
}



export default Navigation;