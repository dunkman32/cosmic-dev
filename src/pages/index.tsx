import Layout from '@src/components/layout';
import MainsHeader from '@src/components/home/header';
import Difference from '@src/components/home/difference';

const Home = () => {
  return (
    <>
      <MainsHeader />
      <Difference />
    </>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
