import React, { lazy, Suspense, useState } from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Helmet from 'react-helmet';
import { t } from 'i18next';
import NavMenu from './components/NavMenu';
import Greeting from './components/Greeting';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Text from './components/Text';



function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
      <Helmet htmlAttributes={{
          lang: locale,
          dir: locale === 'en' ? 'ltr' : 'rtl',
          font: locale === 'en' ? 'fontEn' : 'fontAr'
        }} />
        <ThemeProvider dir={locale === 'en' ? 'ltr' : 'rtl'}></ThemeProvider>
        <Navigation />
          <Container fluid className={locale === 'en' ? 'fontEn' : 'fontAr' }>
            <NavMenu />
            <Greeting />
            <Text />
          </Container>
	</Suspense>
</LocaleContext.Provider>
    </>
  );
}

export default App;