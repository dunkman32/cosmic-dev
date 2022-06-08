// eslint-disable-next-line import/no-unresolved
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { NextPage } from 'next';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider as SCThemeProvider, ThemeProvider } from 'styled-components';
import Provider from '@src/components/provider';
import { GlobalStyle } from '@src/components/shared/globalStyled';

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
    </ThemeProvider>
  );
}

export default MyApp;
