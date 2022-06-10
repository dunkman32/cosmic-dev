import Layout from '@src/components/layout';
// import MainsHeader from '@src/components/home/header';
import Difference from '@src/components/home/difference';
import Partner from '@src/components/home/partner';
import Feature from '@src/components/home/features';
import Deliver from '@src/components/home/deliver';

const Home = () => {
  return (
    <>
      {/* <MainsHeader /> */}
      <Difference />
      <Feature />
      <Deliver />
      <Partner />
    </>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
