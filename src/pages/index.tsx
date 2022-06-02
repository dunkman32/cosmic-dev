import Layout from '@src/components/layout';
import MainsHeader from '@src/components/home/header';
import Partner from '@src/components/home/partner';

const Home = () => {
  return (
    <>
      <MainsHeader />
      <Partner />
    </>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
