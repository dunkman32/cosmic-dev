import Layout from '@src/components/layout';
import Header from '@src/components/projects/header';
import List from '@src/components/projects/projects';

const Projects = () => {
  return (
    <>
      <Header />
      <List />
    </>
  );
};

Projects.getLayout = (page: JSX.Element) => <Layout>{page}</Layout>;

export default Projects;
