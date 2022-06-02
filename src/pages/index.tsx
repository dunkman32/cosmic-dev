import Layout from '@src/components/layout';
import MainsHeader from '@src/components/home/header';
import Difference from '@src/components/home/difference';
import Partner from '@src/components/home/partner';

const Home = () => {
  return (
    <>
      <MainsHeader />
      <Difference />
      <Partner />
    </>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
