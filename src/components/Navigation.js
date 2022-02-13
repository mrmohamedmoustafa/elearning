import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from "react-i18next";
import LocaleContext from '../LocaleContext';
import React, { useContext,  } from "react";
import i18n from '../i18n';
import { Beverage } from './Beverage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)


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
        <div className="d-flex flex-row">
          <div className='p2 dean-name'>{t('dean-name')}</div>
          <div className="p2 d-flex flex-row">
          <FontAwesomeIcon icon= {['fas', 'language']} className="p-1 text-white fs-5 text-white" />
              <Nav className="{locale === 'en' ? 'ms-auto' : 'me-auto'}">
              <NavDropdown  id="basic-nav-dropdown" className="lang-dropdown">
                <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => changeLocale('ar')}>العربية</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </div>
          </div>
        <Beverage />
      </Container>
    </Navbar>
  );
}



export default Navigation;