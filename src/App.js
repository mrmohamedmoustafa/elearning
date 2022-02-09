import React, { lazy, Suspense, useState } from 'react';
import { Container, ThemeProvider } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './i18n';
import LocaleContext from './LocaleContext';
import Greeting from './components/Greeting';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Text from './components/Text';
import Helmet from 'react-helmet';

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  return (
    <>
    <LocaleContext.Provider value={{locale, setLocale}}>
      <Suspense fallback={<Loading />}>
      <Helmet htmlAttributes={{
          lang: locale,
          dir: locale === 'en' ? 'ltr' : 'rtl'
        }} />
        <ThemeProvider dir={locale === 'en' ? 'ltr' : 'rtl'}></ThemeProvider>
        <Navigation />
          <Container>
            <Greeting />
            <Text />
          </Container>
	</Suspense>
</LocaleContext.Provider>
    </>
  );
}

export default App;