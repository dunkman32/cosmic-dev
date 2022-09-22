import Layout from '@src/components/layout';
import MainsHeader from '@src/components/home/header';
import Difference from '@src/components/home/difference';
import Partner from '@src/components/home/partner';
import Deliver from '@src/components/home/deliver';
import Stack from '@src/components/home/stack';

const Home = () => {
  return (
    <>
      <MainsHeader />
      <Stack />
      <Difference />
      <Deliver />
      <Partner />
    </>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
