import Header from '@src/components/layout/header';
import Footer from '@src/components/layout/footer';

interface Props {
    children: JSX.Element | JSX.Element[] | string;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
