import Layout from '@src/components/layout';

const Home = () => {
  return (
    <div>main</div>
  );
};

Home.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Home;
