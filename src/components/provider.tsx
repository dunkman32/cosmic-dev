/* eslint-disable import/no-unresolved */
import { AppPropsWithLayout } from '@src/pages/_app';

const CustomProvider = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default CustomProvider;
