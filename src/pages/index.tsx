import Layout from '@src/components/layout';
import MainsHeader from '@src/components/home/header';

const Home = () => {
  return (
    <MainsHeader />
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
