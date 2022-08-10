import Layout from '@src/components/layout';
import Header from '@src/components/clients/header';
import List from '@src/components/clients/members';

const Clients = () => {
  return (
    <>
      <Header />
      <List />
    </>
  );
};

Clients.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Clients;
