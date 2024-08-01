// eslint-disable-next-line import/no-unresolved
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { NextPage } from 'next';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as SCThemeProvider, ThemeProvider } from 'styled-components';
import Provider from '@src/components/provider';
import { GlobalStyle } from '@src/components/shared/globalStyled';
// eslint-disable-next-line import/no-unresolved
// import 'animate.css/animate.min.css';
// service_qta621b
export interface AppPropsWithLayout extends AppProps {
  Component: NextPage & {
    getLayout?: (page: JSX.Element) => JSX.Element;
  };
}

function MyApp({ Component, pageProps, ...props }: AppPropsWithLayout) {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <SCThemeProvider theme={{}}>
        <CssBaseline />
        <GlobalStyle />
        <Provider Component={Component} pageProps={pageProps} {...props} />
      </SCThemeProvider>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      />
    </ThemeProvider>
  );
}

export default MyApp;
