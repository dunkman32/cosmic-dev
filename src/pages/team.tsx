import Layout from '@src/components/layout';
import Header from '@src/components/team/header';
import List from '@src/components/team/members';

const Team = () => {
  return (
    <>
      <Header />
      <List />
    </>
  );
};

Team.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Team;
